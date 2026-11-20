// kafkactl v5.21.0 (latest release tag of deviceinsight/kafkactl, same as Homebrew core, 2026-11-20). Source: static read of the cobra command definitions (cmd/**/*.go, internal/global/config.go), README.adoc and CHANGELOG.md at tag v5.21.0; the binary was not run.
// Only context names (local config, `config get-contexts -o compact`) are generated; topics, groups and brokers need a live Kafka connection and are left to the user.

const contextGenerator: Fig.Generator = {
  script: ["kafkactl", "config", "get-contexts", "--output", "compact"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "Context",
        icon: "fig://icon?type=string",
      })),
};

const aclOperations = [
  "any",
  "all",
  "read",
  "write",
  "create",
  "delete",
  "alter",
  "describe",
  "clusteraction",
  "describeconfigs",
  "alterconfigs",
  "idempotentwrite",
];

const encodings = ["none", "hex", "base64"];

const outputOption = (
  formats: string[],
  description = "Output format"
): Fig.Option => ({
  name: ["--output", "-o"],
  description,
  args: { name: "output", suggestions: formats },
});

const validateOnlyOption: Fig.Option = {
  name: ["--validate-only", "-v"],
  description: "Validate only",
};

const configOption: Fig.Option = {
  name: ["--config", "-c"],
  description: "Configs in format `key=value`",
  isRepeatable: true,
  args: { name: "config" },
};

const protoOptions: Fig.Option[] = [
  {
    name: "--key-proto-type",
    description: "Key protobuf message type",
    args: { name: "key-proto-type" },
  },
  {
    name: "--proto-file",
    description:
      "Additional protobuf description file for searching message description",
    isRepeatable: true,
    args: { name: "proto-file", template: "filepaths" },
  },
  {
    name: "--proto-import-path",
    description:
      "Additional path to search files listed in proto 'import' directive",
    isRepeatable: true,
    args: { name: "proto-import-path", template: "folders" },
  },
  {
    name: "--protoset-file",
    description:
      "Additional compiled protobuf description file for searching message description",
    isRepeatable: true,
    args: { name: "protoset-file", template: "filepaths" },
  },
  {
    name: "--value-proto-type",
    description: "Value protobuf message type",
    args: { name: "value-proto-type" },
  },
];

const mechanismOption = (description: string): Fig.Option => ({
  name: ["--mechanism", "-m"],
  description,
  args: {
    name: "mechanism",
    default: "SCRAM-SHA-256",
    suggestions: ["SCRAM-SHA-256", "SCRAM-SHA-512"],
  },
});

const scramOptions = (passwordDescription: string): Fig.Option[] => [
  mechanismOption("SCRAM mechanism"),
  {
    name: ["--password", "-p"],
    description: passwordDescription,
    args: { name: "password" },
  },
  {
    name: ["--salt", "-s"],
    description: "Custom salt (base64 encoded, generated if not provided)",
    args: { name: "salt" },
  },
  {
    name: ["--iterations", "-i"],
    description: "SCRAM iterations",
    args: { name: "iterations", default: "4096" },
  },
];

const aclPermissionOptions = (
  allowDescription: string,
  denyDescription: string
): Fig.Option[] => [
  { name: ["--allow", "-a"], description: allowDescription },
  { name: ["--deny", "-d"], description: denyDescription },
];

const aclFilterOptions = (verb: string): Fig.Option[] => [
  {
    name: ["--principal", "-p"],
    description: "Principal of acl",
    args: { name: "principal" },
  },
  {
    name: "--host",
    description: "Host of acl",
    args: { name: "host" },
  },
  {
    name: ["--resource-name", "-r"],
    description: "Resource name of acl (e.g. topic name)",
    args: { name: "resource-name" },
  },
  { name: ["--topics", "-t"], description: `${verb} acl for a topic` },
  { name: ["--groups", "-g"], description: `${verb} acl for a consumer group` },
  { name: ["--cluster", "-c"], description: `${verb} acl for the cluster` },
];

const topicArg: Fig.Arg = { name: "topic" };
const groupArg: Fig.Arg = { name: "group" };

const commands: Fig.Subcommand[] = [
  {
    name: ["alter", "edit"],
    description: "Alter topics, partitions, brokers, users",
    subcommands: [
      {
        name: "broker",
        description: "Alter a broker",
        options: [configOption, validateOnlyOption],
        args: { name: "broker" },
      },
      {
        name: "partition",
        description: "Alter a partition",
        options: [
          {
            name: ["--replicas", "-r"],
            description: "Set replicas for a partition",
            isRepeatable: true,
            args: { name: "replicas" },
          },
          validateOnlyOption,
        ],
        args: [topicArg, { name: "partition" }],
      },
      {
        name: "topic",
        description: "Alter a topic",
        options: [
          configOption,
          {
            name: ["--partitions", "-p"],
            description: "Number of partitions",
            args: { name: "partitions" },
          },
          {
            name: ["--replication-factor", "-r"],
            description: "Replication factor",
            args: { name: "replication-factor" },
          },
          validateOnlyOption,
        ],
        args: topicArg,
      },
      {
        name: "user",
        description: "Alter a SCRAM user",
        options: scramOptions("New user password"),
        args: { name: "username" },
      },
    ],
  },
  {
    name: "attach",
    description: "Run kafkactl pod in kubernetes and attach to it",
  },
  {
    name: "clone",
    description: "Clone topics, consumerGroups",
    subcommands: [
      {
        name: ["consumer-group", "cg"],
        description: "Clone existing consumerGroup with all offsets",
        args: [{ name: "source-group" }, { name: "target-group" }],
      },
      {
        name: "topic",
        description:
          "Clone existing topic (number of partitions, replication factor, config entries) to new one",
        args: [{ name: "source-topic" }, { name: "target-topic" }],
      },
    ],
  },
  {
    name: "completion",
    description: "Generate shell auto-completion file",
    args: {
      name: "shell",
      suggestions: ["bash", "zsh", "fish", "powershell"],
    },
  },
  {
    name: "config",
    description: "Show and edit configurations",
    subcommands: [
      {
        name: ["current-context", "currentContext"],
        description: "Show current context",
      },
      {
        name: ["get-contexts", "getContexts"],
        description: "List configured contexts",
        options: [outputOption(["compact"])],
      },
      {
        name: ["use-context", "useContext"],
        description: "Switch active context",
        args: { name: "context", generators: contextGenerator },
      },
      { name: "view", description: "Show current config" },
    ],
  },
  {
    name: "consume",
    description: "Consume messages from a topic",
    options: [
      {
        name: ["--exit", "-e"],
        description: "Stop consuming when latest offset is reached",
      },
      {
        name: "--filter-header",
        description:
          "Filter messages headers with glob pattern (`key=pattern`)",
        isRepeatable: true,
        args: { name: "filter-header" },
      },
      {
        name: "--filter-key",
        description: "Filter messages keys with glob pattern",
        args: { name: "filter-key" },
      },
      {
        name: "--filter-value",
        description: "Filter messages values with glob pattern",
        args: { name: "filter-value" },
      },
      {
        name: ["--from-beginning", "-b"],
        description: "Set offset for consumer to the oldest offset",
      },
      {
        name: "--from-timestamp",
        description:
          "Consume data from offset of given timestamp (epoch milliseconds or ISO 8601 date/time)",
        args: { name: "from-timestamp" },
      },
      {
        name: ["--group", "-g"],
        description: "Consumer group to join",
        args: { name: "group" },
      },
      {
        name: "--ignore-errors",
        description:
          "Continue consuming when a message cannot be deserialized, printing a warning instead of aborting",
      },
      {
        name: ["--isolation-level", "-i"],
        description: "Isolation level to use",
        args: {
          name: "isolation-level",
          suggestions: ["ReadUncommitted", "ReadCommitted"],
        },
      },
      {
        name: "--key-encoding",
        description: "Key encoding (auto-detected by default)",
        args: { name: "key-encoding", suggestions: encodings },
      },
      {
        name: "--max-messages",
        description: "Stop consuming after n messages have been read",
        args: { name: "max-messages", default: "-1" },
      },
      {
        name: "--offset",
        description:
          "Offsets in format `partition=offset` (for partitions not specified, other parameters apply)",
        isRepeatable: true,
        args: { name: "offset" },
      },
      outputOption(["json", "yaml"]),
      {
        name: ["--partitions", "-p"],
        description:
          "Partitions to consume. The default is to consume from all partitions",
        isRepeatable: true,
        args: { name: "partitions" },
      },
      {
        name: "--print-all",
        description: "Print all messages details",
      },
      { name: "--print-headers", description: "Print message headers" },
      { name: ["--print-keys", "-k"], description: "Print message keys" },
      { name: "--print-partitions", description: "Print message partitions" },
      {
        name: ["--print-schema", "-a"],
        description: "Print details about schema used for decoding",
      },
      {
        name: ["--print-timestamps", "-t"],
        description: "Print message timestamps",
      },
      {
        name: "--proto-marshal-option",
        description:
          "JSON marshal options to use for protobuf, in format `key=value`",
        isRepeatable: true,
        args: {
          name: "proto-marshal-option",
          suggestions: [
            "allowPartial",
            "useProtoNames",
            "useEnumNumbers",
            "emitDefaultValues",
          ],
        },
      },
      ...protoOptions,
      {
        name: ["--separator", "-s"],
        description: "Separator to split key and value",
        args: { name: "separator", default: "#" },
      },
      {
        name: "--tail",
        description: "Show only the last n messages on the topic",
        args: { name: "tail", default: "-1" },
      },
      {
        name: "--to-timestamp",
        description:
          "Consume data till offset of given timestamp (epoch milliseconds or ISO 8601 date/time)",
        args: { name: "to-timestamp" },
      },
      {
        name: "--value-encoding",
        description: "Value encoding (auto-detected by default)",
        args: { name: "value-encoding", suggestions: encodings },
      },
    ],
    args: topicArg,
  },
  {
    name: "create",
    description: "Create topics, consumerGroups, acls, users",
    subcommands: [
      {
        name: ["access-control-list", "acl"],
        description: "Create an acl",
        options: [
          ...aclPermissionOptions(
            "Acl of permissionType 'allow' (choose this or 'deny')",
            "Acl of permissionType 'deny' (choose this or 'allow')"
          ),
          {
            name: ["--cluster", "-c"],
            description: "Create acl for the cluster",
          },
          {
            name: ["--group", "-g"],
            description: "Create acl for a consumer group",
            args: { name: "group" },
          },
          {
            name: "--host",
            description: "Hosts to allow",
            isRepeatable: true,
            args: { name: "host" },
          },
          {
            name: ["--operation", "-o"],
            description: "Operations of acl",
            isRepeatable: true,
            isRequired: true,
            args: { name: "operation", suggestions: aclOperations },
          },
          {
            name: "--pattern",
            description: "Pattern type",
            args: {
              name: "pattern",
              default: "literal",
              suggestions: ["match", "prefixed", "literal"],
            },
          },
          {
            name: ["--principal", "-p"],
            description: "Principal to be authenticated",
            isRequired: true,
            args: { name: "principal" },
          },
          {
            name: ["--topic", "-t"],
            description: "Create acl for a topic",
            args: { name: "topic" },
          },
          validateOnlyOption,
        ],
      },
      {
        name: ["consumer-group", "cg"],
        description: "Create a consumerGroup",
        options: [
          {
            name: "--newest",
            description:
              "Set the offset to newest offset (for all partitions or the specified partition)",
          },
          {
            name: "--offset",
            description:
              "Set offset to this value. offset with value -1 is ignored",
            args: { name: "offset", default: "-1" },
          },
          {
            name: "--oldest",
            description:
              "Set the offset to oldest offset (for all partitions or the specified partition)",
          },
          {
            name: ["--partition", "-p"],
            description:
              "Partition to create group for. -1 stands for all partitions",
            args: { name: "partition", default: "-1" },
          },
          {
            name: ["--topic", "-t"],
            description: "One or more topics to create group for",
            isRepeatable: true,
            args: { name: "topic" },
          },
        ],
        args: groupArg,
      },
      {
        name: "topic",
        description: "Create a topic",
        options: [
          configOption,
          {
            name: ["--file", "-f"],
            description: "File with topic description",
            args: { name: "file", template: "filepaths" },
          },
          {
            name: ["--partitions", "-p"],
            description: "Number of partitions",
            args: { name: "partitions", default: "1" },
          },
          {
            name: ["--replication-factor", "-r"],
            description: "Replication factor",
            args: { name: "replication-factor", default: "-1" },
          },
          validateOnlyOption,
        ],
        args: { name: "topic", isVariadic: true },
      },
      {
        name: "user",
        description: "Create a SCRAM user",
        options: scramOptions("User password"),
        args: { name: "username" },
      },
    ],
  },
  {
    name: "delete",
    description:
      "Delete topics, consumerGroups, consumer-group-offset, acls, records, users",
    subcommands: [
      {
        name: ["access-control-list", "acl"],
        description: "Delete an acl",
        options: [
          ...aclPermissionOptions(
            "Acl of permissionType 'allow'",
            "Acl of permissionType 'deny'"
          ),
          ...aclFilterOptions("Delete"),
          {
            name: ["--operation", "-o"],
            description: "Operation of acl",
            isRequired: true,
            args: { name: "operation", suggestions: aclOperations },
          },
          {
            name: "--pattern",
            description: "Pattern type",
            isRequired: true,
            args: {
              name: "pattern",
              suggestions: ["any", "match", "prefixed", "literal"],
            },
          },
          validateOnlyOption,
        ],
      },
      {
        name: ["consumer-group", "consumer-groups"],
        description: "Delete a consumer-group",
        args: { name: "consumer-group", isVariadic: true },
      },
      {
        name: ["consumer-group-offset", "cgo", "offset"],
        description: "Delete a consumer-group-offset",
        options: [
          {
            name: ["--partition", "-p"],
            description:
              "Delete offset for this partition. -1 stands for all partitions",
            args: { name: "partition", default: "-1" },
          },
          {
            name: ["--topic", "-t"],
            description: "Delete offset for this topic",
            args: { name: "topic" },
          },
        ],
        args: { name: "consumer-group" },
      },
      {
        name: "records",
        description: "Delete records from a topic",
        options: [
          {
            name: "--offset",
            description:
              "Offsets in format `partition=offset`. Records with smaller offset will be deleted",
            isRepeatable: true,
            args: { name: "offset" },
          },
        ],
        args: topicArg,
      },
      {
        name: "topic",
        description: "Delete a topic",
        args: { name: "topic", isVariadic: true },
      },
      {
        name: "user",
        description: "Delete SCRAM user credentials",
        options: [mechanismOption("SCRAM mechanism to delete")],
        args: { name: "username" },
      },
    ],
  },
  {
    name: "describe",
    description: "Describe topics, consumerGroups, brokers, users",
    subcommands: [
      {
        name: "broker",
        description: "Describe a broker",
        options: [
          {
            name: ["--all-configs", "-a"],
            description: "Print all configs including defaults",
          },
          outputOption(["json", "yaml", "wide"]),
        ],
        args: { name: "broker" },
      },
      {
        name: ["consumer-group", "cg"],
        description: "Describe a consumerGroup",
        options: [
          {
            name: ["--only-with-lag", "-l"],
            description: "Show only partitions that have a lag",
          },
          outputOption(["json", "yaml", "wide"]),
          {
            name: ["--print-members", "-m"],
            description: "Print group members (default true)",
          },
          {
            name: ["--print-topics", "-T"],
            description: "Print topic details (default true)",
          },
          {
            name: ["--topic", "-t"],
            description: "Show group details for given topic only",
            args: { name: "topic" },
          },
        ],
        args: groupArg,
      },
      {
        name: "topic",
        description: "Describe a topic",
        options: [
          {
            name: ["--all-configs", "-a"],
            description: "Print all configs including defaults",
          },
          outputOption(["json", "yaml", "wide"]),
          {
            name: ["--skip-empty", "-s"],
            description: "Show only partitions that have a messages",
          },
        ],
        args: topicArg,
      },
      {
        name: "user",
        description: "Describe a SCRAM user",
        options: [outputOption(["json", "yaml"])],
        args: { name: "username" },
      },
    ],
  },
  {
    name: ["get", "list"],
    description: "Get info about topics, consumerGroups, acls, brokers, users",
    subcommands: [
      {
        name: ["access-control-list", "acl"],
        description: "List available acls",
        options: [
          ...aclPermissionOptions(
            "Acl of permissionType 'allow'",
            "Acl of permissionType 'deny'"
          ),
          ...aclFilterOptions("List"),
          {
            name: "--operation",
            description: "Operation of acl",
            args: {
              name: "operation",
              default: "any",
              suggestions: aclOperations,
            },
          },
          outputOption(["json", "yaml"]),
          {
            name: "--pattern",
            description: "Pattern type",
            args: {
              name: "pattern",
              default: "any",
              suggestions: ["any", "match", "prefixed", "literal"],
            },
          },
        ],
      },
      {
        name: "brokers",
        description: "List brokers",
        options: [outputOption(["json", "yaml", "compact"])],
      },
      {
        name: ["consumer-groups", "cg"],
        description: "List available consumerGroups",
        options: [
          outputOption(["json", "yaml", "wide", "compact"]),
          {
            name: ["--topic", "-t"],
            description: "Show groups for given topic only",
            args: { name: "topic" },
          },
        ],
      },
      {
        name: "topics",
        description: "List available topics",
        options: [outputOption(["json", "yaml", "wide", "compact"])],
      },
      {
        name: ["users", "user"],
        description: "Get SCRAM users",
        options: [outputOption(["json", "yaml"])],
      },
    ],
  },
  {
    name: "produce",
    description: "Produce messages to a topic",
    options: [
      {
        name: ["--file", "-f"],
        description: "File to read input from",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["--header", "-H"],
        description: "Headers in format `key:value`",
        isRepeatable: true,
        args: { name: "header" },
      },
      {
        name: "--input-format",
        description: "Input format (default is csv)",
        args: { name: "input-format", suggestions: ["csv", "json"] },
      },
      {
        name: ["--key", "-k"],
        description: "Key to use for all messages",
        args: { name: "key" },
      },
      {
        name: "--key-encoding",
        description: "Key encoding (none by default)",
        args: { name: "key-encoding", suggestions: encodings },
      },
      {
        name: ["--key-schema-version", "-K"],
        description:
          "Avro schema version that should be used for key serialization (default is latest)",
        args: { name: "key-schema-version", default: "-1" },
      },
      {
        name: ["--lineSeparator", "-L"],
        description: "Separator to split multiple messages from stdin or file",
        args: { name: "lineSeparator", default: "\\n" },
      },
      {
        name: "--max-message-bytes",
        description:
          "The maximum permitted size of a message (defaults to 1000000)",
        args: { name: "max-message-bytes" },
      },
      {
        name: "--null-value",
        description:
          "Produce a null value (can be used instead of providing a value with --value)",
      },
      {
        name: ["--partition", "-p"],
        description: "Partition to produce to",
        args: { name: "partition", default: "-1" },
      },
      {
        name: ["--partitioner", "-P"],
        description: "The partitioning scheme to use (default is murmur2)",
        args: {
          name: "partitioner",
          suggestions: ["murmur2", "hash", "hash-ref", "manual", "random"],
        },
      },
      ...protoOptions,
      {
        name: ["--rate", "-r"],
        description: "Amount of messages per second to produce on the topic",
        args: { name: "rate", default: "-1" },
      },
      {
        name: "--required-acks",
        description: "Required acks (default is WaitForLocal)",
        args: {
          name: "required-acks",
          suggestions: ["NoResponse", "WaitForLocal", "WaitForAll"],
        },
      },
      {
        name: ["--separator", "-S"],
        description: "Separator to split key and value from stdin or file",
        args: { name: "separator" },
      },
      {
        name: ["--silent", "-s"],
        description: "Do not write to standard output",
      },
      {
        name: ["--value", "-v"],
        description: "Value to produce",
        args: { name: "value" },
      },
      {
        name: "--value-encoding",
        description: "Value encoding (none by default)",
        args: { name: "value-encoding", suggestions: encodings },
      },
      {
        name: ["--value-schema-version", "-i"],
        description:
          "Avro schema version that should be used for value serialization (default is latest)",
        args: { name: "value-schema-version", default: "-1" },
      },
    ],
    args: topicArg,
  },
  {
    name: "reset",
    description: "Reset consumerGroupsOffset",
    subcommands: [
      {
        name: ["consumer-group-offset", "cgo", "offset"],
        description: "Reset a consumer group offset",
        options: [
          {
            name: "--all-topics",
            description:
              "Do the operation for all topics in the consumer group",
          },
          {
            name: ["--execute", "-e"],
            description:
              "Execute the reset (as default only the results are displayed for validation)",
          },
          {
            name: "--newest",
            description:
              "Set the offset to newest offset (for all partitions or the specified partition)",
          },
          {
            name: "--offset",
            description:
              "Set offset to this value. offset with value -1 is ignored",
            args: { name: "offset", default: "-1" },
          },
          {
            name: "--oldest",
            description:
              "Set the offset to oldest offset (for all partitions or the specified partition)",
          },
          outputOption(["json", "yaml"]),
          {
            name: ["--partition", "-p"],
            description:
              "Partition to apply the offset. -1 stands for all partitions",
            args: { name: "partition", default: "-1" },
          },
          {
            name: "--to-datetime",
            description:
              "Set the offset to offset of given timestamp (epoch milliseconds or ISO 8601 date/time)",
            args: { name: "to-datetime" },
          },
          {
            name: ["--topic", "-t"],
            description: "One or more topics to change offset for",
            isRepeatable: true,
            args: { name: "topic" },
          },
        ],
        args: groupArg,
      },
    ],
  },
  { name: "version", description: "Print the version of kafkactl" },
  {
    name: "docs",
    description: "Generate documentation as markdown or man pages",
    hidden: true,
    options: [
      {
        name: "--directory",
        description: "Directory to which documentation is written",
        args: { name: "directory", default: "./", template: "folders" },
      },
      {
        name: "--single-page",
        description: "Generate single page (markdown only)",
      },
      {
        name: "--type",
        description: "The type of documentation to generate",
        args: {
          name: "type",
          default: "markdown",
          suggestions: ["markdown", "man"],
        },
      },
    ],
  },
];

// cobra's built-in `help [command]` mirrors the command tree without options or args
const toHelpTree = (subcommands: Fig.Subcommand[]): Fig.Subcommand[] =>
  subcommands
    .filter((command) => !command.hidden)
    .map((command) => ({
      name: command.name,
      description: command.description,
      ...(command.subcommands
        ? { subcommands: toHelpTree(command.subcommands) }
        : {}),
    }));

const completionSpec: Fig.Spec = {
  name: "kafkactl",
  description: "Command-line interface for Apache Kafka",
  subcommands: [
    ...commands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: toHelpTree(commands),
    },
  ],
  options: [
    {
      name: ["--config-file", "-C"],
      description:
        "Config file. Default locations: $HOME/.config/kafkactl, $HOME/.kafkactl, $APPDATA/kafkactl, /etc/kafkactl",
      isPersistent: true,
      args: { name: "config-file", template: "filepaths" },
    },
    {
      name: ["--verbose", "-V"],
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: "--context",
      description: "The name of the context to use",
      isPersistent: true,
      args: { name: "context", generators: contextGenerator },
    },
    {
      name: "--clear-keyring",
      description: "Clear stored credentials from keyring and re-prompt",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
