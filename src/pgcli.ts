// pgcli v4.7.1 (latest on PyPI, released 2026-09-20, 2026-11-19).
// Source: click option/argument decorators in pgcli/main.py from the 4.7.1 wheel (read from source, the CLI was not run).
const completionSpec: Fig.Spec = {
  name: "pgcli",
  args: [
    {
      name: "database_name or db_url",
      isOptional: true,
    },
    {
      name: "username",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-h", "--host"],
      description: "Host address of the postgres database",
      args: {
        name: "text",
      },
    },
    {
      name: ["-p", "--port"],
      description: "Port number at which the postgres instance is listening",
      args: {
        name: "integer",
      },
    },
    {
      name: ["-U", "--username"],
      description: "Username to connect to the postgres database",
      args: {
        name: "text",
      },
    },
    {
      name: ["-u", "--user"],
      description: "Username to connect to the postgres database",
      args: {
        name: "text",
      },
    },
    {
      name: "--timeout",
      description:
        "Seconds to wait for a connection before giving up (0 waits forever). Overrides the connection string and $PGCONNECT_TIMEOUT",
      args: {
        name: "integer",
      },
    },
    {
      name: ["-W", "--password"],
      description: "Force password prompt",
    },
    {
      name: ["-w", "--no-password"],
      description: "Never prompt for password",
    },
    {
      name: "--single-connection",
      description: "Do not use a separate connection for completions",
    },
    {
      name: ["-v", "--version"],
      description: "Version of pgcli",
    },
    {
      name: ["-d", "--dbname"],
      description: "Database name to connect to",
      args: {
        name: "text",
      },
    },
    {
      name: "--pgclirc",
      description: "Location of pgclirc file",
      args: {
        name: "file",
        template: ["filepaths"],
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-D", "--dsn"],
      description:
        "Use DSN configured into the [alias_dsn] section of pgclirc file",
      args: {
        name: "text",
      },
    },
    {
      name: "--list-dsn",
      description:
        "List of DSN configured into the [alias_dsn] section of pgclirc file",
    },
    {
      name: "--row-limit",
      description:
        "Set threshold for row limit prompt. Use 0 to disable prompt",
      args: {
        name: "integer",
      },
    },
    {
      name: "--application-name",
      description: "Application name for the connection (default: pgcli)",
      args: {
        name: "text",
      },
    },
    {
      name: "--less-chatty",
      description: "Skip intro on startup and goodbye on exit",
    },
    {
      name: ["-t", "--tuples-only"],
      description:
        "Print rows only: no column headers, no status footer and no timing, like psql",
    },
    {
      name: "--prompt",
      description: 'Prompt format (Default: "\\u@\\h:\\d> ")',
      args: {
        name: "text",
      },
    },
    {
      name: "--prompt-dsn",
      description:
        'Prompt format for connections using DSN aliases (Default: "\\u@\\h:\\d> ")',
      args: {
        name: "text",
      },
    },
    {
      name: ["-l", "--list"],
      description: "List available databases, then exit",
    },
    {
      name: "--ping",
      description: "Check database connectivity, then exit",
    },
    {
      name: "--auto-vertical-output",
      description:
        "Automatically switch to vertical output mode if the result is wider than the terminal width",
    },
    {
      name: "--warn",
      description:
        "Warn before running a destructive query: a level, or a comma-separated list of keywords (drop, shutdown, delete, truncate, alter, update, unconditional_update)",
      args: {
        name: "choice",
        suggestions: ["all", "moderate", "off"],
      },
    },
    {
      name: "--ssh-tunnel",
      description:
        "Open an SSH tunnel to the given address and connect to the database from it",
      args: {
        name: "text",
      },
    },
    {
      name: "--log-file",
      description:
        "Write all queries & output into a file, in addition to the normal output destination",
      args: {
        name: "text",
        template: "filepaths",
      },
    },
    {
      name: "--init-command",
      description: "SQL statement to execute after connecting",
      args: {
        name: "text",
      },
    },
    {
      name: ["-c", "--command"],
      description:
        "Run command (SQL or internal) and exit. Multiple -c options are allowed",
      args: {
        name: "text",
      },
      isRepeatable: true,
    },
    {
      name: ["-y", "--yes"],
      description: "Force destructive commands without confirmation prompt",
    },
    {
      name: ["-f", "--file"],
      description:
        "Execute commands from file, then exit. Multiple -f options are allowed",
      args: {
        name: "file",
        template: "filepaths",
      },
      isRepeatable: true,
    },
    {
      name: "--help",
      description: "Show this message and exit",
    },
  ],
};

export default completionSpec;
