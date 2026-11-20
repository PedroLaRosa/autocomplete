// Copilot v1.34.1 (latest git tag of aws/copilot-cli and Homebrew formula, 2026-11-19). Source: cobra command and flag
// definitions in internal/pkg/cli/*.go of the v1.34.1 source tree (commands, flags, shorthands, enums, hidden and
// mutually exclusive flags), cross-checked with the generated flag tables in site/content/docs/commands/*.md.
// The release binary was not run, so the flag descriptions come from the Go sources.
import YAML from "yaml";

const applicationName: Fig.Generator = {
  script: ["cat", "copilot/.workspace"],
  // TODO: I feel like there's a better way to do this.
  // There's only ever expected to be one `application` key.
  postProcess: (output) => {
    if (output.trim() == "") {
      return [];
    }

    const suggestions: Fig.Suggestion[] = [];

    try {
      const application = YAML.parse(output).application;
      suggestions.push({
        name: `${application}`,
        icon: "fig://icon?type=aws",
      }) as Fig.Suggestion;
    } catch (e) {
      console.log(e);
      return [];
    }
    return suggestions;
  },
};

const appOption: Fig.Option = {
  name: ["--app", "-a"],
  description: "Name of the application",
  args: { name: "name", generators: applicationName },
};

const envOption: Fig.Option = {
  name: ["--env", "-e"],
  description: "Name of the environment",
  args: { name: "name" },
};

const workloadNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the service or job",
  args: { name: "name" },
};

const dockerfileOption: Fig.Option = {
  name: ["--dockerfile", "-d"],
  description: "Path to the Dockerfile. Cannot be specified with --image",
  args: { name: "path", template: "filepaths" },
  exclusiveOn: ["--image", "-i"],
};

const imageOption: Fig.Option = {
  name: ["--image", "-i"],
  description:
    "The location of an existing Docker image. Cannot be specified with --dockerfile or --build-context",
  args: { name: "image" },
};

const imageExclusiveOption: Fig.Option = {
  ...imageOption,
  exclusiveOn: ["--dockerfile", "-d"],
};

const tagOption: Fig.Option = {
  name: "--tag",
  description:
    "Optional. The tag for the container images Copilot builds from Dockerfiles",
  args: { name: "tag" },
};

const portOption: Fig.Option = {
  name: "--port",
  description: "The port on which your service listens",
  args: { name: "port" },
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description:
    'Optional. The total execution time for the task, including retries. Accepts valid Go duration strings. For example: "2h", "1h30m", "900s"',
  args: { name: "duration" },
};

const retriesOption: Fig.Option = {
  name: "--retries",
  description:
    "Optional. The number of times to try restarting the job on a failure",
  args: { name: "count" },
};

const resourceTagsOption: Fig.Option = {
  name: "--resource-tags",
  description:
    "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
  args: { name: "key=value" },
  isRepeatable: true,
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Optional. Output in JSON format",
};

const jsonExclusiveOption: Fig.Option = {
  ...jsonOption,
  exclusiveOn: ["--manifest"],
};

const appNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the application",
  args: { name: "name", generators: applicationName },
};

const yesOption: Fig.Option = {
  name: "--yes",
  description: "Skips confirmation prompt",
};

const envNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the environment",
  args: { name: "name" },
};

const profileOption: Fig.Option = {
  name: "--profile",
  description: "Name of the profile for the environment account",
  args: { name: "profile" },
};

const awsAccessKeyIdOption: Fig.Option = {
  name: "--aws-access-key-id",
  description: "Optional. An AWS access key for the environment account",
  args: { name: "access-key-id" },
};

const awsSecretAccessKeyOption: Fig.Option = {
  name: "--aws-secret-access-key",
  description: "Optional. An AWS secret access key for the environment account",
  args: { name: "secret-access-key" },
};

const awsSessionTokenOption: Fig.Option = {
  name: "--aws-session-token",
  description: "Optional. An AWS session token for temporary credentials",
  args: { name: "session-token" },
};

const regionOption: Fig.Option = {
  name: "--region",
  description: "Optional. An AWS region where the environment will be created",
  args: { name: "region" },
};

const allowDowngradeOption: Fig.Option = {
  name: "--allow-downgrade",
  description:
    "Optional. Allow using an older version of Copilot to update Copilot components updated by a newer version of Copilot",
};

const outputDirOption: Fig.Option = {
  name: "--output-dir",
  description:
    "Optional. Writes the stack template and template configuration to a directory",
  args: { name: "dir", template: "folders" },
  exclusiveOn: ["--diff"],
};

const uploadAssetsOption: Fig.Option = {
  name: "--upload-assets",
  description:
    "Optional. Whether to upload assets (container images, Lambda functions, etc.). Uploaded asset locations are filled in the template configuration",
  exclusiveOn: ["--diff"],
};

const forceEnvOption: Fig.Option = {
  name: "--force",
  description: "Optional. Force update the environment stack template",
};

const diffOption: Fig.Option = {
  name: "--diff",
  description:
    "Compares the generated CloudFormation template to the deployed stack",
};

const diffExclusiveOption: Fig.Option = {
  ...diffOption,
  exclusiveOn: ["--output-dir", "--upload-assets"],
};

const toolOption: Fig.Option = {
  name: "--tool",
  description:
    'Infrastructure as Code tool to override a template. Must be one of: "cdk", "yamlpatch"',
  args: { name: "tool", suggestions: ["cdk", "yamlpatch"] },
};

const cdkLanguageOption: Fig.Option = {
  name: "--cdk-language",
  description: "Optional. The Cloud Development Kit language",
  args: {
    name: "cdk-language",
    suggestions: ["typescript"],
    default: "typescript",
  },
};

const skipResourcesOption: Fig.Option = {
  name: "--skip-resources",
  description:
    "Optional. Skip asking for which resources to override and generate empty IaC extension files",
};

const noRollbackOption: Fig.Option = {
  name: "--no-rollback",
  description:
    "Optional. Disable automatic stack rollback in case of deployment failure. We do not recommend using this flag for a production environment",
};

const diffYesOption: Fig.Option = {
  name: "--diff-yes",
  description: "Skip interactive approval of diff before deploying",
};

const detachOption: Fig.Option = {
  name: "--detach",
  description: "Optional. Skip displaying CloudFormation deployment progress",
};

const svcNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the service",
  args: { name: "name" },
};

const overrideEnvOption: Fig.Option = {
  name: ["--env", "-e"],
  description:
    "Optional. Name of the environment to use when retrieving resources in a template. Defaults to a random environment",
  args: { name: "name" },
};

const forceSvcOption: Fig.Option = {
  name: "--force",
  description:
    'Optional. Force a new service deployment using the existing image. Not available with the "Static Site" service type',
};

const startTimeOption: Fig.Option = {
  name: "--start-time",
  description:
    "Optional. Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of start-time / since may be used",
  args: { name: "time" },
  exclusiveOn: ["--since"],
};

const endTimeOption: Fig.Option = {
  name: "--end-time",
  description:
    "Optional. Only return logs before a specific date (RFC3339). Defaults to all logs. Only one of end-time / follow may be used",
  args: { name: "time" },
  exclusiveOn: ["--follow"],
};

const followOption: Fig.Option = {
  name: "--follow",
  description: "Optional. Specifies if the logs should be streamed",
};

const sinceOption: Fig.Option = {
  name: "--since",
  description:
    "Optional. Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of start-time / since may be used",
  args: { name: "duration" },
  exclusiveOn: ["--start-time"],
};

const limitOption: Fig.Option = {
  name: "--limit",
  description:
    "Optional. The maximum number of log events returned. Default is 10 unless any time filtering flags are set",
  args: { name: "count" },
};

const tasksOption: Fig.Option = {
  name: "--tasks",
  description: "Optional. Only return logs from specific task IDs",
  args: { name: "task-ids" },
  isRepeatable: true,
};

const taskNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the service, job, or task group",
  args: { name: "name" },
};

const commandOption: Fig.Option = {
  name: ["--command", "-c"],
  description: "Optional. The command that is passed to a running container",
  args: { name: "command", default: "/bin/sh" },
};

const taskIdOption: Fig.Option = {
  name: "--task-id",
  description: "Optional. ID of the task you want to exec in",
  args: { name: "task-id" },
};

const updateSessionManagerOption: Fig.Option = {
  name: "--yes",
  description: "Optional. Whether to update the Session Manager Plugin",
};

const jobNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the job",
  args: { name: "name" },
};

const pipelineNameOption: Fig.Option = {
  name: ["--name", "-n"],
  description: "Name of the pipeline",
  args: { name: "name" },
};

const commands: Fig.Subcommand[] = [
  {
    name: "init",
    description: "Create a new ECS or App Runner application",
    options: [
      appOption,
      envOption,
      workloadNameOption,
      {
        name: ["--type", "-t"],
        description:
          'Type of job or svc to create. Must be one of: "Request-Driven Web Service", "Load Balanced Web Service", "Backend Service", "Worker Service", "Static Site", "Scheduled Job"',
        args: {
          name: "type",
          suggestions: [
            "Request-Driven Web Service",
            "Load Balanced Web Service",
            "Backend Service",
            "Worker Service",
            "Static Site",
            "Scheduled Job",
          ],
        },
      },
      dockerfileOption,
      imageExclusiveOption,
      {
        name: "--deploy",
        description:
          "Deploy your service or job to a new or existing environment",
      },
      tagOption,
      portOption,
      {
        name: "--schedule",
        description:
          'The schedule on which to run this job. Accepts cron expressions of the format (M H DoM M DoW) and schedule definition strings. For example: "0 * * * *", "@daily", "@weekly", "@every 1h30m". AWS Schedule Expressions of the form "rate(10 minutes)" or "cron(0 12 L * ? 2021)" are also accepted',
        args: { name: "schedule" },
      },
      timeoutOption,
      retriesOption,
    ],
  },
  { name: "docs", description: "Open the copilot docs" },
  {
    name: "app",
    description:
      "Commands for applications. Applications are a collection of services and environments",
    subcommands: [
      {
        name: "init",
        description: "Creates a new empty application",
        args: { name: "name", isOptional: true },
        options: [
          {
            name: "--domain",
            description: "Optional. Your existing custom domain name",
            args: { name: "domain" },
          },
          {
            name: "--permissions-boundary",
            description:
              "Optional. The name or ARN of an existing IAM policy with which to set a permissions boundary for all roles generated within the application",
            args: { name: "policy" },
          },
          resourceTagsOption,
        ],
      },
      { name: "ls", description: "Lists all the applications in your account" },
      {
        name: "show",
        description: "Shows info about an application",
        options: [jsonOption, appNameOption],
      },
      {
        name: "delete",
        description: "Delete all resources associated with the application",
        options: [appNameOption, yesOption],
      },
      {
        name: "upgrade",
        description:
          "Upgrades the template of an application to the latest version",
        options: [appNameOption],
      },
    ],
  },
  {
    name: "env",
    description:
      "Commands for environments. Environments are deployment stages shared between services",
    subcommands: [
      {
        name: "init",
        description: "Creates a new environment in your application",
        options: [
          appOption,
          envNameOption,
          profileOption,
          awsAccessKeyIdOption,
          awsSecretAccessKeyOption,
          awsSessionTokenOption,
          regionOption,
          allowDowngradeOption,
          {
            name: "--prod",
            description: "If the environment contains production services",
          },
          {
            name: "--container-insights",
            description: "Optional. Enable CloudWatch Container Insights",
          },
          {
            name: "--import-vpc-id",
            description: "Optional. Use an existing VPC ID",
            args: { name: "import-vpc-id" },
          },
          {
            name: "--import-public-subnets",
            description: "Optional. Use existing public subnet IDs",
            args: { name: "subnet-ids" },
            isRepeatable: true,
          },
          {
            name: "--import-private-subnets",
            description: "Optional. Use existing private subnet IDs",
            args: { name: "subnet-ids" },
            isRepeatable: true,
          },
          {
            name: "--import-cert-arns",
            description:
              "Optional. Apply existing ACM certificates to the internet-facing load balancer",
            args: { name: "certificate-arns" },
            isRepeatable: true,
          },
          {
            name: "--override-vpc-cidr",
            description:
              "Optional. Global CIDR to use for VPC. (default 10.0.0.0/16)",
            args: { name: "cidr" },
          },
          {
            name: "--override-az-names",
            description:
              "Optional. Availability Zone names. (default 2 random AZs)",
            args: { name: "az-names" },
            isRepeatable: true,
          },
          {
            name: "--override-public-cidrs",
            description:
              "Optional. CIDR to use for public subnets. (default 10.0.0.0/24,10.0.1.0/24)",
            args: { name: "cidrs" },
            isRepeatable: true,
          },
          {
            name: "--override-private-cidrs",
            description:
              "Optional. CIDR to use for private subnets. (default 10.0.2.0/24,10.0.3.0/24)",
            args: { name: "cidrs" },
            isRepeatable: true,
          },
          {
            name: "--internal-alb-subnets",
            description:
              "Optional. Specify subnet IDs for an internal load balancer. By default, the load balancer will be placed in your private subnets. Cannot be specified with --default-config or any of the --override flags",
            args: { name: "subnet-ids" },
            isRepeatable: true,
          },
          {
            name: "--internal-alb-allow-vpc-ingress",
            description:
              "Optional. Allow internal ALB ingress from port 80 and/or port 443",
          },
          {
            name: "--default-config",
            description:
              "Optional. Skip prompting and use default environment configuration",
          },
        ],
      },
      {
        name: "ls",
        description: "Lists all the environments in an application",
        options: [appOption, jsonOption],
      },
      {
        name: "show",
        description: "Shows info about a deployed environment",
        options: [
          appOption,
          envNameOption,
          jsonExclusiveOption,
          {
            name: "--resources",
            description: "Optional. Show the resources in your environment",
            exclusiveOn: ["--manifest"],
          },
          {
            name: "--manifest",
            description:
              "Optional. Output the manifest file used for the deployment",
            exclusiveOn: ["--json", "--resources"],
          },
        ],
      },
      {
        name: "upgrade",
        description:
          "Deprecated. Upgrades the template of an environment to the latest version",
        hidden: true,
        deprecated: true,
        options: [
          envNameOption,
          appOption,
          { name: "--all", description: "Optional. Upgrade all environments" },
        ],
      },
      {
        name: "package",
        description: "Print the AWS CloudFormation template of an environment",
        options: [
          envNameOption,
          appOption,
          outputDirOption,
          uploadAssetsOption,
          forceEnvOption,
          diffExclusiveOption,
          allowDowngradeOption,
        ],
      },
      {
        name: "override",
        description: "Override the AWS CloudFormation template of environments",
        options: [
          {
            name: ["--name", "-n"],
            description:
              "Optional. Name of the environment to use when retrieving resources in a template. Defaults to a random environment",
            args: { name: "name" },
          },
          appOption,
          toolOption,
          cdkLanguageOption,
          skipResourcesOption,
        ],
      },
      {
        name: "deploy",
        description: "Deploys an environment to an application",
        options: [
          appOption,
          envNameOption,
          forceEnvOption,
          noRollbackOption,
          diffOption,
          diffYesOption,
          allowDowngradeOption,
          detachOption,
        ],
      },
      {
        name: "delete",
        description: "Deletes an environment from your application",
        options: [appOption, envNameOption, yesOption],
      },
    ],
  },
  {
    name: "svc",
    description:
      "Commands for services. Services are long-running ECS or App Runner services",
    subcommands: [
      {
        name: "init",
        description: "Creates a new service in an application",
        options: [
          appOption,
          svcNameOption,
          {
            name: ["--svc-type", "-t"],
            description:
              'Type of service to create. Must be one of: "Request-Driven Web Service", "Load Balanced Web Service", "Backend Service", "Worker Service", "Static Site"',
            args: {
              name: "svc-type",
              suggestions: [
                "Request-Driven Web Service",
                "Load Balanced Web Service",
                "Backend Service",
                "Worker Service",
                "Static Site",
              ],
            },
          },
          dockerfileOption,
          imageExclusiveOption,
          portOption,
          {
            name: "--subscribe-topics",
            description:
              "Optional. SNS topics to subscribe to from other services in your application. Must be of format '<svcName>:<topicName>'",
            args: { name: "svcName:topicName" },
            isRepeatable: true,
          },
          {
            name: "--no-subscribe",
            description:
              "Optional. Turn off selection for adding subscriptions for worker services",
          },
          {
            name: "--ingress-type",
            description:
              "Required for a Request-Driven Web Service. Allowed source of traffic to your service. Must be one of Environment or Internet",
            args: {
              name: "ingress-type",
              suggestions: ["Environment", "Internet"],
            },
          },
          {
            name: "--sources",
            description:
              "List of relative paths to source directories or files. Must be specified with '--svc-type \"Static Site\"'",
            args: { name: "path" },
            isRepeatable: true,
            dependsOn: ["--svc-type", "-t"],
          },
          allowDowngradeOption,
        ],
      },
      {
        name: "ls",
        description: "Lists all the services in an application",
        options: [
          appOption,
          jsonOption,
          {
            name: "--local",
            description: "Only show services in the workspace",
          },
        ],
      },
      {
        name: "package",
        description: "Print the AWS CloudFormation template of a service",
        options: [
          svcNameOption,
          envOption,
          appOption,
          tagOption,
          outputDirOption,
          uploadAssetsOption,
          diffExclusiveOption,
          allowDowngradeOption,
        ],
      },
      {
        name: "override",
        description: "Override the AWS CloudFormation template of a service",
        options: [
          svcNameOption,
          overrideEnvOption,
          appOption,
          toolOption,
          cdkLanguageOption,
          skipResourcesOption,
        ],
      },
      {
        name: "deploy",
        description: "Deploys a service to an environment",
        options: [
          appOption,
          svcNameOption,
          envOption,
          tagOption,
          resourceTagsOption,
          forceSvcOption,
          noRollbackOption,
          diffOption,
          diffYesOption,
          allowDowngradeOption,
          detachOption,
        ],
      },
      {
        name: "delete",
        description: "Deletes a service from an application",
        options: [appOption, svcNameOption, envOption, yesOption],
      },
      {
        name: "show",
        description: "Shows info about a deployed service per environment",
        options: [
          appOption,
          svcNameOption,
          jsonExclusiveOption,
          {
            name: "--resources",
            description: "Optional. Show the resources in your service",
            exclusiveOn: ["--manifest"],
          },
          {
            name: "--manifest",
            description:
              "Optional. Name of the environment in which the service was deployed; output the manifest file used for that deployment",
            args: { name: "env" },
            exclusiveOn: ["--json", "--resources"],
          },
        ],
      },
      {
        name: "status",
        description: "Shows status of a deployed service",
        options: [svcNameOption, envOption, appOption, jsonOption],
      },
      {
        name: "logs",
        description: "Displays logs of a deployed service",
        options: [
          svcNameOption,
          envOption,
          appOption,
          startTimeOption,
          endTimeOption,
          jsonOption,
          { ...followOption, exclusiveOn: ["--end-time"] },
          sinceOption,
          limitOption,
          tasksOption,
          {
            name: "--log-group",
            description: "Optional. Only return logs from specific log group",
            args: { name: "log-group" },
          },
          {
            name: ["--previous", "-p"],
            description:
              "Optional. Print logs for the last stopped task if exists",
          },
          {
            name: "--container",
            description: "Optional. Return only logs from a specific container",
            args: { name: "container" },
          },
        ],
      },
      {
        name: "exec",
        description:
          "Execute a command in a running container part of a service",
        options: [
          appOption,
          envOption,
          taskNameOption,
          commandOption,
          taskIdOption,
          {
            name: "--container",
            description:
              "Optional. The specific container you want to exec in. By default the first essential container will be used",
            args: { name: "container" },
          },
          updateSessionManagerOption,
        ],
      },
      {
        name: "pause",
        description: "Pause running App Runner service",
        options: [svcNameOption, envOption, appOption, yesOption],
      },
      {
        name: "resume",
        description: "Resumes a paused service",
        options: [appOption, svcNameOption, envOption],
      },
    ],
  },
  {
    name: "job",
    description:
      "Commands for jobs. Jobs are tasks that are triggered by events",
    subcommands: [
      {
        name: "init",
        description: "Creates a new scheduled job in an application",
        options: [
          appOption,
          jobNameOption,
          {
            name: ["--job-type", "-t"],
            description:
              'Type of job to create. Must be one of: "Scheduled Job"',
            args: { name: "job-type", suggestions: ["Scheduled Job"] },
          },
          dockerfileOption,
          {
            name: ["--schedule", "-s"],
            description:
              'The schedule on which to run this job. Accepts cron expressions of the format (M H DoM M DoW) and schedule definition strings. For example: "0 * * * *", "@daily", "@weekly", "@every 1h30m". AWS Schedule Expressions of the form "rate(10 minutes)" or "cron(0 12 L * ? 2021)" are also accepted',
            args: { name: "schedule" },
          },
          timeoutOption,
          retriesOption,
          imageExclusiveOption,
          allowDowngradeOption,
        ],
      },
      {
        name: "ls",
        description: "Lists all the jobs in an application",
        options: [
          appOption,
          jsonOption,
          { name: "--local", description: "Only show jobs in the workspace" },
        ],
      },
      {
        name: "package",
        description: "Print the AWS CloudFormation template of a job",
        options: [
          jobNameOption,
          envOption,
          appOption,
          tagOption,
          outputDirOption,
          uploadAssetsOption,
          diffExclusiveOption,
          allowDowngradeOption,
        ],
      },
      {
        name: "override",
        description: "Override the AWS CloudFormation template of a job",
        options: [
          jobNameOption,
          overrideEnvOption,
          appOption,
          toolOption,
          cdkLanguageOption,
          skipResourcesOption,
        ],
      },
      {
        name: "deploy",
        description: "Deploys a job to an environment",
        options: [
          appOption,
          jobNameOption,
          envOption,
          tagOption,
          resourceTagsOption,
          noRollbackOption,
          diffOption,
          allowDowngradeOption,
          detachOption,
        ],
      },
      {
        name: "delete",
        description: "Deletes a job from an application",
        options: [appOption, jobNameOption, envOption, yesOption],
      },
      {
        name: "logs",
        description: "Displays logs of a deployed job",
        options: [
          svcNameOption,
          envOption,
          appOption,
          startTimeOption,
          endTimeOption,
          jsonOption,
          { ...followOption, exclusiveOn: ["--last", "--end-time"] },
          sinceOption,
          limitOption,
          {
            name: "--last",
            description:
              "Optional. The number of executions of the scheduled job for which logs should be shown",
            args: { name: "count", default: "1" },
            exclusiveOn: ["--follow"],
          },
          { ...tasksOption, exclusiveOn: ["--include-state-machine"] },
          {
            name: "--include-state-machine",
            description:
              "Optional. Include logs from the state machine executions",
            exclusiveOn: ["--tasks"],
          },
        ],
      },
      {
        name: "run",
        description: "Invoke a job in an environment",
        options: [appOption, jobNameOption, envOption],
      },
    ],
  },
  {
    name: "task",
    description:
      "Commands for tasks. One-off Amazon ECS tasks that terminate once their work is done",
    subcommands: [
      {
        name: "run",
        description: "Run a one-off task on Amazon ECS",
        options: [
          {
            name: ["--task-group-name", "-n"],
            description:
              "Optional. The group name of the task. Tasks with the same group name share the same set of resources. (default directory name)",
            args: { name: "name" },
          },
          {
            name: "--dockerfile",
            description:
              "Path to the Dockerfile. Cannot be specified with --image",
            args: {
              name: "path",
              default: "Dockerfile",
              template: "filepaths",
            },
            exclusiveOn: ["--image", "-i"],
          },
          {
            name: "--build-args",
            description:
              "Key-value pairs converted to --build-args. Cannot be specified with --image",
            args: { name: "key=value" },
            isRepeatable: true,
            exclusiveOn: ["--image", "-i"],
          },
          {
            name: "--build-context",
            description:
              "Path to the Docker build context. Cannot be specified with --image",
            args: { name: "dir", template: "folders" },
            exclusiveOn: ["--image", "-i"],
          },
          {
            ...imageOption,
            exclusiveOn: ["--dockerfile", "--build-context", "--build-args"],
          },
          {
            name: "--tag",
            description:
              'Optional. The container image tag in addition to "latest"',
            args: { name: "tag" },
          },
          {
            name: "--app",
            description:
              "Optional. Name of the application. Cannot be specified with --default, --subnets or --security-groups",
            args: { name: "name", generators: applicationName },
            exclusiveOn: ["--default", "--subnets", "--security-groups"],
          },
          {
            name: "--env",
            description:
              "Optional. Name of the environment. Cannot be specified with --default, --subnets or --security-groups",
            args: { name: "name" },
            exclusiveOn: ["--default", "--subnets", "--security-groups"],
          },
          {
            name: "--cluster",
            description:
              "Optional. The short name or full ARN of the cluster to run the task in. Cannot be specified with --app, --env or --default",
            args: { name: "cluster" },
            exclusiveOn: ["--app", "--env", "--default"],
          },
          {
            name: "--acknowledge-secrets-access",
            description:
              "Optional. Skip the confirmation question and grant access to the secrets specified by --secrets flag. This flag is useful only when 'secrets' flag is specified",
            dependsOn: ["--secrets"],
          },
          {
            name: "--subnets",
            description:
              "Optional. The subnet IDs for the task to use. Can be specified multiple times. Cannot be specified with --app, --env or --default",
            args: { name: "subnet-ids" },
            isRepeatable: true,
            exclusiveOn: ["--app", "--env", "--default"],
          },
          {
            name: "--security-groups",
            description:
              "Optional. Additional security group IDs for the task to use. Can be specified multiple times",
            args: { name: "security-group-ids" },
            isRepeatable: true,
          },
          {
            name: "--default",
            description:
              "Optional. Run tasks in default cluster and default subnets. Cannot be specified with --app, --env or --subnets",
            exclusiveOn: ["--app", "--env", "--subnets"],
          },
          {
            name: "--count",
            description: "Optional. The number of tasks to set up",
            args: { name: "count", default: "1" },
          },
          {
            name: "--cpu",
            description:
              "Optional. The number of CPU units to reserve for each task",
            args: { name: "units", default: "256" },
          },
          {
            name: "--memory",
            description:
              "Optional. The amount of memory to reserve in MiB for each task",
            args: { name: "MiB", default: "512" },
          },
          {
            name: "--task-role",
            description: "Optional. The ARN of the role for the task to use",
            args: { name: "arn" },
          },
          {
            name: "--execution-role",
            description:
              "Optional. The ARN of the role that grants the container agent permission to make AWS API calls",
            args: { name: "arn" },
          },
          {
            name: "--platform-os",
            description:
              "Optional. Operating system of the task. Must be specified along with 'platform-arch'",
            args: { name: "os" },
            dependsOn: ["--platform-arch"],
          },
          {
            name: "--platform-arch",
            description:
              "Optional. Architecture of the task. Must be specified along with 'platform-os'",
            args: { name: "arch" },
            dependsOn: ["--platform-os"],
          },
          {
            name: "--env-vars",
            description:
              "Optional. Environment variables specified by key=value separated by commas",
            args: { name: "key=value" },
            isRepeatable: true,
          },
          {
            name: "--env-file",
            description:
              "Optional. A path to an environment variable (.env) file. Each line should be of the form of VARIABLE=VALUE. Values specified with --env-vars take precedence over --env-file",
            args: { name: "path", template: "filepaths" },
          },
          {
            name: "--secrets",
            description:
              "Optional. Secrets to inject into the container. Specified by key=value separated by commas",
            args: { name: "key=value" },
            isRepeatable: true,
          },
          {
            name: "--command",
            description:
              'Optional. The command that is passed to "docker run" to override the default command',
            args: { name: "command" },
          },
          {
            name: "--entrypoint",
            description:
              'Optional. The entrypoint that is passed to "docker run" to override the default entrypoint',
            args: { name: "entrypoint" },
          },
          resourceTagsOption,
          followOption,
          {
            name: "--generate-cmd",
            description:
              "Optional. Generate a command with a pre-filled value for each flag. To use it for an ECS service, specify --generate-cmd <cluster name>/<service name>. Alternatively, if the service or job is created with Copilot, specify --generate-cmd <application>/<environment>/<service or job name>. Cannot be specified with any other flags",
            args: { name: "target" },
          },
        ],
      },
      {
        name: "exec",
        description: "Execute a command in a running container part of a task",
        options: [
          appOption,
          envOption,
          taskNameOption,
          commandOption,
          taskIdOption,
          {
            name: "--default",
            description:
              "Optional. Execute commands in running tasks in default cluster and default subnets. Cannot be specified with --app or --env",
            exclusiveOn: ["--app", "-a", "--env", "-e"],
          },
          updateSessionManagerOption,
        ],
      },
      {
        name: "delete",
        description:
          "Deletes a one-off task from an application or default cluster",
        options: [
          appOption,
          svcNameOption,
          envOption,
          yesOption,
          {
            name: "--default",
            description:
              "Optional. Delete a task which was launched in the default cluster and subnets. Cannot be specified with --app or --env",
            exclusiveOn: ["--app", "-a", "--env", "-e"],
          },
        ],
      },
    ],
  },
  {
    name: "run",
    description: "Run the workload locally",
    args: { name: "local", suggestions: ["local"], isOptional: true },
    options: [
      workloadNameOption,
      envOption,
      appOption,
      {
        name: "--watch",
        description:
          "Optional. Watch changes to local files and restart containers when updated. Directories and files in the main .dockerignore file are ignored",
      },
      {
        name: "--use-task-role",
        description:
          "Optional. Run containers with TaskRole credentials instead of session credentials",
      },
      {
        name: "--port-override",
        description:
          "Optional. Override ports exposed by service. Format: <host port>:<service port>. Example: --port-override 5000:80 binds localhost:5000 to the service's port 80",
        args: { name: "host-port:service-port" },
        isRepeatable: true,
      },
      {
        name: "--env-var-override",
        description:
          "Optional. Override environment variables passed to containers. Format: [container]:KEY=VALUE. Omit container name to apply to all containers",
        args: { name: "[container]:KEY=VALUE" },
        isRepeatable: true,
      },
      {
        name: "--proxy",
        description:
          "Optional. Proxy outbound requests to your environment's VPC",
      },
      {
        name: "--proxy-network",
        description: "Optional. Set the IP Network used by --proxy",
        args: { name: "cidr", default: "172.20.0.0/16" },
      },
    ],
  },
  {
    name: "storage",
    description: "Commands for working with storage and databases",
    subcommands: [
      {
        name: "init",
        description:
          "Creates a new AWS CloudFormation template for a storage resource",
        options: [
          {
            name: ["--name", "-n"],
            description: "Name of the storage resource to create",
            args: { name: "name" },
          },
          {
            name: ["--storage-type", "-t"],
            description:
              'Type of storage to add. Must be one of: "DynamoDB", "S3", "Aurora"',
            args: {
              name: "storage-type",
              suggestions: ["DynamoDB", "S3", "Aurora"],
            },
          },
          {
            name: ["--workload", "-w"],
            description: "Name of the service/job that accesses the storage",
            args: { name: "name" },
          },
          {
            name: ["--lifecycle", "-l"],
            description:
              'Whether the storage should be created and deleted at the same time as a workload or an environment. Must be one of: "workload" or "environment"',
            args: {
              name: "lifecycle",
              suggestions: ["workload", "environment"],
            },
          },
          {
            name: "--add-ingress-from",
            description:
              'The workload that needs access to an environment storage resource. Must be specified with "--name" and "--storage-type". Can be specified with "--engine"',
            args: { name: "workload" },
            exclusiveOn: [
              "--partition-key",
              "--sort-key",
              "--no-sort",
              "--lsi",
              "--no-lsi",
              "--serverless-version",
              "--initial-db",
              "--parameter-group",
            ],
          },
          {
            name: "--partition-key",
            description:
              "Partition key for the DDB table. Must be of the format '<keyName>:<dataType>'",
            args: { name: "keyName:dataType" },
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--sort-key",
            description:
              "Optional. Sort key for the DDB table. Must be of the format '<keyName>:<dataType>'",
            args: { name: "keyName:dataType" },
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--lsi",
            description:
              "Optional. Attribute to use as an alternate sort key. May be specified up to 5 times. Must be of the format '<keyName>:<dataType>'",
            args: { name: "keyName:dataType" },
            isRepeatable: true,
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--no-lsi",
            description:
              "Optional. Don't ask about configuring alternate sort keys",
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--no-sort",
            description: "Optional. Skip configuring sort keys",
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--serverless-version",
            description:
              'Optional. Aurora Serverless version. With "environment" lifecycle, use "v2". With "workload" lifecycle, use "v1" or "v2"',
            args: {
              name: "serverless-version",
              suggestions: ["v1", "v2"],
              default: "v2",
            },
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--engine",
            description:
              'The database engine used in the cluster. Must be either "MySQL" or "PostgreSQL"',
            args: { name: "engine", suggestions: ["MySQL", "PostgreSQL"] },
          },
          {
            name: "--initial-db",
            description: "The initial database to create in the cluster",
            args: { name: "database" },
            exclusiveOn: ["--add-ingress-from"],
          },
          {
            name: "--parameter-group",
            description:
              "Optional. The name of the parameter group to associate with the cluster",
            args: { name: "parameter-group" },
            exclusiveOn: ["--add-ingress-from"],
          },
        ],
      },
    ],
  },
  {
    name: "secret",
    description:
      "Commands for secrets. Secrets are sensitive information that you need in your application",
    subcommands: [
      {
        name: "init",
        description: "Create or update secrets in SSM Parameter Store",
        options: [
          appOption,
          {
            name: ["--name", "-n"],
            description:
              "The name of the secret. Mutually exclusive with the --cli-input-yaml flag",
            args: { name: "name" },
            exclusiveOn: ["--cli-input-yaml"],
          },
          {
            name: "--values",
            description:
              "Values of the secret in each environment. Specified as <environment>=<value> separated by commas. Mutually exclusive with the --cli-input-yaml flag",
            args: { name: "environment=value" },
            isRepeatable: true,
            exclusiveOn: ["--cli-input-yaml"],
          },
          {
            name: "--overwrite",
            description: "Optional. Whether to overwrite an existing secret",
          },
          {
            name: "--cli-input-yaml",
            description:
              "Optional. A YAML file in which the secret values are specified. Mutually exclusive with the -n, --name and --values flags",
            args: { name: "path", template: "filepaths" },
            exclusiveOn: ["--name", "-n", "--values"],
          },
        ],
      },
    ],
  },
  { name: "version", description: "Print the version number" },
  {
    name: "completion",
    description: "Output shell completion code",
    args: { name: "shell", suggestions: ["bash", "zsh", "fish"] },
  },
  {
    name: "pipeline",
    description:
      "Commands for pipelines. Continuous delivery pipelines to release services",
    subcommands: [
      {
        name: "init",
        description: "Creates a pipeline for the services in your workspace",
        options: [
          appOption,
          pipelineNameOption,
          {
            name: "--github-url",
            description:
              "Deprecated. Use --url instead. Repository URL to trigger your pipeline",
            args: { name: "url" },
            deprecated: true,
            hidden: true,
          },
          {
            name: ["--url", "-u"],
            description:
              "The repository URL to trigger your pipeline. Supported providers are: GitHub, CodeCommit, Bitbucket",
            args: { name: "url" },
          },
          {
            name: ["--github-access-token", "-t"],
            description: "GitHub personal access token for your repository",
            args: { name: "token" },
            hidden: true,
          },
          {
            name: ["--git-branch", "-b"],
            description: "Branch used to trigger your pipeline",
            args: { name: "branch" },
          },
          {
            name: ["--environments", "-e"],
            description: "Environments to add to the pipeline",
            args: { name: "environments" },
            isRepeatable: true,
          },
          {
            name: ["--pipeline-type", "-p"],
            description:
              'The type of pipeline. Must be either "Workloads" or "Environments"',
            args: {
              name: "pipeline-type",
              suggestions: ["Workloads", "Environments"],
            },
          },
        ],
      },
      {
        name: "override",
        description: "Override the AWS CloudFormation template of a Pipeline",
        options: [
          pipelineNameOption,
          appOption,
          toolOption,
          cdkLanguageOption,
          skipResourcesOption,
        ],
      },
      {
        name: ["deploy", "update"],
        description: "Deploys a pipeline for the services in your workspace",
        options: [
          appOption,
          pipelineNameOption,
          yesOption,
          diffOption,
          allowDowngradeOption,
        ],
      },
      {
        name: "delete",
        description: "Deletes the pipeline associated with your workspace",
        options: [
          appOption,
          pipelineNameOption,
          yesOption,
          {
            name: "--delete-secret",
            description:
              "Deletes AWS Secrets Manager secret associated with a pipeline source repository",
          },
        ],
      },
      {
        name: "show",
        description: "Shows info about a deployed pipeline for an application",
        options: [
          pipelineNameOption,
          appOption,
          jsonOption,
          {
            name: "--resources",
            description: "Optional. Show the resources in your pipeline",
          },
        ],
      },
      {
        name: "status",
        description: "Shows the status of a pipeline",
        options: [pipelineNameOption, appOption, jsonOption],
      },
      {
        name: "ls",
        description: "Lists all the deployed pipelines in an application",
        options: [
          appOption,
          jsonOption,
          {
            name: "--local",
            description: "Only show pipelines in the workspace",
          },
        ],
      },
    ],
  },
  {
    name: "deploy",
    description: "Deploy one or more Copilot jobs or services",
    options: [
      appOption,
      {
        name: ["--name", "-n"],
        description:
          "Names of the service or jobs to deploy, with an optional priority tag (e.g. fe/1, be/2, my-job/1)",
        args: { name: "name" },
        isRepeatable: true,
      },
      envOption,
      tagOption,
      resourceTagsOption,
      forceSvcOption,
      noRollbackOption,
      allowDowngradeOption,
      detachOption,
      {
        name: "--deploy-env",
        description:
          "Deploy the target environment before deploying the workload",
      },
      {
        name: "--init-env",
        description:
          "Confirm initializing the target environment if it does not exist",
      },
      {
        name: "--init-wkld",
        description:
          "Optional. When specified with --all, initialize all local workloads before deployment",
        dependsOn: ["--all"],
      },
      {
        name: "--all",
        description:
          "Optional. Deploy all workloads with manifests in the current Copilot workspace",
      },
      profileOption,
      awsAccessKeyIdOption,
      awsSecretAccessKeyOption,
      awsSessionTokenOption,
      regionOption,
    ],
  },
];

// Mirrors the command tree for cobra's built-in "help" command, which takes a command path
const helpSubcommands = (cmds: Fig.Subcommand[]): Fig.Subcommand[] =>
  cmds.map(({ name, description, subcommands, hidden }) => ({
    name,
    description,
    hidden,
    subcommands:
      subcommands && helpSubcommands(subcommands as Fig.Subcommand[]),
  }));

const completionSpec: Fig.Spec = {
  name: "copilot",
  description: "👩‍✈️ Launch and manage containerized applications on AWS",
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
      name: ["--help", "-h"],
      description: "Help for command",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Version for copilot",
    },
  ],
};

export default completionSpec;
