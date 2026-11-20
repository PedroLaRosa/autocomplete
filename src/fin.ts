// Docksal fin v1.118.0 / Docksal v1.19.0 (newest tag of github.com/docksal/docksal, released 2024-05-24, checked 2026-11-19). Source: bin/fin (show_help_* functions, command dispatcher, option parsing) and docs/content at tag v1.19.0 read statically from a shallow clone; fin was not run.
// Notes: upstream has had no release since v1.19.0. "fin pull" is no longer part of the core script (it is the "pull" addon) and is not described here. "fin hosts list" is documented in the help but the script itself only handles a bare "fin hosts".
// DB charset/collation defaults follow bin/fin (utf8mb4 / utf8mb4_unicode_ci), which differ from the help text (utf8 / utf8_general_ci).

const databases: Fig.Generator = {
  script: ["fin", "db", "list"],
  postProcess: (output) => {
    return output.split("\n").map((db) => {
      return { name: db.trim(), description: "Database" };
    });
  },
};

const hosts: Fig.Generator = {
  script: ["fin", "hosts"],
  postProcess: (output) => {
    return output.split("\n").map((host) => {
      if (host.startsWith("#")) {
        return {};
      }
      return { name: host, description: "Host" };
    });
  },
};

const aliasGenerator: Fig.Generator = {
  script: ["fin", "alias", "list"],
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((alias) => {
        return { name: alias.split(" ")[0], description: "Alias" };
      });
  },
};

const serviceGenerator: Fig.Generator = {
  script: ["fin", "docker", "ps", "--format", "{{.Names}}"],
  splitOn: "\n",
};

const dbName: Fig.Option = {
  name: "--db",
  description:
    "Use another database (default is the one set with 'MYSQL_DATABASE')",
  requiresEquals: true,
  args: {
    name: "database",
  },
};

const dbUser: Fig.Option = {
  name: "--db-user",
  description: "Use another mysql username (default is 'root')",
  requiresEquals: true,
  args: {
    name: "user",
  },
};

const dbPassword: Fig.Option = {
  name: "--db-password",
  description:
    "Use another database password (default is the one set with 'MYSQL_ROOT_PASSWORD', see fin config)",
  requiresEquals: true,
  args: {
    name: "password",
  },
};

const dbForce: Fig.Option = {
  name: "--force",
  description:
    "Do not ask questions. The only time when question is asked is when truncation fails",
};

const dbProgress: Fig.Option = {
  name: "--progress",
  description: "Show import progess (requires pv)",
};

const dbNoTruncate: Fig.Option = {
  name: "--no-truncate",
  description: "Do no truncate database before import",
};

const dumpFileArg: Fig.Arg = {
  name: "file",
  template: "filepaths",
  isOptional: true,
};

const serviceArg: Fig.Arg = {
  name: "service",
  generators: serviceGenerator,
  isOptional: true,
  isVariadic: true,
};

const envOption = (description: string): Fig.Option => ({
  name: "--env",
  description,
  requiresEquals: true,
  args: {
    name: "name",
  },
});

const allProjectsOption = (description: string): Fig.Option => ({
  name: ["--all", "-a"],
  description,
});

const allOption: Fig.Option = {
  name: "--all",
  description: "Print additional information that is hidden by default",
};

// Project lifecycle commands, available as "fin project <command>" and as top-level shortcuts ("fin <command>")
const startCommand: Fig.Subcommand = {
  name: "start",
  description: "Start project services",
  priority: 65,
};

const upCommand: Fig.Subcommand = {
  name: "up",
  description: "Configuration re-read and start project services",
};

const stopCommand: Fig.Subcommand = {
  name: "stop",
  description: "Stop all or specified project services",
  priority: 60,
  options: [allProjectsOption("Stop all services on all Docksal projects")],
  args: serviceArg,
};

const restartCommand: Fig.Subcommand = {
  name: "restart",
  description: "Restart project services",
  priority: 75,
  args: serviceArg,
};

const resetCommand: Fig.Subcommand = {
  name: "reset",
  description:
    "Recreate all or specified project services, their containers and volumes",
  priority: 70,
  options: [
    {
      name: ["--force", "-f"],
      description:
        "Do not ask for confirmation when deleting all project services",
    },
  ],
  args: serviceArg,
};

const removeCommand: Fig.Subcommand = {
  name: ["remove", "rm"],
  description:
    "Remove all project services, networks and all their volumes, or specified services only",
  options: [
    {
      name: ["--force", "-f"],
      description:
        "Do not ask for confirmation when deleting all project services",
    },
  ],
  args: serviceArg,
};

const buildCommand: Fig.Subcommand = {
  name: "build",
  description: "Build or rebuild services (alias for 'docker-compose build')",
};

const listOptions: Fig.Option[] = [
  allProjectsOption("List all Docksal projects (stopped as well)"),
];

const completionSpec: Fig.Spec = {
  name: "fin",
  description: "Docksal command line utility",
  subcommands: [
    {
      name: "help",
      description: "Shows help",
      args: {
        name: "command",
        description: "Show help for a specific command",
        isOptional: true,
      },
    },
    // Management Commands:
    {
      name: ["addon", "a"],
      description:
        "Addons management commands: install, remove (fin help addon)",
      options: [
        {
          name: ["--global", "-g"],
          description:
            "Install or remove the addon globally (in $HOME/.docksal/addons)",
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: ["install", "in"],
          description: "Install addon",
          args: {
            name: "Name",
            description:
              "See available addons in the Addons Repository https://github.com/docksal/addons",
          },
        },
        {
          name: ["remove", "rm"],
          description: "Remove addon",
          args: {
            name: "Name",
          },
        },
      ],
    },
    {
      name: "alias",
      description:
        "Manage aliases that allow fin @alias execution (fin help alias). Create/update alias with <alias_name> that links to <path>",
      args: [{ name: "path", template: "folders" }, { name: "alias_name" }],
      subcommands: [
        {
          name: "list",
          description: "Show aliases list",
        },
        {
          name: "remove",
          description: "Remove alias",
          args: {
            name: "alias_name",
            generators: aliasGenerator,
          },
        },
      ],
    },
    {
      name: "db",
      description: "Manage databases (fin help db)",
      options: [dbName, dbUser, dbPassword].map((option) => ({
        ...option,
        isPersistent: true,
      })),
      subcommands: [
        {
          name: "import",
          description:
            "Truncate the database and import from SQL dump file or stdin",
          args: dumpFileArg,
          options: [dbProgress, dbNoTruncate, dbForce],
        },
        {
          name: "dump",
          description: "Dump a database into an SQL dump file or stdout",
          args: dumpFileArg,
        },
        {
          name: ["list", "ls"],
          description: "Show list of existing databases",
        },
        {
          name: "cli",
          description:
            "Open command line interface to the DB server (and execute query if provided)",
          args: {
            name: "query",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a database",
          options: [
            {
              name: "--db-charset",
              description:
                "Override charset when creating a database (default is utf8mb4)",
              requiresEquals: true,
              args: {
                name: "charset",
              },
            },
            {
              name: "--db-collation",
              description:
                "Override collation when creating a database (default is utf8mb4_unicode_ci)",
              requiresEquals: true,
              args: {
                name: "collation",
              },
            },
          ],
          args: {
            name: "name",
          },
        },
        {
          name: "drop",
          description: "Delete a database",
          args: {
            name: "name",
            generators: databases,
          },
        },
        {
          name: "truncate",
          description: "Truncate a database (defaults to the `default`)",
          args: {
            name: "name",
            generators: databases,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "hosts",
      description: "Hosts file commands: add, remove, list (fin help hosts)",
      subcommands: [
        {
          name: "add",
          description:
            "Add hostname to hosts file. If none provided uses VIRTUAL_HOST",
          args: {
            name: "hostname",
            isOptional: true,
          },
        },
        {
          name: "remove",
          description:
            "Remove lines containing hostname from hosts file. If none provided uses VIRTUAL_HOST",
          args: {
            name: "hostname",
            generators: hosts,
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "Output hosts file",
        },
      ],
    },
    {
      name: ["project", "p"],
      description: "Manage project(s) (fin help project)",
      subcommands: [
        startCommand,
        upCommand,
        stopCommand,
        {
          name: ["status", "st"],
          description: "List project services (alias: fin ps)",
        },
        restartCommand,
        resetCommand,
        removeCommand,
        {
          name: ["list", "ls"],
          description: "List running Docksal projects (alias: fin pl)",
          options: listOptions,
        },
        {
          name: "create",
          description:
            "Create a new project with a pre-configured boilerplate: Drupal, Wordpress, Magento, Laravel, Backdrop, Hugo, Gatsby, and others",
          options: [
            {
              name: "--name",
              description: "Provide project name upfront",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--choice",
              description: "Provide software choice number upfront",
              requiresEquals: true,
              args: {
                name: "#",
                suggestions: [
                  { name: "0", description: "Custom git repository" },
                  { name: "1", description: "Drupal 10 (Composer Version)" },
                  { name: "2", description: "Drupal 10 (BLT Version)" },
                  { name: "3", description: "Drupal 7" },
                  { name: "4", description: "Wordpress" },
                  { name: "5", description: "Magento" },
                  { name: "6", description: "Laravel" },
                  { name: "7", description: "Symfony Skeleton" },
                  { name: "8", description: "Symfony WebApp" },
                  { name: "9", description: "Grav CMS" },
                  { name: "10", description: "Backdrop CMS" },
                  { name: "11", description: "Hugo" },
                  { name: "12", description: "Gatsby JS" },
                  { name: "13", description: "Angular" },
                  { name: "14", description: "Static HTML site" },
                ],
              },
            },
            {
              name: "--repo",
              description:
                "Clone from a custom repo: name (--choice is set to '0' automatically)",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--branch",
              description: "Clone from a custom repo: branch name (optional)",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--yes", "-y"],
              description: "Avoid confirmation",
            },
          ],
        },
        {
          name: "config",
          description: "Show project configuration",
        },
        buildCommand,
        {
          name: "erase",
          description:
            "Remove project services and delete all files in the project root",
          hidden: true,
          options: [
            {
              name: ["--force", "-f"],
              description: "Do not ask for confirmation",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "ssh-key",
      description: "Manage SSH keys (fin help ssh-key)",
      subcommands: [
        {
          name: "add",
          description:
            "Add a private SSH key from $HOME/.ssh by file name. Adds all default keys (id_rsa/id_dsa/id_ecdsa/id_ed25519) if no file name is given",
          args: {
            name: "key-name",
            isOptional: true,
            generators: {
              script: [
                "bash",
                "-c",
                "\\command ls $HOME/.ssh | \\command grep --color=never -v 'pub'",
              ],
              splitOn: "\n",
            },
          },
          options: [
            {
              name: "--quiet",
              description: "Suppress key already loaded notifications",
            },
          ],
        },
        {
          name: "ls",
          description: "List SSH keys loaded in the docksal-ssh-agent",
        },
        {
          name: "rm",
          description: "Remove all keys from the docksal-ssh-agent",
        },
        {
          name: "new",
          description: "Generate a new SSH key pair",
          args: {
            name: "key-name",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: ["system", "sys"],
      description: "Manage Docksal state (fin help system)",
      subcommands: [
        {
          name: "reset",
          description: "Reset Docksal",
          args: {
            name: "service",
            description: "Reset only one system service or setting",
            isOptional: true,
            suggestions: [
              {
                name: "vhost-proxy",
                description: "Reset Docksal HTTP/HTTPS reverse proxy service",
              },
              {
                name: "ssh-agent",
                description: "Reset Docksal ssh-agent service",
              },
              {
                name: "dns",
                description:
                  "Reset Docksal DNS service and configure the resolver",
              },
              {
                name: "network",
                description: "Reset Docksal network settings",
              },
              {
                name: "mounts",
                description: "Reset Docksal volume mounts configuration",
              },
            ],
          },
        },
        {
          name: "start",
          description: "Start Docksal",
        },
        {
          name: "stop",
          description: "Stop Docksal",
        },
        {
          name: ["status", "st"],
          description: "Check Docksal status",
        },
      ],
    },
    {
      name: "vm",
      description: "Manage Docksal VM (fin help vm)",
      subcommands: [
        {
          name: "start",
          description:
            "Start the machine (create if needed). Deprecated, use fin system start",
          deprecated: true,
        },
        {
          name: "stop",
          description: "Stop the machine. Deprecated, use fin system stop",
          deprecated: true,
        },
        {
          name: "kill",
          description: "Forcibly stop the machine",
        },
        {
          name: "restart",
          description: "Restart the machine",
        },
        {
          name: "status",
          description: "Get the status",
        },
        {
          name: "ssh",
          description: "Log into ssh or run a command via ssh",
          args: {
            name: "command",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["remove", "rm"],
          description: "Remove Docksal machine and cleanup after it",
        },
        {
          name: "ip",
          description: "Show the machine IP address",
        },
        {
          name: ["ls", "list"],
          description: "List all docker machines",
        },
        {
          name: "env",
          description:
            "Display the commands to set up the shell for direct use of Docker client",
        },
        {
          name: "mount",
          description:
            "Try remounting host filesystem (NFS on macOS, SMB on Windows)",
        },
        {
          name: "ram",
          description: "Show memory size",
          args: {
            name: "megabyte",
            description:
              "Set memory size. Default is 1024 (requires vm restart)",
            isOptional: true,
          },
        },
        {
          name: "hdd",
          description: "Show disk size and usage",
        },
        {
          name: "stats",
          description: "Show CPU and network usage",
        },
        {
          name: "regenerate-certs",
          description: "Regenerate TLS certificates and restart the VM",
        },
      ],
    },
    // Commands:
    {
      name: "bash",
      description: "Open shell into service's container. Defaults to cli",
      args: {
        name: "service",
        generators: serviceGenerator,
        isOptional: true,
      },
    },
    {
      name: "config",
      description: "Show or change configuration (fin help config)",
      subcommands: [
        {
          name: "show",
          description: "Display configuration for the current project",
          options: [
            {
              name: "--show-secrets",
              description: "Do not truncate value of SECRET_* environment vars",
            },
          ],
        },
        {
          name: "env",
          description: "Display only environment variables section",
        },
        {
          name: ["yml", "yaml"],
          description:
            "Display static YML project config suitable for export (NOTE: SECRET_* values will not be hidden)",
        },
        {
          name: "generate",
          description: "Generate empty Docksal configuration for the project",
          options: [
            {
              name: "--stack",
              description:
                "Set non-default DOCKSAL_STACK during config generate",
              requiresEquals: true,
              args: {
                name: "stack",
              },
            },
            {
              name: "--docroot",
              description: "Set non-default DOCROOT during config generate",
              requiresEquals: true,
              args: {
                name: "directory",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "set",
          description: "Set value(s) for the variable(s) in project ENV file",
          options: [
            {
              name: "--global",
              description: "Set for global ENV file",
            },
            envOption("Set in environment specific project ENV file"),
          ],
          args: {
            name: "VAR=VAL",
            isVariadic: true,
          },
        },
        {
          name: ["remove", "rm"],
          description: "Remove variable(s) from project ENV file",
          options: [
            {
              name: "--global",
              description: "Remove from global ENV file",
            },
            envOption("Remove from environment specific project ENV file"),
          ],
          args: {
            name: "VAR",
            isVariadic: true,
          },
        },
        {
          name: "get",
          description:
            "Get the value of the single variable from project ENV file",
          options: [
            {
              name: "--global",
              description: "Get value from global ENV file",
            },
            envOption("Get value from environment specific project ENV file"),
          ],
          args: {
            name: "VAR",
          },
        },
      ],
    },
    {
      name: ["exec", "run"],
      description: "Execute a command or a script in cli",
      options: [
        {
          name: "-T",
          description:
            "Disable pseudo-tty allocation (useful for non-interactive commands when the output is saved into a variable)",
        },
        {
          name: "--in",
          description:
            "Name of the service or container to execute the command in",
          requiresEquals: true,
          args: {
            name: "name",
            generators: serviceGenerator,
          },
        },
      ],
      args: {
        name: "command|file",
        isCommand: true,
      },
    },
    {
      name: "exec-url",
      description:
        "Download script from URL and run it on host (URL should be public)",
      args: {
        name: "url",
      },
    },
    {
      name: "init",
      description:
        "Initialize a project (override it with your own automation, see fin help init)",
    },
    {
      name: "image",
      description:
        "Image management commands: registry, save, load (fin help image)",
      subcommands: [
        {
          name: "registry",
          description: "Show all Docksal images on Docker Hub",
          args: {
            name: "image name",
            description: "Show all tags for a certain image",
            isOptional: true,
          },
        },
        {
          name: "save",
          description: "Save docker images into a tar archive",
          options: [
            {
              name: "--system",
              description: "Save Docksal system images",
              exclusiveOn: ["--project", "--all"],
            },
            {
              name: "--project",
              description: "Save current project's images",
              exclusiveOn: ["--system", "--all"],
            },
            {
              name: "--all",
              description: "Save all images available on the host",
              exclusiveOn: ["--system", "--project"],
            },
          ],
        },
        {
          name: "load",
          description: "Load docker images from a tar archive",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "logs",
      description:
        "Show service logs (e.g., Apache logs, MySQL logs) and Unison logs (fin help logs)",
      options: [
        {
          name: ["-f", "--follow"],
          description: "Follow log output",
        },
        {
          name: "--index",
          description:
            "Index of the container if service has multiple replicas",
          args: {
            name: "index",
          },
        },
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
        {
          name: "--since",
          description:
            "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
        {
          name: ["-n", "--tail"],
          description:
            'Number of lines to show from the end of the logs for each container (default "all")',
          args: {
            name: "string",
          },
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps",
        },
        {
          name: "--until",
          description:
            "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
      ],
      args: serviceArg,
    },
    {
      name: ["run-cli", "rc"],
      description:
        "Run a command in a standalone cli container in the current directory (fin help run-cli)",
      options: [
        {
          name: "--clean",
          description: "Run command with a non-persistent $HOME directory",
        },
        {
          name: "--cleanup",
          description: "Clean the persistent $HOME directory and run command",
        },
        {
          name: "--debug",
          description: "Print container debug output",
        },
        {
          name: "--image",
          description: "Override default container image",
          requiresEquals: true,
          args: {
            name: "IMAGE",
          },
        },
        {
          name: "-e",
          description: "Pass environment variable(s) to the container",
          isRepeatable: true,
          args: {
            name: "VAR=VALUE",
          },
        },
        {
          name: "-T",
          description:
            "Disable pseudo-tty allocation (useful to get clean stdout)",
        },
      ],
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "share",
      description:
        "Create temporary public url for current project using ngrok",
      options: [
        {
          name: "--host",
          description:
            "Override a hostname for ngrok to route to (default is $VIRTUAL_HOST)",
          requiresEquals: true,
          args: {
            name: "host",
          },
        },
        {
          name: "--host-header",
          description:
            "Override the Host header passed to the web container (NGROK_HEADER)",
          requiresEquals: true,
          args: {
            name: "host",
          },
        },
        {
          name: "--auth",
          description:
            "Authentication token for your ngrok account, needed for custom subdomains, domains and HTTP authentication (NGROK_AUTH)",
          requiresEquals: true,
          args: {
            name: "token",
          },
        },
        {
          name: "--hostname",
          description:
            "Custom domain for the tunnel, takes priority over a subdomain (NGROK_HOSTNAME)",
          requiresEquals: true,
          args: {
            name: "hostname",
          },
        },
        {
          name: "--subdomain",
          description: "Custom subdomain for the tunnel (NGROK_SUBDOMAIN)",
          requiresEquals: true,
          args: {
            name: "subdomain",
          },
        },
        {
          name: "--username",
          description:
            "Username for HTTP authentication on the tunnel (NGROK_USERNAME)",
          requiresEquals: true,
          args: {
            name: "username",
          },
        },
        {
          name: "--password",
          description:
            "Password for HTTP authentication on the tunnel (NGROK_PASSWORD)",
          requiresEquals: true,
          args: {
            name: "password",
          },
        },
        {
          name: "--protocol",
          description:
            "Tunnel protocol, defaults to HTTP if not specified (NGROK_PROTOCOL)",
          requiresEquals: true,
          args: {
            name: "protocol",
            suggestions: ["HTTP", "TCP"],
          },
        },
        {
          name: "--port",
          description:
            "Port to expose, defaults to 80 for HTTP protocol (NGROK_PORT)",
          requiresEquals: true,
          args: {
            name: "port",
          },
        },
        {
          name: "--region",
          description:
            "Location of the ngrok tunnel server, defaults to us (NGROK_REGION)",
          requiresEquals: true,
          args: {
            name: "region",
            suggestions: [
              { name: "us", description: "United States" },
              { name: "eu", description: "Europe" },
              { name: "ap", description: "Asia/Pacific" },
              { name: "au", description: "Australia" },
            ],
          },
        },
        {
          name: "--debug",
          description: "Print a more detailed ngrok log (NGROK_DEBUG)",
        },
      ],
    },
    {
      name: "share-v2",
      description:
        "Create a temporary public URL for the project using Cloudflare Tunnel",
      subcommands: [
        {
          name: "start",
          description: "Start tunnel and print public URL",
        },
        {
          name: "stop",
          description: "Stop tunnel",
        },
        {
          name: "status",
          description: "Prints tunnel status and public URL (if Active)",
        },
        {
          name: "url",
          description: "Prints tunnel public URL",
        },
        {
          name: "logs",
          description: "Prints tunnel container logs",
        },
      ],
    },
    {
      name: "vhosts",
      description:
        "List all virtual *.docksal hosts registered in Docksal proxy",
    },
    // Project command shortcuts (see "fin help project")
    startCommand,
    upCommand,
    stopCommand,
    restartCommand,
    resetCommand,
    removeCommand,
    buildCommand,
    {
      name: ["status", "ps"],
      description: "List project services",
    },
    {
      name: "pl",
      description: "List running Docksal projects",
      options: listOptions,
    },
    // Deprecated database commands (use fin db ...)
    {
      name: ["mysql", "sqlc"],
      description:
        "Open MySql command line to the current db server. Deprecated, use fin db cli",
      deprecated: true,
      options: [dbName, dbUser, dbPassword],
      args: {
        name: "query",
        isOptional: true,
      },
    },
    {
      name: ["mysql-list", "sqls"],
      description:
        "Show list of available databases. Deprecated, use fin db list",
      deprecated: true,
      options: [dbUser, dbPassword],
    },
    {
      name: ["mysql-import", "sqli"],
      description:
        "Truncate database and import SQL dump from a file or stdin. Deprecated, use fin db import",
      deprecated: true,
      options: [dbForce, dbProgress, dbNoTruncate, dbName, dbUser, dbPassword],
      args: dumpFileArg,
    },
    {
      name: ["mysql-dump", "sqld"],
      description:
        "Export database from db container into file or stdout. Deprecated, use fin db dump",
      deprecated: true,
      options: [dbName, dbUser, dbPassword],
      args: dumpFileArg,
    },
    // Docker command wrapper
    {
      name: ["docker", "d"],
      description: "Run Docker commands directly",
      loadSpec: "docker",
    },
    {
      name: ["docker-compose", "dc"],
      description: "Run Docker Compose commands directly",
      loadSpec: "docker-compose",
    },
    {
      name: ["docker-machine", "dm"],
      description: "Run Docker Machine commands directly",
      args: {
        name: "command",
      },
    },
    // Misc. command wrappers
    {
      name: "composer",
      description: "Run Composer commands",
      args: {
        name: "command",
      },
    },
    {
      name: "drush",
      description: "Drush command (requires Drupal)",
      args: {
        name: "command",
      },
    },
    {
      name: "drupal",
      description: "Drupal Console command (requires Drupal 8)",
      args: {
        name: "command",
      },
    },
    {
      name: "platform",
      description: "Platform.sh's CLI (requires docksal/cli 2.3+)",
      args: {
        name: "command",
      },
    },
    {
      name: "terminus",
      description: "Pantheon's Terminus (requires docksal/cli 2.1+)",
      args: {
        name: "command",
      },
    },
    {
      name: "acli",
      description: "Acquia CLI command (requires docksal/cli 2.13+)",
      args: {
        name: "command",
      },
    },
    {
      name: "wp",
      description: "WordPress CLI command (requires WordPress)",
      args: {
        name: "command",
      },
    },
    // Diagnostics/maintenance/updates
    {
      name: "cleanup",
      description:
        "Remove all unused Docker images, unused Docksal volumes and containers",
      options: [
        {
          name: "--images",
          description: "Docker images cleanup Wizard",
        },
        {
          name: "--hard",
          description:
            "Remove ALL stopped containers even unrelated to Docksal (potentially destructive operation)",
        },
      ],
    },
    {
      name: "diagnose",
      description:
        "Show diagnostic information for troubleshooting and bug reporting",
      options: [allOption],
    },
    {
      name: "sysinfo",
      description: "Show system information",
      options: [allOption],
    },
    {
      name: "update",
      description: "Update Docksal",
      options: [
        {
          name: "--system-images",
          description: "Update system images",
        },
        {
          name: "--project-images",
          description: "Update project images",
        },
        {
          name: "--self",
          description: "Update fin executable",
        },
        {
          name: "--tools",
          description: "Update tools",
        },
        {
          name: "--stack",
          description: "Update config files",
        },
        {
          name: "--bash-complete",
          description: "Install bash completions",
        },
      ],
    },
    {
      name: ["version", "--version", "v", "-v"],
      description: "Print fin version. [v, -v] prints short version",
    },
  ],
  // Adding dynamic subcommands
  generateSpec: async (tokens, executeShellCommand) => {
    var new_subcommands = [];
    const { stdout: available_commands } = await executeShellCommand({
      command: "bash",
      args: ["-c", "ls -1 ~/.docksal/commands/"],
    });
    for (const command of available_commands.split("\n")) {
      if (command) {
        new_subcommands.push({
          name: command,
          priority: 55,
        });
      }
    }
    return {
      name: "fin",
      subcommands: new_subcommands,
    };
  },
};
export default completionSpec;
