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

const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "The maximum number of results to return",
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
  name: "identity",
  description: "Manage Cloud Identity Groups and Memberships resources",
  subcommands: [
    {
      name: "groups",
      description: "Manage Cloud Identity Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a new group",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--customer",
              description:
                'The customer ID for the customer\\\'s G Suite account. Example of customer: "C01k1e9nw"',
              args: {
                name: "CUSTOMER",
                description: "String",
              },
            },
            {
              name: "--description",
              description:
                "An extended description to help users determine the purpose of a Group. For example, you can include information about who should join the Group, the types of messages to send to the Group, links to FAQs about the Group, or related Groups. Maximum length is 4,096 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The Group's display name",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--dynamic-user-query",
              description:
                "Query that determines the memberships of the dynamic group",
              args: {
                name: "DYNAMIC_USER_QUERY",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-type",
              description:
                "The type of group to create. Setting group-type will add the appropriate labels for the type of group being created. _GROUP_TYPE_ must be one of:",
              args: {
                name: "GROUP_TYPE",
                description: "String",
                suggestions: ["discussion", "dynamic", "security"],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description:
                'Labels for group resource. Example of labels "--labels cloudidentity.googleapis.com/groups.discussion_forum"',
              args: {
                name: "LABELS",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description:
                'The organization the Group being created belongs to. This can be specified either as an ID ("123456789") or as the associated domain ("example.com")',
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--with-initial-owner",
              description:
                "If specified the user making the request will be added as the initial owner of the group being created. _WITH_INITIAL_OWNER_ must be one of:",
              args: {
                name: "WITH_INITIAL_OWNER",
                suggestions: ["empty", "with-initial-owner"],
              },
            },
          ],
          args: {
            name: "EMAIL",
            description: "The email address of the group to be created",
          },
        },
        {
          name: "delete",
          description: "Delete an existing group",
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
            name: "EMAIL",
            description: "The email address of the group being deleted",
          },
        },
        {
          name: "describe",
          description: "Describe an existing group",
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
            name: "EMAIL",
            description: "The email address of the group being described",
          },
        },
        {
          name: "memberships",
          description: "Manage Cloud Identity Groups Memberships",
          subcommands: [
            {
              name: "add",
              description: "Create a new membership in an existing group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--expiration",
                  description:
                    "Optional time of expiration for the membership. This is given as a duration from now, for example '30d', '6m', '3y' for 30 days, 6 months, or 3 years respectively",
                  args: {
                    name: "EXPIRATION",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group the new membership is being added to",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user being added to a group",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--roles",
                  description:
                    "A comma-separated list of roles for a member within the Group. If not specified, MEMBER will be used as a default value",
                  args: {
                    name: "ROLES",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "check-transitive-membership",
              description:
                "Check a potential member for transitive membership in a group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to check transitive membership for",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to check transitive membership for",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
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
              description: "Delete a membership from an existing group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group the new membership is being removed from",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user being removed from the group identified by group-email",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "describe",
              description: "Describe a membership in a group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group whose membership is being described",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member whose membership is being described",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "get-membership-graph",
              description:
                "Get a membership graph of just a member or both a member and a group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to constrain the membership graph with",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--labels",
                  description:
                    "The labels of the groups in the membership graph",
                  priority: 100,
                  args: {
                    name: "LABELS",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to get the membership graph for",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "List memberships in an existing group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--filter",
                  description:
                    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "EXPRESSION",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to show members for",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--limit",
                  description:
                    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "LIMIT",
                  },
                },
                optLogHttp,
                {
                  name: "--page-size",
                  description:
                    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
                  args: {
                    name: "PAGE_SIZE",
                  },
                },
                {
                  name: "--page-token",
                  description:
                    "The next_page_token value returned from a previous list request, if any",
                  args: {
                    name: "PAGE_TOKEN",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--sort-by",
                  description:
                    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "FIELD",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--view",
                  description:
                    "There are two possible views, 'basic' and 'full', default is 'basic'. _VIEW_ must be one of:",
                  args: {
                    name: "VIEW",
                    suggestions: ["basic", "full"],
                  },
                },
              ],
            },
            {
              name: "modify-membership-roles",
              description:
                "Add/remove/modify membership roles of a membership in a group",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-roles",
                  description:
                    "Membership roles to be added. Currently supported MembershipRole: 'MEMBER', 'OWNER', 'MANAGER'",
                  args: {
                    name: "ADD_ROLES",
                    description: "String",
                  },
                },
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group that member-email belongs to",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user that is being updated",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-roles",
                  description:
                    "Membership role names to be removed. Currently supported MembershipRole: 'OWNER', 'MANAGER'. MEMBER-less owner is not supported so removing just MEMBER role won't be possible",
                  args: {
                    name: "REMOVE_ROLES",
                    description: "List",
                  },
                },
                optTraceToken,
                {
                  name: "--update-roles-params",
                  description:
                    "Resource representing the parameters to update membership roles. An example would be ``--update-roles-params MEMBER=expiry_details.expire_time''",
                  args: {
                    name: "UPDATE_ROLES_PARAMS",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "search-transitive-groups",
              description: "Search transitive groups of a member",
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
                  name: "--labels",
                  description: "The labels of the transitive groups",
                  priority: 100,
                  args: {
                    name: "LABELS",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to search transitive groups for",
                  priority: 100,
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                  },
                },
                optPageSize,
                {
                  name: "--page-token",
                  description:
                    "The next_page_token value returned from a previous search request, if any",
                  args: {
                    name: "PAGE_TOKEN",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "search-transitive-memberships",
              description: "Search transitive memberships of a group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to search transitive memberships for",
                  priority: 100,
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optPageSize,
                {
                  name: "--page-token",
                  description:
                    "The next_page_token value returned from a previous search request, if any",
                  args: {
                    name: "PAGE_TOKEN",
                    description: "String",
                  },
                },
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
          name: "search",
          description: "Searches for Groups matching a specified query",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--customer",
              description:
                'The customer ID for the customer\'s G Suite account. Example of customer: "C01k1e9nw"',
              args: {
                name: "CUSTOMER",
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
              name: "--labels",
              description:
                "One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value",
              priority: 100,
              args: {
                name: "LABELS",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "The organization ID for the groups being searched",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optPageSize,
            {
              name: "--page-token",
              description:
                "The nextPageToken value returned from a previous search request, if any",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "The level of detail to be returned. There are two possible views: 'basic' and 'full'. If unspecified, default to 'basic'. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a group",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-description",
              description: "Clear existing description on group being updated",
            },
            {
              name: "--clear-display-name",
              description: "Clear existing display name on group being updated",
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "Replace existing description on group being updated",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Replace existing display name on group being updated",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--dynamic-user-query",
              description:
                "Query that determines the memberships of the dynamic group",
              args: {
                name: "DYNAMIC_USER_QUERY",
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
              name: "--labels",
              description:
                "One or more label entries that apply to the group. Currently supported labels contain a key with an empty value",
              args: {
                name: "LABELS",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-description",
              description: "Clear existing description on group being updated",
              hidden: true,
            },
            {
              name: "--no-clear-display-name",
              description: "Clear existing display name on group being updated",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EMAIL",
            description: "The email address of the group to be updated",
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
