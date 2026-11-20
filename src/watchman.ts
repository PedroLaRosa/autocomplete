// Watchman v2026.11.16.00 (GitHub tag facebook/watchman, 2026-11-19). Source: watchman/Options.cpp, watchman/cmds/*.cpp, watchman/listener.cpp and website/docs/cmd/*.md at tag v2026.11.16.00 (read statically, binary not run).
// Internal debug-* test commands (JSON only) are intentionally not listed.
const rootArg: Fig.Arg = {
  name: "path",
  description: "The path to directory",
  template: "folders",
};

const triggerNameArg: Fig.Arg = {
  name: "name",
  description: "The name of the trigger",
};

const stateNameArg: Fig.Arg = {
  name: "name",
  description: "The name of the state",
};

const patternsArg: Fig.Arg = {
  name: "patterns",
  description: "Patterns to match files against",
  isOptional: true,
  isVariadic: true,
};

const logLevelArg: Fig.Arg = {
  name: "level",
  description: "The log level",
  suggestions: ["debug", "error", "off"],
};

const completionSpec: Fig.Spec = {
  name: "watchman",
  description: "A file watching service",
  subcommands: [
    {
      name: "clock",
      description: "Returns the current clock value for a watched root",
      args: rootArg,
    },
    {
      name: "find",
      description:
        "Finds all files that match the optional list of patterns under the specified dir",
      args: [rootArg, patternsArg],
    },
    {
      name: "flush-subscriptions",
      description:
        "This is designed to be used by interactive programs that have a background process or daemon maintaining a subscription to Watchman",
    },
    {
      name: "get-config",
      description: "Returns the .watchmanconfig for the root",
      args: {
        name: "path",
        description: "The path to root",
        template: "folders",
      },
    },
    {
      name: "get-log",
      description: "Returns the path of the log file of the running service",
    },
    {
      name: "get-pid",
      description: "Returns the process ID of the running service",
    },
    {
      name: "get-sockname",
      description: "Get socket path",
    },
    {
      name: "global-log-level",
      description: "Changes the log level of the server log",
      args: logLevelArg,
    },
    {
      name: "list-capabilities",
      description:
        "Returns the full list of supported capabilities offered by the watchman server",
    },
    {
      name: "log",
      description: "Generates a log line in the watchman log",
      args: [
        logLevelArg,
        {
          name: "text",
          description: "The text to log",
        },
      ],
    },
    {
      name: "log-level",
      description:
        "Changes the log level of your connection to the watchman service",
      args: logLevelArg,
    },
    {
      name: "query",
      description: "Executes a query against the specified root",
    },
    {
      name: "shutdown-server",
      description:
        "This causes your watchman service to exit with a normal status code",
    },
    {
      name: "since",
      description:
        "Finds all files that were modified since the specified clockspec that match the optional list of patterns",
      args: [
        rootArg,
        {
          name: "clockspec",
          description:
            "A unix timestamp, a clock id (c:123:234) or a named cursor (n:name)",
        },
        patternsArg,
      ],
    },
    {
      name: "state-enter",
      description:
        "This causes a watch to be marked as being in a particular named state",
      args: [rootArg, stateNameArg],
    },
    {
      name: "state-leave",
      description:
        "This causes a watch to no longer be marked as being in a particular named state",
      args: [rootArg, stateNameArg],
    },
    {
      name: "subscribe",
      description:
        "Subscribes to changes against a specified root and requests that they be sent to the client via its connection",
    },
    {
      name: "trigger",
      description: "This will create or replace a trigger",
      args: [rootArg, triggerNameArg, patternsArg],
    },
    {
      name: "trigger-del",
      description:
        "Deletes a named trigger from the list of registered triggers",
      args: [rootArg, triggerNameArg],
    },
    {
      name: "trigger-list",
      description:
        "Returns the set of registered triggers associated with a root directory",
      args: rootArg,
    },
    {
      name: "unsubscribe",
      description: "Cancels a named subscription against the specified root",
      args: [
        rootArg,
        {
          name: "name",
          description: "The name of the subscription",
        },
      ],
    },
    {
      name: "version",
      description:
        "The version and build information for the currently running watchman service",
    },
    {
      name: "watch",
      description:
        "Deprecated. Requests that the specified dir is watched for changes. Use watch-project instead",
      deprecated: true,
      args: rootArg,
    },
    {
      name: "watch-del",
      description: "Removes a watch and any associated triggers",
      args: rootArg,
    },
    {
      name: "watch-del-all",
      description: "Removes all watches and associated triggers",
    },
    {
      name: "watch-list",
      description: "Returns a list of watched dirs",
    },
    {
      name: "watch-project",
      description:
        "Requests that the project containing the requested dir is watched for changes",
      args: rootArg,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show this help",
    },
    {
      name: "--inetd",
      description: "Spawning from an inetd style supervisor",
    },
    {
      name: ["-S", "--no-site-spawner"],
      description: "Don't use the site or system spawner",
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
    {
      name: ["-U", "--sockname"],
      description:
        "Deprecated. Specify alternate sockname. Use `--unix-listener-path` instead",
      deprecated: true,
      args: {
        name: "path",
        description: "The alternate sockname",
        template: "filepaths",
      },
    },
    {
      name: "--named-pipe-path",
      description: "Specify alternate named pipe path",
      args: {
        name: "path",
        description: "The alternate named pipe path",
      },
    },
    {
      name: ["-u", "--unix-listener-path"],
      description: "Specify alternate unix domain socket path",
      args: {
        name: "path",
        description: "The alternate unix domain socket path",
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--logfile"],
      description: "Specify path to logfile ('-' = stdout and stderr)",
      args: {
        name: "path",
        description: "The path to logfile",
        template: "filepaths",
      },
    },
    {
      name: "--log-level",
      description: "Set the log level (0 = off, default is 1, verbose = 2)",
      args: {
        name: "level",
        description: "The log level",
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "--pidfile",
      description: "Specify path to pidfile",
      args: {
        name: "path",
        description: "The path to pidfile",
        template: "filepaths",
      },
    },
    {
      name: ["-p", "--persistent"],
      description: "Persist and wait for further responses",
    },
    {
      name: ["-n", "--no-save-state"],
      description: "Don't save state between invocations",
    },
    {
      name: "--statefile",
      description: "Specify path to file to hold watch and trigger state",
      args: {
        name: "path",
        description: "The path to file to hold watch and trigger state",
        template: "filepaths",
      },
    },
    {
      name: ["-j", "--json-command"],
      description:
        "Instead of parsing CLI arguments, take a single json object from stdin",
    },
    {
      name: "--output-encoding",
      description: "CLI output encoding",
      args: {
        name: "encoding",
        description: "The output encoding",
        default: "json",
        suggestions: ["json", "bser"],
      },
    },
    {
      name: "--server-encoding",
      description: "CLI<->server encoding",
      args: {
        name: "encoding",
        description: "The server encoding",
        default: "bser",
        suggestions: ["bser", "json"],
      },
    },
    {
      name: ["-f", "--foreground"],
      description: "Run the service in the foreground",
    },
    {
      name: "--pretty",
      description: "Force pretty output, even if stdout isn't a TTY",
    },
    {
      name: "--no-pretty",
      description: "Don't pretty print JSON",
    },
    {
      name: "--no-spawn",
      description: "Don't try to start the service if it is not available",
    },
    {
      name: "--no-local",
      description:
        "When no-spawn is enabled, don't try to handle request in client mode if service is unavailable",
    },
    {
      name: "--test-state-dir",
      description: "State directory, for testing only",
      hidden: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
  ],
};

export default completionSpec;
