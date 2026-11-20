// SurrealDB v4.0.1 (latest stable git tag v4.0.1 and surrealdb crate 4.0.1, verified 2026-11-20).
// Source: clap definitions of the `surreal` database executable in
// surrealdb/server/src/cli/ and src/dbs/mod.rs at tag v4.0.1 (read statically).
// Omitted on purpose: hidden compatibility stubs (`upgrade`, `extension`/`ext`/
// `module`/`mod`, which only redirect to the separate Surreal CLI launcher, whose
// source is not public) and hidden flags (--no-banner, --key, --strict,
// --durable-sessions, --planner-strategy, --allow/deny-experimental).

const logLevels = ["none", "full", "error", "warn", "info", "debug", "trace"];
const logFormats = ["text", "json"];
const userGroups = ["guest", "record", "system"];

const jsonOption: Fig.Option = {
  name: ["--json", "-j"],
  description: "Emit machine-readable JSON on stdout",
};

const endpointOption = (
  description: string,
  fallback?: string
): Fig.Option => ({
  name: ["--endpoint", "-e"],
  description,
  args: { name: "endpoint", default: fallback },
});

const authOptions: Fig.Option[] = [
  {
    name: ["--username", "--user", "-u"],
    description: "Database authentication username to use when connecting",
    dependsOn: ["--password"],
    args: { name: "username" },
  },
  {
    name: ["--password", "--pass", "-p"],
    description: "Database authentication password to use when connecting",
    dependsOn: ["--username"],
    args: { name: "password" },
  },
  {
    name: ["--token", "-t"],
    description: "Authentication token in JWT format to use when connecting",
    exclusiveOn: ["--username", "--password", "--auth-level"],
    args: { name: "token" },
  },
  {
    name: "--auth-level",
    description: "Level on which the authenticating user is defined",
    dependsOn: ["--username", "--password"],
    args: {
      name: "level",
      default: "root",
      suggestions: ["root", "namespace", "ns", "database", "db"],
    },
  },
];

const selectionOptions: Fig.Option[] = [
  {
    name: ["--namespace", "--ns"],
    description: "The namespace selected for the operation",
    args: { name: "namespace" },
  },
  {
    name: ["--database", "--db"],
    description: "The database selected for the operation",
    args: { name: "database" },
  },
];

// `sql` takes the same pair but both are optional and `--database` needs `--namespace`
const optionalSelectionOptions: Fig.Option[] = [
  {
    name: ["--namespace", "--ns"],
    description: "The selected namespace",
    args: { name: "namespace" },
  },
  {
    name: ["--database", "--db"],
    description: "The selected database",
    dependsOn: ["--namespace"],
    args: { name: "database" },
  },
];

const requiredSelectionOptions = selectionOptions.map((option): Fig.Option => ({
  ...option,
  isRequired: true,
}));

const rootUserOptions: Fig.Option[] = [
  {
    name: ["--username", "--user", "-u"],
    description:
      "The username for the initial database root user. Only if no other root user exists",
    dependsOn: ["--password"],
    args: { name: "username" },
  },
  {
    name: ["--password", "--pass", "-p"],
    description:
      "The password for the initial database root user. Only if no other root user exists",
    dependsOn: ["--username"],
    args: { name: "password" },
  },
];

const pathArg: Fig.Arg = {
  name: "path",
  description: "Database path used for storing data",
  isOptional: true,
  default: "memory",
  // ponytail: the two engines in the default build; tikv:// etc. need other builds
  suggestions: ["memory", "surrealkv://"],
};

const duration = (
  flag: string,
  description: string,
  fallback?: string
): Fig.Option => ({
  name: `--${flag}`,
  description,
  args: { name: "duration", default: fallback },
});

// `dependsOn`: the TLS files come as a set (clap `requires_all` group)
const filePathOption = (
  flag: string,
  description: string,
  dependsOn?: string[]
): Fig.Option => ({
  name: `--${flag}`,
  description,
  dependsOn,
  args: { name: "file", template: "filepaths" },
});

// `--allow-<flag> [list]` and `--deny-<flag> [list]`: no list means everything
const capabilityPair = (
  flag: string,
  subject: string,
  items: string,
  suggestions?: string[]
): Fig.Option[] =>
  (["Allow", "Deny"] as const).map((verb) => ({
    name: `--${verb.toLowerCase()}-${flag}`,
    description: `${verb} ${subject} except those specifically ${
      verb === "Allow" ? "denied" : "allowed"
    }, or only a comma-separated list of ${items}`,
    args: { name: items, isOptional: true, suggestions },
  }));

const capabilityOptions: Fig.Option[] = [
  {
    name: ["--allow-all", "-A"],
    description:
      "Allow all capabilities except for those more specifically denied",
    exclusiveOn: ["--deny-all"],
  },
  {
    name: ["--deny-all", "-D"],
    description:
      "Deny all capabilities except for those more specifically allowed",
    exclusiveOn: ["--allow-all"],
  },
  {
    name: "--allow-scripting",
    description: "Allow execution of embedded scripting functions",
    exclusiveOn: ["--allow-all", "--deny-scripting"],
  },
  {
    name: "--deny-scripting",
    description: "Deny execution of embedded scripting functions",
    exclusiveOn: ["--deny-all", "--allow-scripting"],
  },
  {
    name: "--allow-guests",
    description: "Allow guest users to execute queries",
    exclusiveOn: ["--allow-all", "--deny-guests"],
  },
  {
    name: "--deny-guests",
    description: "Deny guest users to execute queries",
    exclusiveOn: ["--deny-all", "--allow-guests"],
  },
  ...capabilityPair("funcs", "execution of all functions", "function names"),
  ...capabilityPair(
    "arbitrary-query",
    "arbitrary queries by all user groups",
    "user groups",
    userGroups
  ),
  {
    name: "--allow-eval-query",
    description:
      "Allow the eval::* functions to be invoked by certain user groups. Denied for everyone by default, even under --allow-all",
    args: { name: "user groups", isOptional: true, suggestions: userGroups },
  },
  {
    name: "--deny-eval-query",
    description:
      "Deny the eval::* functions for certain user groups except when specifically allowed",
    args: { name: "user groups", isOptional: true, suggestions: userGroups },
  },
  ...capabilityPair(
    "net",
    "all outbound network connections",
    "network targets"
  ),
  ...capabilityPair("rpc", "all RPC methods", "RPC methods"),
  ...capabilityPair("http", "all HTTP routes", "HTTP routes"),
  ...capabilityPair("mcp", "all MCP tools", "MCP tool names"),
];

// Shared by `start` and `mcp`
const dbsOptions: Fig.Option[] = [
  duration(
    "query-timeout",
    "The maximum duration that a set of statements can run for"
  ),
  duration(
    "transaction-timeout",
    "The maximum duration that any single transaction can run for"
  ),
  duration(
    "startup-operation-timeout",
    "The maximum duration that each built-in startup datastore operation can retry for",
    "60s"
  ),
  {
    name: "--unauthenticated",
    description: "Whether to allow unauthenticated access",
  },
  ...capabilityOptions,
  {
    name: "--temporary-directory",
    description: "Sets the directory for storing temporary database files",
    args: { name: "directory", template: "folders" },
  },
  filePathOption(
    "import-file",
    "Path to a SurrealQL file that will be imported when starting the server"
  ),
  duration(
    "slow-log-threshold",
    "The minimum execution time to trigger slow query logging"
  ),
  {
    name: "--slow-log-param-allow",
    description:
      "A comma-separated list of parameter names to include in the params of slow query logs",
    args: { name: "params" },
  },
  {
    name: "--slow-log-param-deny",
    description:
      "A comma-separated list of parameter names to leave out of the params of slow query logs, even if they are also allowed",
    args: { name: "params" },
  },
  {
    name: "--default-namespace",
    description: "The default namespace for a new instance",
    exclusiveOn: ["--no-defaults"],
    args: { name: "namespace" },
  },
  {
    name: "--default-database",
    description: "The default database for a new instance",
    exclusiveOn: ["--no-defaults"],
    args: { name: "database" },
  },
  {
    name: "--no-defaults",
    description: "Whether to disable default namespace and database creation",
    exclusiveOn: ["--default-namespace", "--default-database"],
  },
  {
    name: "--lazy-surrealism",
    description:
      "Load Surrealism extensions lazily on first use instead of eagerly at startup",
  },
];

const exportSection = (flag: string, what: string): Fig.Option => ({
  name: `--${flag}`,
  description: `Whether ${what} should be exported`,
  args: { name: "bool", isOptional: true, suggestions: ["true", "false"] },
});

const completionSpec: Fig.Spec = {
  name: "surreal",
  description:
    "Start, query, import and export SurrealDB from the command line",
  subcommands: [
    {
      name: "start",
      description: "Start the database server",
      args: pathArg,
      options: [
        duration(
          "node-membership-refresh-interval",
          "The interval at which to refresh node registration information",
          "3s"
        ),
        duration(
          "node-membership-check-interval",
          "The interval at which to process and archive inactive nodes",
          "15s"
        ),
        duration(
          "node-membership-cleanup-interval",
          "The interval at which to process and cleanup archived nodes",
          "300s"
        ),
        duration(
          "changefeed-gc-interval",
          "The interval at which to perform changefeed garbage collection",
          "30s"
        ),
        // No upstream help text for the next one, async-event and reclaim
        duration(
          "index-compaction-interval",
          "The interval at which to compact indexes",
          "5s"
        ),
        duration(
          "graph-fold-interval",
          "The interval at which to fold graph adjacency keys into packed blocks",
          "5s"
        ),
        duration(
          "index-build-resume-interval",
          "The interval at which to resume index builds left unfinished by a crashed node (0 to disable)",
          "30s"
        ),
        duration(
          "async-event-interval",
          "The interval at which to process asynchronous events",
          "5s"
        ),
        duration(
          "reclaim-interval",
          "The interval at which to reclaim the data of removed resources",
          "60s"
        ),
        duration(
          "reclaim-grace",
          "Minimum age a removed namespace/database/index must reach before its data is physically reclaimed",
          "10m"
        ),
        duration(
          "tikv-gc-interval",
          "The interval at which the storage backend's MVCC garbage collector runs",
          "10m"
        ),
        duration(
          "tikv-gc-lifetime",
          "How far behind the current time the MVCC GC safepoint is allowed to sit",
          "10m"
        ),
        duration(
          "tikv-lock-cleanup-interval",
          "The interval at which stale transactional locks are resolved",
          "60s"
        ),
        duration(
          "durable-session-ttl",
          "How long an attached HTTP RPC session survives without being used",
          "24h"
        ),
        duration(
          "durable-session-gc-interval",
          "The interval at which expired attached HTTP RPC sessions are purged from the datastore (0 to disable)",
          "1h"
        ),
        ...rootUserOptions,
        filePathOption(
          "kvs-ca",
          "Path to the CA file used when connecting to the remote KV store",
          ["--kvs-crt", "--kvs-key"]
        ),
        filePathOption(
          "kvs-crt",
          "Path to the certificate file used when connecting to the remote KV store",
          ["--kvs-ca", "--kvs-key"]
        ),
        filePathOption(
          "kvs-key",
          "Path to the private key file used when connecting to the remote KV store",
          ["--kvs-ca", "--kvs-crt"]
        ),
        filePathOption(
          "web-crt",
          "Path to the certificate file for encrypted client connections",
          ["--web-key"]
        ),
        filePathOption(
          "web-key",
          "Path to the private key file for encrypted client connections",
          ["--web-crt"]
        ),
        {
          name: "--client-ip",
          description: "The method of detecting the client's IP address",
          args: {
            name: "method",
            default: "socket",
            suggestions: [
              { name: "none", description: "Don't use client IP" },
              { name: "socket", description: "Raw socket IP" },
              {
                name: "CF-Connecting-IP",
                description: "Cloudflare connecting IP",
              },
              { name: "Fly-Client-IP", description: "Fly.io client IP" },
              {
                name: "True-Client-IP",
                description: "Akamai, Cloudflare true client IP",
              },
              { name: "X-Real-IP", description: "Nginx real IP" },
              {
                name: "X-Forwarded-For",
                description: "Industry standard header used by many proxies",
              },
              {
                name: "Forwarded",
                description:
                  "RFC 7239 Forwarded header; the first for= parameter is used",
              },
            ],
          },
        },
        {
          name: ["--bind", "-b"],
          description:
            "The hostname or IP address to listen for connections on",
          isRepeatable: true,
          args: { name: "address", default: "127.0.0.1:8000" },
        },
        {
          name: "--no-identification-headers",
          description:
            "Whether to suppress the server name and version headers",
        },
        {
          name: "--allow-origin",
          description:
            "The allowed origins for CORS requests. Defaults to allow all origins",
          isRepeatable: true,
          args: { name: "origins" },
        },
        {
          name: "--cookie-auth",
          description:
            "Issue the access token as an HttpOnly cookie on request, and accept it from the allowed origins",
          dependsOn: ["--allow-origin"],
        },
        {
          name: "--postgres-bind",
          description:
            "The hostname or IP address to listen for Postgres wire protocol connections on",
          args: { name: "address" },
        },
        {
          name: "--mysql-bind",
          description:
            "The hostname or IP address to listen for MySQL wire protocol connections on",
          args: { name: "address" },
        },
        ...dbsOptions,
      ],
    },
    {
      name: "import",
      description: "Import a SurrealQL script into an existing database",
      args: {
        name: "file",
        description: "Path to the SurrealQL file to import",
        template: "filepaths",
      },
      options: [
        endpointOption(
          "Database endpoint to import to",
          "http://localhost:8000"
        ),
        ...authOptions,
        ...requiredSelectionOptions,
      ],
    },
    {
      name: "export",
      description: "Export an existing database as a SurrealQL script",
      args: {
        name: "file",
        description:
          "Path to the SurrealQL file to export. Use dash - to write into stdout",
        isOptional: true,
        default: "-",
        template: "filepaths",
      },
      options: [
        endpointOption(
          "Database endpoint to export from",
          "http://localhost:8000"
        ),
        ...authOptions,
        ...requiredSelectionOptions,
        {
          name: "--only",
          description:
            "Export only the sections named by the flags that follow (the database definition still rides along)",
        },
        exportSection(
          "database-definition",
          "the database's own definition (STRICT, COMMENT and CHANGEFEED)"
        ),
        exportSection("users", "users"),
        exportSection("accesses", "access methods"),
        exportSection("params", "params"),
        exportSection("functions", "functions"),
        exportSection("analyzers", "analyzers"),
        {
          name: "--tables",
          description:
            "Whether tables should be exported, optionally providing a list of tables",
          exclusiveOn: ["--tables-exclude"],
          args: {
            name: "tables",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--tables-exclude",
          description:
            "Comma-separated list of tables to exclude from the export",
          exclusiveOn: ["--tables"],
          args: { name: "tables" },
        },
        exportSection("versions", "versions"),
        exportSection("records", "records"),
        exportSection("apis", "apis"),
        exportSection("buckets", "buckets"),
        exportSection("modules", "modules"),
        exportSection("configs", "configs"),
        exportSection("sequences", "sequences"),
      ],
    },
    {
      name: "version",
      description:
        "Output the command-line tool and remote server version information",
      options: [
        endpointOption("Remote database server url to connect to"),
        jsonOption,
      ],
    },
    {
      name: "sql",
      description: "Start an SQL REPL in your terminal with pipe support",
      options: [
        endpointOption(
          "Remote database server url to connect to",
          "ws://localhost:8000"
        ),
        ...authOptions,
        ...optionalSelectionOptions,
        {
          name: "--pretty",
          description: "Whether database responses should be pretty printed",
        },
        { name: "--json", description: "Whether to emit results in JSON" },
        {
          name: "--multi",
          description: "Whether omitting semicolon causes a newline",
        },
        {
          name: "--hide-welcome",
          description: "Whether to show welcome message",
        },
        ...capabilityOptions,
      ],
    },
    {
      name: "mcp",
      description:
        "Start the MCP server over stdio for AI assistant integration",
      args: pathArg,
      options: [
        {
          name: "--ns",
          description: "The initial namespace to use",
          args: { name: "namespace" },
        },
        {
          name: "--db",
          description: "The initial database to use",
          args: { name: "database" },
        },
        ...rootUserOptions,
        ...dbsOptions,
      ],
    },
    {
      name: ["is-ready", "isready"],
      description:
        "Check if the SurrealDB server is ready to accept connections",
      options: [
        endpointOption(
          "Remote database server url to connect to",
          "ws://localhost:8000"
        ),
        jsonOption,
      ],
    },
    {
      name: "validate",
      description: "Validate SurrealQL query files",
      args: {
        name: "patterns",
        description: "Glob pattern for the files to validate",
        isOptional: true,
        isVariadic: true,
        default: "**/*.surql",
        template: "filepaths",
      },
      options: [
        { name: "--stdin", description: "Read query from standard input" },
        jsonOption,
      ],
    },
    {
      name: "fix",
      description: "Fix database storage issues",
      args: pathArg,
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
        description: "Command to get help for",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
      isPersistent: true,
    },
    { name: ["--version", "-v"], description: "Print version" },
    { ...jsonOption, dependsOn: ["--version"] },
    {
      name: ["--log", "-l"],
      description: "The logging level for the command-line tool",
      isPersistent: true,
      args: { name: "level", default: "info", suggestions: logLevels },
    },
    {
      name: "--log-format",
      description: "The format for terminal log output",
      isPersistent: true,
      args: { name: "format", default: "text", suggestions: logFormats },
    },
    {
      name: "--log-socket",
      description: "Send logs to the specified host:port",
      isPersistent: true,
      args: { name: "host:port" },
    },
    {
      name: "--log-socket-format",
      description: "The format for socket output",
      isPersistent: true,
      args: { name: "format", default: "text", suggestions: logFormats },
    },
    {
      name: "--log-socket-level",
      description: "Override the logging level for unix socket output",
      isPersistent: true,
      args: { name: "level", suggestions: logLevels },
    },
    {
      name: "--log-otel-level",
      description: "Override the logging level for OpenTelemetry output",
      isPersistent: true,
      args: { name: "level", suggestions: logLevels },
    },
    {
      name: "--log-file-enabled",
      description: "Whether to enable log file output",
      isPersistent: true,
    },
    {
      name: "--log-file-level",
      description: "Override the logging level for file output",
      isPersistent: true,
      args: { name: "level", suggestions: logLevels },
    },
    {
      name: "--log-file-path",
      description: "The directory where log files will be stored",
      isPersistent: true,
      args: { name: "directory", default: "logs", template: "folders" },
    },
    {
      name: "--log-file-name",
      description: "The name of the log file",
      isPersistent: true,
      args: { name: "name", default: "surrealdb.log" },
    },
    {
      name: "--log-file-format",
      description: "The format for log file output",
      isPersistent: true,
      args: { name: "format", default: "text", suggestions: logFormats },
    },
    {
      name: "--log-file-rotation",
      description: "The log file rotation interval",
      isPersistent: true,
      args: {
        name: "interval",
        default: "daily",
        suggestions: ["daily", "hourly", "never"],
      },
    },
  ],
};
export default completionSpec;
