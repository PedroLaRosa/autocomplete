// AWS Elastic Beanstalk CLI (eb, package awsebcli) v3.27.7 (PyPI latest, 2026-11-20). Source: the awsebcli 3.27.7 sdist read statically, not executed:
// cement/argparse controller definitions in ebcli/controllers/** and ebcli/labs/** plus the help strings in ebcli/resources/strings.py.
// Options whose help is argparse.SUPPRESS are marked `hidden: true`. The separate `ebp` binary (custom platform workspaces) is not covered.
const generateNames: Fig.Generator = {
  script: ["eb", "list"],
  postProcess: (str) => {
    const lines: string[] = str
      .trim()
      .split("\n")
      .map((line) => line.trim());
    return lines.map((line) => ({
      name: line.startsWith("*") ? line.slice(1).trim() : line,
    }));
  },
};

const generateConfigNames: Fig.Generator = {
  script: ["eb", "config", "list"],
  postProcess: (str) =>
    str
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => ({ name: line, description: "Saved configuration" })),
};

const environmentArg = (description = "Environment name"): Fig.Arg => ({
  name: "environment-name",
  description,
  isOptional: true,
  generators: generateNames,
});

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description: "Timeout period in minutes",
  args: { name: "minutes" },
};

const nohangOption = (action: string): Fig.Option => ({
  name: ["-nh", "--nohang"],
  description: `Return immediately, do not wait for ${action} to be completed`,
});

const tagsOption = (
  description = "Comma-separated list of tags as key=value pairs"
): Fig.Option => ({
  name: "--tags",
  description,
  args: { name: "key=value" },
});

const envvarsOption: Fig.Option = {
  name: "--envvars",
  description:
    "Comma-separated list of environment variables as key=value pairs",
  args: { name: "key=value" },
};

const sourceOption = (description: string): Fig.Option => ({
  name: "--source",
  description,
  args: { name: "codecommit/repository-name/branch-name" },
});

const processOption: Fig.Option = {
  name: ["-p", "--process"],
  description: "Enable preprocessing of the application version",
};

const keynameOption = (description: string): Fig.Option => ({
  name: ["-k", "--keyname"],
  description,
  args: { name: "keyname" },
});

const forceOption = (description = "Skip confirmation prompt"): Fig.Option => ({
  name: "--force",
  description,
});

const interactiveOption: Fig.Option = {
  name: ["-i", "--interactive"],
  description: "Force interactive mode",
};

const followOption: Fig.Option = {
  name: ["-f", "--follow"],
  description: "Wait and continue to print events as they come",
};

const remoteOptions: Fig.Option[] = [
  {
    name: "--remote",
    description: "Enable remote execution mode for IIS site discovery",
  },
  {
    name: "--target-ip",
    description: "IP address of the remote machine",
    args: { name: "ip-address" },
  },
  {
    name: "--username",
    description: "Username for authentication on the remote machine",
    args: { name: "username" },
  },
  {
    name: "--password",
    description: "Password for authentication on the remote machine",
    args: { name: "password" },
  },
];

const versionArg = (description: string): Fig.Arg => ({
  name: "version",
  description,
  isOptional: true,
});

const completionSpec: Fig.Spec = {
  name: "eb",
  description: "AWS Elastic Beanstalk command line interface",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for eb",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show application/version info",
    },
    {
      name: ["-v", "--verbose"],
      description: "Toggle verbose output",
      isPersistent: true,
    },
    {
      name: "--profile",
      description: "Use a specific profile from your credential file",
      isPersistent: true,
      args: { name: "profile" },
    },
    {
      name: ["-r", "--region"],
      description: "Use a specific region",
      isPersistent: true,
      args: { name: "region" },
    },
    {
      name: "--no-verify-ssl",
      description: "Don't verify AWS SSL certificates",
      isPersistent: true,
    },
    {
      name: "--endpoint-url",
      description: "Override the endpoint URL used for AWS API calls",
      isPersistent: true,
      hidden: true,
      args: { name: "url" },
    },
    {
      name: "--debugboto",
      description: "Show debug info for botocore",
      isPersistent: true,
      hidden: true,
    },
  ],
  subcommands: [
    {
      name: "abort",
      description: "Cancels an environment update or deployment",
      args: environmentArg(),
    },
    {
      name: "appversion",
      description: "Listing and managing application versions",
      options: [
        {
          name: ["-d", "--delete"],
          description: "Delete the specified application version",
          args: { name: "VERSION_LABEL" },
        },
        {
          name: ["-c", "--create"],
          description: "Create a new version for your application",
        },
        {
          name: ["-a", "--application"],
          description: "The name of the application you are addressing",
          args: { name: "application-name" },
        },
        {
          name: ["-l", "--label"],
          description: "Label name which the version will be given",
          args: { name: "version-label" },
        },
        {
          name: ["-m", "--message"],
          description: "Description for the version",
          args: { name: "version-description" },
        },
        {
          name: "--staged",
          description:
            "Create application version using files staged in git index instead of the HEAD commit",
        },
        timeoutOption,
        sourceOption(
          "Source of code to create the application version directly"
        ),
        processOption,
      ],
      subcommands: [
        {
          name: "lifecycle",
          description: "Modifying application version lifecycle policy",
          options: [
            {
              name: ["-p", "--print"],
              description:
                "Print the current application version lifecycle policy",
            },
          ],
        },
      ],
    },
    {
      name: "clone",
      description:
        "Clones an environment to a new environment so that both have identical environment settings",
      args: environmentArg("The name of the environment to clone"),
      options: [
        {
          name: ["-n", "--clone_name"],
          description: "Desired name for the cloned environment",
          args: { name: "name" },
        },
        {
          name: ["-c", "--cname"],
          description: "Desired CNAME prefix for the cloned environment",
          args: { name: "cname" },
        },
        {
          name: "--scale",
          description: "Number of desired instances",
          args: { name: "number" },
        },
        tagsOption(),
        envvarsOption,
        nohangOption("clone"),
        timeoutOption,
        {
          name: "--exact",
          description:
            "Match the platform version of the original environment instead of upgrading to the latest",
        },
      ],
    },
    {
      name: "codesource",
      description:
        "Configures the code source for the EB CLI to use by default",
      args: {
        name: "sourcename",
        description: "Name of the code source to set as default",
        isOptional: true,
        suggestions: [
          { name: "codecommit", description: "Use AWS CodeCommit" },
          { name: "local", description: "Use local sources" },
        ],
      },
    },
    {
      name: "config",
      description:
        "Modify an environment's configuration. Use subcommands to manage saved configurations",
      args: environmentArg("Environment name or template name"),
      options: [
        nohangOption("config"),
        timeoutOption,
        {
          name: "--cfg",
          description: "Name of a saved configuration to apply",
          args: {
            name: "configuration-name",
            generators: generateConfigNames,
          },
        },
        tagsOption(),
        {
          name: ["-d", "--display"],
          description: "Display current environment configuration settings",
        },
        {
          name: ["-u", "--update"],
          description:
            "Update configuration settings for the environment from inline JSON/YAML or a file:// URL",
          args: { name: "configuration" },
        },
        {
          name: ["-f", "--format"],
          description: "String format for output",
          args: {
            name: "format",
            default: "yaml",
            suggestions: ["json", "yaml"],
          },
        },
      ],
      subcommands: [
        {
          name: "save",
          description: "Save a configuration of the environment",
          args: environmentArg(),
          options: [
            {
              name: "--cfg",
              description: "Name of the configuration",
              args: { name: "configuration-name" },
            },
            tagsOption(),
          ],
        },
        {
          name: "put",
          description: "Upload a configuration to S3",
          args: {
            name: "configuration-name",
            description: "Name or path of the local saved configuration",
            template: "filepaths",
          },
        },
        {
          name: "get",
          description: "Download a configuration from S3",
          args: {
            name: "configuration-name",
            description: "Name of the saved configuration",
            generators: generateConfigNames,
          },
        },
        {
          name: "delete",
          description: "Delete a configuration",
          args: {
            name: "configuration-name",
            description: "Name of the saved configuration",
            generators: generateConfigNames,
          },
        },
        {
          name: "list",
          description: "List all configurations",
        },
      ],
    },
    {
      name: "console",
      description:
        "Opens the environment in the AWS Elastic Beanstalk Management Console",
      args: environmentArg(),
    },
    {
      name: "create",
      description: "Creates a new environment",
      args: {
        name: "environment-name",
        description: "Desired environment name",
        isOptional: true,
      },
      options: [
        {
          name: ["-m", "--modules"],
          description: "A list of modules",
          args: { name: "module", isVariadic: true },
        },
        {
          name: ["-g", "--env-group-suffix"],
          description: "Group suffix",
          args: { name: "groupname" },
        },
        {
          name: ["-c", "--cname"],
          description: "CNAME prefix",
          args: { name: "cname" },
        },
        {
          name: ["-t", "--tier"],
          description: "Environment tier type",
          args: {
            name: "tier",
            suggestions: [
              { name: "webserver", description: "Web server tier" },
              { name: "webserver/standard", description: "Web server tier" },
              { name: "worker", description: "Worker tier" },
              { name: "worker/sqs/http", description: "Worker tier" },
            ],
          },
        },
        {
          name: ["-i", "--instance_type"],
          description: "Instance type, e.g. t3.micro",
          args: { name: "instance-type" },
        },
        {
          name: ["-p", "--platform"],
          description: "Platform",
          args: { name: "platform" },
        },
        {
          name: ["-s", "--single"],
          description:
            "Environment will use a single instance with no load balancer",
        },
        {
          name: "--sample",
          description: "Use the sample application",
        },
        {
          name: ["-d", "--branch_default"],
          description: "Set as the branch's default environment",
        },
        {
          name: ["-ip", "--instance_profile"],
          description: "EC2 instance profile",
          args: { name: "instance-profile" },
        },
        {
          name: ["-sr", "--service-role"],
          description: "Service role",
          args: { name: "service-role" },
        },
        {
          name: "--version",
          description: "Version label to deploy",
          args: { name: "version-label" },
        },
        keynameOption("EC2 SSH key pair name"),
        {
          name: "--scale",
          description: "Number of desired instances",
          args: { name: "number" },
        },
        nohangOption("create"),
        timeoutOption,
        tagsOption(),
        envvarsOption,
        {
          name: "--cfg",
          description: "Saved configuration name",
          args: {
            name: "configuration-name",
            generators: generateConfigNames,
          },
        },
        sourceOption("Source of code to create the environment from directly"),
        {
          name: "--elb-type",
          description: "Load balancer type",
          args: {
            name: "type",
            suggestions: ["classic", "application", "network"],
          },
        },
        {
          name: ["-ls", "--shared-lb"],
          description: "ARN of a shared load balancer",
          args: { name: "arn" },
        },
        {
          name: ["-lp", "--shared-lb-port"],
          description: "Port number for the shared load balancer listener",
          args: { name: "port" },
        },
        {
          name: ["-es", "--enable-spot"],
          description: "Enable Spot Instances in the new environment",
        },
        {
          name: ["-sm", "--spot-max-price"],
          description: "Maximum price for Spot Instances",
          args: { name: "price" },
        },
        {
          name: ["-it", "--instance-types"],
          description:
            "Comma-separated list of EC2 instance types to be used in the new environment",
          args: { name: "instance-types" },
        },
        {
          name: ["-sb", "--on-demand-base-capacity"],
          description:
            "Minimum number of On-Demand Instances in a mixed On-Demand / Spot environment",
          args: { name: "number" },
        },
        {
          name: ["-sp", "--on-demand-above-base-capacity"],
          description:
            "Percentage of additional On-Demand Instances in a mixed On-Demand / Spot environment",
          args: { name: "percentage" },
        },
        {
          name: ["-im", "--min-instances"],
          description: "Minimum number of instances in the new environment",
          args: { name: "number" },
        },
        {
          name: ["-ix", "--max-instances"],
          description: "Maximum number of instances in the new environment",
          args: { name: "number" },
        },
        {
          name: ["-db", "--database"],
          description: "Create a database",
        },
        {
          name: ["-db.user", "--database.username"],
          description: "Master username for the database",
          args: { name: "username" },
        },
        {
          name: ["-db.pass", "--database.password"],
          description: "Master password for the database",
          args: { name: "password" },
        },
        {
          name: ["-db.i", "--database.instance"],
          description: "Instance class of the database",
          args: { name: "instance-class" },
        },
        {
          name: ["-db.version", "--database.version"],
          description: "Engine version of the database",
          args: { name: "version" },
        },
        {
          name: ["-db.size", "--database.size"],
          description: "Allocated storage size of the database in GB",
          args: { name: "size" },
        },
        {
          name: ["-db.engine", "--database.engine"],
          description: "Engine of the database",
          args: { name: "engine" },
        },
        {
          name: "--vpc",
          description: "Create the environment inside a VPC",
        },
        {
          name: "--vpc.id",
          description: "ID of the VPC",
          args: { name: "vpc-id" },
        },
        {
          name: "--vpc.ec2subnets",
          description: "Comma-separated subnet IDs for the EC2 instances",
          args: { name: "subnet-ids" },
        },
        {
          name: "--vpc.elbsubnets",
          description: "Comma-separated subnet IDs for the load balancer",
          args: { name: "subnet-ids" },
        },
        {
          name: "--vpc.elbpublic",
          description: "Launch the load balancer in a public subnet",
        },
        {
          name: "--vpc.publicip",
          description: "Associate public IP addresses with the EC2 instances",
        },
        {
          name: "--vpc.securitygroups",
          description: "Comma-separated security group IDs",
          args: { name: "security-group-ids" },
        },
        {
          name: "--vpc.dbsubnets",
          description: "Comma-separated subnet IDs for the database",
          args: { name: "subnet-ids" },
        },
        {
          name: ["-pr", "--process"],
          description: "Enable preprocessing of the application version",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploys your source code to the environment",
      args: environmentArg(),
      options: [
        {
          name: "--modules",
          description: "Modules to deploy",
          args: { name: "module", isVariadic: true },
        },
        {
          name: ["-g", "--env-group-suffix"],
          description: "Group name to append to the environment name",
          args: { name: "groupname" },
        },
        {
          name: "--version",
          description: "An existing version label to deploy",
          args: { name: "version-label" },
        },
        {
          name: ["-l", "--label"],
          description: "Label name which the version will be given",
          args: { name: "version-label" },
        },
        {
          name: ["-m", "--message"],
          description: "Description for the version",
          args: { name: "version-description" },
        },
        nohangOption("deploy"),
        {
          name: "--staged",
          description: "Deploy files staged in git rather than the HEAD commit",
        },
        timeoutOption,
        sourceOption("Source of code to deploy directly"),
        processOption,
        {
          name: "--archive",
          description:
            "Directory or ZIP file containing application version source code",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "events",
      description: "Gets recent events",
      args: environmentArg(),
      options: [followOption],
    },
    {
      name: "health",
      description: "Shows detailed environment health",
      args: environmentArg(),
      options: [
        {
          name: "--refresh",
          description: "Refresh the health view",
        },
        {
          name: "--mono",
          description: "No color",
        },
        {
          name: "--view",
          description: "Health view to display",
          args: {
            name: "view",
            default: "split",
            suggestions: ["split", "status", "request", "cpu"],
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initializes your directory with the EB CLI",
      args: {
        name: "application-name",
        description: "The name of the application",
        isOptional: true,
      },
      options: [
        {
          name: ["-e", "--environment-name"],
          description: "Default environment name",
          args: { name: "environment-name" },
        },
        {
          name: ["-m", "--modules"],
          description: "Module directories",
          args: {
            name: "module",
            template: "folders",
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--platform"],
          description: "Default platform",
          args: { name: "platform" },
        },
        keynameOption("Default EC2 key name"),
        interactiveOption,
        sourceOption("Source of code to set as default"),
        tagsOption(),
      ],
    },
    {
      name: "labs",
      description: "Extra experimental commands",
      subcommands: [
        {
          name: "cleanup-versions",
          description: "Cleans up old application versions",
          args: environmentArg(),
          options: [
            {
              name: "--num-to-leave",
              description: "Number of unused versions to leave",
              args: { name: "NUM", default: "10" },
            },
            {
              name: "--older-than",
              description: "Delete only versions older than the given days",
              args: { name: "DAYS", default: "60" },
            },
            forceOption("Don't prompt for confirmation"),
          ],
        },
        {
          name: "convert-dockerrun",
          description:
            "Converts Dockerrun.aws.json from version 1 to version 2",
        },
        {
          name: "download",
          description: "Download application version",
          args: environmentArg(),
        },
        {
          name: "quicklink",
          description: "Generate a quick-launch link for your project",
          args: environmentArg(),
        },
        {
          name: ["setup-cloudwatchlogs", "setup-cwl"],
          description:
            "Create .ebextensions files necessary for setting up CloudWatch used in environments",
          options: [
            {
              name: "--remove",
              description: "Remove .ebextensions",
            },
          ],
        },
        {
          name: "setup-ssl",
          description: "Sets up SSL on your environment",
          args: environmentArg(),
          options: [
            {
              name: "--cert-file",
              description: "Certificate file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--private-key",
              description: "Private key file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--cert-chain",
              description: "Certificate chain file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--name",
              description: "Certificate name (default: the environment name)",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "list",
      description: "Lists all environments",
      options: [
        {
          name: ["-a", "--all"],
          description: "Show environments for all applications",
        },
      ],
    },
    {
      name: "local",
      description: "Runs commands on your local machine",
      subcommands: [
        {
          name: "run",
          description: "Runs the Docker container on your local machine",
          options: [
            envvarsOption,
            {
              name: "--port",
              description:
                "The host port that is exposed and mapped to the container port",
              args: { name: "port" },
            },
            {
              name: "--allow-insecure-ssl",
              description: "Allow insecure connections to the docker registry",
            },
          ],
        },
        {
          name: "logs",
          description: "Prints where logs are locally saved",
        },
        {
          name: "open",
          description: "Opens the application URL in a browser",
        },
        {
          name: "status",
          description: "Gets container information and status",
        },
        {
          name: "setenv",
          description: "Sets local environment variables",
          args: {
            name: "VAR_NAME=KEY",
            description: "Space-separated list of environment variables",
            isVariadic: true,
          },
        },
        {
          name: "printenv",
          description: "Shows local environment variables",
        },
      ],
    },
    {
      name: "logs",
      description: "Gets recent logs",
      args: environmentArg(),
      options: [
        {
          name: ["-a", "--all"],
          description: "Retrieve all logs",
        },
        {
          name: ["-z", "--zip"],
          description: "Retrieve all logs as .zip",
        },
        {
          name: ["-ai", "--analyze"],
          description:
            "AI-powered analysis of logs, events, and environment health",
        },
        {
          name: ["-i", "--instance"],
          description: "Retrieve logs only for this instance",
          args: { name: "instance-id" },
        },
        {
          name: ["-g", "--log-group"],
          description: "Retrieve logs only for this log group",
          args: { name: "log-group" },
        },
        {
          name: ["-cw", "--cloudwatch-logs"],
          description: "Enable or disable log streaming to CloudWatch Logs",
          args: {
            name: "action",
            isOptional: true,
            default: "enable",
            suggestions: ["enable", "disable"],
          },
        },
        {
          name: ["-cls", "--cloudwatch-log-source"],
          description:
            "CloudWatch logs source to enable/disable or to retrieve (all is valid only when enabling or disabling)",
          args: {
            name: "source",
            suggestions: [
              { name: "instance", description: "Instance logs" },
              {
                name: "environment-health",
                description: "Environment health logs",
              },
              {
                name: "all",
                description: "All log sources (enable/disable only)",
              },
            ],
          },
        },
        {
          name: "--stream",
          description: "Stream logs from CloudWatch Logs",
        },
      ],
    },
    {
      name: "migrate",
      description:
        "Migrates an IIS site or application from a source Windows machine to an environment hosted on AWS Elastic Beanstalk",
      options: [
        {
          name: ["-s", "--sites"],
          description:
            "Comma-separated list of IIS sites to migrate (default: all sites on the server)",
          args: { name: "sites" },
        },
        {
          name: ["-e", "--environment-name"],
          description:
            "Name for the new Elastic Beanstalk environment (default: EBMigratedEnv)",
          args: { name: "environment-name" },
        },
        {
          name: ["-a", "--application-name"],
          description:
            "Name for the new Elastic Beanstalk application (default: EBMigratedApp)",
          args: { name: "application-name" },
        },
        {
          name: ["-p", "--platform"],
          description:
            "Elastic Beanstalk platform runtime for the environment (detected automatically if not specified)",
          args: { name: "platform" },
        },
        {
          name: ["-i", "--instance-type"],
          description:
            "EC2 instance type for the environment (default: c5.2xlarge)",
          args: { name: "instance-type" },
        },
        {
          name: ["-c", "--cname"],
          description: "CNAME prefix for the environment",
          args: { name: "cname" },
        },
        {
          name: ["-ip", "--instance-profile"],
          description:
            "Instance profile to associate with the EC2 instances running on the environment",
          args: { name: "instance-profile" },
        },
        {
          name: ["-sr", "--service-role"],
          description:
            "Name of the IAM service role for Elastic Beanstalk to manage related AWS services",
          args: { name: "service-role" },
        },
        {
          name: ["-es", "--ebs-snapshots"],
          description:
            "Comma-separated list of EBS snapshot IDs to associate with the environment",
          args: { name: "snapshot-id", isVariadic: true },
        },
        {
          name: ["-st", "--stream-to-cloudwatch"],
          description:
            "Stream EB CLI debug logs and execution metrics to CloudWatch",
          hidden: true,
        },
        {
          name: ["-hc", "--use-host-ebs-configuration"],
          description:
            "Generate EBS snapshots from volumes attached to the current instance",
          hidden: true,
        },
        keynameOption(
          "EC2 key pair to enable SSH/RDP access to environment instances"
        ),
        {
          name: ["-in", "--interactive"],
          description:
            "Force interactive mode for the migration process, prompting for configuration values even when defaults are available",
        },
        {
          name: ["-t", "--tags"],
          description:
            "Comma-separated list of key=value pairs to tag the new application, environment and application version",
          args: { name: "key=value" },
        },
        {
          name: ["-d", "--copy-deps"],
          description:
            "Include all dependency DLLs in the environment, including those in the Global Assembly Cache",
          hidden: true,
        },
        {
          name: ["-ao", "--archive-only"],
          description:
            "Create only the destination archive directory without deployment",
        },
        {
          name: ["-op", "--on-prem-mode"],
          description: "Execute EB CLI in EC2-agnostic mode",
          hidden: true,
        },
        {
          name: ["-cf", "--copy-firewall-config"],
          description:
            "Copy the source server firewall configuration to the destination for all HTTP ports with active bindings",
        },
        {
          name: "--encrypt-ebs-volumes",
          description:
            "Enforce encryption for all new EBS volumes (an account-wide setting affecting all future EBS volume creation)",
        },
        {
          name: "--ssl-certificates",
          description:
            "Comma-separated list of ARNs of ACM SSL certificates to associate with the Application Load Balancer",
          args: { name: "certificate-arns" },
        },
        {
          name: "--archive",
          description:
            "Directory or ZIP file previously generated by `eb migrate --archive-only`, to deploy",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-vpc", "--vpc-config"],
          description:
            "VPC config for the environment, as a JSON file or JSON string with id, publicip, elbscheme, ec2subnets, securitygroups and elbsubnets",
          args: { name: "vpc-config", template: "filepaths" },
        },
        ...remoteOptions,
      ],
      subcommands: [
        {
          name: "explore",
          description:
            "List all available IIS sites on this server (use --verbose for detailed information)",
          options: remoteOptions,
        },
        {
          name: "cleanup",
          description:
            "Remove all previous migration artifacts from ./migrations except ./migrations/latest",
          options: [
            {
              name: "--force",
              description:
                "Force non-interactive mode, skip the confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "open",
      description: "Opens the application URL in a browser",
      args: environmentArg("The name of the environment to open"),
    },
    {
      name: "platform",
      description: "Commands for managing platforms",
      subcommands: [
        {
          name: "create",
          description: "Creates a new custom platform version",
          args: versionArg("Platform version"),
          options: [
            {
              name: ["-M", "--major-increment"],
              description: "Major version increment",
            },
            {
              name: ["-m", "--minor-increment"],
              description: "Minor version increment",
            },
            {
              name: ["-p", "--patch-increment"],
              description: "Patch version increment",
            },
            {
              name: ["-i", "--instance-type"],
              description: "Instance type, e.g. t3.micro",
              args: { name: "instance-type" },
            },
            {
              name: ["-ip", "--instance_profile"],
              description:
                "The instance profile to use when creating AMIs for custom platforms",
              args: { name: "instance-profile" },
            },
            {
              name: "--vpc.id",
              description: "ID of the VPC to launch the Packer builder into",
              args: { name: "vpc-id" },
            },
            {
              name: "--vpc.subnets",
              description: "Subnets to launch the Packer builder into",
              args: { name: "subnet-ids" },
            },
            {
              name: "--vpc.publicip",
              description:
                "Associate public IPs to EC2 instances launched if specified",
            },
            timeoutOption,
            tagsOption(),
          ],
        },
        {
          name: "delete",
          description: "Deletes a custom platform version",
          args: versionArg("Platform version"),
          options: [
            {
              name: "--cleanup",
              description: 'Remove all platform versions in the "Failed" state',
            },
            {
              name: "--all-platforms",
              description: "Enable cleanup for all of your platforms",
            },
            forceOption(),
          ],
        },
        {
          name: "events",
          description:
            "Displays events for the custom platform associated with this workspace",
          args: versionArg("Version to retrieve events for"),
          options: [followOption],
        },
        {
          name: "init",
          description:
            "Initializes your directory with the EB CLI to create and manage a custom platform",
          args: {
            name: "platform-name",
            description: "Platform name",
            isOptional: true,
          },
          options: [interactiveOption, keynameOption("Default EC2 key name")],
        },
        {
          name: "list",
          description: "Lists the platforms or custom platform versions",
          options: [
            {
              name: ["-a", "--all-platforms"],
              description:
                "List the versions of all platforms owned by your account (platform workspace only)",
            },
            {
              name: ["-s", "--status"],
              description: "The status to filter on (platform workspace only)",
              args: {
                name: "status",
                suggestions: ["Ready", "Failed", "Deleting", "Creating"],
              },
            },
          ],
        },
        {
          name: "logs",
          description: "Retrieves logs for your custom platform build event",
          args: versionArg("Platform version to retrieve logs for"),
          options: [
            {
              name: "--stream",
              description: "Stream logs from CloudWatch Logs",
            },
          ],
        },
        {
          name: "select",
          description: "Selects a default platform",
        },
        {
          name: "show",
          description: "Shows information about the current platform",
        },
        {
          name: "status",
          description:
            "Displays metadata about your current custom platform version",
          args: versionArg("Platform version"),
        },
        {
          name: "use",
          description: "Selects the active custom platform",
          args: {
            name: "platform",
            description: "Platform name",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "printenv",
      description: "Shows the environment variables",
      args: environmentArg("The name of the environment to print"),
    },
    {
      name: "restore",
      description: "Restores a terminated environment",
      args: {
        name: "environment-id",
        description: "The ID of the environment to restore",
        isOptional: true,
      },
      options: [timeoutOption],
    },
    {
      name: "scale",
      description: "Changes the number of running instances",
      args: [
        {
          name: "number",
          description: "Number of desired instances",
        },
        environmentArg(),
      ],
      options: [forceOption(), timeoutOption],
    },
    {
      name: "setenv",
      description: "Sets environment variables",
      args: {
        name: "VAR_NAME=KEY",
        description: "Space-separated list of environment variables",
        isVariadic: true,
      },
      options: [
        {
          name: ["-e", "--environment"],
          description: "Environment name",
          args: { name: "environment-name", generators: generateNames },
        },
        timeoutOption,
      ],
    },
    {
      name: "ssh",
      description: "Opens the SSH client to connect to an instance",
      args: environmentArg("The name of the environment to connect to"),
      options: [
        {
          name: ["-n", "--number"],
          description: "Index of the instance in the list",
          args: { name: "number" },
        },
        {
          name: ["-i", "--instance"],
          description: "The ID of the instance to connect to",
          args: { name: "instance-id" },
        },
        {
          name: ["-c", "--command"],
          description:
            "Execute a shell command on the specified instance instead of starting an SSH session",
          args: { name: "command" },
        },
        {
          name: ["-e", "--custom"],
          description:
            "Specify an SSH command to use instead of 'ssh -i keyfile', without the remote user and hostname",
          args: { name: "ssh-command" },
        },
        {
          name: ["-o", "--keep_open"],
          description: "Keep port 22 open",
        },
        forceOption("Force port 22 open to 0.0.0.0"),
        {
          name: "--setup",
          description: "Set up SSH for the environment",
        },
        {
          name: "--timeout",
          description:
            "Timeout period in minutes (can only be used with --setup)",
          dependsOn: ["--setup"],
          args: { name: "minutes" },
        },
      ],
    },
    {
      name: "status",
      description: "Gets environment information and status",
      args: environmentArg(),
    },
    {
      name: "swap",
      description: "Swaps two environment CNAMEs with each other",
      args: environmentArg("Name of the source environment"),
      options: [
        {
          name: ["-n", "--destination_name"],
          description: "Name of the destination environment",
          args: { name: "environment-name", generators: generateNames },
        },
      ],
    },
    {
      name: "tags",
      description:
        "Allows adding, deleting, updating, and listing of environment tags",
      args: environmentArg(
        "Environment on which to perform the tags operation"
      ),
      options: [
        {
          name: ["-l", "--list"],
          description: "List all environment resource tags",
        },
        {
          name: ["-a", "--add"],
          description:
            "Create new environment tags provided as a comma-separated list of key=value pairs",
          args: { name: "key1=value1[,key2=value2,...]" },
        },
        {
          name: ["-d", "--delete"],
          description:
            "Delete existing environment tags provided as a comma-separated list of keys",
          args: { name: "key1[,key2,...]" },
        },
        {
          name: ["-u", "--update"],
          description:
            "Update existing environment tags provided as a comma-separated list of key=value pairs",
          args: { name: "key1=value1[,key2=value2,...]" },
        },
        {
          name: "--resource",
          description: "Find tags associated with the given resource ARN",
          args: { name: "resource-arn" },
        },
      ],
    },
    {
      name: "terminate",
      description: "Terminates the environment",
      args: environmentArg("The name of the environment to terminate"),
      options: [
        forceOption(),
        {
          name: "--ignore-links",
          description: "Terminate even if the environment is linked",
        },
        {
          name: "--all",
          description:
            "Terminate the application and everything in it, not only the environment",
        },
        nohangOption("terminate"),
        timeoutOption,
      ],
    },
    {
      name: "upgrade",
      description:
        "Updates the environment to the most recent platform version",
      args: environmentArg(),
      options: [
        timeoutOption,
        forceOption(),
        {
          name: "--noroll",
          description: "Do not enable rolling updates before upgrade",
        },
      ],
    },
    {
      name: "use",
      description: "Sets the specified environment as the default environment",
      args: {
        name: "environment-name",
        description: "The name of the environment to use",
        generators: generateNames,
      },
      options: [sourceOption("Source of code to set as default")],
    },
  ],
};

export default completionSpec;
