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

const optAutoEnable: Fig.Option = {
  name: "--auto-enable",
  description:
    "If this flag is set, the Certificate Authority will be automatically enabled upon creation",
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

const optDnsSan: Fig.Option = {
  name: "--dns-san",
  description: "One or more comma-separated DNS Subject Alternative Names",
  args: {
    name: "DNS_SAN",
    description: "List",
  },
};

const optEmailSan: Fig.Option = {
  name: "--email-san",
  description: "One or more comma-separated email Subject Alternative Names",
  args: {
    name: "EMAIL_SAN",
    description: "List",
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

const optIgnoreDependentResources: Fig.Option = {
  name: "--ignore-dependent-resources",
  description:
    "This field skips the integrity check that would normally prevent breaking a CA Pool if it is used by another cloud resource and allows the CA Pool to be in a state where it is not able to issue certificates. Doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA Pool would not be able to issue certificates",
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

const optIpSan: Fig.Option = {
  name: "--ip-san",
  description: "One or more comma-separated IP Subject Alternative Names",
  args: {
    name: "IP_SAN",
    description: "List",
  },
};

const optIssuerLocation: Fig.Option = {
  name: "--issuer-location",
  description: "The location of the CERTIFICATE",
  args: {
    name: "ISSUER_LOCATION",
    description: "String",
  },
};

const optIssuerPool: Fig.Option = {
  name: "--issuer-pool",
  description: "The parent CA Pool of the CERTIFICATE",
  args: {
    name: "ISSUER_POOL",
    description: "String",
  },
};

const optKmsKey: Fig.Option = {
  name: "--kms-key",
  description: "The KMS key of the key version",
  args: {
    name: "KMS_KEY",
    description: "String",
  },
};

const optKmsKeyVersion: Fig.Option = {
  name: "--kms-key-version",
  description:
    "ID of the key version or fully qualified identifier for the key version",
  priority: 100,
  args: {
    name: "KMS_KEY_VERSION",
    description: "String",
  },
};

const optKmsKeyring: Fig.Option = {
  name: "--kms-keyring",
  description: "The KMS keyring of the key version",
  args: {
    name: "KMS_KEYRING",
    description: "String",
  },
};

const optKmsLocation: Fig.Option = {
  name: "--kms-location",
  description: "The location of the key version",
  args: {
    name: "KMS_LOCATION",
    description: "String",
  },
};

const optKmsProject: Fig.Option = {
  name: "--kms-project",
  description: "The project containing the key version",
  args: {
    name: "KMS_PROJECT",
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
  description: "The location of the CA Pool",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location of the CA_POOL",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location of the CERTIFICATE_AUTHORITY",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location of the CERTIFICATE_TEMPLATE",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location of the Certificate Template",
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

const optNameConstraintsCritical: Fig.Option = {
  name: "--name-constraints-critical",
  description:
    "Indicates whether or not name constraints are marked as critical. Name constraints are considered critical unless explicitly set to false. Enabled by default, use *--no-name-constraints-critical* to disable",
};

const optNameExcludedDns: Fig.Option = {
  name: "--name-excluded-dns",
  description:
    "One or more comma-separated DNS names which are excluded from being issued certificates. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com`, while `example1.com` does not",
  args: {
    name: "NAME_EXCLUDED_DNS",
    description: "List",
  },
};

const optNameExcludedEmail: Fig.Option = {
  name: "--name-excluded-email",
  description:
    "One or more comma-separated emails which are excluded from being issued certificates. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain",
  args: {
    name: "NAME_EXCLUDED_EMAIL",
    description: "List",
  },
};

const optNameExcludedIp: Fig.Option = {
  name: "--name-excluded-ip",
  description:
    "One or more comma-separated IP ranges which are excluded from being issued certificates. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4",
  args: {
    name: "NAME_EXCLUDED_IP",
    description: "List",
  },
};

const optNameExcludedUri: Fig.Option = {
  name: "--name-excluded-uri",
  description:
    "One or more comma-separated URIs which are excluded from being issued certificates. The value can be a hostname or a domain with a leading period (like `.example.com`)",
  args: {
    name: "NAME_EXCLUDED_URI",
    description: "List",
  },
};

const optNamePermittedDns: Fig.Option = {
  name: "--name-permitted-dns",
  description:
    "One or more comma-separated DNS names which are permitted to be issued certificates. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com`, while `example1.com` does not",
  args: {
    name: "NAME_PERMITTED_DNS",
    description: "List",
  },
};

const optNamePermittedEmail: Fig.Option = {
  name: "--name-permitted-email",
  description:
    "One or more comma-separated email addresses which are permitted to be issued certificates. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain",
  args: {
    name: "NAME_PERMITTED_EMAIL",
    description: "List",
  },
};

const optNamePermittedIp: Fig.Option = {
  name: "--name-permitted-ip",
  description:
    "One or more comma-separated IP ranges which are permitted to be issued certificates. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4",
  args: {
    name: "NAME_PERMITTED_IP",
    description: "List",
  },
};

const optNamePermittedUri: Fig.Option = {
  name: "--name-permitted-uri",
  description:
    "One or more comma-separated URIs which are permitted to be issued certificates. The value can be a hostname or a domain with a leading period (like `.example.com`)",
  args: {
    name: "NAME_PERMITTED_URI",
    description: "List",
  },
};

const optNoAutoEnable: Fig.Option = {
  name: "--no-auto-enable",
  description:
    "If this flag is set, the Certificate Authority will be automatically enabled upon creation",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
  hidden: true,
};

const optNoIgnoreDependentResources: Fig.Option = {
  name: "--no-ignore-dependent-resources",
  description:
    "This field skips the integrity check that would normally prevent breaking a CA Pool if it is used by another cloud resource and allows the CA Pool to be in a state where it is not able to issue certificates. Doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA Pool would not be able to issue certificates",
  hidden: true,
};

const optNoNameConstraintsCritical: Fig.Option = {
  name: "--no-name-constraints-critical",
  description:
    "Indicates whether or not name constraints are marked as critical. Name constraints are considered critical unless explicitly set to false",
  hidden: true,
};

const optNoUnconstrainedChainLength: Fig.Option = {
  name: "--no-unconstrained-chain-length",
  description:
    "If set, allows an unbounded number of subordinate CAs under this newly issued CA certificate. This can only be provided if neither `--use-preset-profile` nor `--max-chain-length` are provided",
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
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
    description: "Int",
  },
};

const optPageSize2: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optPool: Fig.Option = {
  name: "--pool",
  description: "The parent CA Pool of the CERTIFICATE_AUTHORITY",
  args: {
    name: "POOL",
    description: "String",
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

const optSubject: Fig.Option = {
  name: "--subject",
  description:
    'X.501 name of the certificate subject. Example: --subject "C=US,ST=California,L=Mountain View,O=Google LLC,CN=google.com"',
  args: {
    name: "SUBJECT",
    description: "Dict",
  },
};

const optSubjectFile: Fig.Option = {
  name: "--subject-file",
  description: "A yaml file containing the RDN sequence for the Subject field",
  hidden: true,
  args: {
    name: "SUBJECT_FILE",
    template: "filepaths",
  },
};

const optSubjectKeyId: Fig.Option = {
  name: "--subject-key-id",
  description:
    "Optional field to specify subject key ID for certificate. DO NOT USE except to maintain a previously established identifier for a public key, whose SKI was not generated using method (1) described in RFC 5280 section 4.2.1.2",
  args: {
    name: "SUBJECT_KEY_ID",
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

const optUnconstrainedChainLength: Fig.Option = {
  name: "--unconstrained-chain-length",
  description:
    "If set, allows an unbounded number of subordinate CAs under this newly issued CA certificate. This can only be provided if neither `--use-preset-profile` nor `--max-chain-length` are provided",
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

const optUriSan: Fig.Option = {
  name: "--uri-san",
  description: "One or more comma-separated URI Subject Alternative Names",
  args: {
    name: "URI_SAN",
    description: "List",
  },
};

const optUsePresetProfile: Fig.Option = {
  name: "--use-preset-profile",
  description:
    "The name of an existing preset profile used to encapsulate X.509 parameter values. USE_PRESET_PROFILE must be one of: leaf_client_tls, leaf_code_signing, leaf_mtls, leaf_server_tls, leaf_smime, root_unconstrained, subordinate_client_tls_pathlen_0, subordinate_code_signing_pathlen_0, subordinate_mtls_pathlen_0, subordinate_server_tls_pathlen_0, subordinate_smime_pathlen_0, subordinate_unconstrained_pathlen_0",
  args: {
    name: "USE_PRESET_PROFILE",
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
  name: "privateca",
  description: "Manage private Certificate Authorities on Google Cloud",
  subcommands: [
    {
      name: "certificates",
      description: "Manage certificates",
      subcommands: [
        {
          name: "create",
          description: "Create a new certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--ca",
              description:
                "The name of an existing certificate authority to use for issuing the certificate. If omitted, a certificate authority will be will be chosen from the CA pool by the service on your behalf",
              args: {
                name: "CA",
                description: "String",
              },
            },
            {
              name: "--cert-output-file",
              description:
                "The path where the resulting PEM-encoded certificate chain file should be written (ordered from leaf to root)",
              args: {
                name: "CERT_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--csr",
              description:
                "A PEM-encoded certificate signing request file path",
              priority: 100,
              args: {
                name: "CSR",
                description: "String",
              },
            },
            optDnsSan,
            optEmailSan,
            {
              name: "--extended-key-usages",
              description:
                "The list of extended key usages for this certificate. This can only be provided if `--use-preset-profile` is not provided. _EXTENDED_KEY_USAGES_ must be one of: *server_auth*, *client_auth*, *code_signing*, *email_protection*, *time_stamping*, *ocsp_signing*",
              args: {
                name: "EXTENDED_KEY_USAGES",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--generate-key",
              description:
                "Use this flag to have a new RSA-2048 private key securely generated on your machine",
              priority: 100,
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optIpSan,
            {
              name: "--is-ca-cert",
              description:
                "Whether this certificate is for a CertificateAuthority or not. Indicates the Certificate Authority field in the x509 basic constraints extension",
            },
            optIssuerLocation,
            optIssuerPool,
            {
              name: "--key-output-file",
              description:
                "The path where the generated private key file should be written (in PEM format)",
              priority: 100,
              args: {
                name: "KEY_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--key-usages",
              description:
                "The list of key usages for this certificate. This can only be provided if `--use-preset-profile` is not provided. _KEY_USAGES_ must be one of: *digital_signature*, *content_commitment*, *key_encipherment*, *data_encipherment*, *key_agreement*, *cert_sign*, *crl_sign*, *encipher_only*, *decipher_only*",
              args: {
                name: "KEY_USAGES",
                description: "List",
              },
            },
            optKmsKey,
            optKmsKeyVersion,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            {
              name: "--max-chain-length",
              description:
                "Maximum depth of subordinate CAs allowed under this CA for a CA certificate. This can only be provided if neither `--use-preset-profile` nor `--unconstrained-chain-length` are provided",
              args: {
                name: "MAX_CHAIN_LENGTH",
                description: "Int",
              },
            },
            optNameConstraintsCritical,
            optNameExcludedDns,
            optNameExcludedEmail,
            optNameExcludedIp,
            optNameExcludedUri,
            optNamePermittedDns,
            optNamePermittedEmail,
            optNamePermittedIp,
            optNamePermittedUri,
            {
              name: "--no-is-ca-cert",
              description:
                "Whether this certificate is for a CertificateAuthority or not. Indicates the Certificate Authority field in the x509 basic constraints extension",
              hidden: true,
            },
            optNoNameConstraintsCritical,
            {
              name: "--no-rdn-sequence-subject",
              description:
                "If this value is set then the issued certificate will use the subject found in the CSR preserving the exact RDN sequence",
              hidden: true,
            },
            optNoUnconstrainedChainLength,
            {
              name: "--no-validate-only",
              description:
                "If this flag is set, the certificate resource will not be persisted and the returned certificate will not contain the pem_certificate field",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--rdn-sequence-subject",
              description:
                "If this value is set then the issued certificate will use the subject found in the CSR preserving the exact RDN sequence",
            },
            {
              name: "--requested-not-before-time",
              description:
                "The requested not before time for the certificate, in ISO 8601 format (e.g., 2026-04-29T23:18:06Z)",
              args: {
                name: "REQUESTED_NOT_BEFORE_TIME",
                description: "String",
              },
            },
            optSubject,
            optSubjectFile,
            optSubjectKeyId,
            {
              name: "--template",
              description:
                "ID of the certificate_template or fully qualified identifier for the certificate_template",
              priority: 100,
              args: {
                name: "TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--template-location",
              description: "The location of the certificate_template",
              args: {
                name: "TEMPLATE_LOCATION",
                description: "String",
              },
            },
            optTraceToken,
            optUnconstrainedChainLength,
            optUriSan,
            optUsePresetProfile,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If this flag is set, the certificate resource will not be persisted and the returned certificate will not contain the pem_certificate field",
            },
            {
              name: "--validity",
              description:
                "The validity of this certificate, as an ISO8601 duration. Defaults to 30 days",
              args: {
                name: "VALIDITY",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Get metadata for a certificate",
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
            optIssuerLocation,
            {
              name: "--issuer-pool",
              description: "The ID of the issuing CA Pool",
              args: {
                name: "ISSUER_POOL",
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE",
          },
        },
        {
          name: "export",
          description: "Export a pem-encoded certificate to a file",
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
              name: "--include-chain",
              description:
                "Whether to include the certificate's issuer chain in the exported file. If this is set, the resulting file will contain the pem-encoded certificate and its issuing chain, ordered from leaf to root",
            },
            optIssuerLocation,
            optIssuerPool,
            optLogHttp,
            {
              name: "--no-include-chain",
              description:
                "Whether to include the certificate's issuer chain in the exported file. If this is set, the resulting file will contain the pem-encoded certificate and its issuing chain, ordered from leaf to root",
              hidden: true,
            },
            {
              name: "--output-file",
              description:
                "The path where the resulting PEM-encoded certificate will be written",
              priority: 100,
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE",
          },
        },
        {
          name: "list",
          description: "List certificates within a project",
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
              name: "--issuer-pool",
              description:
                "ID of the CA_POOL or fully qualified identifier for the CA_POOL",
              args: {
                name: "ISSUER_POOL",
                description: "String",
              },
            },
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
          name: "revoke",
          description: "Revoke a certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate",
              description:
                "ID of the certificate or fully qualified identifier for the certificate",
              priority: 100,
              args: {
                name: "CERTIFICATE",
                description: "String",
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
              name: "--issuer-location",
              description: "The location of the Issuing CA pool",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
              },
            },
            {
              name: "--issuer-pool",
              description:
                "ID of the Issuing CA pool or fully qualified identifier for the Issuing CA pool",
              priority: 100,
              args: {
                name: "ISSUER_POOL",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--reason",
              description:
                "Revocation reason to include in the CRL. _REASON_ must be one of: *affiliation-changed*, *attribute-authority-compromise*, *certificate-authority-compromise*, *certificate-hold*, *cessation-of-operation*, *key-compromise*, *privilege-withdrawn*, *unspecified*, *superseded*",
              args: {
                name: "REASON",
                suggestions: [
                  "affiliation-changed",
                  "attribute-authority-compromise",
                  "certificate-authority-compromise",
                  "certificate-hold",
                  "cessation-of-operation",
                  "key-compromise",
                  "privilege-withdrawn",
                  "unspecified",
                  "superseded",
                ],
              },
            },
            {
              name: "--serial-number",
              description: "The serial number of the certificate",
              args: {
                name: "SERIAL_NUMBER",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an existing certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optIssuerLocation,
            optIssuerPool,
            optLogHttp,
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE",
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
      description: "Manage locations",
      subcommands: [
        {
          name: "list",
          description: "List supported locations for the Private CA GA API",
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
            optPageSize2,
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
      description: "Manage operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an operation ran on the Private CA API",
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
              description: "The location of the operation to describe",
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
          description: "List operations for the Private CA API",
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
              description:
                "ID of the location or fully qualified identifier for the location",
              priority: 100,
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
      name: "pools",
      description: "Manage CA pools",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a CA pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
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
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool",
          },
        },
        {
          name: "create",
          description: "Create a new CA Pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--encryption-key",
              description:
                "The full resource name of the Cloud KMS key to use for encrypting certificate data at rest. The key must be in the same region as the CA pool",
              args: {
                name: "ENCRYPTION_KEY",
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
              name: "--issuance-policy",
              description:
                "A YAML file describing this CA Pool's issuance policy",
              args: {
                name: "ISSUANCE_POLICY",
                template: "filepaths",
              },
            },
            optLabels,
            optLocation2,
            optLogHttp,
            {
              name: "--no-publish-ca-cert",
              description:
                "If this is enabled, the following will happen: 1) The CA certificates will be written to a known location within the CA distribution point. 2) The AIA extension in all issued certificates will point to the CA cert URL in that distribition point",
              hidden: true,
            },
            {
              name: "--no-publish-crl",
              description:
                "If this gets enabled, the following will happen: 1) CRLs will be written to a known location within the CA distribution point. 2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point",
              hidden: true,
            },
            optProject,
            {
              name: "--publish-ca-cert",
              description:
                "If this is enabled, the following will happen: 1) The CA certificates will be written to a known location within the CA distribution point. 2) The AIA extension in all issued certificates will point to the CA cert URL in that distribition point",
            },
            {
              name: "--publish-crl",
              description:
                "If this gets enabled, the following will happen: 1) CRLs will be written to a known location within the CA distribution point. 2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point",
            },
            {
              name: "--publishing-encoding-format",
              description:
                "The encoding format of the content published to storage buckets. _PUBLISHING_ENCODING_FORMAT_ must be one of: *der*, *pem*",
              args: {
                name: "PUBLISHING_ENCODING_FORMAT",
                suggestions: ["der", "pem"],
              },
            },
            optQuiet,
            {
              name: "--tier",
              description:
                "The tier for the Certificate Authority. _TIER_ must be one of: *devops*, *enterprise*",
              args: {
                name: "TIER",
                suggestions: ["devops", "enterprise"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL",
          },
        },
        {
          name: "delete",
          description: "Delete a CA pool",
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
            optIgnoreDependentResources,
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optNoIgnoreDependentResources,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a CA pool",
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
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool",
          },
        },
        {
          name: "get-ca-certs",
          description:
            "Get the root CA certs for all active CAs in the CA pool",
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
            {
              name: "--output-file",
              description:
                "The path where the concatenated PEM certificates will be written. This will include the root CA certificate for each active CA in the CA pool",
              priority: 100,
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
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a CA pool",
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
            optPageSize2,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool",
          },
        },
        {
          name: "list",
          description: "List CA pools within a project",
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
              description:
                "Location of the CA pools. If this is not specified, CA pools across all locations will be listed",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a CA pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
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
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description: "The role to remove the principal from",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a CA pool",
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
          args: [
            {
              name: "POOL",
              description:
                "ID of the CA Pool or fully qualified identifier for the CA Pool",
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
          description: "Update an existing CA Pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--encryption-key",
              description:
                "The full resource name of the Cloud KMS key to use for encrypting certificate data at rest. The key must be in the same region as the CA pool",
              args: {
                name: "ENCRYPTION_KEY",
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
              name: "--issuance-policy",
              description:
                "A YAML file describing this CA Pool's issuance policy",
              args: {
                name: "ISSUANCE_POLICY",
                template: "filepaths",
              },
            },
            optLocation2,
            optLogHttp,
            optNoClearLabels,
            {
              name: "--no-publish-ca-cert",
              description:
                "If this is enabled, the following will happen: 1) The CA certificates will be written to a known location within the CA distribution point. 2) The AIA extension in all issued certificates will point to the CA cert URL in that distribution point",
              hidden: true,
            },
            {
              name: "--no-publish-crl",
              description:
                "If this gets enabled, the following will happen: 1) CRLs will be written to a known location within the CA distribution point. 2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point",
              hidden: true,
            },
            optProject,
            {
              name: "--publish-ca-cert",
              description:
                "If this is enabled, the following will happen: 1) The CA certificates will be written to a known location within the CA distribution point. 2) The AIA extension in all issued certificates will point to the CA cert URL in that distribution point",
            },
            {
              name: "--publish-crl",
              description:
                "If this gets enabled, the following will happen: 1) CRLs will be written to a known location within the CA distribution point. 2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point",
            },
            {
              name: "--publishing-encoding-format",
              description:
                "The encoding format of the content published to storage buckets. _PUBLISHING_ENCODING_FORMAT_ must be one of: *der*, *pem*",
              args: {
                name: "PUBLISHING_ENCODING_FORMAT",
                suggestions: ["der", "pem"],
              },
            },
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL",
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
      name: "roots",
      description: "Manage root certificate authorities",
      subcommands: [
        {
          name: "create",
          description: "Create a new root certificate authority",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoEnable,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The name of an existing storage bucket to use for storing the CA certificates and CRLs for CAs in this pool. If omitted, a new bucket will be created and managed by the service on your behalf",
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--custom-aia-urls",
              description:
                "One or more comma-separated URLs that will be added to the Authority Information Access extension in the issued certificate. These URLs are where the issuer CA certificate is located",
              args: {
                name: "CUSTOM_AIA_URLS",
                description: "List",
              },
            },
            {
              name: "--custom-cdp-urls",
              description:
                "One or more comma-separated URLs that will be added to the CRL Distribution Points (CDP) extension in the issued certificate. These URLs are where CRL information is located",
              args: {
                name: "CUSTOM_CDP_URLS",
                description: "List",
              },
            },
            optDnsSan,
            optEmailSan,
            {
              name: "--extended-key-usages",
              description:
                "The list of extended key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _EXTENDED_KEY_USAGES_ must be one of: *server_auth*, *client_auth*, *code_signing*, *email_protection*, *time_stamping*, *ocsp_signing*",
              args: {
                name: "EXTENDED_KEY_USAGES",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--from-ca",
              description:
                "ID of the source CA or fully qualified identifier for the source CA",
              priority: 100,
              args: {
                name: "FROM_CA",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optIpSan,
            {
              name: "--key-algorithm",
              description:
                "The crypto algorithm to use for creating a managed KMS key for the Certificate Authority. The default is *rsa-pkcs1-4096-sha256*. _KEY_ALGORITHM_ must be one of: *ec-p256-sha256*, *ec-p384-sha384*, *rsa-pkcs1-2048-sha256*, *rsa-pkcs1-3072-sha256*, *rsa-pkcs1-4096-sha256*, *rsa-pss-2048-sha256*, *rsa-pss-3072-sha256*, *rsa-pss-4096-sha256*",
              args: {
                name: "KEY_ALGORITHM",
                suggestions: [
                  "ec-p256-sha256",
                  "ec-p384-sha384",
                  "rsa-pkcs1-2048-sha256",
                  "rsa-pkcs1-3072-sha256",
                  "rsa-pkcs1-4096-sha256",
                  "rsa-pss-2048-sha256",
                  "rsa-pss-3072-sha256",
                  "rsa-pss-4096-sha256",
                ],
              },
            },
            {
              name: "--key-usages",
              description:
                "The list of key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _KEY_USAGES_ must be one of: *digital_signature*, *content_commitment*, *key_encipherment*, *data_encipherment*, *key_agreement*, *cert_sign*, *crl_sign*, *encipher_only*, *decipher_only*",
              args: {
                name: "KEY_USAGES",
                description: "List",
              },
            },
            optKmsKey,
            optKmsKeyVersion,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            {
              name: "--location",
              description: "The location of the Certificate Authority",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--max-chain-length",
              description:
                "Maximum depth of subordinate CAs allowed under this CA for a CA certificate. This can only be provided if neither `--use-preset-profile` nor `--unconstrained-chain-length` are provided",
              args: {
                name: "MAX_CHAIN_LENGTH",
                description: "String",
              },
            },
            optNameConstraintsCritical,
            optNameExcludedDns,
            optNameExcludedEmail,
            optNameExcludedIp,
            optNameExcludedUri,
            optNamePermittedDns,
            optNamePermittedEmail,
            optNamePermittedIp,
            optNamePermittedUri,
            optNoAutoEnable,
            optNoNameConstraintsCritical,
            optNoUnconstrainedChainLength,
            {
              name: "--pool",
              description: "The parent CA Pool of the Certificate Authority",
              args: {
                name: "POOL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optSubject,
            optSubjectFile,
            optSubjectKeyId,
            optTraceToken,
            optUnconstrainedChainLength,
            optUriSan,
            optUsePresetProfile,
            optUserOutputEnabled,
            {
              name: "--validity",
              description:
                "The validity of this CA, as an ISO8601 duration. Defaults to 10 years",
              args: {
                name: "VALIDITY",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the Certificate Authority or fully qualified identifier for the Certificate Authority",
          },
        },
        {
          name: "delete",
          description: "Delete a Root Certificate Authority",
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
            {
              name: "--ignore-active-certificates",
              description:
                "If this flag is set, the Certificate Authority will be deleted even if the Certificate Authority has un-revoked or un-expired certificates after the grace period",
            },
            optIgnoreDependentResources,
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--no-ignore-active-certificates",
              description:
                "If this flag is set, the Certificate Authority will be deleted even if the Certificate Authority has un-revoked or un-expired certificates after the grace period",
              hidden: true,
            },
            optNoIgnoreDependentResources,
            {
              name: "--no-skip-grace-period",
              description:
                "If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA",
              hidden: true,
            },
            optPool,
            optProject,
            optQuiet,
            {
              name: "--skip-grace-period",
              description:
                "If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a root Certificate Authority",
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
            {
              name: "--pool",
              description: "The ID of the CA Pool",
              args: {
                name: "POOL",
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
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "disable",
          description: "Disable a root certificate authority",
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
            optIgnoreDependentResources,
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optNoIgnoreDependentResources,
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "enable",
          description: "Enable a root certificate authority",
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
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "list",
          description: "List root certificate authorities",
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
              description:
                "Location of the certificate authorities. If omitted, root CAs across all regions will be listed",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoUri,
            optPageSize,
            {
              name: "--pool",
              description:
                "ID of the CA Pool where the certificate authorities reside. If omitted, root CAs across all CA pools will be listed",
              args: {
                name: "POOL",
                description: "String",
              },
            },
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
          name: "undelete",
          description: "Undelete a root Certificate Authority",
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
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "update",
          description: "Update an existing root certificate authority",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
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
            optNoClearLabels,
            optPool,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
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
      name: "subordinates",
      description: "Manage subordinate certificate authorities",
      subcommands: [
        {
          name: "activate",
          description:
            "Activate a subordinate certificate authority awaiting user activation",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoEnable,
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
            optNoAutoEnable,
            {
              name: "--pem-chain",
              description:
                "A file containing a list of PEM-encoded certificates, starting with the current CA certificate and ending with the root CA certificate",
              priority: 100,
              args: {
                name: "PEM_CHAIN",
                description: "String",
              },
            },
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "create",
          description: "Create a new subordinate certificate authority",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoEnable,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The name of an existing storage bucket to use for storing the CA certificates and CRLs for CAs in this pool. If omitted, a new bucket will be created and managed by the service on your behalf",
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--create-csr",
              description:
                "Indicates that a CSR should be generated which can be signed by the issuing CA. This must be set if --issuer is not provided",
              priority: 100,
            },
            {
              name: "--csr-output-file",
              description:
                "The path where the resulting PEM-encoded CSR file should be written",
              priority: 100,
              args: {
                name: "CSR_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--custom-aia-urls",
              description:
                "One or more comma-separated URLs that will be added to the Authority Information Access extension in the issued certificate. These URLs are where the issuer CA certificate is located",
              args: {
                name: "CUSTOM_AIA_URLS",
                description: "List",
              },
            },
            {
              name: "--custom-cdp-urls",
              description:
                "One or more comma-separated URLs that will be added to the CRL Distribution Points (CDP) extension in the issued certificate. These URLs are where CRL information is located",
              args: {
                name: "CUSTOM_CDP_URLS",
                description: "List",
              },
            },
            optDnsSan,
            optEmailSan,
            {
              name: "--extended-key-usages",
              description:
                "The list of extended key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _EXTENDED_KEY_USAGES_ must be one of: *server_auth*, *client_auth*, *code_signing*, *email_protection*, *time_stamping*, *ocsp_signing*",
              args: {
                name: "EXTENDED_KEY_USAGES",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--from-ca",
              description:
                "ID of the source CA or fully qualified identifier for the source CA",
              priority: 100,
              args: {
                name: "FROM_CA",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optIpSan,
            {
              name: "--issuer-ca",
              description:
                "The Certificate Authority ID of the CA to issue the subordinate CA certificate from. This ID is optional. If ommitted, any available ENABLED CA in the issuing CA pool will be chosen",
              args: {
                name: "ISSUER_CA",
                description: "String",
              },
            },
            {
              name: "--issuer-location",
              description: "The location of the Issuer",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
              },
            },
            {
              name: "--issuer-pool",
              description:
                "ID of the Issuer or fully qualified identifier for the Issuer",
              priority: 100,
              args: {
                name: "ISSUER_POOL",
                description: "String",
              },
            },
            {
              name: "--key-algorithm",
              description:
                "The crypto algorithm to use for creating a managed KMS key for the Certificate Authority. The default is *rsa-pkcs1-2048-sha256*. _KEY_ALGORITHM_ must be one of: *ec-p256-sha256*, *ec-p384-sha384*, *rsa-pkcs1-2048-sha256*, *rsa-pkcs1-3072-sha256*, *rsa-pkcs1-4096-sha256*, *rsa-pss-2048-sha256*, *rsa-pss-3072-sha256*, *rsa-pss-4096-sha256*",
              args: {
                name: "KEY_ALGORITHM",
                suggestions: [
                  "ec-p256-sha256",
                  "ec-p384-sha384",
                  "rsa-pkcs1-2048-sha256",
                  "rsa-pkcs1-3072-sha256",
                  "rsa-pkcs1-4096-sha256",
                  "rsa-pss-2048-sha256",
                  "rsa-pss-3072-sha256",
                  "rsa-pss-4096-sha256",
                ],
              },
            },
            {
              name: "--key-usages",
              description:
                "The list of key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _KEY_USAGES_ must be one of: *digital_signature*, *content_commitment*, *key_encipherment*, *data_encipherment*, *key_agreement*, *cert_sign*, *crl_sign*, *encipher_only*, *decipher_only*",
              args: {
                name: "KEY_USAGES",
                description: "List",
              },
            },
            optKmsKey,
            optKmsKeyVersion,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            {
              name: "--location",
              description: "The location of the Certificate Authority",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--max-chain-length",
              description:
                "Maximum depth of subordinate CAs allowed under this CA for a CA certificate. This can only be provided if neither `--use-preset-profile` nor `--unconstrained-chain-length` are provided",
              args: {
                name: "MAX_CHAIN_LENGTH",
                description: "Int",
              },
            },
            optNameConstraintsCritical,
            optNameExcludedDns,
            optNameExcludedEmail,
            optNameExcludedIp,
            optNameExcludedUri,
            optNamePermittedDns,
            optNamePermittedEmail,
            optNamePermittedIp,
            optNamePermittedUri,
            optNoAutoEnable,
            optNoNameConstraintsCritical,
            optNoUnconstrainedChainLength,
            {
              name: "--pool",
              description: "The parent CA Pool of the Certificate Authority",
              args: {
                name: "POOL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optSubject,
            optSubjectFile,
            optSubjectKeyId,
            optTraceToken,
            optUnconstrainedChainLength,
            optUriSan,
            optUsePresetProfile,
            optUserOutputEnabled,
            {
              name: "--validity",
              description:
                "The validity of this CA, as an ISO8601 duration. Defaults to 3 years",
              args: {
                name: "VALIDITY",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the Certificate Authority or fully qualified identifier for the Certificate Authority",
          },
        },
        {
          name: "delete",
          description: "Delete a subordinate certificate authority",
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
            {
              name: "--ignore-active-certificates",
              description:
                "If this flag is set, the Certificate Authority will be deleted even if the Certificate Authority has un-revoked or un-expired certificates after the grace period",
            },
            optIgnoreDependentResources,
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--no-ignore-active-certificates",
              description:
                "If this flag is set, the Certificate Authority will be deleted even if the Certificate Authority has un-revoked or un-expired certificates after the grace period",
              hidden: true,
            },
            optNoIgnoreDependentResources,
            {
              name: "--no-skip-grace-period",
              description:
                "If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA",
              hidden: true,
            },
            optPool,
            optProject,
            optQuiet,
            {
              name: "--skip-grace-period",
              description:
                "If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a subordinate certificate authority",
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
            {
              name: "--pool",
              description: "The ID of the CA Pool",
              args: {
                name: "POOL",
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
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "disable",
          description: "Disable a subordinate certificate authority",
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
            optIgnoreDependentResources,
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optNoIgnoreDependentResources,
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "enable",
          description: "Enable a subordinate certificate authority",
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
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "get-csr",
          description:
            "Get the CSR for a subordinate certificate authority that has not yet been activated",
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
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "list",
          description: "List subordinate certificate authorities",
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
            {
              name: "--location",
              description:
                'Location of the certificate authorities. If omitted, subordinate CAs across all regions will be listed. Note that, if it is populated, the privateca/location property will be used if this flag is not specified. To ignore this property, specify "-" as the location',
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoUri,
            optPageSize,
            {
              name: "--pool",
              description:
                "ID of the CA Pool where the certificate authorities reside. If omitted, subordinate CAs across all CA pools will be listed",
              args: {
                name: "POOL",
                description: "String",
              },
            },
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
          name: "undelete",
          description: "Undelete a subordinate certificate authority",
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
            optPool,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
          },
        },
        {
          name: "update",
          description: "Update an existing subordinate certificate authority",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
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
            optNoClearLabels,
            {
              name: "--pem-chain",
              description:
                "A file containing a list of PEM-encoded certificates that represent the issuing chain of this CA. Please note that the certificate corresponding to this specific CA should be excluded",
              args: {
                name: "PEM_CHAIN",
                description: "String",
              },
            },
            optPool,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY",
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
      name: "templates",
      description: "Manage certificate templates",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a certificate template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
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
            optLocation5,
            optLogHttp,
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template",
          },
        },
        {
          name: "create",
          description: "Create a new certificate template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--copy-all-requested-extensions",
              description:
                "If this is set, all extensions specified in the certificate request will be copied into the signed certificate",
            },
            {
              name: "--copy-extensions-by-oid",
              description:
                "If this is set, then extensions with the given OIDs will be copied from the certificate request into the signed certificate",
              args: {
                name: "OBJECT_ID",
                description: "List",
              },
            },
            {
              name: "--copy-known-extensions",
              description:
                "If this is set, then the given extensions will be copied from the certificate request into the signed certificate. _KNOWN_EXTENSIONS_ must be one of: *base-key-usage*, *extended-key-usage*, *ca-options*, *policy-ids*, *aia-ocsp-servers*",
              args: {
                name: "KNOWN_EXTENSIONS",
                description: "List",
              },
            },
            {
              name: "--copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
              priority: 100,
            },
            {
              name: "--copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
              priority: 100,
            },
            {
              name: "--description",
              description: "A text description for the Certificate Template",
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
              name: "--identity-cel-expression",
              description:
                "A CEL expression that will be evaluated against the identity in the certificate before it is issued, and returns a boolean signifying whether the request should be allowed",
              args: {
                name: "IDENTITY_CEL_EXPRESSION",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation4,
            optLogHttp,
            {
              name: "--maximum-lifetime",
              description:
                "If this is set, then issued certificate's lifetime will be truncated to the value provided. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for the issued certificate. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it",
              args: {
                name: "MAXIMUM_LIFETIME",
                description: "String",
              },
            },
            {
              name: "--no-copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
              hidden: true,
              priority: 100,
            },
            {
              name: "--predefined-values-file",
              description:
                "A YAML file describing any predefined X.509 values set by this template. The provided extensions will be copied over to any certificate requests that use this template, taking precedent over any allowed extensions in the certificate request. The format of this file should be a YAML representation of the X509Parameters message, which is defined here: https://cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters. Some examples can be found here: https://cloud.google.com/certificate-authority-service/docs/creating-certificate-template",
              args: {
                name: "PREDEFINED_VALUES_FILE",
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate template",
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE",
          },
        },
        {
          name: "describe",
          description: "Show details about a certificate template",
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a certificate template",
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
            optLocation5,
            optLogHttp,
            optPageSize2,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template",
          },
        },
        {
          name: "list",
          description: "List certificate templates within a project",
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
              description:
                'The location you want to list the certificate templates for. Set this to "-" to list certificate templates across all locations',
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
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*. The default is *name*",
              args: {
                name: "FIELD",
                description: "List",
              },
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a certificate template",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
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
            optLocation5,
            optLogHttp,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description: "The role to remove the principal from",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template",
          },
        },
        {
          name: "replicate",
          description: "Replicate a certificate template to multiple locations",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-locations",
              description: "Replicate this template to all supported locations",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--continue-on-error",
              description:
                "Continue replicating the template to other locations even if an error is encountered. If this is set, an error in one location will be logged but will not prevent replication to other locations",
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
              name: "--overwrite",
              description:
                "Overwrite any existing templates with the same name, if they exist",
            },
            optProject,
            optQuiet,
            {
              name: "--target-locations",
              description: "Replicate this template to the given locations",
              args: {
                name: "LOCATION",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a certificate template",
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
          args: [
            {
              name: "CERTIFICATE_TEMPLATE",
              description:
                "ID of the Certificate Template or fully qualified identifier for the Certificate Template",
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
          description: "Update a certificate template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--copy-all-requested-extensions",
              description:
                "If this is set, all extensions, whether known or specified by OID, that are specified in the certificate request will be copied into the signed certificate",
            },
            {
              name: "--copy-extensions-by-oid",
              description:
                "If this is set, then extensions with the given OIDs will be copied from the certificate request into the signed certificate",
              args: {
                name: "OBJECT_ID",
                description: "List",
              },
            },
            {
              name: "--copy-known-extensions",
              description:
                "If this is set, then the given extensions will be copied from the certificate request into the signed certificate. _KNOWN_EXTENSIONS_ must be one of: *base-key-usage*, *extended-key-usage*, *ca-options*, *policy-ids*, *aia-ocsp-servers*",
              args: {
                name: "KNOWN_EXTENSIONS",
                description: "List",
              },
            },
            {
              name: "--copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
            },
            {
              name: "--copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
            },
            {
              name: "--description",
              description: "A text description for the Certificate Template",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--drop-known-extensions",
              description:
                "If this is set, then all known extensions will be removed from the template, prohibiting any known x509 extensions to be specified by the requester",
            },
            {
              name: "--drop-oid-extensions",
              description:
                "If this is set, then all existing OID extensions will be removed from the template, prohibiting any extensions specified by OIDs to be specified by the requester",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--identity-cel-expression",
              description:
                "A CEL expression that will be evaluated against the identity in the certificate before it is issued, and returns a boolean signifying whether the request should be allowed",
              args: {
                name: "IDENTITY_CEL_EXPRESSION",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optNoClearLabels,
            {
              name: "--no-copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
              hidden: true,
            },
            {
              name: "--no-copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
              hidden: true,
            },
            {
              name: "--predefined-values-file",
              description:
                "A YAML file describing any predefined X.509 values set by this template. The provided extensions will be copied over to any certificate requests that use this template, taking precedent over any allowed extensions in the certificate request. The format of this file should be a YAML representation of the X509Parameters message, which is defined here: https://cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters. Some examples can be found here: https://cloud.google.com/certificate-authority-service/docs/creating-certificate-template",
              args: {
                name: "PREDEFINED_VALUES_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE",
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
