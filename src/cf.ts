// cf (Cloud Foundry CLI) v8.19.1 (latest release tag of cloudfoundry/cli, matches the Homebrew cloudfoundry-cli formula, 2026-11-19).
// Source: static read of the v8.19.1 checkout (command/common/command_list_v7.go, command/v7/*.go, command/plugin/*.go,
// command/flag/*.go go-flags struct tags plus Usage() text); the binary was not built or run. Names, aliases, descriptions,
// flags and positional arguments come from those tags. Removed upstream and dropped here: files, password (now passwd).
// v3-push is a hidden duplicate of push. The hidden update-service --upgrade flag (it only errors out) is omitted.
// The list generators skip 3 leading lines because v8 prints a heading, an empty line and the table header (read from source).
const postProcessCfList =
  (description: string, leadingLines: number) => (out: string) =>
    out
      .trim() // output can have a trailing newline, prevents empty suggestion
      .split("\n")
      .slice(leadingLines)
      .map((name) => ({ name, description }));

// cf v8 prints "Getting ... as <user>...", an empty line and the table header before the rows
const generateAppNames: Fig.Generator = {
  script: ["bash", "-c", `cf apps | cut -d " " -f1`],
  postProcess: postProcessCfList("App name", 3),
};

const generateOrgs: Fig.Generator = {
  script: ["cf", "orgs"],
  postProcess: postProcessCfList("Org", 3),
};

const generateSpaces: Fig.Generator = {
  script: ["cf", "spaces"],
  postProcess: postProcessCfList("Space", 3),
};

const generateServices: Fig.Generator = {
  script: ["bash", "-c", `cf services | cut -d " " -f1 `],
  postProcess: postProcessCfList("Service", 3),
};

const appNameArg: Fig.Arg = {
  name: "APP_NAME",
  description: "The application name",
  generators: generateAppNames,
};

const serviceInstanceArg: Fig.Arg = {
  name: "SERVICE_INSTANCE",
  description: "The service instance name",
  generators: generateServices,
};

const createServiceKeyServiceInstanceArg: Fig.Arg = {
  name: "SERVICE_INSTANCE",
  description: "The service instance",
  generators: generateServices,
};

const serviceKeyArg: Fig.Arg = {
  name: "SERVICE_KEY",
  description: "The service key",
};

const orgArg: Fig.Arg = {
  name: "ORG",
  description: "The organization",
  generators: generateOrgs,
};

const spaceArg: Fig.Arg = {
  name: "SPACE",
  description: "The space",
  generators: generateSpaces,
};

const orgQuotaNameArg: Fig.Arg = {
  name: "ORG_QUOTA_NAME",
  description: "The organization quota name",
};

const spaceQuotaNameArg: Fig.Arg = {
  name: "SPACE_QUOTA_NAME",
  description: "The space quota",
};

const serviceOfferingArg: Fig.Arg = {
  name: "SERVICE_OFFERING",
  description: "The service offering name",
};

const securityGroupArg: Fig.Arg = {
  name: "SECURITY_GROUP",
  description: "The security group",
};

const segmentNameArg: Fig.Arg = {
  name: "SEGMENT_NAME",
  description: "The isolation segment name",
};

const orgNameArg: Fig.Arg = {
  name: "ORG_NAME",
  description: "The organization name",
  generators: generateOrgs,
};

const featureNameArg: Fig.Arg = {
  name: "FEATURE_NAME",
  description: "The feature flag name",
};

const resourceNameArg: Fig.Arg = {
  name: "RESOURCE_NAME",
  description: "The name of the resource",
};

const originOption: Fig.Option = {
  name: "--origin",
  description: "Indicates the identity provider to be used for authentication",
  args: {
    name: "ORIGIN",
  },
};

const instanceStepsOption: Fig.Option = {
  name: "--instance-steps",
  description:
    "An array of percentage steps to deploy when using deployment strategy canary. (e.g. 20,40,60)",
  args: {
    name: "INSTANCE_STEPS",
  },
};

const maxInFlightOption: Fig.Option = {
  name: "--max-in-flight",
  description:
    "Defines the maximum number of instances that will be actively being started. Only applies when --strategy flag is specified",
  args: {
    name: "MAX_IN_FLIGHT",
  },
};

const noWaitOption: Fig.Option = {
  name: "--no-wait",
  description: "Exit when the first instance of the web process is healthy",
};

const redactEnvOption: Fig.Option = {
  name: "--redact-env",
  description:
    "Do not print values for environment vars set in the application manifest",
};

const strategyOption: Fig.Option = {
  name: "--strategy",
  description: "Deployment strategy can be canary, rolling or null",
  args: {
    name: "STRATEGY",
    suggestions: ["rolling", "canary"],
  },
};

const forceDeletionOption: Fig.Option = {
  name: "-f",
  description: "Force deletion without confirmation",
};

const parametersAsJsonOption: Fig.Option = {
  name: "-c",
  description:
    "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file. For a list of supported configuration parameters, see documentation for the particular service offering",
  args: {
    name: "PARAMETERS_AS_JSON",
    template: "filepaths",
  },
};

const tagsOption: Fig.Option = {
  name: "-t",
  description: "User provided tags",
  args: {
    name: "TAGS",
  },
};

const waitOption: Fig.Option = {
  name: ["--wait", "-w"],
  description: "Wait for the operation to complete",
};

const forceOption: Fig.Option = {
  name: ["--force", "-f"],
  description: "Force deletion without confirmation",
};

const hostnameOption: Fig.Option = {
  name: ["--hostname", "-n"],
  description: "Hostname used to identify the HTTP route",
  args: {
    name: "HOSTNAME",
  },
};

const pathOption: Fig.Option = {
  name: "--path",
  description: "Path used to identify the HTTP route",
  args: {
    name: "PATH",
  },
};

const portOption: Fig.Option = {
  name: "--port",
  description: "Port used to identify the TCP route",
  args: {
    name: "PORT",
  },
};

const createRouteHostnameOption: Fig.Option = {
  name: ["--hostname", "-n"],
  description: "Hostname for the HTTP route (required for shared domains)",
  args: {
    name: "HOSTNAME",
  },
};

const createRoutePathOption: Fig.Option = {
  name: "--path",
  description: "Path for the HTTP route",
  args: {
    name: "PATH",
  },
};

const optionOption: Fig.Option = {
  name: ["--option", "-o"],
  description: "Set the value of a per-route option",
  isRepeatable: true,
  args: {
    name: "OPTION",
  },
};

const stackOption: Fig.Option = {
  name: ["--stack", "-s"],
  description: "Specify stack to disambiguate buildpacks with the same name",
  args: {
    name: "STACK",
  },
};

const lifecycleOption: Fig.Option = {
  name: ["--lifecycle", "-l"],
  description:
    "Specify lifecycle to disambiguate buildpacks with the same name",
  args: {
    name: "LIFECYCLE",
    suggestions: ["buildpack", "cnb"],
  },
};

const brokerOption: Fig.Option = {
  name: ["--broker", "-b"],
  description:
    "Specify a service broker to disambiguate service offerings or service plans with the same name",
  args: {
    name: "BROKER",
  },
};

const offeringOption: Fig.Option = {
  name: ["--offering", "-e"],
  description:
    "Specify a service offering to disambiguate service plans with the same name",
  args: {
    name: "OFFERING",
  },
};

const sourceOption: Fig.Option = {
  name: "--source",
  description:
    "Specify a route policy source to disambiguate when a route has multiple policies",
  args: {
    name: "SOURCE",
  },
};

const skipSslOption: Fig.Option = {
  name: "-k",
  description: "Skip SSL certificate validation",
  hidden: true,
};

const pushOptions: Fig.Option[] = [
  {
    name: ["--app-start-timeout", "-t"],
    description:
      "Time (in seconds) allowed to elapse between starting up an app and the first healthy response from the app",
    args: {
      name: "HEALTH_TIMEOUT",
    },
  },
  {
    name: ["--buildpack", "-b"],
    description:
      "Custom buildpack by name (e.g. my-buildpack) or Git URL (e.g. 'https://github.com/cloudfoundry/java-buildpack.git') or Git URL with a branch or tag (e.g. 'https://github.com/cloudfoundry/java-buildpack.git#v3.3.0' for 'v3.3.0' tag). To use built-in buildpacks only, specify 'default' or 'null'",
    isRepeatable: true,
    args: {
      name: "BUILDPACK_NAME",
    },
  },
  {
    name: ["--disk", "-k"],
    description: "Disk limit (e.g. 256M, 1024M, 1G)",
    args: {
      name: "DISK",
    },
  },
  {
    name: ["--docker-image", "-o"],
    description: "Docker image to use (e.g. user/docker-image-name)",
    args: {
      name: "REGISTRY_HOST",
    },
  },
  {
    name: "--docker-username",
    description:
      "Repository username; used with password from environment variable CF_DOCKER_PASSWORD",
    args: {
      name: "USERNAME",
    },
  },
  {
    name: "--droplet",
    description: "Path to a tgz file with a pre-staged app",
    args: {
      name: "DROPLET",
      template: "filepaths",
    },
  },
  {
    name: "--endpoint",
    description:
      "Valid path on the app for an HTTP health check. Only used when specifying --health-check-type=http",
    args: {
      name: "ENDPOINT",
    },
  },
  {
    name: ["--health-check-type", "-u"],
    description:
      "Application health check type. Defaults to 'port'. 'http' requires a valid endpoint, for example, '/health'",
    args: {
      name: "HEALTH_CHECK_TYPE",
      suggestions: ["http", "port", "process"],
    },
  },
  {
    name: ["--instances", "-i"],
    description: "Number of instances",
    args: {
      name: "NUM_INSTANCES",
    },
  },
  instanceStepsOption,
  {
    name: "--lifecycle",
    description: "App lifecycle type to stage and run the app",
    args: {
      name: "LIFECYCLE",
      suggestions: ["buildpack", "docker", "cnb"],
    },
  },
  {
    name: ["--log-rate-limit", "-l"],
    description:
      "Log rate limit per second, in bytes (e.g. 128B, 4K, 1M). -l=-1 represents unlimited",
    args: {
      name: "LOG_RATE_LIMIT",
    },
  },
  {
    name: ["--manifest", "-f"],
    description: "Path to manifest",
    exclusiveOn: ["--no-manifest"],
    args: {
      name: "MANIFEST_PATH",
      template: "filepaths",
    },
  },
  maxInFlightOption,
  {
    name: ["--memory", "-m"],
    description: "Memory limit (e.g. 256M, 1024M, 1G)",
    args: {
      name: "MEMORY",
    },
  },
  {
    name: "--no-manifest",
    description: "Ignore manifest file",
    exclusiveOn: ["--manifest"],
  },
  {
    name: "--no-route",
    description: "Do not map a route to this app",
    exclusiveOn: ["--random-route"],
  },
  {
    name: "--no-start",
    description: "Do not stage and start the app after pushing",
  },
  noWaitOption,
  {
    name: ["--path", "-p"],
    description:
      "Path to app directory or to a zip file of the contents of the app directory",
    args: {
      name: "PATH",
      template: "filepaths",
    },
  },
  {
    name: "--random-route",
    description:
      "Create a random route for this app (except when no-route is specified in the manifest)",
    exclusiveOn: ["--no-route"],
  },
  redactEnvOption,
  {
    name: ["--stack", "-s"],
    description:
      "Stack to use (a stack is a pre-built file system, including an operating system, that can run apps)",
    args: {
      name: "STACK",
    },
  },
  {
    name: ["--start-command", "-c"],
    description:
      "Startup command, set to null to reset to default start command",
    args: {
      name: "COMMAND",
    },
  },
  strategyOption,
  {
    name: "--task",
    description:
      "Push an app that is used only to execute tasks. The app will be staged, but not started and will have no route assigned",
  },
  {
    name: "--var",
    description:
      "Variable key value pair for variable substitution, (e.g., name=app1); can specify multiple times",
    isRepeatable: true,
    args: {
      name: "KEY",
    },
  },
  {
    name: "--vars-file",
    description:
      "Path to a variable substitution file for manifest; can specify multiple times",
    isRepeatable: true,
    args: {
      name: "VARS_FILE_PATH",
      template: "filepaths",
    },
  },
];

const createQuotaOptions: Fig.Option[] = [
  {
    name: "-a",
    description: "Total number of application instances. (Default: unlimited)",
    args: {
      name: "APP_INSTANCES",
    },
  },
  {
    name: "--allow-paid-service-plans",
    description:
      "Allow provisioning instances of paid service plans. (Default: disallowed)",
  },
  {
    name: "-i",
    description:
      "Maximum amount of memory a process can have (e.g. 1024M, 1G, 10G). (Default: unlimited)",
    args: {
      name: "INSTANCE_MEMORY",
    },
  },
  {
    name: "-m",
    description:
      "Total amount of memory all processes can have (e.g. 1024M, 1G, 10G). -1 represents an unlimited amount. (Default: 0)",
    args: {
      name: "TOTAL_MEMORY",
    },
  },
  {
    name: "-r",
    description:
      "Total number of routes. -1 represents an unlimited amount. (Default: 0)",
    args: {
      name: "ROUTES",
    },
  },
  {
    name: "--reserved-route-ports",
    description:
      "Maximum number of routes that may be created with ports. -1 represents an unlimited amount. (Default: 0)",
    args: {
      name: "RESERVED_ROUTE_PORTS",
    },
  },
  {
    name: "-s",
    description:
      "Total number of service instances. -1 represents an unlimited amount. (Default: 0)",
    args: {
      name: "SERVICE_INSTANCES",
    },
  },
  {
    name: "-l",
    description:
      "Total log volume per second all processes can have, in bytes (e.g. 128B, 4K, 1M). -1 represents an unlimited amount. (Default: -1)",
    args: {
      name: "LOG_VOLUME",
    },
  },
];

const updateQuotaOptions: Fig.Option[] = [
  {
    name: "-a",
    description:
      "Total number of application instances. -1 represents an unlimited amount",
    args: {
      name: "APP_INSTANCES",
    },
  },
  {
    name: "--allow-paid-service-plans",
    description: "Allow provisioning instances of paid service plans",
    exclusiveOn: ["--disallow-paid-service-plans"],
  },
  {
    name: "--disallow-paid-service-plans",
    description: "Disallow provisioning instances of paid service plans",
    exclusiveOn: ["--allow-paid-service-plans"],
  },
  {
    name: "-i",
    description:
      "Maximum amount of memory a process can have (e.g. 1024M, 1G, 10G). -1 represents an unlimited amount",
    args: {
      name: "INSTANCE_MEMORY",
    },
  },
  {
    name: "-m",
    description:
      "Total amount of memory all processes can have (e.g. 1024M, 1G, 10G). -1 represents an unlimited amount",
    args: {
      name: "TOTAL_MEMORY",
    },
  },
  {
    name: "-n",
    description: "New name",
    args: {
      name: "NEW_NAME",
    },
  },
  {
    name: "-r",
    description: "Total number of routes. -1 represents an unlimited amount",
    args: {
      name: "ROUTES",
    },
  },
  {
    name: "--reserved-route-ports",
    description:
      "Maximum number of routes that may be created with ports. -1 represents an unlimited amount",
    args: {
      name: "RESERVED_ROUTE_PORTS",
    },
  },
  {
    name: "-s",
    description:
      "Total number of service instances. -1 represents an unlimited amount",
    args: {
      name: "SERVICE_INSTANCES",
    },
  },
  {
    name: "-l",
    description:
      "Total log volume per second all processes can have, in bytes (e.g. 128B, 4K, 1M). -1 represents an unlimited amount",
    args: {
      name: "LOG_VOLUME",
    },
  },
];

const labelDisambiguationOptions: Fig.Option[] = [
  stackOption,
  lifecycleOption,
  brokerOption,
  offeringOption,
  sourceOption,
];

const completionSpec: Fig.Spec = {
  name: "cf",
  description: "Cloud Foundry CLI",
  subcommands: [
    {
      name: ["help", "h"],
      description: "Show help",
      args: {
        name: "COMMAND_NAME",
        description: "The command name",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "All available CLI commands",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version",
    },
    {
      name: ["login", "l"],
      description: "Log user in",
      options: [
        {
          name: "-a",
          description: "API endpoint (e.g. https://api.example.com)",
          args: {
            name: "API_URL",
          },
        },
        {
          name: "-o",
          description: "Org",
          args: {
            name: "ORG",
            generators: generateOrgs,
          },
        },
        {
          name: "-p",
          description: "Password",
          args: {
            name: "PASSWORD",
          },
        },
        {
          name: "-s",
          description: "Space",
          args: {
            name: "SPACE",
            generators: generateSpaces,
          },
        },
        {
          name: "--skip-ssl-validation",
          description:
            "Skip verification of the API endpoint. Not recommended!",
        },
        {
          name: "--sso",
          description: "Prompt for a one-time passcode to login",
          exclusiveOn: ["--sso-passcode"],
        },
        {
          name: "--sso-passcode",
          description: "One-time passcode",
          exclusiveOn: ["--sso"],
          args: {
            name: "PASSCODE",
          },
        },
        {
          name: "-u",
          description: "Username",
          args: {
            name: "USERNAME",
          },
        },
        {
          name: "--origin",
          description: "Indicates the identity provider to be used for login",
          args: {
            name: "ORIGIN",
          },
        },
      ],
    },
    {
      name: ["logout", "lo"],
      description: "Log user out",
    },
    {
      name: ["passwd", "pw"],
      description: "Change user password",
    },
    {
      name: ["target", "t"],
      description: "Set or view the targeted org or space",
      options: [
        {
          name: "-o",
          description: "Organization",
          args: {
            name: "ORG",
            generators: generateOrgs,
          },
        },
        {
          name: "-s",
          description: "Space",
          args: {
            name: "SPACE",
            generators: generateSpaces,
          },
        },
      ],
    },
    {
      name: "api",
      description: "Set or view target api url",
      args: {
        name: "URL",
        description: "API URL to target",
        isOptional: true,
      },
      options: [
        {
          name: "--skip-ssl-validation",
          description:
            "Skip verification of the API endpoint. Not recommended!",
        },
        {
          name: "--unset",
          description: "Remove all api endpoint targeting",
        },
      ],
    },
    {
      name: "auth",
      description: "Authenticate non-interactively",
      args: [
        {
          name: "USERNAME",
          description: "The username",
          isOptional: true,
        },
        {
          name: "PASSWORD",
          description: "The password",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--client-credentials",
          description:
            "Use (non-user) service account (also called client credentials)",
        },
        originOption,
        {
          name: "--assertion",
          description:
            "Token based authentication with assertion (user) or in combination with client-credentials (non-user)",
          args: {
            name: "ID-TOKEN",
          },
        },
      ],
    },
    {
      name: ["apps", "a"],
      description: "List all apps in the target space",
      options: [
        {
          name: "--labels",
          description: "Selector to filter apps by labels",
          args: {
            name: "SELECTOR",
          },
        },
        {
          name: "--no-stats",
          description: "Do not retrieve process stats",
        },
      ],
    },
    {
      name: "app",
      description: "Display health and status for an app",
      args: appNameArg,
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given app's guid. All other health and status output for the app is suppressed",
        },
      ],
    },
    {
      name: "create-app",
      description: "Create an Application in the target space",
      args: {
        name: "APP_NAME",
        description: "The application name",
      },
      options: [
        {
          name: "--app-type",
          description: "App lifecycle type to stage and run the app",
          args: {
            name: "APP_TYPE",
            default: "buildpack",
            suggestions: ["buildpack", "docker", "cnb"],
          },
        },
        {
          name: ["--buildpack", "-b"],
          description:
            "Custom buildpack by name (e.g. my-buildpack), Docker image (e.g. docker://registry/image:tag), Git URL (e.g. 'https://github.com/cloudfoundry/java-buildpack.git') or Git URL with a branch or tag (e.g. 'https://github.com/cloudfoundry/java-buildpack.git#v3.3.0' for 'v3.3.0' tag). To use built-in buildpacks only, specify 'default' or 'null'",
          isRepeatable: true,
          args: {
            name: "BUILDPACK",
          },
        },
      ],
    },
    {
      name: ["push", "p"],
      description: "Push a new app or sync changes to an existing app",
      args: {
        name: "APP_NAME",
        description: "The application name",
        isOptional: true,
      },
      options: pushOptions,
    },
    {
      name: "scale",
      description:
        "Change or view the instance count, disk space limit, memory limit, and log rate limit for an app",
      args: appNameArg,
      options: [
        {
          name: ["--force", "-f"],
          description: "Force restart of app without prompt",
        },
        {
          name: ["--instances", "-i"],
          description: "Number of instances",
          args: {
            name: "INSTANCES",
          },
        },
        {
          name: "-k",
          description: "Disk limit (e.g. 256M, 1024M, 1G)",
          args: {
            name: "DISK",
          },
        },
        {
          name: "-l",
          description:
            "Log rate limit per second, in bytes (e.g. 128B, 4K, 1M). -l=-1 represents unlimited",
          args: {
            name: "LOG_RATE_LIMIT",
          },
        },
        {
          name: "-m",
          description: "Memory limit (e.g. 256M, 1024M, 1G)",
          args: {
            name: "MEMORY",
          },
        },
        {
          name: "--process",
          description: "App process to scale",
          args: {
            name: "PROCESS",
            default: "web",
          },
        },
      ],
    },
    {
      name: ["delete", "d"],
      description: "Delete an app",
      args: appNameArg,
      options: [
        forceDeletionOption,
        {
          name: "-r",
          description: "Also delete any mapped routes",
        },
      ],
    },
    {
      name: "rename",
      description: "Rename an app",
      args: [
        {
          name: "APP_NAME",
          description: "The current app name",
          generators: generateAppNames,
        },
        {
          name: "NEW_APP_NAME",
          description: "The new app name",
        },
      ],
    },
    {
      name: "cancel-deployment",
      description:
        "Cancel the most recent deployment for an app. Resets the current droplet to the previous deployment's droplet",
      args: appNameArg,
    },
    {
      name: "continue-deployment",
      description: "Continue the most recent deployment for an app",
      args: appNameArg,
      options: [noWaitOption],
    },
    {
      name: ["start", "st"],
      description: "Start an app",
      args: appNameArg,
    },
    {
      name: ["stop", "sp"],
      description: "Stop an app",
      args: appNameArg,
    },
    {
      name: ["restart", "rs"],
      description: "Stop all instances of the app, then start them again",
      args: appNameArg,
      options: [
        instanceStepsOption,
        {
          name: "--max-in-flight",
          description:
            "Defines the maximum number of instances that will be actively restarted at any given time. Only applies when --strategy flag is specified",
          args: {
            name: "MAX_IN_FLIGHT",
          },
        },
        strategyOption,
        noWaitOption,
      ],
    },
    {
      name: ["stage-package", "stage"],
      description: "Stage a package into a droplet",
      args: appNameArg,
      options: [
        {
          name: "--package-guid",
          description:
            "The guid of the package to stage (default: latest ready package)",
          args: {
            name: "PACKAGE_GUID",
          },
        },
      ],
    },
    {
      name: ["restage", "rg"],
      description:
        "Stage the app's latest package into a droplet and restart the app with this new droplet and updated configuration (environment variables, service bindings, buildpack, stack, etc.)",
      args: appNameArg,
      options: [
        instanceStepsOption,
        {
          name: "--max-in-flight",
          description:
            "Defines the maximum number of instances that will be actively being restaged. Only applies when --strategy flag is specified",
          args: {
            name: "MAX_IN_FLIGHT",
          },
        },
        noWaitOption,
        strategyOption,
      ],
    },
    {
      name: "restart-app-instance",
      description:
        "Stop, then start application instance without updating application environment",
      args: [
        appNameArg,
        {
          name: "INDEX",
          description: "The index of the application instance",
        },
      ],
      options: [
        {
          name: "--process",
          description: "Process to restart",
          args: {
            name: "PROCESS",
            default: "web",
          },
        },
      ],
    },
    {
      name: ["run-task", "rt"],
      description: "Run a one-off task on an app",
      args: appNameArg,
      options: [
        {
          name: ["--command", "-c"],
          description: "The command to execute",
          args: {
            name: "COMMAND",
          },
        },
        {
          name: "-k",
          description: "Disk limit (e.g. 256M, 1024M, 1G)",
          args: {
            name: "DISK",
          },
        },
        {
          name: "-l",
          description:
            "Log rate limit per second, in bytes (e.g. 128B, 4K, 1M). -l=-1 represents unlimited",
          args: {
            name: "LOG_RATE_LIMIT",
          },
        },
        {
          name: "-m",
          description: "Memory limit (e.g. 256M, 1024M, 1G)",
          args: {
            name: "MEMORY",
          },
        },
        {
          name: "--name",
          description: "Name to give the task (generated if omitted)",
          args: {
            name: "TASK_NAME",
          },
        },
        {
          name: "--process",
          description:
            "Process type to use as a template for command, memory, and disk for the created task",
          args: {
            name: "PROCESS_TYPE",
          },
        },
        {
          name: ["--wait", "-w"],
          description: "Wait for the task to complete before exiting",
        },
      ],
    },
    {
      name: "task",
      description: "Display a task of an app",
      args: [
        appNameArg,
        {
          name: "TASK_ID",
          description: "The Task ID for the application",
        },
      ],
    },
    {
      name: "tasks",
      description: "List tasks of an app",
      args: appNameArg,
    },
    {
      name: "terminate-task",
      description: "Terminate a running task of an app",
      args: [
        appNameArg,
        {
          name: "TASK_ID",
          description: "The task's unique sequence ID",
        },
      ],
    },
    {
      name: "packages",
      description: "List packages of an app",
      args: appNameArg,
    },
    {
      name: "create-package",
      description: "Uploads a Package",
      args: appNameArg,
      options: [
        {
          name: ["--docker-image", "-o"],
          description: "Docker image to use (e.g. user/docker-image-name)",
          exclusiveOn: ["--path"],
          args: {
            name: "REGISTRY_HOST",
          },
        },
        {
          name: "-p",
          description:
            "Path to app directory or to a zip file of the contents of the app directory",
          args: {
            name: "APP_PATH",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "revision",
      description: "Show details for a specific app revision",
      args: appNameArg,
      options: [
        {
          name: "--version",
          description: "The integer representing the specific revision to show",
          args: {
            name: "VERSION",
          },
        },
      ],
    },
    {
      name: "revisions",
      description: "List revisions of an app",
      args: appNameArg,
    },
    {
      name: "rollback",
      description: "Rollback to the specified revision of an app",
      args: appNameArg,
      options: [
        {
          name: "-f",
          description: "Force rollback without confirmation",
        },
        instanceStepsOption,
        {
          name: "--max-in-flight",
          description:
            "Defines the maximum number of instances that will be actively being rolled back",
          args: {
            name: "MAX_IN_FLIGHT",
          },
        },
        {
          name: "--strategy",
          description:
            "Deployment strategy can be canary or rolling. When not specified, it defaults to rolling",
          args: {
            name: "STRATEGY",
            suggestions: ["rolling", "canary"],
          },
        },
        {
          name: "--version",
          description: "Roll back to the specified revision",
          args: {
            name: "VERSION",
          },
        },
      ],
    },
    {
      name: "droplets",
      description: "List droplets of an app",
      args: appNameArg,
    },
    {
      name: "set-droplet",
      description: "Set the droplet used to run an app",
      args: [
        appNameArg,
        {
          name: "DROPLET_GUID",
          description: "The droplet guid",
        },
      ],
    },
    {
      name: "download-droplet",
      description: "Download an application droplet",
      args: appNameArg,
      options: [
        {
          name: "--droplet",
          description:
            "The guid of the droplet to download (default: app's current droplet)",
          args: {
            name: "DROPLET_GUID",
          },
        },
        {
          name: ["--path", "-p"],
          description:
            "File path to download droplet to (default: current working directory)",
          args: {
            name: "PATH",
          },
        },
      ],
    },
    {
      name: "events",
      description: "Show recent app events",
      args: appNameArg,
    },
    {
      name: "logs",
      description: "Tail or show recent logs for an app",
      args: appNameArg,
      options: [
        {
          name: "--recent",
          description: "Dump recent logs instead of tailing",
        },
      ],
    },
    {
      name: ["env", "e"],
      description: "Show all env variables for an app",
      args: appNameArg,
    },
    {
      name: ["set-env", "se"],
      description: "Set an env variable for an app",
      args: [
        appNameArg,
        {
          name: "ENV_VAR_NAME",
          description: "The environment variable name",
        },
        {
          name: "ENV_VAR_VALUE",
          description: "The environment variable value",
        },
      ],
    },
    {
      name: ["unset-env", "ue"],
      description: "Remove an env variable from an app",
      args: [
        appNameArg,
        {
          name: "ENV_VAR_NAME",
          description: "The environment variable name",
        },
      ],
    },
    {
      name: "stacks",
      description:
        "List all stacks (a stack is a pre-built file system, including an operating system, that can run apps) and current state",
      options: [
        {
          name: "--labels",
          description: "Selector to filter stacks by labels",
          args: {
            name: "SELECTOR",
          },
        },
      ],
    },
    {
      name: "stack",
      description:
        "Show information for a stack (a stack is a pre-built file system, including an operating system, that can run apps) and current state",
      args: {
        name: "STACK_NAME",
        description: "The stack name",
      },
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given stack's guid. All other output for the stack is suppressed",
        },
      ],
    },
    {
      name: "update-stack",
      description: "Transition a stack between the defined states",
      args: {
        name: "STACK_NAME",
        description: "The stack name",
      },
      options: [
        {
          name: "--state",
          description:
            "State to transition the stack to (active, restricted, deprecated, disabled)",
          args: {
            name: "STATE",
            suggestions: ["active", "restricted", "deprecated", "disabled"],
          },
        },
        {
          name: "--reason",
          description: "Optional plain text describing the stack state change",
          args: {
            name: "REASON",
          },
        },
      ],
    },
    {
      name: "copy-source",
      description:
        "Copies the source code of an application to another existing application and restages that application",
      args: [
        {
          name: "SOURCE-APP",
          description: "The old application name",
          generators: generateAppNames,
        },
        {
          name: "TARGET-NAME",
          description: "The new application name",
          generators: generateAppNames,
        },
      ],
      options: [
        instanceStepsOption,
        maxInFlightOption,
        noWaitOption,
        {
          name: "--no-restart",
          description: "Do not restage the destination application",
        },
        {
          name: ["--organization", "-o"],
          description: "Org that contains the destination application",
          args: {
            name: "TARGET_ORG",
          },
        },
        {
          name: ["--space", "-s"],
          description: "Space that contains the destination application",
          args: {
            name: "TARGET_SPACE",
          },
        },
        strategyOption,
      ],
    },
    {
      name: "create-app-manifest",
      description:
        "Create an app manifest for an app that has been pushed successfully",
      args: appNameArg,
      options: [
        {
          name: "-p",
          description:
            "Specify a path for file creation. If path not specified, manifest file is created in current working directory",
          args: {
            name: "P",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "get-health-check",
      description: "Show the type of health check performed on an app",
      args: appNameArg,
    },
    {
      name: "set-health-check",
      description: "Change type of health check performed on an app's process",
      args: [
        appNameArg,
        {
          name: "HEALTH_CHECK_TYPE",
          description: "Type of health check to perform",
          suggestions: ["http", "port", "process"],
        },
      ],
      options: [
        {
          name: "--endpoint",
          description: "Path on the app",
          args: {
            name: "PATH",
            default: "/",
          },
        },
        {
          name: "--invocation-timeout",
          description:
            "Time (in seconds) that controls individual health check invocations",
          args: {
            name: "INVOCATION_TIMEOUT",
          },
        },
        {
          name: "--process",
          description: "App process to update",
          args: {
            name: "PROCESS",
            default: "web",
          },
        },
      ],
    },
    {
      name: "get-readiness-health-check",
      description:
        "Show the type of readiness health check performed on an app",
      args: appNameArg,
    },
    {
      name: "enable-ssh",
      description: "Enable ssh for the application",
      args: appNameArg,
    },
    {
      name: "disable-ssh",
      description: "Disable ssh for the application",
      args: appNameArg,
    },
    {
      name: "ssh-enabled",
      description:
        "Reports whether SSH is enabled on an application container instance",
      args: appNameArg,
    },
    {
      name: "ssh",
      description: "SSH to an application container instance",
      args: appNameArg,
      options: [
        {
          name: ["--app-instance-index", "-i"],
          description: "App process instance index",
          args: {
            name: "INDEX",
            default: "0",
          },
        },
        {
          name: ["--command", "-c"],
          description: "Command to run",
          isRepeatable: true,
          args: {
            name: "COMMAND",
          },
        },
        {
          name: ["--disable-pseudo-tty", "-T"],
          description: "Disable pseudo-tty allocation",
          exclusiveOn: ["--force-pseudo-tty", "--request-pseudo-tty"],
        },
        {
          name: "--force-pseudo-tty",
          description: "Force pseudo-tty allocation",
          exclusiveOn: ["--disable-pseudo-tty", "--request-pseudo-tty"],
        },
        {
          name: "-L",
          description: "Local port forward specification",
          isRepeatable: true,
          args: {
            name: "BIND_ADDRESS",
          },
        },
        {
          name: "--process",
          description: "App process name",
          args: {
            name: "PROCESS",
            default: "web",
          },
        },
        {
          name: ["--request-pseudo-tty", "-t"],
          description: "Request pseudo-tty allocation",
          exclusiveOn: ["--disable-pseudo-tty", "--force-pseudo-tty"],
        },
        {
          name: ["--skip-host-validation", "-k"],
          description: "Skip host key validation. Not recommended!",
        },
        {
          name: ["--skip-remote-execution", "-N"],
          description: "Do not execute a remote command",
        },
      ],
    },
    {
      name: ["marketplace", "m"],
      description: "List available offerings in the marketplace",
      options: [
        {
          name: "-e",
          description: "Show plan details for a particular service offering",
          args: {
            name: "SERVICE_OFFERING",
          },
        },
        {
          name: "-b",
          description: "Only show details for a particular service broker",
          args: {
            name: "SERVICE_BROKER",
          },
        },
        {
          name: "--no-plans",
          description: "Hide plan information for service offerings",
        },
        {
          name: "--show-unavailable",
          description: "Show plans that are not available for use",
        },
      ],
    },
    {
      name: ["services", "s"],
      description: "List all service instances in the target space",
      options: [
        {
          name: "--no-apps",
          description: "Do not retrieve bound apps information",
        },
      ],
    },
    {
      name: "service",
      description: "Show service instance info",
      args: serviceInstanceArg,
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given service instances's guid. All other output is suppressed",
        },
        {
          name: "--params",
          description:
            "Retrieve and display the given service instances's parameters. All other output is suppressed",
        },
      ],
    },
    {
      name: ["create-service", "cs"],
      description: "Create a service instance",
      args: [
        {
          name: "SERVICE_OFFERING",
          description: "The service offering",
        },
        {
          name: "SERVICE_PLAN",
          description: "The service plan that the service instance will use",
        },
        {
          name: "SERVICE_INSTANCE",
          description: "The service instance",
        },
      ],
      options: [
        {
          name: "-b",
          description:
            "Create a service instance from a particular broker. Required when service offering name is ambiguous",
          args: {
            name: "SERVICE_BROKER",
          },
        },
        parametersAsJsonOption,
        tagsOption,
        waitOption,
      ],
    },
    {
      name: "update-service",
      description: "Update a service instance",
      args: serviceInstanceArg,
      options: [
        parametersAsJsonOption,
        {
          name: "-p",
          description: "Change service plan for a service instance",
          args: {
            name: "NEW_PLAN",
          },
        },
        tagsOption,
        waitOption,
      ],
    },
    {
      name: "upgrade-service",
      description:
        "Upgrade a service instance to the latest available version of its current service plan",
      args: serviceInstanceArg,
      options: [
        {
          name: ["--force", "-f"],
          description: "Force upgrade without asking for confirmation",
        },
        waitOption,
      ],
    },
    {
      name: ["delete-service", "ds"],
      description: "Delete a service instance",
      args: serviceInstanceArg,
      options: [forceOption, waitOption],
    },
    {
      name: "rename-service",
      description: "Rename a service instance",
      args: [
        {
          name: "SERVICE_INSTANCE",
          description: "The service instance to rename",
          generators: generateServices,
        },
        {
          name: "NEW_SERVICE_INSTANCE",
          description: "The new name of the service instance",
        },
      ],
    },
    {
      name: ["create-service-key", "csk"],
      description: "Create key for a service instance",
      args: [createServiceKeyServiceInstanceArg, serviceKeyArg],
      options: [parametersAsJsonOption, waitOption],
    },
    {
      name: ["service-keys", "sk"],
      description: "List keys for a service instance",
      args: serviceInstanceArg,
    },
    {
      name: "service-key",
      description: "Show service key info",
      args: [createServiceKeyServiceInstanceArg, serviceKeyArg],
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given service-key's guid. All other output is suppressed",
        },
        {
          name: "--json",
          description:
            "Output credentials as JSON. All other output is suppressed",
        },
      ],
    },
    {
      name: ["delete-service-key", "dsk"],
      description: "Delete a service key",
      args: [createServiceKeyServiceInstanceArg, serviceKeyArg],
      options: [forceDeletionOption, waitOption],
    },
    {
      name: ["bind-service", "bs"],
      description: "Bind a service instance to an app",
      args: [appNameArg, createServiceKeyServiceInstanceArg],
      options: [
        {
          name: "--binding-name",
          description:
            "Name to expose service instance to app process with (Default: service instance name)",
          args: {
            name: "BINDING_NAME",
          },
        },
        parametersAsJsonOption,
        {
          name: "--strategy",
          description:
            "Service binding strategy. Valid values are 'single' (default) and 'multiple'",
          args: {
            name: "STRATEGY",
            suggestions: ["single", "multiple"],
          },
        },
        waitOption,
      ],
    },
    {
      name: ["unbind-service", "us"],
      description: "Unbind a service instance from an app",
      args: [appNameArg, createServiceKeyServiceInstanceArg],
      options: [
        waitOption,
        {
          name: "--guid",
          description:
            "Only delete the service binding with the specified GUID",
          args: {
            name: "GUID",
          },
        },
      ],
    },
    {
      name: "cleanup-outdated-service-bindings",
      description:
        "Cleans up old service bindings for an app, keeping only the most recent binding for each service instance",
      args: appNameArg,
      options: [
        forceOption,
        {
          name: "--keep-last",
          description: "Keep the last N service bindings (default: 1)",
          args: {
            name: "N",
          },
        },
        {
          name: "--service-instance",
          description:
            "Only delete service bindings for the specified service instance",
          args: {
            name: "SERVICE_INSTANCE_NAME",
          },
        },
        {
          name: ["--wait", "-w"],
          description: "Wait for the operation(s) to complete",
        },
      ],
    },
    {
      name: ["bind-route-service", "brs"],
      description: "Bind a service instance to an HTTP route",
      args: [
        {
          name: "DOMAIN",
          description: "The domain of the route",
        },
        createServiceKeyServiceInstanceArg,
      ],
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided inline or in a file. For a list of supported configuration parameters, see documentation for the particular service offering",
          args: {
            name: "PARAMETERS_AS_JSON",
            template: "filepaths",
          },
        },
        {
          name: ["--hostname", "-n"],
          description:
            "Hostname used in combination with DOMAIN to specify the route to bind",
          args: {
            name: "HOSTNAME",
          },
        },
        {
          name: "--path",
          description:
            "Path used in combination with HOSTNAME and DOMAIN to specify the route to bind",
          args: {
            name: "PATH",
          },
        },
        waitOption,
      ],
    },
    {
      name: ["unbind-route-service", "urs"],
      description: "Unbind a service instance from an HTTP route",
      args: [
        {
          name: "DOMAIN",
          description: "The domain of the route",
        },
        createServiceKeyServiceInstanceArg,
      ],
      options: [
        {
          name: "-f",
          description: "Force unbinding without confirmation",
        },
        {
          name: ["--hostname", "-n"],
          description:
            "Hostname used in combination with DOMAIN to specify the route to unbind",
          args: {
            name: "HOSTNAME",
          },
        },
        {
          name: "--path",
          description:
            "Path used in combination with HOSTNAME and DOMAIN to specify the route to unbind",
          args: {
            name: "PATH",
          },
        },
        waitOption,
      ],
    },
    {
      name: ["create-user-provided-service", "cups"],
      description: "Make a user-provided service instance available to CF apps",
      args: {
        name: "SERVICE_INSTANCE",
        description: "The service instance name",
      },
      options: [
        {
          name: "-l",
          description:
            "URL to which logs for bound applications will be streamed",
          args: {
            name: "SYSLOG_DRAIN_URL",
          },
        },
        {
          name: "-p",
          description:
            "Credentials, provided inline or in a file, to be exposed in the VCAP_SERVICES environment variable for bound applications",
          args: {
            name: "CREDENTIALS",
          },
        },
        {
          name: "-r",
          description:
            "URL to which requests for bound routes will be forwarded. Scheme for this URL must be https",
          args: {
            name: "ROUTE_SERVICE_URL",
          },
        },
        tagsOption,
      ],
    },
    {
      name: ["update-user-provided-service", "uups"],
      description: "Update user-provided service instance",
      args: serviceInstanceArg,
      options: [
        {
          name: "-l",
          description:
            "URL to which logs for bound applications will be streamed",
          args: {
            name: "SYSLOG_DRAIN_URL",
          },
        },
        {
          name: "-p",
          description:
            "Credentials, provided inline or in a file, to be exposed in the VCAP_SERVICES environment variable for bound applications. Provided credentials will override existing credentials",
          args: {
            name: "CREDENTIALS",
          },
        },
        {
          name: "-r",
          description:
            "URL to which requests for bound routes will be forwarded. Scheme for this URL must be https",
          args: {
            name: "ROUTE_SERVICE_URL",
          },
        },
        tagsOption,
      ],
    },
    {
      name: "share-service",
      description: "Share a service instance with another space",
      args: serviceInstanceArg,
      options: [
        {
          name: "-s",
          description: "The space to share the service instance into",
          args: {
            name: "OTHER_SPACE",
          },
        },
        {
          name: "-o",
          description: "Org of the other space (Default: targeted org)",
          args: {
            name: "OTHER_ORG",
          },
        },
      ],
    },
    {
      name: "unshare-service",
      description: "Unshare a shared service instance from a space",
      args: {
        name: "SERVICE_INSTANCE",
        description: "The service instance to rename",
        generators: generateServices,
      },
      options: [
        {
          name: "-s",
          description: "Space to unshare the service instance from",
          args: {
            name: "OTHER_SPACE",
          },
        },
        {
          name: "-o",
          description: "Org of the other space (Default: targeted org)",
          args: {
            name: "OTHER_ORG",
          },
        },
        {
          name: "-f",
          description: "Force unshare without confirmation",
        },
      ],
    },
    {
      name: ["orgs", "o"],
      description: "List all orgs",
      options: [
        {
          name: "--labels",
          description: "Selector to filter orgs by labels",
          args: {
            name: "SELECTOR",
          },
        },
      ],
    },
    {
      name: "org",
      description: "Show org info",
      args: orgArg,
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given org's guid. All other output for the org is suppressed",
        },
      ],
    },
    {
      name: ["create-org", "co"],
      description: "Create an org",
      args: {
        name: "ORG",
        description: "The organization",
      },
      options: [
        {
          name: ["--quota", "-q"],
          description: "Quota to assign to the newly created org",
          args: {
            name: "ORG_QUOTA",
          },
        },
      ],
    },
    {
      name: "delete-org",
      description: "Delete an org",
      args: orgArg,
      options: [forceDeletionOption],
    },
    {
      name: "rename-org",
      description: "Rename an org",
      args: [
        {
          name: "ORG",
          description: "The old organization name",
          generators: generateOrgs,
        },
        {
          name: "NEW_ORG_NAME",
          description: "The new organization name",
        },
      ],
    },
    {
      name: "spaces",
      description: "List all spaces in an org",
      options: [
        {
          name: "--labels",
          description: "Selector to filter spaces by labels",
          args: {
            name: "SELECTOR",
          },
        },
      ],
    },
    {
      name: "space",
      description: "Show space info",
      args: spaceArg,
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given space's guid. All other output for the space is suppressed",
        },
        {
          name: "--security-group-rules",
          description:
            "Retrieve the rules for all the security groups associated with the space",
        },
      ],
    },
    {
      name: ["create-space", "csp"],
      description: "Create a space",
      args: {
        name: "SPACE",
        description: "The space",
      },
      options: [
        {
          name: "-o",
          description: "Organization",
          args: {
            name: "ORG",
          },
        },
        {
          name: ["--quota", "-q"],
          description: "Quota to assign to the newly created space",
          args: {
            name: "QUOTA",
          },
        },
      ],
    },
    {
      name: "delete-space",
      description: "Delete a space",
      args: spaceArg,
      options: [
        forceDeletionOption,
        {
          name: "-o",
          description: "Delete space within specified org",
          args: {
            name: "ORG",
          },
        },
      ],
    },
    {
      name: "rename-space",
      description: "Rename a space",
      args: [
        {
          name: "SPACE",
          description: "The old space name",
          generators: generateSpaces,
        },
        {
          name: "NEW_SPACE_NAME",
          description: "The new space name",
        },
      ],
    },
    {
      name: "apply-manifest",
      description: "Apply manifest properties to a space",
      options: [
        {
          name: "-f",
          description: "Path to app manifest",
          args: {
            name: "APP_MANIFEST_PATH",
            template: "filepaths",
          },
        },
        {
          name: "--var",
          description:
            "Variable key value pair for variable substitution, (e.g., name=app1); can specify multiple times",
          isRepeatable: true,
          args: {
            name: "VAR",
          },
        },
        {
          name: "--vars-file",
          description:
            "Path to a variable substitution file for manifest; can specify multiple times",
          isRepeatable: true,
          args: {
            name: "VARS_FILE",
            template: "filepaths",
          },
        },
        redactEnvOption,
      ],
    },
    {
      name: "allow-space-ssh",
      description: "Allow SSH access for the space",
      args: spaceArg,
    },
    {
      name: "disallow-space-ssh",
      description: "Disallow SSH access for the space",
      args: spaceArg,
    },
    {
      name: "space-ssh-allowed",
      description: "Reports whether SSH is allowed in a space",
      args: spaceArg,
    },
    {
      name: "domains",
      description: "List domains in the target org",
      options: [
        {
          name: "--labels",
          description: "Selector to filter domains by labels",
          args: {
            name: "LABELS",
          },
        },
      ],
    },
    {
      name: ["create-private-domain", "create-domain"],
      description: "Create a private domain for a specific org",
      args: [
        orgArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
      options: [
        {
          name: "--enforce-route-policies",
          description:
            "Enable platform-enforced access control for routes on this domain (requires mTLS domain configuration in GoRouter)",
        },
        {
          name: "--scope",
          description:
            "Operator-level scope boundary for route policies: 'any', 'org', or 'space' (only valid with --enforce-route-policies)",
          args: {
            name: "SCOPE",
            suggestions: ["any", "org", "space"],
          },
        },
      ],
    },
    {
      name: ["delete-private-domain", "delete-domain"],
      description: "Delete a private domain",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [forceDeletionOption],
    },
    {
      name: "create-shared-domain",
      description: "Create a domain that can be used by all orgs (admin-only)",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        {
          name: "--router-group",
          description:
            "Routes for this domain will use routers in the specified router group",
          exclusiveOn: ["--internal"],
          args: {
            name: "ROUTER_GROUP_NAME",
          },
        },
        {
          name: "--internal",
          description:
            "Applications that use internal routes communicate directly on the container network",
          exclusiveOn: ["--router-group"],
        },
        {
          name: "--enforce-route-policies",
          description:
            "Enable platform-enforced access control for routes on this domain (requires mTLS domain configuration in GoRouter)",
        },
        {
          name: "--scope",
          description:
            "Operator-level scope boundary for route policies: 'any', 'org', or 'space' (only valid with --enforce-route-policies)",
          args: {
            name: "SCOPE",
            suggestions: ["any", "org", "space"],
          },
        },
      ],
    },
    {
      name: "delete-shared-domain",
      description: "Delete a shared domain",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [forceDeletionOption],
    },
    {
      name: "router-groups",
      description: "List router groups",
    },
    {
      name: ["routes", "r"],
      description:
        "List all routes in the current space or the current organization",
      options: [
        {
          name: "--org-level",
          description:
            "List all the routes for all spaces of current organization",
        },
        {
          name: "--labels",
          description: "Selector to filter routes by labels",
          args: {
            name: "LABELS",
          },
        },
      ],
    },
    {
      name: ["route", "ro"],
      description: "Display route details and mapped destinations",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [hostnameOption, pathOption, portOption],
    },
    {
      name: "create-route",
      description: "Create a route for later use",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        {
          name: "--port",
          description: "Port for the TCP route (default: random port)",
          args: {
            name: "PORT",
          },
        },
        optionOption,
      ],
    },
    {
      name: "update-route",
      description:
        "Update a route by route specific options, e.g. load balancing algorithm",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        optionOption,
        {
          name: ["--remove-option", "-r"],
          description: "Remove an option with the given name",
          isRepeatable: true,
          args: {
            name: "OPTION",
          },
        },
      ],
    },
    {
      name: "check-route",
      description:
        "Perform a check to determine whether a route currently exists or not",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [hostnameOption, pathOption, portOption],
    },
    {
      name: "map-route",
      description: "Map a route to an app",
      args: [
        appNameArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        {
          name: "--port",
          description: "Port for the TCP route (default: random port)",
          args: {
            name: "PORT",
          },
        },
        {
          name: "--app-protocol",
          description:
            "[Beta flag, subject to change] Protocol for the route destination (default: http1). Only applied to HTTP routes",
          args: {
            name: "PROTOCOL",
          },
        },
        {
          name: "--app-port",
          description:
            "[Beta flag, subject to change] App port for the route destination (default: 8080). Only applied to HTTP routes",
          args: {
            name: "PORT",
          },
        },
        optionOption,
      ],
    },
    {
      name: "unmap-route",
      description: "Remove a route from an app",
      args: [
        appNameArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
      options: [hostnameOption, pathOption, portOption],
    },
    {
      name: "delete-route",
      description: "Delete a route",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        forceDeletionOption,
        {
          name: ["--hostname", "-n"],
          description:
            "Hostname used to identify the HTTP route (required for shared domains)",
          args: {
            name: "HOSTNAME",
          },
        },
        pathOption,
        portOption,
      ],
    },
    {
      name: "delete-orphaned-routes",
      description:
        "Delete all orphaned routes in the currently targeted space (i.e. those that are not mapped to an app or service instance)",
      options: [forceDeletionOption],
    },
    {
      name: "update-destination",
      description: "Updates the destination protocol for a route",
      args: [
        appNameArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
      options: [
        createRouteHostnameOption,
        {
          name: "--app-protocol",
          description:
            "New Protocol for the route destination (http1 or http2). Only applied to HTTP routes",
          args: {
            name: "PROTOCOL",
          },
        },
        createRoutePathOption,
      ],
    },
    {
      name: "share-route",
      description: "Share a route in between spaces",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        {
          name: "-o",
          description:
            "The org of the destination space (Default: targeted org)",
          args: {
            name: "OTHER_ORG",
          },
        },
        {
          name: "-s",
          description:
            "The space the route will be shared with (Default: targeted space)",
          args: {
            name: "OTHER_SPACE",
          },
        },
      ],
    },
    {
      name: "unshare-route",
      description: "Unshare an existing route from a space",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        {
          name: "-o",
          description:
            "The org of the destination space (Default: targeted org)",
          args: {
            name: "OTHER_ORG",
          },
        },
        {
          name: "-s",
          description: "The space to be unshared (Default: targeted space)",
          args: {
            name: "OTHER_SPACE",
          },
        },
      ],
    },
    {
      name: "move-route",
      description: "Assign a route to a different space",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        createRouteHostnameOption,
        createRoutePathOption,
        {
          name: "-o",
          description: "The org of the destination app (Default: targeted org)",
          args: {
            name: "OTHER_ORG",
          },
        },
        {
          name: "-s",
          description:
            "The space of the destination app (Default: targeted space)",
          args: {
            name: "OTHER_SPACE",
          },
        },
      ],
    },
    {
      name: "route-policies",
      description: "List all route policies in the target space",
      options: [
        {
          name: ["--domain", "-d"],
          description: "Filter by domain name",
          args: {
            name: "DOMAIN",
          },
        },
        {
          name: ["--hostname", "-n"],
          description: "Filter by hostname",
          args: {
            name: "HOSTNAME",
          },
        },
        {
          name: "--path",
          description: "Filter by path",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--labels",
          description: "Selector to filter route policies by labels",
          args: {
            name: "SELECTOR",
          },
        },
      ],
    },
    {
      name: "add-route-policy",
      description:
        "Add a route policy to allow specific apps, spaces, or orgs to access a route",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        {
          name: ["--hostname", "-n"],
          description: "Hostname for the route",
          args: {
            name: "HOSTNAME",
          },
        },
        {
          name: ["--path", "-p"],
          description: "Path for the route",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--source-app",
          description: "App name to identify the source (resolves to GUID)",
          args: {
            name: "APP_NAME",
          },
        },
        {
          name: "--source-space",
          description:
            "Space name to identify the source (by name) or specify the space for --source-app",
          args: {
            name: "SPACE_NAME",
          },
        },
        {
          name: "--source-org",
          description:
            "Org name to identify the source (by name) or specify the org for --source-space/--source-app",
          args: {
            name: "ORG_NAME",
          },
        },
        {
          name: "--source-any",
          description: "Any authenticated app",
        },
        {
          name: "--source",
          description:
            "Raw source (cf:app:<guid>, cf:space:<guid>, cf:org:<guid>, or cf:any)",
          args: {
            name: "SOURCE",
          },
        },
      ],
    },
    {
      name: "remove-route-policy",
      description: "Remove a route policy from a route",
      args: {
        name: "DOMAIN",
        description: "The domain",
      },
      options: [
        {
          name: "--source-app",
          description: "App name to identify the source (resolves to GUID)",
          args: {
            name: "APP_NAME",
          },
        },
        {
          name: "--source-space",
          description:
            "Space name to identify the source (by name) or specify the space for --source-app",
          args: {
            name: "SPACE_NAME",
          },
        },
        {
          name: "--source-org",
          description:
            "Org name to identify the source (by name) or specify the org for --source-space/--source-app",
          args: {
            name: "ORG_NAME",
          },
        },
        {
          name: "--source-any",
          description: "Any authenticated app",
        },
        {
          name: "--source",
          description:
            "Raw source (cf:app:<guid>, cf:space:<guid>, cf:org:<guid>, or cf:any)",
          args: {
            name: "SOURCE",
          },
        },
        {
          name: ["--hostname", "-n"],
          description: "Hostname for the route",
          args: {
            name: "HOSTNAME",
          },
        },
        {
          name: ["--path", "-p"],
          description: "Path for the route",
          args: {
            name: "PATH",
          },
        },
        forceDeletionOption,
      ],
    },
    {
      name: "network-policies",
      description: "List direct network traffic policies",
      options: [
        {
          name: "--source",
          description: "Source app to filter results by",
          args: {
            name: "SOURCE_APP",
          },
        },
      ],
    },
    {
      name: "add-network-policy",
      description:
        "Create policy to allow direct network traffic from one app to another",
      args: [
        {
          name: "SOURCE_APP",
          description: "The source app",
          generators: generateAppNames,
        },
        {
          name: "DESTINATION_APP",
          description: "The destination app",
          generators: generateAppNames,
        },
      ],
      options: [
        {
          name: "--port",
          description:
            "Port or range of ports for connection to destination app (Default: 8080)",
          args: {
            name: "RANGE",
          },
        },
        {
          name: "--protocol",
          description: "Protocol to connect apps with (Default: tcp)",
          args: {
            name: "PROTOCOL",
            suggestions: ["tcp", "udp"],
          },
        },
        {
          name: "-o",
          description: "The org of the destination app (Default: targeted org)",
          args: {
            name: "DESTINATION_ORG_NAME",
          },
        },
        {
          name: "-s",
          description:
            "The space of the destination app (Default: targeted space)",
          args: {
            name: "DESTINATION_SPACE_NAME",
          },
        },
      ],
    },
    {
      name: "remove-network-policy",
      description: "Remove network traffic policy of an app",
      args: [
        {
          name: "SOURCE_APP",
          description: "The source app",
          generators: generateAppNames,
        },
        {
          name: "DESTINATION_APP",
          description: "The destination app",
          generators: generateAppNames,
        },
      ],
      options: [
        {
          name: "--port",
          description:
            "Port or range of ports that destination app is connected with",
          args: {
            name: "RANGE",
          },
        },
        {
          name: "--protocol",
          description: "Protocol that apps are connected with",
          args: {
            name: "PROTOCOL",
            suggestions: ["tcp", "udp"],
          },
        },
        {
          name: "-o",
          description: "The org of the destination app (Default: targeted org)",
          args: {
            name: "DESTINATION_ORG_NAME",
          },
        },
        {
          name: "-s",
          description:
            "The space of the destination app (Default: targeted space)",
          args: {
            name: "DESTINATION_SPACE_NAME",
          },
        },
      ],
    },
    {
      name: "buildpacks",
      description: "List all buildpacks",
      options: [
        {
          name: "--labels",
          description: "Selector to filter buildpacks by labels",
          args: {
            name: "SELECTOR",
          },
        },
        {
          name: "--lifecycle",
          description: "Filter buildpacks by lifecycle ('buildpack' or 'cnb')",
          args: {
            name: "LIFECYCLE",
            suggestions: ["buildpack", "cnb"],
          },
        },
      ],
    },
    {
      name: "create-buildpack",
      description: "Create a buildpack",
      args: [
        {
          name: "BUILDPACK",
          description: "The buildpack",
        },
        {
          name: "PATH",
          description: "The path to the buildpack file",
          template: "filepaths",
        },
        {
          name: "POSITION",
          description: "The position that sets priority",
        },
      ],
      options: [
        {
          name: "--disable",
          description: "Disable the buildpack from being used for staging",
        },
        {
          name: ["--lifecycle", "-l"],
          description:
            "Lifecycle that the buildpack will use ('buildpack' or 'cnb')",
          args: {
            name: "LIFECYCLE",
            suggestions: ["buildpack", "cnb"],
          },
        },
      ],
    },
    {
      name: "update-buildpack",
      description: "Update a buildpack",
      args: {
        name: "BUILDPACK",
        description: "The buildpack",
      },
      options: [
        {
          name: "--assign-stack",
          description:
            "Assign a stack to a buildpack that does not have a stack association",
          args: {
            name: "NEW_STACK",
          },
        },
        {
          name: "--disable",
          description: "Disable the buildpack from being used for staging",
          exclusiveOn: ["--enable"],
        },
        {
          name: "--enable",
          description: "Enable the buildpack to be used for staging",
          exclusiveOn: ["--disable"],
        },
        {
          name: "--lock",
          description: "Lock the buildpack to prevent updates",
          exclusiveOn: ["--unlock"],
        },
        {
          name: ["--path", "-p"],
          description: "Path to directory or zip file",
          args: {
            name: "PATH",
            template: "filepaths",
          },
        },
        {
          name: ["--position", "-i"],
          description:
            "The order in which the buildpacks are checked during buildpack auto-detection",
          args: {
            name: "POSITION",
          },
        },
        {
          name: "--rename",
          description: "Rename an existing buildpack",
          args: {
            name: "NEW_NAME",
          },
        },
        stackOption,
        lifecycleOption,
        {
          name: "--unlock",
          description: "Unlock the buildpack to enable updates",
          exclusiveOn: ["--lock"],
        },
      ],
    },
    {
      name: "delete-buildpack",
      description: "Delete a buildpack",
      args: {
        name: "BUILDPACK",
        description: "The buildpack",
      },
      options: [
        forceOption,
        {
          name: ["--stack", "-s"],
          description:
            "Specify stack to disambiguate buildpacks with the same name. Required when buildpack name is ambiguous",
          args: {
            name: "STACK",
          },
        },
        {
          name: ["--lifecycle", "-l"],
          description:
            "Specify lifecycle to disambiguate buildpacks with the same name. Required when buildpack name is ambiguous",
          args: {
            name: "LIFECYCLE",
          },
        },
      ],
    },
    {
      name: "create-user",
      description: "Create a new user",
      args: [
        {
          name: "USERNAME",
          description: "The username",
        },
        {
          name: "PASSWORD",
          description: "The password",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--origin",
          description:
            "Origin for mapping a user account to a user in an external identity provider",
          args: {
            name: "ORIGIN",
          },
        },
        {
          name: "--password-prompt",
          description: "Prompt interactively for password",
        },
      ],
    },
    {
      name: "delete-user",
      description: "Delete a user",
      args: {
        name: "USERNAME",
        description: "The username",
      },
      options: [
        {
          name: "-f",
          description: "Prompt interactively for password",
        },
        {
          name: "--origin",
          description:
            "Origin for mapping a user account to a user in an external identity provider",
          args: {
            name: "ORIGIN",
          },
        },
      ],
    },
    {
      name: "org-users",
      description: "Show org users by role",
      args: orgArg,
      options: [
        {
          name: ["--all-users", "-a"],
          description:
            "List all users with roles in the org or in spaces within the org",
        },
      ],
    },
    {
      name: "set-org-role",
      description: "Assign an org role to a user",
      args: [
        {
          name: "USERNAME",
          description: "The user",
        },
        orgArg,
        {
          name: "ROLE",
          description: "The organization role",
          suggestions: ["OrgManager", "BillingManager", "OrgAuditor"],
        },
      ],
      options: [
        {
          name: "--client",
          description:
            "Assign an org role to a client-id of a (non-user) service account",
        },
        originOption,
      ],
    },
    {
      name: "unset-org-role",
      description: "Remove an org role from a user",
      args: [
        {
          name: "USERNAME",
          description: "The user",
        },
        orgArg,
        {
          name: "ROLE",
          description: "The organization role",
          suggestions: ["OrgManager", "BillingManager", "OrgAuditor"],
        },
      ],
      options: [
        {
          name: "--client",
          description:
            "Unassign an org role for a client-id of a (non-user) service account",
        },
        originOption,
      ],
    },
    {
      name: "space-users",
      description: "Show space users by role",
      args: [
        orgArg,
        {
          name: "SPACE",
          description: "The space",
        },
      ],
    },
    {
      name: "set-space-role",
      description: "Assign a space role to a user",
      args: [
        {
          name: "USERNAME",
          description: "The user",
        },
        orgArg,
        {
          name: "SPACE",
          description: "The space",
        },
        {
          name: "ROLE",
          description: "The space role",
          suggestions: [
            "SpaceManager",
            "SpaceDeveloper",
            "SpaceAuditor",
            "SpaceSupporter",
          ],
        },
      ],
      options: [
        {
          name: "--client",
          description:
            "Assign a space role to a client-id of a (non-user) service account",
        },
        originOption,
      ],
    },
    {
      name: "unset-space-role",
      description: "Remove a space role from a user",
      args: [
        {
          name: "USERNAME",
          description: "The user",
        },
        orgArg,
        {
          name: "SPACE",
          description: "The space",
        },
        {
          name: "ROLE",
          description: "The space role",
          suggestions: [
            "SpaceManager",
            "SpaceDeveloper",
            "SpaceAuditor",
            "SpaceSupporter",
          ],
        },
      ],
      options: [
        {
          name: "--client",
          description:
            "Remove space role from a client-id of a (non-user) service account",
        },
        originOption,
      ],
    },
    {
      name: ["org-quotas", "quotas"],
      description: "List available organization quotas",
    },
    {
      name: ["org-quota", "quota"],
      description: "Show organization quota",
      args: orgQuotaNameArg,
    },
    {
      name: ["set-org-quota", "set-quota"],
      description: "Assign a quota to an organization",
      args: [
        orgArg,
        {
          name: "QUOTA",
          description: "The quota",
        },
      ],
    },
    {
      name: ["create-org-quota", "create-quota"],
      description: "Define a new quota for an organization",
      args: orgQuotaNameArg,
      options: createQuotaOptions,
    },
    {
      name: ["delete-org-quota", "delete-quota"],
      description: "Delete an organization quota",
      args: {
        name: "QUOTA",
        description: "The organization quota",
      },
      options: [forceOption],
    },
    {
      name: ["update-org-quota", "update-quota"],
      description: "Update an existing organization quota",
      args: orgQuotaNameArg,
      options: updateQuotaOptions,
    },
    {
      name: "share-private-domain",
      description: "Share a private domain with a specific org",
      args: [
        orgArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
    },
    {
      name: "unshare-private-domain",
      description: "Unshare a private domain with a specific org",
      args: [
        orgArg,
        {
          name: "DOMAIN",
          description: "The domain",
        },
      ],
    },
    {
      name: "space-quotas",
      description: "List available space quotas",
    },
    {
      name: "space-quota",
      description: "Show space quota info",
      args: spaceQuotaNameArg,
    },
    {
      name: "create-space-quota",
      description: "Define a new quota for a space",
      args: spaceQuotaNameArg,
      options: createQuotaOptions,
    },
    {
      name: "update-space-quota",
      description: "Update an existing space quota",
      args: spaceQuotaNameArg,
      options: updateQuotaOptions,
    },
    {
      name: "delete-space-quota",
      description: "Delete a space quota",
      args: {
        name: "QUOTA",
        description: "The organization quota",
      },
      options: [forceOption],
    },
    {
      name: "set-space-quota",
      description: "Assign a quota to a space",
      args: [
        {
          name: "SPACE_NAME",
          description: "The space",
          generators: generateSpaces,
        },
        {
          name: "QUOTA",
          description: "The space quota",
        },
      ],
    },
    {
      name: "unset-space-quota",
      description: "Unassign a quota from a space",
      args: [
        {
          name: "SPACE_NAME",
          description: "The space",
          generators: generateSpaces,
        },
        {
          name: "SPACE_QUOTA",
          description: "The space quota",
        },
      ],
    },
    {
      name: "service-brokers",
      description: "List service brokers",
    },
    {
      name: ["create-service-broker", "csb"],
      description: "Create a service broker",
      args: [
        {
          name: "SERVICE_BROKER",
          description: "The service broker name",
        },
        {
          name: "USERNAME",
          description: "The username",
        },
        {
          name: "PASSWORD_OR_URL",
          description:
            "Password of the broker, or its URL when the password is omitted",
        },
        {
          name: "URL",
          description: "URL of the service broker",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--space-scoped",
          description:
            "Make the broker's service plans only visible within the targeted space",
        },
        {
          name: "--update-if-exists",
          description:
            "If the broker already exists, update it rather than failing. Ignores --space-scoped",
        },
      ],
    },
    {
      name: "update-service-broker",
      description: "Update a service broker",
      args: [
        {
          name: "SERVICE_BROKER",
          description: "The service broker name",
        },
        {
          name: "USERNAME",
          description: "The username",
        },
        {
          name: "PASSWORD_OR_URL",
          description:
            "Password of the broker, or its URL when the password is omitted",
        },
        {
          name: "URL",
          description: "URL of the service broker",
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-service-broker",
      description: "Delete a service broker",
      args: {
        name: "SERVICE_BROKER",
        description: "The service broker",
      },
      options: [forceDeletionOption],
    },
    {
      name: "rename-service-broker",
      description: "Rename a service broker",
      args: [
        {
          name: "SERVICE_BROKER",
          description: "The old service broker name",
        },
        {
          name: "NEW_SERVICE_BROKER",
          description: "The new service broker name",
        },
      ],
    },
    {
      name: "purge-service-offering",
      description:
        "Recursively remove a service offering and child objects from Cloud Foundry database without making requests to a service broker",
      args: serviceOfferingArg,
      options: [
        {
          name: "-b",
          description:
            "Purge a service offering from a particular service broker. Required when service offering name is ambiguous",
          args: {
            name: "BROKER",
          },
        },
        forceDeletionOption,
      ],
    },
    {
      name: "purge-service-instance",
      description:
        "Recursively remove a service instance and child objects from Cloud Foundry database without making requests to a service broker",
      args: serviceInstanceArg,
      options: [forceOption],
    },
    {
      name: "service-access",
      description: "List service access settings",
      options: [
        {
          name: "-b",
          description: "Access for plans of a particular broker",
          args: {
            name: "BROKER",
          },
        },
        {
          name: "-e",
          description: "Access for plans of a particular service offering",
          args: {
            name: "SERVICE",
          },
        },
        {
          name: "-o",
          description: "Plans accessible by a particular organization",
          args: {
            name: "ORG",
          },
        },
      ],
    },
    {
      name: "enable-service-access",
      description:
        "Enable access to a service offering or service plan for one or all orgs",
      args: serviceOfferingArg,
      options: [
        {
          name: "-b",
          description:
            "Enable access to a service offering from a particular service broker. Required when service offering name is ambiguous",
          args: {
            name: "BROKER",
          },
        },
        {
          name: "-o",
          description: "Enable access for a specified organization",
          args: {
            name: "ORG",
          },
        },
        {
          name: "-p",
          description: "Enable access to a specified service plan",
          args: {
            name: "PLAN",
          },
        },
      ],
    },
    {
      name: "disable-service-access",
      description:
        "Disable access to a service offering or service plan for one or all orgs",
      args: serviceOfferingArg,
      options: [
        {
          name: "-b",
          description:
            "Disable access to a service offering from a particular service broker. Required when service offering name is ambiguous",
          args: {
            name: "BROKER",
          },
        },
        {
          name: "-o",
          description: "Disable access for a specified organization",
          args: {
            name: "ORG",
          },
        },
        {
          name: "-p",
          description: "Disable access to a specified service plan",
          args: {
            name: "PLAN",
          },
        },
      ],
    },
    {
      name: "security-group",
      description: "Show a single security group",
      args: securityGroupArg,
    },
    {
      name: "security-groups",
      description: "List all security groups",
    },
    {
      name: "create-security-group",
      description: "Create a security group",
      args: [
        securityGroupArg,
        {
          name: "PATH_TO_JSON_RULES_FILE",
          description: "Path to file of JSON describing security group rules",
          template: "filepaths",
        },
      ],
    },
    {
      name: "update-security-group",
      description: "Update a security group",
      args: [
        securityGroupArg,
        {
          name: "PATH_TO_JSON_RULES_FILE",
          description: "Path to file of JSON describing security group rules",
          template: "filepaths",
        },
      ],
    },
    {
      name: "delete-security-group",
      description: "Deletes a security group",
      args: securityGroupArg,
      options: [forceOption],
    },
    {
      name: "bind-security-group",
      description:
        "Bind a security group to a particular space, or all existing spaces of an org",
      args: [
        {
          name: "SECURITY_GROUP",
          description: "The security group name",
        },
        {
          name: "ORG",
          description: "The organization group name",
          generators: generateOrgs,
        },
      ],
      options: [
        {
          name: "--lifecycle",
          description: "Lifecycle phase the group applies to",
          args: {
            name: "LIFECYCLE",
            default: "running",
            suggestions: ["running", "staging"],
          },
        },
        {
          name: "--space",
          description:
            "Space to bind the security group to. (Default: all existing spaces in org)",
          args: {
            name: "SPACE",
          },
        },
      ],
    },
    {
      name: "unbind-security-group",
      description: "Unbind a security group from a space",
      args: [
        {
          name: "SECURITY_GROUP",
          description: "The security group name",
        },
        {
          name: "ORG",
          description: "The organization group name",
          generators: generateOrgs,
        },
        {
          name: "SPACE",
          description: "The space name",
        },
      ],
      options: [
        {
          name: "--lifecycle",
          description: "Lifecycle phase the group applies to",
          args: {
            name: "LIFECYCLE",
            default: "running",
            suggestions: ["running", "staging"],
          },
        },
      ],
    },
    {
      name: "bind-staging-security-group",
      description:
        "Bind a security group to the list of security groups to be used for staging applications globally",
      args: securityGroupArg,
    },
    {
      name: "staging-security-groups",
      description:
        "List security groups globally configured for staging applications",
    },
    {
      name: "unbind-staging-security-group",
      description:
        "Unbind a security group from the set of security groups for staging applications globally",
      args: securityGroupArg,
    },
    {
      name: "bind-running-security-group",
      description:
        "Bind a security group to the list of security groups to be used for running applications",
      args: securityGroupArg,
    },
    {
      name: "running-security-groups",
      description:
        "List security groups globally configured for running applications",
    },
    {
      name: "unbind-running-security-group",
      description:
        "Unbind a security group from the set of security groups for running applications globally",
      args: securityGroupArg,
    },
    {
      name: ["running-environment-variable-group", "revg"],
      description:
        "Retrieve the contents of the running environment variable group",
    },
    {
      name: ["staging-environment-variable-group", "sevg"],
      description:
        "Retrieve the contents of the staging environment variable group",
    },
    {
      name: ["set-staging-environment-variable-group", "ssevg"],
      description:
        "Pass parameters as JSON to create a staging environment variable group",
      args: {
        name: "JSON_STRING",
        description: "Json string",
      },
    },
    {
      name: ["set-running-environment-variable-group", "srevg"],
      description:
        "Pass parameters as JSON to create a running environment variable group",
      args: {
        name: "JSON_STRING",
        description: "Json string",
      },
    },
    {
      name: "isolation-segments",
      description: "List all isolation segments",
    },
    {
      name: "create-isolation-segment",
      description: "Create an isolation segment",
      args: segmentNameArg,
    },
    {
      name: "delete-isolation-segment",
      description: "Delete an isolation segment",
      args: segmentNameArg,
      options: [forceDeletionOption],
    },
    {
      name: "enable-org-isolation",
      description: "Entitle an organization to an isolation segment",
      args: [orgNameArg, segmentNameArg],
    },
    {
      name: "disable-org-isolation",
      description:
        "Revoke an organization's entitlement to an isolation segment",
      args: [orgNameArg, segmentNameArg],
    },
    {
      name: "set-org-default-isolation-segment",
      description:
        "Set the default isolation segment used for apps in spaces in an org",
      args: [orgNameArg, segmentNameArg],
    },
    {
      name: "reset-org-default-isolation-segment",
      description:
        "Reset the default isolation segment used for apps in spaces of an org",
      args: orgNameArg,
    },
    {
      name: "set-space-isolation-segment",
      description: "Assign the isolation segment for a space",
      args: [
        {
          name: "SPACE_NAME",
          description: "The space name",
          generators: generateSpaces,
        },
        segmentNameArg,
      ],
    },
    {
      name: "reset-space-isolation-segment",
      description: "Reset the space's isolation segment to the org default",
      args: {
        name: "SPACE_NAME",
        description: "The space name",
        generators: generateSpaces,
      },
    },
    {
      name: "feature-flags",
      description: "Retrieve list of feature flags with status",
    },
    {
      name: "feature-flag",
      description: "Retrieve an individual feature flag with status",
      args: featureNameArg,
    },
    {
      name: "enable-feature-flag",
      description: "Allow use of a feature",
      args: featureNameArg,
    },
    {
      name: "disable-feature-flag",
      description: "Prevent use of a feature",
      args: featureNameArg,
    },
    {
      name: "labels",
      description: "List all labels (key-value pairs) for an API resource",
      args: [
        {
          name: "RESOURCE",
          description: "The type of resource to label",
          suggestions: [
            "app",
            "buildpack",
            "domain",
            "org",
            "route",
            "route-policy",
            "service-broker",
            "service-instance",
            "service-offering",
            "service-plan",
            "space",
            "stack",
          ],
        },
        resourceNameArg,
      ],
      options: labelDisambiguationOptions,
    },
    {
      name: "set-label",
      description: "Set a label (key-value pairs) for an API resource",
      args: [
        {
          name: "RESOURCE",
          description: "The type of resource to label",
          suggestions: [
            "app",
            "buildpack",
            "domain",
            "org",
            "route",
            "route-policy",
            "service-broker",
            "service-instance",
            "service-offering",
            "service-plan",
            "space",
            "stack",
          ],
        },
        resourceNameArg,
        {
          name: "KEY=VALUE",
          description:
            "A space-separated list of labels to set on the resource",
          isVariadic: true,
        },
      ],
      options: labelDisambiguationOptions,
    },
    {
      name: "unset-label",
      description: "Unset a label (key-value pairs) for an API resource",
      args: [
        {
          name: "RESOURCE",
          description: "The type of resource",
          suggestions: [
            "app",
            "buildpack",
            "domain",
            "org",
            "route",
            "route-policy",
            "service-broker",
            "service-instance",
            "service-offering",
            "service-plan",
            "space",
            "stack",
          ],
        },
        resourceNameArg,
        {
          name: "KEY",
          description: "A label to unset on the resource",
          isVariadic: true,
        },
      ],
      options: [stackOption, brokerOption, offeringOption, sourceOption],
    },
    {
      name: "curl",
      description: "Executes a request to the targeted API endpoint",
      args: {
        name: "PATH",
        description: "The API endpoint",
      },
      options: [
        {
          name: "-H",
          description:
            "Custom headers to include in the request, flag can be specified multiple times",
          isRepeatable: true,
          args: {
            name: "HEADER",
          },
        },
        {
          name: "-X",
          description: "HTTP method (GET,POST,PUT,DELETE,etc)",
          args: {
            name: "METHOD",
          },
        },
        {
          name: "-d",
          description:
            "HTTP data to include in the request body, or '@' followed by a file name to read the data from",
          args: {
            name: "DATA",
          },
        },
        {
          name: ["--fail", "-f"],
          description: "Server errors return exit code 22",
        },
        {
          name: "-i",
          description: "Include response headers in the output",
        },
        {
          name: "--output",
          description: "Write curl body to FILE instead of stdout",
          args: {
            name: "FILE",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Write default values to the config",
      options: [
        {
          name: "--async-timeout",
          description: "Timeout in minutes for async HTTP requests",
          args: {
            name: "TIMEOUT_IN_MINUTES",
          },
        },
        {
          name: "--color",
          description: "Enable or disable color in CLI output",
          args: {
            name: "COLOR",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--locale",
          description:
            "Set default locale. If LOCALE is 'CLEAR', previous locale is deleted",
          args: {
            name: "LOCALE",
            suggestions: [
              "CLEAR",
              "de-DE",
              "en-US",
              "es-ES",
              "fr-FR",
              "it-IT",
              "ja-JP",
              "ko-KR",
              "pt-BR",
              "zh-Hans",
              "zh-Hant",
            ],
          },
        },
        {
          name: "--trace",
          description:
            "Trace HTTP requests by default. If a file path is provided then output will write to the file provided. If the file does not exist it will be created",
          args: {
            name: "TRACE",
            suggestions: ["true", "false"],
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "oauth-token",
      description:
        "Display the OAuth token for the current session and refresh the token if necessary",
    },
    {
      name: "ssh-code",
      description: "Get a one time password for ssh clients",
    },
    {
      name: "add-plugin-repo",
      description: "Add a new plugin repository",
      args: [
        {
          name: "REPO_NAME",
          description: "The plugin repo name",
        },
        {
          name: "URL",
          description: "The URL to the plugin repo",
        },
      ],
      options: [skipSslOption],
    },
    {
      name: "remove-plugin-repo",
      description: "Remove a plugin repository",
      args: {
        name: "REPO_NAME",
        description: "The plugin repo name",
      },
    },
    {
      name: "list-plugin-repos",
      description: "List all the added plugin repositories",
    },
    {
      name: "repo-plugins",
      description:
        "List all available plugins in specified repository or in all added repositories",
      options: [
        {
          name: "-r",
          description: "Name of a registered repository",
          args: {
            name: "REPO_NAME",
          },
        },
      ],
    },
    {
      name: "plugins",
      description: "List commands of installed plugins",
      options: [
        {
          name: "--checksum",
          description:
            "Compute and show the sha1 value of the plugin binary file",
          exclusiveOn: ["--outdated"],
        },
        {
          name: "--outdated",
          description:
            "Search the plugin repositories for new versions of installed plugins",
          exclusiveOn: ["--checksum"],
        },
        skipSslOption,
      ],
    },
    {
      name: "install-plugin",
      description: "Install CLI plugin",
      args: {
        name: "PLUGIN_NAME_OR_LOCATION",
        description:
          "The local path to the plugin, if the plugin exists locally; the URL to the plugin, if the plugin exists online; or the plugin name, if a repo is specified",
        template: "filepaths",
      },
      options: [
        skipSslOption,
        {
          name: "-f",
          description: "Force install of plugin without confirmation",
        },
        {
          name: "-r",
          description:
            "Restrict search for plugin to this registered repository",
          args: {
            name: "REPO_NAME",
          },
        },
      ],
    },
    {
      name: "uninstall-plugin",
      description: "Uninstall CLI plugin",
      args: {
        name: "PLUGIN_NAME",
        description: "The plugin name",
      },
    },
    {
      name: "v3-push",
      description: "Push a new app or sync changes to an existing app",
      hidden: true,
      args: {
        name: "APP_NAME",
        description: "The application name",
        isOptional: true,
      },
      options: pushOptions,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description:
        "Print the version, or API request diagnostics to stdout when used with a command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
