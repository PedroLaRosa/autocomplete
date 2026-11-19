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

const optAdditionalHeaders: Fig.Option = {
  name: "--additional-headers",
  description:
    "Includes arbitrary headers in storage API calls. Accepts a comma separated list of key=value pairs, e.g. `header1=value1,header2=value2`. Overrides the default *storage/additional_headers* property value for this command invocation",
  args: {
    name: "HEADER=VALUE",
    description: "String",
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

const optCacheControl: Fig.Option = {
  name: "--cache-control",
  description: "How caches should handle requests and responses",
  args: {
    name: "CACHE_CONTROL",
    description: "String",
  },
};

const optClearCustomContexts: Fig.Option = {
  name: "--clear-custom-contexts",
  description: "Clears all custom contexts on objects",
};

const optClearCustomMetadata: Fig.Option = {
  name: "--clear-custom-metadata",
  description:
    "Clears all custom metadata on objects. When used with `--preserve-posix`, POSIX attributes will still be stored in custom metadata",
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

const optContentDisposition: Fig.Option = {
  name: "--content-disposition",
  description: "How content should be displayed",
  args: {
    name: "CONTENT_DISPOSITION",
    description: "String",
  },
};

const optContentEncoding: Fig.Option = {
  name: "--content-encoding",
  description: "How content is encoded (e.g. ``gzip'')",
  args: {
    name: "CONTENT_ENCODING",
    description: "String",
  },
};

const optContentLanguage: Fig.Option = {
  name: "--content-language",
  description: "Content's language (e.g. ``en'' signifies \"English\")",
  args: {
    name: "CONTENT_LANGUAGE",
    description: "String",
  },
};

const optContentMd5: Fig.Option = {
  name: "--content-md5",
  description:
    "Manually specified MD5 hash digest for the contents of an uploaded file. This flag cannot be used when uploading multiple files. The custom digest is used by the cloud provider for validation",
  args: {
    name: "MD5_DIGEST",
    description: "String",
  },
};

const optContentType: Fig.Option = {
  name: "--content-type",
  description: "Type of data contained in the object (e.g. ``text/html'')",
  args: {
    name: "CONTENT_TYPE",
    description: "String",
  },
};

const optContinueOnError: Fig.Option = {
  name: ["--continue-on-error", "-c"],
  description:
    "If any operations are unsuccessful, the command will exit with a non-zero exit status after completing the remaining operations. This flag takes effect only in sequential execution mode (i.e. processor and thread count are set to 1). Parallelism is default",
};

const optCustomContexts: Fig.Option = {
  name: "--custom-contexts",
  description:
    "Sets custom contexts on objects. The existing custom contexts (if any) would be overwritten",
  args: {
    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
    description: "Dict",
  },
};

const optCustomContextsFile: Fig.Option = {
  name: "--custom-contexts-file",
  description:
    "Path to a local JSON or YAML file containing custom contexts one wants to set on an object. For example:",
  args: {
    name: "CUSTOM_CONTEXTS_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optCustomMetadata: Fig.Option = {
  name: "--custom-metadata",
  description:
    "Sets custom metadata on objects. When used with `--preserve-posix`, POSIX attributes are also stored in custom metadata",
  args: {
    name: "CUSTOM_METADATA_KEYS_AND_VALUES",
    description: "Dict",
  },
};

const optCustomTime: Fig.Option = {
  name: "--custom-time",
  description: "Custom time for Cloud Storage objects in RFC 3339 format",
  args: {
    name: "CUSTOM_TIME",
  },
};

const optDecryptionKeys: Fig.Option = {
  name: "--decryption-keys",
  description:
    "A comma-separated list of customer-supplied encryption keys (RFC 4648 section 4 base64-encoded AES256 strings) that will be used to decrypt Cloud Storage objects. Data encrypted with a customer-managed encryption key (CMEK) is decrypted automatically, so CMEKs do not need to be listed here",
  args: {
    name: "DECRYPTION_KEY",
    description: "List",
  },
};

const optEncryptionKey: Fig.Option = {
  name: "--encryption-key",
  description:
    "The encryption key to use for encrypting target objects. The specified encryption key can be a customer-supplied encryption key (An RFC 4648 section 4 base64-encoded AES256 string), or a customer-managed encryption key of the form `projects/{project}/locations/{location}/keyRings/{key-ring}/cryptoKeys/{crypto-key}`. The specified key also acts as a decryption key, which is useful when copying or moving encrypted data to a new location. Using this flag in an `objects update` command triggers a rewrite of target objects",
  hidden: true,
  args: {
    name: "ENCRYPTION_KEY",
    description: "String",
  },
};

const optEncryptionKey2: Fig.Option = {
  name: "--encryption-key",
  description:
    "The encryption key to use for encrypting target objects. The specified encryption key can be a customer-supplied encryption key (An RFC 4648 section 4 base64-encoded AES256 string), or a customer-managed encryption key of the form `projects/{project}/locations/{location}/keyRings/{key-ring}/cryptoKeys/{crypto-key}`. The specified key also acts as a decryption key, which is useful when copying or moving encrypted data to a new location. Using this flag in an `objects update` command triggers a rewrite of target objects",
  args: {
    name: "ENCRYPTION_KEY",
    description: "String",
  },
};

const optEtag: Fig.Option = {
  name: ["--etag", "-e"],
  description:
    "Custom etag to set on IAM policy. API will reject etags that do not match this value, making it useful as a precondition during concurrent operations",
  args: {
    name: "ETAG",
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

const optGzipInFlight: Fig.Option = {
  name: ["--gzip-in-flight", "-j"],
  description:
    "Applies gzip transport encoding to any file upload whose extension matches the input extension list. This is useful when uploading files with compressible content such as .js, .css, or .html files. This also saves network bandwidth while leaving the data uncompressed in Cloud Storage",
  args: {
    name: "FILE_EXTENSIONS",
    description: "List",
  },
};

const optGzipInFlightAll: Fig.Option = {
  name: ["--gzip-in-flight-all", "-J"],
  description:
    "Applies gzip transport encoding to file uploads. This option works like the `--gzip-in-flight` option described above, but it applies to all uploaded files, regardless of extension",
};

const optIfGenerationMatch: Fig.Option = {
  name: "--if-generation-match",
  description:
    "Execute only if the generation matches the generation of the requested object",
  args: {
    name: "GENERATION",
    description: "String",
  },
};

const optIfMetagenerationMatch: Fig.Option = {
  name: "--if-metageneration-match",
  description:
    "Execute only if the metageneration matches the metageneration of the requested object",
  args: {
    name: "METAGENERATION",
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
  description:
    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
  },
};

const optLocation: Fig.Option = {
  name: "--location",
  description: "Google Cloud location for the report-config",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "Insights supported Google Cloud location for the dataset-config",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "Location of the finding(s)",
  hidden: true,
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

const optMetadataFilter: Fig.Option = {
  name: "--metadata-filter",
  description:
    "Server side filtering for objects. Works only for Google Cloud Storage URLs. The filter only works for objects, and not directories or buckets, which means commands like `storage ls` and `storage du` will still list directories or buckets even if they do not contain any objects matching the filter. See https://cloud.google.com/storage/docs/listing-objects#filter-by-object-contexts-syntax for more details",
  args: {
    name: "METADATA_FILTER",
    description: "String",
  },
};

const optNoAll: Fig.Option = {
  name: "--no-all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
  hidden: true,
};

const optNoClearCustomContexts: Fig.Option = {
  name: "--no-clear-custom-contexts",
  description: "Clears all custom contexts on objects",
  hidden: true,
};

const optNoClearCustomMetadata: Fig.Option = {
  name: "--no-clear-custom-metadata",
  description:
    "Clears all custom metadata on objects. When used with `--preserve-posix`, POSIX attributes will still be stored in custom metadata",
  hidden: true,
};

const optNoClobber: Fig.Option = {
  name: ["--no-clobber", "-n"],
  description:
    "Do not overwrite existing files or objects at the destination. Skipped items will be printed. This option may perform an additional GET request for cloud objects before attempting an upload",
};

const optNoIgnoreSymlinks: Fig.Option = {
  name: "--no-ignore-symlinks",
  description: "Ignore file symlinks instead of copying what they point to",
  hidden: true,
};

const optNoPreserveAcl: Fig.Option = {
  name: "--no-preserve-acl",
  description:
    "Preserves ACLs when copying in the cloud. This option is Cloud Storage-only, and you need OWNER access to all copied objects. If all objects in the destination bucket should have the same ACL, you can also set a default object ACL on that bucket instead of using this flag. Preserving ACLs is the default behavior for updating existing objects",
};

const optNoRaw: Fig.Option = {
  name: "--no-raw",
  description:
    "Shows metadata in the format returned by the API instead of standardizing it",
  hidden: true,
};

const optNoReadPathsFromStdin: Fig.Option = {
  name: "--no-read-paths-from-stdin",
  description: "Read the list of URLs from stdin",
  hidden: true,
};

const optNoSoftDeleted: Fig.Option = {
  name: "--no-soft-deleted",
  description:
    "Displays soft-deleted resources only. For objects, it will exclude live and noncurrent ones",
  hidden: true,
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "Specifies organization id for the storage intelligence config",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optPredefinedAcl: Fig.Option = {
  name: ["--predefined-acl", "-a", "--canned-acl"],
  description:
    'Applies predefined, or "canned," ACLs to a resource. See docs for a list of predefined ACL constants: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl',
  args: {
    name: "PREDEFINED_ACL",
    description: "String",
  },
};

const optPreserveAcl: Fig.Option = {
  name: ["--preserve-acl", "-p"],
  description:
    "Preserves ACLs when copying in the cloud. This option is Cloud Storage-only, and you need OWNER access to all copied objects. If all objects in the destination bucket should have the same ACL, you can also set a default object ACL on that bucket instead of using this flag. Preserving ACLs is the default behavior for updating existing objects. Use *--preserve-acl* to enable and *--no-preserve-acl* to disable",
};

const optPreservePosix: Fig.Option = {
  name: ["--preserve-posix", "-P"],
  description:
    "Causes POSIX attributes to be preserved when objects are copied. With this feature enabled, gcloud storage will copy several fields provided by the stat command: access time, modification time, owner UID, owner group GID, and the mode (permissions) of the file",
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

const optRaw: Fig.Option = {
  name: "--raw",
  description:
    "Shows metadata in the format returned by the API instead of standardizing it",
};

const optReadPathsFromStdin: Fig.Option = {
  name: ["--read-paths-from-stdin", "-I"],
  description: "Read the list of URLs from stdin",
};

const optRemoveCustomContexts: Fig.Option = {
  name: "--remove-custom-contexts",
  description:
    "Removes the custom contexts on the object, if an entry is not found, it would be ignored",
  args: {
    name: "CUSTOM_CONTEXTS_KEYS",
    description: "List",
  },
};

const optRemoveCustomMetadata: Fig.Option = {
  name: "--remove-custom-metadata",
  description:
    "Removes individual custom metadata keys from objects. This flag can be used with `--update-custom-metadata`. When used with `--preserve-posix`, POSIX attributes specified by this flag are not preserved",
  args: {
    name: "METADATA_KEYS",
    description: "List",
  },
};

const optRetainUntil: Fig.Option = {
  name: "--retain-until",
  description:
    "Ensures the destination object is retained until the specified time in RFC 3339 format",
  args: {
    name: "DATETIME",
  },
};

const optRetentionMode: Fig.Option = {
  name: "--retention-mode",
  description:
    'Sets the destination object retention mode to either "Locked" or "Unlocked". When retention mode is "Locked", the retain until time can only be increased. _RETENTION_MODE_ must be one of: *Locked*, *Unlocked*',
  args: {
    name: "RETENTION_MODE",
    description: "String",
    suggestions: ["Locked", "Unlocked"],
  },
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

const optSkipUnsupported: Fig.Option = {
  name: ["--skip-unsupported", "-U"],
  description: "Skip objects with unsupported object types",
};

const optSoftDeleted: Fig.Option = {
  name: "--soft-deleted",
  description:
    "Displays soft-deleted resources only. For objects, it will exclude live and noncurrent ones",
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

const optSubFolder: Fig.Option = {
  name: "--sub-folder",
  description: "Specifies sub-folder id for the storage intelligence config",
  args: {
    name: "SUB_FOLDER",
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

const optUpdateCustomContexts: Fig.Option = {
  name: "--update-custom-contexts",
  description:
    "Updates the custom contexts on the object, if an entry is found, it would be overwritten, otherwise the entry would be added",
  args: {
    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
    description: "Dict",
  },
};

const optUpdateCustomMetadata: Fig.Option = {
  name: "--update-custom-metadata",
  description:
    "Adds or sets individual custom metadata key value pairs on objects. Existing custom metadata not specified with this flag is not changed. This flag can be used with `--remove-custom-metadata`. When keys overlap with those provided by `--preserve-posix`, values specified by this flag are used",
  args: {
    name: "CUSTOM_METADATA_KEYS_AND_VALUES",
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

const completionSpec: Fig.Spec = {
  name: "storage",
  description: "Create and manage Cloud Storage buckets and objects",
  subcommands: [
    {
      name: "batch-operations",
      description: "Manage Cloud Storage batch operations",
      subcommands: [
        {
          name: "jobs",
          description: "Manage Cloud Storage batch operations jobs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job",
              },
            },
            {
              name: "create",
              description: "Create a new batch operation job",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--bucket",
                  description:
                    "Bucket containing the objects that the batch job will operate on",
                  args: {
                    name: "BUCKET",
                    description: "String",
                  },
                },
                {
                  name: "--bucket-filters",
                  description:
                    "Filters expressed in Common Expression Language (CEL) to apply to buckets. E.g. \"bucket_name == 'my-bucket'\"",
                  args: {
                    name: "BUCKET_FILTERS",
                    description: "String",
                  },
                },
                {
                  name: "--bucket-list",
                  description:
                    "List of buckets containing the objects that the batch job will operate on",
                  args: {
                    name: "BUCKETS",
                    description: "List",
                  },
                },
                {
                  name: "--clear-all-object-custom-contexts",
                  description: "Clears all object custom contexts",
                },
                {
                  name: "--clear-object-custom-contexts",
                  description:
                    "Removes object custom contexts by key. If an entry is not found, it will be ignored. e.g. `--clear-object-custom-contexts=key1,key2`",
                  args: {
                    name: "CUSTOM_CONTEXTS_KEYS",
                    description: "List",
                  },
                },
                optConfiguration,
                {
                  name: "--delete-object",
                  description:
                    "If this flag is set, objects specified in source will be deleted. When versioning is enabled on the buckets, live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped",
                  priority: 100,
                },
                {
                  name: "--description",
                  description: "Description for the batch job",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--dry-run",
                  description:
                    "If true, the job will run in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations will be performed",
                },
                {
                  name: "--dry-run-job-id",
                  description:
                    "The unique identifier of a dry run job to use as the baseline. Specifying this ID ensures the job is executed against the same set of objects validated during the dry run",
                  args: {
                    name: "DRY_RUN_JOB_ID",
                    description: "String",
                  },
                },
                {
                  name: "--enable-permanent-object-deletion",
                  description:
                    "If this flag is set and versioning is enabled on the buckets, both live and noncurrent objects will be permanently deleted",
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
                  name: "--included-object-prefixes",
                  description:
                    "A comma-separated list of object prefixes to describe the objects being transformed. An empty string means all objects in the bucket",
                  args: {
                    name: "PREFIXES",
                    description: "List",
                  },
                },
                {
                  name: "--insights-dataset-config",
                  description:
                    "The resource identifier of the Storage Insights dataset configuration. Format: projects/{project}/locations/{location}/datasetConfigs/{datasetConfig}",
                  priority: 100,
                  args: {
                    name: "INSIGHTS_DATASET_CONFIG",
                    description: "String",
                  },
                },
                {
                  name: "--log-action-states",
                  description:
                    "The states in which the actions specified in --log-actions are logged. Separate multiple states with a comma, omitting the space after the comma (e.g., --log-action-states=succeeded,failed). _LOG_ACTION_STATES_ must be one of: *failed*, *succeeded*",
                  args: {
                    name: "LOG_ACTION_STATES",
                    description: "List",
                  },
                },
                {
                  name: "--log-actions",
                  description:
                    "Define the batch job actions to report in logs. (e.g., --log-actions=transform). _LOG_ACTIONS_ must be (only one value is supported): *transform*",
                  args: {
                    name: "LOG_ACTIONS",
                    description: "List",
                  },
                },
                optLogHttp,
                {
                  name: "--manifest-location",
                  description:
                    "An absolute path to the manifest source file in a Google Cloud Storage bucket. The file must be a CSV file where each row specifies the object details i.e. ProjectId, BucketId, and Name. Generation may optionally be specified. When generation is not specified, the live object is acted upon. Format: `--manifest-location=gs://bucket_name/path/manifest_name.csv`",
                  args: {
                    name: "MANIFEST_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--no-clear-all-object-custom-contexts",
                  description: "Clears all object custom contexts",
                  hidden: true,
                },
                {
                  name: "--no-delete-object",
                  description:
                    "If this flag is set, objects specified in source will be deleted. When versioning is enabled on the buckets, live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped",
                  hidden: true,
                  priority: 100,
                },
                {
                  name: "--no-dry-run",
                  description:
                    "If true, the job will run in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations will be performed",
                  hidden: true,
                },
                {
                  name: "--no-enable-permanent-object-deletion",
                  description:
                    "If this flag is set and versioning is enabled on the buckets, both live and noncurrent objects will be permanently deleted",
                  hidden: true,
                },
                {
                  name: "--no-put-object-event-based-hold",
                  description:
                    "Sets or unsets object event based holds state. When object event based hold is set, object cannot be deleted or replaced",
                },
                {
                  name: "--no-put-object-temporary-hold",
                  description:
                    "Sets or unsets object temporary holds state. When object temporary hold is set, object cannot be deleted or replaced",
                },
                {
                  name: "--object-filters",
                  description:
                    'Filters expressed in Common Expression Language (CEL) to apply to objects. E.g. "size > 100"',
                  args: {
                    name: "OBJECT_FILTERS",
                    description: "String",
                  },
                },
                optProject,
                {
                  name: "--put-metadata",
                  description:
                    'Sets object metadata. To set how content should be displayed, specify the the key-value pair `Content-Disposition={VALUE}.` To set how content is encoded (e.g. "gzip"), specify the key-value pair `Content-Encoding={VALUE}`. To set content\'s language (e.g. "en" signifies "English"), specify the key-value pair `Content-Language={VALUE}`. To set the type of data contained in the object (e.g. "text/html"), specify the key-value pair `Content-Type={VALUE}`. To set how caches should handle requests and responses, specify the key-value pair `Cache-Control={VALUE}`. To set custom time for Cloud Storage objects in RFC 3339 format, specify the key-value pair `Custom-Time={VALUE}`. To set object retention, specify `Retain-Until={TIMESTAMP}` in RFC 3339 format and `Retention-Mode={MODE}` where mode can be `Locked` or `Unlocked`. To set custom metadata on objects, specify key-value pairs `{CUSTOM-KEY}:{VALUE}`. Note that all predefined keys (e.g. Content-Disposition) are case-insensitive. Any other key that is not specified above will be treated as a custom key. To clear a field, provide the key with an empty value (e.g. `Content-Disposition=`). Multiple key-value pairs can be specified by separating them with commas. For example, `--put-metadata=Content-Disposition=inline,Content-Encoding=gzip`',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--put-object-event-based-hold",
                  description:
                    "Sets or unsets object event based holds state. When object event based hold is set, object cannot be deleted or replaced. Use *--put-object-event-based-hold* to enable and *--no-put-object-event-based-hold* to disable",
                },
                {
                  name: "--put-object-temporary-hold",
                  description:
                    "Sets or unsets object temporary holds state. When object temporary hold is set, object cannot be deleted or replaced. Use *--put-object-temporary-hold* to enable and *--no-put-object-temporary-hold* to disable",
                },
                optQuiet,
                {
                  name: "--rewrite-object",
                  description:
                    "Rewrites object and the specified metadata. Currently only supports rewriting kms-key and storage-class. To rewrite the Cloud KMS key that will be used to encrypt the object, specify the key-value pair `kms-key={KEY}`. To rewrite the object storage classes, specify the key-value pair `storage-class={STORAGE_CLASS}` where storage-class can be one of `STANDARD`, `NEARLINE`, `COLDLINE`, or `ARCHIVE`. If an object's storage class is set to a different value than it currently has, a full byte copy of the object will be made. If Autoclass is enabled on the bucket, storage class changes will be ignored by Cloud Storage. A metadata field MUST be specified, and multiple key-value pairs can be specified by separating them with commas. For example:",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--target-locations",
                  description:
                    "A comma-separated list of Cloud Storage locations (e.g., us-central1) to include in the job. Only buckets and objects within these locations will be discovered from the configured Storage Insights dataset",
                  priority: 100,
                  args: {
                    name: "LOCATIONS",
                    description: "List",
                  },
                },
                {
                  name: "--target-project",
                  description:
                    "Project name of the objects to be transformed. e.g. my-project or 123456",
                  priority: 100,
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--target-snapshot-time",
                  description:
                    "The exact Storage Insights snapshot timestamp to use for the job compatible with the RFC 3339 format (e.g., 2024-01-02T03:04:00.123456Z). Can only be specified if --target-locations is specified. If omitted, the job automatically defaults to the most recent snapshot timestamp that is successfully populated in both object and bucket attributes views across all specified locations. This snapshot time is precise to the microsecond. Any finer precision is truncated",
                  args: {
                    name: "TARGET_SNAPSHOT_TIME",
                  },
                },
                optTraceToken,
                {
                  name: "--update-object-custom-contexts",
                  description:
                    "Inserts or updates object custom contexts. If an existing entry is found, the value will be updated, otherwise the entry would be added. e.g. `--update-object-custom-contexts=key1=val1,key2=val2`",
                  args: {
                    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
                    description: "Dict",
                  },
                },
                {
                  name: "--update-object-custom-contexts-file",
                  description:
                    "Path to a local JSON or YAML file containing custom contexts one wants to update on an object. If an entry is found, any fields set in the payload will be updated, otherwise the entry would be added. For example:",
                  args: {
                    name: "CUSTOM_CONTEXTS_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job",
              },
            },
            {
              name: "delete",
              description: "Delete a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job",
              },
            },
            {
              name: "describe",
              description: "Describe a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job",
              },
            },
            {
              name: "list",
              description: "List batch-operations jobs",
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
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
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
    },
    {
      name: "buckets",
      description: "Manage Cloud Storage buckets",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a bucket",
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
            name: "URL",
            description: "URL of bucket to add IAM policy binding to",
          },
        },
        {
          name: "anywhere-caches",
          description: "Manage Cloud Storage Anywhere Caches",
          subcommands: [
            {
              name: "create",
              description: "Create Anywhere Cache instances for a bucket",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--admission-policy",
                  description:
                    "The cache admission policy decides for each cache miss, whether to insert the missed block or not. _ADMISSION_POLICY_ must be one of: *ADMIT_ON_FIRST_MISS*, *ADMIT_ON_SECOND_MISS*",
                  args: {
                    name: "ADMISSION_POLICY",
                    description: "String",
                    suggestions: [
                      "ADMIT_ON_FIRST_MISS",
                      "ADMIT_ON_SECOND_MISS",
                    ],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--enable-ingest-on-write",
                  description:
                    "Enables the Ingest-on-Write feature on the bucket. Use *--enable-ingest-on-write* to enable and *--no-enable-ingest-on-write* to disable",
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
                  name: "--no-enable-ingest-on-write",
                  description:
                    "Enables the Ingest-on-Write feature on the bucket",
                },
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--ttl",
                  description:
                    "Cache entry time-to-live. Default to 24h if not provided",
                  args: {
                    name: "TTL",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "URL",
                  description:
                    "Specifies the URL of the bucket where the Anywhere Cache should be created",
                },
                {
                  name: "ZONE",
                  description:
                    "Specifies the name of the zonal locations where the Anywhere Cache should be created",
                  isVariadic: true,
                },
              ],
            },
            {
              name: "describe",
              description:
                "Returns details of Anywhere Cache instance of a bucket",
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
                optNoRaw,
                optProject,
                optQuiet,
                optRaw,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ID",
                description:
                  "Identifier for a Anywhere Cache instance. It is a combination of bucket_name/anywhere_cache_id, For example : test-bucket/my-cache-id",
              },
            },
            {
              name: "disable",
              description: "Disable Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "list",
              description: "List all Anywhere Cache instances of a bucket",
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
                optNoRaw,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optRaw,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "URL",
                description:
                  "Specifies the URL of the bucket for which anywhere cache instances should be listed",
              },
            },
            {
              name: "pause",
              description: "Pause Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "resume",
              description: "Resume Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "update",
              description: "Update Anywhere Cache instances",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--admission-policy",
                  description:
                    "The cache admission policy decides for each cache miss, whether to insert the missed block or not. _ADMISSION_POLICY_ must be one of: *ADMIT_ON_FIRST_MISS*, *ADMIT_ON_SECOND_MISS*",
                  args: {
                    name: "ADMISSION_POLICY",
                    description: "String",
                    suggestions: [
                      "ADMIT_ON_FIRST_MISS",
                      "ADMIT_ON_SECOND_MISS",
                    ],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--enable-ingest-on-write",
                  description:
                    "Enables the Ingest-on-Write feature on the bucket. Use *--enable-ingest-on-write* to enable and *--no-enable-ingest-on-write* to disable",
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
                  name: "--no-enable-ingest-on-write",
                  description:
                    "Enables the Ingest-on-Write feature on the bucket",
                },
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--ttl",
                  description:
                    "Cache entry time-to-live. Default to 24h if not provided",
                  args: {
                    name: "TTL",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache Instance.They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
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
          description: "Create buckets for storing objects",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            {
              name: "--autoclass-terminal-storage-class",
              description:
                "The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Only valid if Autoclass is enabled",
              args: {
                name: "AUTOCLASS_TERMINAL_STORAGE_CLASS",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: ["--default-encryption-key", "-k"],
              description:
                "Set the default KMS key using the full path to the key, which has the following form: ``projects/[project-id]/locations/[location]/keyRings/[key-ring]/cryptoKeys/[my-key]''",
              args: {
                name: "DEFAULT_ENCRYPTION_KEY",
                description: "String",
              },
            },
            {
              name: ["--default-storage-class", "-c", "-s"],
              description:
                'Default [storage class](https://cloud.google.com/storage/docs/storage-classes) for the bucket. If not specified, the default storage class used by Cloud Storage is "Standard"',
              args: {
                name: "DEFAULT_STORAGE_CLASS",
                description: "String",
              },
            },
            {
              name: "--enable-autoclass",
              description:
                "The Autoclass feature automatically selects the best storage class for objects based on access patterns. Use *--enable-autoclass* to enable and *--no-enable-autoclass* to disable",
            },
            {
              name: "--enable-hierarchical-namespace",
              description:
                "Enable hierarchical namespace for the bucket. To use this flag, you must also use --uniform-bucket-level-access",
            },
            {
              name: "--enable-per-object-retention",
              description:
                "Enables each object in the bucket to have its own retention settings, which prevents deletion until stored for a specific length of time",
            },
            {
              name: "--encryption-enforcement-file",
              description:
                "Sets the encryption enforcement configuration for the bucket from a JSON file. This configuration determines restrictions on the types of encryption (GMEK, CMEK, CSEK) allowed for new objects created in the bucket",
              args: {
                name: "ENCRYPTION_ENFORCEMENT_FILE",
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
            {
              name: "--ip-filter-file",
              description:
                "Sets the IP filter for the bucket. The IP filter is a list of ip ranges that are allowed to access the bucket. For example, The following JSON document shows the IP filter configuration with mode enabled and list of public network sources and vpc network sources:",
              args: {
                name: "IP_FILTER_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--lifecycle-file",
              description:
                "Sets the lifecycle management configuration on a bucket. For example, The following lifecycle management configuration JSON document specifies that all objects in this bucket that are more than 365 days old are deleted automatically:",
              args: {
                name: "LIFECYCLE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "[Location](https://cloud.google.com/storage/docs/locations) for the bucket. If not specified, the location used by Cloud Storage is ``us''. A bucket's location cannot be changed after creation",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-enable-autoclass",
              description:
                "The Autoclass feature automatically selects the best storage class for objects based on access patterns",
            },
            {
              name: "--no-enable-hierarchical-namespace",
              description:
                "Enable hierarchical namespace for the bucket. To use this flag, you must also use --uniform-bucket-level-access",
              hidden: true,
            },
            {
              name: "--no-enable-per-object-retention",
              description:
                "Enables each object in the bucket to have its own retention settings, which prevents deletion until stored for a specific length of time",
              hidden: true,
            },
            {
              name: "--no-public-access-prevention",
              description:
                'Sets public access prevention to "enforced". For details on how exactly public access is blocked, see: http://cloud.google.com/storage/docs/public-access-prevention',
            },
            {
              name: "--no-uniform-bucket-level-access",
              description:
                "Turns on uniform bucket-level access setting. Default is False",
            },
            {
              name: "--placement",
              description:
                "A comma-separated list of regions that form the custom [dual-region](https://cloud.google.com/storage/docs/locations#location-dr). Only regions within the same continent are or will ever be valid. Invalid location pairs (such as mixed-continent, or with unsupported regions) will return an error",
              args: {
                name: "REGION",
                description: "List",
              },
            },
            optProject,
            {
              name: ["--public-access-prevention", "--pap"],
              description:
                'Sets public access prevention to "enforced". For details on how exactly public access is blocked, see: http://cloud.google.com/storage/docs/public-access-prevention. Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            optQuiet,
            {
              name: ["--recovery-point-objective", "--rpo"],
              description:
                "Sets the [recovery point objective](https://cloud.google.com/architecture/dr-scenarios-planning-guide#basics_of_dr_planning) of a bucket. This flag can only be used with multi-region and dual-region buckets. `DEFAULT` option is valid for multi-region and dual-regions buckets. `ASYNC_TURBO` option is only valid for dual-region buckets. If unspecified when the bucket is created, it defaults to `DEFAULT` for dual-region and multi-region buckets. For more information, see [replication in Cloud Storage](https://cloud.google.com/storage/docs/availability-durability#cross-region-redundancy). _SETTING_ must be one of: *ASYNC_TURBO*, *DEFAULT*",
              args: {
                name: "SETTING",
                description: "String",
                suggestions: ["ASYNC_TURBO", "DEFAULT"],
              },
            },
            {
              name: "--retention-period",
              description:
                "Minimum [retention period](https://cloud.google.com/storage/docs/bucket-lock#retention-periods) for objects stored in the bucket, for example ``--retention-period=P1Y1M1DT5S''. Objects added to the bucket cannot be deleted until they've been stored for the specified length of time. Default is no retention period. Only available for Cloud Storage using the JSON API",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--soft-delete-duration",
              description:
                'Duration to retain soft-deleted objects. For example, "2w1d" is two weeks and one day. See `gcloud topic datetimes` for more information on the duration format. Setting `0` will disable soft delete policy on the bucket. Default is 7 days',
              args: {
                name: "SOFT_DELETE_DURATION",
              },
            },
            optTraceToken,
            {
              name: ["--uniform-bucket-level-access", "-b"],
              description:
                "Turns on uniform bucket-level access setting. Default is False. Use *--uniform-bucket-level-access* to enable and *--no-uniform-bucket-level-access* to disable",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URLs of the buckets to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes Cloud Storage buckets",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            optBillingProject,
            optConfiguration,
            optContinueOnError,
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
            name: "URLS",
            description: "Specifies the URLs of the buckets to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes Cloud Storage buckets",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optProject,
            optQuiet,
            optRaw,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "Specifies URL of bucket to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a bucket",
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
            name: "URL",
            description: "Request IAM policy for this bucket",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Storage buckets",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRaw,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URLS",
            description: "Specifies URL of buckets to List",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "notifications",
          description: "Manage Cloud Storage bucket notifications",
          subcommands: [
            {
              name: "create",
              description: "Create a notification configuration on a bucket",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: ["--custom-attributes", "-m"],
                  description:
                    "Specifies key:value attributes that are appended to the set of attributes sent to Cloud Pub/Sub for all events associated with this notification configuration",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: ["--event-types", "-e"],
                  description:
                    "Specify event type filters for this notification configuration. Cloud Storage will send notifications of only these types. By default, Cloud Storage sends notifications for all event types. * OBJECT_FINALIZE: An object has been created. * OBJECT_METADATA_UPDATE: The metadata of an object has changed. * OBJECT_DELETE: An object has been permanently deleted. * OBJECT_ARCHIVE: A live version of an object has become a noncurrent version. _NOTIFICATION_EVENT_TYPE_ must be one of: *OBJECT_ARCHIVE*, *OBJECT_DELETE*, *OBJECT_FINALIZE*, *OBJECT_METADATA_UPDATE*",
                  args: {
                    name: "NOTIFICATION_EVENT_TYPE",
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
                optLogHttp,
                {
                  name: ["--object-prefix", "-p"],
                  description:
                    "Specifies a prefix path for this notification configuration. Cloud Storage will send notifications for only objects in the bucket whose names begin with the prefix",
                  args: {
                    name: "OBJECT_PREFIX",
                    description: "String",
                  },
                },
                {
                  name: ["--payload-format", "-f"],
                  description:
                    "Specifies the payload format of notification messages. Notification details are available in the message attributes. 'none' sends no payload. _PAYLOAD_FORMAT_ must be one of: *json*, *none*",
                  args: {
                    name: "PAYLOAD_FORMAT",
                    description: "String",
                    suggestions: ["json", "none"],
                  },
                },
                optProject,
                optQuiet,
                {
                  name: ["--skip-topic-setup", "-s"],
                  description:
                    "Skips creation and permission assignment of the Cloud Pub/Sub topic. This is useful if the caller does not have permission to access the topic in question, or if the topic already exists and has the appropriate publish permission assigned",
                },
                {
                  name: ["--topic", "-t"],
                  description:
                    "Specifies the Cloud Pub/Sub topic to send notifications to. If not specified, this command chooses a topic whose project is your default project and whose ID is the same as the Cloud Storage bucket name",
                  args: {
                    name: "TOPIC",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "URL",
                description:
                  "URL of the bucket to create the notification configuration on",
              },
            },
            {
              name: "delete",
              description: "Delete notification configurations from a bucket",
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
                name: "URLS",
                description:
                  "Specifies notification configuration names or buckets",
                isVariadic: true,
              },
            },
            {
              name: "describe",
              description: "Show metadata for a notification configuration",
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
                name: "URL",
                description: "The url of the notification configuration",
              },
            },
            {
              name: "list",
              description:
                "List the notification configurations belonging to a given bucket",
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
                {
                  name: "--human-readable",
                  description:
                    "Prints notification information in a more descriptive, unstructured format",
                  hidden: true,
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--no-human-readable",
                  description:
                    "Prints notification information in a more descriptive, unstructured format",
                  hidden: true,
                },
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
                name: "URLS",
                description:
                  "Google Cloud Storage bucket paths. The path must begin with gs:// and may contain wildcard characters",
                isVariadic: true,
                isOptional: true,
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
          name: "relocate",
          description: "Relocates bucket between different locations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-kms-key-name",
              description:
                "This is only required when relocating a bucket that uses Customer-Managed Encryption Keys (CMEK). The full resource name of the Cloud KMS key to use for encrypting objects in the destination bucket. This key will be set as the default bucket encryption key. The key must exist in the destination location. Format: projects/PROJECT/locations/LOCATION/keyRings/RING/cryptoKeys/KEY",
              args: {
                name: "DESTINATION_KMS_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--dry-run",
              description:
                "Prints the operations that the relocate command would perform without actually performing relocation. This is helpful to identify any issues that need to be detected asynchronously",
            },
            {
              name: "--finalize",
              description:
                "Schedules the write lock to occur. Once activated, no further writes will be allowed to the associated bucket. This helps minimize disruption to bucket usage. For certain types of moves(between Multi Region and Custom Dual Regions), finalize is not required",
              priority: 100,
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
              name: "--location",
              description:
                "The final [location](https://cloud.google.com/storage/docs/locations) where the bucket will be relocated to. If no location is provided, Cloud Storage will use the default location, which is us",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-dry-run",
              description:
                "Prints the operations that the relocate command would perform without actually performing relocation. This is helpful to identify any issues that need to be detected asynchronously",
              hidden: true,
            },
            {
              name: "--no-finalize",
              description:
                "Schedules the write lock to occur. Once activated, no further writes will be allowed to the associated bucket. This helps minimize disruption to bucket usage. For certain types of moves(between Multi Region and Custom Dual Regions), finalize is not required",
              hidden: true,
              priority: 100,
            },
            {
              name: "--operation",
              description:
                "Specify the relocation operation name to advance the relocation operation.The relocation operation name must include the Cloud Storage bucket and operation ID",
              priority: 100,
              args: {
                name: "OPERATION",
                description: "String",
              },
            },
            {
              name: "--placement",
              description:
                "A comma-separated list of regions that form the custom [dual-region](https://cloud.google.com/storage/docs/locations#location-dr). Only regions within the same continent are or will ever be valid. Invalid location pairs (such as mixed-continent, or with unsupported regions) will return an error",
              args: {
                name: "REGION",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--ttl",
              description:
                "Time to live for the relocation operation. Defaults to 12h if not provided",
              args: {
                name: "TTL",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URL of the bucket to relocate",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a bucket",
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
            name: "URL",
            description: "URL of bucket to remove IAM policy binding from",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optContinueOnError,
            optEtag,
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
          args: [
            {
              name: "URLS",
              description:
                "URLs for buckets to apply the IAM policy to. Can include wildcards",
              isVariadic: true,
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
          description: "Update bucket settings",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-file",
              description:
                'Path to a local JSON or YAML formatted file containing a valid policy. See the [ObjectAccessControls resource](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for a representation of JSON formatted files. The output of `gcloud storage [buckets|objects] describe` `--format="multi(acl:format=json)"` is a valid file and can be edited for more fine-grained control',
              args: {
                name: "ACL_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--add-acl-grant",
              description:
                "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage,`--add-acl-grant=entity=user-tim@gmail.com,role=OWNER`",
              args: {
                name: "ACL_GRANT",
                description: "Dict",
              },
            },
            {
              name: "--add-default-object-acl-grant",
              description:
                "Adds default object ACL grant. See --add-acl-grant help text for more details",
              args: {
                name: "DEFAULT_OBJECT_ACL_GRANT",
                description: "Dict",
              },
            },
            optAdditionalHeaders,
            {
              name: "--autoclass-terminal-storage-class",
              description:
                "The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Only valid if Autoclass is enabled",
              args: {
                name: "AUTOCLASS_TERMINAL_STORAGE_CLASS",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-cors",
              description: "Clears the bucket's CORS settings",
            },
            {
              name: "--clear-default-encryption-key",
              description: "Clears the bucket's default encryption key",
            },
            {
              name: "--clear-ip-filter",
              description:
                "Disables and clears IP filter configuration of the bucket",
            },
            {
              name: "--clear-labels",
              description: "Clear all labels associated with a bucket",
            },
            {
              name: "--clear-lifecycle",
              description: "Removes all lifecycle configuration for the bucket",
            },
            {
              name: "--clear-log-bucket",
              description:
                "Disables usage and storage logging for the bucket specified in the overall update command",
            },
            {
              name: "--clear-log-object-prefix",
              description:
                "Clears the prefix used to determine the naming of log objects in the logging bucket",
            },
            {
              name: ["--clear-public-access-prevention", "--clear-pap"],
              description:
                "Unsets the public access prevention setting on a bucket",
            },
            {
              name: "--clear-retention-period",
              description: "Clears the object retention period for a bucket",
            },
            {
              name: "--clear-soft-delete",
              description:
                "Clears bucket soft delete settings. Does not affect objects already in soft-deleted state",
            },
            {
              name: "--clear-web-error-page",
              description:
                "Clear website error page if bucket is hosting website",
            },
            {
              name: "--clear-web-main-page-suffix",
              description:
                "Clear website main page suffix if bucket is hosting website",
            },
            optConfiguration,
            optContinueOnError,
            {
              name: "--cors-file",
              description:
                "Sets the Cross-Origin Resource Sharing (CORS) configuration on a bucket. An example CORS JSON document looks like the following:",
              args: {
                name: "CORS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--default-encryption-key",
              description: "Set the default KMS key for the bucket",
              args: {
                name: "DEFAULT_ENCRYPTION_KEY",
                description: "String",
              },
            },
            {
              name: "--default-event-based-hold",
              description:
                "Sets the default value for an event-based hold on the bucket. By setting the default event-based hold on a bucket, newly-created objects inherit that value as their event-based hold (it is not applied retroactively). Use *--default-event-based-hold* to enable and *--no-default-event-based-hold* to disable",
            },
            {
              name: "--default-object-acl-file",
              description:
                "Sets the default object ACL from file for the bucket",
              args: {
                name: "DEFAULT_OBJECT_ACL_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--default-storage-class",
              description: "Sets the default storage class for the bucket",
              args: {
                name: "DEFAULT_STORAGE_CLASS",
                description: "String",
              },
            },
            {
              name: "--enable-autoclass",
              description:
                "The Autoclass feature automatically selects the best storage class for objects based on access patterns. Use *--enable-autoclass* to enable and *--no-enable-autoclass* to disable",
            },
            {
              name: "--encryption-enforcement-file",
              description:
                "Sets the encryption enforcement configuration for the bucket from a JSON file. This configuration determines restrictions on the types of encryption (GMEK, CMEK, CSEK) allowed for new objects created in the bucket",
              args: {
                name: "ENCRYPTION_ENFORCEMENT_FILE",
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
            {
              name: "--ip-filter-file",
              description:
                "Sets the IP filter for the bucket. The IP filter is a list of ip ranges that are allowed to access the bucket. For example, The following JSON document shows the IP filter configuration with mode enabled and list of public network sources and vpc network sources:",
              args: {
                name: "IP_FILTER_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--labels-file",
              description:
                "Sets the label configuration for the bucket. An example label JSON document looks like the following:",
              args: {
                name: "LABELS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--lifecycle-file",
              description:
                "Sets the lifecycle management configuration on a bucket. For example, The following lifecycle management configuration JSON document specifies that all objects in this bucket that are more than 365 days old are deleted automatically:",
              args: {
                name: "LIFECYCLE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--lock-retention-period",
              description:
                'Locks an unlocked retention policy on the buckets. Caution: A locked retention policy cannot be removed from a bucket or reduced in duration. Once locked, deleting the bucket is the only way to "remove" a retention policy',
            },
            {
              name: "--log-bucket",
              description:
                "Enables usage and storage logging for the bucket specified in the overall update command, outputting log files to the bucket specified in this flag. Cloud Storage does not validate the existence of the bucket receiving logs. In addition to enabling logging on your bucket, you also need to grant cloud-storage-analytics@google.com write access to the log bucket",
              args: {
                name: "LOG_BUCKET",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--log-object-prefix",
              description:
                "Specifies a prefix for the names of logs generated in the log bucket. The default prefix is the bucket name. If logging is not enabled, this flag has no effect",
              args: {
                name: "LOG_OBJECT_PREFIX",
                description: "String",
              },
            },
            {
              name: "--no-clear-cors",
              description: "Clears the bucket's CORS settings",
              hidden: true,
            },
            {
              name: "--no-clear-default-encryption-key",
              description: "Clears the bucket's default encryption key",
              hidden: true,
            },
            {
              name: "--no-clear-ip-filter",
              description:
                "Disables and clears IP filter configuration of the bucket",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear all labels associated with a bucket",
              hidden: true,
            },
            {
              name: "--no-clear-lifecycle",
              description: "Removes all lifecycle configuration for the bucket",
              hidden: true,
            },
            {
              name: "--no-clear-log-bucket",
              description:
                "Disables usage and storage logging for the bucket specified in the overall update command",
              hidden: true,
            },
            {
              name: "--no-clear-log-object-prefix",
              description:
                "Clears the prefix used to determine the naming of log objects in the logging bucket",
              hidden: true,
            },
            {
              name: "--no-clear-public-access-prevention",
              description:
                "Unsets the public access prevention setting on a bucket",
              hidden: true,
            },
            {
              name: "--no-clear-retention-period",
              description: "Clears the object retention period for a bucket",
              hidden: true,
            },
            {
              name: "--no-clear-soft-delete",
              description:
                "Clears bucket soft delete settings. Does not affect objects already in soft-deleted state",
              hidden: true,
            },
            {
              name: "--no-clear-web-error-page",
              description:
                "Clear website error page if bucket is hosting website",
              hidden: true,
            },
            {
              name: "--no-clear-web-main-page-suffix",
              description:
                "Clear website main page suffix if bucket is hosting website",
              hidden: true,
            },
            {
              name: "--no-default-event-based-hold",
              description:
                "Sets the default value for an event-based hold on the bucket. By setting the default event-based hold on a bucket, newly-created objects inherit that value as their event-based hold (it is not applied retroactively)",
            },
            {
              name: "--no-enable-autoclass",
              description:
                "The Autoclass feature automatically selects the best storage class for objects based on access patterns",
            },
            {
              name: "--no-lock-retention-period",
              description:
                'Locks an unlocked retention policy on the buckets. Caution: A locked retention policy cannot be removed from a bucket or reduced in duration. Once locked, deleting the bucket is the only way to "remove" a retention policy',
              hidden: true,
            },
            {
              name: "--no-public-access-prevention",
              description:
                'If True, sets [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention) to "enforced". If False, sets public access prevention to "inherited"',
            },
            optNoReadPathsFromStdin,
            {
              name: "--no-requester-pays",
              description:
                "Allows you to configure a Cloud Storage bucket so that the requester pays all costs related to accessing the bucket and its objects",
            },
            {
              name: "--no-uniform-bucket-level-access",
              description:
                "Enables or disables [uniform bucket-level access](https://cloud.google.com/storage/docs/bucket-policy-only) for the buckets",
            },
            {
              name: "--no-versioning",
              description:
                "Allows you to configure a Cloud Storage bucket to keep old versions of objects",
            },
            optPredefinedAcl,
            {
              name: "--predefined-default-object-acl",
              description:
                "Apply a predefined set of default object access controls tobuckets",
              args: {
                name: "PREDEFINED_DEFAULT_OBJECT_ACL",
                description: "String",
              },
            },
            optProject,
            {
              name: ["--public-access-prevention", "--pap"],
              description:
                'If True, sets [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention) to "enforced". If False, sets public access prevention to "inherited". Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            optQuiet,
            optReadPathsFromStdin,
            {
              name: ["--recovery-point-objective", "--rpo"],
              description:
                "Sets the [recovery point objective](https://cloud.google.com/architecture/dr-scenarios-planning-guide#basics_of_dr_planning) of a bucket. This flag can only be used with multi-region and dual-region buckets. `DEFAULT` option is valid for multi-region and dual-regions buckets. `ASYNC_TURBO` option is only valid for dual-region buckets. If unspecified when the bucket is created, it defaults to `DEFAULT` for dual-region and multi-region buckets. For more information, see [replication in Cloud Storage](https://cloud.google.com/storage/docs/availability-durability#cross-region-redundancy). _SETTING_ must be one of: *ASYNC_TURBO*, *DEFAULT*",
              args: {
                name: "SETTING",
                description: "String",
                suggestions: ["ASYNC_TURBO", "DEFAULT"],
              },
            },
            {
              name: "--remove-acl-grant",
              description:
                "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage, `--remove-acl-grant=ENTITY`, where `ENTITY` has a valid ACL entity format, such as `user-tim@gmail.com`, `group-admins`, `allUsers`, etc",
              args: {
                name: "REMOVE_ACL_GRANT",
                description: "String",
              },
            },
            {
              name: "--remove-default-object-acl-grant",
              description:
                "Removes default object ACL grant. See --remove-acl-grant help text for more details",
              args: {
                name: "REMOVE_DEFAULT_OBJECT_ACL_GRANT",
                description: "String",
              },
            },
            {
              name: "--remove-labels",
              description: "Remove labels by their key names",
              args: {
                name: "LABEL_KEYS",
                description: "List",
              },
            },
            {
              name: "--requester-pays",
              description:
                "Allows you to configure a Cloud Storage bucket so that the requester pays all costs related to accessing the bucket and its objects. Use *--requester-pays* to enable and *--no-requester-pays* to disable",
            },
            {
              name: "--retention-period",
              description:
                "Minimum [retention period](https://cloud.google.com/storage/docs/bucket-lock#retention-periods) for objects stored in the bucket, for example ``--retention-period=P1Y1M1DT5S''. Objects added to the bucket cannot be deleted until they've been stored for the specified length of time. Default is no retention period. Only available for Cloud Storage using the JSON API",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--soft-delete-duration",
              description:
                'Duration to retain soft-deleted objects. For example, "2w1d" is two weeks and one day',
              args: {
                name: "SOFT_DELETE_DURATION",
              },
            },
            optTraceToken,
            {
              name: "--uniform-bucket-level-access",
              description:
                "Enables or disables [uniform bucket-level access](https://cloud.google.com/storage/docs/bucket-policy-only) for the buckets. Use *--uniform-bucket-level-access* to enable and *--no-uniform-bucket-level-access* to disable",
            },
            {
              name: "--update-labels",
              description:
                "Add or update labels. Example: --update-labels=key1=value1,key2=value2",
              args: {
                name: "LABEL_KEYS_AND_VALUES",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--versioning",
              description:
                "Allows you to configure a Cloud Storage bucket to keep old versions of objects. Use *--versioning* to enable and *--no-versioning* to disable",
            },
            {
              name: "--web-error-page",
              description:
                "Cloud Storage allows you to configure a bucket to behave like a static website. A subsequent GET bucket request through a custom domain for a non-existent object serves the specified error page instead of the standard Cloud Storage error",
              args: {
                name: "WEB_ERROR_PAGE",
                description: "String",
              },
            },
            {
              name: "--web-main-page-suffix",
              description:
                'Cloud Storage allows you to configure a bucket to behave like a static website. A subsequent GET bucket request through a custom domain serves the specified "main" page instead of performing the usual bucket listing',
              args: {
                name: "WEB_MAIN_PAGE_SUFFIX",
                description: "String",
              },
            },
          ],
          args: {
            name: "URL",
            description: "Specifies the URLs of the buckets to update",
            isVariadic: true,
            isOptional: true,
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
      name: "cat",
      description: "Outputs the contents of one or more URLs to stdout",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        optBillingProject,
        optConfiguration,
        optDecryptionKeys,
        {
          name: ["--display-url", "-d"],
          description: "Prints the header before each object",
        },
        optEncryptionKey,
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
        {
          name: ["--range", "-r"],
          description:
            "Causes gcloud storage to output just the specified byte range of the object. In a case where \"start\" = 'x', and \"end\" = 'y', ranges take the form: `x-y` (e.g., `-r 256-5939`), `x-` (e.g., `-r 256-`), `-y` (e.g., `-r -5`)",
          args: {
            name: "RANGE",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URL",
        description: "The url of objects to list",
        isVariadic: true,
      },
    },
    {
      name: "cp",
      description: "Upload, download, and copy Cloud Storage objects",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        {
          name: ["--all-versions", "-A"],
          description:
            "Copy all source versions from a source bucket or folder. If not set, only the live version of each source object is copied",
        },
        optBillingProject,
        optCacheControl,
        optClearCustomContexts,
        optClearCustomMetadata,
        optConfiguration,
        optContentDisposition,
        optContentEncoding,
        optContentLanguage,
        optContentMd5,
        optContentType,
        optContinueOnError,
        optCustomContexts,
        optCustomContextsFile,
        optCustomMetadata,
        optCustomTime,
        {
          name: ["--daisy-chain", "-D"],
          description:
            'Copy in "daisy chain" mode, which means copying an object by first downloading it to the machine where the command is run, then uploading it to the destination bucket. The default mode is a "copy in the cloud," where data is copied without uploading or downloading. During a copy in the cloud, a source composite object remains composite at its destination. However, you can use daisy chain mode to change a composite object into a non-composite object. Note: Daisy chain mode is automatically used when copying between providers',
        },
        optDecryptionKeys,
        {
          name: "--do-not-decompress",
          description: "Do not automatically decompress downloaded gzip files",
        },
        optEncryptionKey2,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGzipInFlight,
        optGzipInFlightAll,
        {
          name: ["--gzip-local", "-z"],
          description:
            "Applies gzip content encoding to any file upload whose extension matches the input extension list. This is useful when uploading files with compressible content such as .js, .css, or .html files. This saves network bandwidth and space in Cloud Storage",
          args: {
            name: "FILE_EXTENSIONS",
            description: "List",
          },
        },
        {
          name: ["--gzip-local-all", "-Z"],
          description:
            "Applies gzip content encoding to file uploads. This option works like the `--gzip-local` option described above, but it applies to all uploaded files, regardless of extension",
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIfGenerationMatch,
        optIfMetagenerationMatch,
        {
          name: "--ignore-symlinks",
          description:
            "Ignore file symlinks instead of copying what they point to",
        },
        optImpersonateServiceAccount,
        {
          name: "--include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers. Please note that for hierarchical namespace buckets, managed folders are always included. Hence this flag would not be applicable to hierarchical namespace buckets",
        },
        optLogHttp,
        {
          name: ["--manifest-path", "-L"],
          description:
            "Outputs a manifest log file with detailed information about each item that was copied. This manifest contains the following information for each item:",
          args: {
            name: "MANIFEST_PATH",
            description: "String",
          },
        },
        optNoClearCustomContexts,
        optNoClearCustomMetadata,
        optNoClobber,
        {
          name: "--no-do-not-decompress",
          description: "Do not automatically decompress downloaded gzip files",
          hidden: true,
        },
        optNoIgnoreSymlinks,
        {
          name: "--no-include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers. Please note that for hierarchical namespace buckets, managed folders are always included. Hence this flag would not be applicable to hierarchical namespace buckets",
          hidden: true,
        },
        optNoPreserveAcl,
        {
          name: "--no-preserve-symlinks",
          description:
            "Preserve symlinks instead of copying what they point to. With this feature enabled, uploaded symlinks will be represented as placeholders in the cloud whose content consists of the linked path. Inversely, such placeholders will be converted to symlinks when downloaded while this feature is enabled, as described at https://cloud.google.com/storage-transfer/docs/metadata-preservation#posix_to",
          hidden: true,
        },
        {
          name: "--no-read-paths-from-stdin",
          description:
            'Read the list of resources to copy from stdin. No need to enter a source argument if this flag is present. Example: "storage cp -I gs://bucket/destination". The input format must consist of one path (e.g., "Documents/data/file1.txt") or one object URL (e.g., "gs://example-bucket/event.log") per line. Use a pipe to send the file list to the command. Example: "cat example-file-list.txt | gcloud storage cp --read-paths-from-stdin gs://example-destination-bucket". Note: To copy the contents of one file directly from stdin, use "-" as the source argument without the "-I" flag',
          hidden: true,
        },
        optPredefinedAcl,
        optPreserveAcl,
        optPreservePosix,
        {
          name: "--preserve-symlinks",
          description:
            "Preserve symlinks instead of copying what they point to. With this feature enabled, uploaded symlinks will be represented as placeholders in the cloud whose content consists of the linked path. Inversely, such placeholders will be converted to symlinks when downloaded while this feature is enabled, as described at https://cloud.google.com/storage-transfer/docs/metadata-preservation#posix_to",
        },
        {
          name: ["--print-created-message", "-v"],
          description: "Prints the version-specific URL for each copied object",
        },
        optProject,
        optQuiet,
        {
          name: ["--read-paths-from-stdin", "-I"],
          description:
            'Read the list of resources to copy from stdin. No need to enter a source argument if this flag is present. Example: "storage cp -I gs://bucket/destination". The input format must consist of one path (e.g., "Documents/data/file1.txt") or one object URL (e.g., "gs://example-bucket/event.log") per line. Use a pipe to send the file list to the command. Example: "cat example-file-list.txt | gcloud storage cp --read-paths-from-stdin gs://example-destination-bucket". Note: To copy the contents of one file directly from stdin, use "-" as the source argument without the "-I" flag',
        },
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively copy the contents of any directories that match the source path expression",
        },
        optRemoveCustomContexts,
        optRemoveCustomMetadata,
        optRetainUntil,
        optRetentionMode,
        optSkipUnsupported,
        {
          name: ["--storage-class", "-s"],
          description:
            "Specify the storage class of the destination object. If not specified, the default storage class of the destination bucket is used. This option is not valid for copying to non-cloud destinations",
          args: {
            name: "STORAGE_CLASS",
            description: "String",
          },
        },
        optTraceToken,
        optUpdateCustomContexts,
        optUpdateCustomMetadata,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "SOURCE",
          description: "The source path(s) to copy",
          isVariadic: true,
          isOptional: true,
        },
        {
          name: "DESTINATION",
          description: "The destination path",
        },
      ],
    },
    {
      name: "diagnose",
      description: "Diagnose Google Cloud Storage",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--destination",
          description:
            "Destination file path where the diagnostic bundle will be exported",
          args: {
            name: "DESTINATION",
            description: "String",
          },
        },
        {
          name: "--download-type",
          description:
            "Download strategy to use for the DOWNLOAD_THROUGHPUT diagnostic test",
          args: {
            name: "DOWNLOAD_TYPE",
            description: "String",
            suggestions: ["FILE", "SLICED", "STREAMING"],
          },
        },
        {
          name: "--export",
          description:
            "Generate and export a diagnostic bundle. The following information will be bundled and exported into a gzipped tarball (.tar.gz):",
          priority: 100,
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
          name: "--logs-path",
          description:
            "If the diagnostic supports writing logs, write the logs to this file location",
          args: {
            name: "LOGS_PATH",
            description: "String",
          },
        },
        {
          name: "--no-export",
          description:
            "Generate and export a diagnostic bundle. The following information will be bundled and exported into a gzipped tarball (.tar.gz):",
          hidden: true,
          priority: 100,
        },
        {
          name: "--object-count",
          description: "Number of objects to use for each diagnostic test",
          priority: 100,
          args: {
            name: "OBJECT_COUNT",
          },
        },
        {
          name: "--object-size",
          description: "Object size to use for the diagnostic tests",
          args: {
            name: "OBJECT_SIZE",
          },
        },
        {
          name: "--object-sizes",
          description:
            "List of object sizes to use for the tests. Sizes should be provided for each object specified using `--object-count` flag",
          args: {
            name: "OBJECT_SIZES",
            description: "List",
          },
        },
        {
          name: "--process-count",
          description:
            "Number of processes at max to use for each diagnostic test",
          args: {
            name: "PROCESS_COUNT",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--test-type",
          description:
            "Tests to run as part of this diagnosis. Following tests are supported:",
          args: {
            name: "TEST_TYPES",
            description: "List",
          },
        },
        {
          name: "--thread-count",
          description:
            "Number of threads at max to use for each diagnostic test",
          args: {
            name: "THREAD_COUNT",
          },
        },
        optTraceToken,
        {
          name: "--upload-type",
          description:
            "Upload strategy to use for the _UPLOAD_THROUGHPUT_ diagnostic test",
          args: {
            name: "UPLOAD_TYPE",
            description: "String",
            suggestions: ["FILE", "PARALLEL_COMPOSITE", "STREAMING"],
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URL",
        description: "Bucket URL to use for the diagnostic tests",
      },
    },
    {
      name: "du",
      description:
        "Displays the amount of space in bytes used by storage resources",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        {
          name: ["--all-versions", "-a"],
          description:
            "Includes noncurrent object versions for a bucket with Object Versioning enabled. Also prints the generation and metageneration number for each listed object",
        },
        optBillingProject,
        optConfiguration,
        {
          name: ["--exclude-name-pattern", "-e"],
          description:
            'Exclude a pattern from the report. Example: `-e "*.o"` excludes any object that ends in ".o". Can be specified multiple times',
          args: {
            name: "EXCLUDE_NAME_PATTERN",
            description: "String",
          },
        },
        {
          name: ["--exclude-name-pattern-file", "-X"],
          description:
            "Similar to -e, but excludes patterns from the given file. The patterns to exclude should be listed one per line",
          args: {
            name: "EXCLUDE_NAME_PATTERN_FILE",
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
        optMetadataFilter,
        optProject,
        optQuiet,
        {
          name: ["--readable-sizes", "-r"],
          description:
            "Prints object sizes in human-readable format. For example, 1 KiB, 234 MiB, or 2GiB",
        },
        {
          name: ["--summarize", "-s"],
          description: "Displays only the summary for each argument",
        },
        {
          name: ["--total", "-c"],
          description: "Includes a total size of all input sources",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
        {
          name: ["--zero-terminator", "-0"],
          description:
            "Ends each output line with a 0 byte rather than a newline. You can use this to make the output machine-readable",
        },
      ],
      args: {
        name: "URL",
        description: "The url of objects to list",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "folders",
      description: "Manage Cloud Storage folders",
      subcommands: [
        {
          name: "create",
          description: "Create folders for hierarchical namespace bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
              name: "--no-recursive",
              description:
                "Recursively create all folders in a given path if they do not alraedy exist",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--recursive",
              description:
                "Recursively create all folders in a given path if they do not alraedy exist",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URLs of the folders to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            name: "URLS",
            description: "The URLs of the folders to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe hierarchical namesapace bucket folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optProject,
            optQuiet,
            optRaw,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URL of the folder to describe",
          },
        },
        {
          name: "list",
          description: "List folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRaw,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URLs of the resources to list",
            isVariadic: true,
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
      name: "hash",
      description: "Calculates hashes on local or cloud files",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        optBillingProject,
        optConfiguration,
        optDecryptionKeys,
        optEncryptionKey,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--hex",
          description:
            "Output hash digests in hex format. By default, digests are displayed in base64",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-hex",
          description:
            "Output hash digests in hex format. By default, digests are displayed in base64",
          hidden: true,
        },
        {
          name: "--no-skip-crc32c",
          description:
            "Skip CRC32C hash calculation. Useful if command is running slow",
          hidden: true,
        },
        {
          name: "--no-skip-md5",
          description:
            "Skip MD5 hash calculation. Useful if command is running slow",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--skip-crc32c",
          description:
            "Skip CRC32C hash calculation. Useful if command is running slow",
        },
        {
          name: "--skip-md5",
          description:
            "Skip MD5 hash calculation. Useful if command is running slow",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URLS",
        description: "Local or cloud URLs of objects to hash",
        isVariadic: true,
      },
    },
    {
      name: "hmac",
      description: "Manage Cloud Storage service account HMAC keys",
      subcommands: [
        {
          name: "create",
          description: "Add a service account HMAC",
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
            name: "SERVICE_ACCOUNT",
            description: "The service account email",
          },
        },
        {
          name: "delete",
          description: "Remove a service account HMAC",
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
            name: "ACCESS_ID",
            description: "Access ID for HMAC key to delete",
          },
        },
        {
          name: "describe",
          description: "Describes a service account HMAC key",
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
            name: "ACCESS_ID",
            description:
              "The [Access ID](https://cloud.google.com/storage/docs/authentication/hmackeys#overview) of the HMAC key",
          },
        },
        {
          name: "list",
          description: "List service account HMAC keys",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: ["--all", "-a"],
              description: "Shows all keys, including recently deleted keys",
            },
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
            {
              name: ["--long", "-l"],
              description:
                "Use long listing format, showing the full metadata for each key excluding the secret",
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: ["--service-account", "-u"],
              description: "Filter keys for the provided service account email",
              args: {
                name: "SERVICE_ACCOUNT",
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
        {
          name: "update",
          description: "Change the status of a service account HMAC",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--activate",
              description: "Sets the state of the specified key to ``ACTIVE''",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--deactivate",
              description:
                "Sets the state of the specified key to ``INACTIVE''",
            },
            {
              name: ["--etag", "-e"],
              description:
                "If provided, the update will only be performed if the specified etag matches the etag of the stored key",
              args: {
                name: "ETAG",
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
              name: "--no-activate",
              description: "Sets the state of the specified key to ``ACTIVE''",
              hidden: true,
            },
            {
              name: "--no-deactivate",
              description:
                "Sets the state of the specified key to ``INACTIVE''",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACCESS_ID",
            description: "Access ID for HMAC key to update",
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
      name: "insights",
      description: "Manage Cloud Storage inventory reports",
      subcommands: [
        {
          name: "dataset-configs",
          description: "Manage Cloud Storage Insights dataset configurations",
          subcommands: [
            {
              name: "create",
              description: "Create a new dataset config for Insights",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--activity-data-retention-period-days",
                  description:
                    "Provide retention period for the activity data in the config. This overrides the retention period for activity data. Otherwise, the `retention_period_days` value is used for activity data as well",
                  args: {
                    name: "ACTIVITY_DATA_RETENTION_DAYS",
                    description: "Int",
                  },
                },
                {
                  name: "--auto-add-new-buckets",
                  description:
                    "Automatically include any new buckets created if they satisfy criteria defined in config settings",
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description for dataset config",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--enable-organization-scope",
                  description:
                    "If passed, the dataset config will be enabled on the organization",
                },
                {
                  name: "--exclude-bucket-names",
                  description: "List of bucket names to be excluded",
                  args: {
                    name: "BUCKETS_NAMES",
                    description: "List",
                  },
                },
                {
                  name: "--exclude-bucket-prefix-regexes",
                  description:
                    "List of bucket prefix regexes to be excluded. Allowed regex patterns are similar to those for the --include-bucket-prefix-regexes flag",
                  args: {
                    name: "BUCKETS_REGEXES",
                    description: "List",
                  },
                },
                {
                  name: "--exclude-source-locations",
                  description: "List of locations for projects to be excluded",
                  args: {
                    name: "LIST_OF_SOURCE_LOCATIONS",
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
                {
                  name: "--identity",
                  description:
                    "The type of service account used in the dataset config. _IDENTITY_TYPE_ must be one of: *IDENTITY_TYPE_PER_CONFIG*, *IDENTITY_TYPE_PER_PROJECT*",
                  args: {
                    name: "IDENTITY_TYPE",
                    description: "String",
                    suggestions: [
                      "IDENTITY_TYPE_PER_CONFIG",
                      "IDENTITY_TYPE_PER_PROJECT",
                    ],
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--include-bucket-names",
                  description: "List of bucket names be included",
                  args: {
                    name: "BUCKETS_NAMES",
                    description: "List",
                  },
                },
                {
                  name: "--include-bucket-prefix-regexes",
                  description:
                    "List of bucket prefix regexes to be included. The dataset config will include all the buckets that match with the prefix regex. Examples of allowed prefix regex patterns can be testbucket```*```, testbucket.```*```foo, testb.+foo```*``` . It should follow syntax specified in google/re2 on GitHub",
                  args: {
                    name: "BUCKETS_REGEXES",
                    description: "List",
                  },
                },
                {
                  name: "--include-source-locations",
                  description: "List of locations for projects to be included",
                  args: {
                    name: "LIST_OF_SOURCE_LOCATIONS",
                    description: "List",
                  },
                },
                {
                  name: "--location",
                  description: "Provide location of the dataset config",
                  priority: 100,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--no-auto-add-new-buckets",
                  description:
                    "Automatically include any new buckets created if they satisfy criteria defined in config settings",
                  hidden: true,
                },
                {
                  name: "--no-enable-organization-scope",
                  description:
                    "If passed, the dataset config will be enabled on the organization",
                  hidden: true,
                },
                {
                  name: "--organization",
                  description: "Provide the source organization number",
                  priority: 100,
                  args: {
                    name: "SOURCE_ORG_NUMBER",
                    description: "Int",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--retention-period-days",
                  description: "Provide retention period for the config",
                  priority: 100,
                  args: {
                    name: "RETENTION_DAYS",
                    description: "Int",
                  },
                },
                {
                  name: "--source-folders",
                  description: "List of source folder IDs",
                  args: {
                    name: "SOURCE_FOLDER_NUMBERS",
                    description: "List",
                  },
                },
                {
                  name: "--source-folders-file",
                  description:
                    "CSV formatted file containing source folder IDs, one per line",
                  args: {
                    name: "SOURCE_FOLDER_NUMBERS_IN_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--source-projects",
                  description: "List of source project numbers",
                  args: {
                    name: "SOURCE_PROJECT_NUMBERS",
                    description: "List",
                  },
                },
                {
                  name: "--source-projects-file",
                  description:
                    "CSV formatted file containing source project numbers, one per line",
                  args: {
                    name: "SOURCE_PROJECT_NUMBERS_IN_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATASET_CONFIG_NAME",
                description: "Provide human readable config name",
              },
            },
            {
              name: "create-link",
              description: "Create a link to a BigQuery instance",
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
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config",
              },
            },
            {
              name: "delete",
              description: "Delete dataset config for Insights",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--auto-delete-link",
                  description:
                    "Delete the BigQuery instance links before the config gets deleted explicitly",
                },
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "Force delete the config by skipping the consent",
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                {
                  name: "--no-auto-delete-link",
                  description:
                    "Delete the BigQuery instance links before the config gets deleted explicitly",
                  hidden: true,
                },
                {
                  name: "--no-force",
                  description:
                    "Force delete the config by skipping the consent",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config",
              },
            },
            {
              name: "delete-link",
              description: "Delete a link to a BigQuery instance",
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
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config",
              },
            },
            {
              name: "describe",
              description: "Describe dataset config for Insights",
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
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config",
              },
            },
            {
              name: "list",
              description:
                "List returns all the Insights dataset configs for given location",
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
                {
                  name: "--location",
                  description: "Provide location of the dataset config",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
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
              description: "Updates a dataset config for Insights",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--activity-data-retention-period-days",
                  description:
                    "Provide retention period for the activity data in the config. This overrides the retention period for activity data. Otherwise, the `retention_period_days` value is used for activity data as well",
                  args: {
                    name: "ACTIVITY_DATA_RETENTION_DAYS",
                    description: "Int",
                  },
                },
                {
                  name: "--auto-add-new-buckets",
                  description:
                    "Automatically include any new buckets created if they satisfy criteria defined in config settings. _AUTO_ADD_NEW_BUCKETS_ must be one of: *true*, *false*",
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description for dataset config",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--enable-organization-scope",
                  description:
                    "If passed, the dataset config will be enabled on the organization",
                },
                {
                  name: "--exclude-bucket-names",
                  description: "List of bucket names to be excluded",
                  args: {
                    name: "BUCKETS_NAMES",
                    description: "List",
                  },
                },
                {
                  name: "--exclude-bucket-prefix-regexes",
                  description:
                    "List of bucket prefix regexes to be excluded. Allowed regex patterns are similar to those for the --include-bucket-prefix-regexes flag",
                  args: {
                    name: "BUCKETS_REGEXES",
                    description: "List",
                  },
                },
                {
                  name: "--exclude-source-locations",
                  description: "List of locations for projects to be excluded",
                  args: {
                    name: "LIST_OF_SOURCE_LOCATIONS",
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
                  name: "--include-bucket-names",
                  description: "List of bucket names be included",
                  args: {
                    name: "BUCKETS_NAMES",
                    description: "List",
                  },
                },
                {
                  name: "--include-bucket-prefix-regexes",
                  description:
                    "List of bucket prefix regexes to be included. The dataset config will include all the buckets that match with the prefix regex. Examples of allowed prefix regex patterns can be testbucket```*```, testbucket.```*```foo, testb.+foo```*``` . It should follow syntax specified in google/re2 on GitHub",
                  args: {
                    name: "BUCKETS_REGEXES",
                    description: "List",
                  },
                },
                {
                  name: "--include-source-locations",
                  description: "List of locations for projects to be included",
                  args: {
                    name: "LIST_OF_SOURCE_LOCATIONS",
                    description: "List",
                  },
                },
                optLocation2,
                optLogHttp,
                {
                  name: "--no-enable-organization-scope",
                  description:
                    "If passed, the dataset config will be enabled on the organization",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--retention-period-days",
                  description: "Provide retention period for the config",
                  args: {
                    name: "RETENTION_DAYS",
                    description: "Int",
                  },
                },
                {
                  name: "--source-folders",
                  description: "List of source folder IDs",
                  args: {
                    name: "SOURCE_FOLDER_NUMBERS",
                    description: "List",
                  },
                },
                {
                  name: "--source-folders-file",
                  description:
                    "CSV formatted file containing source folder IDs, one per line",
                  args: {
                    name: "SOURCE_FOLDER_NUMBERS_IN_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--source-projects",
                  description: "List of source project numbers",
                  args: {
                    name: "SOURCE_PROJECT_NUMBERS",
                    description: "List",
                  },
                },
                {
                  name: "--source-projects-file",
                  description:
                    "CSV formatted file containing source project numbers, one per line",
                  args: {
                    name: "SOURCE_PROJECT_NUMBERS_IN_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config",
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
          name: "inventory-reports",
          description: "Manage Cloud Storage inventory report configurations",
          subcommands: [
            {
              name: "create",
              description: "Create a new inventory report config",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--csv-delimiter",
                  description:
                    "Sets the delimiter that separates the fields in the inventory report CSV file. For example, ``,``",
                  args: {
                    name: "DELIMITER",
                    description: "String",
                  },
                },
                {
                  name: "--csv-header",
                  description:
                    "Indicates whether or not headers are included in the inventory report CSV file. Default is None. Use *--csv-header* to enable and *--no-csv-header* to disable",
                },
                {
                  name: "--csv-separator",
                  description:
                    "Sets the character used to separate the records in the inventory report CSV file. For example, ``\\n``. _SEPARATOR_ must be one of: *\\n*, *\\r\\n*",
                  args: {
                    name: "SEPARATOR",
                    description: "String",
                    suggestions: ["\\n", "\\r\\n"],
                  },
                },
                {
                  name: "--destination",
                  description:
                    "Sets the URL of the destination bucket and path where generated reports are stored. Defaults to <SOURCE_BUCKET_URL>/inventory_reports/",
                  args: {
                    name: "DESTINATION_URL",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description:
                    "Sets the editable name of the report configuration",
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
                  name: "--metadata-fields",
                  description:
                    'The metadata fields to be included in the inventory report. The fields: "project, bucket, name" are REQUIRED. Defaults to all fields being included. _METADATA_FIELDS_ must be one of: *project*, *bucket*, *name*, *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*',
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                  },
                },
                {
                  name: "--no-csv-header",
                  description:
                    "Indicates whether or not headers are included in the inventory report CSV file. Default is None",
                },
                {
                  name: "--no-parquet",
                  description: "Generate reports in parquet format",
                  hidden: true,
                },
                {
                  name: "--parquet",
                  description: "Generate reports in parquet format",
                },
                optProject,
                optQuiet,
                {
                  name: "--schedule-repeats",
                  description:
                    "Sets how often the inventory report configuration will run. Defaults to DAILY. _FREQUENCY_ must be one of: *daily*, *weekly*",
                  args: {
                    name: "FREQUENCY",
                    description: "String",
                    suggestions: ["daily", "weekly"],
                  },
                },
                {
                  name: "--schedule-repeats-until",
                  description:
                    "Sets date after which you want to stop generating inventory reports. For example, 2022-03-30. Defaults to one year from --schedule-starts value",
                  args: {
                    name: "END_DATE",
                  },
                },
                {
                  name: "--schedule-starts",
                  description:
                    "Sets the date you want to start generating inventory reports. For example, 2022-01-30. Should be tomorrow or later based on UTC timezone. Defaults to tomorrow",
                  args: {
                    name: "START_DATE",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SOURCE_BUCKET_URL",
                description:
                  "URL of the source bucket that will contain the inventory report configuration",
              },
            },
            {
              name: "delete",
              description: "Delete an inventory report config",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "If set, all report details for this report config will be deleted",
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                {
                  name: "--no-force",
                  description:
                    "If set, all report details for this report config will be deleted",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config",
              },
            },
            {
              name: "describe",
              description: "Describe an inventory report config",
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
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config",
              },
            },
            {
              name: "details",
              description: "Retrieve details of inventory reports",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe inventory reports detail",
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
                      description:
                        "Google Cloud location for the report-detail",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    optProject,
                    optQuiet,
                    {
                      name: "--report-config",
                      description: "Report Config ID for the report-detail",
                      args: {
                        name: "REPORT_CONFIG",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "REPORT_DETAIL",
                    description:
                      "ID of the report-detail or fully qualified identifier for the report-detail",
                  },
                },
                {
                  name: "list",
                  description: "List inventory report details",
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
                  args: {
                    name: "REPORT_CONFIG",
                    description:
                      "ID of the report-config or fully qualified identifier for the report-config",
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
              name: "list",
              description: "Lists all inventory report configs",
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
                {
                  name: "--location",
                  description: "The location of the report configs",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                {
                  name: "--source",
                  description:
                    "Specifies URL of the source bucket that contains the inventory report configuration",
                  args: {
                    name: "SOURCE_BUCKET_URL",
                    description: "String",
                  },
                },
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update an inventory report config",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-metadata-fields",
                  description:
                    "Adds fields to the metadata_fields list. _METADATA_FIELDS_ must be one of: *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*",
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--csv-delimiter",
                  description:
                    "Sets the delimiter that separates the fields in the inventory report CSV file. For example, ``,``",
                  args: {
                    name: "DELIMITER",
                    description: "String",
                  },
                },
                {
                  name: "--csv-header",
                  description:
                    "Indicates whether or not headers are included in the inventory report CSV file. Default is None. Use *--csv-header* to enable and *--no-csv-header* to disable",
                },
                {
                  name: "--csv-separator",
                  description:
                    "Sets the character used to separate the records in the inventory report CSV file. For example, ``\\n``. _SEPARATOR_ must be one of: *\\n*, *\\r\\n*",
                  args: {
                    name: "SEPARATOR",
                    description: "String",
                    suggestions: ["\\n", "\\r\\n"],
                  },
                },
                {
                  name: "--destination",
                  description:
                    "Sets the URL of the destination bucket and path where generated reports are stored",
                  args: {
                    name: "DESTINATION_URL",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description:
                    "Sets the editable name of the report configuration",
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
                optLocation,
                optLogHttp,
                {
                  name: "--metadata-fields",
                  description:
                    'The metadata fields to be included in the inventory report. The fields: "project, bucket, name" are REQUIRED. _METADATA_FIELDS_ must be one of: *project*, *bucket*, *name*, *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*',
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                  },
                },
                {
                  name: "--no-csv-header",
                  description:
                    "Indicates whether or not headers are included in the inventory report CSV file. Default is None",
                },
                {
                  name: "--no-parquet",
                  description: "Generate reports in parquet format",
                  hidden: true,
                },
                {
                  name: "--parquet",
                  description: "Generate reports in parquet format",
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-metadata-fields",
                  description:
                    "Removes fields from the metadata_fields list. _METADATA_FIELDS_ must be one of: *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*",
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                  },
                },
                {
                  name: "--schedule-repeats",
                  description:
                    "Sets how often the inventory report configuration will run. _FREQUENCY_ must be one of: *daily*, *weekly*",
                  args: {
                    name: "FREQUENCY",
                    description: "String",
                    suggestions: ["daily", "weekly"],
                  },
                },
                {
                  name: "--schedule-repeats-until",
                  description:
                    "Sets date after which you want to stop generating inventory reports. For example, 2022-03-30",
                  args: {
                    name: "END_DATE",
                  },
                },
                {
                  name: "--schedule-starts",
                  description:
                    "Sets the date you want to start generating inventory reports. For example, 2022-01-30. Should be tomorrow or later based on UTC timezone",
                  args: {
                    name: "START_DATE",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config",
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
      name: "intelligence-configs",
      description: "Manage Cloud Storage Intelligence Configurations",
      subcommands: [
        {
          name: "describe",
          description: "Describes storage intelligence configuration",
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
            optOrganization,
            optQuiet,
            optSubFolder,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "disable",
          description: "Disables storage intelligence",
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
            optOrganization,
            optQuiet,
            optSubFolder,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "enable",
          description: "Enables storage intelligence",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--exclude-bucket-id-regexes",
              description:
                'Sets filter for bucket id regexes to exclude. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with an empty list. e.g `--exclude-bucket-id-regexes=""` or `--exclude-bucket-id-regexes=`',
              args: {
                name: "EXCLUDE_BUCKET_ID_REGEXES",
                description: "List",
              },
            },
            {
              name: "--exclude-locations",
              description:
                'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to exclude in storage intelligence filter. To clear excluded locations, provide flag with empty list. e.g `--exclude-locations=""` or `--exclude-locations=`',
              args: {
                name: "EXCLUDE_LOCATIONS",
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
              name: "--include-bucket-id-regexes",
              description:
                'Sets filter for bucket id regexes to include. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with empty list. e.g `--include-bucket-id-regexes=""` or `--include-bucket-id-regexes=`',
              args: {
                name: "INCLUDE_BUCKET_ID_REGEXES",
                description: "List",
              },
            },
            {
              name: "--include-locations",
              description:
                'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to include in storage intelligence filter. To clear included locations, provide flag with empty list. e.g `--include-locations=""` or `--include-locations=`',
              args: {
                name: "INCLUDE_LOCATIONS",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--no-trial-edition",
              description: "Enables Storage Intelligence for TRIAL edition",
              hidden: true,
            },
            optOrganization,
            optQuiet,
            optSubFolder,
            optTraceToken,
            {
              name: "--trial-edition",
              description: "Enables Storage Intelligence for TRIAL edition",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Updates storage intelligence configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--exclude-bucket-id-regexes",
              description:
                'Sets filter for bucket id regexes to exclude. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with an empty list. e.g `--exclude-bucket-id-regexes=""` or `--exclude-bucket-id-regexes=`',
              args: {
                name: "EXCLUDE_BUCKET_ID_REGEXES",
                description: "List",
              },
            },
            {
              name: "--exclude-locations",
              description:
                'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to exclude in storage intelligence filter. To clear excluded locations, provide flag with empty list. e.g `--exclude-locations=""` or `--exclude-locations=`',
              args: {
                name: "EXCLUDE_LOCATIONS",
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
              name: "--include-bucket-id-regexes",
              description:
                'Sets filter for bucket id regexes to include. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with empty list. e.g `--include-bucket-id-regexes=""` or `--include-bucket-id-regexes=`',
              args: {
                name: "INCLUDE_BUCKET_ID_REGEXES",
                description: "List",
              },
            },
            {
              name: "--include-locations",
              description:
                'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to include in storage intelligence filter. To clear included locations, provide flag with empty list. e.g `--include-locations=""` or `--include-locations=`',
              args: {
                name: "INCLUDE_LOCATIONS",
                description: "List",
              },
            },
            {
              name: "--inherit-from-parent",
              description:
                "Specifies storage intelligence config to be inherited from parent",
            },
            optLogHttp,
            {
              name: "--no-inherit-from-parent",
              description:
                "Specifies storage intelligence config to be inherited from parent",
              hidden: true,
            },
            {
              name: "--no-trial-edition",
              description: "Enables Storage Intelligence for TRIAL edition",
              hidden: true,
            },
            optOrganization,
            optQuiet,
            optSubFolder,
            optTraceToken,
            {
              name: "--trial-edition",
              description: "Enables Storage Intelligence for TRIAL edition",
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
      name: "intelligence-findings",
      description: "Findings for Cloud Storage usage",
      subcommands: [
        {
          name: "describe",
          description: "Intelligence finding description",
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
          args: {
            name: "FINDING_ID",
            description: "The ID of the intelligence finding to describe",
          },
        },
        {
          name: "list",
          description: "Intelligence findings list",
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
          name: "revisions",
          description: "Historical revisions of intelligence findings",
          subcommands: [
            {
              name: "describe",
              description: "Historical revision description of a finding",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--finding-id",
                  description:
                    "The ID of the intelligence finding the revision belongs to",
                  priority: 100,
                  args: {
                    name: "FINDING_ID",
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REVISION_ID",
                description: "The ID of the revision to describe",
              },
            },
            {
              name: "list",
              description: "Historical revisions list of a finding",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                {
                  name: "--finding-id",
                  description:
                    "The ID of the intelligence finding to list revisions for",
                  priority: 100,
                  args: {
                    name: "FINDING_ID",
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
                optLimit,
                {
                  name: "--location",
                  description: "Location of the finding",
                  hidden: true,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
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
          name: "summarize",
          description: "Intelligence findings summary",
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
            {
              name: "--location",
              description: "The location to scope the summary to",
              hidden: true,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "The organization to scope the summary to",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optPageSize,
            optQuiet,
            {
              name: "--resource-scope",
              description:
                "The resource scope for the summary. If not specified, summaries are aggregated at the level of the parent resource. _RESOURCE_SCOPE_ must be one of: *PROJECT*, *PARENT*",
              args: {
                name: "RESOURCE_SCOPE",
                description: "String",
                suggestions: ["PROJECT", "PARENT"],
              },
            },
            optSortBy,
            {
              name: "--sub-folder",
              description: "The sub-folder to scope the summary to",
              args: {
                name: "SUB_FOLDER",
                description: "String",
              },
            },
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
      name: "ls",
      description: "List Cloud Storage buckets and objects",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        {
          name: ["--all-versions", "-a"],
          description:
            "Include noncurrent object versions in the listing. This flag is typically only useful for buckets with [object versioning](https://cloud.google.com/storage/docs/object-versioning) enabled. If combined with the `--long` option, the metageneration for each listed object is also included",
        },
        optBillingProject,
        {
          name: ["--buckets", "-b"],
          description:
            "When given a bucket URL, only return buckets. Useful for avoiding the rule that prints the top-level objects of buckets matching a query. Typically used in combination with `--full` to get the full metadata of buckets",
        },
        optConfiguration,
        optDecryptionKeys,
        optEncryptionKey,
        {
          name: ["--etag", "-e"],
          description:
            "Include ETag metadata in listings that use the `--long` flag",
        },
        {
          name: "--exhaustive",
          description:
            "For features like soft delete, the API may return an empty list. If present, continue querying. This may incur costs from repeated LIST calls and may not return any additional objects",
        },
        {
          name: "--fetch-encrypted-object-hashes",
          description:
            "API requests to the LIST endpoint do not fetch the hashes for encrypted objects by default. If this flag is set, a GET request is sent for each encrypted object in order to fetch hashes. This can significantly increase the cost of the command",
        },
        optFlagsFile,
        optFlatten,
        {
          name: ["--full", "-L"],
          description: "List all available metadata about items in rows",
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        {
          name: ["--json", "-j"],
          description: "List all available metadata about items as a JSON dump",
        },
        optLogHttp,
        {
          name: ["--long", "-l"],
          description:
            "For objects only. List size in bytes, creation time, and URL",
        },
        optMetadataFilter,
        {
          name: "--next-page-token",
          description: "Page token for resuming LIST calls",
          args: {
            name: "NEXT_PAGE_TOKEN",
            description: "String",
          },
        },
        {
          name: "--no-exhaustive",
          description:
            "For features like soft delete, the API may return an empty list. If present, continue querying. This may incur costs from repeated LIST calls and may not return any additional objects",
          hidden: true,
        },
        {
          name: "--no-fetch-encrypted-object-hashes",
          description:
            "API requests to the LIST endpoint do not fetch the hashes for encrypted objects by default. If this flag is set, a GET request is sent for each encrypted object in order to fetch hashes. This can significantly increase the cost of the command",
          hidden: true,
        },
        optNoReadPathsFromStdin,
        {
          name: "--no-readable-sizes",
          description:
            "When used with `--long`, print object sizes in human readable format, such as 1 KiB, 234 MiB, or 2 GiB",
          hidden: true,
        },
        optNoSoftDeleted,
        optProject,
        optQuiet,
        optReadPathsFromStdin,
        {
          name: "--readable-sizes",
          description:
            "When used with `--long`, print object sizes in human readable format, such as 1 KiB, 234 MiB, or 2 GiB",
        },
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively list the contents of any directories that match the path expression",
        },
        optSoftDeleted,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "PATH",
        description:
          "The path of objects and directories to list. The path must begin with gs:// and is allowed to contain wildcard characters",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "managed-folders",
      description: "Manage Cloud Storage managed folders",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a managed folder",
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
            name: "URL",
            description:
              "URL of the managed folder to add IAM policy binding to",
          },
        },
        {
          name: "create",
          description: "Create managed folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            name: "URL",
            description: "The URLs of the folders to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete managed folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            optBillingProject,
            optConfiguration,
            optContinueOnError,
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
            name: "URL",
            description: "The URLs of the managed folders to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe managed folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optProject,
            optQuiet,
            optRaw,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URL of the managed folder to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a managed folder",
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
            name: "URL",
            description: "URL of the managed folder to get the IAM policy of",
          },
        },
        {
          name: "list",
          description: "List managed folders",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
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
            optNoRaw,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRaw,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "The URLs of the resources to list",
            isVariadic: true,
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a managed folder",
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
            name: "URL",
            description:
              "URL of managed folder to remove IAM policy binding from",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a managed folder",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optContinueOnError,
            optEtag,
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
          args: [
            {
              name: "URLS",
              description:
                "URLs for managed folders to apply the IAM policy to",
              isVariadic: true,
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
      name: "mv",
      description: "Moves or renames objects",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        {
          name: ["--all-versions", "-A"],
          description:
            "Copy all source versions from a source bucket or folder. If not set, only the live version of each source object is copied",
        },
        optBillingProject,
        optCacheControl,
        optClearCustomContexts,
        optClearCustomMetadata,
        optConfiguration,
        optContentDisposition,
        optContentEncoding,
        optContentLanguage,
        optContentMd5,
        optContentType,
        optContinueOnError,
        optCustomContexts,
        optCustomContextsFile,
        optCustomMetadata,
        optCustomTime,
        {
          name: ["--daisy-chain", "-D"],
          description:
            'Copy in "daisy chain" mode, which means copying an object by first downloading it to the machine where the command is run, then uploading it to the destination bucket. The default mode is a "copy in the cloud," where data is copied without uploading or downloading. During a copy in the cloud, a source composite object remains composite at its destination. However, you can use daisy chain mode to change a composite object into a non-composite object. Note: Daisy chain mode is automatically used when copying between providers',
        },
        optDecryptionKeys,
        {
          name: "--do-not-decompress",
          description: "Do not automatically decompress downloaded gzip files",
        },
        optEncryptionKey2,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGzipInFlight,
        optGzipInFlightAll,
        {
          name: ["--gzip-local", "-z"],
          description:
            "Applies gzip content encoding to any file upload whose extension matches the input extension list. This is useful when uploading files with compressible content such as .js, .css, or .html files. This saves network bandwidth and space in Cloud Storage",
          args: {
            name: "FILE_EXTENSIONS",
            description: "List",
          },
        },
        {
          name: ["--gzip-local-all", "-Z"],
          description:
            "Applies gzip content encoding to file uploads. This option works like the `--gzip-local` option described above, but it applies to all uploaded files, regardless of extension",
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIfGenerationMatch,
        optIfMetagenerationMatch,
        {
          name: "--ignore-symlinks",
          description:
            "Ignore file symlinks instead of copying what they point to",
        },
        optImpersonateServiceAccount,
        {
          name: "--include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers. Please note that for hierarchical namespace buckets, managed folders are always included. Hence this flag would not be applicable to hierarchical namespace buckets",
        },
        optLogHttp,
        {
          name: ["--manifest-path", "-L"],
          description:
            "Outputs a manifest log file with detailed information about each item that was copied. This manifest contains the following information for each item:",
          args: {
            name: "MANIFEST_PATH",
            description: "String",
          },
        },
        optNoClearCustomContexts,
        optNoClearCustomMetadata,
        optNoClobber,
        {
          name: "--no-do-not-decompress",
          description: "Do not automatically decompress downloaded gzip files",
          hidden: true,
        },
        optNoIgnoreSymlinks,
        {
          name: "--no-include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers. Please note that for hierarchical namespace buckets, managed folders are always included. Hence this flag would not be applicable to hierarchical namespace buckets",
          hidden: true,
        },
        optNoPreserveAcl,
        {
          name: "--no-preserve-symlinks",
          description:
            "Preserve symlinks instead of copying what they point to. With this feature enabled, uploaded symlinks will be represented as placeholders in the cloud whose content consists of the linked path. Inversely, such placeholders will be converted to symlinks when downloaded while this feature is enabled, as described at https://cloud.google.com/storage-transfer/docs/metadata-preservation#posix_to",
          hidden: true,
        },
        {
          name: "--no-read-paths-from-stdin",
          description:
            'Read the list of resources to copy from stdin. No need to enter a source argument if this flag is present. Example: "storage cp -I gs://bucket/destination". The input format must consist of one path (e.g., "Documents/data/file1.txt") or one object URL (e.g., "gs://example-bucket/event.log") per line. Use a pipe to send the file list to the command. Example: "cat example-file-list.txt | gcloud storage cp --read-paths-from-stdin gs://example-destination-bucket". Note: To copy the contents of one file directly from stdin, use "-" as the source argument without the "-I" flag',
          hidden: true,
        },
        optPredefinedAcl,
        optPreserveAcl,
        optPreservePosix,
        {
          name: "--preserve-symlinks",
          description:
            "Preserve symlinks instead of copying what they point to. With this feature enabled, uploaded symlinks will be represented as placeholders in the cloud whose content consists of the linked path. Inversely, such placeholders will be converted to symlinks when downloaded while this feature is enabled, as described at https://cloud.google.com/storage-transfer/docs/metadata-preservation#posix_to",
        },
        {
          name: ["--print-created-message", "-v"],
          description: "Prints the version-specific URL for each copied object",
        },
        optProject,
        optQuiet,
        {
          name: ["--read-paths-from-stdin", "-I"],
          description:
            'Read the list of resources to copy from stdin. No need to enter a source argument if this flag is present. Example: "storage cp -I gs://bucket/destination". The input format must consist of one path (e.g., "Documents/data/file1.txt") or one object URL (e.g., "gs://example-bucket/event.log") per line. Use a pipe to send the file list to the command. Example: "cat example-file-list.txt | gcloud storage cp --read-paths-from-stdin gs://example-destination-bucket". Note: To copy the contents of one file directly from stdin, use "-" as the source argument without the "-I" flag',
        },
        optRemoveCustomContexts,
        optRemoveCustomMetadata,
        optRetainUntil,
        optRetentionMode,
        optSkipUnsupported,
        {
          name: ["--storage-class", "-s"],
          description:
            "Specify the storage class of the destination object. If not specified, the default storage class of the destination bucket is used. This option is not valid for copying to non-cloud destinations",
          args: {
            name: "STORAGE_CLASS",
            description: "String",
          },
        },
        optTraceToken,
        optUpdateCustomContexts,
        optUpdateCustomMetadata,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "SOURCE",
          description: "The source path(s) to copy",
          isVariadic: true,
          isOptional: true,
        },
        {
          name: "DESTINATION",
          description: "The destination path",
        },
      ],
    },
    {
      name: "objects",
      description: "Manage Cloud Storage objects",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Grant a principal access to an object",
          hidden: true,
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
            name: "URL",
            description: "URL of bucket to add IAM policy binding to",
          },
        },
        {
          name: "compose",
          description:
            "Concatenate a sequence of objects into a new composite object",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            optBillingProject,
            optClearCustomContexts,
            optConfiguration,
            optCustomContexts,
            optCustomContextsFile,
            {
              name: "--decryption-keys",
              description:
                "A comma-separated list of customer-supplied encryption keys (RFC 4648 section 4 base64-encoded AES256 strings) that will be used to decrypt Cloud Storage objects. Data encrypted with a customer-managed encryption key (CMEK) is decrypted automatically, so CMEKs do not need to be listed here",
              hidden: true,
              args: {
                name: "DECRYPTION_KEY",
                description: "List",
              },
            },
            {
              name: "--delete-source-objects",
              description:
                "If set, the source objects will be deleted after a successful composition. Note that this deletion bypasses the soft delete policy if configured on the bucket",
            },
            optEncryptionKey,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optIfGenerationMatch,
            optIfMetagenerationMatch,
            optImpersonateServiceAccount,
            optLogHttp,
            optNoClearCustomContexts,
            {
              name: "--no-delete-source-objects",
              description:
                "If set, the source objects will be deleted after a successful composition. Note that this deletion bypasses the soft delete policy if configured on the bucket",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRetainUntil,
            optRetentionMode,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The list of source objects that will be concatenated into a single object",
              isVariadic: true,
            },
            {
              name: "DESTINATION",
              description: "The destination object",
            },
          ],
        },
        {
          name: "describe",
          description: "Describe a Cloud Storage object",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            optBillingProject,
            optConfiguration,
            optDecryptionKeys,
            optEncryptionKey,
            {
              name: "--fetch-encrypted-object-hashes",
              description:
                "If the initial GET request returns an object encrypted with a customer-supplied encryption key, the hash fields will be null. If the matching decryption key is present on the system, this flag retries the GET request with the key",
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
              name: "--no-fetch-encrypted-object-hashes",
              description:
                "If the initial GET request returns an object encrypted with a customer-supplied encryption key, the hash fields will be null. If the matching decryption key is present on the system, this flag retries the GET request with the key",
              hidden: true,
            },
            optNoRaw,
            optNoSoftDeleted,
            optProject,
            optQuiet,
            optRaw,
            optSoftDeleted,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "Specifies URL of object to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the access policy for an object",
          hidden: true,
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
            name: "URL",
            description: "Request IAM policy for this object",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Storage objects",
          options: [
            optAccessTokenFile,
            optAccount,
            optAdditionalHeaders,
            optBillingProject,
            optConfiguration,
            optDecryptionKeys,
            optEncryptionKey,
            {
              name: "--exhaustive",
              description:
                "For features like soft delete, the API may return an empty list. If present, continue querying. This may incur costs from repeated LIST calls and may not return any additional objects",
            },
            {
              name: "--fetch-encrypted-object-hashes",
              description:
                "API requests to the LIST endpoint do not fetch the hashes for encrypted objects by default. If this flag is set, a GET request is sent for each encrypted object in order to fetch hashes. This can significantly increase the cost of the command",
            },
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
            optMetadataFilter,
            {
              name: "--next-page-token",
              description: "Page token for resuming LIST calls",
              args: {
                name: "NEXT_PAGE_TOKEN",
                description: "String",
              },
            },
            {
              name: "--no-exhaustive",
              description:
                "For features like soft delete, the API may return an empty list. If present, continue querying. This may incur costs from repeated LIST calls and may not return any additional objects",
              hidden: true,
            },
            {
              name: "--no-fetch-encrypted-object-hashes",
              description:
                "API requests to the LIST endpoint do not fetch the hashes for encrypted objects by default. If this flag is set, a GET request is sent for each encrypted object in order to fetch hashes. This can significantly increase the cost of the command",
              hidden: true,
            },
            optNoRaw,
            optNoSoftDeleted,
            {
              name: "--no-stat",
              description:
                "Emulates gsutil stat-style behavior. Does not show past object versions and changes output format",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRaw,
            optSoftDeleted,
            optSortBy,
            {
              name: "--stat",
              description:
                "Emulates gsutil stat-style behavior. Does not show past object versions and changes output format",
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URLS",
            description: "Specifies URL of objects to list",
            isVariadic: true,
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from an object",
          hidden: true,
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
            name: "URL",
            description: "URL of object to remove IAM policy binding from",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set access policy for an object",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-versions",
              description:
                "Update the IAM policies of all versions of an object in a versioned bucket",
            },
            optBillingProject,
            optConfiguration,
            optContinueOnError,
            optEtag,
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
              name: "--no-all-versions",
              description:
                "Update the IAM policies of all versions of an object in a versioned bucket",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: ["--recursive", "-R", "-r"],
              description:
                "Recursively set the IAM policies of the contents of any directories that match the source path expression",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "URLS",
              description:
                "The URLs for objects whose access policy is being replaced",
              isVariadic: true,
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
          description: "Update Cloud Storage objects",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-file",
              description:
                'Path to a local JSON or YAML formatted file containing a valid policy. See the [ObjectAccessControls resource](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for a representation of JSON formatted files. The output of `gcloud storage [buckets|objects] describe` `--format="multi(acl:format=json)"` is a valid file and can be edited for more fine-grained control',
              args: {
                name: "ACL_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--add-acl-grant",
              description:
                "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage,`--add-acl-grant=entity=user-tim@gmail.com,role=OWNER`",
              args: {
                name: "ACL_GRANT",
                description: "Dict",
              },
            },
            optAdditionalHeaders,
            {
              name: "--all-versions",
              description: "Perform the operation on all object versions",
            },
            optBillingProject,
            optCacheControl,
            {
              name: "--clear-cache-control",
              description: "Clears object cache control",
            },
            {
              name: "--clear-content-disposition",
              description: "Clears object content disposition",
            },
            {
              name: "--clear-content-encoding",
              description: "Clears content encoding",
            },
            {
              name: "--clear-content-language",
              description: "Clears object content language",
            },
            {
              name: "--clear-content-type",
              description: "Clears object content type",
            },
            optClearCustomContexts,
            optClearCustomMetadata,
            {
              name: "--clear-custom-time",
              description: "Clears object custom time",
            },
            {
              name: "--clear-encryption-key",
              description:
                "Clears the encryption key associated with an object. Using this flag triggers a rewrite of affected objects, which are then encrypted using the default encryption key set on the bucket, if one exists, or else with a Google-managed encryption key",
            },
            {
              name: "--clear-retention",
              description:
                "Clears object retention settings and unlocks the configuration. Requires --override-unlocked-retention flag as confirmation",
            },
            optConfiguration,
            optContentDisposition,
            optContentEncoding,
            optContentLanguage,
            optContentType,
            optContinueOnError,
            optCustomContexts,
            optCustomContextsFile,
            optCustomMetadata,
            optCustomTime,
            optDecryptionKeys,
            optEncryptionKey2,
            {
              name: "--event-based-hold",
              description:
                "Enables or disables an event-based hold on objects. Use *--event-based-hold* to enable and *--no-event-based-hold* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optIfGenerationMatch,
            optIfMetagenerationMatch,
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-all-versions",
              description: "Perform the operation on all object versions",
              hidden: true,
            },
            {
              name: "--no-clear-cache-control",
              description: "Clears object cache control",
              hidden: true,
            },
            {
              name: "--no-clear-content-disposition",
              description: "Clears object content disposition",
              hidden: true,
            },
            {
              name: "--no-clear-content-encoding",
              description: "Clears content encoding",
              hidden: true,
            },
            {
              name: "--no-clear-content-language",
              description: "Clears object content language",
              hidden: true,
            },
            {
              name: "--no-clear-content-type",
              description: "Clears object content type",
              hidden: true,
            },
            optNoClearCustomContexts,
            optNoClearCustomMetadata,
            {
              name: "--no-clear-custom-time",
              description: "Clears object custom time",
              hidden: true,
            },
            {
              name: "--no-clear-encryption-key",
              description:
                "Clears the encryption key associated with an object. Using this flag triggers a rewrite of affected objects, which are then encrypted using the default encryption key set on the bucket, if one exists, or else with a Google-managed encryption key",
              hidden: true,
            },
            {
              name: "--no-clear-retention",
              description:
                "Clears object retention settings and unlocks the configuration. Requires --override-unlocked-retention flag as confirmation",
              hidden: true,
            },
            {
              name: "--no-event-based-hold",
              description: "Enables or disables an event-based hold on objects",
            },
            {
              name: "--no-override-unlocked-retention",
              description:
                "Needed for certain retention configuration modifications, such as clearing retention settings and reducing retention time. Note that locked configurations cannot be edited even with this flag",
              hidden: true,
            },
            optNoPreserveAcl,
            {
              name: "--no-read-paths-from-stdin",
              description:
                'Read the list of objects to update from stdin. No need to enter a source argument if this flag is present. Example: "storage objects update -I --content-type=new-type"',
              hidden: true,
            },
            {
              name: "--no-temporary-hold",
              description: "Enables or disables a temporary hold on objects",
            },
            {
              name: "--override-unlocked-retention",
              description:
                "Needed for certain retention configuration modifications, such as clearing retention settings and reducing retention time. Note that locked configurations cannot be edited even with this flag",
            },
            optPredefinedAcl,
            optPreserveAcl,
            optProject,
            optQuiet,
            {
              name: ["--read-paths-from-stdin", "-I"],
              description:
                'Read the list of objects to update from stdin. No need to enter a source argument if this flag is present. Example: "storage objects update -I --content-type=new-type"',
            },
            {
              name: ["--recursive", "-R", "-r"],
              description:
                "Recursively update objects under any buckets or directories that match the URL expression",
            },
            {
              name: "--remove-acl-grant",
              description:
                "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage, `--remove-acl-grant=ENTITY`, where `ENTITY` has a valid ACL entity format, such as `user-tim@gmail.com`, `group-admins`, `allUsers`, etc",
              args: {
                name: "REMOVE_ACL_GRANT",
                description: "String",
              },
            },
            optRemoveCustomContexts,
            optRemoveCustomMetadata,
            {
              name: "--retain-until",
              description:
                "Ensures the object is retained until the specified time in RFC 3339 format. Requires --override-unlocked-retention flag to shorten the retain-until time in unlocked configurations",
              args: {
                name: "DATETIME",
              },
            },
            {
              name: "--retention-mode",
              description:
                'Sets the object retention mode to either "Locked" or "Unlocked". When retention mode is "Locked", the retain until time can only be increased. _RETENTION_MODE_ must be one of: *Locked*, *Unlocked*',
              args: {
                name: "RETENTION_MODE",
                description: "String",
                suggestions: ["Locked", "Unlocked"],
              },
            },
            {
              name: ["--storage-class", "-s"],
              description:
                "Specify the storage class of the object. Using this flag triggers a rewrite of underlying object data",
              args: {
                name: "STORAGE_CLASS",
                description: "String",
              },
            },
            {
              name: "--temporary-hold",
              description:
                "Enables or disables a temporary hold on objects. Use *--temporary-hold* to enable and *--no-temporary-hold* to disable",
            },
            optTraceToken,
            optUpdateCustomContexts,
            optUpdateCustomMetadata,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description: "Specifies URLs of objects to update",
            isVariadic: true,
            isOptional: true,
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
      description: "Manage storage operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a storage operation",
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
            name: "OPERATION_NAME",
            description:
              "The operation name including the Cloud Storage bucket and operation ID",
          },
        },
        {
          name: "describe",
          description: "Get configuration and latest storage operation details",
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
            name: "OPERATION_NAME",
            description:
              "The operation name including the Cloud Storage bucket and operation ID",
          },
        },
        {
          name: "list",
          description: "List storage operations",
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
            optProject,
            optQuiet,
            {
              name: "--server-filter",
              description:
                "Server-side filter string used to determine what operations to return. Example: '(done = true AND complete_time >= \"2023-01-01T00:00:00Z\") OR requested_cancellation = true' Note that the entire filter string must be in quotes and date strings within the filter must be in embedded quotes",
              args: {
                name: "SERVER_FILTER",
                description: "String",
              },
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT_RESOURCE_NAME",
            description:
              'The operation parent resource in the format "projects/```_```/buckets/BUCKET"',
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
      name: "restore",
      description: "Restore one or more soft-deleted objects",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: ["--all-versions", "-a"],
          description: "Restores all versions of soft-deleted objects",
        },
        {
          name: "--allow-overwrite",
          description:
            "If included, live objects will be overwritten. If versioning is enabled, this will result in a noncurrent object. If versioning is not enabled, this will result in a soft-deleted object",
        },
        {
          name: "--async",
          description:
            "Initiates an asynchronous bulk restore operation on the specified bucket",
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--created-after-time",
          description:
            "Restores only the objects that were created after this time",
          args: {
            name: "CREATED_AFTER_TIME",
          },
        },
        {
          name: "--created-before-time",
          description:
            "Restores only the objects that were created before this time",
          args: {
            name: "CREATED_BEFORE_TIME",
          },
        },
        {
          name: "--deleted-after-time",
          description:
            "Restores only the objects that were soft-deleted after this time",
          args: {
            name: "DELETED_AFTER_TIME",
          },
        },
        {
          name: "--deleted-before-time",
          description:
            "Restores only the objects that were soft-deleted before this time",
          args: {
            name: "DELETED_BEFORE_TIME",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIfGenerationMatch,
        optIfMetagenerationMatch,
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-allow-overwrite",
          description:
            "If included, live objects will be overwritten. If versioning is enabled, this will result in a noncurrent object. If versioning is not enabled, this will result in a soft-deleted object",
          hidden: true,
        },
        {
          name: "--no-async",
          description:
            "Initiates an asynchronous bulk restore operation on the specified bucket",
          hidden: true,
        },
        optNoPreserveAcl,
        optNoReadPathsFromStdin,
        optPreserveAcl,
        optProject,
        optQuiet,
        optReadPathsFromStdin,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URLS",
        description: "The url of objects to list",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "rm",
      description: "Delete objects and buckets",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        {
          name: ["--all-versions", "-a"],
          description:
            "Delete all [versions](https://cloud.google.com/storage/docs/object-versioning) of an object",
        },
        optBillingProject,
        optConfiguration,
        optContinueOnError,
        {
          name: "--exclude-managed-folders",
          description:
            "Excludes managed folders from command operations. By default gcloud storage includes managed folders in recursive removals. Please note that this flag would not be applicable for hierarchical namespace buckets as we always list managed folders for these buckets",
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIfGenerationMatch,
        optIfMetagenerationMatch,
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-all-versions",
          description:
            "Delete all [versions](https://cloud.google.com/storage/docs/object-versioning) of an object",
          hidden: true,
        },
        {
          name: "--no-exclude-managed-folders",
          description:
            "Excludes managed folders from command operations. By default gcloud storage includes managed folders in recursive removals. Please note that this flag would not be applicable for hierarchical namespace buckets as we always list managed folders for these buckets",
          hidden: true,
        },
        optNoReadPathsFromStdin,
        {
          name: "--no-recursive",
          description:
            "Recursively delete the contents of buckets or directories that match the path expression. By default, this will delete managed folders as well. If the path is set to a bucket, like ``gs://bucket'', the bucket is also deleted. This option implies the `--all-versions` option. If you want to delete only live object versions, use the ``**'' wildcard instead",
          hidden: true,
        },
        optProject,
        optQuiet,
        optReadPathsFromStdin,
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively delete the contents of buckets or directories that match the path expression. By default, this will delete managed folders as well. If the path is set to a bucket, like ``gs://bucket'', the bucket is also deleted. This option implies the `--all-versions` option. If you want to delete only live object versions, use the ``**'' wildcard instead",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URLS",
        description: "The URLs of the resources to delete",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "rsync",
      description: "Synchronize content of two buckets/directories",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalHeaders,
        optBillingProject,
        optCacheControl,
        {
          name: "--checksums-only",
          description:
            "When comparing objects with matching names at the source and destination, skip modification time check and compare object hashes. Normally, hashes are only compared if modification times are not available",
        },
        optClearCustomContexts,
        optClearCustomMetadata,
        optConfiguration,
        optContentDisposition,
        optContentEncoding,
        optContentLanguage,
        optContentMd5,
        optContentType,
        optContinueOnError,
        optCustomContexts,
        optCustomContextsFile,
        optCustomMetadata,
        optCustomTime,
        optDecryptionKeys,
        {
          name: "--delete-unmatched-destination-objects",
          description:
            "Delete extra files under DESTINATION not found under SOURCE. By default extra files are not deleted. Managed folders are not affected by this flag",
        },
        {
          name: "--dry-run",
          description:
            "Print what operations rsync would perform without actually executing them",
        },
        optEncryptionKey2,
        {
          name: ["--exclude", "-x"],
          description: "Exclude objects matching regex pattern from rsync",
          args: {
            name: "REGEX",
            description: "List",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        optGzipInFlight,
        optGzipInFlightAll,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIfGenerationMatch,
        optIfMetagenerationMatch,
        {
          name: "--ignore-symlinks",
          description:
            "Ignore file symlinks instead of copying what they point to. Enabled by default, use *--no-ignore-symlinks* to disable",
        },
        optImpersonateServiceAccount,
        {
          name: "--include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers",
        },
        optLogHttp,
        {
          name: "--no-checksums-only",
          description:
            "When comparing objects with matching names at the source and destination, skip modification time check and compare object hashes. Normally, hashes are only compared if modification times are not available",
          hidden: true,
        },
        optNoClearCustomContexts,
        optNoClearCustomMetadata,
        optNoClobber,
        {
          name: "--no-delete-unmatched-destination-objects",
          description:
            "Delete extra files under DESTINATION not found under SOURCE. By default extra files are not deleted. Managed folders are not affected by this flag",
          hidden: true,
        },
        {
          name: "--no-dry-run",
          description:
            "Print what operations rsync would perform without actually executing them",
          hidden: true,
        },
        optNoIgnoreSymlinks,
        {
          name: "--no-include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers",
          hidden: true,
        },
        {
          name: "--no-preserve-acl",
          description:
            "Preserves ACLs when copying in the cloud. This option is Cloud Storage-only, and you need OWNER access to all copied objects. If all objects in the destination bucket should have the same ACL, you can also set a default object ACL on that bucket instead of using this flag. Preserving ACLs is the default behavior for updating existing objects",
          hidden: true,
        },
        optPredefinedAcl,
        {
          name: ["--preserve-acl", "-p"],
          description:
            "Preserves ACLs when copying in the cloud. This option is Cloud Storage-only, and you need OWNER access to all copied objects. If all objects in the destination bucket should have the same ACL, you can also set a default object ACL on that bucket instead of using this flag. Preserving ACLs is the default behavior for updating existing objects",
          hidden: true,
        },
        optPreservePosix,
        optProject,
        optQuiet,
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively copy the contents of any directories that match the source path expression",
        },
        optRemoveCustomContexts,
        optRemoveCustomMetadata,
        {
          name: ["--skip-if-dest-has-newer-mtime", "-u"],
          description:
            "Skip operating on destination object if it has a newer modification time than the source",
        },
        optSkipUnsupported,
        optTraceToken,
        optUpdateCustomContexts,
        optUpdateCustomMetadata,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "SOURCE",
          description: "The source container path",
        },
        {
          name: "DESTINATION",
          description: "The destination container path",
        },
      ],
    },
    {
      name: "service-agent",
      description:
        "Manage a project's Cloud Storage service agent, which is used to perform Cloud KMS operations",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--authorize-cmek",
          description:
            "Adds appropriate encrypt/decrypt permissions to the specified Cloud KMS key. This allows the Cloud Storage service agent to write and read Cloud KMS-encrypted objects in buckets associated with the service agent's project",
          args: {
            name: "AUTHORIZE_CMEK",
            description: "String",
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
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "sign-url",
      description:
        "Generate a URL with embedded authentication that can be used by anyone",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: ["--duration", "-d"],
          description:
            "Specifies the duration that the signed url should be valid for, default duration is 1 hour. For example 10s for 10 seconds. See $ gcloud topic datetimes for information on duration formats",
          args: {
            name: "DURATION",
            description: "Int",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--headers",
          description:
            "Specifies the headers to be used in the signed request. Possible headers are listed in the XML API's documentation: https://cloud.google.com/storage/docs/xml-api/reference-headers#headers",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: ["--http-verb", "-m"],
          description:
            "Specifies the HTTP verb to be authorized for use with the signed URL, default is GET. When using a signed URL to start a resumable upload session, you will need to specify the ``x-goog-resumable:start'' header in the request or else signature validation will fail",
          args: {
            name: "HTTP_VERB",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-path-style-url",
          description: "Generate path-style signed URL",
          hidden: true,
        },
        {
          name: "--path-style-url",
          description: "Generate path-style signed URL",
        },
        {
          name: "--private-key-file",
          description:
            "The service account private key used to generate the cryptographic signature for the generated URL. Must be in PKCS12 or JSON format. If encrypted, will prompt for the passphrase used to protect the private key file (default ``notasecret'')",
          args: {
            name: "PRIVATE_KEY_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: ["--private-key-password", "-p"],
          description:
            "Specifies the PRIVATE_KEY_FILE password instead of prompting",
          args: {
            name: "PRIVATE_KEY_PASSWORD",
            description: "String",
          },
        },
        optProject,
        {
          name: "--query-params",
          description:
            "Specifies the query parameters to be used in the signed request. Possible query parameters are listed in the XML API's documentation: https://cloud.google.com/storage/docs/xml-api/reference-headers#query",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optQuiet,
        {
          name: ["--region", "-r"],
          description:
            "Specifies the region in which the resources for which you are creating signed URLs are stored",
          args: {
            name: "REGION",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "URL",
        description: "The URLs to be signed. May contain wildcards",
        isVariadic: true,
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
};

export default completionSpec;
