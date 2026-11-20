// Nylas CLI v3.1.31 (nylas/cli GitHub release tag, 2026-11-19). Source: cobra command definitions
// in internal/cli/** at tag v3.1.31, read statically (Go AST walk; the release binary was not run),
// plus cobra v1.8.1 built-ins (help, completion). The old `nylas api ...` command tree (Nylas API v2
// CLI) does not exist in this release and was replaced. No dynamic generators: --json shapes unverified.

const keyArg: Fig.Arg = {
  name: "key",
};

const valueArg: Fig.Arg = {
  name: "value",
};

const forceOption: Fig.Option = {
  name: ["--force", "-f"],
  description: "Skip confirmation prompt",
};

const agentIdEmailArg: Fig.Arg = {
  name: "agent-id|email",
  isOptional: true,
};

const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description: "Skip confirmation prompt",
};

const policyIdArg: Fig.Arg = {
  name: "policy-id",
};

const dataOption: Fig.Option = {
  name: "--data",
  description: "Inline JSON request body",
  args: {
    name: "data",
  },
};

const dataFileOption: Fig.Option = {
  name: "--data-file",
  description: "Path to a JSON request body file",
  args: {
    name: "data-file",
    template: "filepaths",
  },
};

const yesOption2: Fig.Option = {
  name: ["--yes", "-y"],
  description: "Skip confirmation prompts",
};

const ruleIdArg: Fig.Arg = {
  name: "rule-id",
};

const listIdArg: Fig.Arg = {
  name: "list-id",
};

const grantIdArg: Fig.Arg = {
  name: "grant-id",
  isOptional: true,
};

const grantIdArg2: Fig.Arg = {
  name: "grant-id",
};

const emailArg: Fig.Arg = {
  name: "email",
  isOptional: true,
};

const limitOption: Fig.Option = {
  name: ["--limit", "-n"],
  description: "Maximum messages to scan",
  args: {
    name: "limit",
    default: "1000",
  },
};

const sinceOption: Fig.Option = {
  name: "--since",
  description:
    "Only scan messages received within this duration (for example, 30d or 12w)",
  args: {
    name: "since",
    default: "90d",
  },
};

const messageIdArg: Fig.Arg = {
  name: "message-id",
};

const ccOption: Fig.Option = {
  name: "--cc",
  description: "CC email addresses",
  isRepeatable: true,
  args: {
    name: "cc",
  },
};

const subjectOption: Fig.Option = {
  name: "--subject",
  description: "Filter by subject",
  args: {
    name: "subject",
  },
};

const folderIdArg: Fig.Arg = {
  name: "folder-id",
};

const nameArg: Fig.Arg = {
  name: "name",
};

const threadIdArg: Fig.Arg = {
  name: "thread-id",
};

const forceOption2: Fig.Option = {
  name: ["--force", "-f"],
  description: "Skip confirmation",
};

const draftIdArg: Fig.Arg = {
  name: "draft-id",
};

const templateIdArg: Fig.Arg = {
  name: "template-id",
};

const signatureIdArg: Fig.Arg = {
  name: "signature-id",
};

const calendarIdArg: Fig.Arg = {
  name: "calendar-id",
};

const calendarOption: Fig.Option = {
  name: ["--calendar", "-c"],
  description: "Calendar ID (defaults to primary)",
  args: {
    name: "calendar",
  },
};

const eventIdArg: Fig.Arg = {
  name: "event-id",
};

const grantOption: Fig.Option = {
  name: ["--grant", "-g"],
  description: "Grant ID (uses default if not specified)",
  args: {
    name: "grant",
  },
};

const contactIdArg: Fig.Arg = {
  name: "contact-id",
};

const groupIdArg: Fig.Arg = {
  name: "group-id",
};

const pageTokenOption: Fig.Option = {
  name: "--page-token",
  description: "Page token for pagination",
  args: {
    name: "page-token",
  },
};

const regionOption: Fig.Option = {
  name: ["--region", "-r"],
  description: "Region (us or eu; inferred for existing domains when omitted)",
  args: {
    name: "region",
  },
};

const domainIdOrAddressArg: Fig.Arg = {
  name: "domain-id-or-address",
};

const limitOption2: Fig.Option = {
  name: ["--limit", "-n"],
  description: "Maximum number of items to show",
  args: {
    name: "limit",
    default: "50",
  },
};

const startOption: Fig.Option = {
  name: "--start",
  description: "First UTC day, YYYY-MM-DD (default: 6 days before --end)",
  args: {
    name: "start",
  },
};

const endOption: Fig.Option = {
  name: "--end",
  description: "Last UTC day, YYYY-MM-DD, inclusive (default: today)",
  args: {
    name: "end",
  },
};

const sendingDomainOption: Fig.Option = {
  name: "--sending-domain",
  description: "Only this sending domain",
  args: {
    name: "sending-domain",
  },
};

const configIdArg: Fig.Arg = {
  name: "config-id",
};

const nameOption: Fig.Option = {
  name: "--name",
  description: "Configuration name",
  args: {
    name: "name",
  },
};

const titleOption: Fig.Option = {
  name: "--title",
  description: "Event title",
  args: {
    name: "title",
  },
};

const descriptionOption: Fig.Option = {
  name: "--description",
  description: "Event description",
  args: {
    name: "description",
  },
};

const locationOption: Fig.Option = {
  name: "--location",
  description: "Event location",
  args: {
    name: "location",
  },
};

const configurationIdOption: Fig.Option = {
  name: "--configuration-id",
  description: "Scheduler configuration ID that owns the booking (required)",
  isRequired: true,
  args: {
    name: "configuration-id",
  },
};

const bookingIdArg: Fig.Arg = {
  name: "booking-id",
};

const configurationIdArg: Fig.Arg = {
  name: "configuration-id",
};

const appIdArg: Fig.Arg = {
  name: "app-id",
};

const uriIdArg: Fig.Arg = {
  name: "uri-id",
};

const connectorIdArg: Fig.Arg = {
  name: "connector-id",
};

const connectorOption: Fig.Option = {
  name: "--connector",
  description:
    "Connector provider (e.g. google); auto-detected if only one connector exists",
  args: {
    name: "connector",
  },
};

const credentialIdArg: Fig.Arg = {
  name: "credential-id",
};

const webhookIdArg: Fig.Arg = {
  name: "webhook-id",
};

const channelIdArg: Fig.Arg = {
  name: "channel-id",
};

const notetakerIdArg: Fig.Arg = {
  name: "notetaker-id",
};

const scopeOption: Fig.Option = {
  name: "--scope",
  description: "Template scope: app or grant",
  args: {
    name: "scope",
    default: "app",
    suggestions: ["app", "grant"],
  },
};

const grantIdOption: Fig.Option = {
  name: "--grant-id",
  description: "Grant ID or email for grant-scoped templates",
  args: {
    name: "grant-id",
  },
};

const refreshOption: Fig.Option = {
  name: "--refresh",
  description: "Refresh interval in seconds",
  args: {
    name: "refresh",
    default: "3",
  },
};

const messageIdArg2: Fig.Arg = {
  name: "message-id",
  isOptional: true,
};

const eventIdArg2: Fig.Arg = {
  name: "event-id",
  isOptional: true,
};

const durationOption: Fig.Option = {
  name: "--duration",
  description: "Meeting duration",
  args: {
    name: "duration",
    default: "30m",
  },
};

const contactIdArg2: Fig.Arg = {
  name: "contact-id",
  isOptional: true,
};

const groupIdArg2: Fig.Arg = {
  name: "group-id",
  isOptional: true,
};

const configIdArg2: Fig.Arg = {
  name: "config-id",
  isOptional: true,
};

const bookingIdArg2: Fig.Arg = {
  name: "booking-id",
  isOptional: true,
};

const notetakerIdArg2: Fig.Arg = {
  name: "notetaker-id",
  isOptional: true,
};

const themeOption: Fig.Option = {
  name: "--theme",
  description:
    "Color theme (k9s, amber, green, apple2, vintage, ibm, futuristic, matrix, norton, or custom)",
  args: {
    name: "theme",
    default: "k9s",
    suggestions: [
      "k9s",
      "amber",
      "green",
      "apple2",
      "vintage",
      "ibm",
      "futuristic",
      "matrix",
      "norton",
    ],
  },
};

const scopeOption2: Fig.Option = {
  name: "--scope",
  description: "Workflow scope: app or grant",
  args: {
    name: "scope",
    default: "app",
    suggestions: ["app", "grant"],
  },
};

const grantIdOption2: Fig.Option = {
  name: "--grant-id",
  description: "Grant ID or email for grant-scoped workflows",
  args: {
    name: "grant-id",
  },
};

const workflowIdArg: Fig.Arg = {
  name: "workflow-id",
};

const workspaceIdArg: Fig.Arg = {
  name: "workspace-id",
};

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const completionSpec: Fig.Spec = {
  name: "nylas",
  description: "Email, calendar, and contacts from your terminal",
  options: [
    {
      name: "--format",
      description: "Output format: table, json, yaml",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["table", "json", "yaml"],
      },
    },
    {
      name: "--json",
      description: "Output in JSON format",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Quiet mode - only output essential data (IDs)",
      isPersistent: true,
    },
    {
      name: ["--wide", "-w"],
      description: "Wide output - show full IDs without truncation",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable color output",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: "--config",
      description: "Custom config file path",
      isPersistent: true,
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Help for nylas",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Version for nylas",
    },
  ],
  subcommands: [
    {
      name: "doctor",
      description: "Check CLI health and configuration",
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Show detailed information",
        },
      ],
    },
    {
      name: "commands",
      description: "Inspect command metadata",
      options: [
        {
          name: "--all",
          description: "Include hidden commands and flags",
        },
      ],
      args: {
        name: "command-path",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "version",
      description: "Show version information",
    },
    {
      name: "ai",
      description: "AI configuration and management",
      subcommands: [
        {
          name: "config",
          description: "Manage AI configuration",
          subcommands: [
            {
              name: "show",
              description: "Show full AI configuration",
            },
            {
              name: "list",
              description: "List all AI configuration keys and values",
            },
            {
              name: "get",
              description: "Get an AI configuration value",
              args: keyArg,
            },
            {
              name: "set",
              description: "Set an AI configuration value",
              args: [keyArg, valueArg],
            },
          ],
        },
        {
          name: "clear-data",
          description: "Clear all AI data and learned patterns",
          options: [forceOption],
        },
        {
          name: "usage",
          description: "Show AI usage statistics",
          options: [
            {
              name: "--month",
              description: "Month to show usage for (YYYY-MM format)",
              args: {
                name: "month",
              },
            },
          ],
        },
        {
          name: "set-budget",
          description: "Set monthly AI usage budget",
          options: [
            {
              name: "--monthly",
              description: "Monthly budget in USD",
              args: {
                name: "monthly",
              },
            },
            {
              name: "--alert-at",
              description:
                "Alert when spending reaches this percentage (0-100)",
              args: {
                name: "alert-at",
                default: "80",
              },
            },
            {
              name: "--disable",
              description: "Disable budget enforcement",
            },
          ],
        },
        {
          name: "show-budget",
          description: "Show current AI budget configuration",
        },
      ],
    },
    {
      name: ["agent", "agents"],
      description: "Manage Nylas agent resources",
      subcommands: [
        {
          name: "account",
          description: "Manage agent accounts",
          subcommands: [
            {
              name: "create",
              description: "Create a new agent account",
              options: [
                {
                  name: "--name",
                  description:
                    "Optional display name for the agent account (1-256 characters)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--app-password",
                  description:
                    "Optional IMAP/SMTP app password for mail-client access",
                  args: {
                    name: "app-password",
                  },
                },
              ],
              args: {
                name: "email",
              },
            },
            {
              name: "update",
              description: "Update an agent account",
              options: [
                {
                  name: "--name",
                  description:
                    "Set the agent account display name (1-256 characters)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--app-password",
                  description: "Rotate or add the IMAP/SMTP app password",
                  args: {
                    name: "app-password",
                  },
                },
              ],
              args: agentIdEmailArg,
            },
            {
              name: "list",
              description: "List agent accounts",
            },
            {
              name: "get",
              description: "Show an agent account",
              args: agentIdEmailArg,
            },
            {
              name: "move",
              description: "Move an agent account to another workspace",
              options: [
                {
                  name: "--workspace",
                  description: "Target workspace ID (required)",
                  isRequired: true,
                  args: {
                    name: "workspace",
                  },
                },
              ],
              args: agentIdEmailArg,
            },
            {
              name: "delete",
              description: "Delete an agent account",
              options: [
                yesOption,
                {
                  name: ["--force", "-f"],
                  description:
                    "Force delete without confirmation (alias for --yes)",
                },
              ],
              args: agentIdEmailArg,
            },
          ],
        },
        {
          name: "policy",
          description: "Manage agent policies",
          subcommands: [
            {
              name: "list",
              description: "List policies",
            },
            {
              name: "get",
              description: "Show a policy",
              args: policyIdArg,
            },
            {
              name: "read",
              description: "Read a policy",
              args: policyIdArg,
            },
            {
              name: "create",
              description: "Create a policy",
              options: [
                {
                  name: "--name",
                  description: "Policy name",
                  args: {
                    name: "name",
                  },
                },
                dataOption,
                dataFileOption,
              ],
            },
            {
              name: "update",
              description: "Update a policy",
              options: [
                {
                  name: "--name",
                  description: "Updated policy name",
                  args: {
                    name: "name",
                  },
                },
                dataOption,
                dataFileOption,
              ],
              args: policyIdArg,
            },
            {
              name: "delete",
              description: "Delete a policy",
              options: [yesOption2],
              args: policyIdArg,
            },
          ],
        },
        {
          name: "rule",
          description: "Manage agent rules",
          subcommands: [
            {
              name: "list",
              description: "List rules",
            },
            {
              name: "get",
              description: "Show a rule",
              args: ruleIdArg,
            },
            {
              name: "read",
              description: "Read a rule",
              args: ruleIdArg,
            },
            {
              name: "create",
              description: "Create a rule",
              options: [
                {
                  name: "--name",
                  description: "Rule name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "Rule description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--priority",
                  description: "Rule priority",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: "--enabled",
                  description: "Create the rule in an enabled state",
                },
                {
                  name: "--disabled",
                  description: "Create the rule in a disabled state",
                },
                {
                  name: "--trigger",
                  description:
                    "Rule trigger (inbound or outbound; defaults to inbound when using flags)",
                  args: {
                    name: "trigger",
                    suggestions: ["inbound", "outbound"],
                  },
                },
                {
                  name: "--match-operator",
                  description: "Match operator for the supplied conditions",
                  args: {
                    name: "match-operator",
                    suggestions: ["all", "any"],
                  },
                },
                {
                  name: "--condition",
                  description:
                    "Match condition as field,operator,value (repeatable). For in_list, pass field,in_list,list-id-1,list-id-2",
                  isRepeatable: true,
                  args: {
                    name: "condition",
                  },
                },
                {
                  name: "--action",
                  description: "Rule action as type or type=value (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "action",
                  },
                },
                dataOption,
                dataFileOption,
              ],
            },
            {
              name: "update",
              description: "Update a rule",
              options: [
                {
                  name: "--name",
                  description: "Updated rule name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "Updated rule description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--priority",
                  description: "Updated rule priority",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: "--enabled",
                  description: "Set the rule to enabled",
                },
                {
                  name: "--disabled",
                  description: "Set the rule to disabled",
                },
                {
                  name: "--trigger",
                  description: "Updated rule trigger (inbound or outbound)",
                  args: {
                    name: "trigger",
                    suggestions: ["inbound", "outbound"],
                  },
                },
                {
                  name: "--match-operator",
                  description: "Updated match operator",
                  args: {
                    name: "match-operator",
                    suggestions: ["all", "any"],
                  },
                },
                {
                  name: "--condition",
                  description:
                    "Replace conditions with field,operator,value entries (repeatable). For in_list, pass field,in_list,list-id-1,list-id-2",
                  isRepeatable: true,
                  args: {
                    name: "condition",
                  },
                },
                {
                  name: "--action",
                  description:
                    "Replace actions with type or type=value entries (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "action",
                  },
                },
                dataOption,
                dataFileOption,
              ],
              args: ruleIdArg,
            },
            {
              name: "delete",
              description: "Delete a rule",
              options: [yesOption2],
              args: ruleIdArg,
            },
          ],
        },
        {
          name: ["list", "lists"],
          description: "Manage agent lists",
          subcommands: [
            {
              name: "list",
              description: "List lists",
            },
            {
              name: "get",
              description: "Show a list and its items",
              args: listIdArg,
            },
            {
              name: "create",
              description: "Create a list",
              options: [
                {
                  name: "--name",
                  description: "List name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--type",
                  description: "List type: domain, tld, or address (immutable)",
                  args: {
                    name: "type",
                    suggestions: ["domain", "tld", "address"],
                  },
                },
                {
                  name: "--description",
                  description: "List description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--item",
                  description: "Item to add after creation (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "item",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a list's name or description",
              options: [
                {
                  name: "--name",
                  description: "New list name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "New list description",
                  args: {
                    name: "description",
                  },
                },
              ],
              args: listIdArg,
            },
            {
              name: "delete",
              description: "Delete a list",
              options: [yesOption2],
              args: listIdArg,
            },
            {
              name: "items",
              description: "Show list items",
              args: listIdArg,
            },
            {
              name: "add",
              description: "Add items to a list",
              args: [
                listIdArg,
                {
                  name: "item",
                  isVariadic: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove items from a list",
              args: [
                listIdArg,
                {
                  name: "item",
                  isVariadic: true,
                },
              ],
            },
          ],
        },
        {
          name: ["overview", "tree"],
          description: "Show an overview of all agent resources",
        },
        {
          name: "status",
          description: "Show agent connector status",
        },
      ],
    },
    {
      name: "audit",
      description: "Manage audit logging",
      subcommands: [
        {
          name: "init",
          description: "Initialize audit logging",
          options: [
            {
              name: "--path",
              description:
                "Custom log directory (default: ~/.config/nylas/audit)",
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: "--retention",
              description: "Log retention period in days",
              args: {
                name: "retention",
                default: "90",
              },
            },
            {
              name: "--max-size",
              description: "Max storage size in MB",
              args: {
                name: "max-size",
                default: "100",
              },
            },
            {
              name: "--format",
              description: "Log format: jsonl, json",
              args: {
                name: "format",
                default: "jsonl",
                suggestions: ["jsonl", "json"],
              },
            },
            {
              name: "--enable",
              description: "Enable audit logging immediately",
            },
            {
              name: "--no-prompt",
              description: "Skip interactive prompts",
            },
          ],
        },
        {
          name: "logs",
          description: "Manage and view audit logs",
          subcommands: [
            {
              name: "enable",
              description: "Enable audit logging",
            },
            {
              name: "disable",
              description: "Disable audit logging",
            },
            {
              name: "status",
              description: "Show audit logging status",
            },
            {
              name: "show",
              description: "Show recent audit entries",
              options: [
                {
                  name: ["--limit", "-n"],
                  description: "Number of entries to show",
                  args: {
                    name: "limit",
                    default: "20",
                  },
                },
                {
                  name: "--since",
                  description: "Show entries after this date (YYYY-MM-DD)",
                  args: {
                    name: "since",
                  },
                },
                {
                  name: "--until",
                  description: "Show entries before this date (YYYY-MM-DD)",
                  args: {
                    name: "until",
                  },
                },
                {
                  name: "--command",
                  description: "Filter by command prefix",
                  args: {
                    name: "command",
                  },
                },
                {
                  name: "--status",
                  description: "Filter by status (success/error)",
                  args: {
                    name: "status",
                    suggestions: ["success", "error"],
                  },
                },
                {
                  name: "--grant",
                  description: "Filter by grant ID",
                  args: {
                    name: "grant",
                  },
                },
                {
                  name: "--request-id",
                  description: "Filter by Nylas request ID",
                  args: {
                    name: "request-id",
                  },
                },
                {
                  name: "--invoker",
                  description: "Filter by username",
                  args: {
                    name: "invoker",
                  },
                },
                {
                  name: "--source",
                  description:
                    "Filter by source platform (claude-code, github-actions, terminal)",
                  args: {
                    name: "source",
                    suggestions: ["claude-code", "github-actions", "terminal"],
                  },
                },
              ],
            },
            {
              name: "summary",
              description: "Show audit log statistics",
              options: [
                {
                  name: "--days",
                  description: "Number of days to include in summary",
                  args: {
                    name: "days",
                    default: "7",
                  },
                },
              ],
            },
            {
              name: "clear",
              description: "Clear all audit logs",
              options: [forceOption],
            },
          ],
        },
        {
          name: "config",
          description: "Manage audit configuration",
          subcommands: [
            {
              name: "show",
              description: "Show audit configuration",
            },
            {
              name: "set",
              description: "Set a configuration value",
              args: [keyArg, valueArg],
            },
          ],
        },
        {
          name: "export",
          description: "Export audit logs to a file",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output file path (default: stdout)",
              args: {
                name: "output",
                template: "filepaths",
              },
            },
            {
              name: "--format",
              description:
                "Output format: json, csv (default: auto-detect from extension)",
              args: {
                name: "format",
                suggestions: ["json", "csv"],
              },
            },
            {
              name: "--since",
              description: "Export entries after this date (YYYY-MM-DD)",
              args: {
                name: "since",
              },
            },
            {
              name: "--until",
              description: "Export entries before this date (YYYY-MM-DD)",
              args: {
                name: "until",
              },
            },
            {
              name: ["--limit", "-n"],
              description: "Maximum entries to export",
              args: {
                name: "limit",
                default: "10000",
              },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Authentication commands",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with an email provider",
          options: [
            {
              name: ["--provider", "-p"],
              description:
                "Email provider (google, microsoft, ews, icloud, yahoo, imap)",
              args: {
                name: "provider",
                default: "google",
                suggestions: [
                  "google",
                  "microsoft",
                  "ews",
                  "icloud",
                  "yahoo",
                  "imap",
                ],
              },
            },
          ],
        },
        {
          name: "logout",
          description: "Revoke current authentication",
        },
        {
          name: "status",
          description: "Show current authentication status",
        },
        {
          name: "whoami",
          description: "Show current user info",
        },
        {
          name: "list",
          description: "List all authenticated accounts",
        },
        {
          name: "show",
          description: "Show detailed grant information",
          args: grantIdArg,
        },
        {
          name: "switch",
          description: "Switch active grant",
          args: {
            name: "email-or-grant-id",
          },
        },
        {
          name: "add",
          description: "Manually add an existing grant",
          options: [
            {
              name: ["--email", "-e"],
              description: "Email address (auto-detected from Nylas)",
              args: {
                name: "email",
              },
            },
            {
              name: ["--provider", "-p"],
              description: "Provider (auto-detected from Nylas)",
              args: {
                name: "provider",
              },
            },
            {
              name: "--default",
              description: "Set as default account",
            },
          ],
          args: grantIdArg2,
        },
        {
          name: "remove",
          description:
            "Remove a grant from local config (without revoking on server)",
          args: grantIdArg2,
        },
        {
          name: "config",
          description: "Configure API credentials",
          options: [
            {
              name: ["--region", "-r"],
              description: "API region (us or eu)",
              args: {
                name: "region",
                default: "us",
                suggestions: ["us", "eu"],
              },
            },
            {
              name: "--client-id",
              description: "Nylas Client ID (auto-detected if not provided)",
              args: {
                name: "client-id",
              },
            },
            {
              name: "--api-key",
              description: "Nylas API Key",
              args: {
                name: "api-key",
              },
            },
            {
              name: "--reset",
              description: "Reset all configuration",
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke a specific grant",
          args: grantIdArg2,
        },
        {
          name: "token",
          description: "Show or copy API key",
          options: [
            {
              name: ["--copy", "-c"],
              description: "Copy to clipboard",
            },
          ],
        },
        {
          name: "providers",
          description: "List available authentication providers",
        },
        {
          name: "detect",
          description: "Detect provider from email address",
          args: {
            name: "email",
          },
        },
        {
          name: "scopes",
          description: "Show OAuth scopes for a grant",
          args: grantIdArg,
        },
        {
          name: "migrate",
          description:
            "Migrate credentials from encrypted file to system keyring",
        },
      ],
    },
    {
      name: "config",
      description: "Manage CLI configuration",
      subcommands: [
        {
          name: ["list", "ls", "show"],
          description: "Show all configuration",
        },
        {
          name: "get",
          description: "Get a configuration value",
          args: keyArg,
        },
        {
          name: "set",
          description: "Set a configuration value",
          args: [keyArg, valueArg],
        },
        {
          name: "init",
          description: "Initialize configuration with defaults",
          options: [
            {
              name: ["--force", "-f"],
              description: "Overwrite existing configuration",
            },
          ],
        },
        {
          name: "path",
          description: "Show configuration file path",
        },
        {
          name: "reset",
          description: "Reset all CLI configuration and credentials",
          options: [
            {
              name: "--force",
              description: "Skip confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "otp",
      description: "OTP management commands",
      subcommands: [
        {
          name: "get",
          description: "Get the latest OTP code",
          options: [
            {
              name: "--no-copy",
              description: "Don't copy OTP to clipboard",
            },
            {
              name: "--raw",
              description: "Output only the OTP code",
            },
          ],
          args: emailArg,
        },
        {
          name: "watch",
          description: "Watch for new OTP codes",
          options: [
            {
              name: ["--interval", "-i"],
              description: "Check interval in seconds",
              args: {
                name: "interval",
                default: "10",
              },
            },
            {
              name: "--no-copy",
              description: "Don't copy OTP to clipboard",
            },
          ],
          args: emailArg,
        },
        {
          name: "list",
          description: "List configured accounts",
        },
        {
          name: "messages",
          description: "Show recent messages (debug)",
          options: [
            {
              name: ["--limit", "-l"],
              description: "Number of messages to fetch",
              args: {
                name: "limit",
                default: "10",
              },
            },
          ],
          args: emailArg,
        },
      ],
    },
    {
      name: "email",
      description: "Manage emails",
      subcommands: [
        {
          name: "list",
          description: "List recent emails",
          options: [
            {
              name: ["--limit", "-l"],
              description:
                "Number of messages to fetch (auto-paginates if >200)",
              args: {
                name: "limit",
                default: "10",
              },
            },
            {
              name: ["--unread", "-u"],
              description: "Only show unread messages",
            },
            {
              name: ["--starred", "-s"],
              description: "Only show starred messages",
            },
            {
              name: ["--from", "-f"],
              description: "Filter by sender email",
              args: {
                name: "from",
              },
            },
            {
              name: "--folder",
              description:
                "Filter by folder (e.g., INBOX, SENT, TRASH, or folder ID)",
              args: {
                name: "folder",
              },
            },
            {
              name: "--all-folders",
              description:
                "Show messages from all folders (default: INBOX only)",
            },
            {
              name: "--id",
              description: "Show message IDs",
            },
            {
              name: ["--all", "-a"],
              description: "Fetch all messages (paginated)",
            },
            {
              name: "--max",
              description: "Maximum messages to fetch with --all (0=unlimited)",
              args: {
                name: "max",
              },
            },
            {
              name: "--metadata",
              description:
                "Filter by metadata (format: key:value, only key1-key5 supported)",
              args: {
                name: "metadata",
              },
            },
          ],
          args: grantIdArg,
        },
        {
          name: ["subscriptions", "subs"],
          description: "Discover email subscriptions",
          subcommands: [
            {
              name: "list",
              description: "List detected email subscriptions",
              options: [
                limitOption,
                sinceOption,
                {
                  name: "--all-folders",
                  description: "Scan all folders instead of only the inbox",
                },
              ],
            },
            {
              name: "unsubscribe",
              description:
                "Open unsubscribe actions for selected mailing lists",
              options: [
                limitOption,
                sinceOption,
                {
                  name: "--all-folders",
                  description: "Scan all folders instead of only the inbox",
                },
                {
                  name: "--dry-run",
                  description:
                    "Preview unsubscribe actions without making changes",
                },
                yesOption2,
              ],
              args: {
                name: "email-or-list-id",
                isVariadic: true,
              },
            },
            {
              name: "cleanup",
              description: "Delete messages from selected subscriptions",
              options: [
                limitOption,
                sinceOption,
                {
                  name: "--all-folders",
                  description:
                    "Scan all folders instead of only the inbox (or Trash with --permanent)",
                },
                {
                  name: "--permanent",
                  description:
                    "Permanently delete matches; scans Trash unless --all-folders is set",
                },
                {
                  name: "--dry-run",
                  description: "Preview cleanup actions without making changes",
                },
                yesOption2,
              ],
              args: {
                name: "email-or-list-id",
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: ["read", "show"],
          description: "Read a specific email",
          options: [
            {
              name: ["--mark-read", "-r"],
              description: "Mark the message as read after viewing",
            },
            {
              name: "--raw",
              description: "Show raw email body without HTML processing",
            },
            {
              name: "--mime",
              description: "Show raw RFC822/MIME message format",
            },
            {
              name: "--headers",
              description: "Show email headers (works with all providers)",
            },
            {
              name: "--verify",
              description: "Verify GPG/PGP signature of the message",
            },
            {
              name: "--decrypt",
              description: "Decrypt PGP/MIME encrypted message",
            },
          ],
          args: [messageIdArg, grantIdArg],
        },
        {
          name: "send",
          description: "Send an email",
          options: [
            {
              name: ["--to", "-t"],
              description: "Recipient email addresses",
              isRepeatable: true,
              args: {
                name: "to",
              },
            },
            ccOption,
            {
              name: "--bcc",
              description: "BCC email addresses",
              isRepeatable: true,
              args: {
                name: "bcc",
              },
            },
            {
              name: ["--subject", "-s"],
              description: "Email subject",
              args: {
                name: "subject",
              },
            },
            {
              name: ["--body", "-b"],
              description: "Email body (HTML or plain text)",
              args: {
                name: "body",
              },
            },
            {
              name: "--reply-to",
              description: "Message ID to reply to",
              args: {
                name: "reply-to",
              },
            },
            {
              name: ["--interactive", "-i"],
              description: "Interactive mode",
            },
            {
              name: "--schedule",
              description:
                "Schedule sending (e.g., '2h', 'tomorrow 9am', '2024-01-15 14:30')",
              args: {
                name: "schedule",
              },
            },
            yesOption,
            {
              name: "--track-opens",
              description: "Track email opens",
            },
            {
              name: "--track-links",
              description: "Track link clicks",
            },
            {
              name: "--track-label",
              description: "Label for tracking (used to group tracked emails)",
              args: {
                name: "track-label",
              },
            },
            {
              name: "--metadata",
              description: "Custom metadata as key=value (can be repeated)",
              isRepeatable: true,
              args: {
                name: "metadata",
              },
            },
            {
              name: "--sign",
              description:
                "Sign email with GPG (uses default key from git config)",
            },
            {
              name: "--gpg-key",
              description: "Specific GPG key ID to use for signing",
              args: {
                name: "gpg-key",
              },
            },
            {
              name: "--list-gpg-keys",
              description: "List available GPG signing keys and exit",
            },
            {
              name: "--encrypt",
              description: "Encrypt email with recipient's GPG public key",
            },
            {
              name: "--recipient-key",
              description:
                "Specific GPG key ID for encryption (auto-detected from recipient email if not specified)",
              args: {
                name: "recipient-key",
              },
            },
            {
              name: "--signature-id",
              description: "Stored signature ID to append when sending",
              args: {
                name: "signature-id",
              },
            },
            {
              name: "--template-id",
              description: "Hosted template ID to render and send",
              args: {
                name: "template-id",
              },
            },
            {
              name: "--template-scope",
              description: "Hosted template scope: app or grant",
              args: {
                name: "template-scope",
                default: "app",
                suggestions: ["app", "grant"],
              },
            },
            {
              name: "--template-grant-id",
              description:
                "Grant ID or email for grant-scoped hosted templates",
              args: {
                name: "template-grant-id",
              },
            },
            {
              name: "--template-data",
              description: "Inline JSON object with hosted template variables",
              args: {
                name: "template-data",
              },
            },
            {
              name: "--template-data-file",
              description: "Path to a JSON file with hosted template variables",
              args: {
                name: "template-data-file",
                template: "filepaths",
              },
            },
            {
              name: "--render-only",
              description: "Render a hosted template preview without sending",
            },
            {
              name: "--template-strict",
              description:
                "Fail if a hosted template references missing variables",
            },
          ],
          args: grantIdArg,
        },
        {
          name: "reply",
          description: "Reply to an email",
          options: [
            {
              name: ["--body", "-b"],
              description: "Reply body (HTML or plain text)",
              args: {
                name: "body",
              },
            },
            {
              name: "--all",
              description:
                "Reply to all recipients (original To and Cc, excluding yourself)",
            },
            {
              name: ["--interactive", "-i"],
              description: "Compose the reply body interactively",
            },
            yesOption,
          ],
          args: [messageIdArg, grantIdArg],
        },
        {
          name: "search",
          description: "Search emails",
          options: [
            {
              name: ["--limit", "-l"],
              description: "Maximum number of results (auto-paginates if >200)",
              args: {
                name: "limit",
                default: "20",
              },
            },
            {
              name: "--from",
              description: "Filter by sender",
              args: {
                name: "from",
              },
            },
            {
              name: "--to",
              description: "Filter by recipient",
              args: {
                name: "to",
              },
            },
            subjectOption,
            {
              name: "--after",
              description: "Messages after date (YYYY-MM-DD)",
              args: {
                name: "after",
              },
            },
            {
              name: "--before",
              description: "Messages before date (YYYY-MM-DD)",
              args: {
                name: "before",
              },
            },
            {
              name: "--has-attachment",
              description: "Only messages with attachments",
            },
            {
              name: "--unread",
              description: "Only unread messages",
            },
            {
              name: "--starred",
              description: "Only starred messages",
            },
            {
              name: "--in",
              description: "Filter by folder (e.g., INBOX, SENT)",
              args: {
                name: "in",
              },
            },
          ],
          args: [
            {
              name: "query",
            },
            grantIdArg,
          ],
        },
        {
          name: "mark",
          description: "Mark messages as read/unread/starred",
          subcommands: [
            {
              name: "read",
              description: "Mark a message as read",
              args: [messageIdArg, grantIdArg],
            },
            {
              name: "unread",
              description: "Mark a message as unread",
              args: [messageIdArg, grantIdArg],
            },
            {
              name: "starred",
              description: "Star a message",
              args: [messageIdArg, grantIdArg],
            },
            {
              name: "unstarred",
              description: "Remove star from a message",
              args: [messageIdArg, grantIdArg],
            },
          ],
        },
        {
          name: "move",
          description: "Move a message to a folder (or archive it)",
          options: [
            {
              name: "--folder",
              description: "Destination folder ID",
              args: {
                name: "folder",
              },
            },
            {
              name: "--archive",
              description: "Archive the message (clear all folders/labels)",
            },
          ],
          args: [messageIdArg, grantIdArg],
        },
        {
          name: "clean",
          description: "Strip quoted replies and signatures from messages",
          options: [
            {
              name: ["--grant", "-g"],
              description: "Grant ID or email (defaults to the active grant)",
              args: {
                name: "grant",
              },
            },
            {
              name: "--keep-links",
              description: "Keep links instead of stripping them",
            },
            {
              name: "--keep-images",
              description: "Keep images instead of stripping them",
            },
            {
              name: "--keep-tables",
              description: "Keep tables instead of stripping them",
            },
            {
              name: "--images-as-markdown",
              description: "Return images as Markdown links",
            },
            {
              name: "--keep-signatures",
              description: 'Keep conclusion phrases like "Best" and "Regards"',
            },
          ],
          args: {
            name: "message-id",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete an email message",
          options: [forceOption],
          args: [messageIdArg, grantIdArg],
        },
        {
          name: "folders",
          description: "Manage email folders/labels",
          subcommands: [
            {
              name: "list",
              description: "List all folders",
              options: [
                {
                  name: "--id",
                  description: "Show folder IDs",
                },
              ],
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show folder details",
              args: [folderIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a new folder",
              options: [
                {
                  name: "--parent",
                  description: "Parent folder ID",
                  args: {
                    name: "parent",
                  },
                },
                {
                  name: "--bg-color",
                  description: "Background color (hex)",
                  args: {
                    name: "bg-color",
                  },
                },
                {
                  name: "--text-color",
                  description: "Text color (hex)",
                  args: {
                    name: "text-color",
                  },
                },
              ],
              args: [nameArg, grantIdArg],
            },
            {
              name: "rename",
              description: "Rename a folder",
              options: [
                {
                  name: "--bg-color",
                  description: "Background color (hex)",
                  args: {
                    name: "bg-color",
                  },
                },
                {
                  name: "--text-color",
                  description: "Text color (hex)",
                  args: {
                    name: "text-color",
                  },
                },
                {
                  name: "--parent",
                  description: "Parent folder ID",
                  args: {
                    name: "parent",
                  },
                },
              ],
              args: [
                folderIdArg,
                {
                  name: "new-name",
                },
                grantIdArg,
              ],
            },
            {
              name: "delete",
              description: "Delete a folder",
              options: [forceOption],
              args: [folderIdArg, grantIdArg],
            },
          ],
        },
        {
          name: "threads",
          description: "Manage email threads/conversations",
          subcommands: [
            {
              name: "list",
              description: "List email threads",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of threads to fetch",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: ["--unread", "-u"],
                  description: "Only show unread threads",
                },
                {
                  name: ["--starred", "-s"],
                  description: "Only show starred threads",
                },
                subjectOption,
                {
                  name: "--id",
                  description: "Show thread IDs",
                },
              ],
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show thread details",
              args: [threadIdArg, grantIdArg],
            },
            {
              name: "mark",
              description: "Mark thread as read/unread or starred/unstarred",
              options: [
                {
                  name: "--read",
                  description: "Mark thread as read",
                },
                {
                  name: "--unread",
                  description: "Mark thread as unread",
                },
                {
                  name: "--star",
                  description: "Star the thread",
                },
                {
                  name: "--unstar",
                  description: "Unstar the thread",
                },
              ],
              args: [threadIdArg, grantIdArg],
            },
            {
              name: "delete",
              description: "Delete a thread",
              options: [forceOption2],
              args: [threadIdArg, grantIdArg],
            },
            {
              name: "search",
              description: "Search threads",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Maximum number of results",
                  args: {
                    name: "limit",
                    default: "20",
                  },
                },
                {
                  name: "--from",
                  description: "Filter by sender",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--to",
                  description: "Filter by recipient",
                  args: {
                    name: "to",
                  },
                },
                subjectOption,
                {
                  name: "--after",
                  description: "Threads with messages after date (YYYY-MM-DD)",
                  args: {
                    name: "after",
                  },
                },
                {
                  name: "--before",
                  description: "Threads with messages before date (YYYY-MM-DD)",
                  args: {
                    name: "before",
                  },
                },
                {
                  name: "--has-attachment",
                  description: "Only threads with attachments",
                },
                {
                  name: "--unread",
                  description: "Only unread threads",
                },
                {
                  name: "--starred",
                  description: "Only starred threads",
                },
                {
                  name: "--in",
                  description: "Filter by folder (e.g., INBOX, SENT)",
                  args: {
                    name: "in",
                  },
                },
                {
                  name: "--id",
                  description: "Show thread IDs",
                },
              ],
              args: grantIdArg,
            },
          ],
        },
        {
          name: "drafts",
          description: "Manage email drafts",
          subcommands: [
            {
              name: "list",
              description: "List drafts",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of drafts to fetch",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: "--id",
                  description: "Show full draft IDs",
                },
              ],
              args: grantIdArg,
            },
            {
              name: "create",
              description: "Create a new draft",
              options: [
                {
                  name: ["--to", "-t"],
                  description: "Recipient email addresses",
                  isRepeatable: true,
                  args: {
                    name: "to",
                  },
                },
                ccOption,
                {
                  name: ["--subject", "-s"],
                  description: "Email subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: ["--body", "-b"],
                  description: "Email body",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--reply-to",
                  description: "Message ID to reply to",
                  args: {
                    name: "reply-to",
                  },
                },
                {
                  name: "--signature-id",
                  description:
                    "Stored signature ID to append when creating the draft",
                  args: {
                    name: "signature-id",
                  },
                },
                {
                  name: ["--attach", "-a"],
                  description: "File paths to attach",
                  isRepeatable: true,
                  args: {
                    name: "attach",
                    template: "filepaths",
                  },
                },
              ],
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show draft details",
              args: [draftIdArg, grantIdArg],
            },
            {
              name: "send",
              description: "Send a draft",
              options: [
                forceOption2,
                {
                  name: "--signature-id",
                  description:
                    "Stored signature ID to append when sending a draft created without a stored signature",
                  args: {
                    name: "signature-id",
                  },
                },
              ],
              args: [draftIdArg, grantIdArg],
            },
            {
              name: "delete",
              description: "Delete a draft",
              options: [forceOption],
              args: [draftIdArg, grantIdArg],
            },
          ],
        },
        {
          name: "attachments",
          description: "Manage email attachments",
          subcommands: [
            {
              name: "list",
              description: "List attachments in a message",
              args: [messageIdArg, grantIdArg],
            },
            {
              name: "show",
              description: "Show attachment metadata",
              args: [
                {
                  name: "attachment-id",
                },
                messageIdArg,
                grantIdArg,
              ],
            },
            {
              name: "download",
              description: "Download an attachment",
              options: [
                {
                  name: ["--output", "-o"],
                  description: "Output file path (default: original filename)",
                  args: {
                    name: "output",
                    template: "filepaths",
                  },
                },
              ],
              args: [
                {
                  name: "attachment-id",
                },
                messageIdArg,
                grantIdArg,
              ],
            },
          ],
        },
        {
          name: "scheduled",
          description: "Manage scheduled messages",
          subcommands: [
            {
              name: "list",
              description: "List scheduled messages",
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show scheduled message details",
              args: [
                {
                  name: "schedule-id",
                },
                grantIdArg,
              ],
            },
            {
              name: "cancel",
              description: "Cancel a scheduled message",
              options: [forceOption2],
              args: [
                {
                  name: "schedule-id",
                },
                grantIdArg,
              ],
            },
          ],
        },
        {
          name: "smart-compose",
          description: "Generate AI-powered email drafts",
          options: [
            {
              name: "--prompt",
              description:
                "AI instruction for generating the email (required, max 1000 tokens)",
              isRequired: true,
              args: {
                name: "prompt",
              },
            },
            {
              name: "--message-id",
              description:
                "Message ID to reply to (optional, generates reply if provided)",
              args: {
                name: "message-id",
              },
            },
          ],
        },
        {
          name: "tracking-info",
          description: "Information about email tracking",
        },
        {
          name: "metadata",
          description: "Manage message metadata",
          subcommands: [
            {
              name: "show",
              description: "Show metadata for a message",
              args: [messageIdArg, grantIdArg],
            },
            {
              name: "info",
              description: "Show metadata usage information",
            },
          ],
        },
        {
          name: ["ai", "intelligence"],
          description: "AI-powered email intelligence",
          subcommands: [
            {
              name: "analyze",
              description: "Analyze recent emails with AI",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of emails to analyze",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: ["--provider", "-p"],
                  description:
                    "AI provider to use (ollama, claude, openai, groq)",
                  args: {
                    name: "provider",
                    suggestions: ["ollama", "claude", "openai", "groq"],
                  },
                },
                {
                  name: "--unread",
                  description: "Only analyze unread emails",
                },
                {
                  name: "--folder",
                  description: "Folder to analyze (default: INBOX)",
                  args: {
                    name: "folder",
                  },
                },
              ],
              args: grantIdArg,
            },
          ],
        },
        {
          name: "templates",
          description: "Manage email templates",
          subcommands: [
            {
              name: "list",
              description: "List email templates",
              options: [
                {
                  name: ["--category", "-c"],
                  description: "Filter by category",
                  args: {
                    name: "category",
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show template details",
              args: templateIdArg,
            },
            {
              name: "create",
              description: "Create an email template",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Template name (required)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--subject", "-s"],
                  description: "Email subject (supports {{variables}})",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: ["--body", "-b"],
                  description: "Email body (supports {{variables}})",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: ["--category", "-c"],
                  description:
                    "Template category (e.g., sales, support, marketing)",
                  args: {
                    name: "category",
                  },
                },
                {
                  name: ["--interactive", "-i"],
                  description: "Interactive mode",
                },
              ],
            },
            {
              name: "update",
              description: "Update an email template",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "New template name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--subject", "-s"],
                  description: "New email subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: ["--body", "-b"],
                  description: "New email body",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: ["--category", "-c"],
                  description: "New template category",
                  args: {
                    name: "category",
                  },
                },
              ],
              args: templateIdArg,
            },
            {
              name: "delete",
              description: "Delete an email template",
              options: [forceOption],
              args: templateIdArg,
            },
            {
              name: "use",
              description: "Use a template to send an email",
              options: [
                {
                  name: ["--to", "-t"],
                  description: "Recipient email addresses (required)",
                  isRepeatable: true,
                  args: {
                    name: "to",
                  },
                },
                ccOption,
                {
                  name: "--bcc",
                  description: "BCC email addresses",
                  isRepeatable: true,
                  args: {
                    name: "bcc",
                  },
                },
                {
                  name: "--var",
                  description: "Variable values as key=value (can be repeated)",
                  isRepeatable: true,
                  args: {
                    name: "var",
                  },
                },
                {
                  name: ["--preview", "-p"],
                  description: "Preview the expanded template without sending",
                },
                yesOption,
                {
                  name: "--signature-id",
                  description: "Stored signature ID to append when sending",
                  args: {
                    name: "signature-id",
                  },
                },
              ],
              args: templateIdArg,
            },
          ],
        },
        {
          name: "signatures",
          description: "Manage stored email signatures",
          subcommands: [
            {
              name: "list",
              description: "List stored signatures",
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show signature details",
              args: [signatureIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a stored signature",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Signature name (required)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--body", "-b"],
                  description: "Signature HTML body",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--body-file",
                  description:
                    "Path to a file containing the signature HTML body",
                  args: {
                    name: "body-file",
                    template: "filepaths",
                  },
                },
              ],
              args: grantIdArg,
            },
            {
              name: "update",
              description: "Update a stored signature",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Updated signature name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--body", "-b"],
                  description: "Updated signature HTML body",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--body-file",
                  description:
                    "Path to a file containing the updated signature HTML body",
                  args: {
                    name: "body-file",
                    template: "filepaths",
                  },
                },
              ],
              args: [signatureIdArg, grantIdArg],
            },
            {
              name: "delete",
              description: "Delete a stored signature",
              options: [yesOption2],
              args: [signatureIdArg, grantIdArg],
            },
          ],
        },
      ],
    },
    {
      name: ["calendar", "cal"],
      description: "Manage calendars and events",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List calendars",
          args: grantIdArg,
        },
        {
          name: "show",
          description: "Show calendar details",
          args: [calendarIdArg, grantIdArg],
        },
        {
          name: "create",
          description: "Create a new calendar",
          options: [
            {
              name: ["--description", "-d"],
              description: "Calendar description",
              args: {
                name: "description",
              },
            },
            {
              name: ["--location", "-l"],
              description: "Calendar location",
              args: {
                name: "location",
              },
            },
            {
              name: ["--timezone", "-t"],
              description: "Calendar timezone (e.g., America/New_York)",
              args: {
                name: "timezone",
              },
            },
          ],
          args: [nameArg, grantIdArg],
        },
        {
          name: "update",
          description: "Update a calendar",
          options: [
            {
              name: ["--name", "-n"],
              description: "New calendar name",
              args: {
                name: "name",
              },
            },
            {
              name: ["--description", "-d"],
              description: "Calendar description",
              args: {
                name: "description",
              },
            },
            {
              name: ["--location", "-l"],
              description: "Calendar location",
              args: {
                name: "location",
              },
            },
            {
              name: ["--timezone", "-t"],
              description: "Calendar timezone",
              args: {
                name: "timezone",
              },
            },
            {
              name: ["--color", "-c"],
              description: "Calendar color (hex, e.g., #FF5733)",
              args: {
                name: "color",
              },
            },
          ],
          args: [calendarIdArg, grantIdArg],
        },
        {
          name: "delete",
          description: "Delete a calendar",
          options: [forceOption2],
          args: [calendarIdArg, grantIdArg],
        },
        {
          name: ["events", "ev", "event"],
          description: "Manage calendar events",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List calendar events",
              options: [
                calendarOption,
                {
                  name: ["--limit", "-n"],
                  description:
                    "Maximum number of events to show (auto-paginates if >200)",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: ["--days", "-d"],
                  description:
                    "Show events for the next N days (0 for no limit)",
                  args: {
                    name: "days",
                    default: "7",
                  },
                },
                {
                  name: "--show-cancelled",
                  description: "Include cancelled events",
                },
                {
                  name: "--timezone",
                  description:
                    "Display times in this timezone (e.g., America/Los_Angeles). Defaults to local timezone",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: "--show-tz",
                  description: "Show timezone abbreviations (e.g., PST, EST)",
                },
              ],
              args: grantIdArg,
            },
            {
              name: ["show", "read", "get"],
              description: "Show event details",
              options: [
                calendarOption,
                {
                  name: "--timezone",
                  description:
                    "Display times in this timezone (e.g., America/Los_Angeles). Defaults to local timezone",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: "--show-tz",
                  description: "Show timezone abbreviations (e.g., PST, EST)",
                },
              ],
              args: [eventIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a new event",
              options: [
                calendarOption,
                {
                  name: ["--title", "-t"],
                  description: "Event title (required)",
                  isRequired: true,
                  args: {
                    name: "title",
                  },
                },
                {
                  name: ["--description", "-D"],
                  description: "Event description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: ["--location", "-l"],
                  description: "Event location",
                  args: {
                    name: "location",
                  },
                },
                {
                  name: ["--start", "-s"],
                  description:
                    "Start time (e.g., '2024-01-15 14:00' or '2024-01-15')",
                  isRequired: true,
                  args: {
                    name: "start",
                  },
                },
                {
                  name: ["--end", "-e"],
                  description: "End time (defaults to 1 hour after start)",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--all-day",
                  description: "Create an all-day event",
                },
                {
                  name: ["--participant", "-p"],
                  description:
                    "Add participant email (can be used multiple times)",
                  isRepeatable: true,
                  args: {
                    name: "participant",
                  },
                },
                {
                  name: "--busy",
                  description: "Mark time as busy",
                },
                {
                  name: "--free",
                  description: "Mark time as free (not busy)",
                },
                {
                  name: "--ignore-dst-warning",
                  description: "Skip DST conflict warnings",
                },
                {
                  name: "--ignore-working-hours",
                  description: "Skip working hours validation",
                },
                {
                  name: "--lock-timezone",
                  description:
                    "Lock event to its timezone (always display in this timezone)",
                },
                {
                  name: "--timezone",
                  description:
                    "IANA timezone for start/end times (e.g., America/Los_Angeles). Defaults to system timezone",
                  args: {
                    name: "timezone",
                  },
                },
              ],
              args: grantIdArg,
            },
            {
              name: "update",
              description: "Update an existing event",
              options: [
                calendarOption,
                {
                  name: ["--title", "-t"],
                  description: "Event title",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: ["--description", "-D"],
                  description: "Event description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: ["--location", "-l"],
                  description: "Event location",
                  args: {
                    name: "location",
                  },
                },
                {
                  name: ["--start", "-s"],
                  description: "Start time (e.g., '2024-01-15 14:00')",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: ["--end", "-e"],
                  description: "End time",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--all-day",
                  description: "Set as all-day event",
                },
                {
                  name: ["--participant", "-p"],
                  description: "Set participant emails (replaces existing)",
                  isRepeatable: true,
                  args: {
                    name: "participant",
                  },
                },
                {
                  name: "--busy",
                  description: "Mark time as busy",
                },
                {
                  name: "--free",
                  description: "Mark time as free (not busy)",
                },
                {
                  name: "--visibility",
                  description: "Event visibility (public, private, default)",
                  args: {
                    name: "visibility",
                  },
                },
                {
                  name: "--lock-timezone",
                  description: "Lock event to its timezone",
                },
                {
                  name: "--unlock-timezone",
                  description: "Remove timezone lock from event",
                },
                {
                  name: "--timezone",
                  description:
                    "IANA timezone for start/end times (e.g., America/Los_Angeles). Defaults to system timezone",
                  args: {
                    name: "timezone",
                  },
                },
              ],
              args: [eventIdArg, grantIdArg],
            },
            {
              name: ["delete", "rm", "remove"],
              description: "Delete an event",
              options: [calendarOption, forceOption],
              args: [eventIdArg, grantIdArg],
            },
            {
              name: "rsvp",
              description: "RSVP to an event invitation",
              options: [
                calendarOption,
                {
                  name: "--comment",
                  description: "Optional comment with your RSVP",
                  args: {
                    name: "comment",
                  },
                },
              ],
              args: [
                eventIdArg,
                {
                  name: "status",
                  suggestions: ["yes", "no", "maybe"],
                },
                grantIdArg,
              ],
            },
            {
              name: "import",
              description:
                "Bulk-export events from a calendar (for migration/backup)",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description:
                    "Calendar ID to import from (defaults to primary)",
                  args: {
                    name: "calendar",
                  },
                },
                {
                  name: "--start",
                  description:
                    "Start of the window (YYYY-MM-DD, 'YYYY-MM-DD HH:MM', or Unix). Defaults to now",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "End of the window (YYYY-MM-DD, 'YYYY-MM-DD HH:MM', or Unix). Defaults to +1 month",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: ["--limit", "-n"],
                  description: "Maximum number of events to import (max 500)",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
              ],
              args: grantIdArg,
            },
          ],
        },
        {
          name: ["availability", "avail", "freebusy"],
          description: "Check calendar availability",
          subcommands: [
            {
              name: "check",
              description: "Check free/busy status for calendars",
              options: [
                {
                  name: ["--emails", "-e"],
                  description: "Email addresses to check (comma-separated)",
                  isRepeatable: true,
                  args: {
                    name: "emails",
                  },
                },
                {
                  name: ["--start", "-s"],
                  description: "Start time (default: now)",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description: "End time",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: ["--duration", "-d"],
                  description: "Duration from start (e.g., '8h', '1d', '7d')",
                  args: {
                    name: "duration",
                  },
                },
                {
                  name: ["--format", "-f"],
                  description: "Output format (text, json, yaml)",
                  args: {
                    name: "format",
                    default: "text",
                    suggestions: ["text", "json", "yaml"],
                  },
                },
              ],
              args: grantIdArg,
            },
            {
              name: "find",
              description: "Find available meeting times",
              options: [
                {
                  name: ["--participants", "-p"],
                  description: "Participant email addresses (required)",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "participants",
                  },
                },
                {
                  name: ["--start", "-s"],
                  description: "Start time for search (default: next hour)",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "End time for search (default: 7 days from start)",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: ["--duration", "-d"],
                  description: "Meeting duration in minutes",
                  args: {
                    name: "duration",
                    default: "30",
                  },
                },
                {
                  name: ["--interval", "-i"],
                  description: "Search interval in minutes",
                  args: {
                    name: "interval",
                    default: "15",
                  },
                },
                {
                  name: ["--format", "-f"],
                  description: "Output format (text, json, yaml)",
                  args: {
                    name: "format",
                    default: "text",
                    suggestions: ["text", "json", "yaml"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["resources", "rooms"],
          description: "List bookable room and equipment resources",
          args: grantIdArg,
        },
        {
          name: "virtual",
          description: "Manage virtual calendars",
          subcommands: [
            {
              name: "list",
              description: "List all virtual calendar grants",
            },
            {
              name: "create",
              description: "Create a new virtual calendar grant",
              options: [
                {
                  name: "--email",
                  description:
                    "Email identifier for the virtual calendar (required)",
                  isRequired: true,
                  args: {
                    name: "email",
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a virtual calendar grant",
              args: grantIdArg2,
            },
            {
              name: "delete",
              description: "Delete a virtual calendar grant",
              options: [yesOption],
              args: grantIdArg2,
            },
          ],
        },
        {
          name: "recurring",
          description: "Manage recurring events",
          subcommands: [
            {
              name: "list",
              description: "List all instances of a recurring event",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description: "Calendar ID (required)",
                  args: {
                    name: "calendar",
                  },
                },
                grantOption,
                {
                  name: "--limit",
                  description: "Maximum number of instances to retrieve",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
                {
                  name: "--start",
                  description: "Start time (Unix timestamp)",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description: "End time (Unix timestamp)",
                  args: {
                    name: "end",
                  },
                },
              ],
              args: [
                {
                  name: "master-event-id",
                },
                grantIdArg,
              ],
            },
            {
              name: "update",
              description: "Update a single instance of a recurring event",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description: "Calendar ID (required)",
                  isRequired: true,
                  args: {
                    name: "calendar",
                  },
                },
                grantOption,
                {
                  name: "--title",
                  description: "New title for this instance",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--description",
                  description: "New description for this instance",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--location",
                  description: "New location for this instance",
                  args: {
                    name: "location",
                  },
                },
                {
                  name: "--start",
                  description: "New start time (RFC3339 format)",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description: "New end time (RFC3339 format)",
                  args: {
                    name: "end",
                  },
                },
              ],
              args: [
                {
                  name: "instance-id",
                },
                grantIdArg,
              ],
            },
            {
              name: "delete",
              description: "Delete a single instance of a recurring event",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description: "Calendar ID (required)",
                  isRequired: true,
                  args: {
                    name: "calendar",
                  },
                },
                grantOption,
                yesOption,
              ],
              args: [
                {
                  name: "instance-id",
                },
                grantIdArg,
              ],
            },
          ],
        },
        {
          name: "find-time",
          description: "Find optimal meeting times across multiple timezones",
          options: [
            {
              name: ["--participants", "-p"],
              description: "Participant email addresses (comma-separated)",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "participants",
              },
            },
            {
              name: "--timezones",
              description:
                "Participant IANA timezones, aligned with --participants order",
              isRepeatable: true,
              args: {
                name: "timezones",
              },
            },
            {
              name: ["--duration", "-d"],
              description: "Meeting duration (e.g., 30m, 1h, 1h30m)",
              args: {
                name: "duration",
                default: "1h",
              },
            },
            {
              name: "--working-start",
              description: "Working hours start (HH:MM)",
              args: {
                name: "working-start",
                default: "09:00",
              },
            },
            {
              name: "--working-end",
              description: "Working hours end (HH:MM)",
              args: {
                name: "working-end",
                default: "17:00",
              },
            },
            {
              name: "--days",
              description: "Number of days to search",
              args: {
                name: "days",
                default: "7",
              },
            },
            {
              name: "--exclude-weekends",
              description: "Exclude weekends from search",
            },
          ],
        },
        {
          name: "schedule",
          description: "Schedule meetings with AI assistance",
          subcommands: [
            {
              name: "ai",
              description: "AI-powered natural language scheduling",
              options: [
                {
                  name: ["--provider", "-p"],
                  description:
                    "AI provider to use (ollama, claude, openai, groq)",
                  args: {
                    name: "provider",
                    suggestions: ["ollama", "claude", "openai", "groq"],
                  },
                },
                {
                  name: "--max-options",
                  description: "Maximum number of options to suggest",
                  args: {
                    name: "max-options",
                    default: "3",
                  },
                },
                {
                  name: "--privacy",
                  description: "Use local LLM (Ollama) for privacy",
                },
                {
                  name: "--yes",
                  description:
                    "Automatically create the first suggested option",
                },
                {
                  name: "--timezone",
                  description: "Your timezone (auto-detected if not specified)",
                  args: {
                    name: "timezone",
                  },
                },
                grantOption,
              ],
              args: {
                name: "query",
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: ["ai", "intelligence"],
          description: "AI-powered calendar intelligence",
          subcommands: [
            {
              name: "analyze-thread",
              description: "Analyze email thread to extract meeting context",
              options: [
                {
                  name: "--thread",
                  description: "Email thread ID to analyze (required)",
                  args: {
                    name: "thread",
                  },
                },
                {
                  name: "--agenda",
                  description: "Generate meeting agenda",
                },
                {
                  name: "--time",
                  description: "Suggest best meeting time",
                },
                {
                  name: "--create-meeting",
                  description: "Create meeting event after analysis",
                },
                {
                  name: "--provider",
                  description:
                    "AI provider to use (ollama, claude, openai, groq)",
                  args: {
                    name: "provider",
                    suggestions: ["ollama", "claude", "openai", "groq"],
                  },
                },
              ],
            },
            {
              name: "analyze",
              description:
                "Analyze meeting patterns and get AI recommendations",
              options: [
                {
                  name: "--days",
                  description: "Number of days to analyze",
                  args: {
                    name: "days",
                    default: "90",
                  },
                },
                {
                  name: "--apply",
                  description: "Apply top recommendations automatically",
                },
                {
                  name: "--score-time",
                  description: "Score a specific meeting time (RFC3339 format)",
                  args: {
                    name: "score-time",
                  },
                },
                {
                  name: "--participants",
                  description: "Participants for scoring (email addresses)",
                  isRepeatable: true,
                  args: {
                    name: "participants",
                  },
                },
                {
                  name: "--duration",
                  description: "Meeting duration in minutes for scoring",
                  args: {
                    name: "duration",
                    default: "30",
                  },
                },
              ],
            },
            {
              name: "conflicts",
              description: "Detect and resolve scheduling conflicts",
              subcommands: [
                {
                  name: "check",
                  description: "Check for conflicts with a proposed meeting",
                  options: [
                    {
                      name: "--title",
                      description: "Meeting title (required)",
                      isRequired: true,
                      args: {
                        name: "title",
                      },
                    },
                    {
                      name: "--start",
                      description: "Start time in RFC3339 format (required)",
                      isRequired: true,
                      args: {
                        name: "start",
                      },
                    },
                    {
                      name: "--end",
                      description:
                        "End time in RFC3339 format (optional, uses --duration if not set)",
                      args: {
                        name: "end",
                      },
                    },
                    {
                      name: "--duration",
                      description: "Duration in minutes",
                      args: {
                        name: "duration",
                        default: "60",
                      },
                    },
                    {
                      name: "--participants",
                      description: "Participant email addresses",
                      isRepeatable: true,
                      args: {
                        name: "participants",
                      },
                    },
                    {
                      name: "--auto-resolve",
                      description: "Automatically select best alternative",
                    },
                  ],
                },
              ],
            },
            {
              name: "reschedule",
              description: "AI-powered meeting rescheduling",
              subcommands: [
                {
                  name: "ai",
                  description: "AI-powered rescheduling with smart suggestions",
                  options: [
                    {
                      name: "--reason",
                      description: "Reason for rescheduling",
                      args: {
                        name: "reason",
                      },
                    },
                    {
                      name: "--preferred-times",
                      description:
                        "Preferred alternative times (RFC3339 format)",
                      isRepeatable: true,
                      args: {
                        name: "preferred-times",
                      },
                    },
                    {
                      name: "--max-delay-days",
                      description: "Maximum days to delay the meeting",
                      args: {
                        name: "max-delay-days",
                        default: "14",
                      },
                    },
                    {
                      name: "--notify",
                      description: "Send notification to participants",
                    },
                    {
                      name: "--auto-select",
                      description:
                        "Automatically select and apply best alternative",
                    },
                    {
                      name: "--must-include",
                      description: "Participant emails that must be available",
                      isRepeatable: true,
                      args: {
                        name: "must-include",
                      },
                    },
                    {
                      name: "--avoid-days",
                      description: "Days to avoid (e.g., Friday, Monday)",
                      isRepeatable: true,
                      args: {
                        name: "avoid-days",
                      },
                    },
                  ],
                  args: eventIdArg,
                },
              ],
            },
            {
              name: ["focus-time", "focus", "ft"],
              description: "AI-powered focus time protection",
              options: [
                {
                  name: "--enable",
                  description: "Enable focus time protection",
                },
                {
                  name: "--analyze",
                  description: "Analyze focus time patterns",
                },
                {
                  name: "--create",
                  description: "Create focus time blocks",
                },
                {
                  name: "--target-hours",
                  description: "Target focus hours per week",
                  args: {
                    name: "target-hours",
                    default: "14.0",
                  },
                },
                {
                  name: "--auto-decline",
                  description:
                    "Auto-decline meeting requests during focus time",
                },
                {
                  name: "--allow-override",
                  description: "Allow urgent meeting overrides",
                },
              ],
            },
            {
              name: ["adapt", "adaptive"],
              description: "AI adaptive schedule optimization",
              options: [
                {
                  name: "--trigger",
                  description:
                    "Trigger type: auto, overload, deadline, focus-risk",
                  args: {
                    name: "trigger",
                    default: "auto",
                    suggestions: ["auto", "overload", "deadline", "focus-risk"],
                  },
                },
                {
                  name: "--auto-apply",
                  description: "Automatically apply recommended changes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["contacts", "contact"],
      description: "Manage contacts",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List contacts",
          options: [
            {
              name: ["--limit", "-n"],
              description:
                "Maximum number of contacts to show (auto-paginates if >200)",
              args: {
                name: "limit",
                default: "50",
              },
            },
            {
              name: ["--email", "-e"],
              description: "Filter by email address",
              args: {
                name: "email",
              },
            },
            {
              name: ["--source", "-s"],
              description: "Filter by source (address_book, inbox, domain)",
              args: {
                name: "source",
                suggestions: ["address_book", "inbox", "domain"],
              },
            },
            {
              name: "--id",
              description: "Show contact IDs",
            },
          ],
          args: grantIdArg,
        },
        {
          name: ["show", "get", "read"],
          description: "Show contact details",
          args: [contactIdArg, grantIdArg],
        },
        {
          name: "create",
          description: "Create a new contact",
          options: [
            {
              name: ["--first-name", "-f"],
              description: "First name",
              args: {
                name: "first-name",
              },
            },
            {
              name: ["--last-name", "-l"],
              description: "Last name",
              args: {
                name: "last-name",
              },
            },
            {
              name: ["--email", "-e"],
              description: "Email address",
              args: {
                name: "email",
              },
            },
            {
              name: ["--phone", "-p"],
              description: "Phone number",
              args: {
                name: "phone",
              },
            },
            {
              name: ["--company", "-c"],
              description: "Company name",
              args: {
                name: "company",
              },
            },
            {
              name: ["--job-title", "-j"],
              description: "Job title",
              args: {
                name: "job-title",
              },
            },
            {
              name: ["--notes", "-n"],
              description: "Notes about the contact",
              args: {
                name: "notes",
              },
            },
          ],
          args: grantIdArg,
        },
        {
          name: "update",
          description: "Update a contact",
          options: [
            {
              name: "--given-name",
              description: "First name",
              args: {
                name: "given-name",
              },
            },
            {
              name: "--middle-name",
              description: "Middle name",
              args: {
                name: "middle-name",
              },
            },
            {
              name: "--surname",
              description: "Last name",
              args: {
                name: "surname",
              },
            },
            {
              name: "--suffix",
              description: "Name suffix (e.g., Jr., Sr.)",
              args: {
                name: "suffix",
              },
            },
            {
              name: "--nickname",
              description: "Nickname",
              args: {
                name: "nickname",
              },
            },
            {
              name: "--birthday",
              description: "Birthday (YYYY-MM-DD)",
              args: {
                name: "birthday",
              },
            },
            {
              name: "--company",
              description: "Company name",
              args: {
                name: "company",
              },
            },
            {
              name: "--job-title",
              description: "Job title",
              args: {
                name: "job-title",
              },
            },
            {
              name: "--manager",
              description: "Manager name",
              args: {
                name: "manager",
              },
            },
            {
              name: "--notes",
              description: "Notes",
              args: {
                name: "notes",
              },
            },
            {
              name: "--email",
              description: "Email address (can be used multiple times)",
              isRepeatable: true,
              args: {
                name: "email",
              },
            },
            {
              name: "--phone",
              description: "Phone number (can be used multiple times)",
              isRepeatable: true,
              args: {
                name: "phone",
              },
            },
          ],
          args: [contactIdArg, grantIdArg],
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete a contact",
          options: [forceOption],
          args: [contactIdArg, grantIdArg],
        },
        {
          name: ["groups", "group"],
          description: "Manage contact groups",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List contact groups",
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show contact group details",
              args: [groupIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a new contact group",
              args: [nameArg, grantIdArg],
            },
            {
              name: "update",
              description: "Update a contact group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "New group name",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: [groupIdArg, grantIdArg],
            },
            {
              name: ["delete", "rm", "remove"],
              description: "Delete a contact group",
              options: [forceOption],
              args: [groupIdArg, grantIdArg],
            },
          ],
        },
        {
          name: "search",
          description: "Search contacts with advanced filters",
          options: [
            {
              name: "--company",
              description: "Filter by company name (partial match)",
              args: {
                name: "company",
              },
            },
            {
              name: "--email",
              description: "Filter by email address",
              args: {
                name: "email",
              },
            },
            {
              name: "--phone",
              description: "Filter by phone number",
              args: {
                name: "phone",
              },
            },
            {
              name: "--source",
              description: "Filter by source (address_book, inbox, domain)",
              args: {
                name: "source",
                suggestions: ["address_book", "inbox", "domain"],
              },
            },
            {
              name: "--group",
              description: "Filter by contact group ID",
              args: {
                name: "group",
              },
            },
            {
              name: "--has-email",
              description: "Only show contacts with email addresses",
            },
            {
              name: ["--limit", "-l"],
              description: "Maximum number of contacts to retrieve",
              args: {
                name: "limit",
                default: "50",
              },
            },
          ],
        },
        {
          name: "photo",
          description: "Manage contact profile photos",
          subcommands: [
            {
              name: "download",
              description: "Download contact profile picture",
              options: [
                {
                  name: ["--output", "-o"],
                  description: "Output file path (decodes and saves image)",
                  args: {
                    name: "output",
                    template: "filepaths",
                  },
                },
              ],
              args: contactIdArg,
            },
            {
              name: "info",
              description: "Show information about profile pictures",
            },
          ],
        },
        {
          name: "sync",
          description: "Show contact sync information",
        },
      ],
    },
    {
      name: "dashboard",
      description: "Nylas Dashboard account and application management",
      subcommands: [
        {
          name: "register",
          description: "Create a new Nylas Dashboard account",
          options: [
            {
              name: "--google",
              description: "Register with Google SSO",
            },
            {
              name: "--microsoft",
              description: "Register with Microsoft SSO",
            },
            {
              name: "--github",
              description: "Register with GitHub SSO",
            },
            {
              name: "--accept-privacy-policy",
              description: "Confirm that you accept the Nylas Privacy Policy",
            },
          ],
        },
        {
          name: "login",
          description: "Log in to your Nylas Dashboard account",
          options: [
            {
              name: "--google",
              description: "Log in with Google SSO",
            },
            {
              name: "--microsoft",
              description: "Log in with Microsoft SSO",
            },
            {
              name: "--github",
              description: "Log in with GitHub SSO",
            },
            {
              name: "--email",
              description: "Log in with email and password",
            },
            {
              name: "--org",
              description: "Organization public ID",
              args: {
                name: "org",
              },
            },
            {
              name: "--user",
              description: "Email address (non-interactive)",
              args: {
                name: "user",
              },
            },
            {
              name: "--password",
              description: "Password (non-interactive, use with care)",
              args: {
                name: "password",
              },
            },
          ],
        },
        {
          name: "sso",
          description: "Authenticate via SSO",
          subcommands: [
            {
              name: "login",
              description: "Log in via SSO",
              options: [
                {
                  name: ["--provider", "-p"],
                  description: "SSO provider (google, microsoft, github, saml)",
                  args: {
                    name: "provider",
                    default: "google",
                    suggestions: ["google", "microsoft", "github", "saml"],
                  },
                },
                {
                  name: "--email",
                  description:
                    "Work email for SAML SSO home-realm discovery (saml provider only)",
                  args: {
                    name: "email",
                  },
                },
              ],
            },
            {
              name: "register",
              description: "Register via SSO",
              options: [
                {
                  name: ["--provider", "-p"],
                  description: "SSO provider (google, microsoft, github)",
                  args: {
                    name: "provider",
                    default: "google",
                    suggestions: ["google", "microsoft", "github"],
                  },
                },
                {
                  name: "--accept-privacy-policy",
                  description:
                    "Confirm that you accept the Nylas Privacy Policy",
                },
              ],
            },
          ],
        },
        {
          name: "logout",
          description: "Log out of the Nylas Dashboard",
        },
        {
          name: "status",
          description: "Show current dashboard authentication status",
        },
        {
          name: "refresh",
          description: "Refresh dashboard session tokens",
        },
        {
          name: "apps",
          description: "Manage Nylas applications",
          subcommands: [
            {
              name: "list",
              description: "List applications",
              options: [
                {
                  name: ["--region", "-r"],
                  description: "Filter by region (us or eu)",
                  args: {
                    name: "region",
                    suggestions: ["us", "eu"],
                  },
                },
              ],
            },
            {
              name: "create",
              description: "Create a new application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Application name (required)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--region", "-r"],
                  description: "Region (required: us or eu)",
                  args: {
                    name: "region",
                    suggestions: ["us", "eu"],
                  },
                },
                {
                  name: "--secret-delivery",
                  description: "Secret delivery method (clipboard or file)",
                  args: {
                    name: "secret-delivery",
                    suggestions: ["clipboard", "file"],
                  },
                },
              ],
            },
            {
              name: "use",
              description: "Set the active application for subsequent commands",
              options: [
                {
                  name: ["--region", "-r"],
                  description: "Region of the application (us or eu)",
                  args: {
                    name: "region",
                    suggestions: ["us", "eu"],
                  },
                },
              ],
              args: {
                name: "application-id",
                isOptional: true,
              },
            },
            {
              name: ["apikeys", "keys"],
              description: "Manage API keys for an application",
              subcommands: [
                {
                  name: "list",
                  description: "List API keys for an application",
                  options: [
                    {
                      name: "--app",
                      description: "Application ID (overrides active app)",
                      args: {
                        name: "app",
                      },
                    },
                    {
                      name: ["--region", "-r"],
                      description: "Region (overrides active app)",
                      args: {
                        name: "region",
                      },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an API key for an application",
                  options: [
                    {
                      name: "--app",
                      description: "Application ID (overrides active app)",
                      args: {
                        name: "app",
                      },
                    },
                    {
                      name: ["--region", "-r"],
                      description: "Region (overrides active app)",
                      args: {
                        name: "region",
                      },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "API key name (default: CLI-<timestamp>)",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--expires",
                      description:
                        "Expiration in days (default: no expiration)",
                      args: {
                        name: "expires",
                      },
                    },
                    {
                      name: "--delivery",
                      description:
                        "API key delivery method (activate, clipboard, or file)",
                      args: {
                        name: "delivery",
                        suggestions: ["activate", "clipboard", "file"],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "domains",
          description: "Manage inbox and Agent Account domains",
          subcommands: [
            {
              name: "list",
              description: "List domains",
              options: [
                {
                  name: "--limit",
                  description: "Maximum domains to return",
                  args: {
                    name: "limit",
                    default: "100",
                  },
                },
                pageTokenOption,
              ],
            },
            {
              name: "check",
              description:
                "Check whether a domain is already registered in your organization",
              args: {
                name: "domain",
              },
            },
            {
              name: ["create", "register"],
              description: "Register a domain",
              options: [
                {
                  name: "--domain",
                  description: "Domain address to register",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Display name (default: domain)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--region", "-r"],
                  description: "Region (required: us or eu)",
                  args: {
                    name: "region",
                    suggestions: ["us", "eu"],
                  },
                },
              ],
              args: {
                name: "domain",
                isOptional: true,
              },
            },
            {
              name: "show",
              description: "Show a domain",
              options: [regionOption],
              args: domainIdOrAddressArg,
            },
            {
              name: "dns",
              description: "Show DNS records required for verification",
              options: [
                regionOption,
                {
                  name: "--type",
                  description:
                    "Verification type to show (repeatable: ownership,mx,spf,feedback,dkim,dmarc,arc)",
                  isRepeatable: true,
                  args: {
                    name: "type",
                    suggestions: [
                      "ownership",
                      "mx",
                      "spf",
                      "feedback",
                      "dkim",
                      "dmarc",
                      "arc",
                    ],
                  },
                },
              ],
              args: domainIdOrAddressArg,
            },
            {
              name: "verify",
              description: "Verify domain DNS records",
              options: [
                regionOption,
                {
                  name: "--type",
                  description:
                    "Verification type to run (repeatable: ownership,mx,spf,feedback,dkim,dmarc,arc)",
                  isRepeatable: true,
                  args: {
                    name: "type",
                    suggestions: [
                      "ownership",
                      "mx",
                      "spf",
                      "feedback",
                      "dkim",
                      "dmarc",
                      "arc",
                    ],
                  },
                },
                {
                  name: "--all",
                  description: "Verify all supported record types",
                },
              ],
              args: domainIdOrAddressArg,
            },
            {
              name: "update",
              description: "Update a domain",
              options: [
                regionOption,
                {
                  name: ["--name", "-n"],
                  description: "New display name",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: domainIdOrAddressArg,
            },
            {
              name: "delete",
              description: "Delete a domain",
              options: [
                regionOption,
                {
                  name: ["--yes", "-y"],
                  description: "Skip confirmation",
                },
              ],
              args: domainIdOrAddressArg,
            },
          ],
        },
        {
          name: "orgs",
          description: "Manage organizations",
          subcommands: [
            {
              name: "list",
              description: "List organizations you belong to",
            },
            {
              name: "switch",
              description: "Switch the active organization",
              options: [
                {
                  name: "--org",
                  description: "Organization public ID to switch to",
                  args: {
                    name: "org",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "deliverability",
      description: "Inspect send and tracking events, metrics, and send alerts",
      subcommands: [
        {
          name: "send-events",
          description: "Send activity and send metrics",
          subcommands: [
            {
              name: "list",
              description: "List send events (newest first)",
              options: [
                {
                  name: "--event-type",
                  description:
                    "Event type, repeatable: accepted, delivered, bounced, complaint, rejected",
                  isRepeatable: true,
                  args: {
                    name: "event-type",
                    suggestions: [
                      "accepted",
                      "delivered",
                      "bounced",
                      "complaint",
                      "rejected",
                    ],
                  },
                },
                {
                  name: "--bounce-class",
                  description: "Bounce class: hard, soft, or undetermined",
                  args: {
                    name: "bounce-class",
                    suggestions: ["hard", "soft", "undetermined"],
                  },
                },
                {
                  name: "--sending-domain",
                  description: "Sending domain",
                  args: {
                    name: "sending-domain",
                  },
                },
                {
                  name: "--from",
                  description: "From address",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--grant-id",
                  description: "Only events for this grant (agent account)",
                  args: {
                    name: "grant-id",
                  },
                },
                {
                  name: "--recipient",
                  description: "Recipient address",
                  args: {
                    name: "recipient",
                  },
                },
                {
                  name: "--recipient-domain",
                  description: "Recipient domain",
                  args: {
                    name: "recipient-domain",
                  },
                },
                {
                  name: "--message-id",
                  description: "Message ID",
                  args: {
                    name: "message-id",
                  },
                },
                {
                  name: "--thread-id",
                  description: "Thread ID",
                  args: {
                    name: "thread-id",
                  },
                },
                {
                  name: "--start",
                  description:
                    'Window start: Unix seconds, YYYY-MM-DD, "YYYY-MM-DD HH:MM[:SS]" or YYYY-MM-DDTHH:MM[:SS] (UTC), RFC3339, or look-back like 24h/7d (default: UTC midnight 6 days before --end, or before today)',
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "Window end, inclusive, within the last 90 days; a date means the end of that UTC day (same formats; default: now)",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--order",
                  description:
                    "Sort order: desc (newest first, default) or asc",
                  args: {
                    name: "order",
                    suggestions: ["desc", "asc"],
                  },
                },
                limitOption2,
                pageTokenOption,
              ],
            },
            {
              name: "show",
              description: "Show one send event with its provider detail",
              args: eventIdArg,
            },
            {
              name: "message",
              description:
                "Show every recipient's send timeline for one message",
              args: messageIdArg,
            },
            {
              name: "summary",
              description: "Show send health, totals, and rates",
              options: [startOption, endOption, sendingDomainOption],
            },
            {
              name: "timeseries",
              description: "Show send counts and rates per day, week, or month",
              options: [
                startOption,
                endOption,
                sendingDomainOption,
                {
                  name: "--granularity",
                  description:
                    "Bucket size: auto, day, week, month (default auto: day ≤21 days, week ≤92, else month)",
                  args: {
                    name: "granularity",
                    suggestions: ["auto", "day", "week", "month"],
                  },
                },
              ],
            },
            {
              name: "breakdown",
              description:
                "Show send counts and rates per sending domain, agent account, or recipient domain",
              options: [
                startOption,
                endOption,
                sendingDomainOption,
                {
                  name: "--group-by",
                  description:
                    "Dimension: sending_domain, agent_account, recipient_domain (default sending_domain)",
                  args: {
                    name: "group-by",
                    suggestions: [
                      "sending_domain",
                      "agent_account",
                      "recipient_domain",
                    ],
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort as <key>:<asc|desc>; keys: key, sent, delivery_rate, bounce_rate, complaint_rate (default sent:desc)",
                  args: {
                    name: "sort",
                  },
                },
                {
                  name: ["--limit", "-n"],
                  description:
                    "Rows to show before the rest are summed into (others), 1-100",
                  args: {
                    name: "limit",
                    default: "25",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "tracking-events",
          description: "Open and click activity and engagement metrics",
          subcommands: [
            {
              name: "list",
              description: "List opens and link clicks (newest first)",
              options: [
                {
                  name: "--event-type",
                  description: "Event type, repeatable: opened, link_clicked",
                  isRepeatable: true,
                  args: {
                    name: "event-type",
                    suggestions: ["opened", "link_clicked"],
                  },
                },
                {
                  name: "--sending-domain",
                  description: "Sending domain",
                  args: {
                    name: "sending-domain",
                  },
                },
                {
                  name: "--from",
                  description: "From address",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--grant-id",
                  description: "Only events for this grant (agent account)",
                  args: {
                    name: "grant-id",
                  },
                },
                {
                  name: "--message-id",
                  description: "Message ID",
                  args: {
                    name: "message-id",
                  },
                },
                {
                  name: "--thread-id",
                  description: "Thread ID",
                  args: {
                    name: "thread-id",
                  },
                },
                {
                  name: "--label",
                  description: "Tracking label set when the message was sent",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--start",
                  description:
                    'Window start: Unix seconds, YYYY-MM-DD, "YYYY-MM-DD HH:MM[:SS]" or YYYY-MM-DDTHH:MM[:SS] (UTC), RFC3339, or look-back like 24h/7d (default: UTC midnight 6 days before --end, or before today)',
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "Window end, inclusive, within the last 90 days; a date means the end of that UTC day (same formats; default: now)",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--order",
                  description:
                    "Sort order: desc (newest first, default) or asc",
                  args: {
                    name: "order",
                  },
                },
                limitOption2,
                pageTokenOption,
              ],
            },
            {
              name: "show",
              description: "Show one open or link click",
              args: eventIdArg,
            },
            {
              name: "message",
              description:
                "Show open and click totals and the newest 100 interactions for one message",
              args: messageIdArg,
            },
            {
              name: "summary",
              description: "Show engagement totals and open and click rates",
              options: [startOption, endOption, sendingDomainOption],
            },
            {
              name: "timeseries",
              description:
                "Show engagement counts and rates per day, week, or month",
              options: [
                startOption,
                endOption,
                sendingDomainOption,
                {
                  name: "--granularity",
                  description:
                    "Bucket size: auto, day, week, month (default auto: day ≤21 days, week ≤92, else month)",
                  args: {
                    name: "granularity",
                    suggestions: ["auto", "day", "week", "month"],
                  },
                },
              ],
            },
            {
              name: "breakdown",
              description:
                "Show engagement per sending domain or agent account",
              options: [
                startOption,
                endOption,
                sendingDomainOption,
                {
                  name: "--group-by",
                  description:
                    "Dimension: sending_domain, agent_account (default sending_domain)",
                  args: {
                    name: "group-by",
                    suggestions: ["sending_domain", "agent_account"],
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort as <key>:<asc|desc>; keys: key, tracked_opens, tracked_links, open_rate, click_rate (default tracked_opens:desc)",
                  args: {
                    name: "sort",
                  },
                },
                {
                  name: ["--limit", "-n"],
                  description:
                    "Rows to show before the rest are summed into (others), 1-100",
                  args: {
                    name: "limit",
                    default: "25",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "send-alerts",
          description: "Manage send alert rules",
          subcommands: [
            {
              name: "list",
              description: "List send alert rules",
            },
            {
              name: "show",
              description: "Show a send alert rule",
              args: ruleIdArg,
            },
            {
              name: "create",
              description: "Create a send alert rule",
              options: [
                {
                  name: "--metric",
                  description:
                    "Metric: bounce_rate, complaint_rate, delivery_rate (required)",
                  isRequired: true,
                  args: {
                    name: "metric",
                    suggestions: [
                      "bounce_rate",
                      "complaint_rate",
                      "delivery_rate",
                    ],
                  },
                },
                {
                  name: "--threshold",
                  description:
                    "Threshold percent, up to 2 decimals; bounce/complaint fire above it (0 to <100), delivery fires below it (>0 to 100) (required)",
                  isRequired: true,
                  args: {
                    name: "threshold",
                  },
                },
                {
                  name: "--window-hours",
                  description: "Look-back window in hours, 1-24 (required)",
                  isRequired: true,
                  args: {
                    name: "window-hours",
                  },
                },
                {
                  name: "--min-volume",
                  description:
                    "Minimum sends in the window before the rule can fire (default 0)",
                  args: {
                    name: "min-volume",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Change a send alert rule; flags you leave out keep their value",
              options: [
                {
                  name: "--metric",
                  description:
                    "Metric: bounce_rate, complaint_rate, delivery_rate (required)",
                  args: {
                    name: "metric",
                    suggestions: [
                      "bounce_rate",
                      "complaint_rate",
                      "delivery_rate",
                    ],
                  },
                },
                {
                  name: "--threshold",
                  description:
                    "Threshold percent, up to 2 decimals; bounce/complaint fire above it (0 to <100), delivery fires below it (>0 to 100) (required)",
                  args: {
                    name: "threshold",
                  },
                },
                {
                  name: "--window-hours",
                  description: "Look-back window in hours, 1-24 (required)",
                  args: {
                    name: "window-hours",
                  },
                },
                {
                  name: "--min-volume",
                  description:
                    "Minimum sends in the window before the rule can fire (default 0)",
                  args: {
                    name: "min-volume",
                  },
                },
              ],
              args: ruleIdArg,
            },
            {
              name: "delete",
              description: "Delete a send alert rule",
              options: [yesOption2],
              args: ruleIdArg,
            },
          ],
        },
      ],
    },
    {
      name: "oauth",
      description:
        "Log in to the Nylas authorization server (OAuth 2.1 / OIDC)",
      subcommands: [
        {
          name: "login",
          description: "Log in to Nylas using a browser or device code",
          options: [
            {
              name: "--scope",
              description:
                "OAuth scopes to request (default [openid email offline_access dashboard.session])",
              isRepeatable: true,
              args: {
                name: "scope",
              },
            },
            {
              name: "--for",
              description:
                "Log in for a Nylas resource server: mcp (scopes and resource for 'nylas mcp serve --auth oauth')",
              args: {
                name: "for",
                suggestions: ["mcp"],
              },
            },
            {
              name: "--region",
              description:
                "Region for an organization created if you sign up: us or eu (default: the configured region)",
              args: {
                name: "region",
                suggestions: ["us", "eu"],
              },
            },
            {
              name: "--device",
              description: "Sign in or sign up using a code on another device",
            },
            {
              name: "--no-browser",
              description: "Use device sign-in without opening a local browser",
            },
            {
              name: "--mcp-only",
              description:
                "Log in for the hosted MCP server only, as its own credential: no dashboard access, and the consent screen may limit it to an IAM principal",
            },
          ],
        },
        {
          name: "status",
          description: "Show the stored OAuth sessions",
          options: [
            {
              name: "--verify",
              description:
                "Call the userinfo endpoint to confirm the token is accepted",
            },
            {
              name: "--credential",
              description:
                "Show only this MCP-only credential (an id from 'nylas oauth status')",
              args: {
                name: "credential",
              },
            },
          ],
        },
        {
          name: "token",
          description: "Print a valid access token, refreshing it if needed",
          options: [
            {
              name: "--credential",
              description:
                "Print the token of this MCP-only credential (an id from 'nylas oauth status')",
              args: {
                name: "credential",
              },
            },
          ],
        },
        {
          name: "logout",
          description: "Revoke the OAuth session and clear stored tokens",
          options: [
            {
              name: "--credential",
              description:
                "Log out of only this MCP-only credential (an id from 'nylas oauth status')",
              args: {
                name: "credential",
              },
            },
            {
              name: "--all",
              description:
                "Log out of the default session and every MCP-only credential",
            },
          ],
        },
      ],
    },
    {
      name: "init",
      description: "Set up the Nylas CLI",
      options: [
        {
          name: "--api-key",
          description: "Nylas API key (skips interactive setup)",
          args: {
            name: "api-key",
          },
        },
        {
          name: "--client-id",
          description: "Nylas Client ID to use with --api-key",
          args: {
            name: "client-id",
          },
        },
        {
          name: ["--region", "-r"],
          description: "API region (us or eu)",
          args: {
            name: "region",
            default: "us",
            suggestions: ["us", "eu"],
          },
        },
        {
          name: "--google",
          description: "Use Google SSO",
        },
        {
          name: "--microsoft",
          description: "Use Microsoft SSO",
        },
        {
          name: "--github",
          description: "Use GitHub SSO",
        },
      ],
    },
    {
      name: ["scheduler", "sched"],
      description: "Manage Nylas Scheduler",
      subcommands: [
        {
          name: ["configurations", "config", "configs"],
          description: "Manage scheduler configurations",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List scheduler configurations",
              args: grantIdArg,
            },
            {
              name: "show",
              description: "Show scheduler configuration details",
              args: [configIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a scheduler configuration",
              options: [
                nameOption,
                {
                  name: "--participants",
                  description:
                    "Participant emails (comma-separated, first is organizer)",
                  isRepeatable: true,
                  args: {
                    name: "participants",
                  },
                },
                {
                  name: "--duration",
                  description: "Meeting duration in minutes",
                  args: {
                    name: "duration",
                    default: "30",
                  },
                },
                titleOption,
                descriptionOption,
                locationOption,
                {
                  name: "--interval",
                  description: "Slot interval in minutes",
                  args: {
                    name: "interval",
                  },
                },
                {
                  name: "--round-to",
                  description: "Round start times to nearest N minutes",
                  args: {
                    name: "round-to",
                  },
                },
                {
                  name: "--availability-method",
                  description:
                    "Availability method (max-fairness, max-availability)",
                  args: {
                    name: "availability-method",
                    suggestions: ["max-fairness", "max-availability"],
                  },
                },
                {
                  name: "--buffer-before",
                  description: "Buffer minutes before meetings",
                  args: {
                    name: "buffer-before",
                  },
                },
                {
                  name: "--buffer-after",
                  description: "Buffer minutes after meetings",
                  args: {
                    name: "buffer-after",
                  },
                },
                {
                  name: "--timezone",
                  description: "Event timezone (e.g., America/New_York)",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: "--booking-type",
                  description: "Booking type (booking, organizer-confirmation)",
                  args: {
                    name: "booking-type",
                    suggestions: ["booking", "organizer-confirmation"],
                  },
                },
                {
                  name: "--conferencing-provider",
                  description:
                    "Conferencing provider (Google Meet, Zoom, Microsoft Teams)",
                  args: {
                    name: "conferencing-provider",
                    suggestions: ["Google Meet", "Zoom", "Microsoft Teams"],
                  },
                },
                {
                  name: "--disable-emails",
                  description: "Disable email notifications",
                },
                {
                  name: "--reminder-minutes",
                  description:
                    "Reminder minutes (comma-separated, e.g., 10,60)",
                  isRepeatable: true,
                  args: {
                    name: "reminder-minutes",
                  },
                },
                {
                  name: "--min-booking-notice",
                  description: "Minimum minutes before a booking can be made",
                  args: {
                    name: "min-booking-notice",
                  },
                },
                {
                  name: "--min-cancellation-notice",
                  description: "Minimum minutes before cancellation allowed",
                  args: {
                    name: "min-cancellation-notice",
                  },
                },
                {
                  name: "--confirmation-method",
                  description: "Confirmation method (automatic, manual)",
                  args: {
                    name: "confirmation-method",
                    suggestions: ["automatic", "manual"],
                  },
                },
                {
                  name: "--available-days-in-future",
                  description: "How many days out bookings are available",
                  args: {
                    name: "available-days-in-future",
                  },
                },
                {
                  name: "--cancellation-policy",
                  description: "Cancellation policy text",
                  args: {
                    name: "cancellation-policy",
                  },
                },
                {
                  name: "--file",
                  description:
                    "Path to JSON config file (flags override file values)",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
              ],
              args: grantIdArg,
            },
            {
              name: "update",
              description: "Update a scheduler configuration",
              options: [
                nameOption,
                {
                  name: "--duration",
                  description: "Meeting duration in minutes",
                  args: {
                    name: "duration",
                  },
                },
                titleOption,
                descriptionOption,
                {
                  name: "--interval",
                  description: "Slot interval in minutes",
                  args: {
                    name: "interval",
                  },
                },
                {
                  name: "--round-to",
                  description: "Round start times to nearest N minutes",
                  args: {
                    name: "round-to",
                  },
                },
                {
                  name: "--availability-method",
                  description:
                    "Availability method (max-fairness, max-availability)",
                  args: {
                    name: "availability-method",
                    suggestions: ["max-fairness", "max-availability"],
                  },
                },
                {
                  name: "--buffer-before",
                  description: "Buffer minutes before meetings",
                  args: {
                    name: "buffer-before",
                  },
                },
                {
                  name: "--buffer-after",
                  description: "Buffer minutes after meetings",
                  args: {
                    name: "buffer-after",
                  },
                },
                {
                  name: "--timezone",
                  description: "Event timezone (e.g., America/New_York)",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: "--booking-type",
                  description: "Booking type (booking, organizer-confirmation)",
                  args: {
                    name: "booking-type",
                    suggestions: ["booking", "organizer-confirmation"],
                  },
                },
                {
                  name: "--conferencing-provider",
                  description:
                    "Conferencing provider (Google Meet, Zoom, Microsoft Teams)",
                  args: {
                    name: "conferencing-provider",
                    suggestions: ["Google Meet", "Zoom", "Microsoft Teams"],
                  },
                },
                {
                  name: "--disable-emails",
                  description: "Disable email notifications",
                },
                {
                  name: "--reminder-minutes",
                  description:
                    "Reminder minutes (comma-separated, e.g., 10,60)",
                  isRepeatable: true,
                  args: {
                    name: "reminder-minutes",
                  },
                },
                {
                  name: "--min-booking-notice",
                  description: "Minimum minutes before a booking can be made",
                  args: {
                    name: "min-booking-notice",
                  },
                },
                {
                  name: "--min-cancellation-notice",
                  description: "Minimum minutes before cancellation allowed",
                  args: {
                    name: "min-cancellation-notice",
                  },
                },
                {
                  name: "--confirmation-method",
                  description: "Confirmation method (automatic, manual)",
                  args: {
                    name: "confirmation-method",
                    suggestions: ["automatic", "manual"],
                  },
                },
                {
                  name: "--available-days-in-future",
                  description: "How many days out bookings are available",
                  args: {
                    name: "available-days-in-future",
                  },
                },
                {
                  name: "--cancellation-policy",
                  description: "Cancellation policy text",
                  args: {
                    name: "cancellation-policy",
                  },
                },
                {
                  name: "--file",
                  description:
                    "Path to JSON config file (flags override file values)",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
              ],
              args: [configIdArg, grantIdArg],
            },
            {
              name: "delete",
              description: "Delete a scheduler configuration",
              options: [yesOption],
              args: [configIdArg, grantIdArg],
            },
          ],
        },
        {
          name: ["sessions", "session"],
          description: "Manage scheduler sessions",
          subcommands: [
            {
              name: "create",
              description: "Create a scheduler session",
              options: [
                {
                  name: "--config-id",
                  description: "Configuration ID (required)",
                  isRequired: true,
                  args: {
                    name: "config-id",
                  },
                },
                {
                  name: "--ttl",
                  description: "Time to live in minutes, max 30",
                  args: {
                    name: "ttl",
                    default: "30",
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show scheduler session details",
              args: {
                name: "session-id",
              },
            },
          ],
        },
        {
          name: ["bookings", "booking"],
          description: "Manage scheduler bookings",
          subcommands: [
            {
              name: "show",
              description: "Show booking details",
              options: [configurationIdOption],
              args: bookingIdArg,
            },
            {
              name: "confirm",
              description: "Confirm a booking",
              options: [
                configurationIdOption,
                {
                  name: "--salt",
                  description:
                    "Salt from the booking reference, required (found in the confirmation link, cancel/reschedule URL, or a Scheduler webhook)",
                  args: {
                    name: "salt",
                  },
                },
                {
                  name: "--reason",
                  deprecated: true,
                  description:
                    "Deprecated: confirm no longer takes a reason; the flag is ignored",
                  args: {
                    name: "reason",
                  },
                },
              ],
              args: bookingIdArg,
            },
            {
              name: "reschedule",
              description: "Reschedule a booking",
              options: [
                configurationIdOption,
                {
                  name: "--start-time",
                  description: "New start time (Unix timestamp, required)",
                  args: {
                    name: "start-time",
                  },
                },
                {
                  name: "--end-time",
                  description: "New end time (Unix timestamp, required)",
                  args: {
                    name: "end-time",
                  },
                },
                {
                  name: "--timezone",
                  deprecated: true,
                  description:
                    "Deprecated: reschedule does not accept a timezone; the flag is ignored",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: "--reason",
                  deprecated: true,
                  description:
                    "Deprecated: reschedule does not accept a reason; the flag is ignored",
                  args: {
                    name: "reason",
                  },
                },
              ],
              args: bookingIdArg,
            },
            {
              name: "cancel",
              description: "Cancel a booking",
              options: [
                configurationIdOption,
                {
                  name: "--reason",
                  description: "Cancellation reason",
                  args: {
                    name: "reason",
                  },
                },
                yesOption,
              ],
              args: bookingIdArg,
            },
          ],
        },
        {
          name: ["group-events", "group-event", "ge"],
          description: "Manage Scheduler group events",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List group events for a configuration",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description:
                    "Calendar ID to list events from (required, e.g. primary)",
                  args: {
                    name: "calendar",
                  },
                },
                {
                  name: "--start",
                  description:
                    "Window start (YYYY-MM-DD HH:MM, RFC3339, or Unix). Defaults to now",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "Window end (YYYY-MM-DD HH:MM, RFC3339, or Unix). Defaults to +30 days",
                  args: {
                    name: "end",
                  },
                },
              ],
              args: [configurationIdArg, grantIdArg],
            },
            {
              name: "create",
              description: "Create a group event",
              options: [
                {
                  name: ["--calendar", "-c"],
                  description: "Calendar ID (required)",
                  args: {
                    name: "calendar",
                  },
                },
                {
                  name: ["--title", "-t"],
                  description: "Event title (required)",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--capacity",
                  description: "Maximum number of attendees (1-500)",
                  args: {
                    name: "capacity",
                    default: "10",
                  },
                },
                descriptionOption,
                locationOption,
                {
                  name: "--start",
                  description:
                    "Start time (YYYY-MM-DD HH:MM, RFC3339, or Unix) (required)",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--end",
                  description:
                    "End time (YYYY-MM-DD HH:MM, RFC3339, or Unix) (required)",
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--timezone",
                  description:
                    "IANA timezone for start/end (e.g. America/New_York)",
                  args: {
                    name: "timezone",
                  },
                },
                {
                  name: ["--participant", "-p"],
                  description: "Participant as '[name:]email' (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "participant",
                  },
                },
                {
                  name: "--organizer",
                  description: "Organizer participant as '[name:]email'",
                  args: {
                    name: "organizer",
                  },
                },
              ],
              args: [configurationIdArg, grantIdArg],
            },
            {
              name: "update",
              description: "Update a group event",
              options: [
                {
                  name: ["--title", "-t"],
                  description: "New event title",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--capacity",
                  description: "New maximum number of attendees (1-500)",
                  args: {
                    name: "capacity",
                  },
                },
                {
                  name: "--description",
                  description: "New event description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--location",
                  description: "New event location",
                  args: {
                    name: "location",
                  },
                },
              ],
              args: [configurationIdArg, eventIdArg, grantIdArg],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a group event",
              args: [configurationIdArg, eventIdArg, grantIdArg],
            },
            {
              name: "import",
              description: "Import existing provider events as group events",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Path to a JSON array of import items",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                {
                  name: ["--calendar", "-c"],
                  description: "Calendar ID (single-event import)",
                  args: {
                    name: "calendar",
                  },
                },
                {
                  name: ["--event", "-e"],
                  description:
                    "Provider event ID to import (single-event import)",
                  args: {
                    name: "event",
                  },
                },
                {
                  name: "--capacity",
                  description:
                    "Capacity for the imported event (single-event import)",
                  args: {
                    name: "capacity",
                  },
                },
              ],
              args: configurationIdArg,
            },
          ],
        },
      ],
    },
    {
      name: "admin",
      description: "Administration commands (requires API key)",
      subcommands: [
        {
          name: ["applications", "app", "apps"],
          description: "Manage Nylas applications",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List applications",
            },
            {
              name: "show",
              description: "Show application details",
              args: appIdArg,
            },
            {
              name: "create",
              description: "Create an application",
              options: [
                {
                  name: "--name",
                  description: "Application name (required)",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--region",
                  description: "Region (us, eu)",
                  args: {
                    name: "region",
                    default: "us",
                    suggestions: ["us", "eu"],
                  },
                },
                {
                  name: "--branding-name",
                  description: "Branding name",
                  args: {
                    name: "branding-name",
                  },
                },
                {
                  name: "--website-url",
                  description: "Website URL",
                  args: {
                    name: "website-url",
                  },
                },
                {
                  name: "--callback-uris",
                  description: "Callback URIs (comma-separated)",
                  isRepeatable: true,
                  args: {
                    name: "callback-uris",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update an application",
              options: [
                {
                  name: "--name",
                  description: "Application name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--branding-name",
                  description: "Branding name",
                  args: {
                    name: "branding-name",
                  },
                },
                {
                  name: "--website-url",
                  description: "Website URL",
                  args: {
                    name: "website-url",
                  },
                },
              ],
              args: appIdArg,
            },
            {
              name: "delete",
              description: "Delete an application",
              options: [yesOption],
              args: appIdArg,
            },
          ],
        },
        {
          name: ["callback-uris", "callbacks", "cb"],
          description: "Manage application callback URIs",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List callback URIs",
            },
            {
              name: "show",
              description: "Show callback URI details",
              args: uriIdArg,
            },
            {
              name: "create",
              description: "Create a callback URI",
              options: [
                {
                  name: "--url",
                  description: "Callback URL (required)",
                  isRequired: true,
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--platform",
                  description: "Platform (web, ios, android)",
                  args: {
                    name: "platform",
                    default: "web",
                    suggestions: ["web", "ios", "android"],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a callback URI",
              options: [
                {
                  name: "--url",
                  description: "Callback URL",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--platform",
                  description: "Platform (web, ios, android)",
                  args: {
                    name: "platform",
                    suggestions: ["web", "ios", "android"],
                  },
                },
              ],
              args: uriIdArg,
            },
            {
              name: "delete",
              description: "Delete a callback URI",
              options: [yesOption],
              args: uriIdArg,
            },
          ],
        },
        {
          name: ["connectors", "connector", "conn"],
          description: "Manage email provider connectors",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List connectors",
            },
            {
              name: "show",
              description: "Show connector details",
              args: connectorIdArg,
            },
            {
              name: "create",
              description: "Create a connector",
              options: [
                {
                  name: "--name",
                  description: "Connector name (required)",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--provider",
                  description:
                    "Provider (google, microsoft, imap, etc.) (required)",
                  isRequired: true,
                  args: {
                    name: "provider",
                    suggestions: ["google", "microsoft", "imap"],
                  },
                },
                {
                  name: "--client-id",
                  description: "OAuth client ID",
                  args: {
                    name: "client-id",
                  },
                },
                {
                  name: "--client-secret",
                  description: "OAuth client secret",
                  args: {
                    name: "client-secret",
                  },
                },
                {
                  name: "--scopes",
                  description: "OAuth scopes (comma-separated)",
                  isRepeatable: true,
                  args: {
                    name: "scopes",
                  },
                },
                {
                  name: "--imap-host",
                  description: "IMAP host (for IMAP provider)",
                  args: {
                    name: "imap-host",
                  },
                },
                {
                  name: "--imap-port",
                  description: "IMAP port",
                  args: {
                    name: "imap-port",
                    default: "993",
                  },
                },
                {
                  name: "--smtp-host",
                  description: "SMTP host (for IMAP provider)",
                  args: {
                    name: "smtp-host",
                  },
                },
                {
                  name: "--smtp-port",
                  description: "SMTP port",
                  args: {
                    name: "smtp-port",
                    default: "587",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a connector",
              options: [
                {
                  name: "--name",
                  description: "Connector name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--scopes",
                  description: "OAuth scopes (comma-separated)",
                  isRepeatable: true,
                  args: {
                    name: "scopes",
                  },
                },
              ],
              args: connectorIdArg,
            },
            {
              name: "delete",
              description: "Delete a connector",
              options: [yesOption],
              args: connectorIdArg,
            },
          ],
        },
        {
          name: ["credentials", "credential", "cred"],
          description: "Manage connector credentials",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List credentials for a connector",
              args: {
                name: "connector",
                isOptional: true,
              },
            },
            {
              name: "show",
              description: "Show credential details",
              options: [connectorOption],
              args: credentialIdArg,
            },
            {
              name: "create",
              description: "Create a credential",
              options: [
                {
                  name: "--connector",
                  description:
                    "Connector provider (e.g. google); auto-detected if only one connector exists",
                  exclusiveOn: ["--connector-id"],
                  args: {
                    name: "connector",
                  },
                },
                {
                  name: "--connector-id",
                  deprecated: true,
                  description: "Deprecated: use --connector",
                  exclusiveOn: ["--connector"],
                  args: {
                    name: "connector-id",
                  },
                },
                {
                  name: "--name",
                  description: "Credential name (required)",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--type",
                  description: "Credential type: connector (required)",
                  isRequired: true,
                  args: {
                    name: "type",
                    suggestions: ["connector"],
                  },
                },
                {
                  name: "--client-id",
                  description:
                    "Provider OAuth app client ID (e.g. your Google Cloud / Azure app), required",
                  isRequired: true,
                  args: {
                    name: "client-id",
                  },
                },
                {
                  name: "--client-secret",
                  description: "Provider OAuth app client secret, required",
                  isRequired: true,
                  args: {
                    name: "client-secret",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a credential",
              options: [
                {
                  name: "--name",
                  description: "Credential name",
                  args: {
                    name: "name",
                  },
                },
                connectorOption,
              ],
              args: credentialIdArg,
            },
            {
              name: "delete",
              description: "Delete a credential",
              options: [yesOption, connectorOption],
              args: credentialIdArg,
            },
          ],
        },
        {
          name: ["grants", "grant"],
          description: "Manage grants",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List grants",
              options: [
                {
                  name: "--limit",
                  description: "Maximum number of grants to return",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
                {
                  name: "--offset",
                  description: "Offset for pagination",
                  args: {
                    name: "offset",
                  },
                },
                {
                  name: "--connector-id",
                  description: "Filter by connector ID",
                  args: {
                    name: "connector-id",
                  },
                },
                {
                  name: "--status",
                  description: "Filter by status (valid, invalid)",
                  args: {
                    name: "status",
                    suggestions: ["valid", "invalid"],
                  },
                },
              ],
            },
            {
              name: "stats",
              description: "Show grant statistics",
            },
          ],
        },
      ],
    },
    {
      name: ["webhook", "webhooks", "wh"],
      description: "Manage notification destinations",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all webhooks",
          options: [
            {
              name: "--full-ids",
              description: "Show full webhook IDs (useful for copy/paste)",
            },
          ],
        },
        {
          name: "show",
          description: "Show webhook details",
          args: webhookIdArg,
        },
        {
          name: "create",
          description: "Create a new webhook",
          options: [
            {
              name: ["--url", "-u"],
              description: "Webhook URL (required)",
              isRequired: true,
              args: {
                name: "url",
              },
            },
            {
              name: ["--description", "-d"],
              description: "Webhook description",
              args: {
                name: "description",
              },
            },
            {
              name: ["--triggers", "-t"],
              description:
                "Trigger types (required, comma-separated or multiple flags)",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "triggers",
              },
            },
            {
              name: ["--notify", "-n"],
              description: "Notification email addresses",
              isRepeatable: true,
              args: {
                name: "notify",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a webhook",
          options: [
            {
              name: ["--url", "-u"],
              description: "New webhook URL",
              args: {
                name: "url",
              },
            },
            {
              name: ["--description", "-d"],
              description: "New description",
              args: {
                name: "description",
              },
            },
            {
              name: ["--triggers", "-t"],
              description:
                "New trigger types (comma-separated or multiple flags)",
              isRepeatable: true,
              args: {
                name: "triggers",
              },
            },
            {
              name: ["--notify", "-n"],
              description: "New notification email addresses",
              isRepeatable: true,
              args: {
                name: "notify",
              },
            },
            {
              name: ["--status", "-s"],
              description: "New status (active or inactive)",
              args: {
                name: "status",
                suggestions: ["active", "inactive"],
              },
            },
          ],
          args: webhookIdArg,
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete a webhook",
          options: [forceOption],
          args: webhookIdArg,
        },
        {
          name: "rotate-secret",
          description: "Rotate a webhook secret",
          options: [yesOption2],
          args: webhookIdArg,
        },
        {
          name: "verify",
          description: "Verify a webhook signature locally",
          options: [
            {
              name: "--payload",
              description: "Inline webhook payload body",
              args: {
                name: "payload",
              },
            },
            {
              name: "--payload-file",
              description:
                "Path to a file containing the raw webhook payload body",
              args: {
                name: "payload-file",
                template: "filepaths",
              },
            },
            {
              name: "--signature",
              description:
                "Webhook signature from the x-nylas-signature header",
              args: {
                name: "signature",
              },
            },
            {
              name: "--secret",
              description: "Webhook secret used to verify the signature",
              args: {
                name: "secret",
              },
            },
          ],
        },
        {
          name: "pubsub",
          description: "Manage Pub/Sub notification channels",
          subcommands: [
            {
              name: "list",
              description: "List Pub/Sub notification channels",
            },
            {
              name: "show",
              description: "Show a Pub/Sub notification channel",
              args: channelIdArg,
            },
            {
              name: "create",
              description: "Create a Pub/Sub notification channel",
              options: [
                {
                  name: "--description",
                  description: "Channel description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--topic",
                  description: "Google Cloud Pub/Sub topic path (required)",
                  isRequired: true,
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--encryption-key",
                  description: "Optional encryption key identifier",
                  args: {
                    name: "encryption-key",
                  },
                },
                {
                  name: ["--triggers", "-t"],
                  description:
                    "Trigger types (required, comma-separated or repeated)",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "triggers",
                  },
                },
                {
                  name: ["--notify", "-n"],
                  description: "Notification email addresses",
                  isRepeatable: true,
                  args: {
                    name: "notify",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Pub/Sub notification channel",
              options: [
                {
                  name: "--description",
                  description: "Updated channel description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--topic",
                  description: "Updated Google Cloud Pub/Sub topic path",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--encryption-key",
                  description: "Updated encryption key identifier",
                  args: {
                    name: "encryption-key",
                  },
                },
                {
                  name: ["--triggers", "-t"],
                  description:
                    "Updated trigger types (comma-separated or repeated)",
                  isRepeatable: true,
                  args: {
                    name: "triggers",
                  },
                },
                {
                  name: ["--notify", "-n"],
                  description: "Updated notification email addresses",
                  isRepeatable: true,
                  args: {
                    name: "notify",
                  },
                },
                {
                  name: "--status",
                  description: "Updated status (active or inactive)",
                  args: {
                    name: "status",
                    suggestions: ["active", "inactive"],
                  },
                },
              ],
              args: channelIdArg,
            },
            {
              name: "delete",
              description: "Delete a Pub/Sub notification channel",
              options: [yesOption2],
              args: channelIdArg,
            },
          ],
        },
        {
          name: "test",
          description: "Test webhook functionality",
          subcommands: [
            {
              name: "send",
              description: "Send a test event to a webhook URL",
              args: {
                name: "webhook-url",
              },
            },
            {
              name: "payload",
              description: "Get a mock payload for a trigger type",
              options: [
                {
                  name: ["--trigger", "-t"],
                  description: "Trigger type",
                  args: {
                    name: "trigger",
                  },
                },
              ],
              args: {
                name: "trigger-type",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: ["triggers", "trigger-types", "events"],
          description: "List available webhook trigger types",
          options: [
            {
              name: ["--category", "-c"],
              description:
                "Filter by category (grant, message, thread, event, contact, calendar, folder, notetaker)",
              args: {
                name: "category",
                suggestions: [
                  "grant",
                  "message",
                  "thread",
                  "event",
                  "contact",
                  "calendar",
                  "folder",
                  "notetaker",
                ],
              },
            },
          ],
        },
        {
          name: "server",
          description: "Start a local webhook receiver server",
          options: [
            {
              name: ["--port", "-p"],
              description: "Port to listen on",
              args: {
                name: "port",
                default: "3000",
              },
            },
            {
              name: "--path",
              description: "Webhook endpoint path",
              args: {
                name: "path",
                default: "/webhook",
              },
            },
            {
              name: ["--tunnel", "-t"],
              description: "Tunnel provider (cloudflared)",
              args: {
                name: "tunnel",
                suggestions: ["cloudflared"],
              },
            },
            {
              name: ["--secret", "-s"],
              description: "Webhook secret for signature verification",
              args: {
                name: "secret",
              },
            },
            {
              name: "--allow-unsigned",
              description:
                "Allow unsigned webhook events when --tunnel is set (insecure)",
            },
            {
              name: "--no-tunnel",
              description:
                "Skip the tunnel preflight prompt and run loopback-only",
            },
            {
              name: "--register",
              description:
                "Auto-create a Nylas webhook for the tunnel URL, fetch its secret, and delete it on exit",
            },
            {
              name: "--triggers",
              description:
                "Trigger types for --register (comma-separated or repeated; prompted if omitted)",
              isRepeatable: true,
              args: {
                name: "triggers",
              },
            },
            {
              name: "--json",
              description: "Output events as JSON",
            },
            {
              name: ["--quiet", "-q"],
              description: "Suppress startup messages, only show events",
            },
          ],
        },
      ],
    },
    {
      name: ["notetaker", "nt", "bot"],
      description: "Manage Nylas Notetaker bots",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List notetakers",
          options: [
            {
              name: ["--limit", "-l"],
              description: "Maximum number of notetakers to return",
              args: {
                name: "limit",
                default: "20",
              },
            },
            {
              name: "--state",
              description:
                "Filter by state (scheduled, connecting, attending, complete, cancelled, failed)",
              args: {
                name: "state",
                suggestions: [
                  "scheduled",
                  "connecting",
                  "attending",
                  "complete",
                  "cancelled",
                  "failed",
                ],
              },
            },
          ],
          args: grantIdArg,
        },
        {
          name: "show",
          description: "Show notetaker details",
          args: [notetakerIdArg, grantIdArg],
        },
        {
          name: "create",
          description: "Create a notetaker to join a meeting",
          options: [
            {
              name: ["--meeting-link", "-m"],
              description: "Meeting URL (Zoom, Google Meet, or Teams)",
              isRequired: true,
              args: {
                name: "meeting-link",
              },
            },
            {
              name: ["--join-time", "-j"],
              description:
                "When to join (e.g., '2024-01-15 14:00', 'tomorrow 9am', '30m')",
              args: {
                name: "join-time",
              },
            },
            {
              name: "--bot-name",
              description: "Custom name for the notetaker bot",
              args: {
                name: "bot-name",
              },
            },
          ],
          args: grantIdArg,
        },
        {
          name: ["delete", "rm", "cancel"],
          description: "Delete or cancel a notetaker",
          options: [forceOption],
          args: [notetakerIdArg, grantIdArg],
        },
        {
          name: "leave",
          description: "Make an active notetaker leave its meeting",
          args: [notetakerIdArg, grantIdArg],
        },
        {
          name: "update",
          description: "Update a scheduled notetaker",
          options: [
            {
              name: ["--join-time", "-j"],
              description:
                "When to join (e.g., '2024-01-15 14:00', 'tomorrow 9am', '30m')",
              args: {
                name: "join-time",
              },
            },
            {
              name: "--bot-name",
              description: "New display name for the notetaker bot",
              args: {
                name: "bot-name",
              },
            },
            {
              name: "--video-recording",
              description: "Record the meeting's video",
            },
            {
              name: "--audio-recording",
              description: "Record the meeting's audio",
            },
            {
              name: "--transcription",
              description: "Transcribe the meeting's audio",
            },
          ],
          args: [notetakerIdArg, grantIdArg],
        },
        {
          name: "media",
          description: "Get notetaker media (recording and transcript)",
          args: [notetakerIdArg, grantIdArg],
        },
      ],
    },
    {
      name: "timezone",
      description: "Time zone conversion and meeting scheduling utilities",
      subcommands: [
        {
          name: "convert",
          description: "Convert time between time zones",
          options: [
            {
              name: "--from",
              description: "Source time zone (IANA name or abbreviation)",
              isRequired: true,
              args: {
                name: "from",
              },
            },
            {
              name: "--to",
              description: "Target time zone (IANA name or abbreviation)",
              isRequired: true,
              args: {
                name: "to",
              },
            },
            {
              name: "--time",
              description: "Time to convert (RFC3339 format, defaults to now)",
              args: {
                name: "time",
              },
            },
          ],
        },
        {
          name: "find-meeting",
          description: "Find overlapping meeting times across time zones",
          options: [
            {
              name: "--zones",
              description: "Comma-separated list of time zones",
              isRequired: true,
              args: {
                name: "zones",
              },
            },
            {
              name: "--duration",
              description: "Meeting duration (e.g., 30m, 1h, 1h30m)",
              args: {
                name: "duration",
                default: "1h",
              },
            },
            {
              name: "--start-hour",
              description: "Working hours start (HH:MM)",
              args: {
                name: "start-hour",
                default: "09:00",
              },
            },
            {
              name: "--end-hour",
              description: "Working hours end (HH:MM)",
              args: {
                name: "end-hour",
                default: "17:00",
              },
            },
            {
              name: "--start-date",
              description:
                "Start date for search (YYYY-MM-DD, defaults to today)",
              args: {
                name: "start-date",
              },
            },
            {
              name: "--end-date",
              description:
                "End date for search (YYYY-MM-DD, defaults to 7 days from start)",
              args: {
                name: "end-date",
              },
            },
            {
              name: "--exclude-weekends",
              description: "Exclude Saturday and Sunday",
            },
          ],
        },
        {
          name: "dst",
          description:
            "Show DST (Daylight Saving Time) transitions for a time zone",
          options: [
            {
              name: "--zone",
              description: "Time zone (IANA name or abbreviation)",
              isRequired: true,
              args: {
                name: "zone",
              },
            },
            {
              name: "--year",
              description: "Year to check",
              args: {
                name: "year",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all available IANA time zones",
          options: [
            {
              name: "--filter",
              description: "Filter zones by name (case-insensitive)",
              args: {
                name: "filter",
              },
            },
          ],
        },
        {
          name: "info",
          description: "Get detailed information about a time zone",
          options: [
            {
              name: "--zone",
              description: "Time zone (IANA name or abbreviation)",
              args: {
                name: "zone",
              },
            },
            {
              name: "--time",
              description: "Time to check (RFC3339 format, defaults to now)",
              args: {
                name: "time",
              },
            },
          ],
          args: {
            name: "ZONE",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "mcp",
      description: "MCP (Model Context Protocol) server for AI integration",
      subcommands: [
        {
          name: "serve",
          description: "Start the MCP server",
          options: [
            {
              name: "--auth",
              description: "Credential to authenticate with: api-key or oauth",
              args: {
                name: "auth",
                default: "api-key",
                suggestions: ["api-key", "oauth"],
              },
            },
            {
              name: "--credential",
              description:
                "With --auth oauth, the MCP-only credential to use (an id from 'nylas oauth status')",
              args: {
                name: "credential",
              },
            },
          ],
        },
        {
          name: "install",
          description: "Install MCP configuration for AI assistants",
          options: [
            {
              name: ["--assistant", "-a"],
              description:
                "Target assistant (claude-desktop, cursor, windsurf, vscode, claude-code)",
              args: {
                name: "assistant",
                suggestions: [
                  "claude-desktop",
                  "cursor",
                  "windsurf",
                  "vscode",
                  "claude-code",
                ],
              },
            },
            {
              name: ["--binary", "-b"],
              description: "Path to nylas binary (default: auto-detect)",
              args: {
                name: "binary",
                template: "filepaths",
              },
            },
            {
              name: "--all",
              description: "Install for all detected assistants",
            },
            {
              name: "--auth",
              description:
                "Credential 'nylas mcp serve' authenticates with: api-key or oauth",
              args: {
                name: "auth",
                default: "api-key",
                suggestions: ["api-key", "oauth"],
              },
            },
            {
              name: "--credential",
              description:
                "With --auth oauth, the MCP-only credential 'nylas mcp serve' uses (an id from 'nylas oauth status')",
              args: {
                name: "credential",
              },
            },
          ],
        },
        {
          name: "uninstall",
          description: "Remove MCP configuration from AI assistants",
          options: [
            {
              name: ["--assistant", "-a"],
              description:
                "Target assistant (claude-desktop, claude-code, cursor, windsurf, vscode)",
              args: {
                name: "assistant",
                suggestions: [
                  "claude-desktop",
                  "claude-code",
                  "cursor",
                  "windsurf",
                  "vscode",
                ],
              },
            },
            {
              name: "--all",
              description: "Uninstall from all configured assistants",
            },
          ],
        },
        {
          name: "status",
          description: "Show MCP installation status",
        },
      ],
    },
    {
      name: "rpc",
      description: "JSON-RPC WebSocket server for Nylas",
      subcommands: [
        {
          name: "serve",
          description: "Start the JSON-RPC WebSocket server",
          options: [
            {
              name: "--addr",
              description: "Address to bind (or NYLAS_WS_ADDR)",
              args: {
                name: "addr",
              },
            },
            {
              name: "--allow-remote",
              description: "Allow binding to a non-loopback address",
            },
          ],
        },
        {
          name: "token",
          description: "Show or copy the RPC session token",
          options: [
            {
              name: ["--copy", "-c"],
              description: "Copy to clipboard",
            },
          ],
        },
      ],
    },
    {
      name: "template",
      description: "Manage hosted templates",
      subcommands: [
        {
          name: "list",
          description: "List hosted templates",
          options: [scopeOption, grantIdOption, limitOption2, pageTokenOption],
        },
        {
          name: "show",
          description: "Show a hosted template",
          options: [scopeOption, grantIdOption],
          args: templateIdArg,
        },
        {
          name: "create",
          description: "Create a hosted template",
          options: [
            scopeOption,
            grantIdOption,
            {
              name: "--name",
              description: "Template name",
              args: {
                name: "name",
              },
            },
            {
              name: "--subject",
              description: "Template subject",
              args: {
                name: "subject",
              },
            },
            {
              name: "--body",
              description: "Template body HTML",
              args: {
                name: "body",
              },
            },
            {
              name: "--body-file",
              description: "Read template body HTML from a file",
              args: {
                name: "body-file",
                template: "filepaths",
              },
            },
            {
              name: "--engine",
              description: "Template engine",
              args: {
                name: "engine",
                suggestions: ["handlebars", "mustache", "nunjucks", "twig"],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a hosted template",
          options: [
            scopeOption,
            grantIdOption,
            {
              name: "--name",
              description: "Updated template name",
              args: {
                name: "name",
              },
            },
            {
              name: "--subject",
              description: "Updated template subject",
              args: {
                name: "subject",
              },
            },
            {
              name: "--body",
              description: "Updated template body HTML",
              args: {
                name: "body",
              },
            },
            {
              name: "--body-file",
              description: "Read updated template body HTML from a file",
              args: {
                name: "body-file",
                template: "filepaths",
              },
            },
            {
              name: "--engine",
              description: "Updated template engine",
              args: {
                name: "engine",
                suggestions: ["handlebars", "mustache", "nunjucks", "twig"],
              },
            },
          ],
          args: templateIdArg,
        },
        {
          name: "delete",
          description: "Delete a hosted template",
          options: [scopeOption, grantIdOption, yesOption2],
          args: templateIdArg,
        },
        {
          name: "render",
          description: "Render a hosted template with variables",
          options: [
            scopeOption,
            grantIdOption,
            {
              name: "--data",
              description: "Inline JSON object with template variables",
              args: {
                name: "data",
              },
            },
            {
              name: "--data-file",
              description: "Path to a JSON file with template variables",
              args: {
                name: "data-file",
                template: "filepaths",
              },
            },
            {
              name: "--strict",
              description:
                "Fail when the template references missing variables",
            },
          ],
          args: templateIdArg,
        },
        {
          name: "render-html",
          description: "Render arbitrary template HTML with variables",
          options: [
            scopeOption,
            grantIdOption,
            {
              name: "--body",
              description: "Template HTML to render",
              args: {
                name: "body",
              },
            },
            {
              name: "--body-file",
              description: "Path to a file containing template HTML",
              args: {
                name: "body-file",
                template: "filepaths",
              },
            },
            {
              name: "--engine",
              description: "Template engine",
              args: {
                name: "engine",
              },
            },
            {
              name: "--data",
              description: "Inline JSON object with template variables",
              args: {
                name: "data",
              },
            },
            {
              name: "--data-file",
              description: "Path to a JSON file with template variables",
              args: {
                name: "data-file",
                template: "filepaths",
              },
            },
            {
              name: "--strict",
              description:
                "Fail when the template references missing variables",
            },
          ],
        },
      ],
    },
    {
      name: "demo",
      description:
        "Explore CLI features with sample data (no credentials required)",
      subcommands: [
        {
          name: "tui",
          description: "Launch interactive TUI with sample data",
          options: [
            refreshOption,
            {
              name: "--theme",
              description:
                "Color theme (k9s, amber, green, apple2, vintage, ibm, futuristic, matrix, norton)",
              args: {
                name: "theme",
                default: "k9s",
                suggestions: [
                  "k9s",
                  "amber",
                  "green",
                  "apple2",
                  "vintage",
                  "ibm",
                  "futuristic",
                  "matrix",
                  "norton",
                ],
              },
            },
          ],
          args: {
            name: "resource",
            isOptional: true,
            suggestions: ["messages", "events"],
          },
        },
        {
          name: "email",
          description: "Explore email features with sample data",
          subcommands: [
            {
              name: "list",
              description: "List sample emails",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of messages to show",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: "--id",
                  description: "Show message IDs",
                },
              ],
            },
            {
              name: "read",
              description: "Read a sample email",
              args: messageIdArg2,
            },
            {
              name: "send",
              description: "Simulate sending an email",
              options: [
                {
                  name: "--to",
                  description: "Recipient email address",
                  args: {
                    name: "to",
                  },
                },
                {
                  name: "--subject",
                  description: "Email subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: "--body",
                  description: "Email body",
                  args: {
                    name: "body",
                  },
                },
              ],
            },
            {
              name: "search",
              description: "Search sample emails",
              options: [
                {
                  name: ["--query", "-q"],
                  description: "Search query",
                  args: {
                    name: "query",
                  },
                },
              ],
            },
            {
              name: "mark",
              description: "Mark sample emails (simulated)",
              options: [
                {
                  name: "--read",
                  description: "Mark as read",
                },
                {
                  name: "--unread",
                  description: "Mark as unread",
                },
                {
                  name: "--starred",
                  description: "Mark as starred",
                },
                {
                  name: "--unstarred",
                  description: "Remove star",
                },
              ],
              args: messageIdArg2,
            },
            {
              name: "delete",
              description: "Delete sample email (simulated)",
              args: messageIdArg2,
            },
            {
              name: "folders",
              description: "Manage sample email folders",
              subcommands: [
                {
                  name: "list",
                  description: "List sample folders",
                },
                {
                  name: "create",
                  description: "Create a folder (simulated)",
                  options: [
                    {
                      name: "--name",
                      description: "Folder name",
                      args: {
                        name: "name",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a folder (simulated)",
                  args: {
                    name: "folder-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "threads",
              description: "Manage sample email threads",
              subcommands: [
                {
                  name: "list",
                  description: "List sample threads",
                  options: [
                    {
                      name: ["--limit", "-l"],
                      description: "Number of threads to show",
                      args: {
                        name: "limit",
                        default: "10",
                      },
                    },
                  ],
                },
                {
                  name: "read",
                  description: "Read a sample thread",
                  args: {
                    name: "thread-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "drafts",
              description: "Manage sample email drafts",
              subcommands: [
                {
                  name: "list",
                  description: "List sample drafts",
                },
                {
                  name: "create",
                  description: "Create a draft (simulated)",
                  options: [
                    {
                      name: "--to",
                      description: "Recipient email",
                      args: {
                        name: "to",
                        default: "recipient@example.com",
                      },
                    },
                    {
                      name: "--subject",
                      description: "Email subject",
                      args: {
                        name: "subject",
                        default: "Draft Subject",
                      },
                    },
                    {
                      name: "--body",
                      description: "Email body",
                      args: {
                        name: "body",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a draft (simulated)",
                  args: {
                    name: "draft-id",
                    isOptional: true,
                  },
                },
                {
                  name: "send",
                  description: "Send a draft (simulated)",
                  args: {
                    name: "draft-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "attachments",
              description: "Manage sample email attachments",
              subcommands: [
                {
                  name: "list",
                  description: "List attachments for a message",
                  args: messageIdArg2,
                },
                {
                  name: "download",
                  description: "Download an attachment (simulated)",
                  args: {
                    name: "attachment-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "scheduled",
              description: "Manage scheduled messages",
              subcommands: [
                {
                  name: "list",
                  description: "List scheduled messages",
                },
                {
                  name: "cancel",
                  description: "Cancel a scheduled message (simulated)",
                  args: {
                    name: "schedule-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "smart-compose",
              description: "AI-powered email composition (demo)",
              options: [
                {
                  name: "--prompt",
                  description: "Prompt for AI composition",
                  args: {
                    name: "prompt",
                  },
                },
              ],
            },
            {
              name: "ai",
              description: "AI-powered email features (demo)",
              subcommands: [
                {
                  name: "summarize",
                  description: "Summarize an email with AI (demo)",
                  args: messageIdArg2,
                },
                {
                  name: "extract",
                  description: "Extract key info from email with AI (demo)",
                  args: messageIdArg2,
                },
              ],
            },
          ],
        },
        {
          name: "calendar",
          description: "Explore calendar features with sample data",
          subcommands: [
            {
              name: "calendars",
              description: "List sample calendars",
            },
            {
              name: "show",
              description: "Show sample calendar details",
              args: {
                name: "calendar-id",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List sample calendar events",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of events to show",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: "--id",
                  description: "Show event IDs",
                },
              ],
            },
            {
              name: "create",
              description: "Simulate creating a calendar event",
              options: [
                titleOption,
                {
                  name: "--start",
                  description: "Start time",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--duration",
                  description: "Duration in minutes",
                  args: {
                    name: "duration",
                    default: "30",
                  },
                },
                locationOption,
                {
                  name: "--attendee",
                  description: "Attendee email (can be repeated)",
                  isRepeatable: true,
                  args: {
                    name: "attendee",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Simulate updating a calendar event",
              options: [
                {
                  name: "--title",
                  description: "New event title",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--start",
                  description: "New start time",
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--location",
                  description: "New event location",
                  args: {
                    name: "location",
                  },
                },
              ],
              args: eventIdArg2,
            },
            {
              name: "delete",
              description: "Simulate deleting a calendar event",
              options: [forceOption2],
              args: eventIdArg2,
            },
            {
              name: "events",
              description: "Manage calendar events",
              subcommands: [
                {
                  name: "list",
                  description: "List events",
                },
                {
                  name: "show",
                  description: "Show event details",
                  args: eventIdArg2,
                },
                {
                  name: "create",
                  description: "Create an event",
                },
                {
                  name: "update",
                  description: "Update an event",
                  args: eventIdArg2,
                },
                {
                  name: "delete",
                  description: "Delete an event",
                  args: eventIdArg2,
                },
              ],
            },
            {
              name: "availability",
              description: "Check sample availability",
              options: [
                {
                  name: "--email",
                  description: "Email to check availability for",
                  args: {
                    name: "email",
                  },
                },
                durationOption,
              ],
            },
            {
              name: "find-time",
              description: "Find available meeting times",
              options: [
                {
                  name: "--attendee",
                  description: "Attendee email",
                  isRepeatable: true,
                  args: {
                    name: "attendee",
                  },
                },
                durationOption,
              ],
            },
            {
              name: "schedule",
              description: "Schedule a meeting",
              options: [
                {
                  name: "--title",
                  description: "Meeting title",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--attendee",
                  description: "Attendee email",
                  isRepeatable: true,
                  args: {
                    name: "attendee",
                  },
                },
                durationOption,
              ],
            },
            {
              name: "recurring",
              description: "Manage recurring events",
              subcommands: [
                {
                  name: "create",
                  description: "Create a recurring event",
                },
                {
                  name: "list",
                  description: "List recurring events",
                },
              ],
            },
            {
              name: "virtual",
              description: "Manage virtual calendars",
              subcommands: [
                {
                  name: "list",
                  description: "List virtual calendars",
                },
                {
                  name: "create",
                  description: "Create virtual calendar",
                },
              ],
            },
            {
              name: "ai",
              description: "AI-powered calendar features",
              subcommands: [
                {
                  name: "analyze",
                  description: "Analyze calendar patterns",
                },
                {
                  name: "conflicts",
                  description: "Detect scheduling conflicts",
                },
                {
                  name: "reschedule",
                  description: "Get AI rescheduling suggestions",
                  args: eventIdArg2,
                },
                {
                  name: "focus-time",
                  description: "Find focus time blocks",
                },
                {
                  name: "adapt",
                  description: "Get adaptive scheduling suggestions",
                },
              ],
            },
          ],
        },
        {
          name: "contacts",
          description: "Explore contacts features with sample data",
          subcommands: [
            {
              name: "list",
              description: "List sample contacts",
              options: [
                {
                  name: ["--limit", "-l"],
                  description: "Number of contacts to show",
                  args: {
                    name: "limit",
                    default: "10",
                  },
                },
                {
                  name: "--id",
                  description: "Show contact IDs",
                },
              ],
            },
            {
              name: ["show", "read"],
              description: "Show a sample contact",
              args: contactIdArg2,
            },
            {
              name: "create",
              description: "Simulate creating a contact",
              options: [
                {
                  name: "--first-name",
                  description: "First name",
                  args: {
                    name: "first-name",
                  },
                },
                {
                  name: "--last-name",
                  description: "Last name",
                  args: {
                    name: "last-name",
                  },
                },
                {
                  name: "--email",
                  description: "Email address",
                  args: {
                    name: "email",
                  },
                },
                {
                  name: "--phone",
                  description: "Phone number",
                  args: {
                    name: "phone",
                  },
                },
                {
                  name: "--company",
                  description: "Company name",
                  args: {
                    name: "company",
                  },
                },
                {
                  name: "--title",
                  description: "Job title",
                  args: {
                    name: "title",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Simulate updating a contact",
              options: [
                {
                  name: "--email",
                  description: "New email address",
                  args: {
                    name: "email",
                  },
                },
                {
                  name: "--phone",
                  description: "New phone number",
                  args: {
                    name: "phone",
                  },
                },
                {
                  name: "--company",
                  description: "New company name",
                  args: {
                    name: "company",
                  },
                },
                {
                  name: "--title",
                  description: "New job title",
                  args: {
                    name: "title",
                  },
                },
              ],
              args: contactIdArg2,
            },
            {
              name: "delete",
              description: "Simulate deleting a contact",
              options: [forceOption2],
              args: contactIdArg2,
            },
            {
              name: "search",
              description: "Search sample contacts",
              args: {
                name: "query",
                isOptional: true,
              },
            },
            {
              name: "groups",
              description: "Manage contact groups",
              subcommands: [
                {
                  name: "list",
                  description: "List contact groups",
                },
                {
                  name: "show",
                  description: "Show group details",
                  args: groupIdArg2,
                },
                {
                  name: "create",
                  description: "Create a contact group",
                  args: {
                    name: "name",
                    isOptional: true,
                  },
                },
                {
                  name: "delete",
                  description: "Delete a contact group",
                  args: groupIdArg2,
                },
                {
                  name: "add-member",
                  description: "Add a contact to a group",
                  args: [groupIdArg2, contactIdArg2],
                },
                {
                  name: "remove-member",
                  description: "Remove a contact from a group",
                  args: [groupIdArg2, contactIdArg2],
                },
              ],
            },
            {
              name: "photo",
              description: "Manage contact photos",
              subcommands: [
                {
                  name: "get",
                  description: "Get contact photo",
                  args: contactIdArg2,
                },
                {
                  name: "set",
                  description: "Set contact photo",
                  args: [
                    contactIdArg2,
                    {
                      name: "photo-path",
                      isOptional: true,
                      template: "filepaths",
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove contact photo",
                  args: contactIdArg2,
                },
              ],
            },
            {
              name: "sync",
              description: "Sync contacts",
              subcommands: [
                {
                  name: "status",
                  description: "Show sync status",
                },
                {
                  name: "now",
                  description: "Trigger sync now",
                },
                {
                  name: "export",
                  description: "Export contacts",
                },
                {
                  name: "import",
                  description: "Import contacts",
                },
              ],
            },
          ],
        },
        {
          name: "scheduler",
          description: "Explore scheduler features with sample data",
          subcommands: [
            {
              name: ["configurations", "config", "configs"],
              description: "Manage scheduler configurations",
              subcommands: [
                {
                  name: "list",
                  description: "List scheduler configurations",
                },
                {
                  name: "show",
                  description: "Show configuration details",
                  args: configIdArg2,
                },
                {
                  name: "create",
                  description: "Create a scheduler configuration",
                  options: [
                    nameOption,
                    {
                      name: "--duration",
                      description: "Meeting duration in minutes",
                      args: {
                        name: "duration",
                        default: "30",
                      },
                    },
                    {
                      name: "--slug",
                      description: "URL slug",
                      args: {
                        name: "slug",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a scheduler configuration",
                  args: configIdArg2,
                },
                {
                  name: "delete",
                  description: "Delete a scheduler configuration",
                  args: configIdArg2,
                },
              ],
            },
            {
              name: "sessions",
              description: "Manage scheduler sessions",
              subcommands: [
                {
                  name: "list",
                  description: "List scheduler sessions",
                },
                {
                  name: "show",
                  description: "Show session details",
                  args: {
                    name: "session-id",
                    isOptional: true,
                  },
                },
                {
                  name: "create",
                  description: "Create a scheduler session",
                  args: configIdArg2,
                },
                {
                  name: "delete",
                  description: "Delete a scheduler session",
                  args: {
                    name: "session-id",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "bookings",
              description: "Manage scheduler bookings",
              subcommands: [
                {
                  name: "show",
                  description: "Show booking details",
                  args: bookingIdArg2,
                },
                {
                  name: "cancel",
                  description: "Cancel a booking",
                  options: [
                    {
                      name: "--reason",
                      description: "Cancellation reason",
                      args: {
                        name: "reason",
                      },
                    },
                  ],
                  args: bookingIdArg2,
                },
                {
                  name: "reschedule",
                  description: "Reschedule a booking",
                  args: bookingIdArg2,
                },
              ],
            },
          ],
        },
        {
          name: "notetaker",
          description: "Explore AI notetaker features with sample data",
          subcommands: [
            {
              name: "list",
              description: "List sample notetakers",
            },
            {
              name: ["show", "read"],
              description: "Show a sample notetaker session",
              args: notetakerIdArg2,
            },
            {
              name: "create",
              description: "Simulate creating a notetaker",
              options: [
                {
                  name: "--meeting-link",
                  description: "Video conference meeting link",
                  args: {
                    name: "meeting-link",
                  },
                },
                {
                  name: "--name",
                  description: "Display name for the notetaker bot",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--join-at",
                  description: "When to join the meeting (optional)",
                  args: {
                    name: "join-at",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Simulate deleting/cancelling a notetaker",
              options: [forceOption2],
              args: notetakerIdArg2,
            },
            {
              name: "media",
              description: "Access notetaker media (recordings, transcripts)",
              subcommands: [
                {
                  name: "show",
                  description: "Show available media for a notetaker",
                  args: notetakerIdArg2,
                },
                {
                  name: "download",
                  description: "Download notetaker recording",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description: "Output file path",
                      args: {
                        name: "output",
                        template: "filepaths",
                      },
                    },
                  ],
                  args: notetakerIdArg2,
                },
                {
                  name: "transcript",
                  description: "Get meeting transcript",
                  options: [
                    {
                      name: "--format",
                      description: "Output format (text, vtt, json)",
                      args: {
                        name: "format",
                        suggestions: ["text", "vtt", "json"],
                      },
                    },
                  ],
                  args: notetakerIdArg2,
                },
                {
                  name: "summary",
                  description: "Get AI-generated meeting summary",
                  args: notetakerIdArg2,
                },
                {
                  name: "action-items",
                  description: "Get AI-extracted action items",
                  args: notetakerIdArg2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tui",
      description: "Launch interactive terminal UI",
      options: [refreshOption, themeOption],
      args: {
        name: "resource",
        isOptional: true,
        suggestions: ["messages", "events", "contacts", "webhooks", "grants"],
      },
      subcommands: [
        {
          name: ["messages", "m"],
          description: "Launch TUI directly to messages view",
          options: [refreshOption, themeOption],
        },
        {
          name: ["events", "e", "calendar", "cal"],
          description: "Launch TUI directly to calendar/events view",
          options: [refreshOption, themeOption],
        },
        {
          name: ["contacts", "c"],
          description: "Launch TUI directly to contacts view",
          options: [refreshOption, themeOption],
        },
        {
          name: ["webhooks", "w"],
          description: "Launch TUI directly to webhooks view",
          options: [refreshOption, themeOption],
        },
        {
          name: ["grants", "g"],
          description: "Launch TUI directly to grants view",
          options: [refreshOption, themeOption],
        },
        {
          name: "theme",
          description: "Manage TUI themes",
          subcommands: [
            {
              name: "init",
              description: "Create a starter custom theme file",
              args: nameArg,
            },
            {
              name: "list",
              description: "List available themes",
            },
            {
              name: "validate",
              description: "Validate a custom theme file",
              args: nameArg,
            },
            {
              name: "set-default",
              description: "Set the default TUI theme",
              args: nameArg,
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update Nylas CLI to the latest version",
      options: [
        {
          name: "--check",
          description: "Only check for updates without installing",
        },
        {
          name: ["--force", "-f"],
          description: "Force update even if already on latest version",
        },
        yesOption,
      ],
    },
    {
      name: "workflow",
      description: "Manage hosted workflows",
      subcommands: [
        {
          name: "list",
          description: "List hosted workflows",
          options: [
            scopeOption2,
            grantIdOption2,
            limitOption2,
            pageTokenOption,
          ],
        },
        {
          name: "show",
          description: "Show a hosted workflow",
          options: [scopeOption2, grantIdOption2],
          args: workflowIdArg,
        },
        {
          name: "create",
          description: "Create a hosted workflow",
          options: [
            scopeOption2,
            grantIdOption2,
            {
              name: "--file",
              description: "Path to a JSON workflow definition",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--name",
              description: "Workflow name",
              args: {
                name: "name",
              },
            },
            {
              name: "--template-id",
              description: "Hosted template ID",
              args: {
                name: "template-id",
              },
            },
            {
              name: "--trigger-event",
              description: "Workflow trigger event",
              args: {
                name: "trigger-event",
                suggestions: [
                  "booking.cancelled",
                  "booking.created",
                  "booking.pending",
                  "booking.reminder",
                  "booking.rescheduled",
                ],
              },
            },
            {
              name: "--delay",
              description: "Delay in minutes before the workflow sends",
              args: {
                name: "delay",
              },
            },
            {
              name: "--enabled",
              description: "Create the workflow in an enabled state",
            },
            {
              name: "--disabled",
              description: "Create the workflow in a disabled state",
            },
            {
              name: "--from-name",
              description: "Transactional sender display name",
              args: {
                name: "from-name",
              },
            },
            {
              name: "--from-email",
              description: "Transactional sender email",
              args: {
                name: "from-email",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a hosted workflow",
          options: [
            scopeOption2,
            grantIdOption2,
            {
              name: "--file",
              description: "Path to a JSON workflow update definition",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--name",
              description: "Updated workflow name",
              args: {
                name: "name",
              },
            },
            {
              name: "--template-id",
              description: "Updated hosted template ID",
              args: {
                name: "template-id",
              },
            },
            {
              name: "--trigger-event",
              description: "Updated workflow trigger event",
              args: {
                name: "trigger-event",
                suggestions: [
                  "booking.cancelled",
                  "booking.created",
                  "booking.pending",
                  "booking.reminder",
                  "booking.rescheduled",
                ],
              },
            },
            {
              name: "--delay",
              description: "Updated workflow delay in minutes",
              args: {
                name: "delay",
              },
            },
            {
              name: "--enabled",
              description: "Enable the workflow",
            },
            {
              name: "--disabled",
              description: "Disable the workflow",
            },
            {
              name: "--from-name",
              description: "Updated transactional sender display name",
              args: {
                name: "from-name",
              },
            },
            {
              name: "--from-email",
              description: "Updated transactional sender email",
              args: {
                name: "from-email",
              },
            },
            {
              name: "--set-delay",
              description: "Apply the value from --delay during update",
            },
          ],
          args: workflowIdArg,
        },
        {
          name: "delete",
          description: "Delete a hosted workflow",
          options: [scopeOption2, grantIdOption2, yesOption2],
          args: workflowIdArg,
        },
      ],
    },
    {
      name: ["workspace", "workspaces", "ws"],
      description: "Manage workspaces",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List workspaces",
        },
        {
          name: "get",
          description: "Show workspace details",
          args: workspaceIdArg,
        },
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: "--name",
              description: "Workspace name (required)",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--domain",
              description: "Workspace domain (required)",
              isRequired: true,
              args: {
                name: "domain",
              },
            },
            {
              name: "--auto-group",
              description: "Enable auto-grouping",
            },
            {
              name: "--policy-id",
              description: "Policy ID to attach",
              args: {
                name: "policy-id",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a workspace",
          options: [
            {
              name: "--policy-id",
              description:
                "Policy ID to attach (empty string detaches the current policy)",
              args: {
                name: "policy-id",
              },
            },
            {
              name: "--rules-ids",
              description: "Rule IDs to attach (comma-separated)",
              isRepeatable: true,
              args: {
                name: "rules-ids",
              },
            },
          ],
          args: workspaceIdArg,
        },
        {
          name: "delete",
          description: "Delete a workspace",
          options: [yesOption],
          args: workspaceIdArg,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionsOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionsOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionsOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionsOption],
        },
      ],
    },
  ],
};

export default completionSpec;
