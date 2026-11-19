// Laravel Herd v2.1.0 (herd.laravel.com changelog, 2026-11-05). Source:
// https://herd.laravel.com/docs/macos/advanced-usage/herd-cli.md plus the
// workspaces, profiler, sharing, per-site services and changelog pages (closed
// source, not installed here)
const icon =
  "data:image/svg+xml;base64,PHN2ZwogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0NDAgNTUwIj4KPHBhdGggZmlsbD0iI0Y5MzMyQiIgZD0iCiAgTSAwLjAwIDAuMDAKICBMIDE1MC4wNiAwLjAwCiAgTCAxNTAuMDIgMTk4LjI3CiAgQSAwLjU3IDAuNTcgMC4wIDAgMCAxNTAuNTggMTk4Ljg0CiAgQyAxNjcuNDcgMTk5LjAxIDE4NS4zNiAxOTguNDggMjAxLjQyIDE5OS41NgogIFEgMjQ3LjQzIDIwMi42NSAyODkuNzUgMjIxLjQ2CiAgUSAzNDYuNzMgMjQ3LjY5IDM4NS43MSAyOTYuNzUKICBRIDQxOS42NCAzNDAuMzQgNDMyLjkxIDM5NC4wMAogIEwgNDM3LjcxIDQxNy41MAogIEwgNDM3Ljc5IDQxOS41MAogIFEgNDM3LjgzIDQyNS4yOSA0MzkuNTUgNDMwLjgwCiAgTCA0NDAuMDAgNDQyLjMxCiAgTCA0NDAuMDAgNTUwLjAwCiAgTCAyOTAuMTkgNTUwLjAwCiAgUSAyODkuODkgNTA1LjAzIDI4OS45OCA0NjAuMDcKICBRIDI5MC4wMSA0NDcuMDYgMjg5LjA2IDQ0MC4xMgogIEMgMjgyLjUzIDM5Mi41MCAyNDQuNzAgMzU1LjM2IDE5Ni45NiAzNDkuNzUKICBDIDE4My4wMSAzNDguMTEgMTY1Ljc3IDM0OC45OCAxNTAuNTAgMzQ5LjA1CiAgQSAwLjUxIDAuNDkgMC4wIDAgMCAxNDkuOTkgMzQ5LjU0CiAgTCAxNDkuOTQgNTUwLjAwCiAgTCAwLjAwIDU1MC4wMAogIEwgMC4wMCAwLjAwCiAgWiIKLz4KPHBhdGggZmlsbD0iI0Y5MzMyQiIgZmlsbC1vcGFjaXR5PSIwLjcxOCIgZD0iCiAgTSAyOTEuMDYgMC4wMAogIEwgNDQwLjAwIDAuMDAKICBMIDQ0MC4wMCA0MTAuNTYKICBMIDQzOS43MSA0MTIuNTAKICBRIDQzOC4wMSA0MTUuMzQgNDM4LjQ2IDQxOC43NQogIFEgNDM4LjIxIDQxMy4yOSA0MzcuNzEgNDE3LjUwCiAgTCA0MzIuOTEgMzk0LjAwCiAgTCA0MzQuMDIgMzk1LjA2CiAgQSAxLjIyIDAuNTcgLTc2LjggMCAxIDQzNC4yMSAzOTUuOTgKICBDIDQzMy45OSAzOTcuOTIgNDM0Ljk5IDM5OS4zNiA0MzUuMjYgNDAwLjkyCiAgUSA0MzYuMzYgNDA3LjEyIDQzNy4zNiA0MTMuMzMKICBBIDAuNTEgMC4zOSA4NC42IDAgMCA0MzcuNzUgNDEzLjc1CiAgTCA0MzguMjYgNDEzLjc2CiAgQSAwLjgyIDAuNDggLTg0LjYgMCAwIDQzOC43OSA0MTMuMDIKICBRIDQzOS4wOCA0MTAuNTQgNDM5LjA5IDQwNC44MQogIFEgNDM5LjE5IDIwNC4xMyA0MzkuMTIgMi45NQogIEEgMS42OSAxLjY5IDAuMCAwIDAgNDM3LjQzIDEuMjYKICBMIDI5MC4wMyAxLjQyCiAgUSAyODkuNzcgMC4zNCAyOTEuMDYgMC4wMAogIFoiCi8+CjxwYXRoIGZpbGw9IiNGOTMzMkIiIGZpbGwtb3BhY2l0eT0iMC42NzEiIGQ9IgogIE0gNDMyLjkxIDM5NC4wMAogIFEgNDE5LjY0IDM0MC4zNCAzODUuNzEgMjk2Ljc1CiAgQyAzODQuNjEgMjkzLjA2IDM4MC45OCAyODkuODEgMzc4Ljc2IDI4Ny4xNQogIEMgMzU5LjI5IDI2My44MCAzMzEuOTQgMjQyLjQ4IDMwMy41MyAyMjcuNDUKICBRIDI5NS40NSAyMjMuMTcgMjkwLjMxIDIyMC44MAogIEwgMjkwLjE5IDIyMC42MgogIEEgMC43NiAwLjY1IDMxLjYgMCAxIDI5MC4wNiAyMjAuMjIKICBMIDI5MC4wMyAxLjQyCiAgTCA0MzcuNDMgMS4yNgogIEEgMS42OSAxLjY5IDAuMCAwIDEgNDM5LjEyIDIuOTUKICBRIDQzOS4xOSAyMDQuMTMgNDM5LjA5IDQwNC44MQogIFEgNDM5LjA4IDQxMC41NCA0MzguNzkgNDEzLjAyCiAgQSAwLjgyIDAuNDggLTg0LjYgMCAxIDQzOC4yNiA0MTMuNzYKICBMIDQzNy43NSA0MTMuNzUKICBBIDAuNTEgMC4zOSA4NC42IDAgMSA0MzcuMzYgNDEzLjMzCiAgUSA0MzYuMzYgNDA3LjEyIDQzNS4yNiA0MDAuOTIKICBDIDQzNC45OSAzOTkuMzYgNDMzLjk5IDM5Ny45MiA0MzQuMjEgMzk1Ljk4CiAgQSAxLjIyIDAuNTcgLTc2LjggMCAwIDQzNC4wMiAzOTUuMDYKICBMIDQzMi45MSAzOTQuMDAKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuNzg4IiBkPSIKICBNIDM4NS43MSAyOTYuNzUKICBRIDM0Ni43MyAyNDcuNjkgMjg5Ljc1IDIyMS40NgogIEwgMjkwLjMxIDIyMC44MAogIFEgMjk1LjQ1IDIyMy4xNyAzMDMuNTMgMjI3LjQ1CiAgQyAzMzEuOTQgMjQyLjQ4IDM1OS4yOSAyNjMuODAgMzc4Ljc2IDI4Ny4xNQogIEMgMzgwLjk4IDI4OS44MSAzODQuNjEgMjkzLjA2IDM4NS43MSAyOTYuNzUKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuOTgwIiBkPSIKICBNIDQzOS43MSA0MTIuNTAKICBMIDQzOS41NSA0MzAuODAKICBRIDQzNy44MyA0MjUuMjkgNDM3Ljc5IDQxOS41MAogIFEgNDM4LjQ2IDQyMS45NyA0MzguNDYgNDE4Ljc1CiAgUSA0MzguMDEgNDE1LjM0IDQzOS43MSA0MTIuNTAKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuNjcxIiBkPSIKICBNIDQzOC40NiA0MTguNzUKICBRIDQzOC40NiA0MjEuOTcgNDM3Ljc5IDQxOS41MAogIEwgNDM3LjcxIDQxNy41MAogIFEgNDM4LjIxIDQxMy4yOSA0MzguNDYgNDE4Ljc1CiAgWiIKLz4KICAgIDwvc3ZnPgo=";

const baseOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description:
      "Display help for the given command. When no command is given display help for the list command",
  },
  {
    name: ["--version", "-V"],
    description: "Display this application version",
  },
  {
    name: ["--quiet", "-q"],
    description: "Do not output any message",
  },
  {
    name: ["--verbose", "-vv", "-vvv", "-v"],
    description:
      "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
  },
  {
    name: "--ansi",
    description: "Force ANSI output",
  },
  {
    name: "--no-ansi",
    description: "Disable ANSI output",
  },
  {
    name: ["--no-interaction", "-n"],
    description: "Do not ask any interactive question",
  },
];

const combineOptions = (options: Fig.Option[] = []) => {
  if (options.length === 0) {
    return baseOptions;
  }

  return [...options, ...baseOptions];
};

const siteOption: Fig.Option = {
  name: "--site",
  description: "The site to use instead of the one in the current directory",
  args: { name: "site" },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Print machine-readable JSON output",
};

const mailFilters: Fig.Option[] = [
  {
    name: "--mailbox",
    description: "Only mails of this mailbox (exact match)",
    args: { name: "mailbox" },
  },
  {
    name: "--to",
    description: "Only mails to this recipient (partial match)",
    args: { name: "address" },
  },
  {
    name: "--from",
    description: "Only mails from this sender (partial match)",
    args: { name: "address" },
  },
  {
    name: "--subject",
    description: "Only mails with this subject (partial match)",
    args: { name: "subject" },
  },
];

const mailIdArg: Fig.Arg = { name: "id", description: "The mail ID" };

const insightsOptions: Fig.Option[] = [
  siteOption,
  { name: "--all", description: "Use the entries of all sites" },
  {
    name: "--type",
    description: "Only show entries of this type",
    args: { name: "type", suggestions: ["query", "log"] },
  },
];

const workspaceArg: Fig.Arg = {
  name: "workspace",
  description: "The workspace name or domain (omit inside a workspace)",
  isOptional: true,
};

const serviceArg: Fig.Arg = {
  name: "service",
  description: "The name of the service instance",
};

const serviceTypeArg: Fig.Arg = {
  name: "type",
  description: "The service type, e.g. mysql (see services:available)",
};

const completionSpec: Fig.Spec = {
  name: "herd",
  description:
    "Herd is a blazing fast, native Laravel and PHP development environment for macOS. It provides everything that you need to get started with Laravel development",
  icon: icon,
  subcommands: [
    {
      icon: icon,
      name: "completion",
      description: "Dump the shell completion script",
      args: {
        name: "shell",
        description:
          'The shell type (e.g. "bash"), the value of the "$SHELL" env var will be used if this is not given',
        suggestions: ["bash", "fish", "powershell", "zsh"],
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--debug",
          description: "Tail the completion debug log",
        },
      ]),
    },
    {
      icon: icon,
      name: "composer",
      description:
        "Proxy Composer commands with isolated site's PHP executable",
      loadSpec: "composer",
    },
    {
      icon: icon,
      name: "coverage",
      description:
        "Proxy PHP commands with isolated site's PHP executable and Xdebug code coverage enabled",
      loadSpec: "php",
    },
    {
      icon: icon,
      name: "db",
      description:
        "Open the database of the current or given site in your client",
      args: {
        name: "site",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "db:connection",
      description: "Show the site's database connection and a connection URL",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "db:create",
      description:
        "Create a database on the site's server (defaults to DB_DATABASE)",
      args: {
        name: "name",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "db:drop",
      description: "Drop a database on the site's server",
      args: {
        name: "name",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--force",
          description:
            "Allow dropping the database from the site's DB_DATABASE",
        },
      ]),
    },
    {
      icon: icon,
      name: "db:list",
      description: "List all databases on the site's server",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "db:use",
      description: "Point the site at another database by updating DB_DATABASE",
      args: {
        name: "database",
      },
      options: combineOptions([
        {
          name: "--create",
          description: "Create the database without asking if it doesn't exist",
        },
      ]),
    },
    {
      icon: icon,
      name: "debug",
      description:
        "Proxy PHP commands with isolated site's PHP executable and debug.ini loaded",
      loadSpec: "php",
    },
    {
      icon: icon,
      name: "debug:start",
      description: "Start a debug session (Herd Pro)",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "debug:stop",
      description:
        "Stop a debug session and display the captured data (Herd Pro)",
      options: combineOptions([
        { ...jsonOption, description: "Only print the captured data as JSON" },
      ]),
    },
    {
      icon: icon,
      name: "directory-listing",
      description:
        "Determine directory-listing behavior. Default is off, which means a 404 will display",
      args: {
        name: "status",
        description:
          "On or off. (default=off) will show a 404 page; [on] will display a listing if project folder exists but requested URI not found",
        suggestions: ["on", "off"],
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "edit",
      description: "Open the site in your favorite IDE",
      options: combineOptions([
        {
          name: "--path",
        },
      ]),
    },
    {
      icon: icon,
      name: "fetch-share-url",
      description: "Get the URL to the current share tunnel for Expose",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "forget",
      description:
        "Remove the current working (or specified) directory from Herd's list of paths",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command_name",
        description: 'The command name [default: "help"]',
        isOptional: true,
        generators: {
          script: ["herd", "list", "--raw"],
          postProcess: (out) =>
            out
              .trim()
              .split("\n")
              .filter((line) => line.trim())
              .map((line) => {
                const [command, ...descriptionParts] = line
                  .trim()
                  .split(/\s{2,}/);
                return {
                  name: command,
                  description: descriptionParts.join(" "),
                  icon: icon,
                };
              }),
        },
        filterStrategy: "fuzzy",
      },
      options: combineOptions([
        {
          name: "--format",
          description:
            'The output format (txt, xml, json, or md) [default: "txt"]',
        },
      ]),
    },
    {
      icon: icon,
      name: "ini",
      description: "Open the php.ini of the global or isolated PHP version",
      args: {
        name: "phpVersion",
        description: "The PHP version whose php.ini to open; e.g. 8.3",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "init",
      description:
        "Configure the site from herd.yml, or start a wizard to create one",
      options: combineOptions([
        {
          name: "--fresh",
          description: "Overwrite the existing herd.yml with a new one",
        },
      ]),
    },
    {
      icon: icon,
      name: "insights:analyze",
      description:
        "Find N+1 queries, duplicate and slow queries, errors and slow requests",
      options: combineOptions([
        ...insightsOptions,
        {
          name: "--after",
          description:
            "Only analyze entries after the cursor of a previous run",
          args: { name: "cursor" },
        },
      ]),
    },
    {
      icon: icon,
      name: "insights:capture",
      description:
        "Show whether Herd captures runtime context, or turn it on or off",
      args: {
        name: "state",
        suggestions: ["on", "off"],
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "insights:clear",
      description: "Discard the captured entries of the site",
      options: combineOptions(insightsOptions),
    },
    {
      icon: icon,
      name: "insights:list",
      description: "Show the captured entries of a site, grouped by request",
      options: combineOptions(insightsOptions),
    },
    {
      icon: icon,
      name: "insights:status",
      description:
        "Show whether Herd captures runtime context and which sites have entries",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "insights:watch",
      description: "Stream new captured entries as they arrive",
      options: combineOptions([
        ...insightsOptions,
        { ...jsonOption, description: "Print one JSON object per line" },
      ]),
    },
    {
      icon: icon,
      name: "isolate",
      description:
        "Change the version of PHP used by Herd to serve the current working directory",
      args: {
        name: "phpVersion",
        description: "The PHP version you want to use; e.g 8.1",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to isolate (e.g. if the site isn't linked as its directory name)",
        },
        {
          name: "--silent",
        },
      ]),
    },
    {
      icon: icon,
      name: "isolate-node",
      description:
        "Change the version of Node used by the CLI for the current working directory",
      args: {
        name: "nodeVersion",
        description: "The Node version you want to use; e.g 21",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "isolated",
      description: "List all sites using isolated versions of PHP",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "isolated-node",
      description: "List all sites using isolated versions of Nodes",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "laravel:update",
      description: "Update the Laravel Installer to the latest version",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "link",
      description: "Link the current working directory to Herd",
      options: combineOptions([
        {
          name: "--secure",
          description: "Link the site with a trusted TLS certificate",
        },
        {
          name: "--isolate",
          description:
            "Isolate the site to the PHP version specified, for example 8.3",
          args: { name: "phpVersion" },
        },
        {
          name: "--update-env",
          description:
            "Update APP_URL in .env even when it already contains the current TLD",
        },
      ]),
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: "links",
      description: "Display all of the registered Herd links",
      options: combineOptions(),
    },
    {
      name: "list",
      description: "List commands",
      args: {
        name: "namespace",
        description: "The namespace name",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--raw",
          description: "To output raw command list",
        },
        {
          name: "--format",
          description:
            'The output format (txt, xml, json, or md) [default: "txt"]',
        },
        {
          name: "--short",
          description: "To skip describing commands' arguments",
        },
      ]),
    },
    {
      icon: icon,
      name: "log",
      description: "Tail log file",
      args: {
        name: "service",
        description: "The service to tail, e.g. nginx (omit to list log files)",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: ["--lines", "-n"],
        },
        {
          name: ["--follow", "-f"],
        },
      ]),
    },
    {
      icon: icon,
      name: "logs",
      description: "Show the log viewer UI for the given site",
      options: combineOptions([
        {
          name: "--sites",
          description:
            "Specify the site to tinker with (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "loopback",
      description: "Get or set the loopback address used for Herd sites",
      args: {
        name: "loopback",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:attachment",
      description: "Copy an attachment of a mail into the current directory",
      args: [mailIdArg, { name: "file", description: "The attachment name" }],
      options: combineOptions([
        {
          name: "--out",
          description: "The path to copy the attachment to",
          args: { name: "path", template: "folders" },
        },
      ]),
    },
    {
      icon: icon,
      name: "mail:attachments",
      description: "List the attachments of a mail with their stored paths",
      args: mailIdArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:clear",
      description: "Delete all captured mails, or only the mails of a mailbox",
      args: {
        name: "mailbox",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:config",
      description: "Show the mail server host, port and the .env values to use",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:delete",
      description: "Delete a mail and its attachments",
      args: mailIdArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:latest",
      description: "Show the newest captured mail",
      options: combineOptions(mailFilters),
    },
    {
      icon: icon,
      name: "mail:links",
      description: "Print all links of a mail, one per line",
      args: mailIdArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:list",
      description: "List captured mails, newest first",
      options: combineOptions([
        ...mailFilters,
        {
          name: "--since",
          description:
            'Only mails received after a date or time like "5 minutes ago"',
          args: { name: "time" },
        },
        {
          name: "--limit",
          description: "The number of mails to show [default: 50]",
          args: { name: "limit" },
        },
      ]),
    },
    {
      icon: icon,
      name: "mail:mailboxes",
      description:
        "List all mailboxes (the SMTP usernames apps sent mail with)",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "mail:show",
      description:
        "Show a mail with its sender, recipients, subject, attachments and body",
      args: mailIdArg,
      options: combineOptions([
        {
          name: "--format",
          description: "The output format [default: plain text]",
          args: { name: "format", suggestions: ["html", "raw", "json"] },
        },
        {
          name: "--headers",
          description: "Print all headers",
        },
      ]),
    },
    {
      icon: icon,
      name: "mail:wait",
      description: "Wait for a new mail that matches the filters and show it",
      options: combineOptions([
        ...mailFilters,
        {
          name: "--timeout",
          description:
            "Seconds to wait before exiting with code 1 [default: 30]",
          args: { name: "seconds" },
        },
      ]),
    },
    {
      icon: icon,
      name: "node:install",
      description:
        "Install a Node.js version, or update an installed major version",
      args: {
        name: "nodeVersion",
        description: "The Node version to install; e.g. 22 or 22.11.0",
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "node:list",
      description: "List the Node.js versions installed via Herd's nvm",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "open",
      description:
        "Open the site for the current (or specified) directory in your browser",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "park",
      description:
        "Register the current working (or specified) directory with Herd",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "parked",
      description: "Display all the current sites within parked paths",
      options: combineOptions([
        {
          name: "--json",
        },
      ]),
    },
    {
      icon: icon,
      name: "paths",
      description: "Get all of the paths registered with Herd",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "php",
      description: "Proxy PHP commands with isolated site's PHP executable",
      args: {
        name: "command",
        loadSpec: "php",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to use to get the PHP version (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "php:install",
      description: "Install a PHP version",
      args: {
        name: "phpVersion",
        description: "The PHP version to install; e.g. 8.4",
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "php:list",
      description: "List all PHP versions and their installation status",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "php:update",
      description: "Update a PHP version to the latest patch release",
      args: {
        name: "phpVersion",
        description: "The PHP version to update, or all",
        suggestions: [
          { name: "all", description: "Update every installed PHP version" },
        ],
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      // ponytail: only named in the 2.1.0 changelog; description inferred
      name: "processes",
      description: "List the processes Herd runs for the site's dev stack",
      options: combineOptions([
        {
          name: "--all",
          description: "Include the processes of all sites",
        },
      ]),
    },
    {
      icon: icon,
      name: "profile",
      description: "Profile a PHP command with SPX and show the results",
      loadSpec: "php",
      options: [
        {
          name: "--live",
          description: "Show profiling data regularly for long-running scripts",
        },
      ],
    },
    {
      icon: icon,
      name: "proxies",
      description: "Display all of the proxy sites",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "proxy",
      description:
        "Create an Nginx proxy site for the specified host. Useful for Reverb, Docker, etc",
      args: [
        {
          name: "domain",
        },
        {
          name: "host",
        },
      ],
      options: combineOptions([
        {
          name: "--secure",
          description: "Create a proxy with a trusted TLS certificate",
        },
      ]),
    },
    {
      icon: icon,
      name: "restart",
      description: "Restart the Herd services",
      args: {
        name: "service",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "secure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--expireIn",
          description:
            'The amount of days the self signed certificate is valid for. Default is set to "368" [default: 368]',
        },
      ]),
    },
    {
      icon: icon,
      name: "secured",
      description: "Secure the given domain with a trusted TLS certificate",
      options: combineOptions([
        {
          name: "--expiring",
          description:
            "Limits the results to only sites expiring within the next 60 days",
        },
        {
          name: "--days",
          description:
            "To be used with --expiring. Limits the results to only sites expiring within the next X days. Default is set to 60. [default: 60]",
        },
      ]),
    },
    {
      icon: icon,
      name: "services:available",
      description: "List all service types that can be created",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:clone",
      description: "Clone a service instance including its data and config",
      args: serviceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:create",
      description: "Create a new service instance",
      args: serviceTypeArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:delete",
      description: "Delete a service instance and all its data",
      args: serviceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:list",
      description: "List all service instances and their status",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:start",
      description: "Start a service instance",
      args: serviceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:stop",
      description: "Stop a service instance",
      args: serviceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "services:versions",
      description: "List all available versions for a service type",
      args: serviceTypeArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "share",
      description: "Share the current site via an Expose tunnel",
      args: {
        name: "url",
        description: "The local site URL to share, e.g. https://my-app.test",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--subdomain",
          description: "The subdomain to request for the share URL",
          args: { name: "subdomain" },
        },
        {
          name: "--server",
          description: "The Expose server region, e.g. us-1",
          args: { name: "server" },
        },
        {
          name: "--basicAuth",
          description: "Protect the share URL with basic auth (user:password)",
          args: { name: "credentials" },
        },
      ]),
    },
    {
      icon: icon,
      name: "site-information",
      description: "Display information about the specified site",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "site:env",
      description: "Read and edit the .env file of a site",
      subcommands: [
        {
          name: "list",
          description: "List all variables",
        },
        {
          name: "get",
          description: "Print the value of a variable",
          args: { name: "key" },
        },
        {
          name: "set",
          description: "Set a variable",
          args: [{ name: "key" }, { name: "value" }],
        },
        {
          name: "unset",
          description: "Remove a variable",
          args: { name: "key" },
        },
      ],
      options: combineOptions(),
    },
    {
      icon: icon,
      // ponytail: only named in the 2.1.0 changelog; description inferred
      name: "site:error",
      description: "Show the latest exception of a site",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "site:info",
      description:
        "Show a site's URL, PHP and Node versions, services, capabilities and workspaces",
      options: combineOptions([siteOption]),
    },
    {
      icon: icon,
      name: "site:services",
      description:
        "Show or change the database, queue, cache and broadcasting services of a site (Herd Pro)",
      args: [
        {
          name: "category",
          suggestions: ["database", "queue", "cache", "broadcasting"],
          isOptional: true,
        },
        {
          name: "service",
          description:
            "A built-in option or the name, type or ID of an installed service",
          suggestions: [
            "sqlite",
            "sync",
            "database",
            "array",
            "file",
            "log",
            "null",
            "unmanaged",
          ],
          isOptional: true,
        },
      ],
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "sites",
      description: "List all sites that Herd is currently serving",
      options: combineOptions([jsonOption]),
    },
    {
      icon: icon,
      name: "start",
      description: "Start the Herd services",
      args: {
        name: "service",
        suggestions: ["nginx", "dnsmasq", "php"],
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "status",
      description:
        "Show a health check of Herd, PHP-FPM, the mail and dump servers and all services",
      options: combineOptions([jsonOption]),
    },
    {
      icon: icon,
      name: "stop",
      description: "Stop the Herd services",
      args: {
        name: "service",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "studio",
      description: "Open Herd Studio for the current or given site",
      args: {
        name: "site",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "tinker",
      description: "Run tinker/Tinkerwell",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to tinker with (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "tld",
      description: "[domain] Get or set the TLD used for Herd sites",
      args: {
        name: "tld",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unisolate",
      description:
        "Stop customizing the version of PHP used by Herd to serve the current working directory",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to un-isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "unisolate-node",
      description:
        "Stop customizing the version of Node used the CLI for the current working directory",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to un-isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "unlink",
      description: "Remove the specified Herd link",
      args: {
        name: "name",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unproxy",
      description: "Delete an Nginx proxy config",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unsecure",
      description:
        "Stop serving the given domain over HTTPS and remove the trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--all",
        },
        {
          name: "--silent",
        },
      ]),
    },
    {
      icon: icon,
      name: "use",
      description: "Change the version of PHP used by Herd",
      args: {
        name: "phpVersion",
        description: "The PHP version you want to use; e.g. 8.3",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "which",
      description:
        "Display which Herd driver serves the current working directory",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "which-php",
      description: "Get the PHP executable path for a given site",
      args: {
        name: "site",
        description: "The site to get the PHP executable path for",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "workspace",
      description:
        "Create a workspace for the site on its own branch and domain, or register a git worktree",
      args: {
        name: "name",
        description: "The branch and domain name (random if omitted)",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--database",
          description: "How the workspace gets its database [default: shared]",
          args: {
            name: "mode",
            suggestions: [
              { name: "shared", description: "Use the parent site's database" },
              { name: "clone", description: "Copy the parent database" },
              { name: "empty", description: "New empty database, migrated" },
            ],
          },
        },
        {
          name: "--no-migrate",
          description: "Don't run migrations on an empty database",
        },
        {
          name: "--local",
          description:
            "Base the workspace on the local branch, unpushed commits included",
          exclusiveOn: ["--remote"],
        },
        {
          name: "--remote",
          description:
            "Base the workspace on the last pushed state of the branch",
          exclusiveOn: ["--local"],
        },
        {
          name: "--secure",
          description: "Force HTTPS on, regardless of the parent site",
          exclusiveOn: ["--no-secure"],
        },
        {
          name: "--no-secure",
          description: "Force HTTPS off, regardless of the parent site",
          exclusiveOn: ["--secure"],
        },
        { ...jsonOption, description: "Print the workspace details as JSON" },
      ]),
    },
    {
      icon: icon,
      name: "workspace:delete",
      description:
        "Delete a workspace with its site, certificate and isolated database",
      args: workspaceArg,
      options: combineOptions([
        {
          name: "--force",
          description: "Don't ask for confirmation",
        },
        {
          name: "--keep-database",
          description: "Keep the isolated database",
        },
        {
          name: "--keep-files",
          description: "Keep the files of a git worktree on disk",
        },
      ]),
    },
    {
      icon: icon,
      name: "workspace:merge",
      description: "Merge the branch of a workspace into its base branch",
      args: workspaceArg,
      options: combineOptions([
        {
          name: "--push",
          description: "Push the base branch to origin after merging",
        },
        {
          name: "--delete",
          description: "Delete the workspace after merging",
        },
      ]),
    },
    {
      icon: icon,
      name: "workspace:open",
      description: "Open a workspace in your browser",
      args: workspaceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "workspace:switch",
      description: "Open a new shell inside a workspace",
      args: workspaceArg,
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "workspaces",
      description: "List all workspaces, or only those of a site",
      options: combineOptions([siteOption]),
    },
    {
      icon: icon,
      name: "init:fresh",
      description: "Initialize a Herd manifest file",
      options: combineOptions(),
    },
  ],
  options: combineOptions(),
};
export default completionSpec;
