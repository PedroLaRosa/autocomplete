// StackStorm st2 v3.9.0 (st2client 3.9.0 on PyPI, uploaded 2026-01-08, and StackStorm/st2 tag v3.9.0; checked 2026-11-19). Source: argparse command tree of the st2client 3.9.0 package (st2client/shell.py, st2client/commands/*.py), walked programmatically and spot-checked with `st2 <command> --help`; the CLI was actually run, not man pages.
// Left out on purpose: the generic `clone` stubs that `st2 <resource> --help` lists for apikey, key, policy, rule, rule-enforcement, trigger and action-alias, because upstream only raises "not implemented" for them (only `action clone` works). exclusiveOn mirrors the mutually exclusive argparse groups.
import { existingUsersandGroups } from "./chown";

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show this help message and exit",
};

const lastOption = (resources: string): Fig.Option => ({
  name: ["-n", "--last"],
  description: `List N most recent ${resources}. Use -n -1 to fetch the full result set`,
  args: {
    name: "LAST",
    suggestions: ["10", "5", "1", "-1"],
  },
});

const timestampOption = (
  direction: "gt" | "lt",
  subject: string,
  field: string
): Fig.Option => ({
  name:
    direction === "gt" ? ["-tg", "--timestamp-gt"] : ["-tl", "--timestamp-lt"],
  description: `Only return ${subject} with ${field} ${
    direction === "gt" ? "greater" : "lower"
  } than the one provided. Use time in the format '2000-01-01T12:00:00.000Z'`,
  args: {
    name: direction === "gt" ? "TIMESTAMP_GT" : "TIMESTAMP_LT",
  },
});

const tokenOption: Fig.Option = {
  name: ["-t", "--token"],
  description:
    "Access token for user authentication. Get ST2_AUTH_TOKEN from the environment variables by default",
  args: { name: "TOKEN" },
};

const apiKeyOption: Fig.Option = {
  name: "--api-key",
  description:
    "Api Key for user authentication. Get ST2_API_KEY from the environment variables by default",
  args: { name: "API_KEY" },
};

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description: "Print output in JSON format",
};

const yamlOption: Fig.Option = {
  name: ["-y", "--yaml"],
  description: "Print output in YAML format",
};

const commonOptions: Fig.Option[] = [
  helpOption,
  tokenOption,
  apiKeyOption,
  jsonOption,
  yamlOption,
];

const asyncOption: Fig.Option = {
  name: ["-a", "--async"],
  description: "Do not wait for action to finish",
};

const attrGetOption: Fig.Option = {
  name: ["-a", "--attr"],
  description:
    "List of attributes to include in the output. 'all' or unspecified will return all attributes",
  args: { name: "ATTR", isVariadic: true },
};

const attrListOption: Fig.Option = {
  name: ["-a", "--attr"],
  description:
    "List of attributes to include in the output. 'all' will return all attributes",
  args: { name: "ATTR", isVariadic: true },
};

const attrOption: Fig.Option = {
  name: "--attr",
  description:
    "List of attributes to include in the output. 'all' or unspecified will return all attributes",
  args: { name: "ATTR", isVariadic: true },
  exclusiveOn: [
    "-d",
    "--detail",
    "-k",
    "--key",
    "--delay",
    "--tail",
    "--auto-dict",
  ],
};

const autoDictOption: Fig.Option = {
  name: "--auto-dict",
  description:
    "Automatically convert list items to dictionaries when colons are detected. (NOTE - this parameter and its functionality will be deprecated in the next release in favor of a more robust conversion method)",
  exclusiveOn: ["--attr", "-d", "--detail", "-k", "--key", "--delay", "--tail"],
};

const delayOption: Fig.Option = {
  name: "--delay",
  description:
    "How long (in milliseconds) to delay the execution before scheduling",
  args: { name: "DELAY" },
  exclusiveOn: [
    "--attr",
    "-d",
    "--detail",
    "-k",
    "--key",
    "--tail",
    "--auto-dict",
  ],
};

const depthOption: Fig.Option = {
  name: "--depth",
  description: "Depth to which to show sub-tasks. By default all are shown",
  args: { name: "DEPTH" },
};

const detailOption: Fig.Option = {
  name: ["-d", "--detail"],
  description: "Display full detail of the execution in table format",
  exclusiveOn: ["--attr", "-k", "--key", "--delay", "--tail", "--auto-dict"],
};

const inheritEnvOption: Fig.Option = {
  name: ["-e", "--inherit-env"],
  description:
    "Pass all the environment variables which are accessible to the CLI as 'env' parameter to the action. Note: Only works with python, local and remote runners",
};

const keyOption: Fig.Option = {
  name: ["-k", "--key"],
  description:
    "If result is type of JSON, then print specific key-value pair; dot notation for nested JSON is supported",
  args: { name: "KEY" },
  exclusiveOn: ["--attr", "-d", "--detail", "--delay", "--tail", "--auto-dict"],
};

const packAttrOption: Fig.Option = {
  name: "--attr",
  description:
    "List of attributes to include in the output. 'all' or unspecified will return all attributes",
  args: { name: "ATTR", isVariadic: true },
  exclusiveOn: ["-d", "--detail"],
};

const packDetailOption: Fig.Option = {
  name: ["-d", "--detail"],
  description: "Display full detail of the execution in table format",
  exclusiveOn: ["--attr"],
};

const packOption: Fig.Option = {
  name: ["-p", "--pack"],
  description: "Only return resources belonging to the provided pack",
  args: { name: "PACK" },
};

const passwordOption: Fig.Option = {
  name: ["-p", "--password"],
  description:
    "Password for the user. If password is not provided, it will be prompted for",
  args: { name: "PASSWORD" },
};

const rawOption: Fig.Option = {
  name: "--raw",
  description: "Raw output, don't show sub-tasks for workflows",
};

const scopedUserOption: Fig.Option = {
  name: ["-u", "--user"],
  description: "User for user scoped items (admin only)",
  args: { name: "USER" },
};

const showTasksOption: Fig.Option = {
  name: "--show-tasks",
  description: "Whether to show sub-tasks of an execution",
};

const tailOption: Fig.Option = {
  name: "--tail",
  description: "Automatically start tailing new execution",
  exclusiveOn: [
    "--attr",
    "-d",
    "--detail",
    "-k",
    "--key",
    "--delay",
    "--auto-dict",
  ],
};

const traceIdOption: Fig.Option = {
  name: "--trace-id",
  description: "Existing trace id for this execution",
  args: { name: "TRACE_ID" },
};

const traceTagOption: Fig.Option = {
  name: ["--trace-tag", "--trace_tag"],
  description: "A trace tag string to track execution later",
  args: { name: "TRACE_TAG" },
};

const ttlOption: Fig.Option = {
  name: ["-l", "--ttl"],
  description:
    "The life span of the token in seconds. Max TTL configured by the admin supersedes this",
  args: { name: "TTL" },
};

const userOption: Fig.Option = {
  name: ["-u", "--user"],
  description: "User under which to run the action (admins only)",
  args: { name: "USER", generators: existingUsersandGroups },
};

const widthOption: Fig.Option = {
  name: ["-w", "--width"],
  description: "Set the width of columns in output",
  args: { name: "WIDTH", isVariadic: true },
};

const withSchemaOption: Fig.Option = {
  name: "--with-schema",
  description: "Show schema_output suggestion with action",
};

const writeScopeOption: Fig.Option = {
  name: ["-s", "--scope"],
  description: "Specify the scope under which you want to place the item",
  args: { name: "SCOPE", suggestions: ["system", "user"] },
};

const actionRefOrIdArgOptional: Fig.Arg = {
  name: "ref-or-id",
  description: "Action reference (pack.action_name) or ID of the action",
  isOptional: true,
};

const commandArg: Fig.Arg = { name: "command", description: "Command text" };

const fileArg: Fig.Arg = {
  name: "file",
  description: "JSON/YAML file",
  template: "filepaths",
};

const idArgVariadic: Fig.Arg = {
  name: "id",
  description: "ID",
  isVariadic: true,
};

const keyNameArg: Fig.Arg = {
  name: "name",
  description: "Name of the key value pair",
};

const keyOrIdArg: Fig.Arg = { name: "key-or-id", description: "Key or ID" };

const nameOrIdArg: Fig.Arg = { name: "name-or-id", description: "Name or ID" };

const nameOrIdArgVariadic: Fig.Arg = {
  name: "name-or-id",
  description: "Name or ID",
  isVariadic: true,
};

const parametersArgVariadicOptional: Fig.Arg = {
  name: "parameters",
  description:
    "List of keyword args, positional args, and optional args for the action",
  isVariadic: true,
  isOptional: true,
};

const refOrIdArg: Fig.Arg = {
  name: "ref-or-id",
  description: "Reference or ID",
};

const refOrIdArgVariadic: Fig.Arg = {
  name: "ref-or-id",
  description: "Reference or ID",
  isVariadic: true,
};

const usernameArg: Fig.Arg = {
  name: "username",
  description: "Name of the user to authenticate",
};

const optionsFirst: Fig.Subcommand["parserDirectives"] = {
  optionsMustPrecedeArguments: true,
};

const runSubcommand: Fig.Subcommand = {
  name: "run",
  description: "Invoke an action manually",
  parserDirectives: optionsFirst,
  options: [
    ...commonOptions,
    withSchemaOption,
    rawOption,
    showTasksOption,
    depthOption,
    widthOption,
    attrOption,
    detailOption,
    keyOption,
    delayOption,
    tailOption,
    autoDictOption,
    traceTagOption,
    traceIdOption,
    asyncOption,
    inheritEnvOption,
    userOption,
  ],
  args: [actionRefOrIdArgOptional, parametersArgVariadicOptional],
};

const actionSubcommand: Fig.Subcommand = {
  name: "action",
  description: "An activity that happens as a response to the external event",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of actions",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption, packOption],
    },
    {
      name: "get",
      description: "Get individual action",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "create",
      description: "Create a new action",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing action",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [refOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing action",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-r", "--remove-files"],
          description: "Remove action files from disk",
        },
      ],
      args: refOrIdArg,
    },
    {
      name: "clone",
      description: "Clone a new action",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-f", "--force"],
          description: "Overwrite action files on disk if destination exists",
        },
      ],
      args: [
        {
          name: "source-ref-or-id",
          description: "Reference or ID of the action to clone",
        },
        {
          name: "dest-pack-name",
          description: "Name of the pack to clone the action into",
        },
        { name: "dest-action-name", description: "Name of the new action" },
      ],
    },
    {
      name: "enable",
      description: "Enable an existing action",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "disable",
      description: "Disable an existing action",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "execute",
      description: "Invoke an action manually",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
        traceTagOption,
        traceIdOption,
        asyncOption,
        inheritEnvOption,
        userOption,
      ],
      args: [actionRefOrIdArgOptional, parametersArgVariadicOptional],
    },
  ],
};

const actionAliasSubcommand: Fig.Subcommand = {
  name: "action-alias",
  description: "Action aliases",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of action aliases",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption, packOption],
    },
    {
      name: "get",
      description: "Get individual action alias",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "create",
      description: "Create a new action alias",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing action alias",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [nameOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing action alias",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: nameOrIdArg,
    },
    {
      name: "match",
      description: "Get the action alias that match the command text",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption],
      args: commandArg,
    },
    {
      name: "execute",
      description:
        "Execute the command text by finding a matching action alias",
      parserDirectives: optionsFirst,
      options: [...commonOptions, userOption],
      args: commandArg,
    },
    {
      name: "test",
      description:
        "Execute the command text by finding a matching action alias and format the result",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        userOption,
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
        asyncOption,
      ],
      args: commandArg,
    },
  ],
};

const authSubcommand: Fig.Subcommand = {
  name: "auth",
  description: "Authenticate user and acquire access token",
  parserDirectives: optionsFirst,
  options: [
    helpOption,
    jsonOption,
    yamlOption,
    passwordOption,
    ttlOption,
    {
      name: ["-t", "--only-token"],
      description:
        "On successful authentication, print only token to the console",
    },
  ],
  args: usernameArg,
};

const loginSubcommand: Fig.Subcommand = {
  name: "login",
  description:
    "Authenticate user, acquire access token, and update CLI config directory",
  parserDirectives: optionsFirst,
  options: [
    helpOption,
    jsonOption,
    yamlOption,
    passwordOption,
    ttlOption,
    {
      name: ["-w", "--write-password"],
      description:
        "Write the password in plain text to the config file (default is to omit it)",
    },
  ],
  args: usernameArg,
};

const whoamiSubcommand: Fig.Subcommand = {
  name: "whoami",
  description: "Display the currently authenticated user",
  parserDirectives: optionsFirst,
  options: [helpOption, jsonOption, yamlOption],
};

const apiKeySubcommand: Fig.Subcommand = {
  name: "apikey",
  description: "API Keys",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of api keys",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        {
          name: ["-u", "--user"],
          description: "Only return ApiKeys belonging to the provided user",
          args: { name: "USER" },
        },
        { name: ["-d", "--detail"], description: "Full list of attributes" },
        {
          name: "--show-secrets",
          description: "Include API key secrets in the output",
        },
      ],
    },
    {
      name: "get",
      description: "Get individual api key",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: { name: "key-or-id", description: "Key or ID", isVariadic: true },
    },
    {
      name: "create",
      description: "Create a new api key",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-u", "--user"],
          description: "User for which to create API Keys",
          args: { name: "USER" },
        },
        {
          name: ["-m", "--metadata"],
          description: "Optional metadata to associate with the API Keys",
          args: { name: "METADATA" },
        },
        {
          name: ["-k", "--only-key"],
          description: "Only print API Key to the console on creation",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an existing api key",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: keyOrIdArg,
    },
    {
      name: "enable",
      description: "Enable an existing api key",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: keyOrIdArg,
    },
    {
      name: "disable",
      description: "Disable an existing api key",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: keyOrIdArg,
    },
    {
      name: "load",
      description: "Load api key from a file",
      parserDirectives: optionsFirst,
      options: [...commonOptions, widthOption],
      args: fileArg,
    },
  ],
};

const executionSubcommand: Fig.Subcommand = {
  name: "execution",
  description: "An invocation of an action",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent action executions",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        lastOption("action executions"),
        {
          name: ["-s", "--sort"],
          description:
            "Sort action executions by start timestamp, asc|ascending (earliest first) or desc|descending (latest first)",
          args: {
            name: "SORT_ORDER",
            suggestions: ["desc", "descending", "asc", "ascending"],
          },
        },
        {
          name: "--action",
          description: "Action reference to filter the list",
          args: { name: "ACTION" },
        },
        {
          name: "--status",
          description:
            "Only return executions with the provided status. Possible values are 'succeeded', 'running', 'scheduled', 'paused', 'failed', 'canceling' or 'canceled'",
          args: {
            name: "STATUS",
            suggestions: [
              "succeeded",
              "running",
              "scheduled",
              "paused",
              "failed",
              "canceling",
              "canceled",
            ],
          },
        },
        {
          name: "--user",
          description: "Only return executions created by the provided user",
          args: { name: "USER" },
        },
        {
          name: "--trigger_instance",
          description: "Trigger instance id to filter the list",
          args: { name: "TRIGGER_INSTANCE" },
        },
        timestampOption("gt", "executions", "timestamp"),
        timestampOption("lt", "executions", "timestamp"),
        {
          name: ["-l", "--showall"],
          description:
            "Show all executions, including child executions of workflows",
        },
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual action execution",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-x", "--exclude-result"],
          description: "Don't retrieve and display the result field",
        },
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
      ],
      args: idArgVariadic,
    },
    {
      name: "re-run",
      description: "Re-run a particular action",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: "--tasks",
          description: "Name of the workflow tasks to re-run",
          args: { name: "TASKS", isVariadic: true, isOptional: true },
        },
        {
          name: "--no-reset",
          description:
            "Name of the with-items tasks to not reset. This only applies to Orquesta workflows. By default, all iterations for with-items tasks is rerun. If no reset, only failed iterations are rerun",
          args: { name: "NO_RESET", isVariadic: true, isOptional: true },
        },
        asyncOption,
        inheritEnvOption,
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
      ],
      args: [
        {
          name: "id",
          description: "ID of action execution to re-run",
          isOptional: true,
        },
        parametersArgVariadicOptional,
      ],
    },
    {
      name: "cancel",
      description: "Cancel action executions",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: {
        name: "ids",
        description: "IDs of the action executions to cancel",
        isVariadic: true,
      },
    },
    {
      name: "pause",
      description: "Pause action executions (workflow executions only)",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
      ],
      args: {
        name: "ids",
        description: "ID of action execution to pause",
        isVariadic: true,
      },
    },
    {
      name: "resume",
      description: "Resume action executions (workflow executions only)",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        withSchemaOption,
        rawOption,
        showTasksOption,
        depthOption,
        widthOption,
        attrOption,
        detailOption,
        keyOption,
        delayOption,
        tailOption,
        autoDictOption,
      ],
      args: {
        name: "ids",
        description: "ID of action execution to resume",
        isVariadic: true,
      },
    },
    {
      name: "tail",
      description: "Tail output of a particular execution",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: "--type",
          description:
            "Type of output to tail for. If not provided, defaults to all",
          args: { name: "OUTPUT_TYPE" },
        },
        {
          name: "--include-metadata",
          description:
            "Include metadata (timestamp, output type) with the output",
        },
      ],
      args: {
        name: "id",
        description: "ID of action execution to tail",
        isOptional: true,
      },
    },
  ],
};

const inquirySubcommand: Fig.Subcommand = {
  name: "inquiry",
  description:
    "Inquiries provide an opportunity to ask a question and wait for a response in a workflow",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent inquiries",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        lastOption("inquiries"),
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual inquiry",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: idArgVariadic,
    },
    {
      name: "respond",
      description: "Respond to an inquiry",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-r", "--response"],
          description:
            "Entire response payload as JSON string (bypass interactive mode)",
          args: { name: "RESPONSE" },
        },
      ],
      args: { name: "id", description: "ID of the inquiry" },
    },
  ],
};

const keySubcommand: Fig.Subcommand = {
  name: "key",
  description:
    "Key value pair is used to store commonly used configuration for reuse in sensors, actions, and rules",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent key value pairs",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        {
          name: "--prefix",
          description:
            "Only return values with names starting with the provided prefix",
          args: { name: "PREFIX" },
        },
        {
          name: ["-d", "--decrypt"],
          description: "Decrypt secrets and displays plain text",
        },
        {
          name: ["-s", "--scope"],
          description: "Scope item is under. Example: 'user'",
          args: { name: "SCOPE", suggestions: ["all", "system", "user"] },
        },
        scopedUserOption,
        lastOption("key value pairs"),
      ],
    },
    {
      name: "get",
      description: "Get individual key value pair",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrGetOption,
        {
          name: ["-d", "--decrypt"],
          description: "Decrypt secret if encrypted and show plain text",
        },
        {
          name: ["-s", "--scope"],
          description: "Scope item is under. Example: 'user'",
          args: { name: "SCOPE", suggestions: ["system", "user"] },
        },
      ],
      args: {
        name: "name",
        description: "Name of the key value pair",
        isVariadic: true,
      },
    },
    {
      name: "delete",
      description: "Delete an existing key value pair",
      parserDirectives: optionsFirst,
      options: [...commonOptions, writeScopeOption, scopedUserOption],
      args: keyNameArg,
    },
    {
      name: "set",
      description: "Set an existing key value pair",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-e", "--encrypt"],
          description: "Encrypt value before saving",
          exclusiveOn: ["--encrypted"],
        },
        {
          name: "--encrypted",
          description:
            "Value provided is already encrypted with the instance crypto key and should be stored as-is",
          exclusiveOn: ["-e", "--encrypt"],
        },
        {
          name: ["-l", "--ttl"],
          description: "TTL (in seconds) for this value",
          args: { name: "TTL" },
        },
        writeScopeOption,
        scopedUserOption,
      ],
      args: [
        keyNameArg,
        {
          name: "value",
          description: "Value paired with the key",
          isOptional: true,
        },
      ],
    },
    {
      name: "load",
      description: "Load a list of key value pairs from file",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-c", "--convert"],
          description:
            "Convert non-string types (hash, array, boolean, int, float) to a JSON string before loading it into the datastore",
        },
      ],
      args: fileArg,
    },
    {
      name: "delete_by_prefix",
      description: "Delete KeyValue pairs which match the provided prefix",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-p", "--prefix"],
          description: "Name prefix (e.g. twitter.TwitterSensor:)",
          args: { name: "PREFIX" },
          isRequired: true,
        },
      ],
    },
  ],
};

const packSubcommand: Fig.Subcommand = {
  name: "pack",
  description:
    "A group of related integration resources: actions, rules, and sensors",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of packs",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption],
    },
    {
      name: "get",
      description: "Get information about an installed pack",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: { name: "ref", description: "Reference or ID", isVariadic: true },
    },
    {
      name: "show",
      description: "Get information about an available pack from the index",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: { name: "pack", description: "Name of the pack to show" },
    },
    {
      name: "search",
      description:
        "Search the index for a pack with any attribute matching the query",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption],
      args: { name: "query", description: "Search query" },
    },
    {
      name: "install",
      description: "Install new packs",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        widthOption,
        packAttrOption,
        packDetailOption,
        { name: "--force", description: "Force pack installation" },
        {
          name: "--skip-dependencies",
          description: "Skip pack dependency installation",
        },
      ],
      args: {
        name: "pack",
        description: "Name of the packs in Exchange, or a git repo URL",
        isVariadic: true,
      },
    },
    {
      name: "remove",
      description: "Remove packs",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        widthOption,
        packAttrOption,
        packDetailOption,
      ],
      args: {
        name: "pack",
        description: "Name of the packs to remove",
        isVariadic: true,
      },
    },
    {
      name: "register",
      description: "Register pack(s): sync all file changes with DB",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: "--types",
          description: "Types of content to register",
          args: { name: "TYPES", isVariadic: true },
        },
      ],
      args: {
        name: "pack",
        description: "Name of the pack(s) to register",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "config",
      description: "Configure a pack based on config schema",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: { name: "name", description: "Name of the pack(s) to configure" },
    },
  ],
};

const policySubcommand: Fig.Subcommand = {
  name: "policy",
  description: "Policy that is enforced on a resource",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of policies",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        packOption,
        {
          name: ["-r", "--resource-ref"],
          description: "Return policies for the resource ref",
          args: { name: "RESOURCE_REF" },
        },
        {
          name: ["-pt", "--policy-type"],
          description: "Return policies of the policy type",
          args: { name: "POLICY_TYPE" },
        },
      ],
    },
    {
      name: "get",
      description: "Get individual policy",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "create",
      description: "Create a new policy",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing policy",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [refOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing policy",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
  ],
};

const policyTypeSubcommand: Fig.Subcommand = {
  name: "policy-type",
  description: "Type of policy that can be applied to resources",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of policy types",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        {
          name: ["-r", "--resource-type"],
          description: "Return policy types for the resource type",
          args: { name: "RESOURCE_TYPE" },
        },
      ],
    },
    {
      name: "get",
      description: "Get individual policy type",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
  ],
};

const ruleSubcommand: Fig.Subcommand = {
  name: "rule",
  description:
    "A specification to invoke an 'action' on a 'trigger' selectively based on some criteria",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent rules",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        lastOption("rules"),
        {
          name: "--iftt",
          description: "Show trigger and action in display list",
        },
        packOption,
        {
          name: ["-c", "--action"],
          description: "Action reference to filter the list",
          args: { name: "ACTION" },
        },
        {
          name: ["-g", "--trigger"],
          description: "Trigger type reference to filter the list",
          args: { name: "TRIGGER" },
        },
        {
          name: "--enabled",
          description: "Show rules that are enabled",
          exclusiveOn: ["--disabled"],
        },
        {
          name: "--disabled",
          description: "Show rules that are disabled",
          exclusiveOn: ["--enabled"],
        },
      ],
    },
    {
      name: "get",
      description: "Get individual rule",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "create",
      description: "Create a new rule",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing rule",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [refOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing rule",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "enable",
      description: "Enable an existing rule",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "disable",
      description: "Disable an existing rule",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
  ],
};

const webhookSubcommand: Fig.Subcommand = {
  name: "webhook",
  description: "Webhooks",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of webhooks",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption, packOption],
    },
    {
      name: "get",
      description: "Get individual webhook",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: { name: "url", description: "URL", isVariadic: true },
    },
  ],
};

const timerSubcommand: Fig.Subcommand = {
  name: "timer",
  description: "Timers",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of timers",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrListOption,
        widthOption,
        {
          name: ["-ty", "--timer-type"],
          description:
            "List timers type, example: 'core.st2.IntervalTimer', 'core.st2.DateTimer', 'core.st2.CronTimer'",
          args: {
            name: "TIMER_TYPE",
            suggestions: [
              "core.st2.IntervalTimer",
              "core.st2.DateTimer",
              "core.st2.CronTimer",
            ],
          },
        },
      ],
    },
    {
      name: "get",
      description: "Get individual timer",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: nameOrIdArgVariadic,
    },
  ],
};

const runnerSubcommand: Fig.Subcommand = {
  name: "runner",
  description: "Runner is a type of handler for a specific class of actions",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of runners",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption],
    },
    {
      name: "get",
      description: "Get individual runner",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: nameOrIdArgVariadic,
    },
    {
      name: "enable",
      description: "Enable an existing runner",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: nameOrIdArg,
    },
    {
      name: "disable",
      description: "Disable an existing runner",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: nameOrIdArg,
    },
  ],
};

const sensorSubcommand: Fig.Subcommand = {
  name: "sensor",
  description:
    "An adapter which allows you to integrate StackStorm with external system",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of sensortypes",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption, packOption],
    },
    {
      name: "get",
      description: "Get individual sensor",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "enable",
      description: "Enable an existing sensor",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "disable",
      description: "Disable an existing sensor",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
  ],
};

const traceSubcommand: Fig.Subcommand = {
  name: "trace",
  description:
    "A group of executions, rules and triggerinstances that are related",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent traces",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        lastOption("traces"),
        {
          name: ["-s", "--sort"],
          description:
            "Sort traces by start timestamp, asc|ascending (earliest first) or desc|descending (latest first)",
          args: {
            name: "SORT_ORDER",
            suggestions: ["desc", "descending", "asc", "ascending"],
          },
        },
        {
          name: ["-c", "--trace-tag"],
          description: "Trace-tag to filter the list",
          args: { name: "TRACE_TAG" },
          exclusiveOn: [
            "-e",
            "--execution",
            "-r",
            "--rule",
            "-g",
            "--trigger-instance",
          ],
        },
        {
          name: ["-e", "--execution"],
          description: "Execution to filter the list",
          args: { name: "EXECUTION" },
          exclusiveOn: [
            "-c",
            "--trace-tag",
            "-r",
            "--rule",
            "-g",
            "--trigger-instance",
          ],
        },
        {
          name: ["-r", "--rule"],
          description: "Rule to filter the list",
          args: { name: "RULE" },
          exclusiveOn: [
            "-c",
            "--trace-tag",
            "-e",
            "--execution",
            "-g",
            "--trigger-instance",
          ],
        },
        {
          name: ["-g", "--trigger-instance"],
          description: "TriggerInstance to filter the list",
          args: { name: "TRIGGER_INSTANCE" },
          exclusiveOn: [
            "-c",
            "--trace-tag",
            "-e",
            "--execution",
            "-r",
            "--rule",
          ],
        },
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual trace",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        attrGetOption,
        {
          name: ["-e", "--execution"],
          description: "Execution to show causation chain",
          args: { name: "EXECUTION" },
          exclusiveOn: ["-r", "--rule", "-g", "--trigger-instance"],
        },
        {
          name: ["-r", "--rule"],
          description: "Rule to show causation chain",
          args: { name: "RULE" },
          exclusiveOn: ["-e", "--execution", "-g", "--trigger-instance"],
        },
        {
          name: ["-g", "--trigger-instance"],
          description: "TriggerInstance to show causation chain",
          args: { name: "TRIGGER_INSTANCE" },
          exclusiveOn: ["-e", "--execution", "-r", "--rule"],
        },
        { name: "--show-executions", description: "Only show executions" },
        { name: "--show-rules", description: "Only show rules" },
        {
          name: "--show-trigger-instances",
          description: "Only show trigger instances",
        },
        {
          name: ["-n", "--hide-noop-triggers"],
          description: "Hide noop trigger instances",
        },
      ],
      args: idArgVariadic,
    },
  ],
};

const triggerSubcommand: Fig.Subcommand = {
  name: "trigger",
  description:
    "An external event that is mapped to a st2 input. It is the st2 invocation point",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of triggers",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrListOption, widthOption, packOption],
    },
    {
      name: "get",
      description: "Get individual trigger",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: refOrIdArgVariadic,
    },
    {
      name: "create",
      description: "Create a new trigger",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing trigger",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [refOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing trigger",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: refOrIdArg,
    },
    {
      name: "getspecs",
      description: "Return Trigger Specifications of a Trigger",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: {
        name: "ref",
        description: "Fully qualified name (pack.trigger_name) of the trigger",
        isOptional: true,
      },
    },
  ],
};

const triggerInstanceSubcommand: Fig.Subcommand = {
  name: "trigger-instance",
  description: "Actual instances of triggers received by st2",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent triggerinstances",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        lastOption("triggerinstances"),
        {
          name: "--trigger",
          description: "Trigger reference to filter the list",
          args: { name: "TRIGGER" },
        },
        timestampOption("gt", "trigger instances", "occurrence_time"),
        timestampOption("lt", "trigger instances", "timestamp"),
        {
          name: "--status",
          description:
            "Can be pending, processing, processed or processing_failed",
          args: {
            name: "STATUS",
            suggestions: [
              "pending",
              "processing",
              "processed",
              "processing_failed",
            ],
          },
        },
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual trigger instance",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: idArgVariadic,
    },
    {
      name: "re-emit",
      description: "Re-emit a particular trigger instance",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: {
        name: "id",
        description: "ID of trigger instance to re-emit",
        isOptional: true,
      },
    },
  ],
};

const ruleEnforcementSubcommand: Fig.Subcommand = {
  name: "rule-enforcement",
  description: "Models that represent enforcement of rules",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the 50 most recent rule enforcements",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        lastOption("rule enforcements"),
        {
          name: "--trigger-instance",
          description: "Trigger instance id to filter the list",
          args: { name: "TRIGGER_INSTANCE" },
        },
        {
          name: "--execution",
          description: "Execution id to filter the list",
          args: { name: "EXECUTION" },
        },
        {
          name: "--rule",
          description: "Rule ref to filter the list",
          args: { name: "RULE" },
        },
        timestampOption("gt", "enforcements", "enforced_at"),
        timestampOption("lt", "enforcements", "enforced_at"),
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual rule enforcement",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: idArgVariadic,
    },
    {
      name: "create",
      description: "Create a new rule enforcement",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: fileArg,
    },
    {
      name: "update",
      description: "Update an existing rule enforcement",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: [nameOrIdArg, fileArg],
    },
    {
      name: "delete",
      description: "Delete an existing rule enforcement",
      parserDirectives: optionsFirst,
      options: commonOptions,
      args: nameOrIdArg,
    },
  ],
};

const workflowSubcommand: Fig.Subcommand = {
  name: "workflow",
  description:
    "Commands for workflow authoring related operations. Only orquesta workflows are supported",
  options: [helpOption],
  subcommands: [
    {
      name: "inspect",
      description:
        "Inspect workflow definition and return the list of errors if any",
      parserDirectives: optionsFirst,
      options: [
        helpOption,
        {
          name: "--file",
          description: "Local file path to the workflow definition",
          args: { name: "FILE", template: "filepaths" },
          exclusiveOn: ["--action"],
        },
        {
          name: "--action",
          description:
            "Reference name for the registered action. This option works only if the file referenced by the entry point is installed locally under /opt/stackstorm/packs",
          args: { name: "ACTION" },
          exclusiveOn: ["--file"],
        },
      ],
    },
  ],
};

const serviceRegistrySubcommand: Fig.Subcommand = {
  name: "service-registry",
  description: "Service registry group and membership related commands",
  options: [helpOption],
  subcommands: [
    {
      name: "group",
      description: "Manage service registry groups",
      options: [helpOption],
      subcommands: [
        {
          name: "list",
          description: "Get the list of groups",
          parserDirectives: optionsFirst,
          options: [...commonOptions, attrListOption, widthOption],
        },
      ],
    },
    {
      name: "member",
      description: "Manage service registry members",
      options: [helpOption],
      subcommands: [
        {
          name: "list",
          description: "Get the list of group members",
          parserDirectives: optionsFirst,
          options: [
            ...commonOptions,
            attrListOption,
            widthOption,
            {
              name: "--group-id",
              description:
                "If provided only retrieve members for the specified group",
              args: { name: "GROUP_ID" },
            },
          ],
        },
      ],
    },
  ],
};

const roleSubcommand: Fig.Subcommand = {
  name: "role",
  description: "RBAC roles",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the roles",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        { name: ["-s", "--system"], description: "Only display system roles" },
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual role",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: idArgVariadic,
    },
  ],
};

const roleAssignmentSubcommand: Fig.Subcommand = {
  name: "role-assignment",
  description: "RBAC role assignments",
  options: [helpOption],
  subcommands: [
    {
      name: "list",
      description: "Get the list of the role assignments",
      parserDirectives: optionsFirst,
      options: [
        ...commonOptions,
        {
          name: ["-r", "--role"],
          description: "Role to filter on",
          args: { name: "ROLE" },
        },
        {
          name: ["-u", "--user"],
          description: "User to filter on",
          args: { name: "USER" },
        },
        {
          name: ["-s", "--source"],
          description: "Source to filter on",
          args: { name: "SOURCE" },
        },
        {
          name: "--remote",
          description: "Only display remote role assignments",
        },
        attrListOption,
        widthOption,
      ],
    },
    {
      name: "get",
      description: "Get individual role assignment",
      parserDirectives: optionsFirst,
      options: [...commonOptions, attrGetOption],
      args: idArgVariadic,
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "st2",
  description: "CLI for StackStorm event-driven automation platform",
  subcommands: [
    runSubcommand,
    actionSubcommand,
    actionAliasSubcommand,
    authSubcommand,
    loginSubcommand,
    whoamiSubcommand,
    apiKeySubcommand,
    executionSubcommand,
    inquirySubcommand,
    keySubcommand,
    packSubcommand,
    policySubcommand,
    policyTypeSubcommand,
    ruleSubcommand,
    webhookSubcommand,
    timerSubcommand,
    runnerSubcommand,
    sensorSubcommand,
    traceSubcommand,
    triggerSubcommand,
    triggerInstanceSubcommand,
    ruleEnforcementSubcommand,
    workflowSubcommand,
    serviceRegistrySubcommand,
    roleSubcommand,
    roleAssignmentSubcommand,
  ],
  options: [
    { ...helpOption, priority: 60 },
    {
      name: "--version",
      description: "Show program's version number and exit",
    },
    {
      name: "--url",
      description:
        "Base URL for the API servers. Assumes all servers use the same base URL and default ports are used. Get ST2_BASE_URL from the environment variables by default",
      args: { name: "BASE_URL" },
    },
    {
      name: "--auth-url",
      description:
        "URL for the authentication service. Get ST2_AUTH_URL from the environment variables by default",
      args: { name: "AUTH_URL" },
    },
    {
      name: "--api-url",
      description:
        "URL for the API server. Get ST2_API_URL from the environment variables by default",
      args: { name: "API_URL" },
    },
    {
      name: "--stream-url",
      description:
        "URL for the stream endpoint. Get ST2_STREAM_URL from the environment variables by default",
      args: { name: "STREAM_URL" },
    },
    {
      name: "--api-version",
      description:
        "API version to use. Get ST2_API_VERSION from the environment variables by default",
      args: { name: "API_VERSION" },
    },
    {
      name: "--cacert",
      description:
        "Path to the CA cert bundle for the SSL endpoints. Get ST2_CACERT from the environment variables by default. If this is not provided, then SSL cert will not be verified",
      args: { name: "CACERT", template: "filepaths" },
    },
    {
      name: "--basic-auth",
      description:
        "Optional additional basic auth credentials used to authenticate",
      args: { name: "BASIC_AUTH" },
    },
    {
      name: "--config-file",
      description: "Path to the CLI config file",
      args: { name: "CONFIG_FILE", template: "filepaths" },
    },
    {
      name: "--print-config",
      description: "Parse the config file and print the values",
    },
    {
      name: "--skip-config",
      description: "Don't parse and use the CLI config file",
    },
    { name: "--debug", description: "Enable debug mode" },
  ],
};

export default completionSpec;
