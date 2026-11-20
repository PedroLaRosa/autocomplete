// Serverless Framework v4.46.0 (npm "serverless" latest = tag sf-core@4.46.0, 2026-11-20). Source: static read of
// github.com/serverless/serverless at sf-core@4.46.0: packages/serverless/lib/cli/commands-schema.js and
// commands-options-schema.js, the CoreRunner / ComposeRunner CLI schemas in packages/sf-core, the built-in AppSync
// plugin and docs/sf/providers/aws/cli-reference. The v4 binary was not downloaded or run.
// Removed in v4 and dropped here: create, dashboard, generate-event, install, output, param, slstats, studio, test,
// --use-local-credentials. Not covered: undocumented create_domain / delete_domain (domains plugin), the SAM /
// CloudFormation runner aliases (-st, -b), and commands added by a service's own plugins.
// Region suggestions: botocore 1.44.7 endpoints.json (aws, aws-cn and aws-us-gov partitions).
import YAML from "yaml";

const regions = [
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "af-south-1",
  "ap-east-1",
  "ap-east-2",
  "ap-south-1",
  "ap-south-2",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-southeast-3",
  "ap-southeast-4",
  "ap-southeast-5",
  "ap-southeast-6",
  "ap-southeast-7",
  "ca-central-1",
  "ca-west-1",
  "eu-central-1",
  "eu-central-2",
  "eu-north-1",
  "eu-south-1",
  "eu-south-2",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "il-central-1",
  "me-central-1",
  "me-south-1",
  "mx-central-1",
  "sa-east-1",
  "cn-north-1",
  "cn-northwest-1",
  "us-gov-east-1",
  "us-gov-west-1",
];

const functionOption = (
  description: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name: ["--function", "-f"],
  description,
  args: { name: "function" },
  ...extra,
});

const jsonOption = (
  description = "Print one JSON result on stdout (text goes to stderr)"
): Fig.Option => ({
  name: "--json",
  description,
});

const stackOption: Fig.Option = {
  name: "--stack",
  description: "CloudFormation/SAM only. Set the stack name",
  args: { name: "stack" },
};

const bucketOption: Fig.Option = {
  name: "--bucket",
  description: "CloudFormation/SAM only. Set the bucket name",
  args: { name: "bucket" },
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Forces a deployment to take place",
};

const minifyTemplateOption = (target: string): Fig.Option => ({
  name: "--minify-template",
  description: `Minify the ${target}`,
});

const startTimeOption = (description: string): Fig.Option => ({
  name: "--startTime",
  description,
  args: { name: "time" },
});

const dirOption: Fig.Option = {
  name: "--dir",
  description:
    'Only write the given directories: "claude" (.claude/skills, Claude Code) or "agents" (.agents/skills, the open Agent Skills standard)',
  isRepeatable: true,
  args: { name: "directory", suggestions: ["claude", "agents"] },
};

const pluginNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "The name of the plugin",
  isRequired: true,
  args: { name: "plugin name" },
};

// Selectors shared by the commands that can target a function, an agent,
// a sandbox or a web app
const targetOptions = (
  functionDescription: string,
  agentDescription: string,
  sandboxDescription: string,
  webAppDescription: string
): Fig.Option[] => [
  functionOption(functionDescription, {
    exclusiveOn: ["--agent", "-a", "--sandbox", "--web-app"],
  }),
  {
    name: ["--agent", "-a"],
    description: agentDescription,
    exclusiveOn: ["--function", "-f", "--sandbox", "--web-app"],
    args: { name: "agent" },
  },
  {
    name: "--sandbox",
    description: sandboxDescription,
    exclusiveOn: ["--function", "-f", "--agent", "-a", "--web-app"],
    args: { name: "sandbox" },
  },
  {
    name: "--web-app",
    description: webAppDescription,
    exclusiveOn: ["--function", "-f", "--agent", "-a", "--sandbox"],
    args: { name: "web app" },
  },
];

const inputOptions = ({
  pathDescription,
  dataDescription,
  contextPathShortcut,
}: {
  pathDescription: string;
  dataDescription: string;
  contextPathShortcut?: boolean;
}): Fig.Option[] => [
  {
    name: ["--path", "-p"],
    description: pathDescription,
    args: { name: "path", template: "filepaths" },
  },
  {
    name: ["--data", "-d"],
    description: dataDescription,
    args: { name: "input" },
  },
  {
    name: "--raw",
    description: "Flag to pass input data as a raw string",
  },
  {
    name: "--context",
    description: "Context of the service",
    args: { name: "context" },
  },
  {
    name: contextPathShortcut ? ["--contextPath", "-x"] : "--contextPath",
    description: "Path to JSON or YAML file holding context data",
    args: { name: "path", template: "filepaths" },
  },
];

const agentInspectCategories = [
  "functions",
  "api",
  "events",
  "iam",
  "storage",
  "observability",
  "cdn",
  "identity",
  "iot",
  "sandboxes",
  "web-apps",
];

const appsyncDomainOption = (
  quietDescription: string,
  extra: Fig.Option[] = []
): Fig.Option[] => [
  {
    name: ["--quiet", "-q"],
    description: quietDescription,
  },
  {
    name: ["--yes", "-y"],
    description: "Automatic yes to prompts",
  },
  ...extra,
];

const completionSpec: Fig.Spec = {
  name: "serverless",
  description: "Zero-friction serverless development",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version info",
    },
    {
      name: "--verbose",
      description: "Show verbose logs",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: 'Namespace of debug logs to expose (use "*" to display all)',
      isPersistent: true,
      args: { name: "namespace", isOptional: true, suggestions: ["*"] },
    },
    {
      name: ["--config", "-c"],
      description: "Path to serverless config file",
      isPersistent: true,
      args: { name: "config file", template: "filepaths" },
    },
    {
      name: ["--stage", "-s"],
      description: "Stage of the service",
      isPersistent: true,
      args: { name: "stage" },
    },
    {
      name: "--param",
      description:
        'Pass custom parameter values for the "param" variable source',
      isPersistent: true,
      isRepeatable: true,
      args: { name: "key=value" },
    },
    {
      name: ["--region", "-r"],
      description: "Region of the service",
      isPersistent: true,
      args: { name: "region", suggestions: regions },
    },
    {
      name: "--aws-profile",
      description: "AWS profile to use with the command",
      isPersistent: true,
      args: { name: "profile name" },
    },
    {
      name: "--org",
      description: "Dashboard org name",
      isPersistent: true,
      args: { name: "org" },
    },
    {
      name: "--app",
      description: "Dashboard app name",
      isPersistent: true,
      args: { name: "app" },
    },
    {
      name: "--service",
      description:
        "Serverless Compose only. Run on specific service(s), comma-separated",
      isPersistent: true,
      args: { name: "services" },
    },
  ],
  subcommands: [
    {
      name: "deploy",
      description: "Deploy a Serverless service",
      subcommands: [
        {
          name: "function",
          description: "Deploy a single function from the service",
          options: [
            functionOption("Name of the function", { isRequired: true }),
            forceOption,
            {
              name: ["--update-config", "-u"],
              description:
                "Updates function configuration, e.g. Timeout or Memory Size without deploying code",
            },
          ],
        },
        {
          name: "list",
          description: "List deployed version of your Serverless Service",
          subcommands: [
            {
              name: "functions",
              description: "List all the deployed functions and their versions",
            },
          ],
        },
      ],
      options: [
        {
          name: "--conceal",
          description:
            "Hide secrets from the output (e.g. API Gateway key values)",
        },
        {
          name: ["--package", "-p"],
          description: "Path of the deployment package",
          args: { name: "package", template: "folders" },
        },
        forceOption,
        functionOption(
          "Name of the function to deploy (same as deploy function)"
        ),
        {
          name: "--aws-s3-accelerate",
          description:
            "Enables S3 Transfer Acceleration making uploading artifacts much faster",
          exclusiveOn: ["--no-aws-s3-accelerate"],
        },
        {
          name: "--no-aws-s3-accelerate",
          description: "Explicitly disables S3 Transfer Acceleration",
          exclusiveOn: ["--aws-s3-accelerate"],
        },
        minifyTemplateOption("CloudFormation template"),
        {
          name: "--enforce-hash-update",
          description:
            "Enforces new function version by overriding descriptions across all your functions. To be used only when migrating to new hashing algorithm",
        },
        {
          name: "--enable-legacy-deployment-bucket",
          description:
            "Use a deployment bucket created and managed by the service stack, instead of the global deployment bucket",
        },
        stackOption,
        bucketOption,
      ],
    },
    {
      name: "info",
      description: "Display information about the service",
      options: [
        {
          name: "--conceal",
          description:
            "Hide secrets from the output (e.g. API Gateway key values)",
        },
        jsonOption("Output the information in JSON format"),
        stackOption,
      ],
    },
    {
      name: "diff",
      description:
        "Show the difference between the local template and the deployed CloudFormation stack",
      options: [
        stackOption,
        {
          name: ["--package", "-p"],
          description:
            "Path to an existing package directory to diff against. Skips the auto-package step when set",
          args: { name: "package", template: "folders" },
        },
        jsonOption("Output the diff in JSON format"),
      ],
    },
    {
      name: "dev",
      description: "Start dev mode in this service",
      options: [
        {
          name: ["--mode", "-m"],
          description:
            "Dev mode type. Auto-detected if not specified (default: functions)",
          args: {
            name: "mode",
            suggestions: [
              { name: "functions", description: "Lambda functions" },
              { name: "agents", description: "AgentCore runtimes" },
              { name: "sandboxes", description: "AWS Lambda MicroVMs" },
            ],
          },
        },
        {
          name: ["--agent", "-a"],
          description:
            "Name of the agent to run in agents dev mode (defaults to first runtime agent)",
          args: { name: "agent" },
        },
        {
          name: "--sandbox",
          description:
            "The sandbox name to run in sandboxes dev mode (AWS Lambda MicroVMs)",
          args: { name: "sandbox" },
        },
        {
          name: "--no-assume-role",
          description:
            "Sandboxes dev mode: run with your ambient AWS credentials instead of the sandbox execution role",
        },
        {
          name: ["--port", "-p"],
          description:
            "Local dev-mode port: the AgentCore container (agents, default 8080), or the local MicroVMs API control-plane endpoint (sandboxes, default 9100)",
          args: { name: "port" },
        },
        functionOption(
          "Attach only this function; the others run their deployed code",
          { isRepeatable: true }
        ),
        {
          name: "--skip-function",
          description: "Keep this function on its deployed code",
          isRepeatable: true,
          args: { name: "function" },
        },
        {
          name: "--web-app",
          description:
            "Run only this web app on this machine; the others serve their deployed code",
          isRepeatable: true,
          args: { name: "web app" },
        },
        {
          name: "--skip-web-app",
          description: "Keep this web app on its deployed code",
          isRepeatable: true,
          args: { name: "web app" },
        },
        {
          name: "--local-only",
          description:
            "Run this web app on localhost only; its real URL keeps serving the deployed code",
          isRepeatable: true,
          args: { name: "web app" },
        },
        {
          name: "--take-over",
          description:
            "Also attach functions and web apps that are in Dev Mode for another developer",
        },
        {
          name: "--approve",
          description:
            "Ask for confirmation before changing any function or web app",
        },
        {
          name: "--on-exit",
          description: "What to do on exit instead of restoring",
          args: {
            name: "action",
            suggestions: [
              {
                name: "keep",
                description: "Leave functions and web apps in Dev Mode",
              },
              {
                name: "remove",
                description:
                  "Restore and then remove the service (with confirmation)",
              },
            ],
          },
        },
        {
          name: "--detailed",
          description:
            "Show complete invocation events and responses, and web request and response details",
        },
        {
          name: "--detach",
          description:
            'Start the session in the background and return once it is ready (for scripts and AI agents); "serverless dev stop" ends it',
        },
        {
          name: "--idle-timeout",
          description:
            "With --detach: stop and restore after this long without activity, such as 30m (default 60m; 0 never)",
          dependsOn: ["--detach"],
          args: { name: "duration" },
        },
        jsonOption(
          "With --detach or --dry-run: print one JSON result on stdout (text goes to stderr)"
        ),
        {
          name: "--dry-run",
          description:
            "Check everything and print the changes Dev Mode would make, without changing anything",
        },
        {
          name: "--no-keys",
          description:
            "Turn off the single-key commands while Dev Mode runs in a terminal",
        },
      ],
      subcommands: [
        {
          name: "restore",
          description:
            "Remove Dev Mode configuration from the functions and web apps of a stage",
          options: [
            functionOption("Only this function", { isRepeatable: true }),
            {
              name: "--web-app",
              description: "Only this web app",
              isRepeatable: true,
              args: { name: "web app" },
            },
            jsonOption(),
          ],
        },
        {
          name: "setup",
          description:
            "Create the IAM role Dev Mode uses in this AWS account and region",
          options: [
            {
              name: "--permissions-boundary",
              description:
                "ARN of a permissions boundary policy to attach to the role",
              args: { name: "arn" },
            },
            {
              name: "--path",
              description:
                'IAM path for the role, for example "/serverless/" (default "/")',
              args: { name: "path" },
            },
          ],
        },
        {
          name: "status",
          description:
            "Show whether Dev Mode is on in this service directory: its functions, web apps, invocations, web requests and endpoints",
          options: [jsonOption()],
        },
        {
          name: "stop",
          description:
            "Stop the Dev Mode session running in this service directory and restore its functions and web apps",
          options: [
            {
              name: "--keep",
              description:
                'Leave the functions and web apps in Dev Mode (as "--on-exit keep" does)',
            },
            {
              name: "--timeout",
              description:
                "How long to wait for the restore, for example 90s or 10m (default 7m)",
              args: { name: "duration" },
            },
            jsonOption(),
          ],
        },
        {
          name: "wait",
          description:
            "Wait until the Dev Mode session is ready, runs an invocation or a web app request, reloads or ends, then print that event",
          options: [
            {
              name: "--for",
              description: "What to wait for",
              args: {
                name: "event",
                suggestions: [
                  "ready",
                  "invocation",
                  "request",
                  "reload",
                  "ended",
                ],
              },
            },
            functionOption("Only an invocation or reload of this function", {
              isRepeatable: true,
            }),
            {
              name: "--web-app",
              description: "Only a request to or a reload of this web app",
              isRepeatable: true,
              args: { name: "web app" },
            },
            {
              name: "--after",
              description:
                "Only events after this cursor (from a --json result), including ones that already happened",
              args: { name: "cursor" },
            },
            {
              name: "--timeout",
              description:
                "How long to wait, such as 100s, 5m or 1h (default 100s, at most 1h)",
              args: { name: "duration" },
            },
            jsonOption(),
          ],
        },
        {
          name: "requests",
          description:
            "List the latest invocations and web app requests Dev Mode ran on this machine, newest first",
          options: [
            functionOption("Only this function", { isRepeatable: true }),
            {
              name: "--web-app",
              description: "Only requests to this web app",
              isRepeatable: true,
              args: { name: "web app" },
            },
            {
              name: "--limit",
              description: "How many to list (default 20, at most 500)",
              args: { name: "limit" },
            },
            jsonOption(),
          ],
        },
        {
          name: "replay",
          description:
            "Run a recorded invocation or web app request again on this machine through the running session",
          options: [jsonOption()],
          args: {
            name: "request id",
            description:
              'The request id, or its first 8 or more characters (see "serverless dev requests")',
          },
        },
      ],
    },
    {
      name: "invoke",
      description: "Invoke a deployed function or agent",
      options: [
        ...targetOptions(
          "The function name",
          "The agent name (for AgentCore Runtime agents)",
          "The sandbox name (for AWS Lambda MicroVMs)",
          "The web app name (for AWS Lambda Web Functions)"
        ),
        {
          name: "--method",
          description:
            "HTTP method for a sandbox or web app invoke (default: GET)",
          args: { name: "method" },
        },
        {
          name: "--port",
          description: "Sandbox container port to target (default: 8080)",
          args: { name: "port" },
        },
        {
          name: "--header",
          description:
            "HTTP request header for a sandbox or web app invoke, as 'Name: value'",
          isRepeatable: true,
          args: { name: "header" },
        },
        {
          name: "--session-id",
          description:
            "Session ID for multi-turn agent conversations (minimum 33 characters)",
          args: { name: "session id" },
        },
        {
          name: ["--qualifier", "-q"],
          description:
            "Version number or alias to invoke. Default for a durable function: the alias its deploy publishes",
          args: { name: "qualifier" },
        },
        ...inputOptions({
          pathDescription:
            "For --function: path to a JSON or YAML input-data file. For --sandbox and --web-app: the HTTP request path (default /)",
          dataDescription:
            "Input data. For --sandbox and --web-app: the HTTP request body",
        }),
        {
          name: ["--type", "-t"],
          description: "Type of invocation",
          args: {
            name: "type",
            suggestions: ["RequestResponse", "Event", "DryRun"],
          },
        },
        {
          name: ["--log", "-l"],
          description:
            "Trigger logging data output. For --web-app: print the request's log lines",
        },
        {
          name: "--tenant-id",
          description: "Tenant ID for the invocation",
          args: { name: "tenant id" },
        },
        {
          name: "--durable-execution-name",
          description:
            "Unique name for durable function execution (enables idempotency, 1-64 chars)",
          args: { name: "name" },
        },
        jsonOption(),
      ],
      subcommands: [
        {
          name: "local",
          description: "Invoke function locally",
          options: [
            functionOption("Name of the function", { isRequired: true }),
            ...inputOptions({
              pathDescription: "Path to JSON or YAML file holding input data",
              dataDescription: "Input data",
              contextPathShortcut: true,
            }),
            {
              name: ["--env", "-e"],
              description:
                "Override environment variables. e.g. --env VAR1=val1 --env VAR2=val2",
              isRepeatable: true,
              args: { name: "VAR=value" },
            },
            {
              name: "--docker",
              description:
                "Flag to turn on docker use for node/python/ruby/java",
            },
            {
              name: "--docker-arg",
              description:
                'Arguments to docker run command. e.g. --docker-arg "-p 9229:9229"',
              args: { name: "docker args" },
            },
          ],
        },
      ],
    },
    {
      name: "logs",
      description: "Output the logs of a deployed function or agent",
      options: [
        ...targetOptions(
          "The function name",
          "The agent name",
          "The sandbox name (for AWS Lambda MicroVMs)",
          "The web app name (for AWS Lambda Web Functions)"
        ),
        {
          name: ["--tail", "-t"],
          description: "Tail the log output",
        },
        startTimeOption(
          "Logs before this time will not be displayed. Default: 10m (last 10 minutes logs only)"
        ),
        {
          name: "--filter",
          description: "A filter pattern",
          args: { name: "pattern" },
        },
        {
          name: ["--interval", "-i"],
          description: "Tail polling interval in milliseconds. Default: 1000",
          args: { name: "milliseconds" },
        },
      ],
    },
    {
      name: "metrics",
      description: "Show metrics for a specific function",
      options: [
        functionOption("The function name"),
        startTimeOption(
          "Start time for the metrics retrieval (e.g. 1970-01-01, 30m, 2h). Defaults to 24h ago"
        ),
        {
          name: "--endTime",
          description:
            "End time for the metrics retrieval (e.g. 1970-01-01). Defaults to now",
          args: { name: "time" },
        },
      ],
    },
    {
      name: "remove",
      description: "Remove Serverless service and all resources",
      options: [stackOption, bucketOption],
    },
    {
      name: "rollback",
      description: "Rollback the Serverless service to a specific deployment",
      options: [
        {
          name: ["--timestamp", "-t"],
          description:
            "Timestamp of the deployment (list deployments with `serverless deploy list`)",
          args: { name: "timestamp" },
        },
      ],
      subcommands: [
        {
          name: "function",
          description: "Rollback the function to the previous version",
          options: [
            functionOption("Name of the function", { isRequired: true }),
            {
              name: "--function-version",
              description: "Version of the function",
              isRequired: true,
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "prune",
      description:
        "Clean up deployed functions, layers and sandbox images by deleting older versions",
      options: [
        {
          name: ["--number", "-n"],
          description: "Number of previous versions to keep",
          isRequired: true,
          args: { name: "number" },
        },
        functionOption(
          "Function name. Limits cleanup to the specified function"
        ),
        {
          name: ["--layer", "-l"],
          description:
            "Layer name. Limits cleanup to the specified Lambda layer",
          args: { name: "layer" },
        },
        {
          name: "--sandbox",
          description:
            "Sandbox name. Limits cleanup to the image versions of the specified sandbox (AWS Lambda MicroVMs)",
          args: { name: "sandbox" },
        },
        {
          name: ["--includeLayers", "-i"],
          description: "Includes the pruning of Lambda layers",
        },
        {
          name: ["--includeArtifacts", "-a"],
          description:
            "Also mark deployment artifacts that no longer back any function or layer version, and delete unused sandbox zips",
        },
        {
          name: ["--dryRun", "-d"],
          description:
            "Simulate pruning without executing delete actions. Deletion candidates are logged when used in conjunction with --verbose",
        },
      ],
    },
    {
      name: "package",
      description: "Packages a Serverless Service",
      options: [
        {
          name: ["--package", "-p"],
          description: "Output path for the package",
          args: { name: "package", template: "folders" },
        },
        minifyTemplateOption("AWS CloudFormation template for AWS packages"),
      ],
    },
    {
      name: "print",
      description: "Print your compiled and resolved config file",
      options: [
        {
          name: "--format",
          description: "Print configuration in given format (default: yaml)",
          args: { name: "format", suggestions: ["yaml", "json", "text"] },
        },
        {
          name: "--path",
          description:
            'Optional period-separated path to print a sub-value (eg: "provider.name")',
          args: { name: "path" },
        },
        {
          name: "--transform",
          description:
            'Optional transform-function to apply to the value ("keys")',
          args: { name: "transform", suggestions: ["keys"] },
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage Serverless Plugins",
      subcommands: [
        {
          name: "install",
          description: "Installs a Serverless Plugin into or from the service",
          options: [pluginNameOption],
        },
        {
          name: "uninstall",
          description: "Uninstalls a Serverless Plugin from the service",
          options: [pluginNameOption],
        },
      ],
    },
    {
      name: "login",
      description: "Log in a user",
      options: [
        {
          name: "--org",
          description:
            "Make this org the default (switches an existing session without signing in again)",
          args: { name: "org" },
        },
      ],
      subcommands: [
        {
          name: "aws",
          description: "Log in to AWS",
          subcommands: [
            {
              name: "sso",
              description: "Log in to AWS using SSO",
              options: [
                {
                  name: "--sso-session",
                  description: "SSO session name to use",
                  args: { name: "session" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out the current user",
    },
    {
      name: "usage",
      description:
        "Display the org's instance credit usage for the current month and export a list of billable instances to instances.csv",
    },
    {
      name: "reconcile",
      description:
        "Reconcile your org's list of billable instances with the actual CloudFormation stacks currently in your AWS account",
    },
    {
      name: "agent",
      description:
        "Commands for AI coding agents: setup, documentation, skills, and service inspection",
      subcommands: [
        {
          name: "setup",
          description:
            "Set up AI agent integrations: install Agent Skills and report environment status",
          options: [dirOption],
        },
        {
          name: "docs",
          description:
            "Print Serverless Framework documentation: the page index, or the given pages",
          args: {
            name: "paths",
            description: "Documentation page paths from the index",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "skills",
          description: "Manage Serverless Framework Agent Skills",
          subcommands: [
            {
              name: "install",
              description:
                "Install the Agent Skills into this service directory and the serverless-framework skill into your home directory",
              options: [dirOption],
            },
            {
              name: "list",
              description:
                "List the Agent Skills bundled with this CLI version",
            },
            {
              name: "read",
              description:
                "Print a bundled Agent Skill by name (its SKILL.md, or one of its files) without installing it",
              args: [
                {
                  name: "name",
                  description: "Skill to print",
                },
                {
                  name: "file",
                  description:
                    "A file of the skill, e.g. references/config.md (default: SKILL.md)",
                  isOptional: true,
                },
              ],
            },
          ],
        },
        {
          name: "inspect",
          description:
            "Inspect a deployed service: a cheap resource index, or the raw AWS state of selected resources",
          options: [
            ...agentInspectCategories.map((category): Fig.Option => ({
              name: `--${category}`,
              description: `Expand ${category} resources`,
            })),
            {
              name: "--all",
              description: "Expand every category",
            },
            {
              name: "--aws-services",
              description:
                'Comma-separated AWS service tokens to expand (e.g. "lambda,iam,s3")',
              args: { name: "services" },
            },
            {
              name: "--name",
              description:
                "Logical ID to scope to (used alone auto-selects that resource)",
              isRepeatable: true,
              args: { name: "logical id" },
            },
            {
              name: "--format",
              description: "Output format (default: json)",
              args: { name: "format", suggestions: ["json", "yaml"] },
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Run Serverless MCP Server",
      options: [
        {
          name: "--transport",
          description: "Transport type (default: stdio)",
          args: { name: "transport", suggestions: ["stdio", "sse"] },
        },
        {
          name: "--port",
          description:
            "Port to run the server on (only for sse transport, default: 3001)",
          args: { name: "port" },
        },
      ],
    },
    {
      name: "help",
      description: "Display help",
    },
    {
      name: "appsync",
      description:
        "Manage the AppSync API (available when the service defines appSync)",
      subcommands: [
        {
          name: "validate-schema",
          description: "Validate the graphql schema",
        },
        {
          name: "get-introspection",
          description: "Get the API's introspection schema",
          options: [
            {
              name: ["--format", "-f"],
              description: "Specify the output format (default: JSON)",
              args: { name: "format", suggestions: ["JSON", "SDL"] },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output to a file. If not specified, writes to stdout",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "flush-cache",
          description: "Flushes the cache of the API",
        },
        {
          name: "console",
          description: "Open the AppSync AWS console",
        },
        {
          name: "cloudwatch",
          description: "Open the CloudWatch AWS console",
        },
        {
          name: "logs",
          description: "Output the logs of the AppSync API to stdout",
          options: [
            startTimeOption("Starting time. Default: 10m (10 minutes ago)"),
            {
              name: ["--tail", "-t"],
              description: "Tail the log output",
            },
            {
              name: ["--interval", "-i"],
              description:
                "Tail polling interval in milliseconds. Default: 1000",
              args: { name: "milliseconds" },
            },
            {
              name: ["--filter", "-f"],
              description: "A filter pattern to apply to the logs",
              args: { name: "pattern" },
            },
          ],
        },
        {
          name: "domain",
          description: "Manage the domain for this AppSync API",
          subcommands: [
            {
              name: "create",
              description: "Create the domain in AppSync",
              options: appsyncDomainOption(
                "Don't return an error if the domain already exists"
              ),
            },
            {
              name: "delete",
              description: "Delete the domain from AppSync",
              options: appsyncDomainOption(
                "Don't return an error if the domain does not exist"
              ),
            },
            {
              name: "create-record",
              description: "Create the Alias record for this domain in Route53",
              options: appsyncDomainOption(
                "Don't return an error if the record already exists"
              ),
            },
            {
              name: "delete-record",
              description:
                "Deletes the Alias record for this domain from Route53",
              options: appsyncDomainOption(
                "Don't return an error if the record does not exist"
              ),
            },
            {
              name: "assoc",
              description: "Associate this AppSync API with the domain",
              options: [
                {
                  name: ["--yes", "-y"],
                  description: "Automatic yes to prompts",
                },
              ],
            },
            {
              name: "disassoc",
              description:
                "Disassociate the AppSync API associated to the domain",
              options: [
                {
                  name: ["--yes", "-y"],
                  description: "Automatic yes to prompts",
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Force the disassociation of any API from this domain",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "requirements",
      description: "Serverless plugin to bundle Python packages",
      hidden: true,
      subcommands: [
        {
          name: "clean",
          description: "Remove .requirements and requirements.zip",
        },
        {
          name: "install",
          description: "Install python requirements manually",
        },
        {
          name: "cleanCache",
          description:
            "Removes all items in the pip download/static cache (if present)",
        },
      ],
    },
  ],
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["serverless-compose.yml"],
    });
    const servicesObject = YAML.parse(stdout).services;
    const services: string[] = Object.keys(servicesObject);
    // Avoid infinite recursion of generated subcommands
    if (services.includes(tokens[0])) {
      return;
    }

    const subcommands: Fig.Subcommand[] = services.map((service) => ({
      name: service,
      description: tokens.join(","),
      priority: 100,
      loadSpec: "serverless",
      icon: "fig://icon?type=box",
    }));

    if (subcommands.length > 0) {
      return {
        name: "serverless",
        subcommands,
      };
    }
  },
};

export default completionSpec;
