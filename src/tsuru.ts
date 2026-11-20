// Tsuru client v1.38.1 (latest stable tag of tsuru/tsuru-client per proxy.golang.org, 2026-11-20). Source: tsuru-client v1.38.1 Go source read statically (binary not run).
// Command tree = main.go registrations (ManagerV2, `tsuru <topic> <verb>` form) + each command's Info() and Flags();
// shorthands (deploy, rollback, log, info, shell, hidden list/start/stop/restart), deprecated `app metadata` / `unit autoscale`, cobra `completion`/`help`.
// Not listed: legacy flat names (`tsuru app-create`), plugins, and the v2.0.0-rc0 prerelease. `role default add/remove` flags come from the server's
// RoleEventMap (tsuru v1.32.0, the version pinned in go.mod), so they are not verified against a live server.

const formatTsuruOutput = (output: string) => {
  return output
    .split("\n")
    .filter((line) => line.startsWith("|"))
    .map((line) => line.split("|")[1].trim())
    .filter((name) => name !== "")
    .slice(1);
};

// Output of the `-q/--only-name` flag: one resource name per line
const tsuruNames = (output: string, description: string) => {
  return output
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "" && !/\s/.test(line))
    .map((name) => ({ name, description }));
};

const tsuruGenerators: Record<string, Fig.Generator> = {
  plans: {
    script: ["tsuru", "plan", "list"],
    postProcess: function (out) {
      const plans = formatTsuruOutput(out);
      return plans.map((plan) => {
        return { name: plan, description: "Plan" };
      });
    },
  },

  teams: {
    script: ["tsuru", "team", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Team"),
  },

  apps: {
    script: ["tsuru", "app", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "App"),
  },

  platforms: {
    script: ["tsuru", "platform", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Platform"),
  },

  pools: {
    script: ["tsuru", "pool", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Pool"),
  },

  jobs: {
    script: ["tsuru", "job", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Job"),
  },

  routers: {
    script: ["tsuru", "router", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Router"),
  },

  clusters: {
    script: ["tsuru", "cluster", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Cluster"),
  },

  volumes: {
    script: ["tsuru", "volume", "list", "-q"],
    postProcess: (out) => tsuruNames(out, "Volume"),
  },

  services: {
    script: ["tsuru", "service", "list", "-j"],
    postProcess: function (out) {
      const services = formatTsuruOutput(out);
      return services.map((service) => {
        return { name: service, description: "Service" };
      });
    },
  },
};

const noDescriptions: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const tsuruOptions: Record<string, Fig.Option> = {
  app: {
    name: ["-a", "--app"],
    description: "The name of the app",
    args: { name: "app", generators: tsuruGenerators.apps },
  },
  json: { name: "--json", description: "Show output in JSON format" },
  process: {
    name: ["-p", "--process"],
    description: "Process name",
    args: { name: "process" },
  },
  job: {
    name: ["-j", "--job"],
    description: "The name of the job",
    args: { name: "job", generators: tsuruGenerators.jobs },
  },
  assumeYes: {
    name: ["-y", "--assume-yes"],
    description: "Don't ask for confirmation",
  },
  noRestart: {
    name: "--no-restart",
    description: "Do not restart the application",
  },
  version: {
    name: "--version",
    description: "Version number",
    args: { name: "version" },
  },
  onlyName: { name: ["-q", "--only-name"], description: "Display only names" },
  newVersion: {
    name: "--new-version",
    description:
      "Creates a new version for the current deployment while preserving existing versions",
  },
  overrideOldVersions: {
    name: "--override-old-versions",
    description: "Force replace all deployed versions by this new deploy",
  },
  cname: {
    name: ["-c", "--cname"],
    description: "App CNAME",
    args: { name: "cname" },
  },
  type: {
    name: ["-t", "--type"],
    description: "Metadata type: annotation or label",
    args: { name: "type", suggestions: ["annotation", "label"] },
  },
  dockerfile: {
    name: "--dockerfile",
    description: "Container file",
    args: { name: "dockerfile", template: "filepaths" },
  },
  follow: { name: ["-f", "--follow"], description: "Follow logs" },
  message: {
    name: ["-m", "--message"],
    description: "A message describing this deploy",
    args: { name: "message" },
  },
};

const completionSpec: Fig.Spec = {
  name: "tsuru",
  description:
    "Tsuru is the command line utility used by application developers, that will allow users to create, list, bind and manage apps",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptions],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptions],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptions],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptions],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "app",
      description: "App is a program source code running on Tsuru",
      subcommands: [
        {
          name: "build",
          description:
            "Builds a container image following the app deploy workflow without changing the running application",
          args: {
            name: "file-or-dir",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
          options: [
            tsuruOptions.app,
            {
              name: ["-t", "--tag"],
              description: "The image tag",
              args: { name: "tag" },
              isRequired: true,
            },
            {
              name: ["-f", "--files-only"],
              description:
                "Enables single file build into the root of the app's tree",
            },
          ],
        },
        {
          name: ["create", "add"],
          description: "Creates a new app using the given name and platform",
          args: [
            { name: "appname" },
            {
              name: "platform",
              isOptional: true,
              generators: tsuruGenerators.platforms,
            },
          ],
          options: [
            {
              name: ["-p", "--plan"],
              description: "The plan used to create the app",
              args: { name: "plan", generators: tsuruGenerators.plans },
            },
            {
              name: ["-r", "--router"],
              description: "The router used by the app",
              args: { name: "router", generators: tsuruGenerators.routers },
            },
            {
              name: ["-t", "--team"],
              description: "Team owner app",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-o", "--pool"],
              description: "Pool to deploy your app",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-d", "--description"],
              description: "App description",
              args: { name: "description" },
            },
            {
              name: ["-g", "--tag"],
              description: "App tag",
              args: { name: "tag" },
              isRepeatable: true,
            },
            {
              name: "--router-opts",
              description: "Router options",
              args: { name: "key=value" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Deploys the source code and/or configurations to the application on Tsuru",
          args: {
            name: "file-or-dir",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
          options: [
            tsuruOptions.app,
            {
              name: ["-i", "--image"],
              description: "The image to deploy in app",
              args: { name: "image" },
            },
            tsuruOptions.message,
            {
              name: ["-f", "--files-only"],
              description:
                "Enables single file deployment into the root of the app's tree",
            },
            tsuruOptions.dockerfile,
            tsuruOptions.newVersion,
            tsuruOptions.overrideOldVersions,
          ],
          subcommands: [
            {
              name: "list",
              description: "List information about deploys for an application",
              args: {
                name: "appname",
                isOptional: true,
                generators: tsuruGenerators.apps,
              },
              options: [tsuruOptions.app, tsuruOptions.json],
            },
            {
              name: "rollback",
              description: "Deploys an existing image for an app",
              args: { name: "image-name" },
              options: [
                tsuruOptions.app,
                tsuruOptions.assumeYes,
                tsuruOptions.newVersion,
                tsuruOptions.overrideOldVersions,
              ],
              subcommands: [
                {
                  name: "update",
                  description: "Disables an existing image of an app",
                  args: {
                    name: "appname",
                    isOptional: true,
                    generators: tsuruGenerators.apps,
                  },
                  options: [
                    tsuruOptions.app,
                    {
                      name: ["-i", "--image"],
                      description: "The image name for an app version",
                      args: { name: "image" },
                    },
                    {
                      name: ["-r", "--reason"],
                      description:
                        "The reason why the rollback has to be disabled",
                      args: { name: "reason" },
                    },
                    {
                      name: ["-d", "--disable"],
                      description:
                        "Enables or disables the rollback on a specific image version",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "grant",
          description: "Allows a team to access an application",
          args: { name: "team-name", generators: tsuruGenerators.teams },
          options: [tsuruOptions.app],
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific app",
          args: {
            name: "appname",
            isOptional: true,
            generators: tsuruGenerators.apps,
          },
          options: [
            tsuruOptions.app,
            {
              name: ["-s", "--simplified"],
              description: "Show simplified view of app",
            },
            tsuruOptions.json,
          ],
        },
        {
          name: "list",
          description: "Lists all apps that you have access to",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter applications by name",
              args: { name: "name" },
            },
            {
              name: ["-o", "--pool"],
              description: "Filter applications by pool",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-s", "--status"],
              description:
                "Filter applications by unit status, comma separated: building, created, starting, error, started, stopped, asleep",
              args: { name: "status" },
            },
            {
              name: ["-p", "--platform"],
              description: "Filter applications by platform",
              args: { name: "platform", generators: tsuruGenerators.platforms },
            },
            {
              name: ["-t", "--team"],
              description: "Filter applications by team owner",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-u", "--user"],
              description: "Filter applications by owner",
              args: { name: "user" },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
            {
              name: ["-g", "--tag"],
              description: "Filter applications by tag",
              args: { name: "tag" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["log", "logs"],
          description: "Shows log entries for an application",
          args: {
            name: "appname",
            isOptional: true,
            generators: tsuruGenerators.apps,
          },
          options: [
            tsuruOptions.app,
            {
              name: ["-l", "--lines"],
              description: "The number of log lines to display",
              args: { name: "lines" },
            },
            {
              name: ["-s", "--source"],
              description: "The log from the given source",
              args: { name: "source" },
            },
            {
              name: ["-u", "--unit"],
              description: "The log from the given unit",
              args: { name: "unit" },
            },
            tsuruOptions.follow,
            { name: "--no-date", description: "No date information" },
            { name: "--no-source", description: "No source information" },
          ],
        },
        {
          name: "metadata",
          description:
            "Metadata is a modern way to define labels and annotations to apps",
          subcommands: [
            {
              name: "get",
              description: 'Deprecated, use "tsuru metadata get" instead',
              deprecated: true,
              options: [tsuruOptions.app, tsuruOptions.job, tsuruOptions.json],
            },
            {
              name: "set",
              description: 'Deprecated, use "tsuru metadata set" instead',
              deprecated: true,
              args: {
                name: "name=value",
                description: "Variable in the NAME=value format",
                isVariadic: true,
              },
              options: [
                tsuruOptions.app,
                tsuruOptions.job,
                tsuruOptions.process,
                tsuruOptions.type,
                tsuruOptions.noRestart,
              ],
            },
            {
              name: "unset",
              description: 'Deprecated, use "tsuru metadata unset" instead',
              deprecated: true,
              args: { name: "name", isVariadic: true },
              options: [
                tsuruOptions.app,
                tsuruOptions.job,
                tsuruOptions.process,
                tsuruOptions.type,
                tsuruOptions.noRestart,
              ],
            },
          ],
        },
        {
          name: "process",
          description:
            "An application process represents a command that runs as part of the application",
          subcommands: [
            {
              name: "update",
              description: "Updates a plan of app process",
              args: [
                { name: "app", generators: tsuruGenerators.apps },
                { name: "process" },
              ],
              options: [
                {
                  name: ["-p", "--plan"],
                  description: "Changes plan for the app",
                  args: { name: "plan", generators: tsuruGenerators.plans },
                },
                {
                  name: "--default-plan",
                  description: "Reset process to default plan of app",
                },
                tsuruOptions.noRestart,
              ],
            },
          ],
        },
        {
          name: "quota",
          description:
            "Quotas are used to safeguard the cluster against undesired or excessive scaling",
          subcommands: [
            {
              name: ["change", "update", "set"],
              description: "Changes the limit of units that an app can have",
              args: {
                name: "new-limit",
                description: "New limit, an integer or unlimited",
              },
              options: [tsuruOptions.app],
            },
            {
              name: "view",
              description:
                "Displays the current usage and limit of the given app",
              args: {
                name: "app-name",
                isOptional: true,
                generators: tsuruGenerators.apps,
              },
              options: [tsuruOptions.app, tsuruOptions.json],
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes an application",
          options: [tsuruOptions.app, tsuruOptions.assumeYes],
        },
        {
          name: "restart",
          description:
            "Restarts an application, or one of the processes of the application",
          args: {
            name: "appname",
            isOptional: true,
            generators: tsuruGenerators.apps,
          },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
        {
          name: "revoke",
          description:
            "Revokes the permission to access an application from a team",
          args: { name: "team-name", generators: tsuruGenerators.teams },
          options: [tsuruOptions.app],
        },
        {
          name: "router",
          description:
            "Router is a component responsible for routing user traffic to applications",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Add a new router to an application",
              args: {
                name: "router-name",
                generators: tsuruGenerators.routers,
              },
              options: [
                tsuruOptions.app,
                {
                  name: ["-o", "--opts"],
                  description:
                    "Custom options sent directly to router implementation",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "list",
              description: "List all routers associated to an application",
              options: [tsuruOptions.app, tsuruOptions.json],
            },
            {
              name: ["remove", "delete"],
              description: "Remove a router from an application",
              args: {
                name: "router-name",
                generators: tsuruGenerators.routers,
              },
              options: [tsuruOptions.app],
            },
            {
              name: "update",
              description: "Update router opts in an application",
              args: {
                name: "router-name",
                generators: tsuruGenerators.routers,
              },
              options: [
                tsuruOptions.app,
                {
                  name: ["-o", "--opts"],
                  description:
                    "Custom options sent directly to router implementation",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "version",
              description:
                "Manage multiple application versions behind the application router",
              subcommands: [
                {
                  name: ["add", "create"],
                  description: "Adds an app version as routable",
                  args: { name: "version" },
                  options: [tsuruOptions.app],
                },
                {
                  name: ["remove", "delete"],
                  description: "Removes an app version from being routable",
                  args: { name: "version" },
                  options: [tsuruOptions.app],
                },
              ],
            },
          ],
        },
        {
          name: "routes",
          description: "Manage routes within the application router",
          subcommands: [
            {
              name: "rebuild",
              description: "Rebuild routes for an application",
              args: {
                name: "app-name",
                isOptional: true,
                generators: tsuruGenerators.apps,
              },
              options: [tsuruOptions.app],
            },
          ],
        },
        {
          name: "run",
          description:
            "Runs an arbitrary command in the application's containers",
          args: { name: "command", isVariadic: true },
          options: [
            tsuruOptions.app,
            { name: ["-o", "--once"], description: "Running only one unit" },
            {
              name: ["-i", "--isolated"],
              description: "Running in ephemeral container",
            },
          ],
        },
        {
          name: "shell",
          description: "Opens a remote shell inside a unit of the application",
          args: { name: "unit-id", isOptional: true },
          options: [
            tsuruOptions.app,
            {
              name: ["-i", "--isolated"],
              description: "Run shell in a new unit",
            },
            { name: ["-d", "--debug"], description: "Enable debug mode" },
          ],
        },
        {
          name: "start",
          description:
            "Starts an application, or one of the processes of the application",
          args: {
            name: "appname",
            isOptional: true,
            generators: tsuruGenerators.apps,
          },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
        {
          name: "stop",
          description:
            "Stops an application, or one of the processes of the application",
          args: {
            name: "appname",
            isOptional: true,
            generators: tsuruGenerators.apps,
          },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
        {
          name: "update",
          description:
            "Updates an app, changing its description, tags, plan or pool information",
          options: [
            tsuruOptions.app,
            {
              name: ["-d", "--description"],
              description: "Changes description for the app",
              args: { name: "description" },
            },
            {
              name: ["-p", "--plan"],
              description: "Changes plan for the app",
              args: { name: "plan", generators: tsuruGenerators.plans },
            },
            {
              name: ["-o", "--pool"],
              description: "Changes pool for the app",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-t", "--team"],
              description: "Changes owner team for the app",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: "--team-owner",
              description: "Changes owner team for the app",
              hidden: true,
              args: { name: "team-owner" },
            },
            {
              name: ["-g", "--tag"],
              description: "Add tags for the app",
              args: { name: "tag" },
              isRepeatable: true,
            },
            {
              name: ["-l", "--platform"],
              description: "Changes platform for the app",
              args: { name: "platform", generators: tsuruGenerators.platforms },
            },
            {
              name: ["-i", "--image-reset"],
              description: "Forces next deploy to build app image from scratch",
            },
            tsuruOptions.noRestart,
            {
              name: "--cpu",
              description:
                "CPU limit for app, overrides the plan cpu value (for example 1 or 100m)",
              args: { name: "cpu" },
            },
            {
              name: "--cpu-burst-factor",
              description:
                "The multiplier to determine the limits of the CPU burst",
              args: { name: "cpu-burst-factor" },
            },
            {
              name: "--memory",
              description:
                "Memory limit for app, overrides the plan memory value (bytes or a suffix such as M, G, Mi, Gi)",
              args: { name: "memory" },
            },
          ],
        },
        {
          name: "version",
          description: "Manage app versions",
          subcommands: [
            {
              name: ["remove", "delete"],
              description: "Removes a specific version of an application",
              args: {
                name: "appname",
                isOptional: true,
                generators: tsuruGenerators.apps,
              },
              options: [tsuruOptions.app, tsuruOptions.version],
            },
          ],
        },
      ],
    },
    {
      name: "autoscale",
      description: "Manage autoscaling of application units",
      subcommands: [
        {
          name: "set",
          description: "Sets an auto scale configuration",
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            {
              name: "--cpu",
              description:
                "Target CPU value in percent of app cpu plan, such as 50%",
              args: { name: "cpu" },
            },
            {
              name: "--min",
              description: "Minimum Units",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum Units",
              args: { name: "max" },
            },
            {
              name: "--schedule",
              description:
                "Schedule window to up/down scale, as JSON (minReplicas, start, end)",
              args: { name: "schedule" },
              isRepeatable: true,
            },
            {
              name: "--prometheus",
              description:
                "Prometheus settings to up/down scale, as JSON (name, threshold, query)",
              args: { name: "prometheus" },
              isRepeatable: true,
            },
            {
              name: "--scale-down-percentage",
              description:
                "Percentage of units to downscale when the metric is below the threshold",
              args: { name: "scale-down-percentage" },
            },
            {
              name: "--scale-down-stabilization-window",
              description:
                "Stabilization window in seconds to avoid scale down",
              args: { name: "scale-down-stabilization-window" },
            },
            {
              name: "--scale-down-units",
              description:
                "Number of units to downscale when the metric is below the threshold",
              args: { name: "scale-down-units" },
            },
            {
              name: "--sdp",
              description:
                "Shorthand: Percentage of units to downscale when the metric is below the threshold",
              args: { name: "sdp" },
            },
            {
              name: "--sdsw",
              description:
                "Shorthand: Stabilization window in seconds to avoid scale down",
              args: { name: "sdsw" },
            },
            {
              name: "--sdu",
              description:
                "Shorthand: Number of units to downscale when the metric is below the threshold",
              args: { name: "sdu" },
            },
          ],
        },
        {
          name: "swap",
          description:
            "Swap a unit auto scale configuration to another version",
          options: [tsuruOptions.app, tsuruOptions.version],
        },
        {
          name: "unset",
          description: "Unsets a unit auto scale configuration",
          options: [tsuruOptions.app, tsuruOptions.process],
        },
      ],
    },
    {
      name: "certificate",
      description:
        "Certificate is used to manage SSL/TLS certificates for secure communication",
      subcommands: [
        {
          name: "issuer",
          description:
            "Issuer is used to automate the issuance of SSL/TLS certificates",
          subcommands: [
            {
              name: "set",
              description:
                "Creates or update a certificate issuer into the specific app",
              args: { name: "issuer" },
              options: [tsuruOptions.app, tsuruOptions.cname],
            },
            {
              name: "unset",
              description: "Unset a certificate issuer from a specific app",
              options: [
                tsuruOptions.app,
                tsuruOptions.assumeYes,
                tsuruOptions.cname,
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List App TLS certificates",
          options: [
            tsuruOptions.app,
            { name: ["-r", "--raw"], description: "Display raw certificates" },
            tsuruOptions.json,
          ],
        },
        {
          name: "set",
          description:
            "Creates or update a TLS certificate into the specific app",
          args: [
            { name: "certificate", template: "filepaths" },
            { name: "key", template: "filepaths" },
          ],
          options: [tsuruOptions.app, tsuruOptions.cname],
        },
        {
          name: "unset",
          description: "Unset a TLS certificate from a specific app",
          options: [tsuruOptions.app, tsuruOptions.cname],
        },
      ],
    },
    {
      name: "change-password",
      description: "Changes the password of the logged in user",
    },
    {
      name: "cluster",
      description: "Manage kubernetes clusters",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Creates a provisioner cluster definition",
          args: [{ name: "name" }, { name: "provisioner" }],
          options: [
            {
              name: "--cacert",
              description: "Path to CA cert file",
              args: { name: "cacert", template: "filepaths" },
            },
            {
              name: "--clientcert",
              description: "Path to client cert file",
              args: { name: "clientcert", template: "filepaths" },
            },
            {
              name: "--clientkey",
              description: "Path to client key file",
              args: { name: "clientkey", template: "filepaths" },
            },
            {
              name: "--default",
              description: "Whether this is the default cluster",
            },
            {
              name: "--addr",
              description: "Address to be used in cluster",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--pool",
              description: "Pool which will use this cluster",
              args: { name: "pool", generators: tsuruGenerators.pools },
              isRepeatable: true,
            },
            {
              name: "--custom",
              description: "Custom provisioner specific data",
              args: { name: "key=value" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific cluster",
          args: { name: "name", generators: tsuruGenerators.clusters },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "List registered provisioner cluster definitions",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter clusters by name",
              args: { name: "name" },
            },
            {
              name: ["-o", "--pool"],
              description: "Filter clusters by pool",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes a provisioner cluster definition",
          args: { name: "name", generators: tsuruGenerators.clusters },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "update",
          description: "Updates a provisioner cluster definition",
          args: [
            { name: "name", generators: tsuruGenerators.clusters },
            { name: "provisioner" },
          ],
          options: [
            {
              name: "--cacert",
              description: "Path to CA cert file",
              args: { name: "cacert", template: "filepaths" },
            },
            {
              name: "--remove-cacert",
              description: "Remove path to CA cert file",
            },
            {
              name: "--clientcert",
              description: "Path to client cert file",
              args: { name: "clientcert", template: "filepaths" },
            },
            {
              name: "--remove-clientcert",
              description: "Remove path to client cert file",
            },
            {
              name: "--clientkey",
              description: "Path to client key file",
              args: { name: "clientkey", template: "filepaths" },
            },
            {
              name: "--remove-clientkey",
              description: "Remove path to client key file",
            },
            {
              name: "--default",
              description: "Whether this is the default cluster",
              args: { name: "default", suggestions: ["true", "false"] },
            },
            {
              name: "--addr",
              description: "Address to be used in cluster",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--add-pool",
              description: "Add pool which will use this cluster",
              args: { name: "add-pool", generators: tsuruGenerators.pools },
              isRepeatable: true,
            },
            {
              name: "--remove-pool",
              description: "Remove pool which use this cluster",
              args: { name: "remove-pool", generators: tsuruGenerators.pools },
              isRepeatable: true,
            },
            {
              name: "--add-custom",
              description: "Add custom provisioner specific data",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--remove-custom",
              description: "Remove custom provisioner specific data",
              args: { name: "remove-custom" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "cname",
      description:
        "CNAME (Canonical Name) is a custom domain you assign to your application",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds a new CNAME to the application",
          args: { name: "cname", isVariadic: true },
          options: [tsuruOptions.app],
        },
        {
          name: ["remove", "delete"],
          description: "Removes a CNAME from the application",
          args: { name: "cname", isVariadic: true },
          options: [tsuruOptions.app],
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the source code and/or configurations to the application on Tsuru",
      args: {
        name: "file-or-dir",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        tsuruOptions.app,
        {
          name: ["-i", "--image"],
          description: "The image to deploy in app",
          args: { name: "image" },
        },
        tsuruOptions.message,
        {
          name: ["-f", "--files-only"],
          description:
            "Enables single file deployment into the root of the app's tree",
        },
        tsuruOptions.dockerfile,
        tsuruOptions.newVersion,
        tsuruOptions.overrideOldVersions,
      ],
    },
    {
      name: "env",
      description: "Manage environment variables from an app or job",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves environment variables for an application or job",
          args: { name: "env-var", isOptional: true, isVariadic: true },
          options: [tsuruOptions.app, tsuruOptions.job, tsuruOptions.json],
        },
        {
          name: "set",
          description: "Sets environment variables for an application or job",
          args: {
            name: "name=value",
            description: "Variable in the NAME=value format",
            isVariadic: true,
          },
          options: [
            tsuruOptions.app,
            tsuruOptions.job,
            {
              name: ["-p", "--private"],
              description: "Private environment variables",
            },
            tsuruOptions.noRestart,
          ],
        },
        {
          name: "unset",
          description: "Unset environment variables for an application or job",
          args: { name: "env-var", isVariadic: true },
          options: [tsuruOptions.app, tsuruOptions.job, tsuruOptions.noRestart],
        },
      ],
    },
    {
      name: "event",
      description:
        "Events are used to audit all actions performed on Tsuru resources",
      subcommands: [
        {
          name: "block",
          description:
            "Event blocks prevent specific system actions during maintenance",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Block events",
              args: { name: "reason" },
              options: [
                {
                  name: ["-k", "--kind"],
                  description: "Event kind to be blocked",
                  args: { name: "kind" },
                },
                {
                  name: ["-o", "--owner"],
                  description: "Block this owner's events",
                  args: { name: "owner" },
                },
                {
                  name: ["-t", "--type"],
                  description: "Block events with this target type",
                  args: { name: "type" },
                },
                {
                  name: ["-v", "--value"],
                  description: "Block events with this target value",
                  args: { name: "value" },
                },
                {
                  name: ["-c", "--conditions"],
                  description:
                    "Conditions to apply on event kind to be blocked",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "list",
              description: "Lists all event blocks",
              options: [
                {
                  name: ["-a", "--active"],
                  description: "Display only active blocks",
                },
              ],
            },
            {
              name: ["remove", "delete"],
              description: "Removes an event block",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "cancel",
          description: "Cancel a running event",
          args: [{ name: "event-id" }, { name: "reason" }],
          options: [tsuruOptions.assumeYes],
        },
        {
          name: ["info", "describe"],
          description: "Show detailed information about one single event",
          args: { name: "event-id" },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "Lists events that you have permission to see",
          options: [
            tsuruOptions.json,
            {
              name: ["-k", "--kind"],
              description: "Filter events by kind name",
              args: { name: "kind" },
              isRepeatable: true,
            },
            {
              name: ["-t", "--target-type"],
              description: "Filter events by target type",
              args: { name: "target-type" },
            },
            {
              name: ["-v", "--target-value"],
              description: "Filter events by target value",
              args: { name: "target-value" },
            },
            {
              name: ["-o", "--owner"],
              description: "Filter events by owner name",
              args: { name: "owner" },
            },
            {
              name: ["-r", "--running"],
              description: "Shows only currently running events",
            },
          ],
        },
        {
          name: "webhook",
          description:
            "Event webhooks allow integrating tsuru events with external systems",
          subcommands: [
            {
              name: ["create", "add"],
              description:
                "Creates a new webhook triggered when an event matches",
              args: [{ name: "name" }, { name: "url" }],
              options: [
                {
                  name: ["-d", "--description"],
                  description: "A description on how the webhook will be used",
                  args: { name: "description" },
                },
                {
                  name: ["-t", "--team"],
                  description: "The team name responsible for this webhook",
                  args: { name: "team", generators: tsuruGenerators.teams },
                },
                {
                  name: ["-m", "--method"],
                  description:
                    "The HTTP Method used in the request, if unset defaults to POST",
                  args: { name: "method" },
                },
                {
                  name: ["-b", "--body"],
                  description:
                    "The HTTP body sent in the request if method is either POST, PUT or PATCH, if unset defaults to the Event that triggered the webhook serialized as JSON",
                  args: { name: "body" },
                },
                {
                  name: "--proxy",
                  description: "The proxy server URL used in the request",
                  args: { name: "proxy" },
                },
                {
                  name: ["-H", "--header"],
                  description: "The HTTP headers sent in the request",
                  args: { name: "name=value" },
                  isRepeatable: true,
                },
                {
                  name: "--insecure",
                  description: "Ignore TLS errors in the webhook request",
                },
                {
                  name: "--target-type",
                  description: "Target Type for matching events",
                  args: { name: "target-type" },
                  isRepeatable: true,
                },
                {
                  name: "--target-value",
                  description: "Target Value for matching events",
                  args: { name: "target-value" },
                  isRepeatable: true,
                },
                {
                  name: "--kind-type",
                  description: "Kind Type for matching events",
                  args: { name: "kind-type" },
                  isRepeatable: true,
                },
                {
                  name: "--kind-name",
                  description: "Kind Name for matching events",
                  args: { name: "kind-name" },
                  isRepeatable: true,
                },
                {
                  name: "--error-only",
                  description: "Only matches events with error",
                },
                {
                  name: "--success-only",
                  description: "Only matches events with success",
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Deletes an existing webhook",
              args: { name: "name" },
            },
            {
              name: ["info", "describe"],
              description: "Show detailed information for a webhook",
              args: { name: "name" },
            },
            {
              name: "list",
              description: "List existing webhooks",
            },
            {
              name: "update",
              description: "Updates an existing webhook",
              args: { name: "name" },
              options: [
                {
                  name: ["-d", "--description"],
                  description: "A description on how the webhook will be used",
                  args: { name: "description" },
                },
                {
                  name: ["-t", "--team"],
                  description: "The team name responsible for this webhook",
                  args: { name: "team", generators: tsuruGenerators.teams },
                },
                {
                  name: ["-m", "--method"],
                  description:
                    "The HTTP Method used in the request, if unset defaults to POST",
                  args: { name: "method" },
                },
                {
                  name: ["-b", "--body"],
                  description:
                    "The HTTP body sent in the request if method is either POST, PUT or PATCH, if unset defaults to the Event that triggered the webhook serialized as JSON",
                  args: { name: "body" },
                },
                {
                  name: "--proxy",
                  description: "The proxy server URL used in the request",
                  args: { name: "proxy" },
                },
                {
                  name: ["-H", "--header"],
                  description: "The HTTP headers sent in the request",
                  args: { name: "name=value" },
                  isRepeatable: true,
                },
                {
                  name: "--insecure",
                  description: "Ignore TLS errors in the webhook request",
                },
                {
                  name: "--target-type",
                  description: "Target Type for matching events",
                  args: { name: "target-type" },
                  isRepeatable: true,
                },
                {
                  name: "--target-value",
                  description: "Target Value for matching events",
                  args: { name: "target-value" },
                  isRepeatable: true,
                },
                {
                  name: "--kind-type",
                  description: "Kind Type for matching events",
                  args: { name: "kind-type" },
                  isRepeatable: true,
                },
                {
                  name: "--kind-name",
                  description: "Kind Name for matching events",
                  args: { name: "kind-name" },
                  isRepeatable: true,
                },
                {
                  name: "--error-only",
                  description: "Only matches events with error",
                },
                {
                  name: "--success-only",
                  description: "Only matches events with success",
                },
                {
                  name: ["-u", "--url"],
                  description: "The HTTP URL used in the request",
                  args: { name: "url" },
                },
                { name: "--no-body", description: "Unset body value" },
                { name: "--no-header", description: "Unset header value" },
                { name: "--no-insecure", description: "Unset insecure value" },
                {
                  name: "--no-target-type",
                  description: "Unset Target Type for matching events",
                },
                {
                  name: "--no-target-value",
                  description: "Unset Target Value for matching events",
                },
                {
                  name: "--no-kind-type",
                  description: "Unset Kind Type for matching events",
                },
                {
                  name: "--no-kind-name",
                  description: "Unset Kind Name for matching events",
                },
                {
                  name: "--no-error-only",
                  description: "Unset only matches events with error",
                },
                {
                  name: "--no-success-only",
                  description: "Unset only matches events with success",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["info", "describe"],
      description: "Shows information about a specific app",
      args: {
        name: "appname",
        isOptional: true,
        generators: tsuruGenerators.apps,
      },
      options: [
        tsuruOptions.app,
        {
          name: ["-s", "--simplified"],
          description: "Show simplified view of app",
        },
        tsuruOptions.json,
      ],
    },
    {
      name: "init",
      description:
        "Creates a standard example of .tsuruignore, tsuru.yaml and Procfile on the current project directory",
      hidden: true,
    },
    {
      name: "job",
      description:
        "Job is a program that runs on a schedule or is executed manually",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Creates a new job using the given name and platform",
          args: [
            { name: "job-name" },
            { name: "image", isOptional: true },
            { name: "commands", isOptional: true, isVariadic: true },
          ],
          options: [
            {
              name: ["-p", "--plan"],
              description: "The plan used to create the job",
              args: { name: "plan", generators: tsuruGenerators.plans },
            },
            {
              name: ["-s", "--schedule"],
              description: "Schedule string",
              args: { name: "schedule" },
            },
            {
              name: ["-t", "--team"],
              description: "Team owner job",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-o", "--pool"],
              description: "Pool to deploy your job",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-d", "--description"],
              description: "Job description",
              args: { name: "description" },
            },
            {
              name: ["-g", "--tag"],
              description: "Job tag",
              args: { name: "tag" },
              isRepeatable: true,
            },
            { name: "--manual", description: "Manual job" },
            {
              name: ["-m", "--max-running-time"],
              description: "Maximum running time in seconds for the job",
              args: { name: "max-running-time" },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete an existing job",
          args: { name: "job-name", generators: tsuruGenerators.jobs },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "deploy",
          description:
            "Deploys the source code and/or configurations to a job on Tsuru",
          options: [
            tsuruOptions.job,
            {
              name: ["-i", "--image"],
              description: "The image to deploy in job",
              args: { name: "image" },
            },
            tsuruOptions.message,
            tsuruOptions.dockerfile,
          ],
        },
        {
          name: ["info", "describe"],
          description: "Retrieve useful information from a job",
          args: { name: "job-name", generators: tsuruGenerators.jobs },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "List jobs",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter jobs by name",
              args: { name: "name" },
            },
            {
              name: ["-o", "--pool"],
              description: "Filter jobs by pool",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-p", "--plan"],
              description: "Filter jobs by plan",
              args: { name: "plan", generators: tsuruGenerators.plans },
            },
            {
              name: ["-t", "--team"],
              description: "Filter jobs by team owner",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
          ],
        },
        {
          name: ["log", "logs"],
          description: "Retrieves the logs of a job",
          args: { name: "job-name", generators: tsuruGenerators.jobs },
          options: [tsuruOptions.follow],
        },
        {
          name: "trigger",
          description: "Trigger an existing job",
          args: { name: "job-name", generators: tsuruGenerators.jobs },
        },
        {
          name: "update",
          description: "Updates a job",
          args: [
            { name: "job-name", generators: tsuruGenerators.jobs },
            { name: "commands", isOptional: true, isVariadic: true },
          ],
          options: [
            {
              name: ["-p", "--plan"],
              description: "The plan used to create the job",
              args: { name: "plan", generators: tsuruGenerators.plans },
            },
            {
              name: ["-s", "--schedule"],
              description: "Schedule string",
              args: { name: "schedule" },
            },
            { name: "--manual", description: "Manual job" },
            {
              name: ["-t", "--team"],
              description: "Team owner job",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-o", "--pool"],
              description: "Pool to deploy your job",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-d", "--description"],
              description: "Job description",
              args: { name: "description" },
            },
            {
              name: ["-g", "--tag"],
              description: "Job tag",
              args: { name: "tag" },
              isRepeatable: true,
            },
            {
              name: ["-i", "--image"],
              description: "New image for the job to run",
              args: { name: "image" },
            },
            {
              name: ["-m", "--max-running-time"],
              description: "Maximum running time in seconds for the job",
              args: { name: "max-running-time" },
            },
          ],
        },
      ],
    },
    {
      name: "list",
      description: "Lists all apps that you have access to",
      hidden: true,
      options: [
        {
          name: ["-n", "--name"],
          description: "Filter applications by name",
          args: { name: "name" },
        },
        {
          name: ["-o", "--pool"],
          description: "Filter applications by pool",
          args: { name: "pool", generators: tsuruGenerators.pools },
        },
        {
          name: ["-s", "--status"],
          description:
            "Filter applications by unit status, comma separated: building, created, starting, error, started, stopped, asleep",
          args: { name: "status" },
        },
        {
          name: ["-p", "--platform"],
          description: "Filter applications by platform",
          args: { name: "platform", generators: tsuruGenerators.platforms },
        },
        {
          name: ["-t", "--team"],
          description: "Filter applications by team owner",
          args: { name: "team", generators: tsuruGenerators.teams },
        },
        {
          name: ["-u", "--user"],
          description: "Filter applications by owner",
          args: { name: "user" },
        },
        tsuruOptions.onlyName,
        tsuruOptions.json,
        {
          name: ["-g", "--tag"],
          description: "Filter applications by tag",
          args: { name: "tag" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: ["log", "logs"],
      description: "Shows log entries for an application",
      args: {
        name: "appname",
        isOptional: true,
        generators: tsuruGenerators.apps,
      },
      options: [
        tsuruOptions.app,
        {
          name: ["-l", "--lines"],
          description: "The number of log lines to display",
          args: { name: "lines" },
        },
        {
          name: ["-s", "--source"],
          description: "The log from the given source",
          args: { name: "source" },
        },
        {
          name: ["-u", "--unit"],
          description: "The log from the given unit",
          args: { name: "unit" },
        },
        tsuruOptions.follow,
        { name: "--no-date", description: "No date information" },
        { name: "--no-source", description: "No source information" },
      ],
    },
    {
      name: "login",
      description: "Initiates a new tsuru session for a user",
      args: { name: "email", isOptional: true },
      options: [
        {
          name: ["-s", "--scheme"],
          description: "Login with specific auth scheme",
          args: { name: "scheme" },
        },
      ],
    },
    {
      name: "logout",
      description: "Logout will terminate the session with the tsuru server",
    },
    {
      name: "metadata",
      description:
        "Metadata is a modern way to define labels and annotations to apps and jobs",
      subcommands: [
        {
          name: "get",
          description: "Retrieves metadata for an application or job",
          options: [tsuruOptions.app, tsuruOptions.job, tsuruOptions.json],
        },
        {
          name: "set",
          description:
            "Sets metadata such as labels and annotations for an application or job",
          args: {
            name: "name=value",
            description: "Variable in the NAME=value format",
            isVariadic: true,
          },
          options: [
            tsuruOptions.app,
            tsuruOptions.job,
            tsuruOptions.process,
            tsuruOptions.type,
            tsuruOptions.noRestart,
          ],
        },
        {
          name: "unset",
          description:
            "Unsets metadata such as labels and annotations for an application or job",
          args: { name: "name", isVariadic: true },
          options: [
            tsuruOptions.app,
            tsuruOptions.job,
            tsuruOptions.process,
            tsuruOptions.type,
            tsuruOptions.noRestart,
          ],
        },
      ],
    },
    {
      name: "permission",
      description: "Manage permissions",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all permissions available to use when defining roles",
          options: [
            {
              name: ["-t", "--tree"],
              description: "Show permissions in tree format",
            },
          ],
        },
      ],
    },
    {
      name: "plan",
      description:
        "Plan specifies how computational resources are allocated to your application",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Creates a new plan for being used when creating apps",
          args: { name: "name" },
          options: [
            {
              name: ["-m", "--memory"],
              description:
                "Amount of available memory for units in bytes or an integer value followed by M, K or G",
              args: { name: "memory" },
            },
            {
              name: ["-c", "--cpu"],
              description: "Relative cpu each unit will have available",
              args: { name: "cpu" },
            },
            {
              name: ["-d", "--default"],
              description:
                "Set plan as default, removing the default flag from any other plan",
            },
          ],
        },
        {
          name: "list",
          description:
            "List available plans that can be used when creating an app",
          options: [
            {
              name: ["-b", "--bytes"],
              description: "Bytesized units for memory and swap",
            },
            {
              name: "--show-max-cpu-burst-allowed",
              description: "Show column about max CPU burst allowed by plan",
            },
            {
              name: "--kubernetes-friendly",
              description: "Show values friendly for a kubernetes user",
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes an existing plan",
          args: { name: "name", generators: tsuruGenerators.plans },
        },
      ],
    },
    {
      name: "platform",
      description:
        "A platform is a well-defined pack with installed dependencies for a language or framework",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds a new platform to tsuru",
          args: { name: "platform-name" },
          options: [
            {
              name: ["-d", "--dockerfile"],
              description:
                "URL or path to the Dockerfile used for building the image of the platform",
              args: { name: "dockerfile", template: "filepaths" },
            },
            {
              name: ["-i", "--image"],
              description: "Name of the prebuilt Docker image",
              args: { name: "image" },
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific platform",
          args: {
            name: "platform-name",
            generators: tsuruGenerators.platforms,
          },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "Lists the available platforms",
          options: [tsuruOptions.onlyName, tsuruOptions.json],
        },
        {
          name: ["remove", "delete"],
          description: "Remove a platform from tsuru",
          args: {
            name: "platform-name",
            generators: tsuruGenerators.platforms,
          },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "update",
          description: "Updates a platform in tsuru",
          args: {
            name: "platform-name",
            generators: tsuruGenerators.platforms,
          },
          options: [
            {
              name: ["-d", "--dockerfile"],
              description:
                "URL or path to the Dockerfile used for building the image of the platform",
              args: { name: "dockerfile", template: "filepaths" },
            },
            { name: "--disable", description: "Disable the platform" },
            { name: "--enable", description: "Enable the platform" },
            {
              name: ["-i", "--image"],
              description: "Name of the prebuilt Docker image",
              args: { name: "image" },
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Plugins are used to extend tsuru client functionality",
      subcommands: [
        {
          name: "bundle",
          description:
            "Syncs multiple plugins using a remote manifest containing a list of plugins",
          options: [
            {
              name: "--url",
              description: "URL for the remote plugin-bundle JSON manifest",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "install",
          description: "Downloads the plugin file",
          args: [{ name: "plugin-name" }, { name: "plugin-url" }],
        },
        {
          name: "list",
          description: "List installed tsuru plugins",
        },
        {
          name: ["remove", "delete"],
          description: "Removes a previously installed tsuru plugin",
          args: { name: "plugin-name" },
        },
      ],
    },
    {
      name: "pool",
      description:
        "A pool is used by provisioners to allocate space within a cluster for running applications",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds a new pool",
          args: { name: "pool" },
          options: [
            {
              name: ["-p", "--public"],
              description: "Make pool public (all teams can use it)",
            },
            {
              name: ["-d", "--default"],
              description:
                "Make pool default (used when none is specified on app creation)",
            },
            {
              name: ["-f", "--force"],
              description: "Force overwrite default pool",
            },
            {
              name: "--provisioner",
              description:
                "Provisioner associated to the pool (empty for default docker provisioner)",
              args: { name: "provisioner" },
            },
            {
              name: "--labels",
              description:
                "Kubernetes label (key=value) of the pool, can be used to define a podAffinity rule",
              args: { name: "key=value" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "constraint",
          description:
            "Pool constraints are rules that define which kind of resources can be associated with a pool",
          subcommands: [
            {
              name: "list",
              description: "List pool constraints",
            },
            {
              name: "set",
              description: "Set a constraint on a pool expression",
              args: [
                { name: "pool-expression" },
                {
                  name: "field",
                  suggestions: [
                    "team",
                    "router",
                    "service",
                    "plan",
                    "volume-plan",
                    "cert-issuer",
                  ],
                },
                { name: "values", isOptional: true, isVariadic: true },
              ],
              options: [
                {
                  name: ["-a", "--append"],
                  description: "Append to existing constraint",
                },
                { name: "--denylist", description: "Denylist constraint" },
              ],
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific pool",
          args: { name: "pool", generators: tsuruGenerators.pools },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "List all pools available for deploy",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter pools by name",
              args: { name: "name" },
            },
            {
              name: ["-t", "--team"],
              description: "Filter pools by team",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Remove an existing pool",
          args: { name: "pool", generators: tsuruGenerators.pools },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "update",
          description: "Updates attributes for a pool",
          args: { name: "pool", generators: tsuruGenerators.pools },
          options: [
            {
              name: "--public",
              description: "Make pool public (all teams can use it)",
              args: { name: "public", suggestions: ["true", "false"] },
            },
            {
              name: "--default",
              description:
                "Make pool default (used when none is specified on app creation)",
              args: { name: "default", suggestions: ["true", "false"] },
            },
            {
              name: ["-f", "--force"],
              description: "Force pool to be default",
            },
            {
              name: "--add-labels",
              description:
                "Group of key/value pairs that specify a kubernetes object label, this option adds the specified labels to the pool",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--remove-labels",
              description:
                "Group of keys from a kubernetes object label, this option removes the specified labels from the pool",
              args: { name: "remove-labels" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "provisioner",
      description: "Manage provisioners",
      subcommands: [
        {
          name: ["info", "describe"],
          description: "Detailed information about provisioner",
          args: { name: "provisioner-name" },
        },
        {
          name: "list",
          description: "List registered provisioners and their cluster options",
        },
      ],
    },
    {
      name: "reset-password",
      description: "Resets the user password",
      args: { name: "email" },
      options: [
        {
          name: ["-t", "--token"],
          description: "Token to reset the password",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "restart",
      description:
        "Restarts an application, or one of the processes of the application",
      hidden: true,
      args: {
        name: "appname",
        isOptional: true,
        generators: tsuruGenerators.apps,
      },
      options: [tsuruOptions.app, tsuruOptions.process, tsuruOptions.version],
    },
    {
      name: "role",
      description: "Manage roles",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Create a new role for the specified context type",
          args: [
            { name: "role-name" },
            {
              name: "context-type",
              suggestions: [
                "global",
                "app",
                "job",
                "team",
                "user",
                "pool",
                "service",
                "service-instance",
                "volume",
                "router",
              ],
            },
          ],
          options: [
            {
              name: ["-d", "--description"],
              description: "Role description",
              args: { name: "description" },
            },
          ],
        },
        {
          name: ["assign", "bind", "set"],
          description:
            "Assign an existing role to a user, token or group with some context value",
          args: [
            { name: "role-name" },
            {
              name: "assignee",
              description: "User email, token id or group:<group-id>",
            },
            {
              name: "context-value",
              description:
                "Value of the role context, such as a team or app name",
              isOptional: true,
            },
          ],
        },
        {
          name: "default",
          description: "Manage default roles assigned to users upon creation",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Add a new default role on a specific event",
              options: [
                {
                  name: "--user-create",
                  description: "Role added to user when user is created",
                  args: { name: "role-name" },
                  isRepeatable: true,
                },
                {
                  name: "--team-create",
                  description: "Role added to user when a new team is created",
                  args: { name: "role-name" },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "list",
              description: "List all roles set as default on any event",
            },
            {
              name: ["remove", "delete"],
              description: "Remove a default role from a specific event",
              options: [
                {
                  name: "--user-create",
                  description: "Role added to user when user is created",
                  args: { name: "role-name" },
                  isRepeatable: true,
                },
                {
                  name: "--team-create",
                  description: "Role added to user when a new team is created",
                  args: { name: "role-name" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
        {
          name: ["dissociate", "unbind", "unset"],
          description:
            "Dissociate an existing role from a user, token or group for some context value",
          args: [
            { name: "role-name" },
            {
              name: "assignee",
              description: "User email, token id or group:<group-id>",
            },
            {
              name: "context-value",
              description:
                "Value of the role context, such as a team or app name",
              isOptional: true,
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Get information about specific role",
          args: { name: "role-name" },
        },
        {
          name: "list",
          description: "List all existing roles",
        },
        {
          name: "permission",
          description: "Manage permissions associated with each role",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Add a new permission to an existing role",
              args: [
                { name: "role-name" },
                { name: "permission-name", isVariadic: true },
              ],
            },
            {
              name: ["remove", "delete"],
              description: "Remove a permission from an existing role",
              args: [{ name: "role-name" }, { name: "permission-name" }],
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Remove an existing role",
          args: { name: "role-name" },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "update",
          description: "Updates a role description",
          args: { name: "role" },
          options: [
            {
              name: ["-d", "--description"],
              description: "Updates a role description",
              args: { name: "description" },
            },
            {
              name: ["-c", "--context"],
              description: "Updates the context type of a role",
              args: { name: "context" },
            },
            {
              name: ["-n", "--name"],
              description: "Updates the name of a role",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "rollback",
      description: "Deploys an existing image for an app",
      args: { name: "image-name" },
      options: [
        tsuruOptions.app,
        tsuruOptions.assumeYes,
        tsuruOptions.newVersion,
        tsuruOptions.overrideOldVersions,
      ],
    },
    {
      name: "router",
      description:
        "A router is a component responsible for routing user traffic to applications",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds a new dynamic router to tsuru",
          args: [{ name: "name" }, { name: "type" }],
          options: [
            {
              name: "--config",
              description: "JSON object with router configuration",
              args: { name: "config" },
            },
            {
              name: "--readiness-gate",
              description:
                "Readiness gates added to pods accessed by this router",
              args: { name: "readiness-gate" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Show detailed information for router",
          args: { name: "name", generators: tsuruGenerators.routers },
        },
        {
          name: "list",
          description: "List all routers available for app creation",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter routers by name",
              args: { name: "name" },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes an existing dynamic router",
          args: { name: "name", generators: tsuruGenerators.routers },
        },
        {
          name: "update",
          description: "Updates an existing dynamic router",
          args: [{ name: "name" }, { name: "type" }],
          options: [
            {
              name: "--config",
              description: "JSON object with router configuration",
              args: { name: "config" },
            },
            {
              name: "--readiness-gate",
              description:
                "Readiness gates added to pods accessed by this router",
              args: { name: "readiness-gate" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description:
        "A service is a well-defined API that tsuru communicates with to provide extra functionality for applications",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Creates a service based on a manifest file",
          args: { name: "manifest", isOptional: true, template: "filepaths" },
        },
        {
          name: ["destroy", "remove", "delete"],
          description: "Removes a service from the catalog",
          args: { name: "service-name", generators: tsuruGenerators.services },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "doc",
          description: "Manage Service Docs",
          subcommands: [
            {
              name: ["add", "create"],
              description:
                "Update service documentation, extracting it from the given file",
              args: [
                { name: "service", generators: tsuruGenerators.services },
                { name: "doc-file", template: "filepaths" },
              ],
            },
            {
              name: "get",
              description: "Shows service documentation",
              args: { name: "service", generators: tsuruGenerators.services },
            },
          ],
        },
        {
          name: ["info", "describe"],
          description:
            "Displays the instances of a service and the apps bound to them",
          args: { name: "service-name", generators: tsuruGenerators.services },
          options: [
            {
              name: ["-p", "--pool"],
              description:
                "The pool used to fetch details (could be required if the service is a multi-cluster offering)",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
          ],
        },
        {
          name: "instance",
          description:
            "Manage provisioned resources (like a database or proxy) that can be linked to an application",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Creates a service instance of a service",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
                { name: "plan", isOptional: true },
              ],
              options: [
                {
                  name: "--team-owner",
                  description:
                    "The team that owns the service instance (mandatory if the user is member of more than one team)",
                  hidden: true,
                  args: { name: "team-owner" },
                },
                {
                  name: ["-t", "--team"],
                  description:
                    "The team that owns the service instance (mandatory if the user is member of more than one team)",
                  args: { name: "team", generators: tsuruGenerators.teams },
                },
                {
                  name: ["-d", "--description"],
                  description: "Service instance description",
                  args: { name: "description" },
                },
                {
                  name: ["-g", "--tag"],
                  description: "Service instance tag",
                  args: { name: "tag" },
                  isRepeatable: true,
                },
                {
                  name: "--plan-param",
                  description: "Plan specific parameters",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
                {
                  name: "--pool",
                  description:
                    "Pool name where this service instance is going to run into (valid only for multi-cluster service)",
                  args: { name: "pool", generators: tsuruGenerators.pools },
                },
              ],
            },
            {
              name: "bind",
              description:
                "Binds an application or job to a previously created service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
              ],
              options: [
                tsuruOptions.app,
                tsuruOptions.job,
                tsuruOptions.noRestart,
              ],
            },
            {
              name: "grant",
              description: "Grant access to team in a service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
                { name: "team-name", generators: tsuruGenerators.teams },
              ],
            },
            {
              name: ["info", "describe"],
              description:
                "Displays the information of the given service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
              ],
              options: [tsuruOptions.json],
            },
            {
              name: ["remove", "delete"],
              description: "Destroys a service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
              ],
              options: [
                tsuruOptions.assumeYes,
                {
                  name: ["-f", "--force"],
                  description:
                    "Forces the removal of a service instance binded to apps",
                },
                {
                  name: "--ignore-errors",
                  description: "Ignore errors returned by service backend",
                },
              ],
            },
            {
              name: "revoke",
              description: "Revoke access to team in a service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
                { name: "team-name", generators: tsuruGenerators.teams },
              ],
            },
            {
              name: "unbind",
              description:
                "Unbinds an application or job from a service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
              ],
              options: [
                tsuruOptions.app,
                tsuruOptions.job,
                tsuruOptions.noRestart,
                {
                  name: "--force",
                  description:
                    "Forces the unbind even if the unbind API call to the service fails",
                },
              ],
            },
            {
              name: "update",
              description: "Updates a service instance",
              args: [
                { name: "service-name", generators: tsuruGenerators.services },
                { name: "instance-name" },
              ],
              options: [
                {
                  name: "--team-owner",
                  description: "Service instance team owner",
                  hidden: true,
                  args: { name: "team-owner" },
                },
                {
                  name: ["-t", "--team"],
                  description: "Service instance team owner",
                  args: { name: "team", generators: tsuruGenerators.teams },
                },
                {
                  name: ["-d", "--description"],
                  description: "Service instance description",
                  args: { name: "description" },
                },
                {
                  name: ["-p", "--plan"],
                  description: "Service instance plan",
                  args: { name: "plan" },
                },
                {
                  name: ["-g", "--tag"],
                  description: "Service instance tag",
                  args: { name: "tag" },
                  isRepeatable: true,
                },
                {
                  name: "--remove-tag",
                  description: "Tag to be removed from instance tags",
                  args: { name: "remove-tag" },
                  isRepeatable: true,
                },
                {
                  name: "--plan-param",
                  description:
                    "Parameter to be added/updated in instance parameters",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
                {
                  name: "--add-param",
                  description:
                    "Parameter to be added/updated in instance parameters",
                  args: { name: "key=value" },
                  isRepeatable: true,
                },
                {
                  name: "--remove-param",
                  description:
                    "Parameter key to be removed from instance parameters",
                  args: { name: "remove-param" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "Lists the service instances the user has access to",
          options: [
            {
              name: ["-s", "--service"],
              description: "Filter instances by service",
              args: { name: "service", generators: tsuruGenerators.services },
            },
            {
              name: ["-n", "--name"],
              description: "Filter service instances by name",
              args: { name: "name" },
            },
            {
              name: ["-o", "--pool"],
              description: "Filter service instances by pool",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-p", "--plan"],
              description: "Filter service instances by plan",
              args: { name: "plan" },
            },
            {
              name: ["-t", "--team"],
              description: "Filter service instances by team owner",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
            {
              name: ["-j", "--just-services"],
              description: "Display just service names",
            },
            {
              name: ["-g", "--tag"],
              description: "Filter services by tag",
              args: { name: "tag" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "manifest",
          description: "Manage service permissions manifests",
          subcommands: [
            {
              name: "get",
              description: "Shows the stored service permissions manifest",
              args: { name: "service", generators: tsuruGenerators.services },
              options: [
                tsuruOptions.json,
                { name: "--yaml", description: "Show YAML" },
                {
                  name: ["-o", "--output"],
                  description: "Write the manifest to a file",
                  args: { name: "output", template: "filepaths" },
                },
              ],
            },
            {
              name: "set",
              description:
                "Replaces the stored service permissions manifest with a JSON or YAML file",
              args: [
                { name: "service", generators: tsuruGenerators.services },
                { name: "filename", template: "filepaths" },
              ],
            },
          ],
        },
        {
          name: "plan",
          description: "Manage service plans of a given service",
          subcommands: [
            {
              name: "list",
              description: "Displays a list of all plans of a given service",
              args: {
                name: "service-name",
                generators: tsuruGenerators.services,
              },
              options: [
                {
                  name: ["-p", "--pool"],
                  description:
                    "The pool used to fetch details (could be required if the service is a multi-cluster offering)",
                  args: { name: "pool", generators: tsuruGenerators.pools },
                },
              ],
            },
          ],
        },
        {
          name: "template",
          description:
            "Generates a manifest template file and places it in current directory",
        },
        {
          name: "update",
          description:
            "Update service data, extracting it from the given manifest file",
          args: { name: "manifest", template: "filepaths" },
        },
      ],
    },
    {
      name: "shell",
      description: "Opens a remote shell inside a unit of the application",
      args: { name: "unit-id", isOptional: true },
      options: [
        tsuruOptions.app,
        { name: ["-i", "--isolated"], description: "Run shell in a new unit" },
        { name: ["-d", "--debug"], description: "Enable debug mode" },
      ],
    },
    {
      name: "start",
      description:
        "Starts an application, or one of the processes of the application",
      hidden: true,
      args: {
        name: "appname",
        isOptional: true,
        generators: tsuruGenerators.apps,
      },
      options: [tsuruOptions.app, tsuruOptions.process, tsuruOptions.version],
    },
    {
      name: "stop",
      description:
        "Stops an application, or one of the processes of the application",
      hidden: true,
      args: {
        name: "appname",
        isOptional: true,
        generators: tsuruGenerators.apps,
      },
      options: [tsuruOptions.app, tsuruOptions.process, tsuruOptions.version],
    },
    {
      name: "tag",
      description:
        "Tags are labels that can be assigned to applications and service instances to help organize and manage them effectively",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves and shows a list of tags with the respective apps and service instances",
        },
      ],
    },
    {
      name: "target",
      description: "Manage the address of the remote tsuru server",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds a new entry to the list of available targets",
          args: [{ name: "label" }, { name: "target" }],
          options: [
            {
              name: ["-s", "--set-current"],
              description: "Add and define the target as the current target",
            },
          ],
        },
        {
          name: "list",
          description: "Displays the list of targets, marking the current one",
        },
        {
          name: ["remove", "delete"],
          description: "Removes a target from the list of targets",
          args: { name: "label" },
        },
        {
          name: "set",
          description: "Changes the current target (tsuru server)",
          args: { name: "label" },
        },
        {
          name: "update",
          description:
            "Updates an existing entry in the list of available targets",
          args: [{ name: "label" }, { name: "target" }],
          options: [
            {
              name: ["-s", "--set-current"],
              description: "Add and define the target as the current target",
            },
          ],
        },
      ],
    },
    {
      name: "team",
      description: "Manage teams",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a team for the user",
          args: { name: "team-name" },
          options: [
            {
              name: ["-t", "--tag"],
              description: "Sets tags to the team",
              args: { name: "tag" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific team",
          args: { name: "team", generators: tsuruGenerators.teams },
        },
        {
          name: "list",
          description: "List all teams that you are member",
          options: [tsuruOptions.onlyName],
        },
        {
          name: "quota",
          description:
            "Quotas are used to safeguard the cluster against undesired or excessive scaling",
          subcommands: [
            {
              name: ["change", "update", "set"],
              description: "Changes the limit of apps that a team can create",
              args: [
                { name: "team-name", generators: tsuruGenerators.teams },
                {
                  name: "new-limit",
                  description: "New limit, an integer or unlimited",
                },
              ],
            },
            {
              name: "view",
              description: "Displays the current usage and limit of the team",
              args: { name: "team-name", generators: tsuruGenerators.teams },
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes a team from tsuru server",
          args: { name: "team-name", generators: tsuruGenerators.teams },
          options: [tsuruOptions.assumeYes],
        },
        {
          name: "update",
          description: "Updates a team",
          args: { name: "team-name", generators: tsuruGenerators.teams },
          options: [
            {
              name: ["-n", "--name"],
              description: "New team name",
              args: { name: "name" },
            },
            {
              name: ["-t", "--tag"],
              description: "New team tags",
              args: { name: "tag" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "token",
      description:
        "Manage team tokens used to authenticate automations through Tsuru",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Creates a new API token associated to a team",
          options: [
            {
              name: ["-d", "--description"],
              description: "A description on how the token will be used",
              args: { name: "description" },
            },
            {
              name: ["-i", "--id"],
              description: "A unique identifier for the token being created",
              args: { name: "id" },
            },
            {
              name: ["-t", "--team"],
              description: "The team name responsible for this token",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-e", "--expires"],
              description:
                "Token lifetime as a duration with a unit suffix such as 720h, 0 means it never expires",
              args: { name: "duration" },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete an existing token",
          args: { name: "token-id" },
        },
        {
          name: ["info", "describe"],
          description: "Shows information about a specific token",
          args: { name: "token-id" },
        },
        {
          name: "list",
          description: "List existing API tokens associated with a team",
        },
        {
          name: "regenerate",
          description: "Generates a new API token associated to the user",
          options: [
            {
              name: ["-u", "--user"],
              description: "Generates a new API token for the given user email",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows API token for the user",
          options: [
            {
              name: ["-u", "--user"],
              description: "Shows API token for the given user email",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "update",
          description: "Updates an API token associated to a team",
          args: { name: "token-id" },
          options: [
            {
              name: ["-d", "--description"],
              description: "A description on how the token will be used",
              args: { name: "description" },
            },
            {
              name: "--regenerate",
              description:
                "Setting regenerate will change de value of the token, invalidating the previous value",
            },
            {
              name: ["-e", "--expires"],
              description:
                "New token lifetime as a duration with a unit suffix such as 720h, a negative value removes the expiration",
              args: { name: "duration" },
            },
          ],
        },
      ],
    },
    {
      name: "unit",
      description: "A unit is a container",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Adds new units to a process of an application",
          args: { name: "units", description: "Number of units" },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
        {
          name: "autoscale",
          description: "Manage autoscaling of application units",
          subcommands: [
            {
              name: "set",
              description: 'Deprecated, use "tsuru autoscale set" instead',
              deprecated: true,
              options: [
                tsuruOptions.app,
                tsuruOptions.process,
                {
                  name: "--cpu",
                  description:
                    "Target CPU value in percent of app cpu plan, such as 50%",
                  args: { name: "cpu" },
                },
                {
                  name: "--min",
                  description: "Minimum Units",
                  args: { name: "min" },
                },
                {
                  name: "--max",
                  description: "Maximum Units",
                  args: { name: "max" },
                },
                {
                  name: "--schedule",
                  description:
                    "Schedule window to up/down scale, as JSON (minReplicas, start, end)",
                  args: { name: "schedule" },
                  isRepeatable: true,
                },
                {
                  name: "--prometheus",
                  description:
                    "Prometheus settings to up/down scale, as JSON (name, threshold, query)",
                  args: { name: "prometheus" },
                  isRepeatable: true,
                },
                {
                  name: "--scale-down-percentage",
                  description:
                    "Percentage of units to downscale when the metric is below the threshold",
                  args: { name: "scale-down-percentage" },
                },
                {
                  name: "--scale-down-stabilization-window",
                  description:
                    "Stabilization window in seconds to avoid scale down",
                  args: { name: "scale-down-stabilization-window" },
                },
                {
                  name: "--scale-down-units",
                  description:
                    "Number of units to downscale when the metric is below the threshold",
                  args: { name: "scale-down-units" },
                },
                {
                  name: "--sdp",
                  description:
                    "Shorthand: Percentage of units to downscale when the metric is below the threshold",
                  args: { name: "sdp" },
                },
                {
                  name: "--sdsw",
                  description:
                    "Shorthand: Stabilization window in seconds to avoid scale down",
                  args: { name: "sdsw" },
                },
                {
                  name: "--sdu",
                  description:
                    "Shorthand: Number of units to downscale when the metric is below the threshold",
                  args: { name: "sdu" },
                },
              ],
            },
            {
              name: "swap",
              description: 'Deprecated, use "tsuru autoscale swap" instead',
              deprecated: true,
              options: [tsuruOptions.app, tsuruOptions.version],
            },
            {
              name: "unset",
              description: 'Deprecated, use "tsuru autoscale unset" instead',
              deprecated: true,
              options: [tsuruOptions.app, tsuruOptions.process],
            },
          ],
        },
        {
          name: "kill",
          description: "Kills units from a process of an application or job",
          args: { name: "unit" },
          options: [
            tsuruOptions.app,
            tsuruOptions.job,
            {
              name: ["-f", "--force"],
              description: "Forces the termination of unit",
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description: "Removes units from a process of an application",
          args: { name: "units", description: "Number of units" },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
        {
          name: "set",
          description:
            "Set the number of units for a process of an application, adding or removing units as needed",
          args: { name: "units", description: "Number of units" },
          options: [
            tsuruOptions.app,
            tsuruOptions.process,
            tsuruOptions.version,
          ],
        },
      ],
    },
    {
      name: "user",
      description:
        "A user is an individual who has access to the tsuru platform",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Creates a user within tsuru remote server",
          args: { name: "email" },
        },
        {
          name: ["info", "describe"],
          description: "Displays information about the current user",
        },
        {
          name: "list",
          description: "List all users in tsuru",
          options: [
            {
              name: ["-u", "--user"],
              description: "Filter user by user email",
              args: { name: "user" },
            },
            {
              name: ["-r", "--role"],
              description: "Filter user by role",
              args: { name: "role" },
            },
            {
              name: ["-c", "--context-value"],
              description: "Filter user by role context value",
              args: { name: "context-value" },
            },
          ],
        },
        {
          name: "quota",
          description:
            "Quotas are used to safeguard the cluster against undesired or excessive scaling",
          subcommands: [
            {
              name: ["change", "update", "set"],
              description: "Changes the limit of apps that a user can create",
              args: [
                { name: "user-email" },
                {
                  name: "new-limit",
                  description: "New limit, an integer or unlimited",
                },
              ],
            },
            {
              name: "view",
              description: "Displays the current usage and limit of the user",
              args: { name: "user-email" },
            },
          ],
        },
        {
          name: ["remove", "delete"],
          description:
            "Remove currently authenticated user from remote tsuru server",
          args: { name: "email", isOptional: true },
        },
      ],
    },
    {
      name: "version",
      description: "Displays the client and server versions",
      hidden: true,
    },
    {
      name: "volume",
      description:
        "Volumes allow applications running on tsuru to use external storage volumes mounted on their filesystem",
      subcommands: [
        {
          name: "bind",
          description: "Binds an existing volume to an application",
          args: [
            { name: "volume-name", generators: tsuruGenerators.volumes },
            { name: "mount-point" },
          ],
          options: [
            tsuruOptions.app,
            {
              name: ["-r", "--readonly"],
              description: "The volume will be available only for reading",
            },
            tsuruOptions.noRestart,
          ],
        },
        {
          name: ["create", "add"],
          description: "Creates a new persistent volume based on a volume plan",
          args: [{ name: "volume-name" }, { name: "plan-name" }],
          options: [
            {
              name: ["-p", "--pool"],
              description:
                "The pool that owns the volume (mandatory if the user has access to more than one pool)",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-t", "--team"],
              description:
                "The team that owns the volume (mandatory if the user has access to more than one team)",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-o", "--opt"],
              description: "Backend specific volume options",
              args: { name: "key=value" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete an existing persistent volume",
          args: { name: "volume-name", generators: tsuruGenerators.volumes },
        },
        {
          name: ["info", "describe"],
          description: "Get a volume",
          args: { name: "volume", generators: tsuruGenerators.volumes },
          options: [tsuruOptions.json],
        },
        {
          name: "list",
          description: "Lists existing persistent volumes",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter volumes by name",
              args: { name: "name" },
            },
            {
              name: ["-o", "--pool"],
              description: "Filter volumes by pool",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-p", "--plan"],
              description: "Filter volumes by plan",
              args: { name: "plan" },
            },
            {
              name: ["-t", "--team"],
              description: "Filter volumes by team owner",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            tsuruOptions.onlyName,
            tsuruOptions.json,
          ],
        },
        {
          name: "plan",
          description: "Manage volume plans",
          subcommands: [
            {
              name: "list",
              description: "Lists existing volume plans",
            },
          ],
        },
        {
          name: "unbind",
          description: "Unbinds a volume from an application",
          args: [
            { name: "volume-name", generators: tsuruGenerators.volumes },
            { name: "mount-point" },
          ],
          options: [tsuruOptions.app, tsuruOptions.noRestart],
        },
        {
          name: "update",
          description: "Update an existing persistent volume",
          args: [
            { name: "volume-name", generators: tsuruGenerators.volumes },
            { name: "plan-name" },
          ],
          options: [
            {
              name: ["-p", "--pool"],
              description:
                "The pool that owns the volume (mandatory if the user has access to more than one pool)",
              args: { name: "pool", generators: tsuruGenerators.pools },
            },
            {
              name: ["-t", "--team"],
              description:
                "The team that owns the volume (mandatory if the user has access to more than one team)",
              args: { name: "team", generators: tsuruGenerators.teams },
            },
            {
              name: ["-o", "--opt"],
              description: "Backend specific volume options",
              args: { name: "key=value" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: "--target",
      description: "Tsuru server endpoint",
      isPersistent: true,
      args: {
        name: "target",
      },
    },
    {
      name: "--verbosity",
      description:
        "Verbosity level: 1 prints HTTP requests, 2 prints HTTP requests and responses",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help for tsuru",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
