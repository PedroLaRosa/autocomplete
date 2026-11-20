// PM2 v7.1.2 (npm latest, released 2026-11-03; synced 2026-11-19).
// Source: read statically from the published npm package (lib/binaries/CLI.js
// commander definitions, lib/API/Startup.js, Extra.js, LogManagement.js,
// pm2-plus/PM2IO.js, lib/completion.js, CHANGELOG.md). The binary was not run.
// Not covered: the separate pm2-runtime, pm2-dev and pm2-docker binaries.
// Commands absent from 7.1.2 CLI.js and removed here: snapshot, profile,
// gracefulReload, web, gc, interact (register is now an alias of plus).
import { filepaths } from "@tabsmith/autocomplete-generators";

const generators: Record<string, Fig.Generator> = {
  jsonFileGenerator: filepaths({ extensions: ["json"] }),
};

const appArg: Fig.Arg = {
  name: "app name",
};

const keyArg: Fig.Arg = {
  name: "key",
};

const nameArg: Fig.Arg = {
  name: "name",
};

const numberArg: Fig.Arg = {
  name: "number",
};

const delayArg: Fig.Arg = {
  name: "delay",
};

const pathArg: Fig.Arg = {
  name: "path",
  template: "filepaths",
};

const infoNodeOption: Fig.Option = {
  name: "--info-node",
  description: "Set url info node",
  args: {
    name: "url",
    isOptional: true,
  },
};

const linesOption: Fig.Option = {
  name: "--lines",
  description: "Number of log lines to display per process (default: 200)",
  args: numberArg,
};

const processArg: Fig.Arg = {
  name: "id|name|namespace|all|json|stdin",
  isVariadic: true,
};

const startupPlatforms = [
  "systemd",
  "upstart",
  "systemv",
  "openrc",
  "launchd",
  "rcd",
  "rcd-openbsd",
  "smf",
];

const platformArg: Fig.Arg = {
  name: "platform",
  isOptional: true,
  suggestions: [
    ...startupPlatforms,
    "ubuntu",
    "centos",
    "arch",
    "oracle",
    "amazon",
    "macos",
    "freebsd",
    "openbsd",
    "solaris",
  ],
};

const unstartupPlatformArg: Fig.Arg = {
  name: "platform",
  isOptional: true,
  suggestions: startupPlatforms,
};

const jsonFileArg: Fig.Arg = {
  name: "json",
  generators: generators.jsonFileGenerator,
};

// start, stop and restart document --watch differently (see commander
// definitions); only the root/start form takes optional paths
const watchOption = (description: string, withPaths = false): Fig.Option => ({
  name: "--watch",
  description,
  ...(withPaths && {
    isRepeatable: true,
    args: {
      name: "paths",
      isOptional: true,
      template: "folders",
    },
  }),
});

// Global options defined on the root commander program: commander 2.x accepts
// them before or after any subcommand
const sharedOptions: Fig.Option[] = [
  {
    name: ["-V", "--version"],
    description: "Outputs the version number",
  },
  {
    name: "-v",
    description: "Gets version",
  },
  {
    name: ["-s", "--silent"],
    description: "Hides all messages",
  },
  {
    name: "--ext",
    description: "Watch only this file extensions",
    args: {
      name: "extensions",
    },
  },
  {
    name: ["-m", "--mini-list"],
    description: "Displays a compacted list without formatting",
  },
  {
    name: ["-f", "--force"],
    description: "Forces actions",
  },
  {
    name: "--disable-logs",
    description: "Do not write logs",
  },
  {
    name: ["-n", "--name"],
    description: "Sets a name for the process in the process list",
    args: nameArg,
  },
  {
    name: ["-i", "--instances"],
    description:
      "Launches [number] instances (for networked app)(load balanced)",
    args: {
      ...numberArg,
      suggestions: ["max"],
    },
  },
  {
    name: "--parallel",
    description: "Number of parallel actions (for restart/reload)",
    args: numberArg,
  },
  {
    name: "--shutdown-with-message",
    description:
      "Shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT)",
  },
  {
    name: ["-l", "--log"],
    description: "Specifies entire log file (error and out are both included)",
    args: {
      ...pathArg,
      isOptional: true,
    },
  },
  {
    name: ["-o", "--output"],
    description: "Specifies out log file",
    args: pathArg,
  },
  {
    name: ["-e", "--error"],
    description: "Specifies error log file",
    args: pathArg,
  },
  {
    name: ["-p", "--pid"],
    description: "Specify pid file",
    args: {
      name: "pid",
      template: "filepaths",
    },
  },
  {
    name: ["-k", "--kill-timeout"],
    description: "Delays before sending final SIGKILL signal to process",
    args: delayArg,
  },
  {
    name: "--listen-timeout",
    description: "Listen timeout on application reload",
    args: delayArg,
  },
  {
    name: "--max-memory-restart",
    description:
      "Restart the app if an amount of memory is exceeded (in bytes, or with a K, M or G suffix such as 100M)",
    args: {
      name: "memory",
    },
  },
  {
    name: "--restart-delay",
    description: "Specify a delay between restarts (in milliseconds)",
    args: delayArg,
  },
  {
    name: "--exp-backoff-restart-delay",
    description:
      "Specify a delay between restarts (in milliseconds) that grows exponentially",
    args: delayArg,
  },
  {
    name: "--env",
    description:
      "Specify which set of environment variables from ecosystem file must be injected",
    args: {
      name: "Environment Name",
    },
  },
  {
    name: "--filter-env",
    description:
      "Filter out outgoing global values that contain provided strings (alone: drop all but PATH, HOME...)",
    isRepeatable: true,
    args: {
      name: "envs",
      isOptional: true,
    },
  },
  {
    name: "--log-type",
    description: "Specify log output style (raw by default, json optional)",
    args: {
      name: "type",
      default: "raw",
      suggestions: ["raw", "json"],
    },
  },
  {
    name: "--time",
    description: "Enable time logging",
  },
  {
    name: ["-x", "--execute-command"],
    description: "Execute a program using fork system",
  },
  {
    name: "--max-restarts",
    description: "Only restart the script COUNT times",
    args: {
      name: "Count",
      isOptional: true,
    },
  },
  {
    name: ["-u", "--user"],
    description: "Defines user when generating startup script",
    args: {
      name: "username",
    },
  },
  {
    name: "--uid",
    description: "Runs target script with <uid> rights",
    args: {
      name: "uid",
    },
  },
  {
    name: "--gid",
    description: "Runs target script with <gid> rights",
    args: {
      name: "gid",
    },
  },
  {
    name: "--namespace",
    description: "Start application within specified namespace",
    args: {
      name: "ns",
    },
  },
  {
    name: "--cwd",
    description: "Runs target script from path <cwd>",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--hp",
    description: "Defines home path when generating startup script",
    args: {
      name: "home path",
      template: "folders",
    },
  },
  {
    name: "--wait-ip",
    description:
      "Overrides systemd script to wait for full internet connectivity to launch pm2",
  },
  {
    name: "--service-name",
    description: "Defines service name when generating startup script",
    args: nameArg,
  },
  {
    name: ["-c", "--cron"],
    description: "Restarts a running process based on a cron pattern",
    args: {
      name: "Cron Pattern",
    },
  },
  {
    name: "--cron-restart",
    description: "(Alias) restarts a running process based on a cron pattern",
    args: {
      name: "Cron Pattern",
    },
  },
  {
    name: ["-w", "--write"],
    description: "Writes configuration in local folder",
  },
  {
    name: "--interpreter",
    description:
      "Set a specific interpreter to use for executing app, default: node",
    args: {
      name: "interpreter",
    },
  },
  {
    name: "--interpreter-args",
    description:
      "Set arguments to pass to the interpreter (alias of --node-args)",
    args: {
      name: "Arguments",
    },
  },
  {
    name: "--log-date-format",
    description: "Adds custom prefix timestamp to logs",
    args: {
      name: "Date Format",
    },
  },
  {
    name: "--no-daemon",
    description:
      "Runs pm2 daemon in the foreground if it doesn't exist already",
  },
  {
    name: ["-a", "--update-env"],
    description: "Updates environment on restart/reload (-a <=> apply)",
  },
  { name: "--source-map-support", description: "Force source map support" },
  {
    name: "--only",
    description: "With json declaration, allow to only act on one application",
    args: appArg,
  },
  {
    name: "--disable-source-map-support",
    description: "Disable source map support",
  },
  {
    name: "--wait-ready",
    description: "Asks pm2 to wait for ready event from your app",
  },
  {
    name: "--merge-logs",
    description:
      "Merges logs from different instances but keep error and out separated",
  },
  {
    name: "--ignore-watch",
    description: "List of paths to ignore (name or regex)",
    args: {
      name: "Folder or Files",
      template: ["folders", "filepaths"],
    },
  },
  {
    name: "--watch-delay",
    description:
      "Specify a restart delay after changing files (--watch-delay 4 (in sec) or 4000ms)",
    args: delayArg,
  },
  {
    name: "--node-args",
    description: "Space delimited arguments to pass to node",
    args: {
      name: "Node Args",
      description: "--node-args='--debug=7001 --trace-deprecation'",
    },
  },
  { name: "--no-color", description: "Skip colors" },
  {
    name: "--no-vizion",
    description: "Starts an app without vizion feature (versioning control)",
  },
  {
    name: "--no-autostart",
    description: "Adds an app without automatic start",
  },
  {
    name: "--no-autorestart",
    description: "Starts an app without automatic restart",
  },
  {
    name: "--stop-exit-codes",
    description:
      "Specify a list of exit codes that should skip automatic restart",
    args: {
      name: "exit_codes",
    },
  },
  {
    name: "--no-treekill",
    description: "Only kills the main process, not detached children",
  },
  { name: "--no-pmx", description: "Starts an app without pmx" },
  { name: "--no-automation", description: "Starts an app without pmx" },
  { name: "--trace", description: "Enables transaction tracing with km" },
  {
    name: "--disable-trace",
    description: "Disables transaction tracing with km",
  },
  {
    name: "--attach",
    description: "Attaches logging after your start/restart/stop/reload",
  },
  {
    name: "--sort",
    description: "Sort process according to field's name",
    args: {
      name: "field_name:sort",
    },
  },
  { name: "--v8", description: "Enables v8 data collecting" },
  {
    name: "--event-loop-inspector",
    description: "Enables event-loop-inspector dump in pmx",
  },
  {
    name: "--deep-monitoring",
    description:
      "Enables all monitoring tools (equivalent to --v8 --event-loop-inspector --trace)",
  },
  { name: ["-h", "--help"], description: "Outputs usage information" },
];

const completionSpec: Fig.Spec = {
  name: "pm2",
  description: "Daemon process manager",
  subcommands: [
    {
      name: "start",
      description: "Starts and daemonizes an app",
      options: [
        ...sharedOptions,
        watchOption("Watch folder for changes", true),
        {
          name: "--fresh",
          description: "Rebuild Dockerfile",
        },
        {
          name: "--daemon",
          description: "Run container in Daemon mode (debug purposes)",
        },
        {
          name: "--container",
          description: "Start application in container mode",
        },
        {
          name: "--dist",
          description:
            "With --container; change local Dockerfile to containerize all files in current directory",
          dependsOn: ["--container"],
        },
        {
          name: "--image-name",
          description: "With --dist; set the exported image name",
          dependsOn: ["--dist"],
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--node-version",
          description: "With --container, set a specific major Node.js version",
          dependsOn: ["--container"],
          args: {
            name: "major",
            isOptional: true,
          },
        },
        {
          name: "--dockerdaemon",
          description: "For debugging purpose",
        },
      ],
      args: {
        name: "name|namespace|file|ecosystem|id",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "trigger",
      description: "Trigger process action",
      args: [
        {
          name: "id|proc_name|namespace|all",
        },
        {
          name: "action_name",
        },
        {
          name: "params",
          isOptional: true,
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your json",
      args: {
        name: "file|environment",
        template: "filepaths",
      },
    },
    {
      name: "startOrRestart",
      description: "Start or restart JSON file",
      args: jsonFileArg,
    },
    {
      name: "startOrReload",
      description: "Start or gracefully reload JSON file",
      args: jsonFileArg,
    },
    {
      name: "pid",
      description: "Return pid of the specified app or all",
      args: {
        ...appArg,
        isOptional: true,
      },
    },
    {
      name: "create",
      description: "Create a boilerplate application from a sample (prompts)",
    },
    {
      name: "startOrGracefulReload",
      description: "Start or gracefully reload JSON file",
      args: jsonFileArg,
    },
    {
      name: "stop",
      description: "Stop a process",
      options: [
        ...sharedOptions,
        watchOption("Stop watching folder for changes"),
      ],
      args: processArg,
    },
    {
      name: "restart",
      description: "Restart a process",
      options: [
        ...sharedOptions,
        watchOption("Toggle watching folder for changes"),
      ],
      args: processArg,
    },
    {
      name: "scale",
      description:
        "Scale up/down a process in cluster mode depending on the `number` param",
      args: [appArg, numberArg],
    },
    {
      name: "profile:mem",
      description: "Sample PM2 heap memory",
      args: {
        name: "time",
        isOptional: true,
      },
    },
    {
      name: "profile:cpu",
      description: "Profile PM2 CPU",
      args: {
        name: "time",
        isOptional: true,
      },
    },
    {
      name: "reload",
      description: "Reload processes (for apps using HTTP/HTTPS)",
      args: {
        name: "id|name|namespace|all",
      },
    },
    {
      name: "id",
      description: "Get process id by name",
      args: nameArg,
    },
    {
      name: "inspect",
      description: "Inspect a process",
      args: nameArg,
    },
    {
      name: ["delete", "del"],
      description: "Stops and deletes a process from pm2 process list",
      args: {
        name: "name|id|namespace|script|all|json|stdin",
        isVariadic: true,
      },
    },
    {
      name: "sendSignal",
      description: "Send a system signal to the target process",
      args: [
        {
          name: "signal",
        },
        {
          name: "pm2_id|name",
        },
      ],
    },
    {
      name: "ping",
      description: "Ping pm2 daemon - if not up it will launch it",
    },
    {
      name: "updatePM2",
      description: "Update in-memory PM2 with local PM2",
    },
    {
      name: "update",
      description: "(alias) update in-memory PM2 with local PM2",
    },
    {
      name: ["install", "module:install"],
      description: "Install or update a module and run it forever",
      options: [
        ...sharedOptions,
        {
          name: "--tarball",
          description: "Is local tarball",
        },
        {
          name: "--install",
          description: "Run yarn install before starting module",
        },
        {
          name: "--docker",
          description: "Is docker container",
        },
        {
          name: "--v1",
          description: "Install module in v1 manner (do not use it)",
        },
        {
          name: "--safe",
          description:
            "Keep module backup, if new module fail = restore with previous",
          args: {
            name: "time",
            isOptional: true,
          },
        },
      ],
      args: {
        name: "module|git:// url",
      },
    },
    {
      name: "module:update",
      description: "Update a module and run it forever",
      options: [
        {
          name: "--tarball",
          description: "Is local tarball",
        },
      ],
      args: {
        name: "module|git:// url",
      },
    },
    {
      name: "module:generate",
      description: "Generate a sample module in current folder",
      args: {
        ...appArg,
        isOptional: true,
      },
    },
    {
      name: ["uninstall", "module:uninstall"],
      description: "Stop and uninstall a module",
      args: {
        name: "module",
      },
    },
    {
      name: "package",
      description: "Check & package TAR type module",
      args: {
        name: "target",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["publish", "module:publish"],
      description: "Publish the module you are currently on",
      options: [
        {
          name: "--npm",
          description: "Publish on npm",
        },
      ],
      args: {
        name: "folder",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "set",
      description: "Sets the specified config",
      args: [
        {
          ...keyArg,
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "multiset",
      description: 'Multiset eg "key1 val1 key2 val2"',
      args: {
        name: "value",
        description: "All key/value pairs in one quoted string",
      },
    },
    {
      name: "get",
      description: "Get value for the specified key",
      args: {
        ...keyArg,
        isOptional: true,
      },
    },
    {
      name: "conf",
      description: "Get / set module config values",
      args: [
        {
          ...keyArg,
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "config",
      description: "Get / set module config values",
      args: [
        keyArg,
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "unset",
      description: "Clears the specified config key",
      args: keyArg,
    },
    {
      name: "report",
      description:
        "Give a full pm2 report for https://github.com/Unitech/pm2/issues",
    },
    {
      name: "link",
      description: "Link with the pm2 monitoring dashboard",
      options: [...sharedOptions, infoNodeOption],
      args: [
        {
          name: "secret",
          isOptional: true,
        },
        {
          name: "public",
          isOptional: true,
        },
        {
          ...nameArg,
          isOptional: true,
        },
      ],
    },
    {
      name: "unlink",
      description: "Unlink with the pm2 monitoring dashboard",
    },
    {
      name: "monitor",
      description: "Monitor target process",
      args: {
        ...nameArg,
        isOptional: true,
      },
    },
    {
      name: "unmonitor",
      description: "Unmonitor target process",
      args: {
        ...nameArg,
        isOptional: true,
      },
    },
    {
      name: "open",
      description: "Open the pm2 monitoring dashboard",
    },
    {
      name: ["plus", "register"],
      description: "Enable pm2 plus",
      options: [
        infoNodeOption,
        {
          name: ["-d", "--discrete"],
          description: "Silent mode",
        },
        {
          name: ["-a", "--install-all"],
          description: "Install all modules (force yes)",
        },
      ],
      args: [
        {
          name: "command",
          isOptional: true,
          suggestions: [
            "connect",
            "login",
            "register",
            "authenticate",
            "validate",
            "help",
            "welcome",
            "logout",
            "create",
            "web",
          ],
        },
        {
          name: "option",
          isOptional: true,
        },
      ],
    },
    {
      name: "login",
      description: "Login to pm2 plus",
    },
    {
      name: "logout",
      description: "Logout from pm2 plus",
    },
    {
      name: ["dump", "save"],
      description: "Dump all processes for resurrecting them later",
      options: [
        {
          name: "--force",
          description: "Force deletion of dump file, even if empty",
        },
      ],
    },
    {
      name: "cleardump",
      description: "Create empty dump file",
    },
    {
      name: "send",
      description: "Send stdin to pm id",
      args: [
        {
          name: "pm id",
        },
        {
          name: "line",
        },
      ],
    },
    {
      name: "attach",
      description: "Attach stdin/stdout to application identified by pm id",
      args: [
        {
          name: "pm id",
        },
        {
          name: "command separator",
          isOptional: true,
        },
      ],
    },
    {
      name: "resurrect",
      description: "Resurrect previously dumped processes",
    },
    {
      name: "unstartup",
      description: "Disable the pm2 startup hook",
      args: unstartupPlatformArg,
    },
    {
      name: "startup",
      description: "Enable the pm2 startup hook",
      args: platformArg,
    },
    {
      name: "logrotate",
      description: "Copy default logrotate configuration",
    },
    {
      name: ["ecosystem", "init"],
      description: "Generate a process conf file (mode = null or simple)",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: ["null", "simple"],
      },
    },
    {
      name: "reset",
      description: "Reset counters for process",
      args: {
        name: "name|id|all",
      },
    },
    {
      name: "describe",
      description: "Describe all parameters of a process",
      args: {
        name: "name|id",
      },
    },
    {
      name: ["desc", "info", "show"],
      description: "(alias) Describe all parameters of a process",
      args: {
        name: "name|id",
      },
    },
    {
      name: "env",
      description: "List all environment variables of a process id",
      args: {
        name: "id",
      },
    },
    {
      name: ["list", "ls"],
      description: "List all processes",
    },
    {
      name: ["l", "ps", "status"],
      description: "(alias) list all processes",
    },
    {
      name: "jlist",
      description: "List all processes in JSON format",
    },
    {
      name: ["slist", "sysinfos"],
      description: "List system infos in JSON",
      options: [
        {
          name: ["-t", "--tree"],
          description: "Show as tree",
        },
      ],
    },
    {
      name: "prettylist",
      description: "Print json in a prettified JSON",
    },
    {
      name: "monit",
      description: "Launch termcaps monitoring",
      options: [linesOption],
    },
    {
      name: "imonit",
      description: "Launch legacy termcaps monitoring",
    },
    {
      name: ["dashboard", "dash"],
      description: "Launch dashboard with monitoring and logs",
      options: [linesOption],
    },
    {
      name: "flush",
      description: "Flush logs",
      args: {
        name: "id|name",
        isOptional: true,
      },
    },
    {
      name: "reloadLogs",
      description: "Reload all logs",
    },
    {
      name: ["logs", "log"],
      description: "Stream logs file. Default stream all logs",
      options: [
        ...sharedOptions,
        {
          name: "--json",
          description: "JSON log output",
        },
        {
          name: "--format",
          description: "Formatted log output",
        },
        {
          name: "--raw",
          description: "Raw output",
        },
        {
          name: "--err",
          description: "Only shows error output",
        },
        {
          name: "--out",
          description: "Only shows standard output",
        },
        {
          name: "--lines",
          description:
            "Output the last N lines, instead of the last 15 by default",
          args: numberArg,
        },
        {
          name: "--timestamp",
          description: "Add timestamps (default format YYYY-MM-DD-HH:mm:ss)",
          args: {
            name: "format",
            isOptional: true,
          },
        },
        {
          name: "--nostream",
          description: "Print logs without launching the log stream",
        },
        {
          name: "--highlight",
          description: "Highlights the given value",
          args: {
            name: "value",
            isOptional: true,
          },
        },
      ],
      args: {
        name: "id|name|namespace",
        isOptional: true,
      },
    },
    {
      name: "kill",
      description: "Kill daemon",
    },
    {
      name: "pull",
      description: "Updates repository for a given app",
      args: [
        nameArg,
        {
          name: "commit id",
          isOptional: true,
        },
      ],
    },
    {
      name: "forward",
      description: "Updates repository to the next commit for a given app",
      args: nameArg,
    },
    {
      name: "backward",
      description:
        "Downgrades repository to the previous commit for a given app",
      args: nameArg,
    },
    {
      name: "deepUpdate",
      description: "Performs a deep update of PM2",
    },
    {
      name: ["serve", "expose"],
      description: "Serves a directory over http via port",
      options: [
        {
          name: "--port",
          description: "Specify port to listen to",
          args: {
            name: "port",
            isOptional: true,
          },
        },
        {
          name: "--spa",
          description: "Always serving index.html on inexistant sub path",
        },
        {
          name: "--ftp",
          description: "Directory listing like python http.server",
        },
        {
          name: "--basic-auth-username",
          description: "Set basic auth username",
          args: {
            name: "username",
            isOptional: true,
          },
        },
        {
          name: "--basic-auth-password",
          description: "Set basic auth password",
          args: {
            name: "password",
            isOptional: true,
          },
        },
        {
          name: "--monitor",
          description:
            "Frontend app monitoring (auto integrate snippet on html files)",
          args: {
            name: "frontend-app",
            isOptional: true,
          },
        },
      ],
      args: [
        {
          name: "path",
          isOptional: true,
          template: "folders",
        },
        {
          name: "port",
          isOptional: true,
        },
      ],
    },
    {
      name: "examples",
      description: "Display pm2 usage examples",
    },
    {
      name: "completion",
      description:
        "Output the shell completion script, or install/uninstall it",
      args: {
        name: "action",
        isOptional: true,
        suggestions: ["install", "uninstall"],
      },
    },
    {
      name: "install-otel",
      description:
        "Install OpenTelemetry tracing packages (required for --trace)",
    },
    {
      name: "uninstall-otel",
      description: "Remove OpenTelemetry tracing packages",
    },
  ],
  options: [
    ...sharedOptions,
    watchOption("Watches application folder for changes", true),
  ],
};

export default completionSpec;
