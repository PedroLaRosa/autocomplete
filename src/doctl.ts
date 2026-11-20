// doctl v2.7.0 (GitHub tag digitalocean/doctl v2.7.0, also the current Homebrew version, 2026-11-20). Source: command tree read statically from commands/*.go at that tag
// (CmdBuilder / AddXxxFlag calls evaluated with a go/ast walker, plus the root flags in commands/doit.go); the binary was not built or run, so nothing was compared with live --help output.
// Descriptions are the first sentence of each Short / flag usage, enum suggestions come from the flag help text, and the ID generators call "doctl <resource> list --format ID,Name --no-header".
// completion and help are cobra's built-in commands, added by hand; commands provided by user-installed plugins are not covered.

const listGenerator = (script: string[]): Fig.Generator => ({
  script: ["doctl", ...script],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [name, ...rest] = line.split(/\s+/);
        return { name, description: rest.join(" ") || undefined };
      }),
});

const appGenerator = listGenerator([
  "apps",
  "list",
  "--format",
  "ID,Spec.Name",
  "--no-header",
]);
const databaseClusterGenerator = listGenerator([
  "databases",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const domainGenerator = listGenerator([
  "compute",
  "domain",
  "list",
  "--format",
  "Domain",
  "--no-header",
]);
const dropletGenerator = listGenerator([
  "compute",
  "droplet",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const firewallGenerator = listGenerator([
  "compute",
  "firewall",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const kubernetesClusterGenerator = listGenerator([
  "kubernetes",
  "cluster",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const loadBalancerGenerator = listGenerator([
  "compute",
  "load-balancer",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const projectGenerator = listGenerator([
  "projects",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const reservedIpGenerator = listGenerator([
  "compute",
  "reserved-ip",
  "list",
  "--format",
  "IP",
  "--no-header",
]);
const sshKeyGenerator = listGenerator([
  "compute",
  "ssh-key",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const tagGenerator = listGenerator([
  "compute",
  "tag",
  "list",
  "--format",
  "Name",
  "--no-header",
]);
const volumeGenerator = listGenerator([
  "compute",
  "volume",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);
const vpcGenerator = listGenerator([
  "vpcs",
  "list",
  "--format",
  "ID,Name",
  "--no-header",
]);

const formatOption: Fig.Option = {
  name: "--format",
  description: "Columns for output in a comma-separated list",
  args: { name: "format" },
};
const noHeaderOption: Fig.Option = {
  name: "--no-header",
  description: "Return raw data with no headers",
};
const waitTimeoutOption: Fig.Option = {
  name: "--wait-timeout",
  description:
    "The longest doctl waits for the operation to finish, as a duration such as 10m or 1h30m",
  args: { name: "wait-timeout" },
};
const waitOption: Fig.Option = {
  name: "--wait",
  description:
    "Instruct the terminal to wait for the action to complete before returning access to the user",
};
const pageTokenOption: Fig.Option = {
  name: "--page-token",
  description: "Pagination cursor from a previous list response",
  args: { name: "page-token" },
};
const regionOption: Fig.Option = {
  name: "--region",
  description: "The region slug to query, for example nyc3",
  isRequired: true,
  args: { name: "region" },
};
const typeOption: Fig.Option = {
  name: "--type",
  description: "Specify connect type (e.g., partner)",
  args: { name: "type", default: "partner" },
};
const regionOption2: Fig.Option = {
  name: "--region",
  description: "Region where the secret is stored",
  args: { name: "region" },
};
const waitOption2: Fig.Option = {
  name: "--wait",
  description: "Wait for action to complete",
};
const regionOption3: Fig.Option = {
  name: ["-r", "--region"],
  description: "The region where the NFS share resides",
  isRequired: true,
  args: { name: "region" },
};
const idOption: Fig.Option = {
  name: "--id",
  description: "The ID of the NFS share",
  isRequired: true,
  args: { name: "id" },
};
const searchOption: Fig.Option = {
  name: "--search",
  description: "Filters the results by a free-text search term",
  args: { name: "search" },
};
const sortDirectionOption: Fig.Option = {
  name: "--sort-direction",
  description: "Sorts the results in this direction",
  args: { name: "sort-direction", suggestions: ["asc", "desc"] },
};
const agentIdOption: Fig.Option = {
  name: "--agent-id",
  description: "Deprecated: use --environment-id",
  args: { name: "agent-id" },
};
const registryOption: Fig.Option = {
  name: "--registry",
  description: "Name of the registry that the repository belongs to",
  args: { name: "registry" },
};
const providerOption: Fig.Option = {
  name: "--provider",
  description: "External provider",
  args: { name: "provider", default: "github" },
};
const requestOption: Fig.Option = {
  name: "--request",
  description: "Path to JSON request body",
  args: { name: "request", template: "filepaths" },
};
const secretOption: Fig.Option = {
  name: "--secret",
  description:
    "Tenant secret as NAME=VALUE, injected into the manifest's secret slots (overriding a value declared in the file)",
  isRepeatable: true,
  args: { name: "secret" },
};
const modelOption: Fig.Option = {
  name: ["-m", "--model"],
  description: "Model ID (required unless --request is set)",
  args: { name: "model" },
};
const dropletIdsOption: Fig.Option = {
  name: "--droplet-ids",
  description:
    "A comma-separated list of Droplet IDs to place behind the cloud firewall, for example: 386734086,391669331",
  isRepeatable: true,
  args: { name: "droplet-ids" },
};
const expirySecondsOption: Fig.Option = {
  name: "--expiry-seconds",
  description:
    "The length of time the registry credentials are valid for, in seconds",
  args: { name: "expiry-seconds" },
};
const forwardingRulesOption: Fig.Option = {
  name: "--forwarding-rules",
  description:
    "A comma-separated list of key-value pairs representing forwarding rules, which define how traffic is routed, e.g.: entry_protocol:tcp,entry_port:3306,target_protocol:tcp,target_port:3306",
  args: { name: "forwarding-rules" },
};
const inboundRulesOption: Fig.Option = {
  name: "--inbound-rules",
  description: "A comma-separated key-value list that defines an inbound rule",
  args: { name: "inbound-rules" },
};
const noBrowserOption: Fig.Option = {
  name: "--no-browser",
  description: "Print the authorization URL instead of opening a browser",
};
const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};
const outboundRulesOption: Fig.Option = {
  name: "--outbound-rules",
  description: "A comma-separate key-value list that defines an outbound rule",
  args: { name: "outbound-rules" },
};
const publicOption: Fig.Option = {
  name: "--public",
  description: "Lists public images",
};
const requestFileOption: Fig.Option = {
  name: "--request-file",
  description: "Path to a complete JSON or YAML request; use - for stdin",
  args: { name: "request-file", template: "filepaths" },
};
const slackUrlsOption: Fig.Option = {
  name: "--slack-urls",
  description:
    "A Slack webhook URL to send alerts to, for example, https://hooks.slack.com/services/T1234567/AAAAAAAA/ZZZZZZ",
  isRepeatable: true,
  args: { name: "slack-urls" },
};
const tagNamesOption: Fig.Option = {
  name: "--tag-names",
  description:
    "A comma-separated list of existing tags, for example: frontend,backend,env:prod",
  isRepeatable: true,
  args: { name: "tag-names" },
};
const backupPolicyHourOption: Fig.Option = {
  name: "--backup-policy-hour",
  description: "Backup policy hour",
  args: { name: "backup-policy-hour" },
};
const backupPolicyWeekdayOption: Fig.Option = {
  name: "--backup-policy-weekday",
  description: "Backup policy weekday",
  args: { name: "backup-policy-weekday" },
};
const endOption: Fig.Option = {
  name: "--end",
  description: "Only consider series with samples before this time",
  args: { name: "end" },
};
const filterFileOption: Fig.Option = {
  name: "--filter-file",
  description:
    "Read a JSON or YAML filter expression from path, or - to read from stdin",
  args: { name: "filter-file" },
};
const forceOption: Fig.Option = {
  name: "--force",
  description: "Force delete without a confirmation prompt",
};
const fromOption: Fig.Option = {
  name: "--from",
  description: "Start of the time range",
  args: { name: "from" },
};
const fromEnvFileOption: Fig.Option = {
  name: "--from-env-file",
  description:
    "Path to an env file containing key-value pairs to store in the secret",
  args: { name: "from-env-file", template: "filepaths" },
};
const matchOption: Fig.Option = {
  name: "--match",
  description: 'A series selector, for example up{job="api"}',
  isRepeatable: true,
  args: { name: "match" },
};
const namespaceOption: Fig.Option = {
  name: "--namespace",
  description: "Target namespace (uses connected namespace if not specified)",
  args: { name: "namespace" },
};
const noWaitOption: Fig.Option = {
  name: "--no-wait",
  description:
    "Print the authorization URL and exit without waiting for authorization to complete",
};
const pageSizeOption: Fig.Option = {
  name: "--page-size",
  description: "Maximum number of sessions to return per page",
  args: { name: "page-size" },
};
const resumeOnTopoffOption: Fig.Option = {
  name: "--resume-on-topoff",
  description:
    "Let DigitalOcean resume this session automatically once your team's prepayment balance is topped off after a low-balance pause",
};
const specOption: Fig.Option = {
  name: "--spec",
  description: "Path to an app spec in JSON or YAML format",
  isRequired: true,
  args: { name: "spec", template: "filepaths" },
};
const startOption: Fig.Option = {
  name: "--start",
  description: "Only consider series with samples after this time",
  args: { name: "start" },
};
const streamOption: Fig.Option = {
  name: "--stream",
  description: "Stream using server-sent events",
};
const toOption: Fig.Option = {
  name: "--to",
  description: "End of the time range",
  args: { name: "to" },
};
const valueOption: Fig.Option = {
  name: "--value",
  description: "Key-value pair in key=value format (repeatable)",
  isRepeatable: true,
  args: { name: "value" },
};
const forceOption2: Fig.Option = {
  name: ["-f", "--force"],
  description: "Delete tag without confirmation prompt",
};
const skipOption: Fig.Option = {
  name: ["-s", "--skip"],
  description:
    "Exclude a specified number of activations from the returned list, starting with the most recent",
  args: { name: "skip" },
};

const DigitalOceanCTLCompletionSpec: Fig.Spec = {
  name: "doctl",
  description: "Command line interface (CLI) for the DigitalOcean API",
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for doctl",
      isPersistent: true,
    },
    {
      name: ["-c", "--config"],
      description: "Specify a custom config file",
      isPersistent: true,
      args: { name: "config", template: "filepaths" },
    },
    {
      name: ["-u", "--api-url"],
      description: "Override default API endpoint",
      isPersistent: true,
      args: { name: "api-url" },
    },
    {
      name: ["-t", "--access-token"],
      description: "API V2 access token",
      isPersistent: true,
      args: { name: "access-token" },
    },
    {
      name: ["-o", "--output"],
      description: "Desired output format",
      isPersistent: true,
      args: { name: "format", suggestions: ["text", "json"], default: "text" },
    },
    {
      name: "--context",
      description: "Specify a custom authentication context name",
      isPersistent: true,
      args: { name: "context" },
    },
    {
      name: "--trace",
      description: "Show a log of network activity while performing a command",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: "--interactive",
      description:
        "Enable interactive behavior. Defaults to true if the terminal supports it",
      isPersistent: true,
    },
    {
      name: "--show",
      description:
        "Reveal masked values, such as secrets, instead of hiding them",
      isPersistent: true,
    },
    {
      name: "--http-retry-max",
      description:
        "Set maximum number of retries for requests that fail with a 429 or 500-level error",
      isPersistent: true,
      args: { name: "http-retry-max", default: "5" },
    },
    {
      name: "--http-retry-wait-max",
      description:
        "Set the maximum number of seconds to wait before retrying a failed request",
      isPersistent: true,
      hidden: true,
      args: { name: "http-retry-wait-max", default: "30" },
    },
    {
      name: "--http-retry-wait-min",
      description:
        "Set the minimum number of seconds to wait before retrying a failed request",
      isPersistent: true,
      hidden: true,
      args: { name: "http-retry-wait-min", default: "1" },
    },
  ],
  subcommands: [
    {
      name: "1-click",
      description: "Display commands that pertain to 1-click applications",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Retrieve a list of 1-Click applications",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--type",
              description: "The 1-Click type",
              args: { name: "type", suggestions: ["kubernetes", "droplet"] },
            },
          ],
        },
      ],
    },
    {
      name: "account",
      description: "Display commands that retrieve account details",
      subcommands: [
        {
          name: ["get", "g"],
          description: "Retrieve account profile details",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["ratelimit", "rl"],
          description: "Retrieve your API usage and the remaining quota",
          options: [formatOption, noHeaderOption],
        },
      ],
    },
    {
      name: ["apps", "app", "a"],
      description: "Displays commands for working with apps",
      subcommands: [
        {
          name: ["cancel-event", "ce"],
          description: "Cancel an event",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "event id" },
          ],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["cancel-job-invocation", "cji"],
          description: "Cancel a job invocation",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "job invocation id" },
          ],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["console", "cs"],
          description: "Starts a console session",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "component name" },
            { name: "instance name (optional)" },
          ],
          options: [
            {
              name: "--deployment",
              description:
                "Starts a console session for a specific deployment ID",
              args: { name: "deployment" },
            },
            {
              name: "--instance-name",
              description:
                "Starts a console session for a specific instance name",
              args: { name: "instance-name" },
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create an app",
          options: [
            formatOption,
            noHeaderOption,
            specOption,
            {
              name: "--wait",
              description:
                "Boolean that specifies whether to wait for an app to complete before returning control to the terminal",
            },
            waitTimeoutOption,
            {
              name: "--upsert",
              description:
                "A boolean value that creates or updates an app’s configuration with the attached app spec",
            },
            {
              name: "--update-sources",
              description:
                "Boolean that specifies whether, on update, the app should also update its source code",
            },
            {
              name: "--project-id",
              description:
                "The ID of the project to assign the created app and resources to",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: ["create-deployment", "cd"],
          description: "Creates a deployment",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--force-rebuild",
              description:
                "Force a re-build even if a previous build is eligible for reuse",
            },
            {
              name: "--wait",
              description:
                "Boolean that specifies whether to wait for the deployment to complete before allowing further terminal input",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["delete", "d", "rm"],
          description: "Deletes an app",
          args: { name: "app id", generators: appGenerator },
          options: [
            {
              name: ["-f", "--force"],
              description: "Delete the App without a confirmation prompt",
            },
          ],
        },
        {
          name: "dev",
          description:
            "[BETA] Display commands for working with App Platform local development",
          subcommands: [
            {
              name: ["build", "b"],
              description: "Build an app component",
              args: { name: "component name", isOptional: true },
              options: [
                {
                  name: "--spec",
                  description:
                    "An optional path to an app spec in JSON or YAML format",
                  args: { name: "spec", template: "filepaths" },
                },
                {
                  name: "--app",
                  description: "An optional existing app ID",
                  args: { name: "app" },
                },
                {
                  name: "--env-file",
                  description:
                    "An optional path to a .env file with overrides for values of app spec environment variables",
                  args: { name: "env-file", template: "filepaths" },
                },
                {
                  name: "--no-cache",
                  description: "Set to disable build caching",
                },
                {
                  name: "--build-command",
                  description:
                    "An optional build command override for local development",
                  args: { name: "build-command" },
                },
                {
                  name: "--timeout",
                  description: "An optional timeout duration for the build",
                  args: { name: "timeout" },
                },
                {
                  name: "--registry",
                  description:
                    "An optional registry name to tag built container images with",
                  args: { name: "registry" },
                },
              ],
            },
            {
              name: ["config", "c"],
              description:
                "Displays commands for working with App Platform local development configuration settings",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set a value in the local development configuration settings",
                  args: { name: "KEY=VALUE", isVariadic: true },
                  options: [
                    {
                      name: "--dev-config",
                      description: "Path to the app dev config",
                      args: { name: "dev-config", template: "filepaths" },
                    },
                  ],
                },
                {
                  name: "unset",
                  description:
                    "Unset a value in the local development configuration settings",
                  args: { name: "KEY", isVariadic: true },
                  options: [
                    {
                      name: "--dev-config",
                      description: "Path to the app dev config",
                      args: { name: "dev-config", template: "filepaths" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Get an app",
          args: { name: "app id", generators: appGenerator },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-deployment", "gd"],
          description: "Get a deployment",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "deployment id" },
          ],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-event", "ge"],
          description: "Get an event",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "event id" },
          ],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-job-invocation", "gji"],
          description: "Get a job invocation",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "job invocation id" },
          ],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "Lists all apps",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--with-projects",
              description:
                "Boolean that specifies whether project ids should be fetched along with listed apps",
            },
          ],
        },
        {
          name: ["list-alerts", "la"],
          description: "Lists alerts on an app",
          args: { name: "app id", generators: appGenerator },
          options: [formatOption, noHeaderOption],
        },
        {
          name: "list-buildpacks",
          description: "Lists buildpacks",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-deployments", "lsd"],
          description: "List all deployments",
          args: { name: "app id", generators: appGenerator },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-events", "lse"],
          description: "List app events",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--event-type",
              description:
                "Filter events by type (e.g. DEPLOYMENT, AUTOSCALING)",
              isRepeatable: true,
              args: { name: "event-type" },
            },
          ],
        },
        {
          name: ["list-instances", "i"],
          description: "Get app instances",
          args: { name: "app id", generators: appGenerator },
        },
        {
          name: ["list-job-invocations", "lsji"],
          description: "List all job invocations",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--deployment",
              description: "The deployment ID to filter job invocations for",
              args: { name: "deployment" },
            },
            {
              name: "--job-name",
              description: "The job name to filter job invocations for",
              args: { name: "job-name" },
            },
          ],
        },
        {
          name: "list-regions",
          description: "Lists available App Platform regions",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["logs", "l"],
          description: "Retrieves logs",
          args: [
            { name: "app name or id" },
            { name: "component name (defaults to all components)" },
          ],
          options: [
            {
              name: "--deployment",
              description: "Retrieves logs for a specific deployment ID",
              args: { name: "deployment" },
            },
            {
              name: "--job-invocation",
              description: "Retrieves logs for a specific job invocation ID",
              args: { name: "job-invocation" },
            },
            {
              name: "--event-id",
              description: "Retrieves logs for a specific autoscaling event ID",
              args: { name: "event-id" },
            },
            {
              name: "--type",
              description: "Retrieves logs for a specific log type",
              args: { name: "type" },
            },
            {
              name: ["-f", "--follow"],
              description: "Returns logs as they are emitted by the app",
            },
            {
              name: "--tail",
              description:
                "Specifies the number of lines to show from the end of the log",
              args: { name: "tail" },
            },
            {
              name: "--no-prefix",
              description: "Removes the prefix from logs",
            },
          ],
        },
        {
          name: ["propose", "p"],
          description: "Proposes an app spec",
          options: [
            formatOption,
            noHeaderOption,
            specOption,
            {
              name: "--app",
              description: "An optional existing app ID",
              args: { name: "app" },
            },
          ],
        },
        {
          name: ["restart", "r"],
          description: "Restarts an app",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--components",
              description: "The components to restart",
              isRepeatable: true,
              args: { name: "components" },
            },
            {
              name: "--wait",
              description:
                "Boolean that specifies whether to wait for the restart to complete before allowing further terminal input",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: "spec",
          description: "Display commands for working with app specs",
          subcommands: [
            {
              name: "get",
              description: "Retrieve an application's spec",
              args: { name: "app id", generators: appGenerator },
              options: [
                {
                  name: "--deployment",
                  description: "Optional: a deployment ID",
                  args: { name: "deployment" },
                },
                {
                  name: "--format",
                  description:
                    'The format to output the spec in; either "yaml" or "json"',
                  args: {
                    name: "format",
                    suggestions: ["yaml", "json"],
                    default: "yaml",
                  },
                },
              ],
            },
            {
              name: "validate",
              description: "Validate an application spec",
              args: { name: "spec file" },
              options: [
                {
                  name: "--schema-only",
                  description:
                    "Only validate the spec schema and not the correctness of the spec",
                },
              ],
            },
          ],
        },
        {
          name: "tier",
          description: "Display commands for working with app tiers",
          subcommands: [
            {
              name: "get",
              description: "Retrieve an app tier",
              hidden: true,
              args: { name: "tier slug" },
            },
            {
              name: "instance-size",
              description:
                "Display commands for working with app instance sizes",
              subcommands: [
                {
                  name: "get",
                  description: "Retrieve an app instance size",
                  args: { name: "instance size slug" },
                },
                {
                  name: ["list", "ls"],
                  description: "List all app instance sizes",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all app tiers",
              hidden: true,
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Updates an app",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            specOption,
            {
              name: "--update-sources",
              description:
                "Boolean that specifies whether the app should also update its source code",
            },
            {
              name: "--wait",
              description:
                "Boolean that specifies whether to wait for an app to complete updating before allowing further terminal input",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["update-alert-destinations", "uad"],
          description: "Updates alert destinations",
          args: [
            { name: "app id", generators: appGenerator },
            { name: "alert id" },
          ],
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--app-alert-destinations",
              description:
                "Path to an alert destinations file in JSON or YAML format",
              args: { name: "app-alert-destinations", template: "filepaths" },
            },
          ],
        },
        {
          name: "upgrade-buildpack",
          description: "Upgrades app's buildpack",
          args: { name: "app id", generators: appGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--buildpack",
              description: "The ID of the buildpack to upgrade to",
              isRequired: true,
              args: { name: "buildpack" },
            },
            {
              name: "--major-version",
              description: "The major version to upgrade to",
              args: { name: "major-version" },
            },
            {
              name: "--trigger-deployment",
              description:
                "Specifies whether to trigger a new deployment to apply the upgrade",
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Display commands for authenticating doctl with an account",
      subcommands: [
        {
          name: "init",
          description: "Initialize doctl to use a specific account",
          options: [
            {
              name: "--token-validation-server",
              description: "Server that validates the token",
              args: {
                name: "token-validation-server",
                default: "https://cloud.digitalocean.com",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List available authentication contexts",
          options: [formatOption],
        },
        {
          name: "login",
          description: "Sign in to DigitalOcean via OAuth 2.1 in your browser",
          options: [
            {
              name: "--oauth-server",
              description: "The OAuth authorization server to sign in to",
              args: { name: "oauth-server" },
            },
            {
              name: "--client-id",
              description: "The OAuth application to sign in as",
              args: { name: "client-id" },
            },
            {
              name: "--scopes",
              description:
                'A space-separated list of scopes to request, such as "read write" or "droplet:read account:read"',
              args: { name: "scopes" },
            },
            {
              name: "--save-scope",
              description: "Save --scopes as the default for later logins",
            },
            {
              name: "--callback-port",
              description:
                "The local port to listen on for the authorization redirect",
              args: { name: "callback-port" },
            },
            noBrowserOption,
            {
              name: "--timeout",
              description:
                "How long the authorization link stays valid while doctl waits for you to approve the request in your browser",
              args: { name: "timeout" },
            },
          ],
        },
        { name: "remove", description: "Remove authentication contexts" },
        {
          name: "switch",
          description: "Switch between authentication contexts",
        },
        {
          name: ["token", "t"],
          description: "Display current authentication context API token",
        },
      ],
    },
    {
      name: "balance",
      description: "Display commands for retrieving your account balance",
      subcommands: [
        {
          name: ["get", "g"],
          description: "Retrieve your account balance",
          options: [formatOption, noHeaderOption],
        },
      ],
    },
    {
      name: ["billing-history", "bh"],
      description: "Display commands for retrieving your billing history",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Retrieve a paginated billing history for a user",
          options: [formatOption, noHeaderOption],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionsOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionsOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionsOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionsOption],
        },
      ],
    },
    {
      name: "compute",
      description: "Display commands that manage infrastructure",
      subcommands: [
        {
          name: "action",
          description:
            "Display commands for retrieving resource action history",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Retrieve details about a specific action",
              args: { name: "action-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description:
                "Retrieve a list of all recent actions taken on your resources",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--resource-type",
                  description:
                    "Filter by action resource type, such as droplet",
                  args: { name: "resource-type" },
                },
                {
                  name: "--region",
                  description:
                    "Filter by a specified datacenter region, such as nyc",
                  args: { name: "region" },
                },
                {
                  name: "--after",
                  description:
                    "Filter actions taken after a specified date, in RFC3339 format",
                  args: { name: "after" },
                },
                {
                  name: "--before",
                  description:
                    "Filter actions taken after a specified date, in RFC3339 format",
                  args: { name: "before" },
                },
                {
                  name: "--status",
                  description:
                    "Filter by action status, such as completed or in-progress",
                  args: { name: "status" },
                },
                {
                  name: "--action-type",
                  description:
                    "Filter by action type, such as create or destroy",
                  args: { name: "action-type" },
                },
              ],
            },
            {
              name: ["wait", "w"],
              description: "Block thread until an action completes",
              args: { name: "action-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--poll-timeout",
                  description: "Re-poll time in seconds",
                  args: { name: "poll-timeout", default: "5" },
                },
                waitTimeoutOption,
              ],
            },
          ],
        },
        {
          name: "cdn",
          description: "Display commands that manage CDNs",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a CDN",
              args: { name: "cdn-origin" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--ttl",
                  description:
                    'The "Time To Live" (TTL) value for cached content, in seconds',
                  args: { name: "ttl", default: "3600" },
                },
                {
                  name: "--domain",
                  description: "Specify a custom domain to use with the CDN",
                  args: { name: "domain" },
                },
                {
                  name: "--certificate-id",
                  description: "Specify a certificate ID for the custom domain",
                  args: { name: "certificate-id" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a CDN",
              args: { name: "cdn-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the specified CDN without prompting for confirmation",
                },
              ],
            },
            {
              name: ["flush", "fc"],
              description: "Flush the cache of a CDN",
              args: { name: "cdn-id" },
              options: [
                {
                  name: "--files",
                  description: "Cdn files",
                  isRepeatable: true,
                  args: { name: "files" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve details about a specific CDN",
              args: { name: "cdn-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List CDNs that have already been created",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update the configuration for a CDN",
              args: { name: "cdn-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--ttl",
                  description:
                    'The "Time To Live" (TTL) value for cached content, in seconds',
                  args: { name: "ttl", default: "3600" },
                },
                {
                  name: "--domain",
                  description: "Specify a custom domain to use with the CDN",
                  args: { name: "domain" },
                },
                {
                  name: "--certificate-id",
                  description: "Specify a certificate ID for the custom domain",
                  args: { name: "certificate-id" },
                },
              ],
            },
          ],
        },
        {
          name: "certificate",
          description:
            "Display commands that manage SSL certificates and private keys",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new certificate",
              options: [
                {
                  name: "--name",
                  description: "A user-specified name for the certificate",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--dns-names",
                  description:
                    "Comma-separated list of domains for which the certificate will be issued",
                  isRepeatable: true,
                  args: { name: "dns-names" },
                },
                {
                  name: "--private-key-path",
                  description:
                    "The path on your local machine to a PEM-formatted private-key corresponding to the SSL certificate",
                  args: { name: "private-key-path" },
                },
                {
                  name: "--leaf-certificate-path",
                  description:
                    "The path on your local machine to a PEM-formatted public SSL certificate",
                  args: { name: "leaf-certificate-path" },
                },
                {
                  name: "--certificate-chain-path",
                  description:
                    "The path on your local machine to a full PEM-formatted trust chain between the certificate authority's certificate and your domain's SSL certificate",
                  args: { name: "certificate-chain-path" },
                },
                {
                  name: "--type",
                  description:
                    "The type of certificate, custom or lets_encrypt",
                  args: {
                    name: "type",
                    suggestions: ["custom", "lets_encrypt"],
                  },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Delete the specified certificate",
              args: { name: "id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the certificate without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve details about a certificate",
              args: { name: "id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve list of the account's stored certificates",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Filter certificates by the specified name",
                  args: { name: "name" },
                },
              ],
            },
          ],
        },
        {
          name: "domain",
          description: "Display commands that manage domains",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Add a domain to your account",
              args: { name: "domain", generators: domainGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--ip-address",
                  description: "Creates an A record for a IPv4 address",
                  args: { name: "ip-address" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a domain from your account",
              args: { name: "domain", generators: domainGenerator },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the domain without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a domain",
              args: { name: "domain", generators: domainGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all domains on your account",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "records",
              description: "Manage DNS records",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create a DNS record",
                  args: { name: "domain", generators: domainGenerator },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--record-type",
                      description: "The type of DNS record",
                      args: {
                        name: "record-type",
                        suggestions: [
                          "A",
                          "AAAA",
                          "CAA",
                          "CNAME",
                          "MX",
                          "NS",
                          "SOA",
                          "SRV",
                          "TXT",
                        ],
                      },
                    },
                    {
                      name: "--record-name",
                      description:
                        "The host name, alias, or service being defined by the record",
                      args: { name: "record-name" },
                    },
                    {
                      name: "--record-data",
                      description: "The record's data",
                      args: { name: "record-data" },
                    },
                    {
                      name: "--record-priority",
                      description: "The priority for an MX or SRV record",
                      args: { name: "record-priority" },
                    },
                    {
                      name: "--record-port",
                      description: "The port value for an SRV record",
                      args: { name: "record-port" },
                    },
                    {
                      name: "--record-ttl",
                      description:
                        "The record's Time To Live (TTL) value, in seconds",
                      args: { name: "record-ttl", default: "1800" },
                    },
                    {
                      name: "--record-weight",
                      description: "The weight value for an SRV record",
                      args: { name: "record-weight" },
                    },
                    {
                      name: "--record-flags",
                      description: "The flag value of a CAA record",
                      args: { name: "record-flags" },
                    },
                    {
                      name: "--record-tag",
                      description: "The parameter tag for CAA records",
                      args: {
                        name: "record-tag",
                        suggestions: ["issue", "issuewild", "iodef"],
                      },
                    },
                  ],
                },
                {
                  name: ["delete", "d", "rm"],
                  description: "Delete a DNS record",
                  args: [
                    { name: "domain", generators: domainGenerator },
                    { name: "record-id", isVariadic: true },
                  ],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description: "Delete record without confirmation prompt",
                    },
                  ],
                },
                {
                  name: ["list", "ls"],
                  description: "List the DNS records for a domain",
                  args: { name: "domain", generators: domainGenerator },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["update", "u"],
                  description: "Update a DNS record",
                  args: { name: "domain", generators: domainGenerator },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--record-id",
                      description: "The record's ID",
                      args: { name: "record-id" },
                    },
                    {
                      name: "--record-type",
                      description: "The type of DNS record",
                      args: { name: "record-type" },
                    },
                    {
                      name: "--record-name",
                      description:
                        "The host name, alias, or service being defined by the record",
                      args: { name: "record-name" },
                    },
                    {
                      name: "--record-data",
                      description: "The record's data",
                      args: { name: "record-data" },
                    },
                    {
                      name: "--record-priority",
                      description: "The priority for an MX or SRV record",
                      args: { name: "record-priority" },
                    },
                    {
                      name: "--record-port",
                      description: "The port value for an SRV record",
                      args: { name: "record-port" },
                    },
                    {
                      name: "--record-ttl",
                      description:
                        "The record's Time To Live (TTL) value, in seconds",
                      args: { name: "record-ttl" },
                    },
                    {
                      name: "--record-weight",
                      description: "The weight value for an SRV record",
                      args: { name: "record-weight" },
                    },
                    {
                      name: "--record-flags",
                      description: "The flag value of a CAA record",
                      args: { name: "record-flags" },
                    },
                    {
                      name: "--record-tag",
                      description: "The parameter tag for CAA records",
                      args: {
                        name: "record-tag",
                        suggestions: ["issue", "issuewild", "iodef"],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["droplet", "d"],
          description: "Manage virtual machines (Droplets)",
          subcommands: [
            {
              name: "1-click",
              description:
                "Display commands that pertain to Droplet 1-click applications",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Retrieve a list of Droplet 1-Click applications",
                  options: [formatOption, noHeaderOption],
                },
              ],
            },
            {
              name: ["actions", "a"],
              description: "List Droplet actions",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "backup-policies",
              description: "Display commands for Droplet's backup policies",
              subcommands: [
                {
                  name: "get",
                  description: "Get droplet's backup policy",
                  args: { name: "droplet-id", generators: dropletGenerator },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--template",
                      description: "Go template format",
                      args: { name: "template" },
                    },
                  ],
                },
                {
                  name: ["list", "ls"],
                  description: "List backup policies for all Droplets",
                },
                {
                  name: "list-supported",
                  description: "List of all supported droplet backup policies",
                },
              ],
            },
            {
              name: ["backups", "b"],
              description: "List Droplet backups",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["create", "c"],
              description: "Create a new Droplet",
              args: { name: "droplet-name", isVariadic: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--ssh-keys",
                  description:
                    "A list of SSH key IDs or fingerprints to embed in the Droplet's root account upon creation",
                  isRepeatable: true,
                  args: { name: "ssh-keys" },
                },
                {
                  name: "--user-data",
                  description:
                    "A shell script to run on the Droplet's first boot",
                  args: { name: "user-data" },
                  exclusiveOn: ["--user-data-file"],
                },
                {
                  name: "--user-data-file",
                  description:
                    "The path to a file containing a shell script or Cloud-init YAML file to run on the Droplet's first boot",
                  args: { name: "user-data-file", template: "filepaths" },
                  exclusiveOn: ["--user-data"],
                },
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the action to complete before returning access to the user",
                },
                waitTimeoutOption,
                {
                  name: "--region",
                  description:
                    "A slug specifying the region to create the Droplet in, such as nyc1",
                  args: { name: "region" },
                },
                {
                  name: "--size",
                  description:
                    "A slug indicating the Droplet's number of vCPUs, RAM, and disk size",
                  isRequired: true,
                  args: { name: "size" },
                },
                {
                  name: "--enable-backups",
                  description: "Enables backups for the Droplet",
                },
                {
                  name: "--backup-policy-plan",
                  description: "Backup policy frequency plan",
                  args: { name: "backup-policy-plan" },
                },
                backupPolicyWeekdayOption,
                backupPolicyHourOption,
                {
                  name: "--enable-ipv6",
                  description:
                    "Enables IPv6 support and assigns an IPv6 address to the Droplet",
                },
                {
                  name: "--enable-private-networking",
                  description:
                    "Enables private networking for the Droplet by provisioning it inside of your account's default VPC for the region",
                },
                {
                  name: "--enable-public-networking",
                  description: "Enables public networking for the Droplet",
                },
                {
                  name: "--enable-monitoring",
                  description:
                    "Installs the DigitalOcean agent for additional monitoring",
                },
                {
                  name: "--image",
                  description:
                    "An ID or slug specifying the image to use to create the Droplet, such as ubuntu-20-04-x64",
                  isRequired: true,
                  args: { name: "image" },
                },
                {
                  name: "--tag-name",
                  description: "Applies a tag to the Droplet",
                  args: { name: "tag-name" },
                },
                {
                  name: "--vpc-uuid",
                  description:
                    "The UUID of a non-default VPC to create the Droplet in",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--project-id",
                  description:
                    "The UUID of the project to assign the Droplet to",
                  args: { name: "project-id" },
                },
                {
                  name: "--tag-names",
                  description: "Applies a list of tags to the Droplet",
                  isRepeatable: true,
                  args: { name: "tag-names" },
                },
                {
                  name: "--droplet-agent",
                  description:
                    "Specifies whether or not the Droplet monitoring agent should be installed",
                },
                {
                  name: "--volumes",
                  description:
                    "A list of block storage volume IDs to attach to the Droplet",
                  isRepeatable: true,
                  args: { name: "volumes" },
                },
              ],
            },
            {
              name: ["delete", "d", "del", "rm"],
              description: "Permanently delete a Droplet",
              args: {
                name: "droplet-id|droplet-name",
                isVariadic: true,
                generators: dropletGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the Droplet without a confirmation prompt",
                },
                {
                  name: "--tag-name",
                  description: "Tag name",
                  args: { name: "tag-name" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a Droplet",
              args: {
                name: "droplet-id|droplet-name",
                generators: dropletGenerator,
              },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--template",
                  description: "Go template format",
                  args: { name: "template" },
                },
              ],
            },
            {
              name: ["kernels", "k"],
              description: "List available Droplet kernels",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List Droplets on your account",
              args: { name: "GLOB", isOptional: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "Retrieves a list of Droplets in a specified region",
                  args: { name: "region" },
                },
                {
                  name: "--tag-name",
                  description:
                    "Retrieves a list of Droplets with the specified tag name",
                  args: { name: "tag-name" },
                },
                { name: "--gpus", description: "List GPU Droplets only" },
              ],
            },
            {
              name: ["neighbors", "n"],
              description: "List a Droplet's neighbors on your account",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["snapshots", "s"],
              description: "List all snapshots for a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "tag",
              description: "Add a tag to a Droplet",
              args: {
                name: "droplet-id|droplet-name",
                generators: dropletGenerator,
              },
              options: [
                {
                  name: "--tag-name",
                  description: "The tag name apply to the Droplet",
                  isRequired: true,
                  args: { name: "tag-name" },
                },
              ],
            },
            {
              name: "untag",
              description: "Remove a tag from a Droplet",
              args: {
                name: "droplet-id|droplet-name",
                generators: dropletGenerator,
              },
              options: [
                {
                  name: "--tag-name",
                  description: "The tag name to remove from Droplet",
                  isRepeatable: true,
                  args: { name: "tag-name" },
                },
              ],
            },
          ],
        },
        {
          name: ["droplet-action", "da"],
          description: "Display Droplet action commands",
          subcommands: [
            {
              name: "change-backup-policy",
              description: "Change backup policy on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--backup-policy-plan",
                  description: "Backup policy frequency plan",
                  isRequired: true,
                  args: { name: "backup-policy-plan" },
                },
                backupPolicyWeekdayOption,
                backupPolicyHourOption,
                waitOption2,
                waitTimeoutOption,
              ],
            },
            {
              name: "change-kernel",
              description: "Change a Droplet's kernel",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--kernel-id",
                  description: "Kernel ID",
                  isRequired: true,
                  args: { name: "kernel-id" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "disable-backups",
              description: "Disable backups on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "enable-backups",
              description: "Enable backups on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--backup-policy-plan",
                  description: "Backup policy frequency plan",
                  args: { name: "backup-policy-plan" },
                },
                backupPolicyWeekdayOption,
                backupPolicyHourOption,
                waitOption2,
                waitTimeoutOption,
              ],
            },
            {
              name: "enable-ipv6",
              description: "Enable IPv6 on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "enable-private-networking",
              description: "Enable private networking on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a specific Droplet action",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--action-id",
                  description: "Action ID",
                  isRequired: true,
                  args: { name: "action-id" },
                },
              ],
            },
            {
              name: "password-reset",
              description: "Reset the root password for a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "power-cycle",
              description: "Powercycle a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "power-off",
              description: "Power off a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "power-on",
              description: "Power on a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "reboot",
              description: "Reboot a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "rebuild",
              description: "Rebuild a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--image",
                  description: "An image ID or slug",
                  isRequired: true,
                  args: { name: "image" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "rename",
              description: "Rename a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--droplet-name",
                  description: "The new name for the Droplet",
                  isRequired: true,
                  args: { name: "droplet-name" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "resize",
              description: "Resize a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--resize-disk",
                  description:
                    "Resize the Droplet's disk size in addition to its RAM and CPUs",
                },
                {
                  name: "--size",
                  description:
                    "A slug indicating the new size for the Droplet, for example s-2vcpu-2gb",
                  isRequired: true,
                  args: { name: "size" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "restore",
              description: "Restore a Droplet from a backup",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--image-id",
                  description:
                    "The ID of the image to restore the Droplet from",
                  isRequired: true,
                  args: { name: "image-id" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "shutdown",
              description: "Shut down a Droplet",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                waitOption,
                waitTimeoutOption,
              ],
            },
            {
              name: "snapshot",
              description: "Take a Droplet snapshot",
              args: { name: "droplet-id", generators: dropletGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--snapshot-name",
                  description: "The snapshot's name",
                  isRequired: true,
                  args: { name: "snapshot-name" },
                },
                waitOption,
                waitTimeoutOption,
              ],
            },
          ],
        },
        {
          name: ["droplet-autoscale", "das"],
          description: "Display commands to manage Droplet autoscale pools",
          subcommands: [
            {
              name: "create",
              description: "Create a new Droplet autoscale pool",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Name of the Droplet autoscale pool",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--min-instances",
                  description: "Min number of members",
                  args: { name: "min-instances" },
                },
                {
                  name: "--max-instances",
                  description: "Max number of members",
                  args: { name: "max-instances" },
                },
                {
                  name: "--cpu-target",
                  description: "CPU target threshold",
                  args: { name: "cpu-target" },
                },
                {
                  name: "--mem-target",
                  description: "Memory target threshold",
                  args: { name: "mem-target" },
                },
                {
                  name: "--cooldown-minutes",
                  description: "Cooldown duration",
                  args: { name: "cooldown-minutes" },
                },
                {
                  name: "--target-instances",
                  description: "Target number of members",
                  args: { name: "target-instances" },
                },
                {
                  name: "--size",
                  description: "Droplet size",
                  args: { name: "size" },
                },
                {
                  name: "--region",
                  description: "Droplet region",
                  args: { name: "region" },
                },
                {
                  name: "--image",
                  description: "Droplet image",
                  args: { name: "image" },
                },
                {
                  name: "--tag",
                  description: "Droplet tags",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--ssh-keys",
                  description: "Droplet SSH keys",
                  isRepeatable: true,
                  args: { name: "ssh-keys" },
                },
                {
                  name: "--vpc-uuid",
                  description: "Droplet VPC UUID",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--droplet-agent",
                  description: "Enable droplet agent",
                },
                {
                  name: "--project-id",
                  description: "Droplet project ID",
                  args: { name: "project-id" },
                },
                {
                  name: "--enable-public-networking",
                  description: "Enable public networking",
                },
                { name: "--enable-ipv6", description: "Enable droplet IPv6" },
                {
                  name: "--user-data",
                  description: "Droplet user data",
                  args: { name: "user-data" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Delete an active Droplet autoscale pool",
              args: { name: "autoscale-pool-id" },
              options: [forceOption],
            },
            {
              name: "delete-dangerous",
              description:
                "Delete an active Droplet autoscale pool and all its members",
              args: { name: "autoscale-pool-id" },
              options: [forceOption],
            },
            {
              name: "get",
              description: "Get an active Droplet autoscale pool",
              args: { name: "autoscale-pool-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all active Droplet autoscale pools",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "list-history",
              description:
                "List all history events for a Droplet autoscale pool",
              args: { name: "autoscale-pool-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "list-members",
              description: "List all members of a Droplet autoscale pool",
              args: { name: "autoscale-pool-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "update",
              description: "Update an active Droplet autoscale pool",
              args: { name: "autoscale-pool-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Name of the Droplet autoscale pool",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--min-instances",
                  description: "Min number of members",
                  args: { name: "min-instances" },
                },
                {
                  name: "--max-instances",
                  description: "Max number of members",
                  args: { name: "max-instances" },
                },
                {
                  name: "--cpu-target",
                  description: "CPU target threshold",
                  args: { name: "cpu-target" },
                },
                {
                  name: "--mem-target",
                  description: "Memory target threshold",
                  args: { name: "mem-target" },
                },
                {
                  name: "--cooldown-minutes",
                  description: "Cooldown duration",
                  args: { name: "cooldown-minutes" },
                },
                {
                  name: "--target-instances",
                  description: "Target number of members",
                  args: { name: "target-instances" },
                },
                {
                  name: "--size",
                  description: "Droplet size",
                  args: { name: "size" },
                },
                {
                  name: "--region",
                  description: "Droplet region",
                  args: { name: "region" },
                },
                {
                  name: "--image",
                  description: "Droplet image",
                  args: { name: "image" },
                },
                {
                  name: "--tag",
                  description: "Droplet tags",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--ssh-keys",
                  description: "Droplet SSH keys",
                  isRepeatable: true,
                  args: { name: "ssh-keys" },
                },
                {
                  name: "--vpc-uuid",
                  description: "Droplet VPC UUID",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--droplet-agent",
                  description: "Enable droplet agent",
                },
                {
                  name: "--project-id",
                  description: "Droplet project ID",
                  args: { name: "project-id" },
                },
                {
                  name: "--enable-public-networking",
                  description: "Enable public networking",
                },
                { name: "--enable-ipv6", description: "Enable droplet IPv6" },
                {
                  name: "--user-data",
                  description: "Droplet user data",
                  args: { name: "user-data" },
                },
              ],
            },
          ],
        },
        {
          name: "firewall",
          description: "Display commands to manage cloud firewalls",
          subcommands: [
            {
              name: "add-droplets",
              description: "Add Droplets to a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [dropletIdsOption],
            },
            {
              name: "add-rules",
              description: "Add inbound or outbound rules to a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [inboundRulesOption, outboundRulesOption],
            },
            {
              name: "add-tags",
              description: "Add tags to a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [tagNamesOption],
            },
            {
              name: ["create", "c"],
              description: "Create a new cloud firewall",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The firewall's name",
                  isRequired: true,
                  args: { name: "name" },
                },
                inboundRulesOption,
                outboundRulesOption,
                dropletIdsOption,
                tagNamesOption,
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a cloud firewall",
              args: {
                name: "firewall-id",
                isVariadic: true,
                generators: firewallGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the firewall without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List the cloud firewalls on your account",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "list-by-droplet",
              description: "List firewalls by Droplet",
              args: { name: "droplet_id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "remove-droplets",
              description: "Remove Droplets from a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [dropletIdsOption],
            },
            {
              name: "remove-rules",
              description:
                "Remove inbound or outbound rules from a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [inboundRulesOption, outboundRulesOption],
            },
            {
              name: "remove-tags",
              description: "Remove tags from a cloud firewall",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [tagNamesOption],
            },
            {
              name: ["update", "u"],
              description: "Update a cloud firewall's configuration",
              args: { name: "firewall-id", generators: firewallGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The firewall's name",
                  isRequired: true,
                  args: { name: "name" },
                },
                inboundRulesOption,
                outboundRulesOption,
                dropletIdsOption,
                tagNamesOption,
              ],
            },
          ],
        },
        {
          name: "image",
          description: "Display commands to manage images",
          subcommands: [
            {
              name: "create",
              description: "Create custom image",
              args: { name: "image-name" },
              options: [
                {
                  name: "--image-url",
                  description: "The URL to retrieve the image from",
                  isRequired: true,
                  args: { name: "image-url" },
                },
                {
                  name: "--region",
                  description:
                    "The slug of the region you want to store the image in",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--image-distribution",
                  description:
                    "A custom image distribution slug to apply to the image",
                  args: { name: "image-distribution", default: "Unknown" },
                },
                {
                  name: "--image-description",
                  description: "An optional description of the image",
                  args: { name: "image-description" },
                },
                {
                  name: "--tag-names",
                  description: "A list of tag names to apply to the image",
                  isRepeatable: true,
                  args: { name: "tag-names" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Permanently delete an image from your account",
              args: { name: "image-id" },
              options: [
                { name: ["-f", "--force"], description: "Force image delete" },
              ],
            },
            {
              name: "get",
              description: "Retrieve information about an image",
              args: { name: "image-id|image-slug" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List images on your account",
              options: [formatOption, noHeaderOption, publicOption],
            },
            {
              name: "list-application",
              description: "List available One-Click Apps",
              options: [formatOption, noHeaderOption, publicOption],
            },
            {
              name: "list-distribution",
              description: "List available distribution images",
              options: [formatOption, noHeaderOption, publicOption],
            },
            {
              name: "list-user",
              description: "List user-created images",
              options: [formatOption, noHeaderOption, publicOption],
            },
            {
              name: "update",
              description: "Update an image's metadata",
              args: { name: "image-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--image-name",
                  description: "The name of the image to update",
                  isRequired: true,
                  args: { name: "image-name" },
                },
              ],
            },
          ],
        },
        {
          name: "image-action",
          description: "Display commands to perform actions on images",
          subcommands: [
            {
              name: "get",
              description: "Retrieve the status of an image action",
              args: { name: "image-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--action-id",
                  description: "Action id",
                  isRequired: true,
                  args: { name: "action-id" },
                },
              ],
            },
            {
              name: "transfer",
              description: "Transfer an image to another datacenter region",
              args: { name: "image-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description: "The target region to transfer the image to",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the action to complete before returning access to the user",
                },
                waitTimeoutOption,
              ],
            },
          ],
        },
        {
          name: ["load-balancer", "lb"],
          description: "Display commands to manage load balancers",
          subcommands: [
            {
              name: "add-droplets",
              description: "Add Droplets to a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [
                {
                  name: "--droplet-ids",
                  description:
                    "A comma-separated list of IDs of Droplet to add to the load balancer, example value: 12,33",
                  isRepeatable: true,
                  args: { name: "droplet-ids" },
                },
              ],
            },
            {
              name: "add-forwarding-rules",
              description: "Add forwarding rules to a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [forwardingRulesOption],
            },
            {
              name: ["create", "c"],
              description: "Create a new load balancer",
              options: [
                {
                  name: "--name",
                  description: "The load balancer's name",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--region",
                  description: "The load balancer's region, e.g.: nyc1",
                  args: { name: "region" },
                },
                {
                  name: "--size",
                  description: "The load balancer's size, e.g.: lb-small",
                  args: { name: "size" },
                },
                {
                  name: "--size-unit",
                  description: "The load balancer's size, e.g.: 1",
                  args: { name: "size-unit" },
                },
                {
                  name: "--type",
                  description:
                    "The type of load balancer, e.g.: REGIONAL or GLOBAL",
                  args: { name: "type", suggestions: ["REGIONAL", "GLOBAL"] },
                },
                {
                  name: "--vpc-uuid",
                  description:
                    "The UUID of the VPC to create the load balancer in",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--subnet-uuid",
                  description:
                    "The UUID of the subnet to create the load balancer in",
                  args: { name: "subnet-uuid" },
                },
                {
                  name: "--algorithm",
                  description: "This field has been deprecated",
                  args: { name: "algorithm", default: "round_robin" },
                },
                {
                  name: "--redirect-http-to-https",
                  description:
                    "Redirects HTTP requests to the load balancer on port 80 to HTTPS on port 443",
                },
                {
                  name: "--enable-proxy-protocol",
                  description: "Enable proxy protocol",
                },
                {
                  name: "--enable-backend-keepalive",
                  description:
                    "Enable keepalive connections to backend target droplets",
                },
                {
                  name: "--disable-lets-encrypt-dns-records",
                  description:
                    "Disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer",
                },
                {
                  name: "--tag-name",
                  description: "The name of a tag",
                  args: { name: "tag-name" },
                },
                {
                  name: "--droplet-ids",
                  description:
                    "A comma-separated list of Droplet IDs to add to the load balancer, e.g.: 12,33",
                  isRepeatable: true,
                  args: { name: "droplet-ids" },
                },
                {
                  name: "--sticky-sessions",
                  description:
                    "A comma-separated list of key-value pairs representing a list of active sessions, e.g.: type:cookies, cookie_name:DO-LB, cookie_ttl_seconds:5",
                  args: { name: "sticky-sessions" },
                },
                {
                  name: "--health-check",
                  description:
                    "A comma-separated list of key-value pairs representing recent health check results, e.g.: protocol:http,port:80,path:/index.html,check_interval_seconds:10,response_timeout_seconds:5,healthy_threshold:5,unhealthy_threshold:3",
                  args: { name: "health-check" },
                },
                forwardingRulesOption,
                {
                  name: "--wait",
                  description:
                    "Boolean that specifies whether to wait for a load balancer to complete before returning control to the terminal",
                },
                waitTimeoutOption,
                {
                  name: "--project-id",
                  description:
                    "Indicates which project to associate the Load Balancer with",
                  args: { name: "project-id" },
                },
                {
                  name: "--http-idle-timeout-seconds",
                  description:
                    "HTTP idle timeout that configures the idle timeout for http connections on the load balancer",
                  args: { name: "http-idle-timeout-seconds" },
                },
                {
                  name: "--allow-list",
                  description:
                    "A comma-separated list of ALLOW rules for the load balancer, e.g.: ip:1.2.3.4,cidr:1.2.0.0/16",
                  isRepeatable: true,
                  args: { name: "allow-list" },
                },
                {
                  name: "--deny-list",
                  description:
                    "A comma-separated list of DENY rules for the load balancer, e.g.: ip:1.2.3.4,cidr:1.2.0.0/16",
                  isRepeatable: true,
                  args: { name: "deny-list" },
                },
                {
                  name: "--domains",
                  description:
                    "A comma-separated list of domains required to ingress traffic to a global load balancer, e.g.: name:test-domain-1 is_managed:true certificate_id:test-cert-id-1",
                  isRepeatable: true,
                  args: { name: "domains" },
                },
                {
                  name: "--glb-settings",
                  description:
                    "Target protocol and port settings for ingressing traffic to a global load balancer, e.g.: target_protocol:http,target_port:80",
                  args: { name: "glb-settings" },
                },
                {
                  name: "--glb-cdn-settings",
                  description:
                    "CDN cache settings global load balancer, e.g.: is_enabled:true",
                  args: { name: "glb-cdn-settings" },
                },
                {
                  name: "--target-lb-ids",
                  description:
                    "A comma-separated list of Load Balancer IDs to add as target to the global load balancer",
                  isRepeatable: true,
                  args: { name: "target-lb-ids" },
                },
                {
                  name: "--network",
                  description:
                    "The type of network the load balancer is accessible from, e.g.: EXTERNAL or INTERNAL",
                  args: {
                    name: "network",
                    suggestions: ["EXTERNAL", "INTERNAL"],
                  },
                },
                {
                  name: "--network-stack",
                  description:
                    "The network stack type determines the allocation of ipv4/ipv6 addresses to the load balancer, e.g.: IPV4 or DUALSTACK (NOTE: this feature is in private preview, contact DigitalOcean support to review its public availability.)",
                  args: {
                    name: "network-stack",
                    suggestions: ["IPV4", "DUALSTACK"],
                  },
                },
                {
                  name: "--tls-cipher-policy",
                  description:
                    "The tls cipher policy to be used for the load balancer, e.g.: DEFAULT or STRONG",
                  args: {
                    name: "tls-cipher-policy",
                    suggestions: ["DEFAULT", "STRONG"],
                  },
                },
                {
                  name: "--ip",
                  description:
                    "An optional BYOIP address to assign to the load balancer",
                  args: { name: "ip" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the load balancer without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List load balancers",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "purge-cache",
              description: "Purges CDN cache for a global load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Purge the global load balancer CDN cache without a confirmation prompt",
                },
              ],
            },
            {
              name: "remove-droplets",
              description: "Remove Droplets from a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [
                {
                  name: "--droplet-ids",
                  description:
                    "A comma-separated list of IDs of Droplets to remove from the load balancer, example value: 12,33",
                  isRepeatable: true,
                  args: { name: "droplet-ids" },
                },
              ],
            },
            {
              name: "remove-forwarding-rules",
              description: "Remove forwarding rules from a load balancer",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [forwardingRulesOption],
            },
            {
              name: ["update", "u"],
              description: "Update a load balancer's configuration",
              args: {
                name: "load-balancer-id",
                generators: loadBalancerGenerator,
              },
              options: [
                {
                  name: "--name",
                  description: "The load balancer's name",
                  args: { name: "name" },
                },
                {
                  name: "--region",
                  description: "The load balancer's region, e.g.: nyc1",
                  args: { name: "region" },
                },
                {
                  name: "--size",
                  description: "The load balancer's size, e.g.: lb-small",
                  args: { name: "size" },
                },
                {
                  name: "--size-unit",
                  description: "The load balancer's size, e.g.: 1",
                  args: { name: "size-unit" },
                },
                {
                  name: "--vpc-uuid",
                  description:
                    "The UUID of the VPC to create the load balancer in",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--subnet-uuid",
                  description:
                    "The UUID of the subnet to create the load balancer in",
                  args: { name: "subnet-uuid" },
                },
                {
                  name: "--algorithm",
                  description: "This field has been deprecated",
                  args: { name: "algorithm", default: "round_robin" },
                },
                {
                  name: "--redirect-http-to-https",
                  description:
                    "Flag to redirect HTTP requests to the load balancer on port 80 to HTTPS on port 443",
                },
                {
                  name: "--enable-proxy-protocol",
                  description: "Enable proxy protocol",
                },
                {
                  name: "--enable-backend-keepalive",
                  description:
                    "Enable keepalive connections to backend target droplets",
                },
                {
                  name: "--tag-name",
                  description:
                    "Assigns Droplets with the specified tag to the load balancer",
                  args: { name: "tag-name" },
                },
                {
                  name: "--droplet-ids",
                  description:
                    "A comma-separated list of Droplet IDs, e.g.: 215,378",
                  isRepeatable: true,
                  args: { name: "droplet-ids" },
                },
                {
                  name: "--sticky-sessions",
                  description:
                    "A comma-separated list of key-value pairs representing a list of active sessions, e.g.: type:cookies, cookie_name:DO-LB, cookie_ttl_seconds:5",
                  args: { name: "sticky-sessions" },
                },
                {
                  name: "--health-check",
                  description:
                    "A comma-separated list of key-value pairs representing recent health check results, e.g.: protocol:http, port:80, path:/index.html, check_interval_seconds:10, response_timeout_seconds:5, healthy_threshold:5, unhealthy_threshold:3",
                  args: { name: "health-check" },
                },
                forwardingRulesOption,
                {
                  name: "--disable-lets-encrypt-dns-records",
                  description:
                    "Disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer",
                },
                {
                  name: "--project-id",
                  description:
                    "Indicates which project to associate the Load Balancer with",
                  args: { name: "project-id" },
                },
                {
                  name: "--allow-list",
                  description:
                    "A comma-separated list of ALLOW rules for the load balancer, e.g.: ip:1.2.3.4,cidr:1.2.0.0/16",
                  isRepeatable: true,
                  args: { name: "allow-list" },
                },
                {
                  name: "--deny-list",
                  description:
                    "A comma-separated list of DENY rules for the load balancer, e.g.: ip:1.2.3.4,cidr:1.2.0.0/16",
                  isRepeatable: true,
                  args: { name: "deny-list" },
                },
                {
                  name: "--domains",
                  description:
                    "A comma-separated list of domains required to ingress traffic to a global load balancer, e.g.: name:test-domain-1 is_managed:true certificate_id:test-cert-id-1",
                  isRepeatable: true,
                  args: { name: "domains" },
                },
                {
                  name: "--glb-settings",
                  description:
                    "Target protocol and port settings for ingressing traffic to a global load balancer, e.g.: target_protocol:http,target_port:80",
                  args: { name: "glb-settings" },
                },
                {
                  name: "--glb-cdn-settings",
                  description:
                    "CDN cache settings global load balancer, e.g.: is_enabled:true",
                  args: { name: "glb-cdn-settings" },
                },
                {
                  name: "--target-lb-ids",
                  description:
                    "A comma-separated list of Load Balancer IDs to add as target to the global load balancer",
                  isRepeatable: true,
                  args: { name: "target-lb-ids" },
                },
                {
                  name: "--tls-cipher-policy",
                  description:
                    "The tls cipher policy to be used for the load balancer, e.g.: DEFAULT or STRONG",
                  args: {
                    name: "tls-cipher-policy",
                    suggestions: ["DEFAULT", "STRONG"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "microvm",
          description: "Manage MicroVMs",
          subcommands: [
            {
              name: ["access-token", "access-tokens"],
              description: "Manage MicroVM access tokens",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create an access token for a MicroVM",
                  args: { name: "microvm-id" },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--name",
                      description:
                        "A name for the token, unique among the live access tokens of the MicroVM (1 to 64 characters)",
                      isRequired: true,
                      args: { name: "name" },
                    },
                    {
                      name: "--expires-in-seconds",
                      description: "The lifetime of the token in seconds",
                      args: { name: "expires-in-seconds" },
                    },
                  ],
                },
                {
                  name: ["list", "ls"],
                  description: "List the access tokens of a MicroVM",
                  args: { name: "microvm-id" },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["revoke", "rm", "delete"],
                  description: "Revoke an access token of a MicroVM",
                  args: [{ name: "microvm-id" }, { name: "token-id" }],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description:
                        "Revoke the access token without a confirmation prompt",
                    },
                  ],
                },
              ],
            },
            {
              name: ["checkpoint", "checkpoints", "cp"],
              description: "Manage MicroVM checkpoints",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create a checkpoint of a MicroVM",
                  args: { name: "microvm-id" },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--name",
                      description:
                        "Optional human-readable name for the checkpoint",
                      args: { name: "name" },
                    },
                  ],
                },
                {
                  name: ["delete", "d", "rm"],
                  description: "Delete one or more MicroVM checkpoints",
                  args: { name: "checkpoint-id", isVariadic: true },
                  options: [
                    {
                      name: ["-f", "--force"],
                      description:
                        "Delete the checkpoint(s) without a confirmation prompt",
                    },
                  ],
                },
                {
                  name: ["get", "g"],
                  description: "Retrieve a MicroVM checkpoint",
                  args: { name: "checkpoint-id" },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["list", "ls"],
                  description: "List MicroVM checkpoints",
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--microvm-id",
                      description:
                        "Filter checkpoints captured from this MicroVM UUID",
                      args: { name: "microvm-id" },
                    },
                  ],
                },
              ],
            },
            {
              name: "console",
              description: "Open an interactive console to a MicroVM",
              args: { name: "microvm-id" },
            },
            {
              name: ["create", "c"],
              description: "Create a new MicroVM",
              args: { name: "microvm-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "A slug specifying the region to create the MicroVM in, such as nyc1 (required for --oci-ref; optional for --checkpoint-id)",
                  args: { name: "region" },
                },
                {
                  name: "--cpu",
                  description:
                    "Number of vCPUs (required for --oci-ref; optional for --checkpoint-id)",
                  args: { name: "cpu" },
                },
                {
                  name: "--memory",
                  description:
                    "Memory in MiB (required for --oci-ref; optional for --checkpoint-id)",
                  args: { name: "memory" },
                },
                {
                  name: "--oci-ref",
                  description:
                    "OCI reference for the workload container (mutually exclusive with --checkpoint-id)",
                  args: { name: "oci-ref" },
                },
                {
                  name: "--checkpoint-id",
                  description:
                    "Checkpoint UUID to restore (mutually exclusive with --oci-ref)",
                  args: { name: "checkpoint-id" },
                },
                {
                  name: "--networking",
                  description: "Networking mode for the MicroVM: public or vpc",
                  args: { name: "networking", suggestions: ["public", "vpc"] },
                },
                {
                  name: "--vpc-uuid",
                  description:
                    "The UUID of a non-default VPC to place the MicroVM in (only valid when --networking=vpc)",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--auto-pause",
                  description:
                    "Whether the MicroVM auto-pauses after the idle timeout",
                },
                {
                  name: "--auto-pause-idle-timeout",
                  description: "Idle duration before auto-pause (e.g. 5m, 30s)",
                  args: { name: "auto-pause-idle-timeout" },
                },
                {
                  name: "--auto-resume",
                  description:
                    "Whether the MicroVM auto-resumes on incoming HTTP traffic",
                },
                {
                  name: "--http-port",
                  description: "HTTP port exposed by the MicroVM workload",
                  args: { name: "http-port" },
                },
                {
                  name: "--http-protocol",
                  description:
                    "HTTP protocol served by the MicroVM: http or http2",
                  args: {
                    name: "http-protocol",
                    suggestions: ["http", "http2"],
                  },
                },
                {
                  name: "--ports",
                  description: "Guest ports to open for ingress",
                  isRepeatable: true,
                  args: { name: "ports" },
                },
                {
                  name: "--env",
                  description:
                    "Environment variables to inject, in KEY=VALUE form",
                  isRepeatable: true,
                  args: { name: "env" },
                },
                {
                  name: "--tag",
                  description: "Tags to apply to the MicroVM",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--egress-allow",
                  description:
                    "A destination the MicroVM may connect to: an exact domain (api.example.com), a wildcard (*.example.com), or an exact IP address",
                  isRepeatable: true,
                  args: { name: "egress-allow" },
                },
                {
                  name: "--egress-default-action",
                  description:
                    "What to do with a destination no --egress-allow rule matches: deny or allow",
                  args: {
                    name: "egress-default-action",
                    suggestions: ["deny", "allow"],
                  },
                },
                {
                  name: "--ingress",
                  description:
                    "Whether to create the MicroVM with a default public URL",
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete one or more MicroVMs",
              args: { name: "microvm-id", isVariadic: true },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the MicroVM(s) without a confirmation prompt",
                },
              ],
            },
            {
              name: "download",
              description: "Download a file from a MicroVM",
              args: { name: "microvm-id" },
              options: [
                {
                  name: "--path",
                  description:
                    "Absolute path of the file inside the workload container",
                  isRequired: true,
                  args: { name: "path", template: "folders" },
                },
                {
                  name: "--save-to",
                  description: "Local path to write the file to",
                  isRequired: true,
                  args: { name: "save-to", template: "filepaths" },
                },
              ],
            },
            {
              name: "exec",
              description: "Run a one-shot command in a MicroVM",
              args: [
                { name: "microvm-id" },
                { name: "command", isVariadic: true },
              ],
              options: [
                {
                  name: "--cwd",
                  description:
                    "Working directory inside the workload container",
                  args: { name: "cwd" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a MicroVM",
              args: { name: "microvm-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List MicroVMs on your account",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description: "Filter MicroVMs by region slug, such as nyc1",
                  args: { name: "region" },
                },
                {
                  name: "--name",
                  description: "Filter MicroVMs by exact name",
                  args: { name: "name" },
                },
                {
                  name: "--tag-name",
                  description: "Filter MicroVMs by resource tag name",
                  args: { name: "tag-name" },
                },
              ],
            },
            {
              name: "options",
              description: "List MicroVM create options",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "pause",
              description: "Pause a running MicroVM",
              args: { name: "microvm-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "resume",
              description: "Resume a paused MicroVM",
              args: { name: "microvm-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description:
                "Update a MicroVM's name, tags, or auto-pause idle timeout",
              args: { name: "microvm-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The new name for the MicroVM",
                  args: { name: "name" },
                },
                {
                  name: "--tag",
                  description: "The complete set of tags for the MicroVM",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--clear-tags",
                  description:
                    "Remove every tag from the MicroVM (mutually exclusive with --tag)",
                },
                {
                  name: "--auto-pause-idle-timeout",
                  description: "Idle duration before auto-pause (e.g. 5m, 30s)",
                  args: { name: "auto-pause-idle-timeout" },
                },
              ],
            },
            {
              name: "upload",
              description: "Upload a file into a MicroVM",
              args: { name: "microvm-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--local-file",
                  description: "Path of the local file to upload",
                  isRequired: true,
                  args: { name: "local-file", template: "filepaths" },
                },
                {
                  name: "--path",
                  description:
                    "Absolute destination path inside the workload container, such as /app/config.json",
                  isRequired: true,
                  args: { name: "path", template: "folders" },
                },
                {
                  name: "--mode",
                  description:
                    "Octal permission mode for the file, such as 0600 (defaults to 0644)",
                  args: { name: "mode" },
                },
                {
                  name: "--uid",
                  description:
                    "Owner user id for the file, set together with --gid (defaults to the container's user)",
                  args: { name: "uid" },
                },
                {
                  name: "--gid",
                  description:
                    "Owner group id for the file, set together with --uid (defaults to the container's group)",
                  args: { name: "gid" },
                },
              ],
            },
            {
              name: ["url", "urls"],
              description: "Manage MicroVM ingress URLs",
              subcommands: [
                {
                  name: ["add", "a"],
                  description: "Add an ingress URL to a MicroVM",
                  args: { name: "microvm-id" },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--port",
                      description: "Guest port the URL routes to",
                      args: { name: "port" },
                    },
                  ],
                },
                {
                  name: ["list", "ls"],
                  description: "List a MicroVM's ingress URLs",
                  args: { name: "microvm-id" },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["remove", "rm"],
                  description: "Remove an ingress URL from a MicroVM",
                  args: [{ name: "microvm-id" }, { name: "url-id" }],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description:
                        "Remove the URL without a confirmation prompt",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["plugin", "p"],
          description: "Display commands to manage plugins",
          deprecated: true,
          hidden: true,
          subcommands: [
            { name: ["list", "ls"], description: "List plugins" },
            { name: "run", description: "Run a plugin" },
          ],
        },
        {
          name: "region",
          description: "Display commands to list datacenter regions",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Retrieves a list of datacenter regions",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: [
            "reserved-ip",
            "fip",
            "floating-ip",
            "floating-ips",
            "reserved-ips",
          ],
          description: "Display commands to manage reserved IP addresses",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new reserved IP address",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "The region where to create the reserved IP address",
                  args: { name: "region" },
                },
                {
                  name: "--project-id",
                  description: "The ID of the project to assign the IP address",
                  args: { name: "project-id" },
                },
                {
                  name: "--droplet-id",
                  description:
                    "The ID of the Droplet to assign the reserved IP to",
                  args: { name: "droplet-id" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a reserved IP address",
              args: { name: "reserved-ip", generators: reservedIpGenerator },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the reserved IP address without confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a reserved IP address",
              args: { name: "reserved-ip", generators: reservedIpGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all reserved IP addresses on your account",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "Retrieves a list of reserved IP addresses in the specified region",
                  args: { name: "region" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "reserved-ip-action",
            "fipa",
            "floating-ip-action",
            "floating-ip-actions",
            "reserved-ip-actions",
          ],
          description:
            "Display commands to associate reserved IP addresses with Droplets",
          subcommands: [
            {
              name: "assign",
              description: "Assign a reserved IP address to a Droplet",
              args: [
                { name: "reserved-ip", generators: reservedIpGenerator },
                { name: "droplet-id", generators: dropletGenerator },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: "get",
              description: "Retrieve the status of a reserved IP action",
              args: [
                { name: "reserved-ip", generators: reservedIpGenerator },
                { name: "action-id" },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: "unassign",
              description: "Unassign a reserved IP address from a Droplet",
              args: { name: "reserved-ip", generators: reservedIpGenerator },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["reserved-ipv6", "reserved-ipv6s"],
          description: "Display commands to manage reserved IPv6 addresses",
          subcommands: [
            {
              name: "assign",
              description: "Assign a reserved IPv6 address to a Droplet",
              args: [
                { name: "reserved-ipv6" },
                { name: "droplet-id", generators: dropletGenerator },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["create", "c"],
              description: "Create a new reserved IPv6 address",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "The region where to create the reserved IPv6 address",
                  args: { name: "region" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a reserved IPv6 address",
              args: { name: "reserved-ipv6" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the reserved IPv6 address without confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a reserved IPv6 address",
              args: { name: "reserved-ipv6" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all reserved IPv6 addresses on your account",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "Retrieves a list of reserved IPv6 addresses in the specified region",
                  args: { name: "region" },
                },
              ],
            },
            {
              name: "unassign",
              description: "Unassign a reserved IPv6 address from a Droplet",
              args: { name: "reserved-ipv6" },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: "size",
          description: "List available Droplet sizes",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available Droplet sizes",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["snapshot", "s"],
          description: "Access and manage snapshots",
          subcommands: [
            {
              name: ["delete", "d", "rm"],
              description: "Delete a snapshot of a Droplet or volume",
              args: { name: "snapshot-id", isVariadic: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--force"],
                  description: "Delete the snapshot without confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a Droplet or volume snapshot",
              args: { name: "snapshot-id", isVariadic: true },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List Droplet and volume snapshots",
              args: { name: "glob", isOptional: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--resource",
                  description: "Filters by resource type (droplet or volume)",
                  args: {
                    name: "resource",
                    suggestions: ["droplet", "volume"],
                  },
                },
                {
                  name: "--region",
                  description: "Filters by regional availability",
                  args: { name: "region" },
                },
              ],
            },
          ],
        },
        {
          name: "ssh",
          description: "Access a Droplet using SSH",
          args: { name: "droplet-id|name", generators: dropletGenerator },
          options: [
            {
              name: "--ssh-user",
              description: "SSH user for connection",
              args: { name: "ssh-user", default: "root" },
            },
            {
              name: "--ssh-key-path",
              description: "Path to SSH private key",
              args: { name: "ssh-key-path", template: "filepaths" },
            },
            {
              name: "--ssh-port",
              description: "The remote port sshd is running on",
              args: { name: "ssh-port", default: "22" },
            },
            {
              name: "--ssh-agent-forwarding",
              description: "Enable SSH agent forwarding",
            },
            {
              name: "--ssh-private-ip",
              description: "SSH to Droplet's private IP address",
            },
            {
              name: "--ssh-command",
              description: "Command to execute on Droplet",
              args: { name: "ssh-command" },
            },
            {
              name: "--ssh-retry-max",
              description:
                "Max number of retries for a successful SSH connection to a Droplet (default is 0)",
              args: { name: "ssh-retry-max" },
            },
          ],
        },
        {
          name: ["ssh-key", "k"],
          description: "Display commands to manage SSH keys on your account",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new SSH key on your account",
              args: { name: "key-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--public-key",
                  description: "Key contents",
                  isRequired: true,
                  args: { name: "public-key" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete an SSH key from your account",
              args: {
                name: "key-id|key-fingerprint",
                generators: sshKeyGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Delete the key without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description:
                "Retrieve information about an SSH key on your account",
              args: {
                name: "key-id|key-fingerprint",
                generators: sshKeyGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["import", "i"],
              description:
                "Import an SSH key from your computer to your account",
              args: { name: "key-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--public-key-file",
                  description: "Public key file",
                  isRequired: true,
                  args: { name: "public-key-file", template: "filepaths" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all SSH keys on your account",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update an SSH key's name",
              args: {
                name: "key-id|key-fingerprint",
                generators: sshKeyGenerator,
              },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--key-name",
                  description: "Key name",
                  isRequired: true,
                  args: { name: "key-name" },
                },
              ],
            },
          ],
        },
        {
          name: "tag",
          description: "Display commands to manage tags",
          subcommands: [
            {
              name: "apply",
              description: "Apply a tag to resources",
              args: { name: "tag-name", generators: tagGenerator },
              options: [
                {
                  name: "--resource",
                  description: "The resource to tag in URN format",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "resource" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a tag",
              args: { name: "tag-name", generators: tagGenerator },
            },
            {
              name: ["delete", "rm"],
              description: "Delete a tag",
              args: {
                name: "tag-name",
                isVariadic: true,
                generators: tagGenerator,
              },
              options: [forceOption2],
            },
            {
              name: "get",
              description: "Retrieve information about a tag",
              args: { name: "tag-name", generators: tagGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all tags",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "remove",
              description: "Remove a tag from resources",
              args: { name: "tag-name", generators: tagGenerator },
              options: [
                {
                  name: "--resource",
                  description: "The resource to untag in URN format",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "resource" },
                },
              ],
            },
          ],
        },
        {
          name: "volume",
          description: "Display commands to manage block storage volumes",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a block storage volume",
              args: { name: "volume-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--size",
                  description: "Volume size",
                  isRequired: true,
                  args: { name: "size", default: "4TiB" },
                },
                {
                  name: "--desc",
                  description: "A description of the volume",
                  args: { name: "desc" },
                },
                {
                  name: "--region",
                  description: "The volume's region",
                  args: { name: "region" },
                },
                {
                  name: "--snapshot",
                  description:
                    "Creates a volume from the specified snapshot ID",
                  args: { name: "snapshot" },
                },
                {
                  name: "--fs-type",
                  description: "The volume's filesystem type: ext4 or xfs",
                  args: { name: "fs-type" },
                },
                {
                  name: "--fs-label",
                  description: "The volume's filesystem label",
                  args: { name: "fs-label" },
                },
                {
                  name: "--tag",
                  description:
                    "A comma-separated list of tags to apply to the volume",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Delete a block storage volume",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the volume without prompting for confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve an existing block storage volume",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List block storage volumes by ID",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description: "Filter's volumes by the specified region",
                  args: { name: "region" },
                },
              ],
            },
            {
              name: ["snapshot", "s"],
              description: "Create a block storage volume snapshot",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--snapshot-name",
                  description: "The snapshot name",
                  isRequired: true,
                  args: { name: "snapshot-name" },
                },
                {
                  name: "--snapshot-desc",
                  description: "A description of the snapshot",
                  args: { name: "snapshot-desc" },
                },
                {
                  name: "--tag",
                  description:
                    "A comma-separate list of tags to apply to the snapshot",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
              ],
            },
          ],
        },
        {
          name: "volume-action",
          description: "Display commands to perform actions on a volume",
          subcommands: [
            {
              name: ["attach", "a"],
              description: "Attach a volume to a Droplet",
              args: [
                { name: "volume-id", generators: volumeGenerator },
                { name: "droplet-id", generators: dropletGenerator },
              ],
              options: [
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the volume to attach before returning control to the user",
                },
                waitTimeoutOption,
              ],
            },
            {
              name: ["detach", "d"],
              description: "Detach a volume from a Droplet",
              args: [
                { name: "volume-id", generators: volumeGenerator },
                { name: "droplet-id", generators: dropletGenerator },
              ],
              options: [
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the volume to detach before returning control to the user",
                },
                waitTimeoutOption,
              ],
            },
            {
              name: "detach-by-droplet-id",
              description: "(Deprecated) Detach a volume",
              args: [
                { name: "volume-id", generators: volumeGenerator },
                { name: "droplet-id", generators: dropletGenerator },
              ],
            },
            {
              name: "get",
              description: "Retrieve the status of a volume action",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--action-id",
                  description: "Action id",
                  isRequired: true,
                  args: { name: "action-id" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve a list of actions taken on a volume",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["resize", "r"],
              description: "Resize the disk of a volume",
              args: { name: "volume-id", generators: volumeGenerator },
              options: [
                {
                  name: "--size",
                  description: "The volume's new size, in GiB",
                  isRequired: true,
                  args: { name: "size" },
                },
                {
                  name: "--region",
                  description: "The volume's current region",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the volume to complete resizing before returning control to the user",
                },
                waitTimeoutOption,
              ],
            },
          ],
        },
        {
          name: ["vpc-nat-gateway", "vng"],
          description: "Display commands to manage VPC NAT Gateways",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new VPC NAT Gateway",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Name of the VPC NAT Gateway",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--type",
                  description: "Gateway type",
                  args: { name: "type", default: "PUBLIC" },
                },
                {
                  name: "--region",
                  description: "Gateway region",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--size",
                  description: "Gateway size",
                  args: { name: "size", default: "1" },
                },
                {
                  name: "--vpcs",
                  description:
                    "Ingress VPCs, takes a kv-pair of Ingress VPC ID and optional 'default' to indicate the gateway to be set as default for the VPC, and an optional subnet UUID to restrict the gateway to a specific subnet of the VPC (e.g. --vpcs 6df2c5f4-d2da-4bce-b8dc-e9d2b7bd5db6:default,abcd8994-7f1b-4512-bc2e-13d47ca68632:3d6f6fdc-8b7e-49fd-a3c2-0d73ec4e40b4) (NOTE: specifying a subnet UUID is in private preview, contact DigitalOcean support to review its public availability.)",
                  isRepeatable: true,
                  args: { name: "vpcs" },
                },
                {
                  name: "--udp-timeout",
                  description: "UDP connection timeout (seconds)",
                  args: { name: "udp-timeout", default: "30" },
                },
                {
                  name: "--icmp-timeout",
                  description: "ICMP connection timeout (seconds)",
                  args: { name: "icmp-timeout", default: "30" },
                },
                {
                  name: "--tcp-timeout",
                  description: "TCP connection timeout (seconds)",
                  args: { name: "tcp-timeout", default: "300" },
                },
                {
                  name: "--project-id",
                  description:
                    "Indicates which project to associate the VPC NAT Gateway with",
                  args: { name: "project-id" },
                },
                {
                  name: "--ip",
                  description:
                    "An optional BYOIP address to assign as the public egress IP",
                  args: { name: "ip" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Delete a VPC NAT Gateway",
              args: { name: "gateway-id" },
              options: [forceOption],
            },
            {
              name: "get",
              description: "Get a VPC NAT Gateway",
              args: { name: "gateway-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all active VPC NAT Gateways",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update an active VPC NAT Gateway",
              args: { name: "gateway-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Name of the VPC NAT Gateway",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--type",
                  description: "Gateway type",
                  args: { name: "type", default: "PUBLIC" },
                },
                {
                  name: "--region",
                  description: "Gateway region",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--size",
                  description: "Gateway size",
                  args: { name: "size", default: "1" },
                },
                {
                  name: "--vpcs",
                  description:
                    "Ingress VPCs, takes a kv-pair of Ingress VPC ID and optional 'default' to indicate the gateway to be set as default for the VPC, and an optional subnet UUID to restrict the gateway to a specific subnet of the VPC (e.g. --vpcs 6df2c5f4-d2da-4bce-b8dc-e9d2b7bd5db6:default,abcd8994-7f1b-4512-bc2e-13d47ca68632:3d6f6fdc-8b7e-49fd-a3c2-0d73ec4e40b4) (NOTE: specifying a subnet UUID is in private preview, contact DigitalOcean support to review its public availability.)",
                  isRepeatable: true,
                  args: { name: "vpcs" },
                },
                {
                  name: "--udp-timeout",
                  description: "UDP connection timeout (seconds)",
                  args: { name: "udp-timeout", default: "30" },
                },
                {
                  name: "--icmp-timeout",
                  description: "ICMP connection timeout (seconds)",
                  args: { name: "icmp-timeout", default: "30" },
                },
                {
                  name: "--tcp-timeout",
                  description: "TCP connection timeout (seconds)",
                  args: { name: "tcp-timeout", default: "300" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["databases", "db", "dbs", "d", "database"],
      description: "Display commands that manage databases",
      subcommands: [
        {
          name: ["backups", "bu"],
          description: "List database cluster backups",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["configuration", "cfg", "config"],
          description:
            "View the configuration of a database cluster given its ID and Engine",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Get a database cluster's configuration",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-e", "--engine"],
                  description:
                    "The engine of the database you want to get the configuration for",
                  isRequired: true,
                  args: { name: "engine" },
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a database cluster's configuration",
              args: { name: "db-id" },
              options: [
                {
                  name: ["-e", "--engine"],
                  description:
                    "The engine of the database you want to update the configuration for",
                  isRequired: true,
                  args: { name: "engine" },
                },
                {
                  name: "--config-json",
                  description:
                    "The desired configuration of the database cluster you want to update",
                  isRequired: true,
                  args: { name: "config-json", default: "{}" },
                },
              ],
            },
          ],
        },
        {
          name: ["connection", "conn"],
          description: "Retrieve connection details for a database cluster",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--private",
              description:
                "Returns connection details that use the database's VPC network connection",
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create a database cluster",
          args: { name: "name" },
          options: [
            {
              name: "--num-nodes",
              description: "The number of nodes in the database cluster",
              args: { name: "num-nodes", default: "1" },
            },
            {
              name: "--region",
              description:
                "The data center region where the database cluster resides, such as nyc1 or sfo2",
              args: { name: "region", default: "nyc1" },
            },
            {
              name: "--size",
              description:
                "The size of the nodes in the database cluster, for example db-s-1vcpu-1gb indicates a 1 CPU, 1GB node",
              args: { name: "size", default: "db-s-1vcpu-1gb" },
            },
            {
              name: "--storage-size-mib",
              description: "The amount of disk space allocated to the cluster",
              args: { name: "storage-size-mib" },
            },
            {
              name: "--engine",
              description: "The database's engine",
              args: {
                name: "engine",
                suggestions: [
                  "pg",
                  "mysql",
                  "advanced_pg",
                  "advanced_mysql",
                  "redis",
                  "valkey",
                  "mongodb",
                  "kafka",
                  "opensearch",
                ],
                default: "pg",
              },
            },
            {
              name: "--version",
              description:
                "The database engine's version, such as 14 for PostgreSQL version 14",
              args: { name: "version" },
            },
            {
              name: "--private-network-uuid",
              description:
                "The UUID of a VPC to create the database cluster in",
              args: { name: "private-network-uuid" },
            },
            {
              name: "--restore-from-cluster-name",
              description:
                "The name of an existing database cluster to restore from",
              args: { name: "restore-from-cluster-name" },
            },
            {
              name: "--restore-from-timestamp",
              description:
                "The timestamp of an existing database cluster backup in UTC combined date and time format (2006-01-02 15:04:05 +0000 UTC)",
              args: { name: "restore-from-timestamp" },
            },
            {
              name: "--wait",
              description:
                "A boolean value that specifies whether to wait for the database cluster to be provisioned before returning control to the terminal",
            },
            waitTimeoutOption,
            {
              name: "--tag",
              description:
                "A comma-separated list of tags to apply to the database cluster",
              isRepeatable: true,
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "db",
          description:
            "Display commands for managing individual databases within a cluster",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a database within a cluster",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "database-name" },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete the specified database from the cluster",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "database-name" },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the database without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve the name of a database within a cluster",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "database-name" },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve a list of databases within a cluster",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a database cluster",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Delete the database cluster without a confirmation prompt",
            },
            {
              name: "--wait",
              description:
                "A boolean value that specifies whether to wait for the database cluster to be deleted before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: "events",
          description: "Display commands for listing database cluster events",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List your database cluster events",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["firewalls", "fw"],
          description:
            "Display commands to manage firewall rules (calledtrusted sources in the control panel) for database clusters",
          subcommands: [
            {
              name: ["append", "a"],
              description: "Add a database firewall rule to a given database",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                {
                  name: "--rule",
                  description: "Firewall rule to add, in the form type:value",
                  isRequired: true,
                  args: { name: "rule" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "Retrieve a list of firewall rules for a given database",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
            },
            {
              name: ["remove", "rm"],
              description: "Remove a firewall rule for a given database",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                {
                  name: "--uuid",
                  description: "UUID of the firewall rule to remove",
                  isRequired: true,
                  args: { name: "uuid" },
                },
              ],
            },
            {
              name: ["replace", "r"],
              description: "Replaces the firewall rules for a given database",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                {
                  name: "--rule",
                  description:
                    "A comma-separated list of firewall rules, in type:value format",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "rule" },
                },
              ],
            },
          ],
        },
        {
          name: ["fork", "f"],
          description:
            "Create a new database cluster by forking an existing database cluster",
          args: { name: "name" },
          options: [
            {
              name: "--restore-from-cluster-id",
              description:
                "The ID of an existing database cluster from which the new database will be forked from",
              isRequired: true,
              args: { name: "restore-from-cluster-id" },
            },
            {
              name: "--restore-from-timestamp",
              description:
                "The timestamp of an existing database cluster backup in UTC combined date and time format (2006-01-02 15:04:05 +0000 UTC)",
              args: { name: "restore-from-timestamp" },
            },
            {
              name: "--wait",
              description:
                "A boolean that specifies whether to wait for a database to complete before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["get", "g"],
          description: "Get details for a database cluster",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-ca", "gc"],
          description:
            "Provides the CA certificate for a DigitalOcean database",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [formatOption, noHeaderOption],
        },
        {
          name: "indexes",
          description:
            "Display commands to manage indexes for opensearch clusters",
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Deletes an opensearch index by index name",
              args: [{ name: "database-uuid" }, { name: "index-name" }],
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the opensearch index without a confirmation prompt",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "Retrieve a list of indexes for a given opensearch cluster",
              args: { name: "database-uuid" },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List your database clusters",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["maintenance-window", "maintenance", "mw", "main"],
          description:
            "Display commands for scheduling automatic maintenance on your database cluster",
          subcommands: [
            {
              name: ["get", "g"],
              description:
                "Retrieve details about a database cluster's maintenance windows",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["install", "i"],
              description: "Start installation of updates immediately",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
            },
            {
              name: ["update", "u"],
              description:
                "Update the maintenance window for a database cluster",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                {
                  name: "--day",
                  description:
                    "The day of the week the maintenance window occurs, for example: 'tuesday')",
                  isRequired: true,
                  args: { name: "day" },
                },
                {
                  name: "--hour",
                  description:
                    "The hour when maintenance updates are applied, in UTC 24-hour format",
                  isRequired: true,
                  args: { name: "hour" },
                },
              ],
            },
          ],
        },
        {
          name: ["migrate", "m"],
          description: "Migrate a database cluster to a new region",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [
            {
              name: "--region",
              description:
                "The region to which the database cluster should be migrated, such as sfo2 or nyc3",
              isRequired: true,
              args: { name: "region" },
            },
            {
              name: "--private-network-uuid",
              description:
                "The UUID of a VPC network to create the database cluster in",
              args: { name: "private-network-uuid" },
            },
            {
              name: "--wait",
              description:
                "A boolean value that specifies whether to wait for the database migration to complete before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["options", "o"],
          description:
            "Display available database options (regions, version, layouts, etc.) for all available database engines",
          subcommands: [
            {
              name: ["engines", "eng"],
              description: "Retrieves a list of the available database engines",
            },
            {
              name: ["regions", "r"],
              description:
                "Retrieves a list of the available regions for a given database engine",
              options: [
                {
                  name: "--engine",
                  description: "The database engine",
                  args: {
                    name: "engine",
                    suggestions: [
                      "mysql",
                      "advanced_mysql",
                      "pg",
                      "advanced_pg",
                      "redis",
                      "valkey",
                      "kafka",
                      "opensearch",
                      "mongodb",
                    ],
                  },
                },
              ],
            },
            {
              name: ["slugs", "s"],
              description:
                "Retrieves a list of the available slugs for a given database engine",
              options: [
                {
                  name: "--engine",
                  description: "The database engine",
                  isRequired: true,
                  args: {
                    name: "engine",
                    suggestions: [
                      "mysql",
                      "advanced_mysql",
                      "pg",
                      "advanced_pg",
                      "redis",
                      "valkey",
                      "kafka",
                      "opensearch",
                      "mongodb",
                    ],
                  },
                },
              ],
            },
            {
              name: ["versions", "v"],
              description:
                "Retrieves a list of the available versions for a given database engine",
              options: [
                {
                  name: "--engine",
                  description: "The database engine",
                  args: {
                    name: "engine",
                    suggestions: [
                      "mysql",
                      "advanced_mysql",
                      "pg",
                      "advanced_pg",
                      "redis",
                      "valkey",
                      "kafka",
                      "opensearch",
                      "mongodb",
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["pool", "p"],
          description: "Display commands for managing connection pools",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a connection pool for a database cluster",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "pool-name" },
              ],
              options: [
                {
                  name: "--mode",
                  description:
                    "The pool mode for the connection pool, such as session, transaction, and statement",
                  args: { name: "mode", default: "transaction" },
                },
                {
                  name: "--size",
                  description: "Pool size",
                  isRequired: true,
                  args: { name: "size" },
                },
                {
                  name: "--user",
                  description: "The username for the database user",
                  args: { name: "user" },
                },
                {
                  name: "--db",
                  description:
                    "The name of the specific database within the database cluster",
                  isRequired: true,
                  args: { name: "db" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a connection pool for a database",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "pool-name" },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the connection pool without confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description:
                "Retrieve information about a database connection pool",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "pool-name" },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List connection pools for a database cluster",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update a connection pool for a database",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "pool-name" },
              ],
              options: [
                {
                  name: "--mode",
                  description:
                    "The pool mode for the connection pool, such as session, transaction, and statement",
                  args: { name: "mode", default: "transaction" },
                },
                {
                  name: "--size",
                  description: "Pool size",
                  args: { name: "size" },
                },
                {
                  name: "--db",
                  description:
                    "The name of the specific database within the database cluster",
                  args: { name: "db" },
                },
                {
                  name: "--user",
                  description: "The username for the database user",
                  args: { name: "user" },
                },
              ],
            },
          ],
        },
        {
          name: ["replica", "rep", "r"],
          description: "Display commands to manage read-only database replicas",
          subcommands: [
            {
              name: ["connection", "conn"],
              description:
                "Retrieve information for connecting to a read-only database replica",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "replica-name" },
              ],
            },
            {
              name: ["create", "c"],
              description: "Create a read-only database replica",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "replica-name" },
              ],
              options: [
                {
                  name: "--region",
                  description:
                    "Specifies the region in which to create the replica, such as nyc3 or sfo2",
                  args: { name: "region", default: "nyc1" },
                },
                {
                  name: "--size",
                  description:
                    "Specifies the machine size for the replica, such as db-s-1vcpu-1gb",
                  args: { name: "size", default: "db-s-1vcpu-1gb" },
                },
                {
                  name: "--private-network-uuid",
                  description:
                    "The UUID of a VPC to create the replica in; the default VPC for the region will be used if excluded",
                  args: { name: "private-network-uuid" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a read-only database replica",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "replica-name" },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the replica without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description:
                "Retrieve information about a read-only database replica",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "replica-name" },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve list of read-only database replicas",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["promote", "p"],
              description:
                "Promote a read-only database replica to become a primary cluster",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "replica-name" },
              ],
            },
          ],
        },
        {
          name: ["resize", "rs"],
          description: "Resize a database cluster",
          args: {
            name: "database-cluster-id",
            generators: databaseClusterGenerator,
          },
          options: [
            {
              name: "--num-nodes",
              description: "The number of nodes in the database cluster",
              isRequired: true,
              args: { name: "num-nodes" },
            },
            {
              name: "--size",
              description:
                "The size of the nodes in the database cluster, for example db-s-1vcpu-1gb indicates a 1 CPU, 1GB node",
              isRequired: true,
              args: { name: "size" },
            },
            {
              name: "--storage-size-mib",
              description: "The amount of disk space allocated to the cluster",
              args: { name: "storage-size-mib" },
            },
            {
              name: "--wait",
              description:
                "Boolean that specifies whether to wait for the resize to complete before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["sql-mode", "sm"],
          description:
            "Display commands to configure a MySQL database cluster's SQL modes",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Get a MySQL database cluster's SQL modes",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["set", "s"],
              description: "Set a MySQL database cluster's SQL modes",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "sql-mode", isVariadic: true },
              ],
            },
          ],
        },
        {
          name: ["storage-autoscale", "autoscale", "storage"],
          description:
            "Display commands for managing database cluster storage autoscaling",
          subcommands: [
            {
              name: ["get", "g"],
              description:
                "Retrieve storage autoscaling settings for a database cluster",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description:
                "Update storage autoscaling settings for a database cluster",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [
                {
                  name: "--enabled",
                  description:
                    "Whether storage autoscaling is enabled for the database cluster; must be true or false",
                  isRequired: true,
                  args: { name: "enabled", suggestions: ["true", "false"] },
                },
                {
                  name: "--threshold-percent",
                  description:
                    "The storage usage percentage that triggers autoscaling (only used when --enabled is true)",
                  args: { name: "threshold-percent" },
                },
                {
                  name: "--increment-gib",
                  description:
                    "The amount of storage, in GiB, to add when autoscaling triggers (only used when --enabled is true)",
                  args: { name: "increment-gib" },
                },
              ],
            },
          ],
        },
        {
          name: "topics",
          description:
            "Display commands to manage topics for kafka database clusters",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Creates a topic for a given kafka database",
              args: [{ name: "database-uuid" }, { name: "topic-name" }],
              options: [
                {
                  name: "--replication-factor",
                  description:
                    "Specifies the number of nodes to replicate data across the kafka cluster",
                  args: { name: "replication-factor", default: "2" },
                },
                {
                  name: "--partition-count",
                  description:
                    "Specifies the number of partitions available for the topic",
                  args: { name: "partition-count", default: "1" },
                },
                {
                  name: "--cleanup-policy",
                  description:
                    "Specifies the retention policy to use on log segments: Possible values are 'delete', 'compact_delete', 'compact'",
                  args: {
                    name: "cleanup-policy",
                    suggestions: ["delete", "compact_delete", "compact"],
                    default: "delete",
                  },
                },
                {
                  name: "--compression-type",
                  description:
                    "Specifies the compression type for a kafka topic: Possible values are 'producer', 'gzip', 'snappy', 'Iz4', 'zstd', 'uncompressed'",
                  args: {
                    name: "compression-type",
                    suggestions: [
                      "producer",
                      "gzip",
                      "snappy",
                      "lz4",
                      "zstd",
                      "uncompressed",
                    ],
                    default: "producer",
                  },
                },
                {
                  name: "--delete-retention-ms",
                  description:
                    "Specifies how long (in ms) to retain delete tombstone markers for topics",
                  args: { name: "delete-retention-ms" },
                },
                {
                  name: "--file-delete-delay-ms",
                  description:
                    "Specifies the minimum time (in ms) to wait before deleting a file from the filesystem",
                  args: { name: "file-delete-delay-ms" },
                },
                {
                  name: "--flush-messages",
                  description:
                    "Specifies the maximum number of messages to accumulate on a log partition before messages are flushed to disk",
                  args: { name: "flush-messages" },
                },
                {
                  name: "--flush-ms",
                  description:
                    "Specifies the maximum time (in ms) that a message is kept in memory before being flushed to disk",
                  args: { name: "flush-ms" },
                },
                {
                  name: "--interval-index-bytes",
                  description:
                    "Specifies the number of bytes between entries being added into the offset index",
                  args: { name: "interval-index-bytes" },
                },
                {
                  name: "--max-compaction-lag-ms",
                  description:
                    "Specifies the maximum time (in ms) that a message will remain uncompacted",
                  args: { name: "max-compaction-lag-ms" },
                },
                {
                  name: "--max-message-bytes",
                  description:
                    "Specifies the largest record batch (in bytes) that can be sent to the server",
                  args: { name: "max-message-bytes" },
                },
                {
                  name: "--message-down-conversion-enable",
                  description:
                    "Specifies whether down-conversion of message formats is enabled to satisfy consumer requests",
                },
                {
                  name: "--message-format-version",
                  description:
                    "Specifies the message format version used by the broker to append messages to the logs",
                  args: { name: "message-format-version" },
                },
                {
                  name: "--message-timestamp-type",
                  description:
                    "Specifies whether to use the create time or log append time as the timestamp on a message",
                  args: { name: "message-timestamp-type" },
                },
                {
                  name: "--min-cleanable-dirty-ratio",
                  description:
                    "Specifies the frequenty of log compaction (if enabled) in relation to duplicates present in the logs",
                  args: { name: "min-cleanable-dirty-ratio" },
                },
                {
                  name: "--min-compaction-lag-ms",
                  description:
                    "Specifies the minimum time (in ms) that a message will remain uncompacted",
                  args: { name: "min-compaction-lag-ms" },
                },
                {
                  name: "--min-insync-replicas",
                  description:
                    "Specifies the minimum number of replicas that must ACK a write for it to be considered successful",
                  args: { name: "min-insync-replicas" },
                },
                {
                  name: "--preallocate",
                  description:
                    "Specifies whether a file should be preallocated on disk when creating a new log segment",
                },
                {
                  name: "--retention-bytes",
                  description:
                    "Specifies the maximum size (in bytes) before deleting messages",
                  args: { name: "retention-bytes" },
                },
                {
                  name: "--retention-ms",
                  description:
                    "Specifies the maximum time (in ms) to store a message before deleting it",
                  args: { name: "retention-ms" },
                },
                {
                  name: "--segment-bytes",
                  description:
                    "Specifies the maximum size (in bytes) of a single log file",
                  args: { name: "segment-bytes" },
                },
                {
                  name: "--segment-jitter-ms",
                  description:
                    "Specifies the maximum time (in ms) for random jitter that is subtracted from the scheduled segment roll time to avoid thundering herd problems",
                  args: { name: "segment-jitter-ms" },
                },
                {
                  name: "--segment-ms",
                  description:
                    "Specifies the maximum time (in ms) to wait to force a log roll if the segment file isn't full",
                  args: { name: "segment-ms" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Deletes a kafka topic by topic name",
              args: [{ name: "database-uuid" }, { name: "topic-name" }],
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the kafka topic without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve the configuration for a given kafka topic",
              args: [{ name: "database-uuid" }, { name: "topic-name" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description:
                "Retrieve a list of topics for a given kafka database",
              args: { name: "database-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["partitions", "p"],
              description: "Retrieve the partitions for a given kafka topic",
              args: [{ name: "database-id" }, { name: "topic-name" }],
            },
            {
              name: ["update", "u"],
              description: "Updates a topic for a given kafka database",
              args: [{ name: "database-uuid" }, { name: "topic-name" }],
              options: [
                {
                  name: "--replication-factor",
                  description:
                    "Specifies the number of nodes to replicate data across the kafka cluster",
                  args: { name: "replication-factor", default: "2" },
                },
                {
                  name: "--partition-count",
                  description:
                    "Specifies the number of partitions available for the topic",
                  args: { name: "partition-count", default: "1" },
                },
                {
                  name: "--cleanup-policy",
                  description:
                    "Specifies the retention policy to use on log segments: Possible values are 'delete', 'compact_delete', 'compact'",
                  args: {
                    name: "cleanup-policy",
                    suggestions: ["delete", "compact_delete", "compact"],
                    default: "delete",
                  },
                },
                {
                  name: "--compression-type",
                  description:
                    "Specifies the compression type for a kafka topic: Possible values are 'producer', 'gzip', 'snappy', 'Iz4', 'zstd', 'uncompressed'",
                  args: {
                    name: "compression-type",
                    suggestions: [
                      "producer",
                      "gzip",
                      "snappy",
                      "lz4",
                      "zstd",
                      "uncompressed",
                    ],
                    default: "producer",
                  },
                },
                {
                  name: "--delete-retention-ms",
                  description:
                    "Specifies how long (in ms) to retain delete tombstone markers for topics",
                  args: { name: "delete-retention-ms" },
                },
                {
                  name: "--file-delete-delay-ms",
                  description:
                    "Specifies the minimum time (in ms) to wait before deleting a file from the filesystem",
                  args: { name: "file-delete-delay-ms" },
                },
                {
                  name: "--flush-messages",
                  description:
                    "Specifies the maximum number of messages to accumulate on a log partition before messages are flushed to disk",
                  args: { name: "flush-messages" },
                },
                {
                  name: "--flush-ms",
                  description:
                    "Specifies the maximum time (in ms) that a message is kept in memory before being flushed to disk",
                  args: { name: "flush-ms" },
                },
                {
                  name: "--interval-index-bytes",
                  description:
                    "Specifies the number of bytes between entries being added into the offset index",
                  args: { name: "interval-index-bytes" },
                },
                {
                  name: "--max-compaction-lag-ms",
                  description:
                    "Specifies the maximum time (in ms) that a message will remain uncompacted",
                  args: { name: "max-compaction-lag-ms" },
                },
                {
                  name: "--max-message-bytes",
                  description:
                    "Specifies the largest record batch (in bytes) that can be sent to the server",
                  args: { name: "max-message-bytes" },
                },
                {
                  name: "--message-down-conversion-enable",
                  description:
                    "Specifies whether down-conversion of message formats is enabled to satisfy consumer requests",
                },
                {
                  name: "--message-format-version",
                  description:
                    "Specifies the message format version used by the broker to append messages to the logs",
                  args: { name: "message-format-version" },
                },
                {
                  name: "--message-timestamp-type",
                  description:
                    "Specifies whether to use the create time or log append time as the timestamp on a message",
                  args: { name: "message-timestamp-type" },
                },
                {
                  name: "--min-cleanable-dirty-ratio",
                  description:
                    "Specifies the frequenty of log compaction (if enabled) in relation to duplicates present in the logs",
                  args: { name: "min-cleanable-dirty-ratio" },
                },
                {
                  name: "--min-compaction-lag-ms",
                  description:
                    "Specifies the minimum time (in ms) that a message will remain uncompacted",
                  args: { name: "min-compaction-lag-ms" },
                },
                {
                  name: "--min-insync-replicas",
                  description:
                    "Specifies the minimum number of replicas that must ACK a write for it to be considered successful",
                  args: { name: "min-insync-replicas" },
                },
                {
                  name: "--preallocate",
                  description:
                    "Specifies whether a file should be preallocated on disk when creating a new log segment",
                },
                {
                  name: "--retention-bytes",
                  description:
                    "Specifies the maximum size (in bytes) before deleting messages",
                  args: { name: "retention-bytes" },
                },
                {
                  name: "--retention-ms",
                  description:
                    "Specifies the maximum time (in ms) to store a message before deleting it",
                  args: { name: "retention-ms" },
                },
                {
                  name: "--segment-bytes",
                  description:
                    "Specifies the maximum size (in bytes) of a single log file",
                  args: { name: "segment-bytes" },
                },
                {
                  name: "--segment-jitter-ms",
                  description:
                    "Specifies the maximum time (in ms) for random jitter that is subtracted from the scheduled segment roll time to avoid thundering herd problems",
                  args: { name: "segment-jitter-ms" },
                },
                {
                  name: "--segment-ms",
                  description:
                    "Specifies the maximum time (in ms) to wait to force a log roll if the segment file isn't full",
                  args: { name: "segment-ms" },
                },
              ],
            },
          ],
        },
        {
          name: ["user", "u"],
          description: "Display commands for managing database users",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a database user",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "user-name" },
              ],
              options: [
                {
                  name: "--mysql-auth-plugin",
                  description: "Sets authorization plugin for a MySQL user",
                  args: {
                    name: "mysql-auth-plugin",
                    suggestions: [
                      "caching_sha2_password",
                      "mysql_native_password",
                    ],
                  },
                },
                {
                  name: "--acl",
                  description:
                    "A comma-separated list of kafka ACL rules, in topic:permission format",
                  isRepeatable: true,
                  args: { name: "acl" },
                },
                {
                  name: "--opensearch-acl",
                  description:
                    "A comma-separated list of OpenSearch ACL rules, in index:permission format",
                  isRepeatable: true,
                  args: { name: "opensearch-acl" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a database user",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "user-id" },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Delete the user without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve details about a database user",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "user-name" },
              ],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve list of database users",
              args: {
                name: "database-cluster-id",
                generators: databaseClusterGenerator,
              },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["reset", "rs"],
              description: "Resets a user's auth",
              args: [
                {
                  name: "database-cluster-id",
                  generators: databaseClusterGenerator,
                },
                { name: "user-name" },
                { name: "new-auth-mode" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["dedicated-inference", "di", "dedicated-inferences"],
      description:
        "Display commands for managing dedicated inference endpoints",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a dedicated inference endpoint",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--spec",
              description:
                "Path to a dedicated inference spec in JSON or YAML format",
              isRequired: true,
              args: { name: "spec", template: "filepaths" },
            },
            {
              name: "--hugging-face-token",
              description:
                "Hugging Face token for accessing gated models (optional)",
              args: { name: "hugging-face-token" },
            },
          ],
        },
        {
          name: ["create-token", "ct"],
          description:
            "Create an auth token for a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--token-name",
              description: "Name for the auth token",
              isRequired: true,
              args: { name: "token-name" },
            },
          ],
        },
        {
          name: ["delete", "d", "rm"],
          description: "Delete a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Delete the dedicated inference endpoint without a confirmation prompt",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-gpu-model-config", "ggmc"],
          description: "List supported GPU model configurations",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-sizes", "gs"],
          description:
            "List available dedicated inference GPU sizes and pricing",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List all dedicated inference endpoints",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--region",
              description: "Filter by region (optional)",
              args: { name: "region" },
            },
            {
              name: "--name",
              description: "Filter by name (optional)",
              args: { name: "name" },
            },
          ],
        },
        {
          name: ["list-accelerators", "la"],
          description: "List accelerators for a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--slug",
              description: "Filter accelerators by slug (optional)",
              args: { name: "slug" },
            },
          ],
        },
        {
          name: ["list-tokens", "lt"],
          description: "List auth tokens for a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["revoke-token", "rt"],
          description:
            "Revoke an auth token for a dedicated inference endpoint",
          args: [{ name: "dedicated-inference-id" }, { name: "token-id" }],
          options: [
            {
              name: ["-f", "--force"],
              description: "Revoke the token without a confirmation prompt",
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a dedicated inference endpoint",
          args: { name: "dedicated-inference-id" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--spec",
              description:
                "Path to a dedicated inference spec in JSON or YAML format",
              isRequired: true,
              args: { name: "spec", template: "filepaths" },
            },
            {
              name: "--hugging-face-token",
              description:
                "Hugging Face token for accessing gated models (optional)",
              args: { name: "hugging-face-token" },
            },
          ],
        },
      ],
    },
    {
      name: ["evaluation", "eval"],
      description: "Manage GenAI evaluations and simulations",
      subcommands: [
        {
          name: ["custom-metric", "custom-metrics"],
          description:
            "Display commands that manage GenAI custom evaluation metrics",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a custom evaluation metric",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the custom metric",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--scoring-prompt",
                  description: "The scoring prompt used by the judge model",
                  isRequired: true,
                  args: { name: "scoring-prompt" },
                },
                {
                  name: "--description",
                  description: "A description of the custom metric",
                  args: { name: "description" },
                },
                {
                  name: "--requires-ground-truth",
                  description:
                    "Whether the custom metric requires ground-truth values",
                },
                {
                  name: "--turn-type",
                  description:
                    "Whether the metric applies to single-turn or multi-turn inputs",
                  args: {
                    name: "turn-type",
                    suggestions: ["single_turn", "multi_turn"],
                  },
                },
              ],
            },
            {
              name: ["delete", "del", "rm"],
              description: "Delete a custom evaluation metric",
              args: { name: "metric-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the custom metric without a confirmation prompt",
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a custom evaluation metric",
              args: { name: "metric-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The new name of the custom metric",
                  args: { name: "name" },
                },
                {
                  name: "--scoring-prompt",
                  description: "The scoring prompt used by the judge model",
                  args: { name: "scoring-prompt" },
                },
                {
                  name: "--description",
                  description: "A description of the custom metric",
                  args: { name: "description" },
                },
                {
                  name: "--requires-ground-truth",
                  description:
                    "Whether the custom metric requires ground-truth values",
                },
              ],
            },
          ],
        },
        {
          name: ["dataset", "datasets", "ds"],
          description: "Display commands that manage GenAI evaluation datasets",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create an evaluation dataset",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the evaluation dataset",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--file",
                  description:
                    "The path to a local CSV or JSONL dataset file to upload",
                  isRequired: true,
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--dataset-paradigm",
                  description: "The paradigm of the dataset",
                  args: {
                    name: "dataset-paradigm",
                    suggestions: [
                      "single_turn",
                      "multi_turn",
                      "coding",
                      "n_plus_1",
                    ],
                    default: "single_turn",
                  },
                },
              ],
            },
            {
              name: ["delete", "del", "rm"],
              description: "Delete an evaluation dataset",
              args: { name: "dataset-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the evaluation dataset without a confirmation prompt",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all evaluation datasets",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--dataset-type",
                  description: "Filters the results by dataset type",
                  args: {
                    name: "dataset-type",
                    suggestions: ["adk", "non_adk", "model"],
                  },
                },
                {
                  name: "--dataset-paradigm",
                  description: "Filters the results by dataset paradigm",
                  args: {
                    name: "dataset-paradigm",
                    suggestions: [
                      "single_turn",
                      "multi_turn",
                      "coding",
                      "n_plus_1",
                    ],
                  },
                },
                {
                  name: "--has-ground-truth",
                  description:
                    "Filters the results by whether the dataset includes ground truth",
                },
              ],
            },
          ],
        },
        {
          name: ["metric", "metrics"],
          description:
            "Display commands that list GenAI model evaluation metrics",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List all model evaluation metrics",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--turn-type",
                  description: "Filters the results by turn type",
                  args: {
                    name: "turn-type",
                    suggestions: ["single_turn", "multi_turn"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["model-run", "model-runs", "mr"],
          description:
            "Display commands that manage GenAI model evaluation runs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a model evaluation run",
              args: { name: "run-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--force"],
                  description:
                    "Cancels the evaluation run without a confirmation prompt",
                },
              ],
            },
            {
              name: ["create", "c"],
              description: "Create a model evaluation run",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the evaluation run",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--candidate-model-uuid",
                  description:
                    "The UUID of the candidate model under evaluation",
                  args: { name: "candidate-model-uuid" },
                },
                {
                  name: "--candidate-model-name",
                  description: "The display name of the candidate model",
                  args: { name: "candidate-model-name" },
                },
                {
                  name: "--candidate-model-source",
                  description: "The source of the candidate model",
                  args: {
                    name: "candidate-model-source",
                    suggestions: ["serverless", "dedicated", "router", "agent"],
                  },
                },
                {
                  name: "--dataset-uuid",
                  description: "The UUID of the evaluation dataset",
                  args: { name: "dataset-uuid" },
                },
                {
                  name: "--judge-model-uuid",
                  description: "The UUID of the judge model",
                  args: { name: "judge-model-uuid" },
                },
                {
                  name: "--metric-uuids",
                  description:
                    "The UUIDs of evaluation metrics to score the run with",
                  isRepeatable: true,
                  args: { name: "metric-uuids" },
                },
                {
                  name: "--eval-preset-uuid",
                  description: "The UUID of a saved evaluation preset to use",
                  args: { name: "eval-preset-uuid" },
                },
                {
                  name: "--preset-name",
                  description:
                    "The name to use when saving a new evaluation preset from this run",
                  args: { name: "preset-name" },
                },
                {
                  name: "--preset-save-sections",
                  description: "Sections to save into a new preset",
                  isRepeatable: true,
                  args: {
                    name: "preset-save-sections",
                    suggestions: [
                      "candidate",
                      "metrics",
                      "judge",
                      "dataset",
                      "system_prompt",
                    ],
                  },
                },
                {
                  name: "--epochs",
                  description:
                    "The number of times to evaluate each dataset row (n-pass)",
                  args: { name: "epochs" },
                },
                {
                  name: "--candidate-inference-config",
                  description: "A JSON object of candidate inference settings",
                  args: { name: "candidate-inference-config" },
                },
                {
                  name: "--star-metric-uuid",
                  description: "The UUID of the star metric for the run",
                  args: { name: "star-metric-uuid" },
                },
                {
                  name: "--star-metric-name",
                  description: "The name of the star metric for the run",
                  args: { name: "star-metric-name" },
                },
                {
                  name: "--star-metric-success-threshold",
                  description: "The success threshold of the star metric",
                  args: { name: "star-metric-success-threshold" },
                },
              ],
            },
            {
              name: ["delete", "del", "rm"],
              description: "Delete a model evaluation run",
              args: { name: "run-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the evaluation run without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a model evaluation run",
              args: { name: "run-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all model evaluation runs",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--statuses",
                  description: "Filters the results by status",
                  isRepeatable: true,
                  args: {
                    name: "statuses",
                    suggestions: [
                      "queued",
                      "running_dataset",
                      "evaluating_results",
                      "cancelling",
                      "cancelled",
                      "successful",
                      "partially_successful",
                      "failed",
                    ],
                  },
                },
                {
                  name: "--eval-preset-uuid",
                  description: "Filters the results by evaluation preset UUID",
                  args: { name: "eval-preset-uuid" },
                },
                {
                  name: "--candidate-types",
                  description: "Filters the results by candidate model source",
                  isRepeatable: true,
                  args: {
                    name: "candidate-types",
                    suggestions: ["serverless", "dedicated", "router", "agent"],
                  },
                },
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: ["created_at", "status"],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["results-download-url", "results-url"],
              description: "Retrieve a download URL for evaluation run results",
              args: { name: "run-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update a model evaluation run",
              args: { name: "run-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The new name of the evaluation run",
                  isRequired: true,
                  args: { name: "name" },
                },
              ],
            },
          ],
        },
        {
          name: ["preset", "presets"],
          description:
            "Display commands that manage GenAI model evaluation presets",
          subcommands: [
            {
              name: ["delete", "del", "rm"],
              description: "Delete a model evaluation preset",
              args: { name: "preset-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the evaluation preset without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a model evaluation preset",
              args: { name: "preset-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all model evaluation presets",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["scenario-library", "sl"],
          description:
            "Display commands that browse the evaluation scenario library",
          subcommands: [
            {
              name: ["create-scenario-set", "c-ss"],
              description: "Create a scenario set from a library entry",
              args: { name: "library-scenario-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the new scenario set",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List the scenario library",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--category",
                  description: "Filters the results by category",
                  args: { name: "category" },
                },
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: ["name", "created_at"],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["list-scenarios", "ls-s"],
              description: "List the scenarios in a library entry",
              args: { name: "library-scenario-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: ["file_order", "name", "description"],
                  },
                },
                sortDirectionOption,
              ],
            },
          ],
        },
        {
          name: ["scenario-set", "ss", "scenario-sets"],
          description: "Display commands that manage evaluation scenario sets",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a scenario set",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the scenario set",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--file",
                  description: "The path to a local scenario file to upload",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--scenarios",
                  description: "A JSON array of scenario objects",
                  args: { name: "scenarios" },
                },
              ],
            },
            {
              name: ["delete", "del", "rm"],
              description: "Delete a scenario set",
              args: { name: "scenario-set-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the scenario set without a confirmation prompt",
                },
              ],
            },
            {
              name: ["download-url", "dl-url"],
              description: "Retrieve a download URL for a scenario set",
              args: { name: "scenario-set-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["generate", "gen"],
              description: "Generate a scenario set from a goal",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the scenario set",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--goal-description",
                  description:
                    "A description of what the generated scenarios should cover",
                  isRequired: true,
                  args: { name: "goal-description" },
                },
                {
                  name: "--num-scenarios",
                  description: "The number of scenarios to generate",
                  args: { name: "num-scenarios" },
                },
                {
                  name: "--generator-model-uuid",
                  description:
                    "The UUID of the model used to generate the scenarios",
                  args: { name: "generator-model-uuid" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a scenario set",
              args: { name: "scenario-set-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all scenario sets",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--statuses",
                  description: "Filters the results by status",
                  isRepeatable: true,
                  args: {
                    name: "statuses",
                    suggestions: ["generating", "ready", "failed", "cancelled"],
                  },
                },
                {
                  name: "--source-kinds",
                  description: "Filters the results by source kind",
                  isRepeatable: true,
                  args: {
                    name: "source-kinds",
                    suggestions: [
                      "user_upload",
                      "goal_generated",
                      "library",
                      "signal_generated",
                    ],
                  },
                },
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: [
                      "created_at",
                      "name",
                      "status",
                      "scenario_count",
                      "updated_at",
                    ],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["list-scenarios", "ls-s"],
              description: "List the scenarios in a scenario set",
              args: { name: "scenario-set-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: ["file_order", "name", "description"],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a scenario set",
              args: { name: "scenario-set-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The new name of the scenario set",
                  args: { name: "name" },
                },
                {
                  name: "--scenarios",
                  description:
                    "A JSON array of scenario objects that replaces the existing scenarios",
                  args: { name: "scenarios" },
                },
              ],
            },
          ],
        },
        {
          name: ["simulation-run", "sim", "simulation-runs"],
          description:
            "Display commands that manage evaluation simulation runs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a simulation run",
              args: { name: "run-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--force"],
                  description:
                    "Cancels the simulation run without a confirmation prompt",
                },
              ],
            },
            {
              name: ["create", "c"],
              description: "Create a simulation run",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--scenario-set-uuid",
                  description: "The UUID of the scenario set to run",
                  isRequired: true,
                  args: { name: "scenario-set-uuid" },
                },
                {
                  name: "--agent-uuid",
                  description: "The UUID of the agent under test",
                  isRequired: true,
                  args: { name: "agent-uuid" },
                },
                {
                  name: "--name",
                  description: "The name of the simulation run",
                  args: { name: "name" },
                },
                {
                  name: "--agent-deployment-uuid",
                  description: "The deployment UUID of the agent under test",
                  args: { name: "agent-deployment-uuid" },
                },
                {
                  name: "--agent-name",
                  description: "The display name of the agent under test",
                  args: { name: "agent-name" },
                },
                {
                  name: "--user-simulator-model-uuid",
                  description: "The UUID of the model that simulates the user",
                  args: { name: "user-simulator-model-uuid" },
                },
                {
                  name: "--judge-model-uuid",
                  description: "The UUID of the model that judges each episode",
                  args: { name: "judge-model-uuid" },
                },
                {
                  name: "--user-simulator-config",
                  description: "A JSON object of user simulator settings",
                  args: { name: "user-simulator-config" },
                },
                {
                  name: "--exploration-budget",
                  description: "The number of episodes to run per scenario",
                  args: { name: "exploration-budget" },
                },
                {
                  name: "--max-turns",
                  description:
                    "The maximum number of conversation turns per episode",
                  args: { name: "max-turns" },
                },
                {
                  name: "--metric-uuids",
                  description:
                    "The UUIDs of evaluation metrics to score the run with",
                  isRepeatable: true,
                  args: { name: "metric-uuids" },
                },
                {
                  name: "--star-metric-uuid",
                  description: "The UUID of the star metric for the run",
                  args: { name: "star-metric-uuid" },
                },
                {
                  name: "--star-metric-name",
                  description: "The name of the star metric for the run",
                  args: { name: "star-metric-name" },
                },
                {
                  name: "--star-metric-success-threshold",
                  description: "The success threshold of the star metric",
                  args: { name: "star-metric-success-threshold" },
                },
              ],
            },
            {
              name: ["delete", "del", "rm"],
              description: "Delete a simulation run",
              args: { name: "run-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the simulation run without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a simulation run",
              args: { name: "run-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-episode", "g-j"],
              description: "Retrieve an episode in a simulation run",
              args: [{ name: "run-uuid" }, { name: "episode-uuid" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-trajectory", "g-t"],
              description: "Retrieve the trajectory of an episode",
              args: [{ name: "run-uuid" }, { name: "episode-uuid" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-trajectory-url", "g-t-url"],
              description: "Retrieve a download URL for an episode trajectory",
              args: [{ name: "run-uuid" }, { name: "episode-uuid" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all simulation runs",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--scenario-set-uuid",
                  description: "Filters the results by scenario set UUID",
                  args: { name: "scenario-set-uuid" },
                },
                {
                  name: "--statuses",
                  description: "Filters the results by status",
                  isRepeatable: true,
                  args: {
                    name: "statuses",
                    suggestions: [
                      "pending",
                      "running",
                      "evaluating",
                      "succeeded",
                      "partially_successful",
                      "failed",
                      "cancelled",
                    ],
                  },
                },
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: ["created_at", "name", "status", "updated_at"],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["list-episodes", "ls-j"],
              description: "List the episodes in a simulation run",
              args: { name: "run-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--scenario-uuid",
                  description: "Filters the results by scenario UUID",
                  args: { name: "scenario-uuid" },
                },
                {
                  name: "--statuses",
                  description: "Filters the results by status",
                  isRepeatable: true,
                  args: {
                    name: "statuses",
                    suggestions: ["preparing", "running", "finished", "failed"],
                  },
                },
                {
                  name: "--verdicts",
                  description: "Filters the results by verdict",
                  isRepeatable: true,
                  args: {
                    name: "verdicts",
                    suggestions: ["success", "failure", "inconclusive"],
                  },
                },
                searchOption,
                {
                  name: "--sort-by",
                  description: "Sorts the results by a field",
                  args: {
                    name: "sort-by",
                    suggestions: [
                      "scenario",
                      "created_at",
                      "status",
                      "verdict",
                    ],
                  },
                },
                sortDirectionOption,
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a simulation run",
              args: { name: "run-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The new name of the simulation run",
                  isRequired: true,
                  args: { name: "name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["gradient", "ai", "genai", "gradientai"],
      description: "Manage Gradient AI resources",
      hidden: true,
      subcommands: [
        {
          name: ["knowledge-base", "kb"],
          description:
            "Display commands that manage DigitalOcean Agent Knowledge Bases",
          hidden: true,
        },
        {
          name: ["scenario-library", "sl"],
          description: "Deprecated",
          hidden: true,
        },
        {
          name: ["scenario-set", "ss", "scenario-sets"],
          description: "Deprecated",
          hidden: true,
        },
        {
          name: ["simulation-run", "sim", "simulation-runs"],
          description: "Deprecated",
          hidden: true,
        },
      ],
    },
    {
      name: ["harness-runtime", "hr", "agent", "agents", "ohr"],
      description: "Managed Agents Runtime Services (M.A.R.S)",
      options: [
        {
          name: "--region",
          description: "Datacenter region to address, for example 'mem1'",
          isPersistent: true,
          args: { name: "region" },
        },
      ],
      subcommands: [
        {
          name: "approve",
          description: "Resolve a pending HITL request out of band",
          args: [
            { name: "session" },
            { name: "request-id" },
            { name: "approve|reject|defer" },
          ],
          options: [
            {
              name: "--content",
              description:
                'A JSON object answering an MCP form elicitation\'s requestedSchema (e.g. \'{"site_url":"https://acme.atlassian.net"}\')',
              args: { name: "content" },
            },
          ],
        },
        {
          name: "auth",
          description:
            "Connect an external provider (e.g. github) for agent git operations",
          args: { name: "provider" },
          options: [noBrowserOption, noWaitOption],
        },
        {
          name: "balance",
          description: "Show your team's prepayment balance and gate status",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["cancel", "stop"],
          description: "Stop the turn a session's agent is running",
          args: { name: "session" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--run-id",
              description:
                "Cancel only this turn (the run id prompt or run.started reported); without it, whichever turn is running",
              args: { name: "run-id" },
            },
          ],
        },
        {
          name: "canvas",
          description:
            "Serve the session's Agent Canvas UI through a local proxy",
          args: { name: "session" },
          options: [
            {
              name: "--address",
              description:
                "Local bind address (loopback only: 127.0.0.1, localhost or ::1)",
              args: { name: "address", default: "127.0.0.1" },
            },
            {
              name: "--port",
              description:
                "Local port to listen on (0 picks a free port, printed on the ready line)",
              args: { name: "port" },
            },
            {
              name: "--open",
              description: "Open the local Canvas URL in your browser",
            },
          ],
        },
        {
          name: ["checkpoint", "checkpoints", "cp"],
          description: "Manage session checkpoints (save points)",
          subcommands: [
            {
              name: ["create", "save"],
              description: "Create a checkpoint for a session",
              args: { name: "session" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--label",
                  description: "Optional label for the checkpoint",
                  args: { name: "label" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a checkpoint",
              args: [{ name: "session" }, { name: "checkpoint-id" }],
            },
            {
              name: ["get", "show"],
              description: "Get a checkpoint",
              args: [{ name: "session" }, { name: "checkpoint-id" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List checkpoints for a session",
              args: { name: "session" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description:
                    "Maximum number of checkpoints to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
              ],
            },
          ],
        },
        {
          name: ["config", "configs", "cfg"],
          description: "Manage reusable agent configs",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create an agent config from a manifest",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--spec",
                  description: "Path to an agent manifest in YAML or JSON",
                  isRequired: true,
                  args: { name: "spec", template: "filepaths" },
                },
                {
                  name: "--name",
                  description: "Team-unique name for the config",
                  isRequired: true,
                  args: { name: "name" },
                },
                secretOption,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete an agent config",
              args: { name: "config-id" },
            },
            {
              name: ["get", "show"],
              description: "Get an agent config",
              args: { name: "config-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List agent configs",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description: "Maximum number of configs to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
              ],
            },
            {
              name: ["list-sessions", "sessions"],
              description: "List sessions started from a config",
              args: { name: "config-id" },
              options: [
                formatOption,
                noHeaderOption,
                pageSizeOption,
                pageTokenOption,
                {
                  name: "--status",
                  description:
                    "Filter by session status (e.g. SESSION_STATUS_READY)",
                  args: { name: "status" },
                },
                {
                  name: "--name",
                  description: "Filter by session name",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: ["start-session", "start"],
              description: "Start a session from a config",
              args: { name: "config-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Name for the new session",
                  isRequired: true,
                  args: { name: "name" },
                },
                resumeOnTopoffOption,
              ],
            },
          ],
        },
        {
          name: ["connections", "connection", "conn"],
          description: "Manage external-provider connections for agents",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a connection for an actor",
              options: [
                providerOption,
                {
                  name: "--actor",
                  description: "Actor id the connection acts for",
                  isRequired: true,
                  args: { name: "actor" },
                },
                {
                  name: "--scopes",
                  description:
                    "OAuth scopes to request (repeatable); omit for the provider default",
                  isRepeatable: true,
                  args: { name: "scopes" },
                },
                noBrowserOption,
                noWaitOption,
              ],
            },
            {
              name: ["get", "show"],
              description: "Get one connection",
              args: { name: "connection-id" },
              options: [formatOption, noHeaderOption, providerOption],
            },
            {
              name: ["list", "ls"],
              description: "List external-provider connections",
              options: [
                formatOption,
                noHeaderOption,
                providerOption,
                {
                  name: "--actor",
                  description: "Filter to a single actor id",
                  args: { name: "actor" },
                },
                {
                  name: "--status",
                  description:
                    "Filter by connection status (active|pending|expired); revoked connections are never listed",
                  args: {
                    name: "status",
                    suggestions: ["active", "pending", "expired"],
                  },
                },
                {
                  name: "--page",
                  description: "Page number (1-based)",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description:
                    "Connections per page (server defaults to 20, max 100)",
                  args: { name: "per-page" },
                },
              ],
            },
            {
              name: "reconnect",
              description: "Resume or renew an existing connection",
              args: { name: "connection-id" },
              options: [providerOption, noBrowserOption, noWaitOption],
            },
            {
              name: ["revoke", "delete", "rm"],
              description: "Revoke a connection",
              args: { name: "connection-id", isOptional: true },
              options: [
                providerOption,
                {
                  name: "--actor",
                  description:
                    "Revoke the connection of this actor id instead of naming the connection id",
                  args: { name: "actor" },
                },
              ],
            },
          ],
        },
        {
          name: ["create", "deploy", "start", "run"],
          description: "Create a session without attaching",
          args: { name: "manifest", isOptional: true, template: "filepaths" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--harness",
              description:
                "Coding-agent harness (opencode, claude-code, codex, codex-agentapi, openhands, hermes, minimax-code)",
              args: { name: "harness" },
              exclusiveOn: ["--from-config", "--spec"],
            },
            {
              name: ["-f", "--spec"],
              description:
                "Path to an agent manifest in YAML or JSON, equivalently given as a positional argument or --file",
              args: { name: "spec", template: "filepaths" },
              exclusiveOn: ["--from-config", "--harness", "--template"],
            },
            {
              name: "--from-config",
              description:
                "Name or ID of an existing Agent Config to create the session from",
              args: { name: "from-config", template: "filepaths" },
              exclusiveOn: ["--harness", "--spec", "--template"],
            },
            {
              name: "--gh-repo",
              description:
                "GitHub repository to clone into the workspace (https://github.com/org/repo or org/repo)",
              args: { name: "gh-repo" },
            },
            {
              name: "--prompt",
              description: "Initial prompt to send once the session is ready",
              args: { name: "prompt" },
            },
            {
              name: "--name",
              description: "Name for the new session",
              args: { name: "name" },
            },
            secretOption,
            {
              name: "--permission",
              description:
                "Tool-permission default for a --harness session: allow (run tools without asking), ask (raise an approval request per tool call, resolvable with 'doctl harness-runtime approve'), or deny",
              args: {
                name: "permission",
                suggestions: ["allow", "ask", "deny"],
                default: "allow",
              },
            },
            {
              name: "--template",
              description: "Sandbox template the session runs on",
              args: { name: "template" },
              exclusiveOn: ["--from-config", "--spec"],
            },
            {
              name: "--model",
              description:
                "DigitalOcean Inference model id for a --harness session, written as the manifest's env HARNESS_INFERENCE_MODEL (for example openai-gpt-5.5 or anthropic-claude-4.5-sonnet)",
              args: { name: "model" },
            },
            {
              name: "--wait-timeout",
              description:
                "Maximum seconds to wait for the session to become ready (0 uses the default)",
              args: { name: "wait-timeout", default: "300" },
            },
            resumeOnTopoffOption,
            {
              name: "--workspace",
              description:
                "ID of a persistent workspace to keep this session's /workspace files in (see 'doctl harness-runtime workspace create')",
              args: { name: "workspace" },
            },
            {
              name: "--dry-run",
              description:
                "Print the fully-resolved manifest (secrets redacted) and exit without creating anything",
            },
            {
              name: "--on-hitl",
              description:
                "Stay attached headlessly and resolve every approval request this way (approve|reject|defer), until the run finishes",
              args: {
                name: "on-hitl",
                suggestions: ["approve", "reject", "defer"],
              },
            },
          ],
        },
        {
          name: "download",
          description: "Download a file from a session workspace",
          args: { name: "session" },
          options: [
            {
              name: "--workspace-path",
              description: "Source path inside the workspace root (/workspace)",
              isRequired: true,
              args: { name: "workspace-path" },
            },
            {
              name: "--save-to",
              description: "Local file path to write the download to",
              isRequired: true,
              args: { name: "save-to", template: "filepaths" },
            },
            {
              name: "--archive",
              description: "Tar-stream the directory at the source path",
            },
          ],
        },
        {
          name: "exec",
          description: "Run a command in a session's sandbox",
          args: [{ name: "session" }, { name: "command", isVariadic: true }],
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--workdir",
              description:
                "Absolute guest directory to run in (defaults to the workspace root)",
              args: { name: "workdir" },
            },
            {
              name: "--timeout",
              description:
                "Maximum seconds the command may run (0 uses the server default)",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: ["files", "file", "fs"],
          description: "Browse and read a session workspace",
          subcommands: [
            {
              name: "cat",
              description: "Print a file from a session workspace",
              args: [
                { name: "session" },
                { name: "path", template: "folders" },
              ],
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--timeout",
                  description:
                    "Maximum seconds the read may run (0 uses the server default)",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List files in a session workspace",
              args: [
                { name: "session" },
                { name: "path", isOptional: true, template: "folders" },
              ],
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-R", "--recursive"],
                  description:
                    "List nested entries, not just the immediate children",
                },
                {
                  name: "--timeout",
                  description:
                    "Maximum seconds the listing may run (0 uses the server default)",
                  args: { name: "timeout" },
                },
              ],
            },
          ],
        },
        {
          name: "fork",
          description: "Fork a session into independent child sessions",
          args: { name: "session" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--from-checkpoint",
              description:
                "Checkpoint ID to fork from (omit to checkpoint now first)",
              args: { name: "from-checkpoint" },
            },
            {
              name: "--count",
              description: "Number of child sessions to create (1–4)",
              args: { name: "count", default: "1" },
            },
          ],
        },
        {
          name: ["launch", "up", "chat", "attach"],
          description: "Open a session, creating it first if needed",
          args: { name: "session|manifest", isOptional: true },
          options: [
            {
              name: "--harness",
              description:
                "Coding-agent harness (opencode, claude-code, codex, codex-agentapi, openhands, hermes, minimax-code)",
              args: { name: "harness" },
              exclusiveOn: ["--from-config", "--spec"],
            },
            {
              name: ["-f", "--spec"],
              description:
                "Path to an agent manifest in YAML or JSON, equivalently given as a positional argument or --file",
              args: { name: "spec", template: "filepaths" },
              exclusiveOn: ["--from-config", "--harness", "--template"],
            },
            {
              name: "--from-config",
              description:
                "Name or ID of an existing Agent Config to create the session from",
              args: { name: "from-config", template: "filepaths" },
              exclusiveOn: ["--harness", "--spec", "--template"],
            },
            {
              name: "--gh-repo",
              description:
                "GitHub repository to clone into the workspace (https://github.com/org/repo or org/repo)",
              args: { name: "gh-repo" },
            },
            {
              name: "--prompt",
              description: "Initial prompt to send once the session is ready",
              args: { name: "prompt" },
            },
            {
              name: "--name",
              description: "Name for the new session",
              args: { name: "name" },
            },
            secretOption,
            {
              name: "--permission",
              description:
                "Tool-permission default for a --harness session: allow (run tools without asking), ask (raise an approval request per tool call, resolvable with 'doctl harness-runtime approve'), or deny",
              args: {
                name: "permission",
                suggestions: ["allow", "ask", "deny"],
                default: "allow",
              },
            },
            {
              name: "--template",
              description: "Sandbox template the session runs on",
              args: { name: "template" },
              exclusiveOn: ["--from-config", "--spec"],
            },
            {
              name: "--model",
              description:
                "DigitalOcean Inference model id for a --harness session, written as the manifest's env HARNESS_INFERENCE_MODEL (for example openai-gpt-5.5 or anthropic-claude-4.5-sonnet)",
              args: { name: "model" },
            },
            {
              name: "--wait-timeout",
              description:
                "Maximum seconds to wait for the session to become ready (0 uses the default)",
              args: { name: "wait-timeout", default: "300" },
            },
            resumeOnTopoffOption,
            {
              name: "--workspace",
              description:
                "ID of a persistent workspace to keep this session's /workspace files in (see 'doctl harness-runtime workspace create')",
              args: { name: "workspace" },
            },
            {
              name: "--dry-run",
              description:
                "Create-only; use doctl harness-runtime create --dry-run",
              hidden: true,
            },
            {
              name: "--on-hitl",
              description:
                "Create-only; use doctl harness-runtime create --on-hitl",
              hidden: true,
              args: { name: "on-hitl" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List your sessions",
          options: [
            formatOption,
            noHeaderOption,
            pageSizeOption,
            pageTokenOption,
            {
              name: "--status",
              description:
                "Filter by session status (e.g. SESSION_STATUS_READY, SESSION_STATUS_DESTROYED)",
              args: { name: "status" },
            },
            {
              name: "--name",
              description: "Filter by session name",
              args: { name: "name" },
            },
            {
              name: "--parent-session-id",
              description:
                "Filter to forked children of this parent session ID or name",
              args: { name: "parent-session-id" },
            },
            {
              name: "--paused-by",
              description:
                "Filter to paused sessions with this pause reason (zero-balance, idle, manual)",
              args: { name: "paused-by" },
            },
          ],
        },
        {
          name: "logs",
          description: "Replay the event history for a session",
          args: { name: "session" },
        },
        {
          name: "pause",
          description: "Pause a session",
          args: { name: "session" },
        },
        {
          name: "port-forward",
          description: "Forward local TCP ports into the session's sandbox",
          args: [
            { name: "session" },
            { name: "[local-port:]remote-port", isVariadic: true },
          ],
          options: [
            {
              name: "--address",
              description: "Local bind address",
              args: { name: "address", default: "127.0.0.1" },
            },
            {
              name: "--automate",
              description:
                "Agent Canvas's Automate tab (openhands sessions, port 8000): confirm asks here in the terminal before an automation is created, enabled, edited or run; allow answers without asking; off does not serve the tab",
              args: {
                name: "automate",
                suggestions: ["confirm", "allow", "off"],
                default: "confirm",
              },
            },
          ],
        },
        {
          name: ["prompt", "ask"],
          description: "Send one prompt to a session and print the answer",
          args: [{ name: "session" }, { name: "prompt", isVariadic: true }],
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--on-hitl",
              description:
                "Resolve every approval request this way (approve|reject|defer)",
              args: {
                name: "on-hitl",
                suggestions: ["approve", "reject", "defer"],
              },
            },
            {
              name: "--timeout",
              description:
                "Maximum seconds to wait for the run to finish, exiting 124 if it does not (0 waits indefinitely)",
              args: { name: "timeout" },
            },
            {
              name: "--include-reasoning",
              description:
                "Also print the model's reasoning to stderr, not just its answer",
            },
            {
              name: ["-q", "--quiet"],
              description:
                "Suppress progress on stderr; stdout still carries the answer",
            },
          ],
        },
        {
          name: ["regions", "region"],
          description: "List available regions",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available regions",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["remove", "destroy", "rm"],
          description: "Remove a session",
          args: { name: "session" },
        },
        {
          name: "resume",
          description: "Resume a paused session",
          args: { name: "session" },
        },
        {
          name: "rollback",
          description: "Roll a session back to a checkpoint in place",
          args: [{ name: "session" }, { name: "checkpoint-id" }],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["show", "get"],
          description: "Show one session",
          args: { name: "session" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["sizes", "size"],
          description: "List available sandbox sizes",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available sandbox sizes",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: "start-proxy",
          description: "Bridge the Codex CLI to a hosted session",
          options: [
            {
              name: "--type",
              description: "Coding-agent protocol to bridge (codex, opencode)",
              args: { name: "type", default: "codex" },
            },
            {
              name: "--session",
              description: "Session ID or name to bridge to",
              isRequired: true,
              args: { name: "session" },
            },
            {
              name: "--port",
              description: "Local port to listen on",
              args: { name: "port", default: "1144" },
            },
            {
              name: "--replay",
              description:
                "Replay the session's event history into the first thread on connect",
            },
          ],
        },
        {
          name: ["template", "templates", "tpl"],
          description: "Manage team custom sandbox templates",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a team custom template",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Team-unique name for the template",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--base-template",
                  description:
                    "Platform base to rebase onto (codex-base, opencode-base, claude-code-base, hermes-base, langgraph-base, sandbox, crewai). sandbox carries no agent — use it for a bare sandbox with your own tooling, and run it with 'doctl harness-runtime create --template <name>'",
                  isRequired: true,
                  args: { name: "base-template" },
                },
                {
                  name: "--source-oci-ref",
                  description:
                    "Customer OCI image (registry/repo:tag or digest)",
                  isRequired: true,
                  args: { name: "source-oci-ref" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a team custom template",
              args: { name: "template" },
            },
            {
              name: ["get", "show"],
              description: "Get a team custom template",
              args: { name: "template" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-build", "show-build"],
              description: "Get a template build",
              args: [{ name: "template" }, { name: "build-id" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List team custom templates",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description: "Maximum number of templates to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
              ],
            },
            {
              name: ["list-builds", "builds"],
              description: "List builds for a template",
              args: { name: "template" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description: "Maximum number of builds to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a template and kick a new build",
              args: { name: "template" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--source-oci-ref",
                  description:
                    "New customer OCI image (registry/repo:tag or digest)",
                  args: { name: "source-oci-ref" },
                },
                {
                  name: "--base-template",
                  description: "New platform base",
                  args: { name: "base-template" },
                },
              ],
            },
          ],
        },
        {
          name: ["triggers", "trigger"],
          description: "Manage webhook and cron triggers for hosted agent runs",
          subcommands: [
            {
              name: "cancel-execution",
              description: "Cancel a running trigger execution",
              args: [{ name: "trigger-id" }, { name: "execution-id" }],
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--force"],
                  description:
                    "Cancel even if the execution has not started a run yet",
                },
              ],
            },
            {
              name: "create",
              description: "Create a webhook or cron trigger",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--kind",
                  description: "Trigger kind (webhook|cron)",
                  isRequired: true,
                  args: { name: "kind", suggestions: ["webhook", "cron"] },
                },
                {
                  name: "--name",
                  description:
                    "Unique trigger name for the team (1–64 characters: letters, digits, hyphen, dot, underscore; starts and ends alphanumeric, not a UUID)",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--session-mode",
                  description: "Session mode (fresh|reuse)",
                  isRequired: true,
                  args: {
                    name: "session-mode",
                    suggestions: ["fresh", "reuse"],
                  },
                },
                {
                  name: "--prompt",
                  description: "Prompt template sent on each fire",
                  isRequired: true,
                  args: { name: "prompt" },
                },
                {
                  name: "--output-mode",
                  description: "Output delivery mode (none|email|slack)",
                  args: {
                    name: "output-mode",
                    suggestions: ["none", "email", "slack"],
                    default: "none",
                  },
                },
                {
                  name: "--output-email",
                  description: "Destination email when output-mode=email",
                  args: { name: "output-email" },
                },
                {
                  name: "--output-slack-webhook",
                  description:
                    "Slack incoming webhook URL when output-mode=slack",
                  args: { name: "output-slack-webhook" },
                },
                {
                  name: "--spec",
                  description:
                    'Path to agents.yaml manifest for session-mode=fresh ("-" reads stdin). ${VAR} references are resolved from the local environment at create time and stored expanded',
                  args: { name: "spec", template: "filepaths" },
                  exclusiveOn: ["--from-config"],
                },
                {
                  name: "--from-config",
                  description:
                    "Name or ID of an existing Agent Config to use as the session template for session-mode=fresh, instead of --spec",
                  args: { name: "from-config", template: "filepaths" },
                  exclusiveOn: ["--spec"],
                },
                secretOption,
                {
                  name: "--bound-session-id",
                  description: "Paused session ID for session-mode=reuse",
                  args: { name: "bound-session-id" },
                },
                {
                  name: "--provider",
                  description:
                    "Webhook provider (github|gitlab|custom); default custom",
                  args: {
                    name: "provider",
                    suggestions: ["github", "gitlab", "custom"],
                  },
                },
                {
                  name: "--cron-expr",
                  description: "Cron expression when kind=cron",
                  args: { name: "cron-expr" },
                },
                {
                  name: "--timezone",
                  description:
                    "IANA timezone when kind=cron (e.g. America/New_York)",
                  args: { name: "timezone" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a trigger",
              args: { name: "trigger-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Delete without confirmation",
                },
              ],
            },
            {
              name: ["get", "show"],
              description: "Get a trigger",
              args: { name: "trigger-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "get-by-session",
              description: "Look up the trigger for a session",
              args: { name: "session-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "get-execution",
              description: "Get a single trigger execution",
              args: [{ name: "trigger-id" }, { name: "execution-id" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List triggers",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description: "Maximum number of triggers to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
                {
                  name: "--kind",
                  description: "Filter by kind (webhook|cron)",
                  args: { name: "kind", suggestions: ["webhook", "cron"] },
                },
                {
                  name: "--status",
                  description: "Filter by status (active|paused)",
                  args: { name: "status", suggestions: ["active", "paused"] },
                },
              ],
            },
            {
              name: ["list-executions", "executions"],
              description: "List a trigger's execution history",
              args: { name: "trigger-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page-size",
                  description:
                    "Maximum number of executions to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
                {
                  name: "--status",
                  description:
                    "Filter by execution status (pending|running|succeeded|failed)",
                  args: {
                    name: "status",
                    suggestions: ["pending", "running", "succeeded", "failed"],
                  },
                },
              ],
            },
            {
              name: ["list-providers", "providers"],
              description: "List supported webhook providers",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list-reusable-sessions", "reusable-sessions"],
              description: "List paused sessions for reuse binding",
              options: [
                formatOption,
                noHeaderOption,
                pageSizeOption,
                pageTokenOption,
              ],
            },
            {
              name: "pause",
              description: "Pause a trigger",
              args: { name: "trigger-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["resume", "activate", "enable"],
              description: "Resume a paused trigger",
              args: { name: "trigger-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "rotate-secret",
              description: "Rotate a webhook trigger's secret",
              args: { name: "trigger-id" },
              options: [
                {
                  name: "--grace-period",
                  description:
                    "Seconds the old secret keeps verifying (omit for 5m default; 0 revokes immediately; max 1h)",
                  args: { name: "grace-period" },
                },
              ],
            },
            {
              name: "run",
              description: "Run a trigger now",
              args: { name: "trigger-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "update",
              description: "Update a trigger",
              args: { name: "trigger-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description:
                    "New unique trigger name (same identifier rules as create)",
                  args: { name: "name" },
                },
                {
                  name: "--status",
                  description: "Lifecycle status (active|paused)",
                  args: { name: "status", suggestions: ["active", "paused"] },
                },
                {
                  name: "--prompt",
                  description: "Updated prompt template",
                  args: { name: "prompt" },
                },
                {
                  name: "--output-mode",
                  description: "Output delivery mode (none|email|slack)",
                  args: {
                    name: "output-mode",
                    suggestions: ["none", "email", "slack"],
                  },
                },
                {
                  name: "--output-email",
                  description: "Destination email when output-mode=email",
                  args: { name: "output-email" },
                },
                {
                  name: "--output-slack-webhook",
                  description:
                    "Slack incoming webhook URL when output-mode=slack",
                  args: { name: "output-slack-webhook" },
                },
                {
                  name: "--spec",
                  description:
                    'Updated agents.yaml manifest for fresh triggers ("-" reads stdin). ${VAR} references are resolved from the local environment at update time and stored expanded',
                  args: { name: "spec", template: "filepaths" },
                  exclusiveOn: ["--from-config"],
                },
                {
                  name: "--from-config",
                  description:
                    "Name or ID of an existing Agent Config whose manifest becomes this trigger's session template, instead of --spec",
                  args: { name: "from-config", template: "filepaths" },
                  exclusiveOn: ["--spec"],
                },
                secretOption,
                {
                  name: "--bound-session-id",
                  description: "Updated bound session ID for reuse triggers",
                  args: { name: "bound-session-id" },
                },
                {
                  name: "--cron-expr",
                  description: "Updated cron expression",
                  args: { name: "cron-expr" },
                },
                {
                  name: "--timezone",
                  description: "Updated IANA timezone",
                  args: { name: "timezone" },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update settings or live config on an existing session",
          args: { name: "session" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--resume-on-topoff",
              description:
                "Let DigitalOcean resume this session automatically once your team's prepayment balance is topped off after a low-balance pause",
              exclusiveOn: ["--spec"],
            },
            {
              name: ["-f", "--spec"],
              description:
                "Path to a partial manifest (YAML) holding only the sections to change: tools, env, secrets",
              args: { name: "spec", template: "filepaths" },
              exclusiveOn: ["--resume-on-topoff"],
            },
            {
              name: "--wait-timeout",
              description:
                "Maximum seconds to wait for a config update to finish (0 uses the default)",
              args: { name: "wait-timeout", default: "300" },
            },
            {
              name: "--no-wait",
              description:
                "With --spec, return once the config update is accepted instead of waiting for it to finish",
            },
          ],
        },
        {
          name: "upload",
          description: "Upload a file into a session workspace",
          args: { name: "session" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--workspace-path",
              description:
                "Destination path inside the workspace root (/workspace)",
              isRequired: true,
              args: { name: "workspace-path" },
            },
            {
              name: "--local-file",
              description: "Path to the local file to upload",
              isRequired: true,
              args: { name: "local-file", template: "filepaths" },
            },
            {
              name: "--archive",
              description:
                "Treat the local file as an uncompressed tar archive to extract at the destination (not .tgz / .tar.gz)",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an agent manifest",
          args: { name: "manifest", isOptional: true, template: "filepaths" },
          options: [
            {
              name: ["-f", "--spec"],
              description:
                "Path to an agent manifest in YAML or JSON (flat or legacy envelope), equivalently given as a positional argument or --file",
              args: { name: "spec", template: "filepaths" },
            },
          ],
        },
        {
          name: ["workspace", "workspaces"],
          description:
            "Manage persistent workspaces (files kept between sessions)",
          subcommands: [
            {
              name: "create",
              description: "Create a persistent workspace",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--size-limit-gib",
                  description:
                    "Size limit of the workspace in GiB, a whole number from 1 to 100 (required)",
                  args: { name: "size-limit-gib" },
                },
                {
                  name: "--name",
                  description: "Optional label for the workspace",
                  args: { name: "name" },
                },
                {
                  name: "--idempotency-key",
                  description:
                    "Key that makes a repeated create return the first workspace",
                  args: { name: "idempotency-key" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Permanently delete a persistent workspace",
              args: { name: "workspace-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete without asking first (required when there is no terminal to ask at)",
                },
              ],
            },
            {
              name: ["get", "show"],
              description: "Get a persistent workspace",
              args: { name: "workspace-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List persistent workspaces",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--state",
                  description:
                    "Only list workspaces in this state: AVAILABLE, ATTACHING, ATTACHED, RELEASING, FAILED or DELETING",
                  args: { name: "state" },
                },
                {
                  name: "--page-size",
                  description:
                    "Maximum number of workspaces to return per page",
                  args: { name: "page-size" },
                },
                pageTokenOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true },
    },
    {
      name: "insights",
      description: "Display commands for managing Insights",
      subcommands: [
        {
          name: ["alert-instance", "alert-instances", "ai"],
          description: "Display commands for viewing Insights alert instances",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Retrieve an alert instance",
              args: { name: "alert-instance-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List alert instances",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--status",
                  description: "Filter by status",
                  args: { name: "status", suggestions: ["active", "resolved"] },
                },
                {
                  name: "--rule-id",
                  description: "Filter by the ID of the alert rule that fired",
                  args: { name: "rule-id" },
                },
                {
                  name: "--resource-urn",
                  description:
                    "Filter by the urn of the resource the alert fired against, for example do:droplet:12345",
                  args: { name: "resource-urn" },
                },
                {
                  name: "--page",
                  description: "Retrieve only this page of results (1-based)",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description: "Number of results per page when --page is set",
                  args: { name: "per-page" },
                },
              ],
            },
          ],
        },
        {
          name: "alert-rule",
          description: "Manage Insights alert rules",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create an alert rule",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Alert rule name",
                  args: { name: "name" },
                },
                {
                  name: "--metric",
                  description: "Dotted OpenTelemetry metric name",
                  args: { name: "metric" },
                },
                {
                  name: "--resource-urn",
                  description:
                    "Resource URN; repeat to include multiple resources",
                  isRepeatable: true,
                  args: { name: "resource-urn" },
                },
                {
                  name: "--tag",
                  description: "Resource tag; repeat to include multiple tags",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--filter",
                  description:
                    "Metric filter in field,operator,value form; repeat to include multiple filters",
                  isRepeatable: true,
                  args: { name: "filter" },
                },
                {
                  name: "--window",
                  description:
                    "Evaluation window: 1m, 5m, 10m, 15m, 30m, or 1h",
                  args: { name: "window" },
                },
                {
                  name: "--operator",
                  description:
                    "Threshold operator: eq, neq, lt, lte, gt, or gte",
                  args: { name: "operator" },
                },
                {
                  name: "--warning-threshold",
                  description: "Warning threshold",
                  args: { name: "warning-threshold" },
                },
                {
                  name: "--critical-threshold",
                  description: "Critical threshold",
                  args: { name: "critical-threshold" },
                },
                {
                  name: "--notification-channel",
                  description:
                    "Notification channel ID; repeat to include multiple channels",
                  isRepeatable: true,
                  args: { name: "notification-channel" },
                },
                {
                  name: "--notify-on",
                  description:
                    "Severity to notify on: warning or critical; repeat for both",
                  isRepeatable: true,
                  args: { name: "notify-on" },
                },
                {
                  name: "--re-alert-duration",
                  description: "Re-alert interval: 30m, 1h, 4h, or never",
                  args: { name: "re-alert-duration" },
                },
                {
                  name: "--status",
                  description: "Alert rule status: active or paused",
                  args: { name: "status" },
                },
                requestFileOption,
              ],
            },
            {
              name: ["delete", "d", "del", "rm"],
              description: "Delete an alert rule",
              args: { name: "rule-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the alert rule without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Get an alert rule",
              args: { name: "rule-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List alert rules",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--resource-urn",
                  description: "Filter by resource URN",
                  args: { name: "resource-urn" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description: "Number of alert rules per page",
                  args: { name: "per-page" },
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update an alert rule",
              args: { name: "rule-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Alert rule name",
                  args: { name: "name" },
                },
                {
                  name: "--metric",
                  description: "Dotted OpenTelemetry metric name",
                  args: { name: "metric" },
                },
                {
                  name: "--resource-urn",
                  description:
                    "Resource URN; repeat to include multiple resources",
                  isRepeatable: true,
                  args: { name: "resource-urn" },
                },
                {
                  name: "--tag",
                  description: "Resource tag; repeat to include multiple tags",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--filter",
                  description:
                    "Metric filter in field,operator,value form; repeat to include multiple filters",
                  isRepeatable: true,
                  args: { name: "filter" },
                },
                {
                  name: "--window",
                  description:
                    "Evaluation window: 1m, 5m, 10m, 15m, 30m, or 1h",
                  args: { name: "window" },
                },
                {
                  name: "--operator",
                  description:
                    "Threshold operator: eq, neq, lt, lte, gt, or gte",
                  args: { name: "operator" },
                },
                {
                  name: "--warning-threshold",
                  description: "Warning threshold",
                  args: { name: "warning-threshold" },
                },
                {
                  name: "--critical-threshold",
                  description: "Critical threshold",
                  args: { name: "critical-threshold" },
                },
                {
                  name: "--notification-channel",
                  description:
                    "Notification channel ID; repeat to include multiple channels",
                  isRepeatable: true,
                  args: { name: "notification-channel" },
                },
                {
                  name: "--notify-on",
                  description:
                    "Severity to notify on: warning or critical; repeat for both",
                  isRepeatable: true,
                  args: { name: "notify-on" },
                },
                {
                  name: "--re-alert-duration",
                  description: "Re-alert interval: 30m, 1h, 4h, or never",
                  args: { name: "re-alert-duration" },
                },
                {
                  name: "--status",
                  description: "Alert rule status: active or paused",
                  args: { name: "status" },
                },
                requestFileOption,
              ],
            },
          ],
        },
        {
          name: ["dashboard", "dashboards"],
          description: "Display commands for managing Insights dashboards",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a dashboard",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--spec-file",
                  description:
                    "Path to a dashboard spec in JSON or YAML format",
                  isRequired: true,
                  args: { name: "spec-file", template: "filepaths" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a dashboard",
              args: { name: "dashboard-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the dashboard without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a dashboard",
              args: { name: "dashboard-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List dashboards",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page",
                  description: "Page number to retrieve",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description: "Number of dashboards per page, from 1 to 200",
                  args: { name: "per-page" },
                },
                {
                  name: "--sort",
                  description: "Sort field",
                  args: {
                    name: "sort",
                    suggestions: ["name", "created_at", "updated_at"],
                  },
                },
                {
                  name: "--sort-direction",
                  description: "Sort direction",
                  args: {
                    name: "sort-direction",
                    suggestions: ["asc", "desc"],
                  },
                },
              ],
            },
            {
              name: "schema",
              description: "Retrieve the dashboard spec schema",
            },
            {
              name: ["update", "u"],
              description: "Update a dashboard",
              args: { name: "dashboard-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--spec-file",
                  description:
                    "Path to a dashboard spec in JSON or YAML format",
                  isRequired: true,
                  args: { name: "spec-file", template: "filepaths" },
                },
              ],
            },
          ],
        },
        {
          name: ["logs", "log"],
          description: "Display commands for searching Insights logs",
          subcommands: [
            {
              name: "search",
              description: "Search log records",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                fromOption,
                toOption,
                {
                  name: "--text",
                  description:
                    "Search for a substring across the log body, service name, and resource URN",
                  args: { name: "text" },
                },
                {
                  name: "--filter",
                  description: "A JSON filter expression",
                  args: { name: "filter" },
                },
                filterFileOption,
                {
                  name: "--request-file",
                  description:
                    "Read a complete JSON or YAML logs search request from path, or - to read from stdin",
                  args: { name: "request-file" },
                },
                {
                  name: "--order-by",
                  description:
                    "Sort clause in the form field[:asc|desc], for example timestamp:desc",
                  isRepeatable: true,
                  args: { name: "order-by" },
                },
                {
                  name: "--limit",
                  description:
                    "Maximum number of records to return, up to 1000",
                  args: { name: "limit" },
                },
                {
                  name: "--cursor",
                  description:
                    "Cursor from a previous search to retrieve the next page",
                  args: { name: "cursor" },
                },
              ],
            },
          ],
        },
        {
          name: ["metrics", "metric", "promql"],
          description:
            "Display commands for querying Insights metrics with PromQL",
          subcommands: [
            {
              name: "label-values",
              description: "List the values of a label",
              args: { name: "label-name" },
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                matchOption,
                startOption,
                endOption,
              ],
            },
            {
              name: "labels",
              description: "List label names",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                matchOption,
                startOption,
                endOption,
              ],
            },
            {
              name: "query",
              description: "Evaluate an instant PromQL query",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                {
                  name: "--query",
                  description: "The PromQL expression to evaluate",
                  isRequired: true,
                  args: { name: "query" },
                },
                {
                  name: "--time",
                  description: "Evaluation time",
                  args: { name: "time" },
                },
                {
                  name: "--timeout",
                  description: "Evaluation timeout",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: "query-range",
              description: "Evaluate a PromQL query over a time range",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                {
                  name: "--query",
                  description: "The PromQL expression to evaluate",
                  isRequired: true,
                  args: { name: "query" },
                },
                {
                  name: "--start",
                  description: "Start of the range",
                  isRequired: true,
                  args: { name: "start" },
                },
                {
                  name: "--end",
                  description: "End of the range",
                  isRequired: true,
                  args: { name: "end" },
                },
                {
                  name: "--step",
                  description: "Resolution step between samples",
                  isRequired: true,
                  args: { name: "step" },
                },
                {
                  name: "--timeout",
                  description: "Evaluation timeout",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: "series",
              description: "List series that match selectors",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                matchOption,
                startOption,
                endOption,
              ],
            },
          ],
        },
        {
          name: "notification-channel",
          description: "Manage Insights notification channels",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a notification channel",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Notification channel name",
                  args: { name: "name" },
                },
                {
                  name: "--type",
                  description:
                    "Notification channel type: email, slack, or webhook",
                  args: { name: "type" },
                },
                requestFileOption,
                {
                  name: "--emails",
                  description: "Email recipients",
                  isRepeatable: true,
                  args: { name: "emails" },
                },
                {
                  name: "--slack-channel",
                  description: "Slack channel",
                  args: { name: "slack-channel" },
                },
                {
                  name: "--slack-webhook-url",
                  description: "Slack incoming webhook URL",
                  args: { name: "slack-webhook-url" },
                },
                {
                  name: "--webhook-url",
                  description: "HTTPS webhook destination",
                  args: { name: "webhook-url" },
                },
                {
                  name: "--webhook-header",
                  description:
                    "Webhook header in key=value form; repeat for multiple headers",
                  isRepeatable: true,
                  args: { name: "key=value" },
                },
                {
                  name: "--webhook-basic-auth-username",
                  description: "Webhook basic-auth username",
                  args: { name: "webhook-basic-auth-username" },
                },
                {
                  name: "--webhook-basic-auth-password",
                  description: "Webhook basic-auth password",
                  args: { name: "webhook-basic-auth-password" },
                },
                {
                  name: "--webhook-bearer-token",
                  description: "Webhook bearer token",
                  args: { name: "webhook-bearer-token" },
                },
                {
                  name: "--webhook-signing-secret",
                  description: "Webhook HMAC signing secret",
                  args: { name: "webhook-signing-secret" },
                },
              ],
            },
            {
              name: ["delete", "d", "del", "rm"],
              description: "Delete a notification channel",
              args: { name: "channel-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the notification channel without a confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Get a notification channel",
              args: { name: "channel-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List notification channels",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description: "Number of notification channels per page",
                  args: { name: "per-page" },
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a notification channel",
              args: { name: "channel-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "Notification channel name",
                  args: { name: "name" },
                },
                {
                  name: "--type",
                  description:
                    "Notification channel type: email, slack, or webhook",
                  args: { name: "type" },
                },
                requestFileOption,
                {
                  name: "--emails",
                  description: "Email recipients",
                  isRepeatable: true,
                  args: { name: "emails" },
                },
                {
                  name: "--slack-channel",
                  description: "Slack channel",
                  args: { name: "slack-channel" },
                },
                {
                  name: "--slack-webhook-url",
                  description: "Slack incoming webhook URL",
                  args: { name: "slack-webhook-url" },
                },
                {
                  name: "--webhook-url",
                  description: "HTTPS webhook destination",
                  args: { name: "webhook-url" },
                },
                {
                  name: "--webhook-header",
                  description:
                    "Webhook header in key=value form; repeat for multiple headers",
                  isRepeatable: true,
                  args: { name: "key=value" },
                },
                {
                  name: "--webhook-basic-auth-username",
                  description: "Webhook basic-auth username",
                  args: { name: "webhook-basic-auth-username" },
                },
                {
                  name: "--webhook-basic-auth-password",
                  description: "Webhook basic-auth password",
                  args: { name: "webhook-basic-auth-password" },
                },
                {
                  name: "--webhook-bearer-token",
                  description: "Webhook bearer token",
                  args: { name: "webhook-bearer-token" },
                },
                {
                  name: "--webhook-signing-secret",
                  description: "Webhook HMAC signing secret",
                  args: { name: "webhook-signing-secret" },
                },
              ],
            },
          ],
        },
        {
          name: ["resource", "resources"],
          description:
            "Display commands for managing Insights resource signal enablement",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Retrieve resource signal enablement",
              args: { name: "resource-urn" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List resource signal enablement",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--product-type",
                  description:
                    "Filter by product type; repeat to include multiple product types",
                  isRepeatable: true,
                  args: { name: "product-type" },
                },
                {
                  name: "--region",
                  description:
                    "Filter by region; repeat to include multiple regions",
                  isRepeatable: true,
                  args: { name: "region" },
                },
                {
                  name: "--page",
                  description: "Page number to retrieve",
                  args: { name: "page" },
                },
                {
                  name: "--per-page",
                  description: "Number of resources per page, from 1 to 200",
                  args: { name: "per-page" },
                },
                {
                  name: "--sort",
                  description: "Sort field",
                  args: {
                    name: "sort",
                    suggestions: ["resource_urn", "effective_at"],
                  },
                },
                {
                  name: "--sort-direction",
                  description: "Sort direction",
                  args: {
                    name: "sort-direction",
                    suggestions: ["asc", "desc"],
                  },
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update resource signal enablement",
              args: { name: "resource-urn" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description:
                    "Region used when signal enablement is first created; it cannot be changed later",
                  args: { name: "region" },
                },
                {
                  name: "--metrics",
                  description:
                    "Enable or disable metrics; use --metrics=true or --metrics=false",
                },
                {
                  name: "--logs",
                  description:
                    "Enable or disable logs; use --logs=true or --logs=false",
                },
                {
                  name: "--traces",
                  description:
                    "Enable or disable traces; use --traces=true or --traces=false",
                },
              ],
            },
          ],
        },
        {
          name: ["spans", "span"],
          description: "Display commands for searching Insights spans",
          subcommands: [
            {
              name: "search",
              description: "Search spans",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                fromOption,
                toOption,
                {
                  name: "--filter",
                  description:
                    "A JSON logs-style filter expression using condition, and, or, not, or text_search",
                  args: { name: "filter" },
                },
                filterFileOption,
                {
                  name: "--order-by",
                  description:
                    "Sort clause in the form field[:asc|desc]; repeat to sort by several fields",
                  isRepeatable: true,
                  args: { name: "order-by" },
                },
                {
                  name: "--limit",
                  description:
                    "Maximum number of results to return, from 1 to 1000",
                  args: { name: "limit" },
                },
                {
                  name: "--request-file",
                  description:
                    "Read a complete JSON or YAML search request from path, or - to read from stdin",
                  args: { name: "request-file" },
                },
              ],
            },
          ],
        },
        {
          name: ["traces", "trace"],
          description: "Display commands for searching Insights traces",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Retrieve a trace",
              args: { name: "trace-id" },
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                {
                  name: "--from",
                  description: "Start of the trace lookup window",
                  args: { name: "from" },
                },
                {
                  name: "--to",
                  description: "End of the trace lookup window",
                  args: { name: "to" },
                },
              ],
            },
            {
              name: "search",
              description: "Search traces",
              options: [
                formatOption,
                noHeaderOption,
                regionOption,
                fromOption,
                toOption,
                {
                  name: "--filter",
                  description:
                    "A JSON logs-style filter expression using condition, and, or, not, or text_search",
                  args: { name: "filter" },
                },
                filterFileOption,
                {
                  name: "--order-by",
                  description:
                    "Sort clause in the form field[:asc|desc]; repeat to sort by several fields",
                  isRepeatable: true,
                  args: { name: "order-by" },
                },
                {
                  name: "--limit",
                  description:
                    "Maximum number of results to return, from 1 to 1000",
                  args: { name: "limit" },
                },
                {
                  name: "--request-file",
                  description:
                    "Read a complete JSON or YAML search request from path, or - to read from stdin",
                  args: { name: "request-file" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "invoice",
      description: "Display commands for retrieving invoices for your account",
      subcommands: [
        {
          name: ["csv", "c"],
          description:
            "Downloads a CSV file of a specific invoice to you local machine",
          args: [{ name: "invoice-uuid" }, { name: "output-file.csv" }],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a list of all the items on an invoice",
          args: { name: "invoice-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List all of the invoices for your account",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["pdf", "p"],
          description:
            "Downloads a PDF file of a specific invoice to your local machine",
          args: [{ name: "invoice-uuid" }, { name: "output-file.pdf" }],
        },
        {
          name: ["summary", "s"],
          description: "Get a summary of an invoice",
          args: { name: "invoice-uuid" },
          options: [formatOption, noHeaderOption],
        },
      ],
    },
    {
      name: ["knowledge-base", "kb"],
      description:
        "Display commands that manage DigitalOcean Agent Knowledge Bases",
      subcommands: [
        {
          name: ["add-datasource", "add-ds"],
          description: "Add one datasource for knowledge base",
          args: { name: "knowledge-base-uuid" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--bucket-name",
              description: "The bucket name of data source from Spaces",
              args: { name: "bucket-name" },
            },
            {
              name: "--item-path",
              description: "Item path of data source from Spaces",
              args: { name: "item-path", template: "filepaths" },
            },
            {
              name: "--region",
              description: "The region of the data source",
              args: { name: "region" },
            },
            {
              name: "--base-url",
              description: "The base URL of the web crawler data source",
              args: { name: "base-url" },
            },
            {
              name: "--crawling-option",
              description: "The crawling option of the web crawler data source",
              args: { name: "crawling-option" },
            },
            {
              name: "--embed-media",
              description:
                "The embed media option of the web crawler data source",
            },
          ],
        },
        {
          name: ["attach", "ath"],
          description: "Attach a knowledge base to an agent",
          args: [{ name: "agent-uuid" }, { name: "knowledge-base-uuid" }],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["cancel-indexing-job", "cancel-job"],
          description: "Cancel indexing job for a knowledge base",
          args: { name: "indexing-job-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["create", "c"],
          description: "Creates a knowledge base",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--name",
              description: "The name of the Knowledge Base",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--region",
              description: "The region of the Knowledge Base",
              isRequired: true,
              args: { name: "region" },
            },
            {
              name: "--project-id",
              description: "The project ID of the Knowledge Base",
              isRequired: true,
              args: { name: "project-id" },
            },
            {
              name: "--embedding-model-uuid",
              description: "The embedding model UUID of the Knowledge Base",
              isRequired: true,
              args: { name: "embedding-model-uuid" },
            },
            {
              name: "--data-sources",
              description: "JSON array of data source objects",
              isRequired: true,
              args: { name: "data-sources" },
            },
            {
              name: "--database-id",
              description: "The database ID of the Knowledge Base",
              args: { name: "database-id" },
            },
            {
              name: "--tags",
              description: "The tags of the Knowledge Base",
              isRepeatable: true,
              args: { name: "tags" },
            },
            {
              name: "--vpc_uuid",
              description: "The VPC UUID of the Knowledge Base",
              args: { name: "vpc_uuid" },
            },
          ],
        },
        {
          name: ["delete", "del", "rm"],
          description: "Deletes a knowledge base",
          args: { name: "knowledge-base-uuid" },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Deletes the knowledge base without a confirmation prompt",
            },
          ],
        },
        {
          name: ["delete-datasource", "d-ds"],
          description: "Delete a datasource for knowledge base",
          args: [{ name: "knowledge-base-uuid" }, { name: "data-source-id" }],
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Deletes the datasource for knowledge base without a confirmation prompt",
            },
          ],
        },
        {
          name: ["detach", "dth"],
          description: "Detaches a knowledge base from an agent",
          args: [{ name: "agent-uuid" }, { name: "knowledge-base-uuid" }],
          options: [
            formatOption,
            noHeaderOption,
            {
              name: ["-f", "--force"],
              description:
                "Detaches the knowledge base without a confirmation prompt",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieves a Knowledge Base by its uuid",
          args: { name: "knowledge-base-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["get-indexing-job", "get-job"],
          description: "Retrieve status of indexing job for a knowledge base",
          args: { name: "indexing-job-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List all knowledge bases for agents",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-datasources", "ls-ds"],
          description: "List all datasource for knowledge base",
          args: { name: "knowledge-base-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-indexing-job-data-sources", "ls-job-ds"],
          description:
            "List data sources for indexing job for a knowledge base",
          args: { name: "indexing-job-uuid" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-indexing-jobs", "ls-jobs"],
          description: "List all indexing jobs for knowledge bases",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["update", "u"],
          description: "Update a knowledge base",
          args: { name: "knowledge-base-uuid" },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--name",
              description: "The name of the Knowledge Base",
              args: { name: "name" },
            },
            {
              name: "--project-id",
              description: "The project ID of the Knowledge Base",
              args: { name: "project-id" },
            },
            {
              name: "--embedding-model-uuid",
              description: "The embedding model UUID of the Knowledge Base",
              args: { name: "embedding-model-uuid" },
            },
            {
              name: "--database-id",
              description: "The database ID of the Knowledge Base",
              args: { name: "database-id" },
            },
            {
              name: "--tags",
              description: "The tags of the Knowledge Base",
              isRepeatable: true,
              args: { name: "tags" },
            },
            {
              name: "--uuid",
              description: "The UUID of the Knowledge Base",
              args: { name: "uuid" },
            },
          ],
        },
      ],
    },
    {
      name: ["kubernetes", "kube", "k8s", "k"],
      description:
        "Displays commands to manage Kubernetes clusters and configurations",
      subcommands: [
        {
          name: "1-click",
          description:
            "Display commands that pertain to kubernetes 1-click applications",
          subcommands: [
            {
              name: ["install", "in"],
              description: "Install 1-click apps on a Kubernetes cluster",
              args: { name: "cluster-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--1-clicks",
                  description:
                    "The 1-clicks application to install on the cluster",
                  isRepeatable: true,
                  args: { name: "1-clicks" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve a list of Kubernetes 1-Click applications",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["cluster", "clusters", "c"],
          description: "Display commands for managing Kubernetes clusters",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a Kubernetes cluster",
              args: { name: "name" },
              options: [
                {
                  name: "--region",
                  description:
                    "A slug indicating which region to create the cluster in",
                  isRequired: true,
                  args: { name: "region", default: "nyc1" },
                },
                {
                  name: "--version",
                  description:
                    "A slug indicating which Kubernetes version to use when creating the cluster",
                  args: { name: "version", default: "latest" },
                },
                {
                  name: "--vpc-uuid",
                  description:
                    "The UUID of a VPC network to create the cluster in",
                  args: { name: "vpc-uuid" },
                },
                {
                  name: "--worker-subnet-uuid",
                  description:
                    "The UUID of the subnet to place worker nodes in",
                  args: { name: "worker-subnet-uuid" },
                },
                {
                  name: "--cluster-subnet",
                  description: "The CIDR block to use for the pod network",
                  args: { name: "cluster-subnet" },
                },
                {
                  name: "--service-subnet",
                  description: "The CIDR block to use for the service network",
                  args: { name: "service-subnet" },
                },
                {
                  name: "--auto-upgrade",
                  description:
                    "Enables automatic upgrades to new patch releases during the cluster's maintenance window",
                },
                {
                  name: "--surge-upgrade",
                  description: "Enables surge-upgrade for the cluster",
                },
                {
                  name: "--isolated-workers",
                  description: "Enables isolated workers for the cluster",
                },
                {
                  name: "--gpu-operator-ready",
                  description:
                    "Launches GPU nodes in the cluster with images without GPU drivers, allowing GPU operators to manage drivers",
                },
                {
                  name: "--ha",
                  description:
                    "Creates the cluster with a highly-available control plane",
                },
                {
                  name: "--enable-control-plane-firewall",
                  description:
                    "Creates the cluster with control plane firewall enabled",
                },
                {
                  name: "--control-plane-firewall-allowed-addresses",
                  description:
                    "A comma-separated list of allowed addresses that can access the control plane",
                  isRepeatable: true,
                  args: { name: "control-plane-firewall-allowed-addresses" },
                },
                {
                  name: "--scale-down-utilization-threshold",
                  description:
                    "The threshold value for the cluster autoscaler's scale-down-utilization-threshold",
                  args: { name: "scale-down-utilization-threshold" },
                },
                {
                  name: "--scale-down-unneeded-time",
                  description:
                    "The unneed time for the cluster autoscaler's scale-down-unneeded-time",
                  args: { name: "scale-down-unneeded-time" },
                },
                {
                  name: "--expanders",
                  description:
                    "Customizes expanders used by cluster-autoscaler",
                  isRepeatable: true,
                  args: { name: "expanders" },
                },
                {
                  name: "--enable-routing-agent",
                  description: "Creates the cluster with routing-agent enabled",
                },
                {
                  name: "--enable-peer-to-peer-oci-registry-plugin",
                  description:
                    "Creates the cluster with Peer-to-peer OCI registry plugin enabled",
                },
                {
                  name: "--enable-nfs-csi-plugin",
                  description:
                    "Creates the cluster with the NFS CSI plugin enabled",
                },
                {
                  name: "--enable-coredns-autoscaler",
                  description:
                    "Creates the cluster with the CoreDNS Autoscaler enabled, which scales CoreDNS replicas in proportion to the cluster's size",
                },
                {
                  name: "--enable-insights-logs",
                  description:
                    "Opts the cluster in to sending its logs to Insights",
                },
                {
                  name: "--enable-amd-gpu-device-plugin",
                  description:
                    "Creates the cluster with amd gpu device plugin installed",
                },
                {
                  name: "--enable-amd-gpu-device-metrics-exporter-plugin",
                  description:
                    "Creates the cluster with amd gpu device metrics exporter plugin installed",
                },
                {
                  name: "--enable-nvidia-gpu-device-plugin",
                  description:
                    "Creates the cluster with nvidia gpu device plugin installed",
                },
                {
                  name: "--enable-nvidia-gpu-dra-driver",
                  description:
                    "Creates the cluster with the NVIDIA GPU DRA Driver installed",
                },
                {
                  name: "--enable-amd-gpu-dra-driver",
                  description:
                    "Creates the cluster with the AMD GPU DRA Driver installed",
                },
                {
                  name: "--enable-rdma-shared-device-plugin",
                  description:
                    "Creates the cluster with k8s-rdma-shared-dev-plugin device plugin installed",
                },
                {
                  name: "--sso-enabled",
                  description:
                    "Creates the cluster with SSO method of authentication enabled",
                },
                {
                  name: "--sso-required",
                  description:
                    "Creates the cluster with SSO required as the only method of authentication",
                },
                {
                  name: "--sso-issuer-url",
                  description:
                    "OIDC issuer URL for the cluster SSO configuration",
                  args: { name: "sso-issuer-url" },
                },
                {
                  name: "--sso-client-id",
                  description:
                    "OIDC client ID for the cluster SSO configuration",
                  args: { name: "sso-client-id" },
                },
                {
                  name: "--tag",
                  description:
                    "A comma-separated list of tags to apply to the cluster, in addition to the default tags of k8s and k8s:$K8S_CLUSTER_ID",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--size",
                  description:
                    "The machine size to use when creating nodes in the default node pool (incompatible with --node-pool)",
                  args: { name: "size", default: "s-1vcpu-2gb-intel" },
                },
                {
                  name: "--1-clicks",
                  description:
                    "A comma-separated list of 1-click applications to install on the Kubernetes cluster",
                  isRepeatable: true,
                  args: { name: "1-clicks" },
                },
                {
                  name: "--count",
                  description:
                    "The number of nodes in the default node pool (incompatible with --node-pool)",
                  args: { name: "count", default: "3" },
                },
                {
                  name: "--node-pool",
                  description:
                    "A comma-separated list of node-pools, defined using semicolon-separated configuration values and surrounded by quotes (incompatible with --size and --count)",
                  isRepeatable: true,
                  args: { name: "node-pool" },
                },
                {
                  name: "--update-kubeconfig",
                  description:
                    "Adds a configuration context for the new cluster to your kubectl",
                },
                {
                  name: "--wait",
                  description:
                    "Instructs the terminal to wait for the action to complete before returning control to the user",
                },
                waitTimeoutOption,
                {
                  name: "--set-current-context",
                  description:
                    "Sets the current kubectl context to that of the new cluster",
                },
                {
                  name: "--maintenance-window",
                  description:
                    "Sets the beginning of the schedule for the four hour maintenance window for the cluster",
                  args: { name: "maintenance-window", default: "any=00:00" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Delete Kubernetes clusters",
              args: {
                name: "id|name",
                isVariadic: true,
                generators: kubernetesClusterGenerator,
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the cluster without a confirmation prompt",
                },
                {
                  name: "--update-kubeconfig",
                  description:
                    "Remove the deleted cluster from your kubeconfig",
                },
                {
                  name: "--dangerous",
                  description:
                    "Deletes the cluster's associated resources like load balancers, volumes and volume snapshots",
                },
              ],
            },
            {
              name: ["delete-selective", "ds"],
              description:
                "Delete a Kubernetes cluster and selectively delete resources associated with it",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Deletes the cluster without a confirmation prompt",
                },
                {
                  name: "--update-kubeconfig",
                  description:
                    "Removes the deleted cluster from your kubeconfig",
                },
                {
                  name: "--volumes",
                  description:
                    "A comma-separated list of volume IDs or names to delete",
                  isRepeatable: true,
                  args: { name: "volumes" },
                },
                {
                  name: "--snapshots",
                  description:
                    "A comma-separated list of volume snapshot IDs or names to delete",
                  isRepeatable: true,
                  args: { name: "snapshots" },
                },
                {
                  name: "--load-balancers",
                  description:
                    "A comma-separated list of load balancer IDs or names to delete",
                  isRepeatable: true,
                  args: { name: "load-balancers" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve details about a Kubernetes cluster",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-upgrades", "gu"],
              description:
                "Retrieve a list of available Kubernetes version upgrades",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
            },
            {
              name: ["kubeconfig", "kubecfg", "k8scfg", "config", "cfg"],
              description:
                "Display commands for managing your local kubeconfig",
              subcommands: [
                {
                  name: "exec-credential",
                  description:
                    "INTERNAL: This hidden command is for printing a cluster's exec credential",
                  hidden: true,
                  args: { name: "cluster-id" },
                  options: [
                    { name: "--version", args: { name: "version" } },
                    {
                      name: "--sso-issuer-url",
                      args: { name: "sso-issuer-url" },
                    },
                    {
                      name: "--sso-client-id",
                      args: { name: "sso-client-id" },
                    },
                    {
                      name: "--sso-local-server-port",
                      args: { name: "sso-local-server-port", default: "8080" },
                    },
                  ],
                },
                {
                  name: ["remove", "d", "rm"],
                  description:
                    "Remove a cluster's credentials from your local kubeconfig",
                  args: {
                    name: "cluster-id|cluster-name",
                    generators: kubernetesClusterGenerator,
                  },
                },
                {
                  name: ["save", "s"],
                  description:
                    "Save a cluster's credentials to your local kubeconfig",
                  args: {
                    name: "cluster-id|cluster-name",
                    generators: kubernetesClusterGenerator,
                  },
                  options: [
                    {
                      name: "--set-current-context",
                      description:
                        "Sets the current kubectl context to that of the newest cluster in your account",
                    },
                    {
                      name: "--expiry-seconds",
                      description:
                        "The length of time the cluster credentials are valid for, in seconds",
                      args: { name: "expiry-seconds" },
                    },
                    {
                      name: "--type",
                      description:
                        "Kubeconfig authentication type: 'token', 'sso', or omit for the API default",
                      args: { name: "type" },
                    },
                    {
                      name: "--alias",
                      description: "An alias for the cluster context name",
                      args: { name: "alias" },
                    },
                  ],
                },
                {
                  name: ["show", "p", "g"],
                  description: "Show a Kubernetes cluster's kubeconfig YAML",
                  args: {
                    name: "cluster-id|cluster-name",
                    generators: kubernetesClusterGenerator,
                  },
                  options: [
                    {
                      name: "--expiry-seconds",
                      description:
                        "The length of time the cluster credentials are valid for, in seconds",
                      args: { name: "expiry-seconds" },
                    },
                    {
                      name: "--type",
                      description:
                        "Kubeconfig authentication type: 'token', 'sso', or omit for the API default",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "Retrieve the list of Kubernetes clusters for your account",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list-associated-resources", "ar"],
              description:
                "Retrieve DigitalOcean resources associated with a Kubernetes cluster",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
              options: [formatOption, noHeaderOption],
            },
            {
              name: [
                "node-pool",
                "node-pools",
                "nodepool",
                "nodepools",
                "pool",
                "pools",
                "np",
                "p",
              ],
              description: "Display commands for managing node pools",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create a new node pool for a cluster",
                  args: {
                    name: "cluster-id|cluster-name",
                    generators: kubernetesClusterGenerator,
                  },
                  options: [
                    {
                      name: "--name",
                      description: "The name of the node pool",
                      isRequired: true,
                      args: { name: "name" },
                    },
                    {
                      name: "--size",
                      description: "The size of the nodes in the node pool",
                      isRequired: true,
                      args: { name: "size" },
                    },
                    {
                      name: "--count",
                      description: "The number of nodes in the node pool",
                      isRequired: true,
                      args: { name: "count" },
                    },
                    {
                      name: "--tag",
                      description: "A tag to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "tag" },
                    },
                    {
                      name: "--label",
                      description:
                        "A label in key=value notation to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "label" },
                    },
                    {
                      name: "--taint",
                      description:
                        "Taint in key=value:effect notation to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "taint" },
                    },
                    {
                      name: "--auto-scale",
                      description: "Enables auto-scaling on the node pool",
                    },
                    {
                      name: "--min-nodes",
                      description:
                        "The minimum number of nodes in the node pool when autoscaling (auto_scale) is enabled",
                      args: { name: "min-nodes" },
                    },
                    {
                      name: "--max-nodes",
                      description:
                        "The maximum number of nodes in the node pool when autoscaling is enabled",
                      args: { name: "max-nodes" },
                    },
                  ],
                },
                {
                  name: ["delete", "d", "rm"],
                  description: "Delete a node pool",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                  ],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description:
                        "Deletes node pool without a confirmation prompt",
                    },
                  ],
                },
                {
                  name: "delete-node",
                  description: "Delete a node",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                    { name: "node-id" },
                  ],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description:
                        "Deletes the node without a confirmation prompt",
                    },
                    {
                      name: "--skip-drain",
                      description: "Skips draining the node before deletion",
                    },
                  ],
                },
                {
                  name: ["get", "g"],
                  description:
                    "Retrieve information about a cluster's node pool",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                  ],
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["list", "ls"],
                  description: "List a cluster's node pools",
                  args: {
                    name: "cluster-id|cluster-name",
                    generators: kubernetesClusterGenerator,
                  },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["recycle", "r"],
                  description: "DEPRECATED: Use replace-node",
                  hidden: true,
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                  ],
                  options: [
                    {
                      name: "--node-ids",
                      description:
                        "ID or name of the nodes in the node pool to recycle",
                      args: { name: "node-ids" },
                    },
                  ],
                },
                {
                  name: "replace-node",
                  description: "Replace node with a new one",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                    { name: "node-id" },
                  ],
                  options: [
                    {
                      name: ["-f", "--force"],
                      description: "Replaces node without confirmation prompt",
                    },
                    {
                      name: "--skip-drain",
                      description: "Skips draining the node before replacement",
                    },
                  ],
                },
                {
                  name: ["update", "u"],
                  description: "Update an existing node pool in a cluster",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    { name: "pool-id|pool-name" },
                  ],
                  options: [
                    {
                      name: "--name",
                      description: "The name of the node pool",
                      args: { name: "name" },
                    },
                    {
                      name: "--count",
                      description: "The number of nodes in the node pool",
                      args: { name: "count" },
                    },
                    {
                      name: "--tag",
                      description: "A tag to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "tag" },
                    },
                    {
                      name: "--label",
                      description:
                        "A label in key=value notation to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "label" },
                    },
                    {
                      name: "--taint",
                      description:
                        "Taint in key=value:effect notation to apply to the node pool",
                      isRepeatable: true,
                      args: { name: "taint" },
                    },
                    {
                      name: "--auto-scale",
                      description: "Enables auto-scaling on the node pool",
                    },
                    {
                      name: "--min-nodes",
                      description:
                        "The minimum number of nodes in the node pool when autoscaling is enabled",
                      args: { name: "min-nodes" },
                    },
                    {
                      name: "--max-nodes",
                      description:
                        "The maximum number of nodes in the node pool when autoscaling is enabled",
                      args: { name: "max-nodes" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["registry", "reg"],
              description:
                "Display commands for integrating clusters with docr",
              subcommands: [
                {
                  name: ["add", "a"],
                  description:
                    "Add container registry support to Kubernetes clusters",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                  ],
                },
                {
                  name: ["remove", "rm"],
                  description:
                    "Remove container registry support from Kubernetes clusters",
                  args: [
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                    {
                      name: "cluster-id|cluster-name",
                      generators: kubernetesClusterGenerator,
                    },
                  ],
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a Kubernetes cluster's configuration",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
              options: [
                {
                  name: "--cluster-name",
                  description: "Specifies a new cluster name",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--tag",
                  description:
                    "A comma-separated list of tags to apply to the cluster",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
                {
                  name: "--auto-upgrade",
                  description:
                    "Indicates whether the cluster automatically upgrades to new patch releases during its maintenance window",
                },
                {
                  name: "--surge-upgrade",
                  description: "Enables surge-upgrade for the cluster",
                },
                {
                  name: "--gpu-operator-ready",
                  description:
                    "Launches GPU nodes in the cluster with images without GPU drivers, allowing GPU operators to manage drivers",
                },
                {
                  name: "--ha",
                  description:
                    "Enables the highly-available control plane for the cluster",
                },
                {
                  name: "--enable-control-plane-firewall",
                  description:
                    "Creates the cluster with control plane firewall enabled",
                },
                {
                  name: "--enable-routing-agent",
                  description: "Creates the cluster with routing-agent enabled",
                },
                {
                  name: "--enable-peer-to-peer-oci-registry-plugin",
                  description:
                    "Creates the cluster with Peer-to-peer OCI registry plugin enabled",
                },
                {
                  name: "--enable-nfs-csi-plugin",
                  description:
                    "Updates the cluster with the NFS CSI plugin enabled",
                },
                {
                  name: "--enable-coredns-autoscaler",
                  description:
                    "Creates the cluster with the CoreDNS Autoscaler enabled, which scales CoreDNS replicas in proportion to the cluster's size",
                },
                {
                  name: "--enable-amd-gpu-device-plugin",
                  description:
                    "Creates the cluster with amd gpu device plugin installed",
                },
                {
                  name: "--enable-amd-gpu-device-metrics-exporter-plugin",
                  description:
                    "Creates the cluster with amd gpu device metrics exporter plugin installed",
                },
                {
                  name: "--enable-nvidia-gpu-device-plugin",
                  description:
                    "Creates the cluster with nvidia gpu device plugin installed",
                },
                {
                  name: "--enable-nvidia-gpu-dra-driver",
                  description:
                    "Updates the cluster with the NVIDIA GPU DRA driver installed",
                },
                {
                  name: "--enable-amd-gpu-dra-driver",
                  description:
                    "Updates the cluster with the AMD GPU DRA driver installed",
                },
                {
                  name: "--enable-rdma-shared-device-plugin",
                  description:
                    "Creates the cluster with k8s-rdma-shared-dev-plugin device plugin installed",
                },
                {
                  name: "--sso-enabled",
                  description:
                    "Enables SSO method of authentication for the cluster",
                },
                {
                  name: "--sso-required",
                  description:
                    "Sets up SSO method of authentication as required for the cluster",
                },
                {
                  name: "--sso-issuer-url",
                  description:
                    "OIDC issuer URL for the cluster SSO configuration",
                  args: { name: "sso-issuer-url" },
                },
                {
                  name: "--sso-client-id",
                  description:
                    "OIDC client ID for the cluster SSO configuration",
                  args: { name: "sso-client-id" },
                },
                {
                  name: "--scale-down-utilization-threshold",
                  description:
                    "The threshold value for the cluster autoscaler's scale-down-utilization-threshold",
                  args: { name: "scale-down-utilization-threshold" },
                },
                {
                  name: "--scale-down-unneeded-time",
                  description:
                    "The unneed time for the cluster autoscaler's scale-down-unneeded-time",
                  args: { name: "scale-down-unneeded-time" },
                },
                {
                  name: "--expanders",
                  description:
                    "Customizes expanders used by cluster-autoscaler",
                  isRepeatable: true,
                  args: { name: "expanders" },
                },
                {
                  name: "--control-plane-firewall-allowed-addresses",
                  description:
                    "A comma-separated list of allowed addresses that can access the control plane",
                  isRepeatable: true,
                  args: { name: "control-plane-firewall-allowed-addresses" },
                },
                {
                  name: "--update-kubeconfig",
                  description: "Updates the cluster in your kubeconfig",
                },
                {
                  name: "--set-current-context",
                  description:
                    "Sets the current kubectl context to that of the new cluster",
                },
                {
                  name: "--maintenance-window",
                  description:
                    "Sets the beginning of the four hour maintenance window for the cluster",
                  args: { name: "maintenance-window", default: "any=00:00" },
                },
              ],
            },
            {
              name: "upgrade",
              description: "Upgrades a cluster to a new Kubernetes version",
              args: { name: "id|name", generators: kubernetesClusterGenerator },
              options: [
                {
                  name: "--version",
                  description: "The Kubernetes version to upgrade to",
                  args: { name: "version", default: "latest" },
                },
              ],
            },
          ],
        },
        {
          name: ["options", "opts", "o"],
          description:
            "List possible option values for use inside Kubernetes commands",
          subcommands: [
            {
              name: ["regions", "r"],
              description:
                "Lists regions that support DigitalOcean Kubernetes clusters",
            },
            {
              name: ["sizes", "s"],
              description:
                "Lists machine sizes that you can use in a DigitalOcean Kubernetes cluster",
            },
            {
              name: ["versions", "v"],
              description:
                "Lists Kubernetes versions that you can use with DigitalOcean clusters",
            },
          ],
        },
      ],
    },
    {
      name: "monitoring",
      description: "Display commands to manage monitoring",
      subcommands: [
        {
          name: ["alert", "alerts", "a"],
          description: "Display commands for managing alert policies",
          subcommands: [
            {
              name: "create",
              description: "Create an alert policy",
              options: [
                {
                  name: "--description",
                  description: "A description of the alert policy",
                  args: { name: "description" },
                },
                {
                  name: "--type",
                  description: "The type of alert policy",
                  args: { name: "type" },
                },
                {
                  name: "--compare",
                  description: "The comparator of the alert policy",
                  args: {
                    name: "compare",
                    suggestions: ["GreaterThan", "LessThan"],
                  },
                },
                {
                  name: "--window",
                  description:
                    "The amount of time the resource must exceed the threshold value before an alert is triggered",
                  args: {
                    name: "window",
                    suggestions: ["5m", "10m", "30m", "1h"],
                    default: "5m",
                  },
                },
                {
                  name: "--value",
                  description:
                    "The threshold value of the alert policy to compare against",
                  args: { name: "value" },
                },
                { name: "--enabled", description: "Enables the alert policy" },
                {
                  name: "--emails",
                  description: "Email address to send alerts to",
                  isRepeatable: true,
                  args: { name: "emails" },
                },
                {
                  name: "--tags",
                  description: "Tags to apply the alert policy to",
                  isRepeatable: true,
                  args: { name: "tags" },
                },
                {
                  name: "--entities",
                  description:
                    "Resources to apply the alert against, such as a Droplet ID",
                  isRepeatable: true,
                  args: { name: "entities" },
                },
                {
                  name: "--slack-channels",
                  description: "A Slack channel to send alerts to",
                  isRepeatable: true,
                  args: { name: "slack-channels" },
                },
                slackUrlsOption,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete an alert policy",
              args: { name: "alert-policy-uuid", isVariadic: true },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete an alert policy without a confirmation prompt",
                },
              ],
            },
            {
              name: "get",
              description: "Retrieve information about an alert policy",
              args: { name: "alert-policy-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all alert policies",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "update",
              description: "Update an alert policy",
              args: { name: "alert-policy-uuid", isVariadic: true },
              options: [
                {
                  name: "--description",
                  description: "A description of the alert policy",
                  args: { name: "description" },
                },
                {
                  name: "--type",
                  description: "The type of alert policy",
                  args: { name: "type" },
                },
                {
                  name: "--compare",
                  description: "The comparator of the alert policy",
                  args: {
                    name: "compare",
                    suggestions: ["GreaterThan", "LessThan"],
                  },
                },
                {
                  name: "--window",
                  description:
                    "The window to apply the alert policy conditions against",
                  args: { name: "window", default: "5m" },
                },
                {
                  name: "--value",
                  description:
                    "The value of the alert policy to compare against",
                  args: { name: "value" },
                },
                {
                  name: "--enabled",
                  description: "Whether the alert policy is enabled",
                },
                {
                  name: "--emails",
                  description: "Email addresses to send alerts to",
                  isRepeatable: true,
                  args: { name: "emails" },
                },
                {
                  name: "--tags",
                  description: "Tags to apply the alert against",
                  isRepeatable: true,
                  args: { name: "tags" },
                },
                {
                  name: "--entities",
                  description: "Resources to apply the policy to",
                  isRepeatable: true,
                  args: { name: "entities" },
                },
                {
                  name: "--slack-channels",
                  description:
                    "A Slack channel to send alerts to, for example, production-alerts",
                  isRepeatable: true,
                  args: { name: "slack-channels" },
                },
                slackUrlsOption,
              ],
            },
          ],
        },
        {
          name: "uptime",
          description: "Display commands to manage uptime checks",
          subcommands: [
            {
              name: ["alert", "alerts"],
              description: "Display commands to manage uptime alerts",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create an uptime alert",
                  args: { name: "uptime-check-id" },
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--name",
                      description: "The name of the alert",
                      isRequired: true,
                      args: { name: "name" },
                    },
                    {
                      name: "--type",
                      description: "The metric to alert on",
                      isRequired: true,
                      args: {
                        name: "type",
                        suggestions: [
                          "latency",
                          "down",
                          "down_global",
                          "ssl_expiry",
                        ],
                      },
                    },
                    {
                      name: "--threshold",
                      description:
                        "The threshold at which to trigger the alert",
                      args: { name: "threshold" },
                    },
                    {
                      name: "--comparison",
                      description:
                        "A comparison operator used against the alert's threshold",
                      args: {
                        name: "comparison",
                        suggestions: ["greater_than", "less_than"],
                      },
                    },
                    {
                      name: "--emails",
                      description: "Emails addresses to send alerts",
                      isRepeatable: true,
                      args: { name: "emails" },
                    },
                    {
                      name: "--slack-channels",
                      description:
                        "Slack channels to send alerts to, for example, production-alerts",
                      isRepeatable: true,
                      args: { name: "slack-channels" },
                    },
                    slackUrlsOption,
                    {
                      name: "--period",
                      description:
                        "The period of time the threshold must be exceeded to trigger an alert",
                      isRequired: true,
                      args: {
                        name: "period",
                        suggestions: [
                          "2m",
                          "3m",
                          "5m",
                          "10m",
                          "15m",
                          "30m",
                          "1h",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: ["delete", "d", "del", "rm"],
                  description: "Delete an uptime alert",
                  args: [
                    { name: "uptime-check-id" },
                    { name: "uptime-alert-id" },
                  ],
                },
                {
                  name: ["get", "g"],
                  description: "Get uptime alert",
                  args: [
                    { name: "uptime-check-id" },
                    { name: "uptime-alert-id" },
                  ],
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["list", "ls"],
                  description: "List uptime alerts",
                  args: { name: "uptime-check-id" },
                  options: [formatOption, noHeaderOption],
                },
                {
                  name: ["update", "u"],
                  description: "Update an uptime alert",
                  args: [
                    { name: "uptime-check-id" },
                    { name: "uptime-alert-id" },
                  ],
                  options: [
                    formatOption,
                    noHeaderOption,
                    {
                      name: "--name",
                      description: "The name of the alert",
                      isRequired: true,
                      args: { name: "name" },
                    },
                    {
                      name: "--type",
                      description: "The metric to alert on",
                      isRequired: true,
                      args: {
                        name: "type",
                        suggestions: [
                          "latency",
                          "down",
                          "down_global",
                          "ssl_expiry",
                        ],
                      },
                    },
                    {
                      name: "--threshold",
                      description:
                        "The threshold at which to trigger the alert",
                      args: { name: "threshold" },
                    },
                    {
                      name: "--comparison",
                      description:
                        "A comparison operator used against the alert's threshold",
                      args: {
                        name: "comparison",
                        suggestions: ["greater_than", "less_than"],
                      },
                    },
                    {
                      name: "--emails",
                      description: "Emails addresses to send alerts",
                      isRepeatable: true,
                      args: { name: "emails" },
                    },
                    {
                      name: "--slack-channels",
                      description:
                        "Slack channels to send uptime alerts to, for example, production-alerts",
                      isRepeatable: true,
                      args: { name: "slack-channels" },
                    },
                    slackUrlsOption,
                    {
                      name: "--period",
                      description:
                        "The period of time the threshold must be exceeded to trigger an alert",
                      isRequired: true,
                      args: {
                        name: "period",
                        suggestions: [
                          "2m",
                          "3m",
                          "5m",
                          "10m",
                          "15m",
                          "30m",
                          "1h",
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: ["create", "c"],
              description: "Create an uptime check",
              args: { name: "uptime-check-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--target",
                  description: "A valid URL to monitor",
                  isRequired: true,
                  args: { name: "target" },
                },
                {
                  name: "--type",
                  description: "The protocol to use to monitor the target URL",
                  args: {
                    name: "type",
                    suggestions: ["ping", "http", "https"],
                  },
                },
                {
                  name: "--regions",
                  description:
                    "A comma-separated list of regions to monitor the target from",
                  isRepeatable: true,
                  args: { name: "regions" },
                },
                {
                  name: "--enabled",
                  description: "Whether or not the uptime check is enabled",
                },
              ],
            },
            {
              name: ["delete", "d", "del", "rm"],
              description: "Delete an uptime check",
              args: { name: "uptime-check-id" },
            },
            {
              name: ["get", "g"],
              description: "Get an uptime check",
              args: { name: "uptime-check-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List uptime checks",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update an uptime check",
              args: { name: "uptime-check-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "A name for the check",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--target",
                  description: "A valid URL to monitor",
                  isRequired: true,
                  args: { name: "target" },
                },
                {
                  name: "--type",
                  description: "The protocol to use to monitor the target URL",
                  isRequired: true,
                  args: {
                    name: "type",
                    suggestions: ["ping", "http", "https"],
                  },
                },
                {
                  name: "--regions",
                  description:
                    "A comma-separated list of regions to monitor the target from",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "regions" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "network",
      description: "Display commands that manage network products",
      subcommands: [
        {
          name: "attachment",
          description: "Display commands that manage Partner Attachment",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a Partner Attachment",
              options: [
                formatOption,
                noHeaderOption,
                typeOption,
                {
                  name: "--name",
                  description: "Name of the Partner Attachment",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--connection-bandwidth-in-mbps",
                  description: "Connection Bandwidth in Mbps",
                  isRequired: true,
                  args: { name: "connection-bandwidth-in-mbps" },
                },
                {
                  name: "--region",
                  description: "Region",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: "--naas-provider",
                  description: "NaaS Provider",
                  isRequired: true,
                  args: { name: "naas-provider" },
                },
                {
                  name: "--vpc-ids",
                  description: "VPC network IDs",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "vpc-ids" },
                },
                {
                  name: "--bgp-local-asn",
                  description: "BGP Local ASN",
                  args: { name: "bgp-local-asn" },
                },
                {
                  name: "--bgp-local-router-ip",
                  description: "BGP Local Router IP",
                  args: { name: "bgp-local-router-ip" },
                },
                {
                  name: "--bgp-peer-asn",
                  description: "BGP Peer ASN",
                  args: { name: "bgp-peer-asn" },
                },
                {
                  name: "--bgp-peer-router-ip",
                  description: "BGP Peer Router IP",
                  args: { name: "bgp-peer-router-ip" },
                },
                {
                  name: "--bgp-auth-key",
                  description: "BGP Auth Key",
                  args: { name: "bgp-auth-key" },
                },
                {
                  name: "--redundancy-zone",
                  description: "Redundancy Zone (optional)",
                  args: { name: "redundancy-zone" },
                },
                {
                  name: "--parent-uuid",
                  description: "HA Parent UUID (optional)",
                  args: { name: "parent-uuid" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Deletes a Partner Attachment",
              args: { name: "partner-attachment-id" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the Partner Attachment without any confirmation prompt",
                },
                {
                  name: "--wait",
                  description:
                    "Boolean that specifies whether to wait for a Partner Attachment deletion to complete before returning control to the terminal",
                },
                waitTimeoutOption,
                typeOption,
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieves a Partner Attachment",
              args: { name: "partner-attachment-id" },
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["get-bgp-auth-key", "g-bgp-auth-key"],
              description: "Retrieves a BGP Auth key of Partner Attachment",
              args: { name: "partner-attachment-id" },
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["get-service-key", "g-service-key"],
              description: "Retrieves a Service key of Partner Attachment",
              args: { name: "partner-attachment-id" },
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["list", "ls"],
              description: "List Partner Attachment",
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["list-routes", "ls-routes"],
              description: "List Partner Attachment Routes",
              args: { name: "partner-attachment-id" },
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["regenerate-service-key", "regen-service-key"],
              description: "Regenerates a Service key of Partner Attachment",
              args: { name: "partner-attachment-id" },
              options: [formatOption, noHeaderOption, typeOption],
            },
            {
              name: ["update", "u"],
              description:
                "Update a Partner Attachments name and configuration",
              args: { name: "partner-attachment-id" },
              options: [
                typeOption,
                {
                  name: "--name",
                  description: "The Partner Attachment name",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--vpc-ids",
                  description: "The Partner Attachment vpc ids",
                  isRequired: true,
                  args: { name: "vpc-ids" },
                },
              ],
            },
          ],
        },
        {
          name: ["byoip-prefix", "byoip-prefixes"],
          description: "Display commands to manage BYOIP Prefixes",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new BYOIP Prefix",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--region",
                  description: "The region where to create the byoip prefix",
                  args: { name: "region" },
                },
                {
                  name: "--prefix",
                  description: "The prefix to create",
                  args: { name: "prefix" },
                },
                {
                  name: "--signature",
                  description: "The signature for the prefix",
                  args: { name: "signature" },
                },
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a BYOIP Prefix",
              args: { name: "prefix-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Deletes the BYOIP Prefix without confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve information about a byoip prefix",
              args: { name: "prefix-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all BYOIP Prefixes on your account",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["resource", "resources"],
              description: "List all the Resource for a BYOIP Prefix",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Update a BYOIP Prefix",
              args: { name: "prefix-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--advertise",
                  description:
                    "Enable or disable advertisement of the BYOIP Prefix",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "nfs",
      description: "Display commands to manage network file storage",
      subcommands: [
        {
          name: "access-point",
          description: "Display commands for NFS access points",
          subcommands: [
            {
              name: "create",
              description: "Create an NFS access point",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--share-id",
                  description: "The ID of the NFS share",
                  isRequired: true,
                  args: { name: "share-id" },
                },
                {
                  name: ["-n", "--name"],
                  description: "The access point name",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--path",
                  description:
                    "The export path for the access point, must start with /",
                  isRequired: true,
                  args: { name: "path", template: "folders" },
                },
                {
                  name: "--protocols",
                  description: "Allowed protocols (NFS, NFS4)",
                  isRepeatable: true,
                  args: { name: "protocols" },
                },
                {
                  name: "--squash-config",
                  description:
                    "Squash mode (NO_SQUASH, ROOT_SQUASH, ALL_SQUASH)",
                  args: { name: "squash-config", default: "ROOT_SQUASH" },
                },
                {
                  name: "--anonuid",
                  description: "Anon uid for squashed users",
                  args: { name: "anonuid", default: "65534" },
                },
                {
                  name: "--anongid",
                  description: "Anon gid for squashed users",
                  args: { name: "anongid", default: "65534" },
                },
                {
                  name: "--identity-enforcement-enabled",
                  description: "Enable identity enforcement for the export",
                },
                {
                  name: "--vpc-id",
                  description: "The VPC ID for this access point",
                  isRequired: true,
                  args: { name: "vpc-id" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete an NFS access point",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--id",
                  description: "The ID of the NFS access point",
                  isRequired: true,
                  args: { name: "id" },
                },
              ],
            },
            {
              name: "get",
              description: "Get an NFS access point",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--id",
                  description: "The ID of the NFS access point",
                  isRequired: true,
                  args: { name: "id" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List NFS access points for a share",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--share-id",
                  description: "The ID of the NFS share",
                  isRequired: true,
                  args: { name: "share-id" },
                },
                {
                  name: "--status",
                  description:
                    "Optional status filter (ACCESS_POINT_CREATING, ACCESS_POINT_ACTIVE, ACCESS_POINT_FAILED, ACCESS_POINT_DELETED)",
                  args: { name: "status" },
                },
              ],
            },
          ],
        },
        {
          name: "attach",
          description: "Attach an NFS share to a VPC",
          options: [
            idOption,
            regionOption3,
            {
              name: "--vpc-id",
              description: "The id of the VPC we want to attach NFS share to",
              isRequired: true,
              args: { name: "vpc-id" },
            },
            waitOption2,
            waitTimeoutOption,
          ],
        },
        {
          name: "create",
          description: "Create an NFS share",
          options: [
            {
              name: ["-n", "--name"],
              description: "The name of the NFS share",
              isRequired: true,
              args: { name: "name" },
            },
            regionOption3,
            {
              name: ["-s", "--size"],
              description: "The size of the NFS share in GiB",
              isRequired: true,
              args: { name: "size" },
            },
            {
              name: "--vpc-ids",
              description:
                "The list of VPC IDs that should be able to access the share",
              isRequired: true,
              isRepeatable: true,
              args: { name: "vpc-ids" },
            },
            {
              name: "--performance-tier",
              description: "The performance tier of the NFS share",
              isRequired: true,
              args: { name: "performance-tier" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete an NFS share by ID",
          options: [idOption, regionOption3],
        },
        {
          name: "detach",
          description: "Detach an NFS share from a VPC",
          options: [
            idOption,
            regionOption3,
            {
              name: "--vpc-id",
              description: "The id of the VPC we want to detach NFS share from",
              isRequired: true,
              args: { name: "vpc-id" },
            },
            waitOption2,
            waitTimeoutOption,
          ],
        },
        {
          name: "get",
          description: "Get an NFS share by ID",
          options: [formatOption, noHeaderOption, idOption, regionOption3],
        },
        {
          name: ["list", "ls"],
          description: "List all NFS shares by region",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: ["-r", "--region"],
              description: "The region where the NFS shares reside",
              isRequired: true,
              args: { name: "region" },
            },
          ],
        },
        {
          name: "reassign",
          description: "Reassign an NFS share between VPCs",
          options: [
            idOption,
            {
              name: "--old-vpc-id",
              description: "The id of the VPC we want to detach NFS share from",
              isRequired: true,
              args: { name: "old-vpc-id" },
            },
            {
              name: "--new-vpc-id",
              description: "The id of the VPC we want to attach NFS share to",
              isRequired: true,
              args: { name: "new-vpc-id" },
            },
            waitOption2,
            waitTimeoutOption,
          ],
        },
        {
          name: "resize",
          description: "Resize an NFS share",
          options: [
            idOption,
            regionOption3,
            {
              name: ["-s", "--size"],
              description: "The size of the NFS share in GiB",
              isRequired: true,
              args: { name: "size" },
            },
            waitOption2,
            waitTimeoutOption,
          ],
        },
        {
          name: "snapshot",
          description: "Display commands for NFS share's snapshots",
          subcommands: [
            {
              name: "create",
              description: "Creates a snapshot of the NFS share",
              options: [
                {
                  name: ["-n", "--name"],
                  description: "The name of the NFS snapshot",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--share-id",
                  description: "The ID of the NFS share to snapshot",
                  isRequired: true,
                  args: { name: "share-id" },
                },
                regionOption3,
                waitOption2,
                waitTimeoutOption,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete an NFS share by ID",
              options: [
                {
                  name: "--id",
                  description: "The ID of the NFS snapshot",
                  isRequired: true,
                  args: { name: "id" },
                },
                regionOption3,
              ],
            },
            {
              name: "get",
              description: "Get an NFS snapshot by ID",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--id",
                  description: "The ID of the NFS snapshot",
                  isRequired: true,
                  args: { name: "id" },
                },
                {
                  name: ["-r", "--region"],
                  description: "The region where the NFS snapshot resides",
                  isRequired: true,
                  args: { name: "region" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all NFS snapshots by region",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--share-id",
                  description: "The NFS share ID to which snapshots belong",
                  args: { name: "share-id" },
                },
                {
                  name: ["-r", "--region"],
                  description: "The region where the NFS shares reside",
                  isRequired: true,
                  args: { name: "region" },
                },
              ],
            },
          ],
        },
        {
          name: "switch-performance-tier",
          description: "Switch the performance tier of an NFS share",
          options: [
            idOption,
            {
              name: "--performance-tier",
              description: "The performance tier of the NFS share",
              isRequired: true,
              args: { name: "performance-tier" },
            },
            waitOption2,
            waitTimeoutOption,
          ],
        },
      ],
    },
    {
      name: "prepayment",
      description:
        "Display commands for retrieving prepayment configuration and status",
      subcommands: [
        {
          name: "config",
          description: "Retrieve your prepayment configuration",
          options: [formatOption, noHeaderOption],
        },
        {
          name: "status",
          description: "Retrieve your prepayment status",
          options: [formatOption, noHeaderOption],
        },
      ],
    },
    {
      name: "projects",
      description: "Manage projects and assign resources to them",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a new project",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--name",
              description: "The project's name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--purpose",
              description: "The project's purpose",
              isRequired: true,
              args: { name: "purpose" },
            },
            {
              name: "--description",
              description: "A description of the project",
              args: { name: "description" },
            },
            {
              name: "--environment",
              description: "The environment in which your project resides",
              args: {
                name: "environment",
                suggestions: ["Development", "Staging", "Production"],
              },
            },
          ],
        },
        {
          name: ["delete", "d", "rm"],
          description: "Delete the specified project",
          args: {
            name: "project-id",
            isVariadic: true,
            generators: projectGenerator,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Deletes the project without confirmation",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve details for a specific project",
          args: { name: "project-id", generators: projectGenerator },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List existing projects",
          options: [formatOption, noHeaderOption],
        },
        {
          name: "resources",
          description: "Manage resources assigned to a project",
          subcommands: [
            {
              name: ["assign", "a"],
              description: "Assign one or more resources to a project",
              args: { name: "project-id", generators: projectGenerator },
              options: [
                {
                  name: "--resource",
                  description:
                    "URNs specifying resources to assign to the project",
                  isRepeatable: true,
                  args: { name: "resource" },
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieve a resource by its URN",
              args: { name: "urn" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List resources assigned to a project",
              args: { name: "project-id", generators: projectGenerator },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update an existing project",
          args: { name: "project-id", generators: projectGenerator },
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--name",
              description: "The project's name",
              args: { name: "name" },
            },
            {
              name: "--purpose",
              description: "The project's purpose",
              args: { name: "purpose" },
            },
            {
              name: "--description",
              description: "A description of the project",
              args: { name: "description" },
            },
            {
              name: "--environment",
              description: "The environment in which your project resides",
              args: {
                name: "environment",
                suggestions: ["Development", "Staging", "Production"],
              },
            },
            {
              name: "--is_default",
              description: "Sets the specified project as your default project",
            },
          ],
        },
      ],
    },
    {
      name: ["registries", "regs", "rs"],
      description:
        "Display commands for working with multiple container registries",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a private container registry",
          args: { name: "registry-name" },
          options: [
            {
              name: "--subscription-tier",
              description: "Subscription tier for the new registry",
              isRequired: true,
              args: { name: "subscription-tier", default: "basic" },
            },
            {
              name: "--region",
              description:
                "A slug indicating which datacenter region the registry reside in",
              args: { name: "region" },
            },
            {
              name: "--enable-insights-logs",
              description:
                "Opts the registry in to sending its logs to Insights",
            },
          ],
        },
        {
          name: ["delete", "d", "del", "rm"],
          description: "Delete a registry",
          args: { name: "registry-name" },
          options: [
            {
              name: ["-f", "--force"],
              description: "Delete registry without confirmation prompt",
            },
          ],
        },
        {
          name: ["docker-config", "config"],
          description: "Generate a Docker auth configuration for a registry",
          args: { name: "registry-name" },
          options: [
            {
              name: "--read-write",
              description:
                "Generates credentials that can push to your registry",
            },
            expirySecondsOption,
          ],
        },
        {
          name: ["garbage-collection", "gc"],
          description:
            "Display commands for garbage collection for multiple container registries",
          subcommands: [
            {
              name: ["cancel", "c"],
              description:
                "Cancel the currently-active garbage collection for a container registry",
              args: [{ name: "registry-name" }, { name: "gc-uuid" }],
            },
            {
              name: ["get-active", "ga", "g"],
              description:
                "Retrieve information about the currently-active garbage collection for a container registry",
              args: { name: "registry-name" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls", "l"],
              description:
                "Retrieve information about past garbage collections for a container registry",
              args: { name: "registry-name" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["start", "s"],
              description: "Start garbage collection for a container registry",
              args: { name: "registry-name" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--include-untagged-manifests",
                  description:
                    "Include untagged manifests in garbage collection",
                },
                {
                  name: "--exclude-unreferenced-blobs",
                  description:
                    "Exclude unreferenced blobs from garbage collection",
                },
                {
                  name: ["-f", "--force"],
                  description:
                    "Run garbage collection without confirmation prompt",
                },
              ],
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Get information about a registry",
          args: { name: "registry-name" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["kubernetes-manifest", "k8s"],
          description: "Generate a Kubernetes secret manifest for a registry",
          args: { name: "registry-name" },
          options: [
            {
              name: "--name",
              description: "The secret's name",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description: "The Kubernetes namespace to hold the secret",
              args: { name: "namespace", default: "kube-system" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all registries in your account",
          options: [formatOption, noHeaderOption],
        },
        {
          name: "login",
          description: "Log in Docker to a container registry",
          args: { name: "registry-name" },
          options: [
            expirySecondsOption,
            {
              name: "--read-only",
              description:
                "Sets the DigitalOcean API token generated by the login command to read-only, causing any push operations to fail",
            },
            {
              name: "--never-expire",
              description:
                "Sets the DigitalOcean API token generated by the login command to never expire",
            },
          ],
        },
        {
          name: "logout",
          description: "Log out Docker from a container registry",
          args: { name: "registry-name" },
          options: [
            {
              name: "--authorization-server-endpoint",
              description:
                "The endpoint of the OAuth authorization server used to revoke credentials on logout",
              args: {
                name: "authorization-server-endpoint",
                default: "https://cloud.digitalocean.com/v1/oauth/revoke",
              },
            },
          ],
        },
        {
          name: ["options", "opts", "o"],
          description:
            "List available container registry options for multiple registries",
          subcommands: [
            {
              name: ["available-regions", "regions"],
              description: "Lists available container registry regions",
            },
            {
              name: ["subscription-tiers", "tiers"],
              description:
                "Lists available container registry subscription tiers",
            },
          ],
        },
        {
          name: ["repository", "repo", "r"],
          description:
            "Display commands for working with repositories in multiple container registries",
          subcommands: [
            {
              name: ["delete-manifest", "dm"],
              description:
                "Delete one or more container repository manifests by digest",
              args: [
                { name: "registry-name" },
                { name: "repository" },
                { name: "manifest-digest", isVariadic: true },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Deletes manifest without confirmation prompt",
                },
              ],
            },
            {
              name: ["delete-tag", "dt"],
              description: "Delete one or more container repository tags",
              args: [
                { name: "registry-name" },
                { name: "repository" },
                { name: "tag", isVariadic: true },
              ],
              options: [forceOption2],
            },
            {
              name: ["list", "ls"],
              description: "List repositories for a container registry",
              hidden: true,
              args: { name: "registry-name" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list-manifests", "lm"],
              description:
                "List manifests for a repository in a container registry",
              args: [{ name: "registry-name" }, { name: "repository" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list-tags", "lt"],
              description: "List tags for a repository in a container registry",
              args: [{ name: "registry-name" }, { name: "repository" }],
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list-v2", "ls2"],
              description: "List repositories for a container registry",
              args: { name: "registry-name" },
              options: [formatOption, noHeaderOption],
            },
          ],
        },
      ],
    },
    {
      name: ["registry", "reg", "r"],
      description: "Display commands for working with container registries",
      subcommands: [
        {
          name: "create",
          description: "Create a private container registry",
          args: { name: "registry-name" },
          options: [
            {
              name: "--subscription-tier",
              description: "Subscription tier for the new registry",
              isRequired: true,
              args: { name: "subscription-tier", default: "basic" },
            },
            {
              name: "--region",
              description:
                "A slug indicating which datacenter region the registry reside in",
              args: { name: "region" },
            },
            {
              name: "--enable-insights-logs",
              description:
                "Opts the registry in to sending its logs to Insights",
            },
          ],
        },
        {
          name: ["delete", "d", "del", "rm"],
          description: "Delete a container registry",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force deletes the registry without confirmation prompt",
            },
          ],
        },
        {
          name: ["docker-config", "config"],
          description: "Generate a Docker auth configuration for a registry",
          options: [
            {
              name: "--read-write",
              description:
                "Generates credentials that can push to your registry",
            },
            expirySecondsOption,
          ],
        },
        {
          name: ["garbage-collection", "gc"],
          description:
            "Display commands for garbage collection for a container registry",
          subcommands: [
            {
              name: ["cancel", "c"],
              description:
                "Cancel the currently-active garbage collection for a container registry",
            },
            {
              name: ["get-active", "ga", "g"],
              description:
                "Retrieve information about the currently-active garbage collection for a container registry",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls", "l"],
              description:
                "Retrieve information about past garbage collections for a container registry",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["start", "s"],
              description: "Start garbage collection for a container registry",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--include-untagged-manifests",
                  description:
                    "Include untagged manifests in garbage collection",
                },
                {
                  name: "--exclude-unreferenced-blobs",
                  description:
                    "Exclude unreferenced blobs from garbage collection",
                },
                {
                  name: ["-f", "--force"],
                  description:
                    "Run garbage collection without confirmation prompt",
                },
              ],
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve details about a container registry",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["kubernetes-manifest", "k8s"],
          description: "Generate a Kubernetes secret manifest for a registry",
          options: [
            {
              name: "--name",
              description: "The secret's name",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description: "The Kubernetes namespace to hold the secret",
              args: { name: "namespace", default: "kube-system" },
            },
          ],
        },
        {
          name: "login",
          description: "Log in Docker to a container registry",
          options: [
            expirySecondsOption,
            {
              name: "--read-only",
              description:
                "Sets the DigitalOcean API token generated by the login command to read-only, causing any push operations to fail",
            },
            {
              name: "--never-expire",
              description:
                "Sets the DigitalOcean API token generated by the login command to never expire",
            },
          ],
        },
        {
          name: "logout",
          description: "Log out Docker from a container registry",
          options: [
            {
              name: "--authorization-server-endpoint",
              description:
                "The endpoint of the OAuth authorization server used to revoke credentials on logout",
              args: {
                name: "authorization-server-endpoint",
                default: "https://cloud.digitalocean.com/v1/oauth/revoke",
              },
            },
          ],
        },
        {
          name: ["options", "opts", "o"],
          description: "List available container registry options",
          subcommands: [
            {
              name: ["available-regions", "regions"],
              description: "Lists available container registry regions",
            },
            {
              name: ["subscription-tiers", "tiers"],
              description:
                "Lists available container registry subscription tiers",
            },
          ],
        },
        {
          name: ["repository", "repo", "r"],
          description:
            "Display commands for working with repositories in a container registry",
          subcommands: [
            {
              name: ["delete-manifest", "dm"],
              description:
                "Delete one or more container repository manifests by digest",
              args: [
                { name: "repository" },
                { name: "manifest-digest", isVariadic: true },
              ],
              options: [
                registryOption,
                {
                  name: ["-f", "--force"],
                  description: "Deletes manifest without confirmation prompt",
                },
              ],
            },
            {
              name: ["delete-tag", "dt"],
              description: "Delete one or more container repository tags",
              args: [{ name: "repository" }, { name: "tag", isVariadic: true }],
              options: [registryOption, forceOption2],
            },
            {
              name: ["list", "ls"],
              description: "List repositories for a container registry",
              hidden: true,
              options: [formatOption, noHeaderOption, registryOption],
            },
            {
              name: ["list-manifests", "lm"],
              description:
                "List manifests for a repository in a container registry",
              args: { name: "repository" },
              options: [formatOption, noHeaderOption, registryOption],
            },
            {
              name: ["list-tags", "lt"],
              description: "List tags for a repository in a container registry",
              args: { name: "repository" },
              options: [formatOption, noHeaderOption, registryOption],
            },
            {
              name: ["list-v2", "ls2"],
              description: "List repositories for a container registry",
              options: [formatOption, noHeaderOption, registryOption],
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Display commands to manage Secrets Manager",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a secret",
          args: { name: "name" },
          options: [
            formatOption,
            noHeaderOption,
            regionOption2,
            valueOption,
            fromEnvFileOption,
          ],
        },
        {
          name: ["delete", "d", "rm"],
          description: "Delete a secret",
          args: { name: "name" },
          options: [
            regionOption2,
            {
              name: ["-f", "--force"],
              description: "Delete the secret without a confirmation prompt",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Get a secret",
          args: { name: "name" },
          options: [
            formatOption,
            noHeaderOption,
            regionOption2,
            {
              name: "--key",
              description: "Return only the value for this key",
              args: { name: "key" },
            },
            {
              name: "--kvs",
              description:
                "Reveal secret values instead of masking them, displayed as KEY=VALUE pairs",
            },
            {
              name: "--raw",
              description:
                "Write the value for --key to stdout with no formatting",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List secrets",
          options: [formatOption, noHeaderOption],
        },
        {
          name: "list-versions",
          description: "List secret versions",
          args: { name: "name" },
          options: [formatOption, noHeaderOption, regionOption2],
        },
        {
          name: "restore",
          description: "Restore a secret",
          args: { name: "name" },
          options: [regionOption2],
        },
        {
          name: "set",
          description: "Set keys on a secret",
          args: { name: "name" },
          options: [
            formatOption,
            noHeaderOption,
            regionOption2,
            valueOption,
            fromEnvFileOption,
          ],
        },
        {
          name: "unset",
          description: "Remove keys from a secret",
          args: { name: "name" },
          options: [
            formatOption,
            noHeaderOption,
            regionOption2,
            {
              name: "--key",
              description: "Key to remove (repeatable)",
              isRequired: true,
              isRepeatable: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "update",
          description: "Replace a secret",
          args: { name: "name" },
          options: [
            formatOption,
            noHeaderOption,
            regionOption2,
            { name: "--replace", description: "Replace the entire secret" },
            {
              name: ["-f", "--force"],
              description:
                "Replace the secret without prompting when keys would be removed",
            },
            valueOption,
            fromEnvFileOption,
          ],
        },
      ],
    },
    {
      name: "security",
      description: "Display commands to manage CSPM scans",
      subcommands: [
        {
          name: ["scans", "scan"],
          description: "Display commands for managing CSPM scans",
          subcommands: [
            {
              name: "affected-resources",
              description: "List scan finding affected resources",
              args: { name: "scan-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--finding-uuid",
                  description: "Finding UUID to show affected resources for",
                  isRequired: true,
                  args: { name: "finding-uuid" },
                },
              ],
            },
            {
              name: ["create", "c"],
              description: "Create a CSPM scan",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--wait",
                  description:
                    "Boolean that specifies whether to wait for a scan to complete before returning control to the terminal",
                },
                waitTimeoutOption,
              ],
            },
            {
              name: ["get", "g"],
              description: "Get a CSPM scan",
              args: { name: "scan-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--type",
                  description: "Filter findings by type",
                  args: { name: "type" },
                },
                {
                  name: "--severity",
                  description: "Filter findings by severity",
                  args: { name: "severity" },
                },
              ],
            },
            {
              name: "latest",
              description: "Get the latest CSPM scan",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--type",
                  description: "Filter findings by type",
                  args: { name: "type" },
                },
                {
                  name: "--severity",
                  description: "Filter findings by severity",
                  args: { name: "severity" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List CSPM scans",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
      ],
    },
    {
      name: ["serverless", "sandbox", "sbx", "sls"],
      description: "Develop, test, and deploy serverless functions",
      subcommands: [
        {
          name: ["activations", "activation", "actv"],
          description: "Retrieve activation records",
          subcommands: [
            {
              name: "get",
              description: "Retrieve information about an activation",
              args: { name: "activationId", isOptional: true },
              options: [
                {
                  name: ["-l", "--last"],
                  description: "Retrieve the most recent activation (default)",
                },
                skipOption,
                {
                  name: ["-g", "--logs"],
                  description:
                    "Retrieve only the logs, stripped of time stamps and stream identifier",
                },
                {
                  name: ["-r", "--result"],
                  description:
                    "Retrieve only the resulting output of a function",
                },
                {
                  name: ["-f", "--function"],
                  description: "Retrieve activations for a specific function",
                  args: { name: "function" },
                },
                {
                  name: ["-q", "--quiet"],
                  description:
                    "Suppress the last activation information header",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Lists activations for which records exist",
              args: { name: "function_name", isOptional: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-l", "--limit"],
                  description:
                    "Limit the number of activations returned to the specified amount",
                  args: { name: "limit", default: "30" },
                },
                skipOption,
                {
                  name: "--since",
                  description:
                    "Retrieve activations invoked after the specified date-time, in UNIX timestamp format measured in milliseconds",
                  args: { name: "since" },
                },
                {
                  name: "--upto",
                  description:
                    "Retrieve activations invoked before the specified date-time; in UNIX timestamp format measured in milliseconds",
                  args: { name: "upto" },
                },
                {
                  name: "--count",
                  description: "Return only the total number of activations",
                },
                {
                  name: ["-f", "--full"],
                  description: "Include the full activation description",
                },
              ],
            },
            {
              name: "logs",
              description: "Retrieve the logs for an activation",
              args: { name: "activationId", isOptional: true },
              options: [
                {
                  name: ["-f", "--function"],
                  description: "Retrieve the logs for a specific function",
                  args: { name: "function" },
                },
                {
                  name: ["-p", "--package"],
                  description: "Retrieve the logs for a specific package",
                  args: { name: "package" },
                },
                {
                  name: ["-l", "--last"],
                  description:
                    "Retrieve logs for the most recent activation (default)",
                  hidden: true,
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Limit the number of logs returned to the specified amount, up to 200",
                  args: { name: "limit", default: "1" },
                },
                {
                  name: ["-r", "--strip"],
                  description:
                    "Retrieves only the first line of output in the log, stripped of time stamps",
                },
                {
                  name: "--follow",
                  description: "Continuously return log information",
                },
              ],
            },
            {
              name: "result",
              description: "Retrieve the output for an activation",
              args: { name: "activationId", isOptional: true },
              options: [
                {
                  name: ["-l", "--last"],
                  description:
                    "Retrieve the most recent activation result (default)",
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Limit the number of results return to the specified number",
                  args: { name: "limit", default: "1" },
                },
                skipOption,
                {
                  name: ["-f", "--function"],
                  description: "Retrieve the results for a specific function",
                  args: { name: "function" },
                },
                {
                  name: ["-q", "--quiet"],
                  description: "Suppress last activation information header",
                },
              ],
            },
          ],
        },
        {
          name: "connect",
          description:
            "Connects local serverless support to a functions namespace",
          args: { name: "hint", isOptional: true },
          options: [
            { name: "--apihost", hidden: true, args: { name: "apihost" } },
            { name: "--auth", hidden: true, args: { name: "auth" } },
            {
              name: "--access-key",
              description: "Access key for direct serverless connection",
              args: { name: "access-key" },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy a functions project to your functions namespace",
          args: { name: "directory", template: "folders" },
          options: [
            {
              name: "--env",
              description: "Path to runtime environment file",
              args: { name: "env", template: "filepaths" },
            },
            {
              name: "--build-env",
              description: "Path to build-time environment file",
              args: { name: "build-env", template: "filepaths" },
            },
            {
              name: "--apihost",
              description: "API host to use",
              args: { name: "apihost" },
            },
            {
              name: "--auth",
              description: "OpenWhisk auth token to use",
              args: { name: "auth" },
            },
            { name: "--insecure", description: "Ignore SSL Certificates" },
            { name: "--verbose-build", description: "Display build details" },
            {
              name: "--verbose-zip",
              description:
                "Display start/end of zipping phase for each function",
            },
            {
              name: "--yarn",
              description: "Use yarn instead of npm for node builds",
            },
            {
              name: "--include",
              description: "Functions and/or packages to include",
              args: { name: "include" },
            },
            {
              name: "--exclude",
              description: "Functions and/or packages to exclude",
              args: { name: "exclude" },
            },
            { name: "--remote-build", description: "Run builds remotely" },
            {
              name: "--incremental",
              description: "Deploy only changes since last deploy",
            },
            { name: "--no-triggers", hidden: true },
          ],
        },
        {
          name: ["functions", "function", "fn"],
          description: "Work with the functions in your namespace",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieve the metadata or code of a deployed function",
              args: { name: "functionName" },
              options: [
                {
                  name: ["-r", "--url"],
                  description: "Retrieves function URL",
                },
                { name: "--code", description: "Retrieves the functions code" },
                {
                  name: ["-E", "--save-env"],
                  description:
                    "Saves the function's environment variables to a local file as key-value pairs",
                  args: { name: "save-env" },
                },
                {
                  name: ["-J", "--save-env-json"],
                  description:
                    "Saves the function's environment variables to a local file as JSON",
                  args: { name: "save-env-json" },
                },
                {
                  name: "--save",
                  description: "Saves the function's code to a local file",
                },
                {
                  name: "--save-as",
                  description: "Saves the file as the specified name",
                  args: { name: "save-as" },
                },
              ],
            },
            {
              name: "invoke",
              description: "Invokes a function",
              args: { name: "functionName" },
              options: [
                {
                  name: "--web",
                  description:
                    "Invokes the function as a web function and displays the result in your browser",
                },
                {
                  name: ["-p", "--param"],
                  description: "Key-value pairs of input parameters",
                  isRepeatable: true,
                  args: { name: "param" },
                },
                {
                  name: ["-P", "--param-file"],
                  description:
                    "A path to a file containing parameter values in JSON format, such as path/to/file.json",
                  args: { name: "param-file", template: "filepaths" },
                },
                {
                  name: ["-f", "--full"],
                  description:
                    "Waits for the function to complete and then outputs the function's response along with its complete activation record",
                },
                {
                  name: ["-n", "--no-wait"],
                  description:
                    "Asynchronously invokes the function and does not wait for the result to be returned",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Lists the functions in your functions namespace",
              args: { name: "packageName", isOptional: true },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-l", "--limit"],
                  description:
                    "Returns the specified number of functions in the result, starting with the most recently updated function",
                  args: { name: "limit" },
                },
                {
                  name: ["-s", "--skip"],
                  description:
                    "Excludes the specified number of functions from the result, starting with the most recently updated function",
                  args: { name: "skip" },
                },
                {
                  name: "--count",
                  description:
                    "Returns only the total number of functions in the namespace",
                },
                {
                  name: "--name-sort",
                  description: "Sorts results by name in alphabetical order",
                },
                {
                  name: ["-n", "--name"],
                  description: "Sorts results by name in alphabetical order",
                },
              ],
            },
          ],
        },
        {
          name: "get-metadata",
          description: "Obtain metadata of a functions project",
          args: { name: "directory", template: "folders" },
          options: [
            {
              name: "--env",
              description: "Path to environment file",
              args: { name: "env", template: "filepaths" },
            },
            {
              name: "--include",
              description: "Functions or packages to include",
              args: { name: "include" },
            },
            {
              name: "--exclude",
              description: "Functions or packages to exclude",
              args: { name: "exclude" },
            },
            { name: "--no-triggers" },
          ],
        },
        {
          name: "init",
          description:
            "Initialize a 'functions project' directory in your local file system",
          args: { name: "path", template: "folders" },
          options: [
            {
              name: ["-l", "--language"],
              description: "Language for the initial sample code",
              args: { name: "language", default: "javascript" },
            },
            {
              name: "--overwrite",
              description: "Clears and reuses an existing directory",
            },
          ],
        },
        { name: "install", description: "Installs the serverless support" },
        {
          name: ["key", "keys"],
          description: "Manage access keys for functions namespaces",
          subcommands: [
            {
              name: "create",
              description: "Creates a new access key",
              options: [
                {
                  name: ["-n", "--name"],
                  description: "Name for the access key",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: ["-e", "--expiration"],
                  description:
                    "Expiration period: <int>h, <int>d (min 1h), or never (e.g., 1h, 7d, 30d)",
                  isRequired: true,
                  args: { name: "expiration" },
                },
                namespaceOption,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Deletes an access key",
              args: { name: "access-key-id" },
              options: [
                namespaceOption,
                {
                  name: ["-f", "--force"],
                  description: "Skip confirmation prompt",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Lists access keys",
              options: [formatOption, noHeaderOption, namespaceOption],
            },
          ],
        },
        {
          name: ["namespaces", "namespace", "ns"],
          description: "Manage your functions namespaces",
          subcommands: [
            {
              name: "create",
              description: "Creates a namespace",
              options: [
                {
                  name: ["-r", "--region"],
                  description: "The region for the namespace",
                  isRequired: true,
                  args: { name: "region" },
                },
                {
                  name: ["-l", "--label"],
                  description: "The label for the namespace",
                  isRequired: true,
                  args: { name: "label" },
                },
                {
                  name: ["-n", "--no-connect"],
                  description:
                    "Don't immediately connect to the created namespace",
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Deletes a namespace",
              args: { name: "namespaceIdOrLabel" },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Just do it, omitting confirmatory prompt",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Lists your namespaces",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "list-regions",
              description: "Lists the accepted 'region' values",
            },
          ],
        },
        {
          name: "status",
          description: "Provide information about serverless support",
          options: [
            {
              name: ["-l", "--languages"],
              description:
                "Show available languages (if connected to the cloud)",
            },
            {
              name: "--version",
              description: "Just show the version, don't check status",
            },
            { name: "--credentials", hidden: true },
          ],
        },
        {
          name: ["triggers", "trigger", "trig"],
          description: "Manage triggers associated with your functions",
          hidden: true,
          subcommands: [
            {
              name: "disable",
              description: "Disable a trigger",
              args: { name: "triggerName" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "enable",
              description: "Enable a trigger",
              args: { name: "triggerName" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: "get",
              description: "Get the details for a trigger",
              args: { name: "triggerName" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Lists your triggers",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: ["-f", "--function"],
                  description: "List only triggers for the chosen function",
                  args: { name: "function" },
                },
              ],
            },
          ],
        },
        {
          name: "undeploy",
          description: "Removes resources from your functions namespace",
          args: {
            name: "package|function",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: ["-p", "--packages"],
              description: "Interpret simple name arguments as packages",
            },
            {
              name: "--triggers",
              description: "Interpret all arguments as triggers",
              hidden: true,
            },
            { name: "--all", description: "Remove all packages and functions" },
            {
              name: ["-f", "--force"],
              description:
                "Delete namespace resources without confirmation prompt",
              hidden: true,
            },
            { name: "--apihost", hidden: true, args: { name: "apihost" } },
            { name: "--auth", hidden: true, args: { name: "auth" } },
          ],
        },
        { name: "uninstall", description: "Removes the serverless support" },
        {
          name: "upgrade",
          description:
            "Upgrades serverless support to match this version of doctl",
        },
        {
          name: "watch",
          description:
            "Watch a functions project directory, deploying incrementally on change",
          args: { name: "directory", template: "folders" },
          options: [
            {
              name: "--env",
              description: "Path to runtime environment file",
              args: { name: "env", template: "filepaths" },
            },
            {
              name: "--build-env",
              description: "Path to build-time environment file",
              args: { name: "build-env", template: "filepaths" },
            },
            {
              name: "--apihost",
              description: "API host to use",
              args: { name: "apihost" },
            },
            {
              name: "--auth",
              description: "OpenWhisk auth token to use",
              args: { name: "auth" },
            },
            { name: "--insecure", description: "Ignore SSL Certificates" },
            { name: "--verbose-build", description: "Display build details" },
            {
              name: "--verbose-zip",
              description:
                "Display start/end of zipping phase for each function",
            },
            {
              name: "--yarn",
              description: "Use yarn instead of npm for node builds",
            },
            {
              name: "--include",
              description: "Functions and/or packages to include",
              args: { name: "include" },
            },
            {
              name: "--exclude",
              description: "Functions and/or packages to exclude",
              args: { name: "exclude" },
            },
            { name: "--remote-build", description: "Run builds remotely" },
          ],
        },
      ],
    },
    {
      name: ["serverless-inference", "inference", "si"],
      description: "Call DigitalOcean serverless inference APIs",
      subcommands: [
        {
          name: ["async-invoke", "async"],
          description: "Display commands for managing async model invocations",
          subcommands: [
            {
              name: "create",
              description: "Start an async invocation",
              options: [
                {
                  name: ["-m", "--model"],
                  description:
                    "Fal model ID (required unless --request is set)",
                  args: { name: "model" },
                },
                {
                  name: "--prompt",
                  description:
                    "Text prompt for image generation (e.g. fal-ai/flux/schnell) or audio generation (e.g. fal-ai/stable-audio-25/text-to-audio) models",
                  args: { name: "prompt" },
                },
                {
                  name: "--text",
                  description:
                    "Text to convert to speech, used for text-to-speech models (e.g. fal-ai/elevenlabs/tts/multilingual-v2)",
                  args: { name: "text" },
                },
                {
                  name: "--seconds-total",
                  description:
                    "Desired audio duration in seconds, used with audio generation models (e.g. fal-ai/stable-audio-25/text-to-audio)",
                  args: { name: "seconds-total" },
                },
                {
                  name: "--request",
                  description: "Path to a full JSON request body",
                  args: { name: "request", template: "filepaths" },
                },
                {
                  name: "--tag",
                  description:
                    "Tag in key=value form (repeatable, e.g. --tag env=prod)",
                  isRepeatable: true,
                  args: { name: "tag" },
                },
              ],
            },
            {
              name: "get",
              description: "Get an async invocation",
              args: { name: "request-id" },
            },
          ],
        },
        {
          name: ["chat-completions", "chat", "chatcompletion"],
          description: "Display commands for creating chat completions",
          subcommands: [
            {
              name: "create",
              description: "Create a chat completion",
              options: [
                modelOption,
                {
                  name: "--message",
                  description:
                    "User message (required unless --request is set)",
                  args: { name: "message" },
                },
                {
                  name: "--system-message",
                  description: "Optional system message",
                  args: { name: "system-message" },
                },
                requestOption,
                streamOption,
                {
                  name: "--temperature",
                  description: "Sampling temperature",
                  args: { name: "temperature" },
                },
                {
                  name: "--max-tokens",
                  description: "Maximum tokens to generate",
                  args: { name: "max-tokens" },
                },
              ],
            },
          ],
        },
        {
          name: "embeddings",
          description: "Display commands for creating embedding vectors",
          subcommands: [
            {
              name: "create",
              description: "Create embeddings",
              options: [
                modelOption,
                {
                  name: "--input",
                  description: "Input text (required unless --request is set)",
                  args: { name: "input" },
                },
                requestOption,
              ],
            },
          ],
        },
        {
          name: "images",
          description: "Display commands for generating images",
          subcommands: [
            {
              name: "create",
              description: "Generate an image",
              options: [
                modelOption,
                {
                  name: "--prompt",
                  description:
                    "Image prompt (required unless --request is set)",
                  args: { name: "prompt" },
                },
                requestOption,
                {
                  name: "--stream",
                  description: "Stream partial images using SSE",
                },
                {
                  name: ["-o", "--output"],
                  description: "Write generated image(s) to this path",
                  args: { name: "output" },
                },
                {
                  name: "--n",
                  description: "Number of images to generate (1–10)",
                  args: { name: "n", default: "1" },
                },
              ],
            },
          ],
        },
        {
          name: ["list-models", "lm"],
          description: "List available models",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list-regions", "regions", "lr"],
          description: "List inference regions",
          options: [
            formatOption,
            noHeaderOption,
            {
              name: "--serves-inference",
              description: "Filter regions that serve inference",
            },
            {
              name: "--serves-batch",
              description: "Filter regions that serve batch jobs",
            },
          ],
        },
        {
          name: "messages",
          description: "Display commands for creating Anthropic-style messages",
          subcommands: [
            {
              name: "create",
              description: "Create a message",
              options: [
                modelOption,
                {
                  name: "--message",
                  description:
                    "User message (required unless --request is set)",
                  args: { name: "message" },
                },
                requestOption,
                streamOption,
                {
                  name: "--max-tokens",
                  description: "Maximum tokens to generate",
                  args: { name: "max-tokens", default: "1024" },
                },
              ],
            },
          ],
        },
        {
          name: "models",
          description:
            "Display commands for listing available inference models",
          subcommands: [
            { name: ["list", "ls"], description: "List inference models" },
          ],
        },
        {
          name: ["openai-key", "ok"],
          description:
            "Display commands that manage DigitalOcean OpenAI API Keys",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Creates an OpenAI API Key",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the OpenAI API Key",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--api-key",
                  description: "The API key for the OpenAI API Key",
                  isRequired: true,
                  args: { name: "api-key" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Deletes an OpenAI API Key by its UUID",
              args: { name: "openai-api-key-uuid" },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Forces deletion without confirmation",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieves an OpenAI API Key by its UUID",
              args: { name: "openai-api-key-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get-agents", "ga"],
              description: "Lists agents using an OpenAI API Key",
              args: { name: "openai-api-key-uuid" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "Lists all OpenAI API Keys",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["update", "u"],
              description: "Updates an OpenAI API Key by its UUID",
              args: { name: "openai-api-key-uuid" },
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--name",
                  description: "The name of the OpenAI API Key",
                  args: { name: "name" },
                },
                {
                  name: "--api-key",
                  description: "The API key for the OpenAI API Key",
                  args: { name: "api-key" },
                },
              ],
            },
          ],
        },
        {
          name: "responses",
          description: "Display commands for creating model responses",
          subcommands: [
            {
              name: "create",
              description: "Create a response",
              options: [
                modelOption,
                {
                  name: "--input",
                  description: "Input text (required unless --request is set)",
                  args: { name: "input" },
                },
                requestOption,
                streamOption,
                {
                  name: "--instructions",
                  description: "Optional instructions",
                  args: { name: "instructions" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "signals",
      description:
        "Display commands for Signals consent, export, and data deletion management",
      subcommands: [
        {
          name: "consent",
          description: "Display commands for Signals collection consent",
          subcommands: [
            {
              name: ["get", "g"],
              description:
                "Get Signals consent for an environment or for serverless inference",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--source",
                  description: "Consent source: agent or inference",
                  args: { name: "source" },
                },
                {
                  name: "--environment-id",
                  description:
                    "The environment ID to query consent for (required when --source=agent)",
                  args: { name: "environment-id" },
                },
                agentIdOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all Signals consents for your team",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--source",
                  description:
                    "Only list consents for this source: agent or inference",
                  args: { name: "source" },
                },
              ],
            },
            {
              name: ["set", "s"],
              description:
                "Set Signals consent for an environment or for serverless inference",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--source",
                  description: "Consent source: agent or inference",
                  args: { name: "source" },
                },
                {
                  name: "--environment-id",
                  description:
                    "The environment ID to set consent for (required when --source=agent)",
                  args: { name: "environment-id" },
                },
                agentIdOption,
                {
                  name: "--enabled",
                  description:
                    "Enable (true) or disable (false) Signals collection",
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: ["deletion", "deletions"],
          description: "Display commands for Signals data deletion",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Permanently delete Signals data",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--type",
                  description: 'What to delete: "agent" or "inference"',
                  isRequired: true,
                  args: { name: "type" },
                },
                {
                  name: "--environment-id",
                  description:
                    "Harness Runtime Environment Config ID (agent UUID)",
                  args: { name: "environment-id" },
                },
                agentIdOption,
                {
                  name: "--team-id",
                  description: "Numeric team ID",
                  args: { name: "team-id" },
                },
                {
                  name: ["-f", "--force"],
                  description: "Skip the confirmation prompt",
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Get a Signals deletion job",
              args: { name: "deletion-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List Signals deletion jobs",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--limit",
                  description: "Maximum number of jobs to return (1-100)",
                  args: { name: "limit", default: "20" },
                },
                {
                  name: "--after",
                  description:
                    "Opaque pagination cursor from page_info.end_cursor of a previous page (printed as the next page token on stderr)",
                  args: { name: "after" },
                },
              ],
            },
          ],
        },
        {
          name: "export",
          description: "Display commands for Signals bulk exports",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a Signals export",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--type",
                  description: "Export source: agent or inference",
                  args: { name: "type", default: "agent" },
                },
                {
                  name: "--environment-id",
                  description:
                    "The environment UUID to export data for (required when --type=agent)",
                  args: { name: "environment-id" },
                },
                agentIdOption,
                {
                  name: "--session-ids",
                  description: "Session IDs to export (JSON: session_ids)",
                  isRepeatable: true,
                  args: { name: "session-ids" },
                },
                {
                  name: "--signal-type",
                  description: "Signal types to include (JSON: signal_type)",
                  isRepeatable: true,
                  args: { name: "signal-type" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start time filter (Unix epoch seconds, inclusive)",
                  args: { name: "start-time" },
                },
                {
                  name: "--end-time",
                  description:
                    "End time filter (Unix epoch seconds, exclusive)",
                  args: { name: "end-time" },
                },
              ],
            },
            {
              name: ["download", "dl"],
              description: "Get a Signals export download URL",
              args: { name: "export-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["get", "g"],
              description: "Get a Signals export",
              args: { name: "export-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List Signals export jobs",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--environment-id",
                  description: "Filter exports by environment ID",
                  args: { name: "environment-id" },
                },
                agentIdOption,
                {
                  name: "--limit",
                  description: "Maximum number of exports to return",
                  args: { name: "limit", default: "20" },
                },
                {
                  name: "--after",
                  description:
                    "Opaque pagination cursor from a previous page_info.end_cursor",
                  args: { name: "after" },
                },
              ],
            },
            {
              name: "options",
              description: "List Signals export filter options",
              options: [formatOption, noHeaderOption],
            },
          ],
        },
        {
          name: "session",
          description: "Display commands for Signals sessions and dialogues",
          subcommands: [
            {
              name: ["dialogues", "d"],
              description: "List dialogues for a session",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--session-id",
                  description: "The session ID to list dialogues for",
                  isRequired: true,
                  args: { name: "session-id" },
                },
                {
                  name: "--limit",
                  description: "Maximum number of dialogues to return",
                  args: { name: "limit", default: "20" },
                },
                {
                  name: "--after",
                  description: "Opaque pagination cursor",
                  args: { name: "after" },
                },
                {
                  name: "--start-time",
                  description: "Start time filter (Unix epoch seconds)",
                  args: { name: "start-time" },
                },
                {
                  name: "--end-time",
                  description: "End time filter (Unix epoch seconds)",
                  args: { name: "end-time" },
                },
                {
                  name: "--signal-type",
                  description: "Signal types to filter by (repeatable)",
                  isRepeatable: true,
                  args: { name: "signal-type" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List Signals sessions",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--type",
                  description: "Session source: agent or inference",
                  args: { name: "type", default: "agent" },
                },
                {
                  name: "--environment-id",
                  description:
                    "The environment ID to list sessions for (required when --type=agent)",
                  args: { name: "environment-id" },
                },
                agentIdOption,
                {
                  name: "--limit",
                  description: "Maximum number of sessions to return",
                  args: { name: "limit", default: "20" },
                },
                {
                  name: "--after",
                  description: "Opaque pagination cursor",
                  args: { name: "after" },
                },
                {
                  name: "--start-time",
                  description: "Start time filter (Unix epoch seconds)",
                  args: { name: "start-time" },
                },
                {
                  name: "--end-time",
                  description: "End time filter (Unix epoch seconds)",
                  args: { name: "end-time" },
                },
                {
                  name: "--signal-type",
                  description: "Signal types to filter by (repeatable)",
                  isRepeatable: true,
                  args: { name: "signal-type" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["spaces", "sp"],
      description: "Display commands that manage DigitalOcean Spaces",
      subcommands: [
        {
          name: ["keys", "k"],
          description: "Display commands that manage DigitalOcean Spaces Keys",
          subcommands: [
            {
              name: "create",
              description: "Create a key for a Space",
              args: { name: "name" },
              options: [
                {
                  name: ["-g", "--grants"],
                  description:
                    "A comma-separated list of grants to add to the key",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "grants" },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a key for a Space",
              args: { name: "access key" },
            },
            {
              name: "get",
              description: "Get a key for a Space by Access Key ID",
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List all keys for a Space",
              options: [formatOption, noHeaderOption],
            },
            {
              name: "update",
              description: "Update a key for a Space",
              args: { name: "access key" },
              options: [
                {
                  name: ["-n", "--name"],
                  description: "The new name for the key",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: ["-g", "--grants"],
                  description:
                    "A comma-separated list of grants to set to the key",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "grants" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["vector-databases", "vdb", "vdbs"],
      description: "Display commands that manage vector databases",
      subcommands: [
        {
          name: ["backups", "bu"],
          description: "List vector database backups",
          args: { name: "vector-database-id" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["create", "c"],
          description: "Create a vector database",
          args: { name: "name" },
          options: [
            {
              name: "--region",
              description:
                "The data center region where the vector database resides, such as nyc3 or sfo2",
              args: { name: "region", default: "nyc3" },
            },
            {
              name: "--size",
              description:
                "The size tier of the vector database, such as small, medium, or large",
              args: { name: "size", default: "small" },
            },
            {
              name: "--tag",
              description:
                "A comma-separated list of tags to apply to the vector database",
              isRepeatable: true,
              args: { name: "tag" },
            },
            {
              name: "--project-id",
              description:
                "The ID of the project to assign the vector database to",
              args: { name: "project-id" },
            },
            {
              name: "--wait",
              description:
                "A boolean value that specifies whether to wait for the vector database to be active before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: ["credentials", "creds"],
          description: "Retrieve admin credentials for a vector database",
          args: { name: "vector-database-id" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a vector database",
          args: { name: "vector-database-id" },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Delete the vector database without a confirmation prompt",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Get details for a vector database",
          args: { name: "vector-database-id" },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List your vector databases",
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["resize", "rs"],
          description: "Resize a vector database",
          args: { name: "vector-database-id" },
          options: [
            {
              name: "--size",
              description:
                "The size tier of the vector database, such as small, medium, or large",
              isRequired: true,
              args: { name: "size" },
            },
            {
              name: "--wait",
              description:
                "A boolean value that specifies whether to wait for the resize to complete before returning control to the terminal",
            },
            waitTimeoutOption,
          ],
        },
        {
          name: "restore",
          description: "Restore a vector database from a backup",
          args: [{ name: "vector-database-id" }, { name: "backup-id" }],
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["restore-status", "rs-status"],
          description: "Get the status of a vector database restore",
          args: [{ name: "vector-database-id" }, { name: "backup-id" }],
          options: [formatOption, noHeaderOption],
        },
        {
          name: "tags",
          description: "Update tags on a vector database",
          args: { name: "vector-database-id" },
          options: [
            {
              name: "--tag",
              description:
                "A comma-separated list of tags to apply to the vector database",
              isRequired: true,
              isRepeatable: true,
              args: { name: "tag" },
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a vector database configuration",
          args: { name: "vector-database-id" },
          options: [
            {
              name: "--default-quantization",
              description:
                "The default quantization setting for the vector database",
              args: { name: "default-quantization" },
            },
            {
              name: "--enable-auto-schema",
              description: "Whether to enable automatic schema creation",
            },
            {
              name: "--weaviate-version",
              description: "The Weaviate version to use",
              args: { name: "weaviate-version" },
            },
          ],
        },
      ],
    },
    { name: "version", description: "Show the current version" },
    {
      name: "vpcs",
      description: "Display commands that manage VPCs",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a new VPC network",
          options: [
            {
              name: "--name",
              description: "The VPC network's name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "A description of the VPC network",
              args: { name: "description" },
            },
            {
              name: "--ip-range",
              description:
                "The range of IP addresses in the VPC network, in CIDR notation, such as 10.116.0.0/20",
              args: { name: "ip-range" },
            },
            {
              name: "--region",
              description: "The VPC network's region slug, such as nyc1",
              isRequired: true,
              args: { name: "region" },
            },
          ],
        },
        {
          name: ["delete", "d", "rm"],
          description: "Permanently delete a VPC network",
          args: { name: "vpc-id", generators: vpcGenerator },
          options: [
            {
              name: ["-f", "--force"],
              description: "Delete the VPC without a confirmation prompt",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a VPC network",
          args: { name: "vpc-id", generators: vpcGenerator },
          options: [formatOption, noHeaderOption],
        },
        {
          name: ["list", "ls"],
          description: "List VPC networks",
          options: [formatOption, noHeaderOption],
        },
        {
          name: "peerings",
          description: "Display commands that manage VPC Peerings",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a new VPC Peering",
              options: [
                {
                  name: "--vpc-ids",
                  description: "Peering VPC IDs should be comma separated",
                  isRequired: true,
                  args: { name: "vpc-ids" },
                },
                {
                  name: "--wait",
                  description:
                    "Boolean that specifies whether to wait for a VPC Peering creation to complete before returning control to the terminal",
                },
                waitTimeoutOption,
              ],
            },
            {
              name: ["delete", "d", "rm"],
              description: "Permanently delete a VPC Peering",
              args: { name: "peering-id" },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete the VPC Peering without any confirmation prompt",
                },
                {
                  name: "--wait",
                  description:
                    "Boolean that specifies whether to wait for a VPC Peering deletion to complete before returning control to the terminal",
                },
                waitTimeoutOption,
              ],
            },
            {
              name: ["get", "g"],
              description: "Retrieves a VPC Peering",
              args: { name: "peering-id" },
              options: [formatOption, noHeaderOption],
            },
            {
              name: ["list", "ls"],
              description: "List VPC Peerings",
              options: [
                formatOption,
                noHeaderOption,
                {
                  name: "--vpc-id",
                  description: "VPC ID",
                  args: { name: "vpc-id" },
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a VPC Peering's name",
              args: { name: "peering-id" },
              options: [
                {
                  name: "--name",
                  description: "The VPC Peering's name",
                  isRequired: true,
                  args: { name: "name" },
                },
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a VPC network's configuration",
          args: { name: "vpc-id", generators: vpcGenerator },
          options: [
            {
              name: "--name",
              description: "The VPC network's name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "The VPC network's description",
              args: { name: "description" },
            },
            {
              name: "--default",
              description:
                "A boolean value indicating whether or not the VPC network is the default one for the region",
            },
          ],
        },
      ],
    },
  ],
};

export default DigitalOceanCTLCompletionSpec;
