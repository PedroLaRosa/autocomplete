// DDEV v1.25.5 (latest GitHub tag ddev/ddev, 2026-11-19). Source: read statically from
// the v1.25.5 tree (cmd/ddev/cmd/*.go cobra definitions, pkg/nodeps and pkg/config/types
// enum values, global_dotddev_assets/commands, docs/content/users/usage/commands.md);
// the binary was not run. Project-specific provider commands under pull/push and
// project-type-specific shipped commands (drush, wp, ...) are listed as shipped by default.
const projectNames: Fig.Generator = {
  script: ["ddev", "list", "--json-output"],
  postProcess: (out) => {
    const projects: Fig.Suggestion[] = [];
    for (const line of out.split("\n")) {
      try {
        const { raw } = JSON.parse(line);
        if (Array.isArray(raw)) {
          for (const p of raw) {
            projects.push({
              name: p.name,
              description: `${p.type} (${p.status})`,
            });
          }
        }
      } catch {
        // Not a JSON line
      }
    }
    return projects;
  },
};

const projectArg: Fig.Arg = {
  name: "projectname",
  isOptional: true,
  isVariadic: true,
  generators: projectNames,
};

const singleProjectArg: Fig.Arg = {
  name: "projectname",
  isOptional: true,
  generators: projectNames,
};

const projectOption = (description: string): Fig.Option => ({
  name: "--project",
  description,
  args: { name: "projectName", generators: projectNames },
});

const passthroughArgs: Fig.Arg = {
  name: "args",
  isOptional: true,
  isVariadic: true,
};

const yesOption = (name: string | string[] = ["--yes", "-y"]): Fig.Option => ({
  name,
  description: "Skip confirmation prompt",
});

const allOption = (description: string): Fig.Option => ({
  name: ["--all", "-a"],
  description,
});

const verboseOption: Fig.Option = {
  name: ["--verbose", "-v"],
  description: "Output verbose error information with Bash set -x",
};

const wrapTableOption: Fig.Option = {
  name: ["--wrap-table", "-W"],
  description: "Display table with wrapped text instead of truncating",
};

const serviceArg: Fig.Arg = {
  name: "service",
  default: "web",
  suggestions: ["web", "db"],
};

const projectTypes = [
  "asterios",
  "backdrop",
  "cakephp",
  "codeigniter",
  "craftcms",
  "drupal",
  "drupal6",
  "drupal7",
  "drupal8",
  "drupal9",
  "drupal10",
  "drupal11",
  "drupal12",
  "generic",
  "joomla",
  "laravel",
  "magento",
  "magento2",
  "maho",
  "modx",
  "php",
  "shopware6",
  "silverstripe",
  "symfony",
  "typo3",
  "wordpress",
  "wp-bedrock",
];

const phpVersions = [
  "5.6",
  "7.0",
  "7.1",
  "7.2",
  "7.3",
  "7.4",
  "8.0",
  "8.1",
  "8.2",
  "8.3",
  "8.4",
  "8.5",
  "8.6",
];

const databases = [
  ...["5.5", "10.0", "10.1", "10.2", "10.3", "10.4", "10.5", "10.6"].map(
    (v) => `mariadb:${v}`
  ),
  ...["10.7", "10.8", "10.11", "11.4", "11.8", "12.3"].map(
    (v) => `mariadb:${v}`
  ),
  ...["5.5", "5.6", "5.7", "8.0", "8.4", "9.7"].map((v) => `mysql:${v}`),
  ...["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"].map(
    (v) => `postgres:${v}`
  ),
];

const webEnvironmentOptions = (suffix: string): Fig.Option[] => [
  {
    name: "--web-environment",
    description: `Set the environment variables in the web container, like --web-environment="TYPO3_CONTEXT=Development,SOMEENV=someval"${suffix}`,
    args: { name: "variables" },
  },
  {
    name: "--web-environment-add",
    description:
      'Append environment variables to the web container, like --web-environment-add="TYPO3_CONTEXT=Development,SOMEENV=someval"',
    args: { name: "variables" },
  },
];

const performanceModeOptions = (
  modes: string[],
  reset: string
): Fig.Option[] => [
  {
    name: "--performance-mode",
    description: "Performance optimization mode",
    args: { name: "mode", suggestions: modes },
  },
  { name: "--performance-mode-reset", description: reset },
];

const xhprofModeOptions = (modes: string[], reset: string): Fig.Option[] => [
  {
    name: "--xhprof-mode",
    description: "XHProf mode",
    args: { name: "mode", suggestions: modes },
  },
  { name: "--xhprof-mode-reset", description: reset },
];

const portOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "port" },
});

const databaseOption = (description: string): Fig.Option => ({
  name: ["--database", "-d"],
  description,
  args: { name: "database", default: "db" },
});

const providerCommand = (verb: "pull" | "push", provider: string) => {
  const noun = verb === "pull" ? "pulling" : "pushing";
  const subcommand: Fig.Subcommand = {
    name: provider,
    description: `${verb === "pull" ? "Pull" : "Push"} with ${provider}`,
    options: [
      {
        name: "--environment",
        description:
          "Add or override environment variables, like ENV1=val1,ENV2=val2",
        args: { name: "environment" },
      },
      {
        name: ["--skip-confirmation", "-y"],
        description: "Skip confirmation step",
      },
      { name: "--skip-db", description: `Skip ${noun} database archive` },
      { name: "--skip-files", description: `Skip ${noun} file archive` },
      ...(verb === "pull"
        ? [
            {
              name: "--skip-import",
              description:
                "Download file and/or database archives, but do not import them",
            },
          ]
        : []),
    ],
  };
  return subcommand;
};

// Providers shipped in every project's .ddev/providers; custom providers are
// project-specific and become subcommands of pull and push when configured.
const providers = ["acquia", "lagoon", "pantheon", "platform", "upsun"];

const toggleCommand = (
  name: string,
  description: string,
  values: string[]
): Fig.Subcommand => ({
  name,
  description,
  args: { name: "state", isOptional: true, suggestions: values },
});

const webCommand = (
  name: string | string[],
  description: string
): Fig.Subcommand => ({ name, description, args: passthroughArgs });

const databaseClientCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({ name, description, args: passthroughArgs });

const hostCommand = (
  name: string,
  description: string,
  args?: Fig.Arg | Fig.Arg[]
): Fig.Subcommand => ({ name, description, ...(args && { args }) });

const commands: Fig.Subcommand[] = [
  {
    name: ["add-on", "addon", "add-ons", "addons"],
    description:
      "A collection of commands for managing installed 3rd party add-ons",
    subcommands: [
      {
        name: ["get", "install"],
        description:
          "Get/Download a 3rd party add-on (service, provider, etc.)",
        args: {
          name: "addonOrURL",
          description:
            "GitHub repository (owner/repo), URL of a tarball or local path",
        },
        options: [
          {
            name: "--default-branch",
            description: "Install from the last commit in the default branch",
            exclusiveOn: ["--version", "--pr"],
          },
          projectOption("Name of the project to install the add-on in"),
          {
            name: "--pr",
            description: "Install from a pull request number",
            args: { name: "number" },
            exclusiveOn: ["--version", "--default-branch"],
          },
          {
            name: "--skip-deps",
            description: "Skip installing add-on dependencies",
          },
          {
            name: "--version",
            description:
              "Specify a particular version, branch name or commit SHA of the add-on to install",
            args: { name: "version" },
            exclusiveOn: ["--default-branch", "--pr"],
          },
          verboseOption,
        ],
      },
      {
        name: "list",
        description: "List available or installed DDEV add-ons",
        options: [
          {
            name: "--all",
            description:
              "No longer has any effect, all add-ons are shown by default",
            deprecated: true,
          },
          { name: "--installed", description: "Show installed DDEV add-ons" },
          {
            ...projectOption(
              "Name of the project to list the add-ons for, only with --installed"
            ),
            dependsOn: ["--installed"],
          },
          wrapTableOption,
        ],
      },
      {
        name: "remove",
        description:
          "Remove a DDEV add-on which was previously installed in this project",
        args: { name: "addonOrURL" },
        options: [
          projectOption("Name of the project to remove the add-on from"),
          verboseOption,
        ],
      },
      {
        name: "search",
        description: "Search available DDEV add-ons",
        args: { name: "search-term", isVariadic: true },
        options: [wrapTableOption],
      },
      {
        name: "update",
        description:
          "Update installed add-ons to their latest available version",
        args: { name: "addonName", isOptional: true, isVariadic: true },
        options: [
          {
            name: "--dry-run",
            description:
              "Show which add-ons would be updated without installing anything",
          },
          projectOption("Name of the project to update the add-ons for"),
          verboseOption,
          yesOption(),
        ],
      },
    ],
  },
  {
    name: "aliases",
    description:
      "Shows all aliases for each command in the current context (global or project)",
  },
  webCommand(["artisan", "art"], "Run artisan CLI inside the web container"),
  webCommand(["asterios", "ast"], "Run asterios CLI inside the web container"),
  {
    name: "auth",
    description: "A collection of authentication commands",
    subcommands: [
      {
        name: "ssh",
        description:
          "Add SSH private key authentication to the ddev-ssh-agent container",
        options: [
          {
            name: ["--ssh-key-file", "-f"],
            description:
              "Path to SSH private key file, or - to read one key without a passphrase from stdin",
            isRepeatable: true,
            args: { name: "file", template: "filepaths" },
            exclusiveOn: ["--ssh-key-path", "-d"],
          },
          {
            name: ["--ssh-key-path", "-d"],
            description: "Path to directory with SSH private key(s)",
            isRepeatable: true,
            args: { name: "directory", template: "folders" },
            exclusiveOn: ["--ssh-key-file", "-f"],
          },
        ],
      },
    ],
  },
  toggleCommand("blackfire", "Enable or disable blackfire.io profiling", [
    "start",
    "stop",
    "on",
    "off",
    "enable",
    "disable",
    "true",
    "false",
    "status",
  ]),
  webCommand("cake", "Run cake CLI inside the web container"),
  {
    name: "clean",
    description: "Removes items DDEV has created",
    args: projectArg,
    options: [
      allOption("Clean all DDEV projects"),
      {
        name: "--dry-run",
        description: "Run the clean command without deleting",
      },
      yesOption(),
    ],
  },
  {
    name: "completion",
    description: "Generate the autocompletion script for the specified shell",
    subcommands: ["bash", "zsh", "fish", "powershell"].map((shell) => ({
      name: shell,
      description: `Generate the autocompletion script for ${shell}`,
      options: [
        {
          name: "--no-descriptions",
          description: "Disable completion descriptions",
        },
      ],
    })),
  },
  {
    name: ["composer", "co"],
    description: "Executes a Composer command within the web container",
    subcommands: [
      {
        name: "create-project",
        description:
          "Executes 'composer create-project' within the web container with the arguments and flags provided",
        args: passthroughArgs,
      },
      {
        name: "create",
        description: 'Use "ddev composer create-project" instead',
        deprecated: true,
        hidden: true,
        args: passthroughArgs,
      },
    ],
    args: passthroughArgs,
  },
  {
    name: "config",
    description:
      "Create or modify a DDEV project configuration in the current directory",
    subcommands: [
      {
        name: "global",
        description: "Change global configuration",
        options: [
          {
            name: "--docker-buildx-version",
            description:
              'Docker buildx version, "system" uses the installed plugin or specify a version like 0.33.0 to download it',
            hidden: true,
            args: { name: "version", default: "system" },
          },
          {
            name: "--fail-on-hook-fail",
            description: "If true, 'ddev start' will fail when a hook fails",
          },
          {
            name: "--instrumentation-opt-in",
            description: "Whether to allow instrumentation reporting",
          },
          {
            name: "--internet-detection-timeout-ms",
            description:
              "Increase timeout when checking internet timeout, in milliseconds",
            args: { name: "milliseconds", default: "3000" },
          },
          {
            name: "--letsencrypt-email",
            description: "Email associated with Let's Encrypt",
            args: { name: "email" },
          },
          portOption(
            "--mailpit-http-port",
            "Default Mailpit HTTP port for all projects, can be overridden by project configuration"
          ),
          portOption(
            "--mailpit-https-port",
            "Default Mailpit HTTPS port for all projects, can be overridden by project configuration"
          ),
          {
            name: "--no-bind-mounts",
            description:
              "If true, don't use bind-mounts, useful for environments like remote Docker where bind-mounts are impossible",
          },
          {
            name: "--no-tui",
            description:
              "If true, disable the interactive TUI dashboard when running bare 'ddev'",
          },
          {
            name: "--omit-containers",
            description:
              "Comma-delimited list of containers to omit, like --omit-containers=ddev-ssh-agent",
            args: {
              name: "containers",
              suggestions: ["ddev-router", "ddev-ssh-agent"],
            },
          },
          {
            name: "--omit-project-name-by-default",
            description:
              "If true, do not automatically write the 'name' field in the .ddev/config.yaml file",
          },
          {
            name: "--omit-snapshot-on-delete",
            description:
              "If true, omit the snapshot on 'ddev delete' by default",
          },
          ...performanceModeOptions(
            ["none", "mutagen"],
            "Reset performance mode to operating system default"
          ),
          {
            name: "--project-tld",
            description:
              "Default top-level domain for all projects, can be overridden by project configuration",
            args: { name: "tld", default: "ddev.site" },
          },
          {
            name: "--required-docker-compose-version",
            description: "Deprecated, docker-compose is now embedded",
            deprecated: true,
            args: { name: "version" },
          },
          {
            name: "--router",
            description: "Deprecated, traefik is the only router",
            deprecated: true,
            args: { name: "router" },
          },
          {
            name: "--router-bind-all-interfaces",
            description:
              "Bind host router ports on all interfaces, not only on the localhost network interface",
          },
          portOption(
            "--router-http-port",
            "Default router HTTP port for all projects, can be overridden by project configuration"
          ),
          portOption(
            "--router-https-port",
            "Default router HTTPS port for all projects, can be overridden by project configuration"
          ),
          {
            name: "--share-default-provider",
            description:
              "Default share provider for all projects, can be overridden by project configuration",
            args: {
              name: "provider",
              suggestions: ["ngrok", "cloudflared"],
            },
          },
          {
            name: "--simple-formatting",
            description:
              "If true, use simple formatting for tables and implicitly set NO_COLOR=1",
          },
          {
            name: "--ssh-agent-upstream",
            description:
              "Make ddev-ssh-agent relay to an existing SSH agent: 'host' for the host's agent or the path to an agent socket, empty uses DDEV's own agent",
            args: { name: "upstream", suggestions: ["host"] },
          },
          {
            name: "--table-style",
            description: "Table style for 'ddev list' and 'ddev describe'",
            args: {
              name: "style",
              default: "default",
              suggestions: ["default", "bold", "bright"],
            },
          },
          portOption(
            "--traefik-monitor-port",
            "Change the Traefik monitor port in case of port conflicts"
          ),
          {
            name: "--use-docker-compose-from-path",
            description: "Deprecated, docker-compose is now embedded",
            deprecated: true,
          },
          {
            name: "--use-hardened-images",
            description:
              "If true, use more secure 'hardened' images for an actual internet deployment",
          },
          {
            name: "--use-letsencrypt",
            description: "Enables experimental Let's Encrypt integration",
          },
          ...webEnvironmentOptions(""),
          {
            name: "--wsl2-no-windows-hosts-mgt",
            description:
              "WSL2 only, make DDEV ignore the Windows-side hosts file (for advanced use only)",
          },
          {
            name: "--xdebug-ide-location",
            description:
              "Where the IDE is running for Xdebug to reach it, for less usual IDE locations (for advanced use only)",
            args: { name: "location" },
          },
          ...xhprofModeOptions(
            ["prepend", "xhgui"],
            "Reset XHProf mode to default"
          ),
        ],
      },
    ],
    options: [
      {
        name: "--additional-fqdns",
        description:
          'Comma-delimited list of project FQDNs, or --additional-fqdns="" to remove any configured FQDNs',
        args: { name: "fqdns" },
      },
      {
        name: "--additional-hostnames",
        description:
          'Comma-delimited list of project hostnames, or --additional-hostnames="" to remove any configured additional hostnames',
        args: { name: "hostnames" },
      },
      {
        name: "--auto",
        description: "Automatically run config without prompting",
      },
      {
        name: "--bind-all-interfaces",
        description:
          "Bind host ports on all interfaces, not only on the localhost network interface",
      },
      {
        name: "--composer-root",
        description:
          "Relative path, from the project root, to the directory containing composer.json, where all Composer-related commands are executed",
        args: { name: "composer-root", template: "folders" },
      },
      {
        name: "--composer-root-default",
        description:
          'Unset a web service Composer root directory override, the same as --composer-root=""',
      },
      {
        name: "--composer-version",
        description:
          "Override the Composer version in the web container, may be empty or a specific version",
        args: {
          name: "version",
          suggestions: ["2", "2.2", "stable", "preview", "snapshot"],
        },
      },
      {
        name: "--corepack-enable",
        description:
          "Whether to run 'corepack enable' on Node.js configuration",
      },
      {
        name: "--create-docroot",
        description: "No longer needed or used",
        deprecated: true,
        hidden: true,
      },
      {
        name: "--database",
        description: "Specify the database type:version to use",
        args: {
          name: "type:version",
          default: "mariadb:11.8",
          suggestions: databases,
        },
      },
      {
        name: "--db-image",
        description: "Set the db container image (for advanced use only)",
        args: { name: "image" },
      },
      {
        name: "--db-image-default",
        description:
          'Set the default db container image, the same as --db-image=""',
      },
      {
        name: "--db-working-dir",
        description:
          "Override the default working directory for the db service",
        args: { name: "directory" },
      },
      {
        name: "--db-working-dir-default",
        description:
          'Unset a db service working directory override, the same as --db-working-dir=""',
      },
      {
        name: "--dbimage-extra-packages",
        description:
          'Comma-delimited list of Debian packages to add to the db container when the project is started, or --dbimage-extra-packages="" to remove previously configured packages',
        args: { name: "packages" },
      },
      {
        name: "--ddev-version-constraint",
        description: "A ddev_version_constraint to validate ddev against",
        args: { name: "constraint" },
      },
      {
        name: "--default-container-timeout",
        description:
          "Default time in seconds that DDEV waits for all containers to become ready on start",
        args: { name: "seconds", default: "120" },
      },
      {
        name: "--disable-settings-management",
        description:
          "Prevent DDEV from creating or updating CMS settings files",
      },
      {
        name: "--disable-upload-dirs-warning",
        description:
          "Disable warnings about upload-dirs not being set when using --performance-mode=mutagen",
      },
      {
        name: "--docroot",
        description:
          "Relative docroot of the project, like 'docroot' or 'htdocs' or 'web', defaults to empty, the current directory",
        args: { name: "docroot", template: "folders" },
      },
      {
        name: "--fail-on-hook-fail",
        description:
          "Decide whether 'ddev start' should be interrupted by a failing hook",
      },
      portOption("--host-db-port", "The db container's localhost-bound port"),
      portOption(
        "--host-https-port",
        "The web container's localhost-bound HTTPS port"
      ),
      portOption(
        "--host-webserver-port",
        "The web container's localhost-bound HTTP port"
      ),
      portOption(
        "--mailpit-http-port",
        "Router HTTP port to be used for Mailpit HTTP access"
      ),
      portOption(
        "--mailpit-https-port",
        "Router port to be used for Mailpit HTTPS access"
      ),
      {
        name: "--ngrok-args",
        description:
          "Provide extra args to ngrok in ddev share, use --share-provider-args instead",
        deprecated: true,
        args: { name: "args" },
      },
      {
        name: "--no-project-mount",
        description:
          "Whether to skip mounting project code into the web container",
      },
      {
        name: "--nodejs-root",
        description:
          "Relative path, from the project root, to the directory containing the Node.js version file (requires nodejs-version=auto or engine)",
        args: { name: "nodejs-root", template: "folders" },
      },
      {
        name: "--nodejs-version",
        description: "Specify the Node.js version to use",
        args: {
          name: "version",
          default: "24",
          suggestions: ["auto", "engine"],
        },
      },
      {
        name: "--omit-containers",
        description:
          "Comma-delimited list of container types that should not be started when the project is started",
        args: { name: "containers", suggestions: ["db", "ddev-ssh-agent"] },
      },
      ...performanceModeOptions(
        ["global", "none", "mutagen"],
        "Reset performance mode to global configuration"
      ),
      {
        name: "--php-version",
        description: "PHP version that will be enabled in the web container",
        args: { name: "version", default: "8.4", suggestions: phpVersions },
      },
      {
        name: "--project-name",
        description:
          "Project name of the project to configure, normally the same as the last part of the directory name",
        args: { name: "name" },
      },
      {
        name: "--project-tld",
        description: "Top-level domain to be used for projects",
        args: { name: "tld", default: "ddev.site" },
      },
      {
        name: "--project-type",
        description:
          "Project type of the project to configure, autodetected unless overridden with this flag",
        args: { name: "type", suggestions: projectTypes },
      },
      portOption("--router-http-port", "The router HTTP port for this project"),
      portOption(
        "--router-https-port",
        "The router HTTPS port for this project"
      ),
      {
        name: "--share-default-provider",
        description: "Default share provider for the project",
        args: {
          name: "provider",
          suggestions: ["ngrok", "cloudflared"],
        },
      },
      {
        name: "--share-provider-args",
        description: "Extra args to pass to the share provider in ddev share",
        args: { name: "args" },
      },
      {
        name: "--show-config-location",
        description:
          "Output the location of the .ddev/config.yaml file if it exists, or error that it doesn't exist",
      },
      {
        name: "--timezone",
        description:
          "Timezone for containers and PHP, like Europe/London or America/Denver or GMT or UTC, derived from the host system if unset",
        args: { name: "timezone" },
      },
      {
        name: "--update",
        description:
          "Update project settings based on detection and project-type overrides (except for 'generic' type)",
      },
      {
        name: "--upload-dirs",
        description:
          "Project's upload directories, the destination directories of 'ddev import-files', or --upload-dirs=\"\" to remove previously configured values",
        args: { name: "directories" },
      },
      {
        name: "--use-dns-when-possible",
        description:
          "Use DNS for hostname resolution instead of /etc/hosts when possible",
      },
      ...webEnvironmentOptions(
        ', or --web-environment="" to remove previously configured values'
      ),
      {
        name: "--web-image",
        description: "Set the web container image (for advanced use only)",
        args: { name: "image" },
      },
      {
        name: "--web-image-default",
        description:
          'Set the default web container image, the same as --web-image=""',
      },
      {
        name: "--web-working-dir",
        description:
          "Override the default working directory for the web service",
        args: { name: "directory" },
      },
      {
        name: "--web-working-dir-default",
        description:
          'Unset a web service working directory override, the same as --web-working-dir=""',
      },
      {
        name: "--webimage-extra-packages",
        description:
          'Comma-delimited list of Debian packages to add to the web container when the project is started, or --webimage-extra-packages="" to remove previously configured packages',
        args: { name: "packages" },
      },
      {
        name: "--webserver-type",
        description: "Project's desired webserver type",
        args: {
          name: "type",
          suggestions: ["nginx-fpm", "apache-fpm", "generic"],
        },
      },
      {
        name: "--working-dir-defaults",
        description: "Unset all service working directory overrides",
      },
      {
        name: "--xdebug-enabled",
        description: "Whether Xdebug is enabled in the web container",
      },
      ...xhprofModeOptions(
        ["global", "prepend", "xhgui"],
        "Reset XHProf mode to global configuration"
      ),
    ],
  },
  webCommand("console", "Run symfony console inside the web container"),
  webCommand("craft", "Run Craft CMS command inside the web container"),
  hostCommand("dbeaver", "Run DBeaver against current db", [
    { name: "db", isOptional: true },
    { name: "user", isOptional: true },
  ]),
  {
    name: "delete",
    description:
      "Remove all project information (including database) for an existing project",
    args: projectArg,
    subcommands: [
      {
        name: "images",
        description:
          "Deletes ddev/ddev-* Docker images not in use by current DDEV version",
        options: [
          allOption("Delete all Docker images created by DDEV"),
          yesOption(),
        ],
      },
    ],
    options: [
      allOption("Delete all projects"),
      {
        name: "--clean-containers",
        description:
          "Clean up all DDEV Docker containers which are not required by this version of DDEV",
      },
      {
        name: ["--omit-snapshot", "-O"],
        description: "Omit/skip database snapshot",
      },
      yesOption(),
    ],
  },
  {
    name: ["describe", "status", "st", "desc"],
    description: "Get a detailed description of a running DDEV project",
    args: singleProjectArg,
  },
  {
    name: "dotenv",
    description: "Commands for managing the contents of .env files",
    subcommands: [
      {
        name: "get",
        description:
          "Get the value of an environment variable from a .env file",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "global",
        description: "Commands for managing the contents of global .env files",
        subcommands: [
          {
            name: "get",
            description:
              "Get the value of an environment variable from a global .env file",
            args: { name: "file" },
          },
          {
            name: ["set", "add"],
            description:
              "Write values from the command line to a global .env file",
            args: { name: "file" },
          },
        ],
      },
      {
        name: ["set", "add"],
        description: "Write values from the command line to a .env file",
        args: { name: "file", template: "filepaths" },
      },
    ],
  },
  webCommand("dr", "Run dr CLI (Drupal 11.4+) inside the web container"),
  webCommand("drush", "Run drush CLI inside the web container"),
  {
    name: [".", "exec"],
    description:
      "Execute a shell command in the container for a service, uses the web service by default",
    args: { name: "command", isVariadic: true },
    options: [
      {
        name: ["--dir", "-d"],
        description: "Define the execution directory within the container",
        args: { name: "dir" },
      },
      {
        name: "--project",
        description:
          "Project to use, defaults to the one for the current directory",
        args: { name: "project", generators: projectNames },
      },
      {
        name: ["--quiet", "-q"],
        description: "Suppress detailed error output",
      },
      {
        name: "--raw",
        description:
          "Use raw exec (do not interpret with Bash inside container), default true",
      },
      {
        name: ["--service", "-s"],
        description: "Define the service to connect to, like web or db",
        args: serviceArg,
      },
      {
        name: ["--user", "-u"],
        description: "User to use within the container",
        args: { name: "user" },
      },
    ],
  },
  {
    name: "export-db",
    description: "Dump a database to a file or to stdout",
    args: singleProjectArg,
    options: [
      {
        name: "--bzip2",
        description: "Use bzip2 compression, use --compression=bzip2 instead",
        deprecated: true,
        hidden: true,
      },
      {
        name: "--compression",
        description:
          "Compression type, defaults to the --file extension, otherwise gzip",
        args: {
          name: "type",
          suggestions: ["gzip", "zstd", "xz", "bzip2", "none"],
        },
      },
      databaseOption("Target database to export from"),
      {
        name: ["--file", "-f"],
        description: "Path to a SQL dump file to export to",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["--gzip", "-z"],
        description: "Use gzip compression, use --compression=gzip instead",
        deprecated: true,
        hidden: true,
      },
      {
        name: "--target-db",
        description: "Target database to export from, use --database instead",
        deprecated: true,
        args: { name: "target-db", default: "db" },
      },
      {
        name: "--xz",
        description: "Use xz compression, use --compression=xz instead",
        deprecated: true,
        hidden: true,
      },
    ],
  },
  {
    name: "get",
    description:
      "Get/Download a 3rd party add-on (deprecated, use 'ddev add-on' instead)",
    deprecated: true,
    hidden: true,
    args: [{ name: "addonOrURL", isOptional: true }, singleProjectArg],
    options: [
      {
        name: "--all",
        description: "List unofficial add-ons in addition to the official ones",
      },
      { name: "--installed", description: "Show installed add-ons" },
      { name: "--list", description: "List available add-ons" },
      projectOption("Name of the project to install the add-on in"),
      {
        name: "--remove",
        description: "Remove an add-on",
        args: { name: "add-on" },
      },
      {
        name: "--version",
        description: "Specify a particular version of add-on to install",
        args: { name: "version" },
      },
      { name: ["--verbose", "-v"], description: "Extended/verbose output" },
    ],
  },
  hostCommand("heidisql", "Run HeidiSQL against current db", [
    { name: "database", isOptional: true },
    { name: "library", isOptional: true },
  ]),
  {
    name: "hostname",
    description: "Manage your hostfile entries",
    args: [
      { name: "hostname", isOptional: true },
      { name: "ip", isOptional: true },
    ],
    options: [
      {
        name: ["--check", "-c"],
        description:
          "Check to see if provided hostname is already in hosts file",
        exclusiveOn: ["--remove", "-r"],
      },
      {
        name: "--fire-bazooka",
        description: "Alias of --remove-inactive",
        hidden: true,
      },
      {
        name: ["--remove", "-r"],
        description: "Remove the provided host name - ip correlation",
        exclusiveOn: ["--check", "-c"],
      },
      {
        name: ["--remove-inactive", "-R"],
        description: "Remove host names of inactive projects",
      },
    ],
  },
  {
    name: "import-db",
    description: "Import a SQL dump file into the project",
    args: singleProjectArg,
    options: [
      databaseOption("Target database to import into"),
      {
        name: "--extract-path",
        description: "Path to extract within the archive",
        args: { name: "path" },
      },
      {
        name: ["--file", "-f"],
        description:
          "Path to a SQL dump in .sql, .tar, .tar.gz, .tar.bz2, .tar.xz, .tar.zst, .tgz, or .zip format",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "--no-drop",
        description: "Do not drop the database before importing",
      },
      { name: "--no-progress", description: "Do not output progress" },
      {
        name: ["--progress", "-p"],
        description:
          "Display a progress bar during import, use --no-progress instead",
        deprecated: true,
      },
      {
        name: "--src",
        description: "Path to a SQL dump, use --file instead",
        deprecated: true,
        args: { name: "src", template: "filepaths" },
      },
      {
        name: "--target-db",
        description: "Target database to import into, use --database instead",
        deprecated: true,
        args: { name: "target-db", default: "db" },
      },
    ],
  },
  {
    name: "import-files",
    description:
      "Pull the uploaded files directory of an existing project to the default public upload directory of your project",
    options: [
      {
        name: "--extract-path",
        description: "Path to extract within the archive",
        args: { name: "path" },
      },
      {
        name: ["--source", "-s"],
        description:
          "Path to the source directory or source archive in .tar, .tar.gz, .tar.bz2, .tar.xz, .tar.zst, .tgz, or .zip format",
        args: { name: "source", template: ["filepaths", "folders"] },
      },
      {
        name: "--src",
        description:
          "Path to the source directory or archive, use --source instead",
        deprecated: true,
        args: { name: "src", template: ["filepaths", "folders"] },
      },
      {
        name: ["--target", "-t"],
        description: "Target upload dir, defaults to the first upload dir",
        args: { name: "target" },
      },
    ],
  },
  {
    name: "launch",
    description: "Launch a browser with the current site",
    args: {
      name: "path or URL",
      description: "Path to append to the project URL, or a full URL",
      isOptional: true,
    },
    options: [
      {
        name: ["--mailpit", "-m"],
        description: "Launch the Mailpit UI",
      },
      {
        name: "--print-url",
        description: "Print the URL instead of opening a browser",
      },
      {
        name: "--qr",
        description:
          "Print the URL and its QR code instead of opening a browser",
      },
    ],
  },
  {
    name: ["list", "l", "ls"],
    description: "List projects",
    options: [
      {
        name: ["--active-only", "-A"],
        description: "Only display currently active projects",
      },
      {
        name: "--continuous",
        description: "Emit project information until the command is stopped",
      },
      {
        name: ["--continuous-sleep-interval", "-I"],
        description:
          "Time in seconds between 'ddev list --continuous' output lists",
        args: { name: "seconds", default: "1" },
      },
      {
        name: ["--type", "-t"],
        description: "Show only projects of this type",
        args: { name: "type", suggestions: projectTypes },
      },
      {
        name: ["--wrap-table", "-W"],
        description: "Display table with wrapped text if required",
      },
    ],
  },
  {
    name: "logs",
    description: "Get the logs from your running services",
    args: singleProjectArg,
    options: [
      {
        name: ["--follow", "-f"],
        description: "Follow the logs in real time",
      },
      {
        name: ["--service", "-s"],
        description: "Service to retrieve logs from, like web or db",
        args: serviceArg,
      },
      {
        name: "--tail",
        description: "How many lines to show",
        args: { name: "lines" },
      },
      { name: ["--time", "-t"], description: "Add timestamps to logs" },
    ],
  },
  webCommand("magento", "Run magento CLI inside the web container"),
  webCommand("maho", "Run Maho CLI inside the web container"),
  hostCommand("mailpit", "Launch a browser with Mailpit"),
  databaseClientCommand(
    "mariadb",
    "Run mariadb client in the db container with 'root' user privileges"
  ),
  {
    name: "mutagen",
    description: "Commands for Mutagen status and sync, etc",
    subcommands: [
      {
        name: "logs",
        description: "Show Mutagen logs for debugging",
        options: [{ name: "--verbose", description: "Show full Mutagen logs" }],
      },
      {
        name: "monitor",
        description: "Monitor Mutagen status",
        args: singleProjectArg,
      },
      {
        name: "reset",
        description: "Reset Mutagen for project",
        args: singleProjectArg,
      },
      {
        name: ["status", "st"],
        description: "Shows Mutagen sync status",
        args: singleProjectArg,
        options: [
          {
            name: ["--verbose", "-l"],
            description: "Extended verbose output for Mutagen status",
          },
        ],
      },
      {
        name: "sync",
        description: "Explicit sync for Mutagen",
        args: singleProjectArg,
        options: [
          {
            name: "--verbose",
            description: "Extended verbose output for Mutagen status",
          },
        ],
      },
      {
        name: "version",
        description:
          "Display the version of the Mutagen binary and the location of its components",
      },
    ],
  },
  databaseClientCommand(
    "mysql",
    "Run mysql client in the db container with 'root' user privileges"
  ),
  webCommand("npm", "Run npm inside the web container"),
  webCommand("npx", "Run npx inside the web container"),
  webCommand("php", "Run php inside the web container"),
  hostCommand(
    "phpmyadmin",
    "Prompt downloading phpMyAdmin if it is not installed"
  ),
  webCommand("pint", "Run Pint inside the web container"),
  {
    name: ["poweroff", "powerdown"],
    description: "Completely stop all projects and containers",
  },
  databaseClientCommand("psql", "Run pgsql client in the db container"),
  {
    name: "pull",
    description: "Pull files and database using a configured provider plugin",
    subcommands: providers.map((p) => providerCommand("pull", p)),
  },
  {
    name: "push",
    description: "Push files and database using a configured provider plugin",
    subcommands: providers.map((p) => providerCommand("push", p)),
  },
  hostCommand("querious", "Run Querious with current project database", {
    name: "database",
    isOptional: true,
  }),
  {
    name: "restart",
    description: "Restart a project or several projects",
    args: projectArg,
    options: [
      {
        ...allOption("Restart all projects"),
        exclusiveOn: ["--service", "-s"],
      },
      {
        name: "--no-cache",
        description: "Rebuild custom Docker image layers without cache",
      },
      {
        name: ["--omit-snapshot", "-O"],
        description:
          "With --reset-database, skip the snapshot of the database being removed",
      },
      {
        name: "--profiles",
        description: "Start optional comma-separated Docker Compose profiles",
        args: { name: "profiles" },
        exclusiveOn: ["--service", "-s"],
      },
      {
        name: "--reset-database",
        description:
          "Remove the project's existing database and start over with a new one",
        exclusiveOn: ["--service", "-s"],
      },
      {
        name: "--seed-snapshot",
        description:
          "Seed a brand-new database volume from this snapshot name or file, instead of the stock starter database",
        args: { name: "snapshot", template: "filepaths" },
        exclusiveOn: ["--service", "-s"],
      },
      {
        name: ["--service", "-s"],
        description: "Restart only these comma-separated services",
        args: { name: "services", suggestions: ["web", "db"] },
        exclusiveOn: [
          "--all",
          "-a",
          "--profiles",
          "--reset-database",
          "--seed-snapshot",
        ],
      },
      {
        name: ["--skip-confirmation", "-y"],
        description: "Skip any confirmation steps",
      },
    ],
  },
  webCommand("sake", "Run Silverstripe sake CLI inside the web container"),
  hostCommand("self-upgrade", "Explain how to upgrade DDEV"),
  hostCommand("sequelace", "Run Sequel Ace with current project database", {
    name: "database",
    isOptional: true,
  }),
  {
    name: "share",
    description:
      "Share project on the internet via tunnel provider (ngrok, cloudflared, or custom)",
    args: singleProjectArg,
    options: [
      {
        name: "--ngrok-args",
        description:
          "Arguments to pass to the share provider, use --provider-args instead",
        deprecated: true,
        args: { name: "args" },
      },
      {
        name: "--provider",
        description: "Share provider to use (ngrok, cloudflared, or custom)",
        args: { name: "provider", suggestions: ["ngrok", "cloudflared"] },
      },
      {
        name: "--provider-args",
        description: "Arguments to pass to the share provider",
        args: { name: "args" },
      },
    ],
  },
  webCommand("shopware-cli", "Run shopware-cli inside the web container"),
  {
    name: "snapshot",
    description: "Create a database snapshot for one or more projects",
    args: projectArg,
    subcommands: [
      {
        name: "restore",
        description:
          "Restore a project's database to the provided snapshot version",
        args: { name: "snapshot_name|path", isOptional: true },
        options: [
          {
            name: ["--force", "-f"],
            description:
              "Restore a snapshot made by a different version of the same database server, which may not come up",
          },
          { name: "--latest", description: "Use latest snapshot" },
        ],
      },
    ],
    options: [
      allOption(
        "Snapshot all projects, will start the project if it is stopped or paused"
      ),
      { name: ["--cleanup", "-C"], description: "Cleanup snapshots" },
      { name: ["--list", "-l"], description: "List snapshots" },
      {
        name: ["--name", "-n"],
        description: "Provide a name for the snapshot",
        args: { name: "name" },
      },
      {
        name: "--uncompressed",
        description:
          "Write the snapshot as an uncompressed mariadb-backup/xtrabackup stream instead of compressing it, not available for PostgreSQL projects",
      },
      yesOption(),
    ],
  },
  webCommand("spark", "Run spark CLI inside the web container"),
  {
    name: "ssh",
    description:
      "Starts a shell session in the container for a service, uses web service by default",
    args: singleProjectArg,
    options: [
      {
        name: ["--dir", "-d"],
        description: "Destination directory within the container",
        args: { name: "dir" },
      },
      {
        name: ["--service", "-s"],
        description: "Service to connect to, like web or db",
        args: serviceArg,
      },
      {
        name: ["--user", "-u"],
        description: "User to use within the container",
        args: { name: "user" },
      },
    ],
  },
  {
    name: ["start", "add"],
    description: "Start a DDEV project",
    args: projectArg,
    options: [
      allOption("Start all projects"),
      {
        name: "--no-cache",
        description: "Rebuild custom Docker image layers without cache",
      },
      {
        name: ["--omit-snapshot", "-O"],
        description:
          "With --reset-database, skip the snapshot of the database being removed",
      },
      {
        name: "--profiles",
        description: "Start optional comma-separated Docker Compose profiles",
        args: { name: "profiles" },
      },
      {
        name: "--reset-database",
        description:
          "Remove the project's existing database and start over with a new one",
      },
      {
        name: ["--select", "-s"],
        description:
          "Interactively select a project to start, use tabbed autocompletion instead",
        deprecated: true,
      },
      {
        name: "--seed-snapshot",
        description:
          "Seed a brand-new database volume from this snapshot name or file, instead of the stock starter database",
        args: { name: "snapshot", template: "filepaths" },
      },
      {
        name: ["--skip-confirmation", "-y"],
        description: "Skip any confirmation steps",
      },
    ],
  },
  {
    name: ["stop", "rm", "remove"],
    description:
      "Stop and remove the containers of a project, does not lose or harm anything unless you add --remove-data",
    args: projectArg,
    options: [
      allOption(
        "Stop and remove all running or container-stopped projects and remove from global projects list"
      ),
      {
        name: ["--omit-snapshot", "-O"],
        description: "Omit/skip database snapshot",
      },
      {
        name: ["--remove-data", "-R"],
        description: "Remove stored project data (MySQL, logs, etc.)",
      },
      {
        name: ["--select", "-s"],
        description: "Interactively select a project to stop",
      },
      { name: ["--snapshot", "-S"], description: "Create database snapshot" },
      {
        name: "--stop-ssh-agent",
        description: "Stop the ddev-ssh-agent container",
      },
      {
        name: ["--unlist", "-U"],
        description:
          "Remove the project from global project list, it won't show in ddev list until started again",
      },
    ],
  },
  webCommand(
    "storefront-watch",
    "Run the Shopware storefront watcher via shopware-cli"
  ),
  hostCommand("tableplus", "Run TablePlus with current project database"),
  hostCommand("tablepro", "Run TablePro with current project database"),
  {
    name: "tui",
    description: "Launch the interactive TUI dashboard",
  },
  webCommand("typo3", "Run TYPO3 CLI (typo3) command inside the web container"),
  {
    name: ["utility", "ut", "d", "dbg", "debug"],
    description: "A collection of utility and debugging commands",
    options: [
      {
        name: "--show-hidden",
        description: "Show hidden developer/debugging commands",
      },
    ],
    subcommands: [
      {
        name: "addon-update-checker",
        description:
          "Run the DDEV add-on update checker script (for add-on developers)",
        options: [
          {
            name: ["--dir", "-d"],
            description:
              "Directory of the add-on to check, or a workspace containing multiple add-on directories, defaults to current directory",
            args: { name: "dir", template: "folders" },
          },
        ],
      },
      {
        name: "cd",
        description:
          "Use the 'ddevcd' function to quickly change to your project directory",
        args: singleProjectArg,
      },
      {
        name: "check-custom-config",
        description:
          "Display custom configuration files in the current project",
        options: [
          {
            name: "--all",
            description:
              "Show all custom configuration with annotations for add-on files, #ddev-generated, and #ddev-silent-no-warn",
          },
        ],
      },
      {
        name: "check-db-match",
        description:
          "Verify that the database in the ddev-db server matches the configured type/version",
      },
      {
        name: "compose-config",
        description:
          "Prints the docker-compose configuration of the current project",
        args: singleProjectArg,
      },
      {
        name: "configyaml",
        description: "Prints the project config.*.yaml usage",
        args: singleProjectArg,
        options: [
          {
            name: "--full-yaml",
            description:
              "Output complete processed YAML configuration instead of individual fields",
          },
          {
            name: "--omit-keys",
            description:
              "Comma-separated list of keys to omit from output, like web_environment",
            args: { name: "keys" },
          },
        ],
      },
      {
        name: "delete-volume",
        description: "Delete a Docker volume belonging to the current project",
        args: { name: "volume-name", isOptional: true },
        options: [
          {
            name: ["--yes", "-y"],
            description: "Skip confirmation prompts",
          },
        ],
      },
      {
        name: "diagnose",
        description:
          "Diagnose common DDEV issues with concise, actionable output",
      },
      {
        name: "dockercheck",
        description: "Diagnose DDEV Docker provider setup",
      },
      {
        name: "download-ddev",
        description:
          "Download ddev and ddev-hostname binaries built by CI or a release",
        options: [
          {
            name: "--arch",
            description:
              "Architecture override, defaults to the current architecture",
            args: { name: "arch", suggestions: ["amd64", "arm64"] },
          },
          {
            name: "--branch",
            description: "Branch name to download the build from",
            args: { name: "name" },
            exclusiveOn: ["--pr", "--commit", "--tag", "--stable", "--head"],
          },
          {
            name: "--commit",
            description:
              "Commit SHA, full or abbreviated, to download the build from",
            args: { name: "sha" },
            exclusiveOn: ["--pr", "--branch", "--tag", "--stable", "--head"],
          },
          {
            name: "--head",
            description: "Download the latest main build",
            exclusiveOn: ["--pr", "--branch", "--commit", "--tag", "--stable"],
          },
          {
            name: "--os",
            description: "OS override, defaults to the current OS",
            args: { name: "os", suggestions: ["macos", "linux", "windows"] },
          },
          {
            name: ["--output", "-o"],
            description:
              "Output directory, defaults to ~/tmp/ddev-download-ddev/<version>",
            args: { name: "dir", template: "folders" },
          },
          {
            name: "--owner",
            description:
              "GitHub owner/org, for PR builds this is the base repo, not a fork",
            args: { name: "owner", default: "ddev" },
          },
          {
            name: "--pr",
            description: "Pull request number to download the build from",
            args: { name: "number" },
            exclusiveOn: [
              "--branch",
              "--commit",
              "--tag",
              "--stable",
              "--head",
            ],
          },
          {
            name: "--repo",
            description: "GitHub repo",
            args: { name: "repo", default: "ddev" },
          },
          {
            name: "--stable",
            description: "Download the latest stable release",
            exclusiveOn: ["--pr", "--branch", "--commit", "--tag", "--head"],
          },
          {
            name: "--tag",
            description: "Release tag to download, like v1.25.3",
            args: { name: "tag" },
            exclusiveOn: ["--pr", "--branch", "--commit", "--stable", "--head"],
          },
        ],
      },
      {
        name: "download-images",
        description: "Download all images required by DDEV",
        args: projectArg,
        options: [allOption("Download all images for all projects")],
      },
      {
        name: "fix-commands",
        description:
          "Fix up global container commands without running ddev start",
      },
      {
        name: "get-volume-db-version",
        description:
          "Get the database type/version found in the ddev-dbserver's database volume, which may not be the same as the configured database type/version",
      },
      {
        name: "gob-decode",
        description: "Decode and display contents of a gob-encoded file",
        hidden: true,
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "hyperlink",
        description:
          "Print a URL, or link the URLs in stdin, as terminal hyperlinks when supported",
        hidden: true,
        args: [
          { name: "url", isOptional: true },
          { name: "text", isOptional: true },
        ],
      },
      {
        name: "instrumentation",
        description: "A collection of debugging commands for instrumentation",
        subcommands: [
          {
            name: "clean",
            description: "Removes usage statistics from the local cache",
          },
          {
            name: "flush",
            description: "Transmits usage statistics from the local cache",
          },
        ],
      },
      {
        name: "match-constraint",
        description:
          "Check if the currently installed ddev matches the specified version constraint",
        args: { name: "constraint" },
      },
      {
        name: "message-conditions",
        description: "Show message conditions of this version of ddev",
        hidden: true,
      },
      {
        name: "migrate-database",
        description:
          "Migrate a MySQL or MariaDB database to a different dbtype:dbversion, works only with MySQL and MariaDB, not with PostgreSQL",
        args: {
          name: "dbtype:dbversion",
          suggestions: databases.filter((d) => !d.startsWith("postgres")),
        },
      },
      {
        name: "mutagen",
        description: "Allows access to any Mutagen command",
        args: passthroughArgs,
      },
      {
        name: "mutagen-diagnose",
        description: "Diagnose Mutagen sync configuration and performance",
        options: [allOption("Show all Mutagen volumes system-wide")],
      },
      {
        name: "port-diagnose",
        description: "Identify processes occupying ports needed by DDEV",
        options: [
          {
            name: "--allow-sudo",
            description:
              "Permit sudo use for elevated port detection without interactive prompt",
          },
        ],
      },
      {
        name: ["rebuild", "refresh"],
        description:
          "Rebuilds the project's Docker cache with verbose output and restarts the project or the specified services",
        options: [
          allOption("Rebuild all services and restart the project"),
          { name: "--cache", description: "Keep Docker cache" },
          {
            name: ["--service", "-s"],
            description:
              "Rebuild these comma-separated services and restart them",
            args: { name: "services", default: "web" },
          },
        ],
      },
      {
        name: "remote-data",
        description:
          "Download and display remote configuration and sponsorship data",
        hidden: true,
        options: [
          {
            name: ["--type", "-t"],
            description: "Type of data to download",
            args: {
              name: "type",
              default: "remote-config",
              suggestions: ["remote-config", "sponsorship-data", "addon-data"],
            },
          },
          {
            name: "--update-storage",
            description: "Update local cached storage file, default true",
          },
        ],
      },
      {
        name: "test",
        description:
          "Run diagnostics on DDEV using the embedded test_ddev.sh script",
      },
      {
        name: "testcleanup",
        description:
          "Removes diagnostic projects prefixed with 'tryddevproject-'",
      },
      {
        name: "tls-diagnose",
        description: "Diagnose TLS/HTTPS certificate trust issues",
      },
      {
        name: "xdebug-diagnose",
        description:
          "Diagnose Xdebug configuration and connectivity (Experimental)",
        options: [
          {
            name: ["--interactive", "-i"],
            description:
              "Run interactive guided diagnostics with step-by-step prompts",
          },
        ],
      },
    ],
  },
  {
    name: "version",
    description: "Print DDEV version and component versions",
  },
  webCommand("wp", "Run WordPress CLI inside the web container"),
  toggleCommand("xdebug", "Enable or disable Xdebug", [
    "on",
    "off",
    "enable",
    "disable",
    "true",
    "false",
    "toggle",
    "status",
    "info",
  ]),
  toggleCommand(
    "xhgui",
    "Starts or checks status of XHGui/XHProf performance monitoring and UI",
    ["on", "off", "launch", "status"]
  ),
  toggleCommand("xhprof", "Enable or disable XHProf", [
    "on",
    "off",
    "enable",
    "disable",
    "true",
    "false",
    "toggle",
    "status",
  ]),
  webCommand(
    "yarn",
    "Run yarn inside the web container in the root of the project"
  ),
  webCommand(
    "admin-watch",
    "Run the Shopware admin (Vite) watcher via shopware-cli"
  ),
];

// `ddev help <command>` mirrors the command tree without options
const helpSubcommands = (list: Fig.Subcommand[]): Fig.Subcommand[] =>
  list
    .filter((c) => !c.hidden)
    .map(({ name, description, subcommands }) => ({
      name,
      description,
      ...(subcommands && { subcommands: helpSubcommands(subcommands) }),
    }));

const completionSpec: Fig.Spec = {
  name: "ddev",
  description: "DDEV local development environment",
  subcommands: [
    ...commands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(commands),
    },
  ],
  options: [
    {
      name: ["--json-output", "-j"],
      description: "If true, user-oriented output will be in JSON format",
      isPersistent: true,
    },
    {
      name: "--skip-hooks",
      description:
        "If true, any hook normally run by the command will be skipped",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    { name: ["--version", "-v"], description: "Show the DDEV version" },
  ],
};
export default completionSpec;
