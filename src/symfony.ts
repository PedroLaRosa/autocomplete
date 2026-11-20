// Symfony CLI v5.22.2 (GitHub tag symfony-cli/symfony-cli, same as Homebrew symfony-cli 5.22.2, 2026-11-20). Source: static read of the Go sources at that tag:
// commands/*.go and local/project/flags.go (local commands, flags, args), local/upsun/commands.go (the generated "cloud:*" proxy commands with their flags and aliases),
// symfony-cli/console v1.2.4 (global flags, help, version and completion commands) and fabpot/local-php-security-checker v2.1.3 (security:check formats).
// Descriptions of the proxied "cloud:*" options and arguments come from the PHP sources of the wrapped Upsun CLI (upsun/cli v5.17.0, legacy/src, read statically);
// options with no unambiguous description there have none (a few generated flag names, e.g. --verify-tls, --sensitive, --inheritable, have no exact PHP twin at v5.17.0
// and borrow the description of the matching field). Hidden aliases are not listed and the internal cloud commands _complete, bot, welcome and winky are omitted.
// Nothing was run: the sandbox does not allow executing downloaded binaries.

const dirOption: Fig.Option = {
  name: ["--dir", "--directory"],
  description: "Project directory",
  args: { name: "dir", template: "folders" },
};

const debugOption: Fig.Option = {
  name: "--debug",
  description: "Display commands output",
};

const allOption: Fig.Option = {
  name: ["-a", "--all"],
  description:
    "Check recent activities on all environments (when selecting a default activity)",
};

const environmentOption: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    'The environment ID. Use "." to select the project\'s default environment',
  args: { name: "environment" },
};

const excludeTypeOption: Fig.Option = {
  name: ["-x", "--exclude-type"],
  description: "Exclude by type (when selecting a default activity)",
  isRepeatable: true,
  args: { name: "exclude-type" },
};

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "The project ID or URL",
  args: { name: "project" },
};

const noOption: Fig.Option = {
  name: ["-n", "--no"],
  description:
    'Answer "no" to confirmation questions; accept the default value for other questions; disable interaction',
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    'Answer "yes" to confirmation questions; accept the default value for other questions; disable interaction',
};

const columnsOption: Fig.Option = {
  name: ["-c", "--columns"],
  description: "Columns to display",
  isRepeatable: true,
  args: { name: "columns" },
};

const dateFmtOption: Fig.Option = {
  name: "--date-fmt",
  description: "The date format (as a PHP date format string)",
  args: { name: "date-fmt", default: "c" },
};

const formatOption: Fig.Option = {
  name: "--format",
  description: "The output format: table, csv, tsv, or plain",
  args: { name: "format", default: "table" },
};

const noHeaderOption: Fig.Option = {
  name: "--no-header",
  description: "Do not output the table header",
};

const dataOption: Fig.Option = {
  name: ["-d", "--data"],
  description: "Data to send",
  args: { name: "data" },
};

const disableCompressionOption: Fig.Option = {
  name: "--disable-compression",
  description: "Do not use the curl --compressed flag",
};

const enableGlobOption: Fig.Option = {
  name: "--enable-glob",
  description: "Enable curl globbing (remove the --globoff flag)",
};

const failOption: Fig.Option = {
  name: ["-f", "--fail"],
  description: "Fail with no output on an error response",
};

const headOption: Fig.Option = {
  name: ["-I", "--head"],
  description: "Fetch headers only",
};

const headerOption: Fig.Option = {
  name: ["-H", "--header"],
  description: "Extra header(s)",
  isRepeatable: true,
  args: { name: "header" },
};

const includeOption: Fig.Option = {
  name: ["-i", "--include"],
  description: "Include headers in the output",
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "JSON data to send",
  args: { name: "json" },
};

const noRetry401Option: Fig.Option = {
  name: "--no-retry-401",
  description: "Disable automatic retry on 401 errors",
};

const requestOption: Fig.Option = {
  name: ["-X", "--request"],
  description: "The request method to use",
  args: { name: "request" },
};

const appOption: Fig.Option = {
  name: ["-A", "--app"],
  description: "The remote application name",
  args: { name: "app" },
};

const refreshOption: Fig.Option = {
  name: "--refresh",
  description: "Whether to refresh the cache",
};

const browserOption: Fig.Option = {
  name: "--browser",
  description: "The browser to use to open the URL. Set 0 for none",
  args: { name: "browser" },
};

const pipeOption: Fig.Option = {
  name: "--pipe",
  description: "Output the URL to stdout",
};

const noWaitOption: Fig.Option = {
  name: ["-W", "--no-wait"],
  description: "Do not wait for the operation to complete",
};

const waitOption: Fig.Option = {
  name: "--wait",
  description: "Wait for the operation to complete",
};

const relationshipOption: Fig.Option = {
  name: ["-r", "--relationship"],
  description: "The service relationship to use",
  args: { name: "relationship" },
};

const activityOption: Fig.Option = {
  name: "--activity",
  description:
    "The ID of the task run to target (with --task), when multiple runs are in progress",
  args: { name: "activity" },
};

const instanceOption: Fig.Option = {
  name: ["-I", "--instance"],
  description: "An instance ID",
  args: { name: "instance" },
};

const taskOption: Fig.Option = {
  name: "--task",
  description: "The name of a running task (instead of an app or worker)",
  args: { name: "task" },
};

const workerOption: Fig.Option = {
  name: "--worker",
  description: "A worker name",
  args: { name: "worker" },
};

const environmentOption2: Fig.Option = {
  name: ["-e", "--environment"],
  description: "Deprecated option, not used",
  deprecated: true,
  args: { name: "environment" },
};

const bytesOption: Fig.Option = {
  name: ["-B", "--bytes"],
  description: "Show sizes in bytes",
};

const intervalOption: Fig.Option = {
  name: ["-i", "--interval"],
  description: "The time interval. Defaults to a division of the range",
  args: { name: "interval" },
};

const latestOption: Fig.Option = {
  name: ["-1", "--latest"],
  description: "Show only the latest single data point",
};

const rangeOption: Fig.Option = {
  name: ["-r", "--range"],
  description:
    "The time range. Metrics will be loaded for this duration until the end time (--to)",
  args: { name: "range" },
};

const serviceOption: Fig.Option = {
  name: ["-s", "--service"],
  description: "Filter by service or application name",
  isRepeatable: true,
  args: { name: "service" },
};

const toOption: Fig.Option = {
  name: "--to",
  description: "The end time. Defaults to now",
  args: { name: "to" },
};

const typeOption: Fig.Option = {
  name: "--type",
  description:
    "Filter by service type (if --service is not provided). The version is not required",
  isRepeatable: true,
  args: { name: "type" },
};

const orgOption: Fig.Option = {
  name: ["-o", "--org"],
  description: "The organization name (or ID)",
  args: { name: "org" },
};

const columnsOption2: Fig.Option = {
  name: "--columns",
  description: "Columns to display",
  isRepeatable: true,
  args: { name: "columns" },
};

const countOption: Fig.Option = {
  name: ["-c", "--count"],
  description:
    "The number of items to display per page. Use 0 to disable pagination",
  args: { name: "count" },
};

const commitOption: Fig.Option = {
  name: ["-c", "--commit"],
  description:
    'The commit SHA. This can also accept "HEAD", and caret (^) or tilde (~) suffixes for parent commits',
  args: { name: "commit" },
};

const teamOption: Fig.Option = {
  name: ["-t", "--team"],
  description: "The team ID",
  args: { name: "team" },
};

const levelOption: Fig.Option = {
  name: ["-l", "--level"],
  description: "The variable level ('project', 'environment', 'p' or 'e')",
  args: { name: "level" },
};

const noHumanizeOption: Fig.Option = {
  name: "--no-humanize",
  description: "Do not format JSON logs",
};

const completionSpec: Fig.Spec = {
  name: "symfony",
  description:
    "Symfony CLI helps developers manage projects, from local code to remote infrastructure",
  subcommands: [
    {
      name: ["book:check-requirements", "book:check"],
      description:
        'Check that you have all the pre-requisites locally to code while reading the "Symfony: The Fast Track" book',
    },
    {
      name: "book:checkout",
      description:
        'Check out a step of the "Symfony: The Fast Track" book repository',
      options: [
        dirOption,
        debugOption,
        {
          name: "--force",
          description:
            "Force the use of the command without checking pre-requisites",
        },
      ],
      args: {
        name: "step",
        description:
          "The step of the book to checkout (code at the end of the step)",
      },
    },
    {
      name: "cloud:activity:cancel",
      description: "Cancel an activity",
      options: [
        allOption,
        environmentOption,
        excludeTypeOption,
        projectOption,
        {
          name: ["-t", "--type"],
          description: "Filter by type (when selecting a default activity)",
          isRepeatable: true,
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description:
          "The activity ID. Defaults to the most recent cancellable activity",
        isOptional: true,
      },
    },
    {
      name: "cloud:activity:get",
      description: "View detailed information on a single activity",
      options: [
        allOption,
        columnsOption,
        dateFmtOption,
        environmentOption,
        excludeTypeOption,
        formatOption,
        {
          name: ["-i", "--incomplete"],
          description:
            "Include only incomplete activities (when selecting a default activity)",
        },
        noHeaderOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The property to view",
          args: { name: "property" },
        },
        {
          name: "--result",
          description:
            "Filter by result (when selecting a default activity): success or failure",
          args: { name: "result" },
        },
        {
          name: "--state",
          description:
            "Filter by state (when selecting a default activity): in_progress, pending, complete, or cancelled",
          isRepeatable: true,
          args: { name: "state" },
        },
        {
          name: ["-t", "--type"],
          description: "Filter by type (when selecting a default activity)",
          isRepeatable: true,
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "The activity ID. Defaults to the most recent activity",
        isOptional: true,
      },
    },
    {
      name: ["cloud:activity:list", "cloud:activities", "cloud:act"],
      description: "Get a list of activities for an environment or project",
      options: [
        {
          name: ["-a", "--all"],
          description: "List activities on all environments",
        },
        columnsOption,
        dateFmtOption,
        environmentOption,
        {
          name: ["-x", "--exclude-type"],
          description: "Exclude activities by type",
          isRepeatable: true,
          args: { name: "exclude-type" },
        },
        formatOption,
        {
          name: ["-i", "--incomplete"],
          description: "Only list incomplete activities",
        },
        {
          name: "--limit",
          description: "Limit the number of results displayed",
          args: { name: "limit" },
        },
        noHeaderOption,
        projectOption,
        {
          name: "--result",
          description: "Filter activities by result: success or failure",
          args: { name: "result" },
        },
        {
          name: "--start",
          description:
            "Only activities created before this date will be listed",
          args: { name: "start" },
        },
        {
          name: "--state",
          description:
            "Filter activities by state: in_progress, pending, complete, or cancelled",
          isRepeatable: true,
          args: { name: "state" },
        },
        {
          name: ["-t", "--type"],
          description: "Filter activities by type",
          isRepeatable: true,
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:activity:log",
      description: "Display the log for an activity",
      options: [
        allOption,
        dateFmtOption,
        environmentOption,
        excludeTypeOption,
        {
          name: ["-i", "--incomplete"],
          description:
            "Include only incomplete activities (when selecting a default activity)",
        },
        projectOption,
        {
          name: "--refresh",
          description:
            "Activity refresh interval (seconds). Set to 0 to disable refreshing",
          args: { name: "refresh" },
        },
        {
          name: "--result",
          description:
            "Filter by result (when selecting a default activity): success or failure",
          args: { name: "result" },
        },
        {
          name: "--state",
          description:
            "Filter by state (when selecting a default activity): in_progress, pending, complete, or cancelled",
          isRepeatable: true,
          args: { name: "state" },
        },
        {
          name: ["-t", "--timestamps"],
          description: "Display a timestamp next to each message",
        },
        {
          name: "--type",
          description: "Filter by type (when selecting a default activity)",
          isRepeatable: true,
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "The activity ID. Defaults to the most recent activity",
        isOptional: true,
      },
    },
    {
      name: "cloud:api:curl",
      description: "Run an authenticated cURL request on the API",
      hidden: true,
      options: [
        dataOption,
        disableCompressionOption,
        enableGlobOption,
        failOption,
        headOption,
        headerOption,
        includeOption,
        jsonOption,
        noRetry401Option,
        requestOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:app:config-get",
      description: "View the configuration of an app",
      options: [
        appOption,
        environmentOption,
        {
          name: ["-i", "--identity-file"],
          description: "Deprecated option, no longer used",
          deprecated: true,
          args: { name: "identity-file" },
        },
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The configuration property to view",
          args: { name: "property" },
        },
        refreshOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:app:config-validate", "cloud:lint", "cloud:validate"],
      description:
        "Validate the configuration files of a project, reporting all errors at once",
      options: [
        {
          name: "--format",
          description: 'The output format: "text" or "json"',
          args: {
            name: "format",
            default: "text",
            suggestions: ["text", "json"],
          },
        },
        {
          name: "--stdin",
          description: "Read merged Flex configuration from standard input",
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "path",
        description:
          "The project directory to validate (default: the Git repository root, or the current directory)",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: ["cloud:app:list", "cloud:apps"],
      description: "List apps in the project",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        { name: "--pipe", description: "Output a list of app names only" },
        projectOption,
        refreshOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:auth:api-token-login",
      description: "Log in using an API token",
      options: [noOption, yesOption],
    },
    {
      name: ["cloud:auth:browser-login", "cloud:login"],
      description: "Log in via a browser",
      options: [
        browserOption,
        {
          name: ["-f", "--force"],
          description: "Log in again, even if already logged in",
        },
        {
          name: "--max-age",
          description:
            "The maximum age (in seconds) of the web authentication session",
          args: { name: "max-age" },
        },
        {
          name: "--method",
          description: "Require specific authentication method(s)",
          isRepeatable: true,
          args: { name: "method" },
        },
        pipeOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:auth:export-sessions",
      description: "Export stored sessions for migration (internal)",
      hidden: true,
      options: [
        {
          name: "--delete",
          description: "Delete the stored sessions, without revoking them",
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:auth:info",
      description: "Display your account information",
      options: [
        columnsOption,
        formatOption,
        {
          name: "--no-auto-login",
          description:
            "Skips auto login. Nothing will be output if not logged in, and the exit code will be 0, assuming no other errors",
        },
        noHeaderOption,
        {
          name: ["-P", "--property"],
          description: "The account property to view (alternate syntax)",
          args: { name: "property" },
        },
        refreshOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "property",
        description: "The account property to view",
        isOptional: true,
      },
    },
    {
      name: ["cloud:auth:logout", "cloud:logout"],
      description: "Log out",
      options: [
        {
          name: ["-a", "--all"],
          description: "Log out from all local sessions",
        },
        { name: "--other", description: "Log out from other local sessions" },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:auth:post-login",
      description: "Set up SSH after a login (internal)",
      hidden: true,
      options: [noOption, yesOption],
    },
    {
      name: "cloud:auth:token",
      description: "Obtain an OAuth 2 access token for API requests",
      hidden: true,
      options: [
        {
          name: ["-H", "--header"],
          description:
            'Prefix the token with "Authorization: Bearer " to make an RFC 6750 header',
        },
        {
          name: ["-W", "--no-warn"],
          description:
            "Suppress the warning that is printed by default to stderr. This option is preferred over redirecting stderr, as that would hide other potentially useful messages",
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:auth:verify-phone-number",
      description: "Verify your phone number interactively",
      options: [noOption, yesOption],
    },
    {
      name: ["cloud:autoscaling:get", "cloud:autoscaling"],
      description:
        "View the autoscaling configuration of apps, workers, and services on an environment",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:autoscaling:set",
      description:
        "Set the autoscaling configuration of apps, workers, or services in an environment",
      options: [
        {
          name: "--cooldown-down",
          description:
            "Duration to wait before attempting to further scale down after a scaling event",
          args: { name: "cooldown-down" },
        },
        {
          name: "--cooldown-up",
          description:
            "Duration to wait before attempting to further scale up after a scaling event",
          args: { name: "cooldown-up" },
        },
        {
          name: "--dry-run",
          description:
            "Show the changes that would be made, without changing anything",
        },
        {
          name: "--duration-down",
          description:
            "Duration over which metric is evaluated against threshold for scaling down",
          args: { name: "duration-down" },
        },
        {
          name: "--duration-up",
          description:
            "Duration over which metric is evaluated against threshold for scaling up",
          args: { name: "duration-up" },
        },
        {
          name: "--enabled",
          description: "Enable autoscaling based on the given metric",
          args: { name: "enabled" },
        },
        environmentOption,
        {
          name: "--instances-max",
          description: "Maximum number of instances that will be scaled up to",
          args: { name: "instances-max" },
        },
        {
          name: "--instances-min",
          description:
            "Minimum number of instances that will be scaled down to",
          args: { name: "instances-min" },
        },
        {
          name: ["-m", "--metric"],
          description: "Name of the metric to use for triggering autoscaling",
          args: { name: "metric" },
        },
        projectOption,
        {
          name: ["-s", "--service"],
          description:
            "Name of the app, worker, or service to configure autoscaling for",
          args: { name: "service" },
        },
        {
          name: "--threshold-down",
          description: "Threshold under which service will be scaled down",
          args: { name: "threshold-down" },
        },
        {
          name: "--threshold-up",
          description: "Threshold over which service will be scaled up",
          args: { name: "threshold-up" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:backup:create", "cloud:backup"],
      description: "Make a backup of an environment",
      options: [
        environmentOption,
        {
          name: "--live",
          description: "Live backup: do not stop the environment",
        },
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment",
        isOptional: true,
      },
    },
    {
      name: "cloud:backup:delete",
      description: "Delete an environment backup",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "backup",
        description: "The ID of the backup. Required in non-interactive mode",
        isOptional: true,
      },
    },
    {
      name: "cloud:backup:get",
      description: "View an environment backup",
      options: [
        dateFmtOption,
        environmentOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The backup property to display",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "backup",
        description: "The ID of the backup. Defaults to the most recent one",
        isOptional: true,
      },
    },
    {
      name: ["cloud:backup:list", "cloud:backups"],
      description: "List available backups of an environment",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:backup:restore",
      description: "Restore an environment backup",
      options: [
        {
          name: "--branch-from",
          description:
            "If the --target does not yet exist, this specifies the parent of the new environment",
          args: { name: "branch-from" },
        },
        environmentOption,
        { name: "--no-code", description: "Do not restore code, only data" },
        noWaitOption,
        projectOption,
        {
          name: "--target",
          description:
            "The environment to restore to. Defaults to the backup's current environment",
          args: { name: "target" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "backup",
        description: "The ID of the backup. Defaults to the most recent one",
        isOptional: true,
      },
    },
    {
      name: "cloud:blue-green:conclude",
      description: "ALPHA Conclude a blue/green deployment",
      hidden: true,
      options: [environmentOption, projectOption, noOption, yesOption],
    },
    {
      name: "cloud:blue-green:deploy",
      description: "ALPHA Perform a blue/green deployment",
      hidden: true,
      options: [
        environmentOption,
        projectOption,
        {
          name: "--routing-percentage",
          description: "Set the latest version's routing percentage",
          args: { name: "routing-percentage", default: "100" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:blue-green:enable",
      description: "ALPHA Enable blue/green deployments",
      hidden: true,
      options: [
        environmentOption,
        projectOption,
        {
          name: ["-%", "--routing-percentage"],
          description: "Set the latest version's routing percentage",
          args: { name: "routing-percentage" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:certificate:add",
      description: "Add an SSL certificate to the project",
      options: [
        {
          name: "--cert",
          description: "The path to the certificate file",
          args: { name: "cert", template: "filepaths" },
        },
        {
          name: "--chain",
          description: "The path to the certificate chain file",
          isRepeatable: true,
          args: { name: "chain", template: "filepaths" },
        },
        {
          name: "--key",
          description: "The path to the certificate private key file",
          args: { name: "key", template: "filepaths" },
        },
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:certificate:delete",
      description: "Delete a certificate from the project",
      options: [noWaitOption, projectOption, waitOption, noOption, yesOption],
      args: {
        name: "id",
        description: "The certificate ID (or the start of it)",
      },
    },
    {
      name: "cloud:certificate:get",
      description: "View a certificate",
      options: [
        dateFmtOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The certificate property to view",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "The certificate ID (or the start of it)",
      },
    },
    {
      name: ["cloud:certificate:list", "cloud:certificates", "cloud:certs"],
      description: "List project certificates",
      options: [
        columnsOption,
        dateFmtOption,
        {
          name: "--domain",
          description: "Filter by domain name (case-insensitive search)",
          args: { name: "domain" },
        },
        {
          name: "--exclude-domain",
          description:
            "Exclude certificates, matching by domain name (case-insensitive search)",
          args: { name: "exclude-domain" },
        },
        formatOption,
        {
          name: "--ignore-expiry",
          description: "Show both expired and non-expired certificates",
        },
        {
          name: "--issuer",
          description: "Filter by issuer",
          args: { name: "issuer" },
        },
        {
          name: "--no-auto",
          description: "Show only manually added certificates",
        },
        {
          name: "--no-expired",
          description: "Show only non-expired certificates (default)",
        },
        noHeaderOption,
        {
          name: "--only-auto",
          description: "Show only auto-provisioned certificates",
        },
        {
          name: "--only-expired",
          description: "Show only expired certificates",
        },
        {
          name: "--pipe-domains",
          description:
            "Only return a list of domain names covered by the certificates",
        },
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:clear-cache", "cloud:cc"],
      description: "Clear the CLI cache",
      options: [noOption, yesOption],
    },
    {
      name: "cloud:commit:get",
      description: "Show commit details",
      options: [
        dateFmtOption,
        environmentOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The commit property to display",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "commit",
        description:
          'The commit SHA. This can also accept "HEAD", and caret (^) or tilde (~) suffixes for parent commits',
        isOptional: true,
      },
    },
    {
      name: ["cloud:commit:list", "cloud:commits"],
      description: "List commits",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        {
          name: "--limit",
          description: "The number of commits to display",
          args: { name: "limit" },
        },
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "commit",
        description:
          'The starting Git commit SHA. This can also accept "HEAD", and caret (^) or tilde (~) suffixes for parent commits',
      },
    },
    {
      name: "cloud:completion",
      description: "Dump the shell completion script",
      options: [
        { name: "--debug", description: "Tail the completion debug log" },
        noOption,
        yesOption,
      ],
      args: {
        name: "shell",
        description:
          'The shell type (e.g. "bash"), the value of the "$SHELL" env var will be used if this is not given',
        isOptional: true,
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: ["cloud:console", "cloud:web"],
      description: "Open the project in the Console",
      options: [
        browserOption,
        environmentOption,
        pipeOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:db:dump",
      description: "Create a local dump of the remote database",
      options: [
        appOption,
        {
          name: "--charset",
          description: "The character set encoding for the dump",
          args: { name: "charset" },
        },
        {
          name: ["-d", "--directory"],
          description: "A custom directory for the dump",
          args: { name: "directory", template: "folders" },
        },
        environmentOption,
        {
          name: "--exclude-table",
          description: "Table(s) to exclude",
          isRepeatable: true,
          args: { name: "exclude-table" },
        },
        {
          name: ["-f", "--file"],
          description: "A custom filename for the dump",
          args: { name: "file", template: "filepaths" },
        },
        { name: ["-z", "--gzip"], description: "Compress the dump using gzip" },
        projectOption,
        relationshipOption,
        {
          name: "--schema",
          description:
            'The schema to dump. Omit to use the default schema (usually "main")',
          args: { name: "schema" },
        },
        { name: "--schema-only", description: "Dump only schemas, no data" },
        {
          name: ["-o", "--stdout"],
          description: "Output to STDOUT instead of a file",
        },
        {
          name: "--table",
          description: "Table(s) to include",
          isRepeatable: true,
          args: { name: "table" },
        },
        {
          name: ["-t", "--timestamp"],
          description: "Add a timestamp to the dump filename",
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:db:sql", "cloud:sql"],
      description: "Run SQL on the remote database",
      options: [
        appOption,
        environmentOption,
        projectOption,
        { name: "--raw", description: "Produce raw, non-tabular output" },
        relationshipOption,
        {
          name: "--schema",
          description:
            'The schema to use. Omit to use the default schema (usually "main"). Pass an empty string to not use any schema',
          args: { name: "schema" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "query",
        description: "An SQL statement to execute",
        isOptional: true,
      },
    },
    {
      name: ["cloud:deploy", "deploy"],
      description:
        "Ambiguous alias of cloud:environment:push, use cloud:environment:push or cloud:environment:deploy instead",
      hidden: true,
      deprecated: true,
      options: [
        {
          name: "--activate",
          description:
            "Activate the environment. Paused environments will be resumed. This will ensure the environment is active even if no changes were pushed",
        },
        {
          name: ["-s", "--deploy-strategy"],
          description:
            "Set the deployment strategy, rolling or stopstart (default)",
          args: { name: "deploy-strategy" },
        },
        environmentOption,
        {
          name: ["-f", "--force"],
          description: "Allow non-fast-forward updates",
        },
        {
          name: "--force-with-lease",
          description:
            "Allow non-fast-forward updates, if the remote-tracking branch is up to date",
        },
        {
          name: "--no-clone-parent",
          description:
            "Do not clone the parent branch's data (only used with --activate)",
        },
        noWaitOption,
        {
          name: "--parent",
          description: "Set the environment parent (only used with --activate)",
          args: { name: "parent" },
        },
        projectOption,
        {
          name: ["-u", "--set-upstream"],
          description:
            "Set the target environment as the upstream for the source branch. This will also set the target project as the remote for the local repository",
        },
        {
          name: "--target",
          description: "The target branch name. Defaults to the current branch",
          args: { name: "target" },
        },
        {
          name: "--type",
          description: "Set the environment type (only used with --activate )",
          args: { name: "type" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:docs",
      description: "Open the online documentation",
      options: [browserOption, pipeOption, noOption, yesOption],
      args: {
        name: "search",
        description: "Search term(s)",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "cloud:domain:add",
      description: "Add a new domain to the project",
      options: [
        {
          name: "--attach",
          description:
            "The production domain that this one replaces in the environment's routes. Required for non-production environment domains",
          args: { name: "attach" },
        },
        {
          name: "--cert",
          description: "The path to a custom certificate file",
          args: { name: "cert", template: "filepaths" },
        },
        {
          name: "--chain",
          description:
            "The path to the chain file(s) for the custom certificate",
          isRepeatable: true,
          args: { name: "chain", template: "filepaths" },
        },
        environmentOption,
        {
          name: "--key",
          description: "The path to the private key for the custom certificate",
          args: { name: "key", template: "filepaths" },
        },
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The domain name" },
    },
    {
      name: "cloud:domain:delete",
      description: "Delete a domain from the project",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The domain name" },
    },
    {
      name: "cloud:domain:get",
      description: "Show detailed information for a domain",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The domain property to view",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The domain name", isOptional: true },
    },
    {
      name: ["cloud:domain:list", "cloud:domains"],
      description: "Get a list of all domains",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The domain name" },
    },
    {
      name: "cloud:domain:update",
      description: "Update a domain",
      options: [
        {
          name: "--cert",
          description: "The path to a custom certificate file",
          args: { name: "cert", template: "filepaths" },
        },
        {
          name: "--chain",
          description:
            "The path to the chain file(s) for the custom certificate",
          isRepeatable: true,
          args: { name: "chain", template: "filepaths" },
        },
        environmentOption,
        {
          name: "--key",
          description: "The path to the private key for the custom certificate",
          args: { name: "key", template: "filepaths" },
        },
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The domain name" },
    },
    {
      name: "cloud:environment:activate",
      description: "Activate an environment",
      options: [
        environmentOption,
        noWaitOption,
        {
          name: "--parent",
          description: "Set a new environment parent before activating",
          args: { name: "parent" },
        },
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment(s) to activate",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["cloud:environment:branch", "cloud:branch"],
      description: "Branch an environment",
      options: [
        environmentOption,
        {
          name: "--no-checkout",
          description: "Do not check out the branch locally",
        },
        {
          name: "--no-clone-parent",
          description: "Do not clone the parent environment's data",
        },
        noWaitOption,
        projectOption,
        {
          name: "--title",
          description: "The title of the new environment",
          args: { name: "title" },
        },
        {
          name: "--type",
          description: "The type of the new environment",
          args: { name: "type" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "id",
          description: "The ID (branch name) of the new environment",
          isOptional: true,
        },
        {
          name: "parent",
          description: "The parent of the new environment",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:environment:checkout", "cloud:checkout"],
      description: "Check out an environment",
      options: [noOption, yesOption],
      args: {
        name: "environment",
        description:
          'The ID of the environment to check out. For example: "sprint2"',
        isOptional: true,
      },
    },
    {
      name: "cloud:environment:curl",
      description: "Run an authenticated cURL request on an environment's API",
      hidden: true,
      options: [
        dataOption,
        disableCompressionOption,
        enableGlobOption,
        environmentOption,
        failOption,
        headOption,
        headerOption,
        includeOption,
        jsonOption,
        noRetry401Option,
        projectOption,
        requestOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:environment:delete",
      description: "Delete one or more environments",
      options: [
        {
          name: "--allow-delete-parent",
          description: "Allow environments that have children to be deleted",
        },
        {
          name: "--delete-branch",
          description:
            "Delete Git branch(es) for inactive environments, without confirmation",
        },
        environmentOption,
        {
          name: "--exclude",
          description: "Environment(s) not to delete",
          isRepeatable: true,
          args: { name: "exclude" },
        },
        {
          name: "--exclude-status",
          description: "Environment status(es) of which not to delete",
          isRepeatable: true,
          args: { name: "exclude-status" },
        },
        {
          name: "--exclude-type",
          description: "Environment type(s) of which not to delete",
          isRepeatable: true,
          args: { name: "exclude-type" },
        },
        {
          name: "--inactive",
          description:
            "Delete all inactive environments (adding to any others selected)",
        },
        {
          name: "--merged",
          description:
            "Delete all merged environments (adding to any others selected)",
        },
        {
          name: "--no-delete-branch",
          description:
            "Do not delete any Git branch(es) (inactive environments)",
        },
        noWaitOption,
        {
          name: "--only-status",
          description: "Only delete environments of a specific status",
          isRepeatable: true,
          args: { name: "only-status" },
        },
        {
          name: ["-t", "--only-type"],
          description: "Only delete environments of a specific type",
          isRepeatable: true,
          args: { name: "only-type" },
        },
        projectOption,
        {
          name: "--status",
          description:
            "Delete all environments of a status (adding to any others selected)",
          isRepeatable: true,
          args: { name: "status" },
        },
        {
          name: "--type",
          description:
            "Delete all environments of a type (adding to any others selected)",
          isRepeatable: true,
          args: { name: "type" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment(s) to delete",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["cloud:environment:deploy", "cloud:e:deploy", "cloud:env:deploy"],
      description: "Deploy an environment's staged changes",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        {
          name: ["-s", "--strategy"],
          description:
            "The deployment strategy, stopstart (default, restart with a shutdown) or rolling (zero downtime)",
          args: { name: "strategy" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:environment:deploy:type",
      description: "Show or set the environment deployment type",
      options: [
        environmentOption,
        noWaitOption,
        { name: "--pipe", description: "Output the deployment type to stdout" },
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "type",
        description: "The environment deployment type: automatic or manual",
        isOptional: true,
      },
    },
    {
      name: ["cloud:environment:http-access", "cloud:httpaccess"],
      description: "Update HTTP access settings for an environment",
      options: [
        {
          name: "--access",
          description:
            'Access restriction in the format "permission:address". Use 0 to clear all addresses',
          isRepeatable: true,
          args: { name: "access" },
        },
        {
          name: "--auth",
          description:
            'HTTP Basic auth credentials in the format "username:password". Use 0 to clear all credentials',
          isRepeatable: true,
          args: { name: "auth" },
        },
        {
          name: "--enabled",
          description:
            "Whether access control should be enabled: 1 to enable, 0 to disable",
          args: { name: "enabled" },
        },
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:environment:info",
      description: "Read or set properties for an environment",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        noWaitOption,
        projectOption,
        refreshOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of the property",
          isOptional: true,
        },
        {
          name: "value",
          description: "Set a new value for the property",
          isOptional: true,
        },
      ],
    },
    {
      name: "cloud:environment:init",
      description: "Initialize an environment from a public Git repository",
      options: [
        environmentOption,
        noWaitOption,
        {
          name: "--profile",
          description: "The name of the profile",
          args: { name: "profile" },
        },
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "url", description: "A URL to a Git repository" },
    },
    {
      name: ["cloud:environment:list", "cloud:environments", "cloud:env"],
      description: "Get a list of environments",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        {
          name: ["-I", "--no-inactive"],
          description: "Do not show inactive environments",
        },
        {
          name: "--pipe",
          description: "Output a simple list of environment IDs",
        },
        projectOption,
        {
          name: "--refresh",
          description: "Whether to refresh the list",
          args: { name: "refresh", default: "1" },
        },
        {
          name: "--reverse",
          description: "Sort in reverse (descending) order",
        },
        {
          name: "--sort",
          description: "A property to sort by",
          args: {
            name: "sort",
            default: "title",
            suggestions: [
              "id",
              "title",
              "status",
              "name",
              "machine_name",
              "parent",
              "created_at",
              "updated_at",
            ],
          },
        },
        {
          name: "--status",
          description:
            "Filter environments by status (active, inactive, dirty, paused, deleting)",
          isRepeatable: true,
          args: { name: "status" },
        },
        {
          name: "--type",
          description: "Filter the list by environment type(s)",
          isRepeatable: true,
          args: {
            name: "type",
            suggestions: ["development", "staging", "production"],
          },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:environment:logs", "cloud:log"],
      description: "Read an environment's logs",
      options: [
        activityOption,
        appOption,
        environmentOption,
        {
          name: "--fields",
          description:
            'The fields to display in the text format, e.g. "datetime,service,content,context.status". Values may be split by commas (e.g. "a,b,c") and/or whitespace',
          args: { name: "fields" },
        },
        {
          name: "--format",
          description:
            'The output format: "text", "raw" (message only), or "json" (one object per line)',
          args: { name: "format", default: "text" },
        },
        instanceOption,
        {
          name: "--lines",
          description: "The number of lines to show",
          args: { name: "lines" },
        },
        projectOption,
        {
          name: ["-s", "--service"],
          description:
            'Filter by service or application name. Values may be split by commas (e.g. "a,b,c") and/or whitespace',
          isRepeatable: true,
          args: { name: "service" },
        },
        {
          name: "--severity",
          description: 'The minimum severity, e.g. "error" or "warning"',
          args: { name: "severity" },
        },
        {
          name: "--since",
          description:
            'Show logs since this time, e.g. "30m", "2h", "1d", or a date/time',
          args: { name: "since" },
        },
        { name: "--tail", description: "Continuously tail the log" },
        taskOption,
        {
          name: "--until",
          description:
            "Show logs until this time, in the same format as --since",
          args: { name: "until" },
        },
        workerOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "type",
        description:
          'The log type: "access", "app", "cron", "deploy", "error" or "platform"',
        isOptional: true,
        suggestions: ["access", "app", "cron", "deploy", "error", "platform"],
      },
    },
    {
      name: ["cloud:environment:merge", "cloud:merge"],
      description: "Merge an environment",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment to merge",
        isOptional: true,
      },
    },
    {
      name: "cloud:environment:pause",
      description: "Pause an environment",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:environment:push", "cloud:push"],
      description: "Push code to an environment",
      options: [
        {
          name: "--activate",
          description:
            "Activate the environment. Paused environments will be resumed. This will ensure the environment is active even if no changes were pushed",
        },
        {
          name: ["-s", "--deploy-strategy"],
          description:
            "Set the deployment strategy, rolling or stopstart (default)",
          args: { name: "deploy-strategy" },
        },
        environmentOption,
        {
          name: ["-f", "--force"],
          description: "Allow non-fast-forward updates",
        },
        {
          name: "--force-with-lease",
          description:
            "Allow non-fast-forward updates, if the remote-tracking branch is up to date",
        },
        {
          name: "--no-clone-parent",
          description:
            "Do not clone the parent branch's data (only used with --activate)",
        },
        noWaitOption,
        {
          name: "--parent",
          description: "Set the environment parent (only used with --activate)",
          args: { name: "parent" },
        },
        projectOption,
        {
          name: ["-u", "--set-upstream"],
          description:
            "Set the target environment as the upstream for the source branch. This will also set the target project as the remote for the local repository",
        },
        {
          name: "--target",
          description: "The target branch name. Defaults to the current branch",
          args: { name: "target" },
        },
        {
          name: "--type",
          description: "Set the environment type (only used with --activate )",
          args: { name: "type" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "source",
        description: "The Git source ref, e.g. a branch name or a commit hash",
        isOptional: true,
      },
    },
    {
      name: ["cloud:environment:redeploy", "cloud:redeploy"],
      description: "Redeploy an environment",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: [
        "cloud:environment:relationships",
        "cloud:relationships",
        "cloud:rel",
      ],
      description: "Show an environment's relationships",
      options: [
        appOption,
        environmentOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The relationship property to view",
          args: { name: "property" },
        },
        {
          name: "--refresh",
          description: "Whether to refresh the relationships",
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment",
        isOptional: true,
      },
    },
    {
      name: "cloud:environment:resume",
      description: "Resume a paused environment",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:environment:scp", "cloud:scp"],
      description: "Copy files to and from an environment using scp",
      options: [
        activityOption,
        appOption,
        environmentOption,
        instanceOption,
        projectOption,
        {
          name: ["-r", "--recursive"],
          description: "Recursively copy entire directories",
        },
        taskOption,
        workerOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "files",
        description:
          "Files to copy. Use the remote: prefix to define remote locations",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "cloud:environment:set-remote",
      description: "Set the remote environment to map to a branch",
      hidden: true,
      options: [noOption, yesOption],
      args: [
        {
          name: "environment",
          description:
            "The environment machine name. Set to 0 to remove the mapping for a branch",
        },
        {
          name: "branch",
          description: "The Git branch to map (defaults to the current branch)",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:environment:ssh", "cloud:ssh"],
      description: "SSH to the current environment",
      options: [
        activityOption,
        { name: "--all", description: "Output all SSH URLs (for every app)" },
        appOption,
        environmentOption,
        instanceOption,
        {
          name: ["-o", "--option"],
          description: "Pass an extra option to SSH",
          isRepeatable: true,
          args: { name: "option" },
        },
        { name: "--pipe", description: "Output the SSH URL only" },
        projectOption,
        taskOption,
        workerOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "cmd",
        description: "A command to run on the environment",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["cloud:environment:synchronize", "cloud:sync"],
      description:
        "Synchronize an environment's code, data and/or resources from its parent",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        {
          name: "--rebase",
          description: "Synchronize code by rebasing instead of merging",
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "synchronize",
          description:
            'List what to synchronize: "code", "data", and/or "resources"',
          isOptional: true,
          isVariadic: true,
          suggestions: ["code", "data", "resources"],
        },
        {
          name: "synchronize",
          description: 'What to synchronize: "code", "data" or both',
          isOptional: true,
          isVariadic: true,
          suggestions: ["code", "data", "both"],
        },
      ],
    },
    {
      name: ["cloud:environment:url", "cloud:url"],
      description: "Get the public URLs of an environment",
      options: [
        browserOption,
        environmentOption,
        pipeOption,
        {
          name: ["-1", "--primary"],
          description: "Only return the URL for the primary route",
        },
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:environment:xdebug", "cloud:xdebug"],
      description: "Open a tunnel to Xdebug on the environment",
      options: [
        appOption,
        environmentOption,
        instanceOption,
        {
          name: "--port",
          description: "The local port",
          args: { name: "port" },
        },
        projectOption,
        workerOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:integration:activity:get",
      description: "View detailed information on a single integration activity",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption2,
        formatOption,
        noHeaderOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The property to view",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "integration",
          description: "An integration ID. Leave blank to choose from a list",
          isOptional: true,
        },
        {
          name: "activity",
          description:
            "The activity ID. Defaults to the most recent integration activity",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:integration:activity:list", "cloud:integration:activities"],
      description: "Get a list of activities for an integration",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption2,
        {
          name: ["-x", "--exclude-type"],
          description: "Exclude activities by type",
          isRepeatable: true,
          args: { name: "exclude-type" },
        },
        formatOption,
        {
          name: ["-i", "--incomplete"],
          description: "Only list incomplete activities",
        },
        {
          name: "--limit",
          description: "Limit the number of results displayed",
          args: { name: "limit" },
        },
        noHeaderOption,
        projectOption,
        {
          name: "--result",
          description: "Filter activities by result",
          args: { name: "result" },
        },
        {
          name: "--start",
          description:
            "Only activities created before this date will be listed",
          args: { name: "start" },
        },
        {
          name: "--state",
          description: "Filter activities by state",
          isRepeatable: true,
          args: { name: "state" },
        },
        {
          name: "--type",
          description: "Filter activities by type",
          isRepeatable: true,
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "An integration ID. Leave blank to choose from a list",
        isOptional: true,
      },
    },
    {
      name: "cloud:integration:activity:log",
      description: "Display the log for an integration activity",
      options: [
        dateFmtOption,
        environmentOption2,
        projectOption,
        {
          name: ["-t", "--timestamps"],
          description: "Display a timestamp next to each message",
        },
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "integration",
          description: "An integration ID. Leave blank to choose from a list",
          isOptional: true,
        },
        {
          name: "activity",
          description:
            "The activity ID. Defaults to the most recent integration activity",
          isOptional: true,
        },
      ],
    },
    {
      name: "cloud:integration:add",
      description: "Add an integration to the project",
      options: [
        { name: "--auth-mode", args: { name: "auth-mode", default: "prefix" } },
        { name: "--auth-token", args: { name: "auth-token" } },
        {
          name: "--base-url",
          description: "The base URL of the server installation",
          args: { name: "base-url" },
        },
        {
          name: "--bitbucket-url",
          description: "The base URL of the Bitbucket Server installation",
          args: { name: "bitbucket-url" },
        },
        { name: "--build-draft-pull-requests" },
        {
          name: "--build-merge-requests",
          description: "GitLab: build merge requests as environments",
        },
        {
          name: "--build-pull-requests",
          description: "Build every pull request as an environment",
        },
        {
          name: "--build-pull-requests-post-merge",
          description: "Build pull requests based on their post-merge state",
        },
        {
          name: "--build-wip-merge-requests",
          description: "GitLab: build WIP merge requests",
        },
        {
          name: "--category",
          description: "The Sumo Logic category, used for filtering",
          args: { name: "category" },
        },
        {
          name: "--channel",
          description: "The Slack channel",
          args: { name: "channel" },
        },
        {
          name: "--environments",
          description: "The environment IDs to include",
          args: { name: "environments" },
        },
        {
          name: "--events",
          description: "A list of events to act on, e.g. environment.push",
          args: { name: "events" },
        },
        {
          name: "--excluded-environments",
          description: "The environment IDs to exclude",
          args: { name: "excluded-environments" },
        },
        {
          name: "--excluded-services",
          description: "A list of services to exclude from the log forwarding",
          args: { name: "excluded-services" },
        },
        {
          name: "--facility",
          description: "Syslog facility",
          args: { name: "facility" },
        },
        {
          name: "--fetch-branches",
          description:
            "Fetch all branches from the remote (as inactive environments)",
        },
        {
          name: "--file",
          description:
            "The name of a local file that contains the script to upload",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--from-address",
          description: "[Optional] Custom From address for alert emails",
          args: { name: "from-address" },
        },
        {
          name: "--header",
          description:
            "HTTP header(s) to use in POST requests. Separate names and values with a colon (:)",
          args: { name: "header" },
        },
        {
          name: "--index",
          description: "The Splunk index",
          args: { name: "index" },
        },
        {
          name: "--key",
          description: "A Bitbucket OAuth consumer key",
          args: { name: "key" },
        },
        {
          name: "--license-key",
          description: "The New Relic Logs license key",
          args: { name: "license-key" },
        },
        {
          name: "--merge-requests-clone-parent-data",
          description: "GitLab: clone data for merge requests",
        },
        {
          name: "--message-format",
          description: "Syslog message format",
          args: { name: "message-format", default: "rfc5424" },
        },
        noWaitOption,
        projectOption,
        {
          name: "--protocol",
          description: "Syslog transport protocol",
          args: { name: "protocol", default: "tls" },
        },
        {
          name: "--prune-branches",
          description: "Delete branches that do not exist on the remote",
        },
        {
          name: "--pull-requests-clone-parent-data",
          description: "Clone the parent environment's data for pull requests",
        },
        {
          name: "--recipients",
          description: "The recipient email address(es)",
          args: { name: "recipients" },
        },
        {
          name: "--redaction",
          description:
            "Whether to enable built-in PII redaction (e.g. email addresses) before forwarding log lines",
        },
        {
          name: "--repository",
          description: "The repository to track (e.g. 'owner/repository')",
          args: { name: "repository" },
        },
        {
          name: "--resources-init",
          description: "The resources to use when initializing a new service",
          args: { name: "resources-init", default: "parent" },
        },
        {
          name: "--resync-pull-requests",
          description: "Re-sync pull request environment data on every build",
        },
        {
          name: "--routing-key",
          description: "The PagerDuty routing key",
          args: { name: "routing-key" },
        },
        {
          name: "--secret",
          description: "A Bitbucket OAuth consumer secret",
          args: { name: "secret" },
        },
        {
          name: "--server-project",
          description: "The project (e.g. 'namespace/repo')",
          args: { name: "server-project" },
        },
        {
          name: "--shared-key",
          description: "Webhook: the JWS shared secret key",
          args: { name: "shared-key" },
        },
        {
          name: "--sourcetype",
          description: "The Splunk event source type",
          args: { name: "sourcetype" },
        },
        {
          name: "--states",
          description:
            "A list of states to act on, e.g. pending, in_progress, complete",
          args: { name: "states" },
        },
        {
          name: "--syslog-host",
          description: "Syslog relay/collector host",
          args: { name: "syslog-host" },
        },
        {
          name: "--syslog-port",
          description: "Syslog relay/collector port",
          args: { name: "syslog-port" },
        },
        {
          name: "--token",
          description: "An authentication or access token for the integration",
          args: { name: "token" },
        },
        {
          name: "--type",
          description: "The integration type",
          args: { name: "type" },
        },
        {
          name: "--url",
          description: "The URL or API endpoint for the integration",
          args: { name: "url" },
        },
        {
          name: "--username",
          description: "The Bitbucket Server username",
          args: { name: "username" },
        },
        {
          name: "--verify-tls",
          description:
            "Whether HTTPS certificate verification should be enabled (recommended)",
        },
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:integration:delete",
      description: "Delete an integration from a project",
      options: [noWaitOption, projectOption, waitOption, noOption, yesOption],
      args: {
        name: "id",
        description: "The integration ID. Leave blank to choose from a list",
        isOptional: true,
      },
    },
    {
      name: "cloud:integration:get",
      description: "View details of an integration",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The integration property to view",
          args: { name: "property", isOptional: true },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "An integration ID. Leave blank to choose from a list",
        isOptional: true,
      },
    },
    {
      name: ["cloud:integration:list", "cloud:integrations"],
      description: "View a list of project integration(s)",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        projectOption,
        {
          name: ["-t", "--type"],
          description: "Filter by type",
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:integration:update",
      description: "Update an integration",
      options: [
        { name: "--auth-mode", args: { name: "auth-mode", default: "prefix" } },
        { name: "--auth-token", args: { name: "auth-token" } },
        {
          name: "--base-url",
          description: "The base URL of the server installation",
          args: { name: "base-url" },
        },
        {
          name: "--bitbucket-url",
          description: "The base URL of the Bitbucket Server installation",
          args: { name: "bitbucket-url" },
        },
        { name: "--build-draft-pull-requests" },
        {
          name: "--build-merge-requests",
          description: "GitLab: build merge requests as environments",
        },
        {
          name: "--build-pull-requests",
          description: "Build every pull request as an environment",
        },
        {
          name: "--build-pull-requests-post-merge",
          description: "Build pull requests based on their post-merge state",
        },
        {
          name: "--build-wip-merge-requests",
          description: "GitLab: build WIP merge requests",
        },
        {
          name: "--category",
          description: "The Sumo Logic category, used for filtering",
          args: { name: "category" },
        },
        {
          name: "--channel",
          description: "The Slack channel",
          args: { name: "channel" },
        },
        {
          name: "--environments",
          description: "The environment IDs to include",
          args: { name: "environments" },
        },
        {
          name: "--events",
          description: "A list of events to act on, e.g. environment.push",
          args: { name: "events" },
        },
        {
          name: "--excluded-environments",
          description: "The environment IDs to exclude",
          args: { name: "excluded-environments" },
        },
        {
          name: "--excluded-services",
          description: "A list of services to exclude from the log forwarding",
          args: { name: "excluded-services" },
        },
        {
          name: "--facility",
          description: "Syslog facility",
          args: { name: "facility" },
        },
        {
          name: "--fetch-branches",
          description:
            "Fetch all branches from the remote (as inactive environments)",
        },
        {
          name: "--file",
          description:
            "The name of a local file that contains the script to upload",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--from-address",
          description: "[Optional] Custom From address for alert emails",
          args: { name: "from-address" },
        },
        {
          name: "--header",
          description:
            "HTTP header(s) to use in POST requests. Separate names and values with a colon (:)",
          args: { name: "header" },
        },
        {
          name: "--index",
          description: "The Splunk index",
          args: { name: "index" },
        },
        {
          name: "--key",
          description: "A Bitbucket OAuth consumer key",
          args: { name: "key" },
        },
        {
          name: "--license-key",
          description: "The New Relic Logs license key",
          args: { name: "license-key" },
        },
        {
          name: "--merge-requests-clone-parent-data",
          description: "GitLab: clone data for merge requests",
        },
        {
          name: "--message-format",
          description: "Syslog message format",
          args: { name: "message-format", default: "rfc5424" },
        },
        noWaitOption,
        projectOption,
        {
          name: "--protocol",
          description: "Syslog transport protocol",
          args: { name: "protocol", default: "tls" },
        },
        {
          name: "--prune-branches",
          description: "Delete branches that do not exist on the remote",
        },
        {
          name: "--pull-requests-clone-parent-data",
          description: "Clone the parent environment's data for pull requests",
        },
        {
          name: "--recipients",
          description: "The recipient email address(es)",
          args: { name: "recipients" },
        },
        {
          name: "--redaction",
          description:
            "Whether to enable built-in PII redaction (e.g. email addresses) before forwarding log lines",
        },
        {
          name: "--repository",
          description: "The repository to track (e.g. 'owner/repository')",
          args: { name: "repository" },
        },
        {
          name: "--resources-init",
          description: "The resources to use when initializing a new service",
          args: { name: "resources-init", default: "parent" },
        },
        {
          name: "--resync-pull-requests",
          description: "Re-sync pull request environment data on every build",
        },
        {
          name: "--routing-key",
          description: "The PagerDuty routing key",
          args: { name: "routing-key" },
        },
        {
          name: "--secret",
          description: "A Bitbucket OAuth consumer secret",
          args: { name: "secret" },
        },
        {
          name: "--server-project",
          description: "The project (e.g. 'namespace/repo')",
          args: { name: "server-project" },
        },
        {
          name: "--shared-key",
          description: "Webhook: the JWS shared secret key",
          args: { name: "shared-key" },
        },
        {
          name: "--sourcetype",
          description: "The Splunk event source type",
          args: { name: "sourcetype" },
        },
        {
          name: "--states",
          description:
            "A list of states to act on, e.g. pending, in_progress, complete",
          args: { name: "states" },
        },
        {
          name: "--syslog-host",
          description: "Syslog relay/collector host",
          args: { name: "syslog-host" },
        },
        {
          name: "--syslog-port",
          description: "Syslog relay/collector port",
          args: { name: "syslog-port" },
        },
        {
          name: "--token",
          description: "An authentication or access token for the integration",
          args: { name: "token" },
        },
        {
          name: "--type",
          description: "The integration type",
          args: { name: "type" },
        },
        {
          name: "--url",
          description: "The URL or API endpoint for the integration",
          args: { name: "url" },
        },
        {
          name: "--username",
          description: "The Bitbucket Server username",
          args: { name: "username" },
        },
        {
          name: "--verify-tls",
          description:
            "Whether HTTPS certificate verification should be enabled (recommended)",
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "id",
        description: "The ID of the integration to update",
        isOptional: true,
      },
    },
    {
      name: "cloud:integration:validate",
      description: "Validate an existing integration",
      options: [projectOption, noOption, yesOption],
      args: {
        name: "id",
        description: "An integration ID. Leave blank to choose from a list",
        isOptional: true,
      },
    },
    {
      name: ["cloud:metrics:all", "cloud:metrics", "cloud:met"],
      description: "Show CPU, disk and memory metrics for an environment",
      options: [
        bytesOption,
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        intervalOption,
        latestOption,
        noHeaderOption,
        projectOption,
        rangeOption,
        serviceOption,
        toOption,
        typeOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:metrics:cpu", "cloud:cpu"],
      description: "Show CPU usage of an environment",
      options: [
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        intervalOption,
        latestOption,
        noHeaderOption,
        projectOption,
        rangeOption,
        serviceOption,
        toOption,
        typeOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:metrics:disk-usage", "cloud:disk"],
      description: "Show disk usage of an environment",
      options: [
        bytesOption,
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        intervalOption,
        latestOption,
        noHeaderOption,
        projectOption,
        rangeOption,
        serviceOption,
        { name: "--tmp", description: "Report temporary disk usage" },
        toOption,
        typeOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:metrics:memory", "cloud:mem", "cloud:memory"],
      description: "Show memory usage of an environment",
      options: [
        bytesOption,
        columnsOption,
        dateFmtOption,
        environmentOption,
        formatOption,
        intervalOption,
        latestOption,
        noHeaderOption,
        projectOption,
        rangeOption,
        serviceOption,
        toOption,
        typeOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:mount:download",
      description: "Download files from a mount, using rsync",
      options: [
        { name: ["-a", "--all"], description: "Download from all mounts" },
        appOption,
        {
          name: "--delete",
          description:
            "Whether to delete extraneous files in the target directory",
        },
        environmentOption,
        {
          name: "--exclude",
          description: "File(s) to exclude from the download (pattern)",
          isRepeatable: true,
          args: { name: "exclude" },
        },
        {
          name: "--include",
          description: "File(s) not to exclude (pattern)",
          isRepeatable: true,
          args: { name: "include" },
        },
        instanceOption,
        {
          name: ["-m", "--mount"],
          description: "The mount (as an app-relative path)",
          args: { name: "mount" },
        },
        projectOption,
        refreshOption,
        {
          name: "--source-path",
          description:
            "Use the mount's source path (rather than the mount path) as a subdirectory of the target, when --all is used",
        },
        {
          name: "--target",
          description:
            "The directory to which files will be downloaded. If --all is used, the mount path will be appended",
          args: { name: "target", template: "folders" },
        },
        workerOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:mount:list", "cloud:mounts"],
      description: "Get a list of mounts",
      options: [
        appOption,
        columnsOption,
        environmentOption,
        formatOption,
        instanceOption,
        noHeaderOption,
        {
          name: "--paths",
          description: "Output the mount paths only (one per line)",
        },
        projectOption,
        refreshOption,
        workerOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:mount:upload",
      description: "Upload files to a mount, using rsync",
      options: [
        appOption,
        {
          name: "--delete",
          description: "Whether to delete extraneous files in the mount",
        },
        environmentOption,
        {
          name: "--exclude",
          description: "File(s) to exclude from the upload (pattern)",
          isRepeatable: true,
          args: { name: "exclude" },
        },
        {
          name: "--include",
          description: "File(s) not to exclude (pattern)",
          isRepeatable: true,
          args: { name: "include" },
        },
        instanceOption,
        {
          name: ["-m", "--mount"],
          description: "The mount (as an app-relative path)",
          args: { name: "mount" },
        },
        projectOption,
        refreshOption,
        {
          name: "--source",
          description: "A directory containing files to upload",
          args: { name: "source", template: "folders" },
        },
        workerOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:multi",
      description: "Execute a command on multiple projects",
      options: [
        {
          name: "--continue",
          description:
            "Continue running commands even if an exception is encountered",
        },
        {
          name: ["-p", "--projects"],
          description:
            'A list of project IDs. Values may be split by commas (e.g. "a,b,c") and/or whitespace',
          isRepeatable: true,
          args: { name: "projects" },
        },
        {
          name: "--reverse",
          description: "Reverse the order of project options",
        },
        {
          name: "--sort",
          description:
            "A property by which to sort the list of project options",
          args: { name: "sort", default: "title" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "cmd",
        description: "The command to execute",
        isVariadic: true,
      },
    },
    {
      name: ["cloud:operation:list", "cloud:ops"],
      description: "List runtime operations on an environment",
      options: [
        appOption,
        columnsOption,
        environmentOption,
        formatOption,
        {
          name: "--full",
          description: "Do not limit the length of command to display",
        },
        noHeaderOption,
        projectOption,
        workerOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:operation:run",
      description: "Run an operation on the environment",
      options: [
        appOption,
        environmentOption,
        noWaitOption,
        {
          name: "--parameter",
          description:
            "A parameter to pass to the operation, one per option, in order",
          isRepeatable: true,
          args: { name: "parameter" },
        },
        projectOption,
        waitOption,
        workerOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "operation",
        description: "The operation name",
        isOptional: true,
      },
    },
    {
      name: "cloud:organization:billing:address",
      description: "View or change an organization's billing address",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of a property to view or change",
          isOptional: true,
        },
        {
          name: "value",
          description: "A new value for the property",
          isOptional: true,
        },
        {
          name: "properties",
          description: "Additional property/value pairs",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "cloud:organization:billing:profile",
      description: "View or change an organization's billing profile",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of a property to view or change",
          isOptional: true,
        },
        {
          name: "value",
          description: "A new value for the property",
          isOptional: true,
        },
      ],
    },
    {
      name: "cloud:organization:create",
      description: "Create a new organization",
      options: [
        {
          name: "--country",
          description:
            "The organization country. Used as the default for the billing address",
          args: { name: "country" },
        },
        {
          name: "--label",
          description: 'The full name of the organization, e.g. "ACME Inc."',
          args: { name: "label" },
        },
        {
          name: "--name",
          description:
            "The organization machine name, used for URL paths and similar purposes",
          args: { name: "name" },
        },
        {
          name: "--type",
          description: "The organization type",
          args: { name: "type", default: "flexible" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:organization:curl",
      description: "Run an authenticated cURL request on an organization's API",
      hidden: true,
      options: [
        dataOption,
        disableCompressionOption,
        enableGlobOption,
        failOption,
        headOption,
        headerOption,
        includeOption,
        jsonOption,
        noRetry401Option,
        orgOption,
        projectOption,
        requestOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:organization:delete",
      description: "Delete an organization",
      options: [orgOption, projectOption, noOption, yesOption],
    },
    {
      name: "cloud:organization:info",
      description: "View or change organization details",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        { name: "--refresh", description: "Refresh the cache" },
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of a property to view or change",
          isOptional: true,
        },
        {
          name: "value",
          description: "A new value for the property",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:organization:list", "cloud:orgs", "cloud:organizations"],
      description: "List organizations",
      options: [
        columnsOption,
        formatOption,
        { name: "--my", description: "List only the organizations you own" },
        noHeaderOption,
        { name: "--reverse", description: "Sort in reverse order" },
        {
          name: "--sort",
          description: "An organization property to sort by",
          args: { name: "sort" },
        },
        {
          name: "--type",
          description: "Filter organizations by type",
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:organization:subscription:list", "cloud:org:subs"],
      description: "List subscriptions within an organization",
      options: [
        columnsOption2,
        countOption,
        formatOption,
        noHeaderOption,
        orgOption,
        {
          name: "--page",
          description:
            "Page number. This enables pagination, despite the configuration or --count 0",
          args: { name: "page" },
        },
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:organization:user:add",
      description: "Invite a user to an organization",
      options: [
        orgOption,
        {
          name: "--permission",
          description: "Permission(s) for the user on the organization",
          isRepeatable: true,
          args: { name: "permission" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The email address of the user",
        isOptional: true,
      },
    },
    {
      name: "cloud:organization:user:delete",
      description: "Remove a user from an organization",
      options: [orgOption, noOption, yesOption],
      args: { name: "email", description: "The email address of the user" },
    },
    {
      name: "cloud:organization:user:get",
      description: "View an organization user",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        {
          name: ["-P", "--property"],
          description: "A property to display",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The email address of the user",
        isOptional: true,
      },
    },
    {
      name: ["cloud:organization:user:list", "cloud:org:users"],
      description: "List organization users",
      options: [
        columnsOption2,
        countOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        { name: "--reverse", description: "Reverse the sort order" },
        {
          name: "--sort",
          description: "A property to sort by (created_at or updated_at)",
          args: { name: "sort", default: "created_at" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:organization:user:projects", "cloud:oups"],
      description: "List the projects a user can access",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        {
          name: "--list-all",
          description: "List access across all organizations",
        },
        noHeaderOption,
        orgOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The email address of the user",
        isOptional: true,
      },
    },
    {
      name: "cloud:organization:user:update",
      description: "Update an organization user",
      options: [
        orgOption,
        {
          name: "--permission",
          description: "Permission(s) for the user on the organization",
          isRepeatable: true,
          args: { name: "permission" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The email address of the user",
        isOptional: true,
      },
    },
    {
      name: "cloud:project:clear-build-cache",
      description: "Clear a project's build cache",
      options: [projectOption, noOption, yesOption],
    },
    {
      name: ["cloud:project:create", "cloud:create"],
      description: "Create a new project",
      options: [
        {
          name: "--default-branch",
          description:
            "The default Git branch name for the project (the production environment)",
          args: { name: "default-branch", default: "main" },
        },
        {
          name: "--environments",
          description: "The number of environments",
          args: { name: "environments" },
        },
        {
          name: "--init-repo",
          description:
            'URL of a Git repository to use for initialization. A GitHub path such as "platformsh-templates/nuxtjs" can be used',
          args: { name: "init-repo" },
        },
        {
          name: "--no-set-remote",
          description: "Do not set the new project as the remote",
        },
        orgOption,
        {
          name: "--plan",
          description: "The subscription plan",
          args: { name: "plan" },
        },
        {
          name: "--region",
          description: "Filter by region (exact match)",
          args: { name: "region" },
        },
        {
          name: "--set-remote",
          description:
            "Set the new project as the remote for the local project directory. This is the default if no remote is already set",
        },
        {
          name: "--storage",
          description: "The amount of storage per environment, in GiB",
          args: { name: "storage" },
        },
        {
          name: "--title",
          description: "The initial project title",
          args: { name: "title", default: "Untitled Project" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:project:curl",
      description: "Run an authenticated cURL request on a project's API",
      hidden: true,
      options: [
        dataOption,
        disableCompressionOption,
        enableGlobOption,
        failOption,
        headOption,
        headerOption,
        includeOption,
        jsonOption,
        noRetry401Option,
        projectOption,
        requestOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:project:delete",
      description: "Delete a project",
      options: [projectOption, noOption, yesOption],
      args: {
        name: "project",
        description: "The project ID",
        isOptional: true,
      },
    },
    {
      name: ["cloud:project:get", "cloud:get"],
      description: "Clone a project locally",
      options: [
        { name: "--build", description: "Build the project after cloning" },
        {
          name: "--depth",
          description:
            "Create a shallow clone: limit the number of commits in the history",
          args: { name: "depth" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "The environment ID to clone. Defaults to the project default, or the first available environment",
          args: { name: "environment" },
        },
        projectOption,
        noOption,
        yesOption,
      ],
      args: [
        { name: "project", description: "The project ID", isOptional: true },
        {
          name: "directory",
          description:
            "The directory to clone to. Defaults to the project title",
          isOptional: true,
          template: "folders",
        },
      ],
    },
    {
      name: "cloud:project:info",
      description: "Read or set properties for a project",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        noWaitOption,
        projectOption,
        refreshOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of the property",
          isOptional: true,
        },
        {
          name: "value",
          description: "Set a new value for the property",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:project:list", "cloud:projects", "cloud:pro"],
      description: "Get a list of all active projects",
      options: [
        columnsOption2,
        {
          name: ["-c", "--count"],
          description:
            "The number of projects to display per page. Use 0 to disable pagination. Ignored if --page is specified",
          args: { name: "count" },
        },
        dateFmtOption,
        formatOption,
        { name: "--my", description: "List only the organizations you own" },
        noHeaderOption,
        {
          name: ["-o", "--org"],
          description: "Filter by organization name or ID",
          args: { name: "org" },
        },
        {
          name: "--org-type",
          description: "Alias of --type",
          hidden: true,
          args: { name: "org-type" },
        },
        {
          name: "--page",
          description:
            "Page number. This enables pagination, despite configuration or --count. Ignored if --pipe is specified",
          args: { name: "page" },
        },
        {
          name: "--pipe",
          description:
            "Output a simple list of project IDs. Disables pagination",
        },
        {
          name: "--refresh",
          description: "Whether to refresh the list",
          args: { name: "refresh", default: "1" },
        },
        {
          name: "--region",
          description: "Filter by region (exact match)",
          args: { name: "region" },
        },
        {
          name: "--reverse",
          description: "Sort in reverse (descending) order",
        },
        {
          name: "--sort",
          description: "A property to sort by",
          args: { name: "sort", default: "title" },
        },
        {
          name: "--title",
          description: "Filter by title (case-insensitive search)",
          args: { name: "title" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:project:set-remote", "cloud:set-remote"],
      description: "Set the remote project for the current Git repository",
      options: [noOption, yesOption],
      args: {
        name: "project",
        description: "The project ID",
        isOptional: true,
      },
    },
    {
      name: "cloud:repo:cat",
      description: "Read a file in the project repository",
      options: [
        commitOption,
        environmentOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: { name: "path", description: "The path to the file" },
    },
    {
      name: "cloud:repo:ls",
      description: "List files in the project repository",
      options: [
        commitOption,
        { name: ["-d", "--directories"], description: "Show directories only" },
        environmentOption,
        { name: ["-f", "--files"], description: "Show files only" },
        {
          name: "--git-style",
          description: 'Style output similar to "git ls-tree"',
        },
        projectOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "path",
        description: "The path to a subdirectory",
        isOptional: true,
      },
    },
    {
      name: ["cloud:repo:read", "cloud:read"],
      description: "Read a directory or file in the project repository",
      options: [
        commitOption,
        environmentOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "path",
        description: "The path to the directory or file",
        isOptional: true,
      },
    },
    {
      name: [
        "cloud:resources:build:get",
        "cloud:build-resources:get",
        "cloud:build-resources",
      ],
      description: "View the build resources of a project",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:resources:build:set", "cloud:build-resources:set"],
      description: "Set the build resources of a project",
      hidden: true,
      options: [
        { name: "--cpu", description: "Build CPU", args: { name: "cpu" } },
        {
          name: "--memory",
          description: "Build memory (in MB)",
          args: { name: "memory" },
        },
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:resources:get", "cloud:resources", "cloud:res"],
      description:
        "View the resources of apps, tasks and services on an environment",
      hidden: true,
      options: [
        {
          name: "--app",
          description: "Filter by app name",
          isRepeatable: true,
          args: { name: "app" },
        },
        columnsOption,
        {
          name: "--cpu-type",
          description: 'Filter by CPU type, e.g "guaranteed"',
          args: { name: "cpu-type", isOptional: true },
        },
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        {
          name: ["-s", "--service"],
          description:
            "Filter by service name. This can select any service, including apps, workers and tasks",
          isRepeatable: true,
          args: { name: "service" },
        },
        {
          name: "--task",
          description: "Filter by task name",
          isRepeatable: true,
          args: { name: "task" },
        },
        {
          name: "--type",
          description:
            'Filter by service, app or worker type, e.g. "postgresql"',
          isRepeatable: true,
          args: { name: "type" },
        },
        {
          name: "--worker",
          description: "Filter by worker name",
          isRepeatable: true,
          args: { name: "worker" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:resources:set",
      description:
        "Set the resources of apps, tasks and services on an environment",
      hidden: true,
      options: [
        {
          name: "--app",
          description: "Limit to an app name",
          isRepeatable: true,
          args: { name: "app" },
        },
        {
          name: ["-C", "--count"],
          description:
            "Set the instance count of apps, workers, or services that support horizontal scaling",
          isRepeatable: true,
          args: { name: "count" },
        },
        {
          name: ["-D", "--disk"],
          description: "Deprecated: use --storage instead",
          isRepeatable: true,
          hidden: true,
          deprecated: true,
          args: { name: "disk" },
        },
        {
          name: "--dry-run",
          description:
            "Show the changes that would be made, without changing anything",
        },
        environmentOption,
        {
          name: ["-f", "--force"],
          description:
            "Try to run the update, even if it might exceed your limits",
        },
        noWaitOption,
        {
          name: "--object-storage",
          description: "Set the object storage size (in MB) of apps",
          isRepeatable: true,
          args: { name: "object-storage" },
        },
        projectOption,
        {
          name: ["-s", "--service"],
          description:
            "Limit to a service name. This can select any service, including apps, workers and tasks",
          isRepeatable: true,
          args: { name: "service" },
        },
        {
          name: ["-S", "--size"],
          description:
            "Set the profile size (CPU and memory) of apps, workers, tasks, or services",
          isRepeatable: true,
          args: { name: "size" },
        },
        {
          name: "--task",
          description: "Limit to a task name",
          isRepeatable: true,
          args: { name: "task" },
        },
        waitOption,
        {
          name: "--worker",
          description: "Limit to a worker name",
          isRepeatable: true,
          args: { name: "worker" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:resources:size:list", "cloud:resources:sizes"],
      description: "List container profile sizes",
      hidden: true,
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        {
          name: "--profile",
          description: "A profile name",
          args: { name: "profile" },
        },
        projectOption,
        {
          name: ["-s", "--service"],
          description: "A service name",
          args: { name: "service" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:route:get",
      description: "View detailed information about a route",
      options: [
        {
          name: ["-A", "--app"],
          description: "Deprecated option, no longer used",
          deprecated: true,
          args: { name: "app" },
        },
        dateFmtOption,
        environmentOption,
        {
          name: "--id",
          description: "A route ID to select",
          args: { name: "id" },
        },
        {
          name: ["-i", "--identity-file"],
          description: "Deprecated option, no longer used",
          deprecated: true,
          args: { name: "identity-file" },
        },
        { name: ["-1", "--primary"], description: "Select the primary route" },
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The property to display",
          args: { name: "property" },
        },
        { name: "--refresh", description: "Bypass the cache of routes" },
        noOption,
        yesOption,
      ],
      args: {
        name: "route",
        description: "The route's original URL",
        isOptional: true,
      },
    },
    {
      name: ["cloud:route:list", "cloud:routes"],
      description: "List all routes for an environment",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        { name: "--refresh", description: "Bypass the cache of routes" },
        noOption,
        yesOption,
      ],
      args: {
        name: "environment",
        description: "The environment ID",
        isOptional: true,
      },
    },
    {
      name: "cloud:self:config",
      description: "Read CLI config",
      hidden: true,
      options: [noOption, yesOption],
      args: {
        name: "value",
        description: "Read a specific config value",
        isOptional: true,
      },
    },
    {
      name: ["cloud:service:list", "cloud:services"],
      description: "List services in the project",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        { name: "--pipe", description: "Output a list of service names only" },
        projectOption,
        refreshOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:service:mongo:dump", "cloud:mongodump"],
      description: "Create a binary archive dump of data from MongoDB",
      options: [
        appOption,
        {
          name: ["-c", "--collection"],
          description: "The collection to dump",
          args: { name: "collection" },
        },
        environmentOption,
        { name: ["-z", "--gzip"], description: "Compress the dump using gzip" },
        projectOption,
        relationshipOption,
        {
          name: ["-o", "--stdout"],
          description: "Output to STDOUT instead of a file",
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:service:mongo:export", "cloud:mongoexport"],
      description: "Export data from MongoDB",
      options: [
        appOption,
        {
          name: ["-c", "--collection"],
          description: "The collection to export",
          args: { name: "collection" },
        },
        environmentOption,
        {
          name: ["-f", "--fields"],
          description: "The fields to export",
          isRepeatable: true,
          args: { name: "fields" },
        },
        {
          name: "--jsonArray",
          description: "Export data as a single JSON array",
        },
        projectOption,
        relationshipOption,
        {
          name: "--type",
          description: 'The export type, e.g. "csv"',
          args: { name: "type" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:service:mongo:restore", "cloud:mongorestore"],
      description: "Restore a binary archive dump of data into MongoDB",
      options: [
        appOption,
        {
          name: ["-c", "--collection"],
          description: "The collection to restore",
          args: { name: "collection" },
        },
        environmentOption,
        projectOption,
        relationshipOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:service:mongo:shell", "cloud:mongo"],
      description: "Use the MongoDB shell",
      options: [
        appOption,
        environmentOption,
        {
          name: "--eval",
          description: "Pass a JavaScript fragment to the shell",
          args: { name: "eval" },
        },
        projectOption,
        relationshipOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:service:redis-cli", "cloud:redis"],
      description: "Access the Redis CLI",
      options: [
        appOption,
        environmentOption,
        projectOption,
        relationshipOption,
        noOption,
        yesOption,
      ],
      args: { name: "args", isOptional: true, isVariadic: true },
    },
    {
      name: ["cloud:service:valkey-cli", "cloud:valkey"],
      description: "Access the Valkey CLI",
      options: [
        appOption,
        environmentOption,
        projectOption,
        relationshipOption,
        noOption,
        yesOption,
      ],
      args: { name: "args", isOptional: true, isVariadic: true },
    },
    {
      name: "cloud:session:switch",
      description: "BETA Switch between sessions",
      hidden: true,
      options: [noOption, yesOption],
      args: { name: "id", description: "The new session ID", isOptional: true },
    },
    {
      name: ["cloud:source-operation:list", "cloud:source-ops"],
      description: "List source operations on an environment",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        {
          name: "--full",
          description: "Do not limit the length of command to display",
        },
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:source-operation:run",
      description: "Run a source operation",
      options: [
        environmentOption,
        noWaitOption,
        projectOption,
        {
          name: "--variable",
          description:
            "A variable to set during the operation, in the format type:name=value",
          isRepeatable: true,
          args: { name: "variable" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "operation",
        description: "The operation name",
        isOptional: true,
      },
    },
    {
      name: "cloud:ssh-cert:info",
      description: "Display information about the current SSH certificate",
      hidden: true,
      options: [
        dateFmtOption,
        {
          name: "--no-refresh",
          description: "Do not refresh the certificate if it is invalid",
        },
        {
          name: ["-P", "--property"],
          description: "The certificate property to display",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:ssh-cert:load",
      description: "Generate an SSH certificate",
      options: [
        { name: "--new", description: "Force the certificate to be refreshed" },
        {
          name: "--new-key",
          description: "Force a new key pair to be generated",
        },
        {
          name: "--refresh-only",
          description:
            "Only refresh the certificate, if necessary (do not write SSH config)",
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:ssh-key:add",
      description: "Add a new SSH key",
      options: [
        {
          name: "--name",
          description: "A name to identify the key",
          args: { name: "name" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "path",
        description: "The path to an existing SSH public key",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "cloud:ssh-key:delete",
      description: "Delete an SSH key",
      options: [noOption, yesOption],
      args: {
        name: "id",
        description: "The ID of the SSH key to delete",
        isOptional: true,
      },
    },
    {
      name: ["cloud:ssh-key:list", "cloud:ssh-keys"],
      description: "Get a list of SSH keys in your account",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:subscription:info",
      description: "Read or modify subscription properties",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        {
          name: ["-s", "--id"],
          description: "The subscription ID",
          args: { name: "id" },
        },
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
      args: [
        {
          name: "property",
          description: "The name of the property",
          isOptional: true,
        },
        {
          name: "value",
          description: "Set a new value for the property",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud:task:list", "cloud:tasks"],
      description: "Get a list of tasks on an environment",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:task:run",
      description: "Execute a task on an environment",
      options: [
        environmentOption,
        projectOption,
        {
          name: "--variable",
          description:
            "A variable to set when running the task, in the format type:name=value",
          isRepeatable: true,
          args: { name: "variable" },
        },
        { name: "--wait", description: "Wait for the task to complete" },
        noOption,
        yesOption,
      ],
      args: {
        name: "task",
        description: "The name of the task to execute",
        isOptional: true,
      },
    },
    {
      name: "cloud:team:create",
      description: "Create a new team",
      options: [
        {
          name: "--label",
          description: "The team label",
          args: { name: "label" },
        },
        {
          name: "--no-check-unique",
          description:
            "Do not error if another team exists with the same label in the organization",
        },
        orgOption,
        {
          name: "--output-id",
          description:
            "Output the new team's ID to stdout (instead of displaying the team info)",
        },
        {
          name: ["-r", "--role"],
          description: "Set the team's project and environment type roles",
          isRepeatable: true,
          args: { name: "role" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:team:delete",
      description: "Delete a team",
      options: [orgOption, teamOption, noOption, yesOption],
    },
    {
      name: "cloud:team:get",
      description: "View a team",
      options: [
        columnsOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The name of a property to view",
          args: { name: "property" },
        },
        teamOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:team:list", "cloud:teams"],
      description: "List teams",
      options: [
        {
          name: ["-A", "--all"],
          description:
            "List all teams in the organization (regardless of a selected project)",
        },
        columnsOption2,
        countOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        projectOption,
        { name: "--reverse", description: "Sort in reverse order" },
        {
          name: "--sort",
          description: "A team property to sort by",
          args: { name: "sort", default: "label" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:team:project:add",
      description: "Add project(s) to a team",
      options: [
        {
          name: "--all",
          description:
            "Add all the projects that currently exist in the organization",
        },
        orgOption,
        teamOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "projects",
        description: "The project ID(s)",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "cloud:team:project:delete",
      description: "Remove a project from a team",
      options: [orgOption, teamOption, noOption, yesOption],
      args: {
        name: "project",
        description: "The project ID",
        isOptional: true,
      },
    },
    {
      name: [
        "cloud:team:project:list",
        "cloud:team:projects",
        "cloud:team:pro",
      ],
      description: "List projects in a team",
      options: [
        columnsOption2,
        countOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        teamOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:team:update",
      description: "Update a team",
      options: [
        {
          name: "--label",
          description: "Set a new team label",
          args: { name: "label" },
        },
        {
          name: "--no-check-unique",
          description:
            "Do not error if another team exists with the same label in the organization",
        },
        noWaitOption,
        orgOption,
        {
          name: ["-r", "--role"],
          description: "Set the team's project and environment type roles",
          isRepeatable: true,
          args: { name: "role" },
        },
        teamOption,
        waitOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:team:user:add",
      description: "Add a user to a team",
      options: [orgOption, teamOption, noOption, yesOption],
      args: {
        name: "user",
        description: "The user email address or ID",
        isOptional: true,
      },
    },
    {
      name: "cloud:team:user:delete",
      description: "Remove a user from a team",
      options: [orgOption, teamOption, noOption, yesOption],
      args: {
        name: "user",
        description: "The user email address or ID",
        isOptional: true,
      },
    },
    {
      name: ["cloud:team:user:list", "cloud:team:users"],
      description: "List users in a team",
      options: [
        columnsOption2,
        countOption,
        dateFmtOption,
        formatOption,
        noHeaderOption,
        orgOption,
        teamOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:tunnel:close",
      description: "Close SSH tunnels",
      options: [
        { name: ["-a", "--all"], description: "Close all tunnels" },
        appOption,
        environmentOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:tunnel:info",
      description: "View relationship info for SSH tunnels",
      options: [
        appOption,
        {
          name: ["-c", "--encode"],
          description: "Output as base64-encoded JSON",
        },
        environmentOption,
        projectOption,
        {
          name: ["-P", "--property"],
          description: "The relationship property to view",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:tunnel:list", "cloud:tunnels"],
      description: "List SSH tunnels",
      options: [
        { name: ["-a", "--all"], description: "View all tunnels" },
        appOption,
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:tunnel:open",
      description: "Open SSH tunnels to an app's relationships",
      options: [
        appOption,
        environmentOption,
        {
          name: ["-g", "--gateway-ports"],
          description: "Allow remote hosts to connect to local forwarded ports",
        },
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:tunnel:single",
      description: "Open a single SSH tunnel to an app relationship",
      options: [
        appOption,
        environmentOption,
        {
          name: ["-g", "--gateway-ports"],
          description: "Allow remote hosts to connect to local forwarded ports",
        },
        {
          name: "--port",
          description: "The local port",
          args: { name: "port" },
        },
        projectOption,
        relationshipOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:user:add",
      description: "Add a user to the project",
      options: [
        {
          name: "--force-invite",
          description: "Send an invitation, even if one has already been sent",
        },
        noWaitOption,
        projectOption,
        {
          name: ["-r", "--role"],
          description:
            "The user's project role ('admin' or 'viewer') or environment type role (e.g. 'staging:contributor' or 'production:viewer')",
          isRepeatable: true,
          args: { name: "role" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The user's email address",
        isOptional: true,
      },
    },
    {
      name: "cloud:user:delete",
      description: "Delete a user from the project",
      options: [noWaitOption, projectOption, waitOption, noOption, yesOption],
      args: { name: "email", description: "The user's email address" },
    },
    {
      name: "cloud:user:get",
      description: "View a user's role(s)",
      options: [
        environmentOption,
        {
          name: ["-l", "--level"],
          description: "The role level ('project' or 'environment')",
          args: { name: "level", suggestions: ["project", "environment"] },
        },
        noWaitOption,
        {
          name: "--pipe",
          description: "Output the role to stdout (after making any changes)",
        },
        projectOption,
        {
          name: ["-r", "--role"],
          description: "Deprecated: use user:update to change a user's role(s)",
          deprecated: true,
          args: { name: "role" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The user's email address",
        isOptional: true,
      },
    },
    {
      name: ["cloud:user:list", "cloud:users"],
      description: "List project users",
      options: [
        columnsOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:user:update",
      description: "Update user role(s) on a project",
      options: [
        noWaitOption,
        projectOption,
        {
          name: ["-r", "--role"],
          description:
            "The user's project role ('admin' or 'viewer') or environment type role (e.g. 'staging:contributor' or 'production:viewer')",
          isRepeatable: true,
          args: { name: "role" },
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "email",
        description: "The user's email address",
        isOptional: true,
      },
    },
    {
      name: "cloud:variable:create",
      description: "Create a variable",
      options: [
        {
          name: "--app-scope",
          description:
            "A list of application, worker, or task names to which this variable will apply",
          args: { name: "app-scope" },
        },
        {
          name: "--enabled",
          description:
            "Whether the variable should be enabled on the environment",
        },
        environmentOption,
        {
          name: "--inheritable",
          description:
            "Whether the variable is inheritable by child environments",
        },
        { name: "--json", description: "Mark the value as JSON" },
        {
          name: ["-l", "--level"],
          description: "The level at which to set the variable",
          args: { name: "level" },
        },
        {
          name: "--name",
          description: "The variable name",
          args: { name: "name" },
        },
        noWaitOption,
        {
          name: "--prefix",
          description:
            "The variable name's prefix which can determine its type, e.g. 'env'. Only applicable if the name does not already contain a prefix",
          args: { name: "prefix", default: "none" },
        },
        projectOption,
        {
          name: "--sensitive",
          description: "Whether the variable value is sensitive",
        },
        {
          name: ["-u", "--update"],
          description: "Update the variable if it already exists",
        },
        {
          name: "--value",
          description: "The variable's value",
          args: { name: "value" },
        },
        {
          name: "--visible-build",
          description: "Whether the variable should be visible at build time",
          args: { name: "visible-build" },
        },
        {
          name: "--visible-runtime",
          description: "Whether the variable should be visible at runtime",
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: {
        name: "name",
        description: "The variable name",
        isOptional: true,
      },
    },
    {
      name: "cloud:variable:delete",
      description: "Delete a variable",
      options: [
        environmentOption,
        levelOption,
        noWaitOption,
        projectOption,
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The variable name" },
    },
    {
      name: ["cloud:variable:get", "cloud:vget"],
      description: "View a variable",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        levelOption,
        noHeaderOption,
        {
          name: "--pipe",
          description: "Deprecated option: Output the variable value only",
          deprecated: true,
        },
        projectOption,
        {
          name: ["-P", "--property"],
          description: "View a single variable property",
          args: { name: "property" },
        },
        noOption,
        yesOption,
      ],
      args: {
        name: "name",
        description: "The name of the variable",
        isOptional: true,
      },
    },
    {
      name: ["cloud:variable:list", "cloud:variables", "cloud:var"],
      description: "List variables",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        levelOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: "cloud:variable:update",
      description: "Update a variable",
      options: [
        {
          name: "--allow-no-change",
          description:
            "Return success (zero exit code) if no changes were provided",
        },
        {
          name: "--app-scope",
          description:
            "A list of application, worker, or task names to which this variable will apply",
          args: { name: "app-scope" },
        },
        {
          name: "--enabled",
          description:
            "Whether the variable should be enabled on the environment",
        },
        environmentOption,
        {
          name: "--inheritable",
          description:
            "Whether the variable is inheritable by child environments",
        },
        { name: "--json", description: "Mark the value as JSON" },
        {
          name: ["-l", "--level"],
          description: "The level at which to set the variable",
          args: { name: "level" },
        },
        noWaitOption,
        projectOption,
        {
          name: "--sensitive",
          description: "Whether the variable value is sensitive",
        },
        {
          name: "--value",
          description: "The variable's value",
          args: { name: "value" },
        },
        {
          name: "--visible-build",
          description: "Whether the variable should be visible at build time",
          args: { name: "visible-build" },
        },
        {
          name: "--visible-runtime",
          description: "Whether the variable should be visible at runtime",
        },
        waitOption,
        noOption,
        yesOption,
      ],
      args: { name: "name", description: "The variable name" },
    },
    {
      name: ["cloud:version:list", "cloud:versions"],
      description: "ALPHA List environment versions",
      hidden: true,
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        projectOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:worker:list", "cloud:workers"],
      description: "Get a list of all deployed workers",
      options: [
        columnsOption,
        environmentOption,
        formatOption,
        noHeaderOption,
        { name: "--pipe", description: "Output a list of worker names only" },
        projectOption,
        refreshOption,
        noOption,
        yesOption,
      ],
    },
    {
      name: ["cloud:environment:debug", "environment:debug"],
      description:
        "Debug an environment by switching Symfony to the debug mode temporarily",
      options: [
        projectOption,
        {
          name: ["-e", "--environment"],
          description: "The environment ID",
          args: { name: "environment" },
        },
        { name: "--off", description: "Disable debug mode" },
        debugOption,
      ],
    },
    {
      name: "doctrine:check-server-version-setting",
      description: "Check if Doctrine server version is configured explicitly",
      hidden: true,
      options: [dirOption],
    },
    {
      name: ["local:check:requirements", "check:requirements", "check:req"],
      description:
        "Checks requirements for running Symfony and gives useful recommendations to optimize PHP for Symfony",
      options: [dirOption],
    },
    {
      name: [
        "local:check:security",
        "security:check",
        "check:security",
        "local:security:check",
      ],
      description: "Check security issues in project dependencies",
      options: [
        dirOption,
        {
          name: "--format",
          description:
            "The output format (ansi, markdown, json, junit, or yaml)",
          args: {
            name: "format",
            default: "ansi",
            suggestions: ["ansi", "markdown", "json", "yaml", "junit"],
          },
        },
        {
          name: "--archive",
          description: "Advisory archive URL",
          args: {
            name: "archive",
            default:
              "https://codeload.github.com/FriendsOfPHP/security-advisories/zip/master",
          },
        },
        {
          name: "--local",
          description: "Do not make HTTP calls (needs a valid cache file)",
        },
        {
          name: "--no-dev",
          description: "Do not check packages listed under require-dev",
        },
        {
          name: "--update-cache",
          description: "Update the cache (other flags are ignored)",
        },
        {
          name: "--disable-exit-code",
          description: "Whether to fail when issues are detected",
        },
        {
          name: "--cache-dir",
          description: "Cache directory",
          args: { name: "cache-dir", template: "folders" },
        },
      ],
    },
    {
      name: ["local:new", "new"],
      description: "Create a new Symfony project",
      options: [
        dirOption,
        {
          name: "--version",
          description:
            'The version of the Symfony skeleton (a version or one of "lts", "stable", "next", or "previous")',
          args: {
            name: "version",
            suggestions: ["lts", "stable", "next", "previous"],
          },
        },
        {
          name: "--full",
          description:
            "Use github.com/symfony/website-skeleton (deprecated, use --webapp instead)",
          deprecated: true,
        },
        { name: "--demo", description: "Use github.com/symfony/demo" },
        {
          name: "--skeleton",
          description:
            "Skeleton to use (symfony, sulu, or a custom package name)",
          args: {
            name: "skeleton",
            default: "symfony",
            suggestions: ["symfony", "sulu"],
          },
        },
        {
          name: "--webapp",
          description:
            "Add the webapp pack to get a fully configured web project",
        },
        {
          name: "--api",
          description: "Add the api pack to get a fully configured api project",
        },
        {
          name: "--book",
          description: "Clone the Symfony: The Fast Track book project",
        },
        { name: "--docker", description: "Enable Docker support" },
        { name: "--no-git", description: "Do not initialize Git" },
        { name: "--upsun", description: "Initialize Upsun configuration" },
        {
          name: "--cloud",
          description: "Initialize Platform.sh configuration",
        },
        {
          name: "--service",
          description: "Configure some services",
          isRepeatable: true,
          hidden: true,
          args: { name: "service" },
        },
        debugOption,
        {
          name: "--php",
          description: "PHP version to use",
          args: { name: "php" },
        },
      ],
      args: {
        name: "directory",
        description: "Directory of the project to create",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "local:php:list",
      description: "List locally available PHP versions",
    },
    {
      name: "local:php:refresh",
      description: "Auto-discover the list of available PHP version",
    },
    {
      name: ["local:proxy:domain:attach", "proxy:domain:attach"],
      description: "Attach a local domain for the proxy",
      options: [dirOption],
      args: {
        name: "domains",
        description: "The project's domains",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["local:proxy:domain:detach", "proxy:domain:detach"],
      description: "Detach domains from the proxy",
      args: {
        name: "domains",
        description: "The domains to detach",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["local:proxy:start", "proxy:start"],
      description: "Start the local proxy server (local domains support)",
      options: [
        {
          name: ["-f", "--foreground"],
          description: "Run the proxy server in the foreground",
        },
        noHumanizeOption,
        {
          name: ["--host", "--ip"],
          description: "Host or IP to expose in PAC file",
          args: { name: "host" },
        },
      ],
    },
    {
      name: ["local:proxy:status", "proxy:status"],
      description: "Get the local proxy server status",
      options: [dirOption],
    },
    {
      name: ["local:proxy:stop", "proxy:stop"],
      description: "Stop the local proxy server",
    },
    {
      name: ["local:proxy:tld", "proxy:tld", "proxy:change:tld"],
      description: "Display or change the TLD for the proxy",
      args: {
        name: "tld",
        description: "The TLD for the project proxy",
        isOptional: true,
      },
    },
    {
      name: ["local:proxy:url", "proxy:url"],
      description: "Get the local proxy server URL",
    },
    {
      name: ["local:run", "run"],
      description:
        "Run a program with environment variables set depending on the current context",
      options: [
        {
          name: ["-d", "--daemon"],
          description: "Run the command in the background",
        },
        {
          name: "--watch",
          description:
            "Restart command when some change happens on this file or in this directory (recursively)",
          isRepeatable: true,
          args: { name: "watch", template: "filepaths" },
        },
      ],
      args: { name: "bin", isCommand: true },
    },
    {
      name: ["local:server:ca:install", "server:ca:install"],
      description: "Create a local Certificate Authority for serving HTTPS",
      options: [
        { name: "--renew", description: "Force generating a new CA" },
        {
          name: ["-f", "--force"],
          description: "Force reinstalling current CA",
        },
      ],
    },
    {
      name: ["local:server:ca:uninstall", "server:ca:uninstall"],
      description: "Uninstall the local Certificate Authority",
    },
    {
      name: ["local:server:list", "server:list", "server:ls"],
      description: "List all configured local web servers",
    },
    {
      name: ["local:server:log", "server:log"],
      description: "Display local web server logs",
      options: [
        dirOption,
        {
          name: ["--no-follow", "--no-tail"],
          description: "Do not tail the logs",
        },
        {
          name: ["-n", "--lines"],
          description: "Number of lines to display at start",
          args: { name: "lines", default: "0" },
        },
        noHumanizeOption,
        {
          name: "--file",
          description: "Use this file for application logs",
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--no-app-logs",
          description: "Do not display the application logs",
        },
        {
          name: "--no-worker-logs",
          description: "Do not display the worker logs",
        },
        {
          name: "--no-server-logs",
          description: "Do not display web server/PHP logs",
        },
      ],
    },
    {
      name: ["local:server:prod", "server:prod"],
      description: "Switch a project to use Symfony's production environment",
      options: [dirOption, { name: "--off", description: "Disable prod mode" }],
    },
    {
      name: ["local:server:start", "server:start", "serve"],
      description: "Run a local web server",
      options: [
        {
          name: "--allow-http",
          description: "Prevent auto-redirection from HTTP to HTTPS",
        },
        {
          name: "--document-root",
          description: "Project document root (auto-configured by default)",
          args: { name: "document-root", template: "folders" },
        },
        {
          name: "--passthru",
          description: "Project passthru index (auto-configured by default)",
          args: { name: "passthru", template: "filepaths" },
        },
        {
          name: "--port",
          description: "Preferred HTTP port",
          args: { name: "port", default: "8000" },
        },
        {
          name: "--listen-ip",
          description: "The IP on which the CLI should listen",
          args: { name: "listen-ip", default: "127.0.0.1" },
        },
        {
          name: "--allow-all-ip",
          description: "Listen on all the available interfaces",
        },
        {
          name: ["-d", "--daemon"],
          description: "Run the server in the background",
        },
        {
          name: "--p12",
          description:
            "Name of the file containing the TLS certificate to use in p12 format",
          args: { name: "p12", template: "filepaths" },
        },
        { name: "--no-tls", description: "Use HTTP instead of HTTPS" },
        { name: "--use-gzip", description: "Use GZIP" },
        {
          name: "--tls-key-log-file",
          description:
            "Destination for TLS master secrets in NSS key log format",
          args: { name: "tls-key-log-file", template: "filepaths" },
        },
        { name: "--no-workers", description: "Do not start workers" },
        {
          name: "--allow-cors",
          description: "Allow Cross-origin resource sharing (CORS) requests",
        },
        {
          name: "--proxy-mercure",
          description:
            "Serve the Mercure hub detected via Docker on the web server origin (/.well-known/mercure)",
        },
        dirOption,
        noHumanizeOption,
        {
          name: "--open",
          description:
            "Open the application in the browser after starting the server",
        },
      ],
    },
    {
      name: ["local:server:status", "server:status"],
      description: "Get the local web server status",
      options: [dirOption],
    },
    {
      name: ["local:server:stop", "server:stop"],
      description: "Stop the local web server",
      options: [
        dirOption,
        { name: "--all", description: "Stop all local web servers" },
      ],
    },
    {
      name: ["local:var:expose-from-tunnel", "var:expose-from-tunnel"],
      description: "Expose tunnel service environment variables locally",
      options: [
        dirOption,
        {
          name: "--off",
          description: "Stop exposing tunnel service environment variables",
        },
      ],
    },
    {
      name: "lsp:cache-dir",
      description: "Display the Symfony Language Tools cache directory",
    },
    {
      name: "lsp:check",
      description: "Run Symfony Language Tools diagnostics",
      args: { name: "arguments", isOptional: true, isVariadic: true },
    },
    {
      name: "open:local",
      description: "Open the local project in a browser",
      options: [
        dirOption,
        {
          name: "--path",
          description: "Default path which the project should open on",
          args: { name: "path" },
        },
      ],
    },
    {
      name: "open:local:rabbitmq",
      description:
        "Open the local project RabbitMQ web management interface in a browser",
      options: [dirOption],
    },
    {
      name: "open:local:service",
      description: "Open a local service web interface in a browser",
      options: [dirOption],
      args: {
        name: "service",
        description: "The service name (or type) to open",
      },
    },
    {
      name: "open:local:webmail",
      description:
        "Open the local project mail catcher web interface in a browser",
      options: [dirOption],
    },
    {
      name: ["project:init", "init"],
      description: "Initialize a new project using templates",
      options: [
        dirOption,
        {
          name: "--template",
          description: "Project template to use",
          args: { name: "template" },
        },
        {
          name: "--title",
          description: "Project title",
          args: { name: "title" },
        },
        {
          name: "--slug",
          description: "Project slug",
          args: { name: "slug", default: "app" },
        },
        {
          name: "--php",
          description: "PHP version to use",
          args: { name: "php" },
        },
        { name: "--upsun", description: "Initialize Upsun" },
        {
          name: "--service",
          description: "Configure some services",
          isRepeatable: true,
          hidden: true,
          args: { name: "service" },
        },
        {
          name: "--dump",
          description: "Dump file content instead of writing them on disk",
        },
        {
          name: "--force",
          description:
            "Force the overwrite of the files even if they already exists",
          hidden: true,
        },
      ],
    },
    {
      name: "var:export",
      description:
        "Export environment variables depending on the current context",
      options: [
        dirOption,
        {
          name: "--multiline",
          description: "Display each export on its own line",
        },
        { name: "--debug", description: "Debug Docker support" },
      ],
      args: {
        name: "name",
        description: "Print the value of this environment variable",
        isOptional: true,
      },
    },
    {
      name: ["self:completion", "completion"],
      description: "Dumps the completion script for the current shell",
      args: {
        name: "shell",
        description:
          'The shell type (e.g. "bash"), the value of the "$SHELL" env var will be used if this is not given',
        isOptional: true,
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: ["self:help", "help", "list"],
      description: "Display help for a command or a category of commands",
      args: { name: "command", isOptional: true },
    },
    {
      name: ["self:version", "version"],
      description: "Display the application version",
    },
    {
      name: "composer",
      description: "Runs Composer without memory limit",
      loadSpec: "composer",
    },
    {
      name: "console",
      description: "Runs the Symfony Console (bin/console) for current project",
    },
    { name: "pie", description: "Runs PIE" },
    {
      name: "php",
      description: "Runs the named binary using the configured PHP version",
      loadSpec: "php",
    },
    {
      name: "pecl",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "pear",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "php-fpm",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "php-cgi",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "php-config",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "phpdbg",
      description: "Runs the named binary using the configured PHP version",
    },
    {
      name: "phpize",
      description: "Runs the named binary using the configured PHP version",
    },
  ],
  options: [
    { name: ["-h", "--help"], description: "Show help", isPersistent: true },
    {
      name: ["-q", "--quiet"],
      description: "Do not output any message",
      isPersistent: true,
    },
    {
      name: "--no-ansi",
      description: "Disable ANSI output",
      isPersistent: true,
    },
    { name: "--ansi", description: "Force ANSI output", isPersistent: true },
    {
      name: "--no-interaction",
      description: "Disable all interactions",
      isPersistent: true,
    },
    {
      name: "--log-level",
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 and 3 for more verbose outputs and 4 for debug",
      args: { name: "log-level", suggestions: ["1", "2", "3", "4"] },
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 and 3 for more verbose outputs and 4 for debug",
      isRepeatable: 3,
      isPersistent: true,
    },
    { name: "-V", description: "Print the version", isPersistent: true },
  ],
};

export default completionSpec;
