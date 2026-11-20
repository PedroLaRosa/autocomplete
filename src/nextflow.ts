// Nextflow v26.10.6 (GitHub release, 2026-11-12). Source: JCommander parsers in modules/nf-cli-v1 and docs/reference/cli at tag v26.10.6
const sessionid: Fig.Generator = {
  script: ["bash", "-c", "cat .nextflow/history | awk '{ print $7 }'"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((sessionid) => {
      return {
        name: sessionid.replace("*", "").trim(),
        description: "Session ID",
      };
    });
  },
};

const runname: Fig.Generator = {
  script: ["bash", "-c", "cat .nextflow/history | awk '{ print $4 }'"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((runname) => {
      return { name: runname.replace("*", "").trim(), description: "Run name" };
    });
  },
};

const projectname: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `{ find * -maxdepth 0 -type f -name '*.nf' 2> /dev/null && find $HOME/.nextflow/assets/* -maxdepth 1 -type d | cut -d/ -f6,7 | grep / | grep -v assets; } 2> /dev/null`,
  ],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((projectname) => {
      return {
        name: projectname.replace("*", "").trim(),
        description: "Project name",
      };
    });
  },
};

const dockerimage: Fig.Generator = {
  script: ["bash", "-c", "docker images | cut -w -f 1 | grep -v REPOSITORY"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((dockerimage) => {
      return {
        name: dockerimage.replace("*", "").trim(),
        description: "Docker image",
      };
    });
  },
};

const secretname: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `grep -o '"name": *"[^"]*"' $HOME/.nextflow/secrets/store.json | grep -o '"[^"]*"$' | tr -d \\"`,
  ],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((secretname) => {
      return {
        name: secretname.replace("*", "").trim(),
        description: "Secret name",
      };
    });
  },
};

const help: Fig.Option = {
  name: ["-h", "-help"],
  description: "Print the command usage",
};

const revision: Fig.Option = {
  name: ["-r", "-revision"],
  description:
    "Revision of the project (either a git branch, tag or commit SHA number)",
  args: {
    name: "revision",
  },
};

const deep: Fig.Option = {
  name: ["-d", "-deep"],
  description: "Create a shallow clone of the specified depth",
  args: {
    name: "depth",
  },
};

const deprecatedDeep: Fig.Option = {
  ...deep,
  deprecated: {
    description: "Ignored by the multi-revision asset management strategy",
  },
};

const hubOptions: Fig.Option[] = [
  {
    name: "-hub",
    description: "Service hub where the project is hosted (Default: github)",
    args: {
      name: "service hub",
      suggestions: ["github", "gitlab", "bitbucket"],
    },
  },
  {
    name: "-user",
    description: "Private repository user name",
    args: {
      name: "username",
    },
  },
];

const profile: Fig.Option = {
  name: "-profile",
  description: "Choose a configuration profile",
  args: {
    name: "profile",
  },
};

const paramsFile: Fig.Option = {
  name: "-params-file",
  description: "Load script parameters from a JSON/YAML file",
  args: {
    name: "JSON/YAML file",
    template: ["filepaths"],
  },
};

const entry: Fig.Option = {
  name: "-entry",
  description: "Entry workflow name to be executed",
  deprecated: {
    description: "Use params in the entry workflow to select what to run",
  },
  args: {
    name: "entry workflow name",
  },
};

const latest: Fig.Option = {
  name: "-latest",
  description: "Pull latest changes before run (Default: false)",
};

const mainScript: Fig.Option = {
  name: "-main-script",
  description:
    "The script file to be executed when launching a project directory or repository",
  args: {
    name: "script file",
  },
};

const stubRun: Fig.Option = {
  name: ["-stub-run", "-stub"],
  description:
    "Execute the workflow replacing process scripts with command stubs (Default: false)",
};

const workDir: Fig.Option = {
  name: ["-w", "-work-dir"],
  description: "Directory where intermediate result files are stored",
  args: {
    name: "work dir",
    template: ["folders"],
  },
};

const booleanArg: Fig.Arg = {
  name: "true|false",
  suggestions: ["true", "false"],
};

const runOptions: Fig.Option[] = [
  {
    name: "-E",
    description: "Exports all current system environment (Default: false)",
  },
  {
    name: "-ansi-log",
    description: "Enable/disable ANSI console logging",
    args: booleanArg,
  },
  {
    name: "-bucket-dir",
    description: "Remote bucket where intermediate result files are stored",
    args: {
      name: "remote bucket",
    },
  },
  {
    name: "-cache",
    description: "Enable/disable processes caching",
    args: booleanArg,
  },
  deprecatedDeep,
  {
    name: "-disable-jobs-cancellation",
    description:
      "Prevent the cancellation of child jobs on execution termination",
  },
  {
    name: "-dump-channels",
    description: "Dump channels for debugging purpose",
    args: {
      name: "channel tags",
      isOptional: true,
    },
  },
  {
    name: "-dump-hashes",
    description: "Dump task hash keys for debugging purpose (Default: false)",
    args: {
      name: "format",
      isOptional: true,
      suggestions: ["json"],
    },
  },
  {
    name: "-e",
    description:
      "Add the specified variable to execution environment. Syntax: -e.key=value (Default: {})",
    requiresSeparator: ".",
    args: {
      name: "key=value",
    },
  },
  entry,
  help,
  ...hubOptions,
  latest,
  {
    name: "-lib",
    description: "Library extension path",
    args: {
      name: "library extension path",
    },
  },
  mainScript,
  {
    name: "-name",
    description: "Assign a mnemonic name to the a pipeline run",
    args: {
      name: "name",
    },
  },
  {
    name: "-offline",
    description: "Do not check for remote project updates (Default: false)",
  },
  {
    name: ["-o", "-output-dir"],
    description: "Directory where workflow outputs are stored",
    args: {
      name: "output dir",
      template: ["folders"],
    },
  },
  {
    name: "-output-format",
    description: "Output format for printing workflow outputs",
    args: {
      name: "format",
      suggestions: ["text", "json", "none"],
    },
  },
  paramsFile,
  {
    name: "-plugins",
    description:
      "Specify the plugins to be applied for this run e.g. nf-amazon,nf-tower",
    args: {
      name: "plugins ids separated by comma",
    },
  },
  {
    name: "-preview",
    description:
      "Run the workflow script skipping the execution of all processes",
  },
  {
    name: "-process",
    description: "Set process options. Syntax: -process.key=value (Default: {}",
    requiresSeparator: ".",
    args: {
      name: "key=value",
    },
  },
  profile,
  {
    name: ["-qs", "-queue-size"],
    description:
      "Max number of processes that can be executed in parallel by each executor",
    args: {
      name: "number",
    },
  },
  {
    name: "-resume",
    description:
      "Execute the script using the cached results, useful to continue executions that was stopped by an error",
    args: {
      name: "session ID",
      isOptional: true,
      generators: sessionid,
    },
  },
  revision,
  stubRun,
  {
    name: "-test",
    description: "Test a script function with the name specified",
    args: {
      name: "name",
      isOptional: true,
    },
  },
  {
    name: "-with-agent-trace",
    description:
      "Log a readable trace of agent execution: turns, model reasoning and tool invocations",
  },
  {
    name: "-with-apptainer",
    description: "Enable process execution in an Apptainer container",
    args: {
      name: "container image",
      isOptional: true,
    },
  },
  {
    name: "-with-charliecloud",
    description: "Enable process execution in a Charliecloud container runtime",
    args: {
      name: "container image",
      isOptional: true,
    },
  },
  {
    name: "-with-cloudcache",
    description:
      "Enable the use of object storage bucket as storage for cache meta-data",
    args: {
      name: "bucket path",
      isOptional: true,
    },
  },
  {
    name: "-with-conda",
    description:
      "Use the specified Conda environment package or file (must end with .yml|.yaml suffix)",
    args: {
      name: "conda .yml/.yaml file",
      isOptional: true,
    },
  },
  {
    name: "-with-dag",
    description: "Create pipeline DAG file",
    args: {
      name: "filename, e.g. dag.html",
      isOptional: true,
    },
  },
  {
    name: "-with-docker",
    description: "Enable process execution in a Docker container",
    args: {
      name: "a docker container image",
      isOptional: true,
      generators: dockerimage,
    },
  },
  {
    name: ["-N", "-with-notification"],
    description:
      "Send a notification email on workflow completion to the specified recipients",
    args: {
      name: "email",
      isOptional: true,
    },
  },
  {
    name: "-with-podman",
    description: "Enable process execution in a Podman container",
    args: {
      name: "container image",
      isOptional: true,
    },
  },
  {
    name: "-with-report",
    description: "Create processes execution html report",
    args: {
      name: "report filename e.g. report.html",
      isOptional: true,
    },
  },
  {
    name: "-with-singularity",
    description: "Enable process execution in a Singularity container",
    args: {
      name: "container image",
      isOptional: true,
    },
  },
  {
    name: "-with-spack",
    description:
      "Use the specified Spack environment package or file (must end with .yaml suffix)",
    args: {
      name: "spack .yaml file",
      isOptional: true,
    },
  },
  {
    name: "-with-timeline",
    description: "Create processes execution timeline file",
    args: {
      name: "timeline filename e.g. timeline.html",
      isOptional: true,
    },
  },
  {
    name: "-with-tower",
    description:
      "Monitor workflow execution with Seqera Platform (formerly Tower Cloud)",
    args: {
      name: "endpoint URL",
      isOptional: true,
    },
  },
  {
    name: "-with-trace",
    description: "Create processes execution tracing file",
    args: {
      name: "trace text filename e.g. trace.txt",
      isOptional: true,
    },
  },
  {
    name: "-with-wave",
    description: "Use Wave containers",
    args: {
      name: "endpoint URL",
      isOptional: true,
    },
  },
  {
    name: "-with-weblog",
    description: "Send workflow status messages via HTTP to target URL",
    deprecated: {
      description: "Use the nf-weblog plugin instead",
    },
    args: {
      name: "target web URL",
      isOptional: true,
    },
  },
  {
    name: "-without-docker",
    description: "Disable process execution with Docker (Default: false)",
    hidden: true,
  },
  {
    name: "-without-podman",
    description: "Disable process execution in a Podman container",
    hidden: true,
  },
  workDir,
];

const lidArg: Fig.Arg = {
  name: "lid",
};

const moduleVersion: Fig.Option = {
  name: "-version",
  description: "Module version (Default: latest)",
  args: {
    name: "version",
  },
};

const moduleSchema: Fig.Option = {
  name: "-schema",
  description: "URL or local path of the JSON schema used to validate meta.yml",
  args: {
    name: "schema",
    template: ["filepaths"],
  },
};

const outputMode = (modes: string[]): Fig.Option => ({
  name: ["-o", "-output"],
  description: `Output mode (Default: ${modes[0]})`,
  args: {
    name: "mode",
    suggestions: modes,
  },
});

const completionSpec: Fig.Spec = {
  name: "nextflow",
  description:
    "Nextflow enables scalable and reproducible scientific workflows using software containers. It allows the adaptation of pipelines written in the most common scripting languages",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionArgSeparators: ["=", "."],
  },
  subcommands: [
    {
      name: "auth",
      description: "Manage Seqera Platform authentication",
      options: [help],
      subcommands: [
        {
          name: "login",
          description:
            "Authenticate with Seqera and save credentials to ~/.nextflow/seqera-auth.config",
          options: [
            {
              name: ["-u", "-url"],
              description:
                "Seqera Platform API endpoint (Default: https://api.cloud.seqera.io)",
              args: {
                name: "url",
              },
            },
          ],
        },
        {
          name: "logout",
          description:
            "Remove Seqera authentication and revoke the Seqera Cloud access token",
        },
        {
          name: "config",
          description:
            "Set the Seqera primary compute environment, monitoring, and workspace",
        },
        {
          name: "status",
          description:
            "Show the Seqera authentication status and configuration",
        },
      ],
    },
    {
      name: "clean",
      description:
        "Clean up project cache and work directories (Default: last run)",
      args: {
        name: "run_name|session_id",
        isOptional: true,
        generators: runname,
      },
      options: [
        {
          name: "-after",
          description: "Clean up runs executed after the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-before",
          description: "Clean up runs executed before the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-but",
          description: "Clean up all runs except the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: ["-n", "-dry-run"],
          description:
            "Print names of file to be removed without deleting them (Default: false)",
        },
        {
          name: ["-f", "-force"],
          description: "Force clean command (Default: false)",
        },
        help,
        {
          name: ["-k", "-keep-logs"],
          description:
            "Removes only temporary files but retains execution log entries and metadata (Default: false)",
        },
        {
          name: ["-q", "-quiet"],
          description: "Do not print names of files removed (Default: false)",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone a project into a folder",
      args: [
        {
          name: "namespace/repository_name",
        },
        {
          name: "target dir",
          isOptional: true,
          template: ["folders"],
        },
      ],
      options: [
        deep,
        help,
        ...hubOptions,
        {
          name: "-r",
          description:
            "Revision to clone - It can be a git branch, tag or revision number",
          args: {
            name: "revision",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Print a project configuration",
      args: {
        name: "project name or path",
        isOptional: true,
        generators: projectname,
      },
      options: [
        {
          name: "-flat",
          description: "Print config using flat notation (Default: false)",
          deprecated: {
            description: "Use `-o flat` instead",
          },
        },
        help,
        {
          name: ["-o", "-output"],
          description: "Print the config using the specified format",
          args: {
            name: "format",
            suggestions: ["canonical", "properties", "flat", "json", "yaml"],
          },
        },
        profile,
        {
          name: "-properties",
          description:
            "Prints config using Java properties notation (Default: false)",
          deprecated: {
            description: "Use `-o properties` instead",
          },
        },
        revision,
        {
          name: ["-a", "-show-profiles"],
          description: "Show all configuration profiles",
        },
        {
          name: "-sort",
          description: "Sort config attributes (Default: false)",
        },
        {
          name: "-value",
          description:
            "Print the value of a config option, or fail if the option is not defined",
          args: {
            name: "config option",
          },
        },
      ],
    },
    {
      name: "console",
      description: "Launch Nextflow interactive console",
      args: {
        name: "script",
        isOptional: true,
        template: ["filepaths"],
      },
      options: [help],
    },
    {
      name: "drop",
      description: "Delete the local copy of a project",
      args: {
        name: "name of the project to drop",
        generators: projectname,
      },
      options: [
        help,
        {
          name: "-f",
          description:
            "Delete the repository without taking care of local changes (Default: false)",
        },
        revision,
      ],
    },
    {
      name: "fs",
      description: "Perform filesystem operations on local and remote storage",
      options: [help],
      subcommands: [
        {
          name: "cat",
          description: "Print the contents of a file to standard output",
          args: {
            name: "path",
            template: ["filepaths"],
          },
        },
        {
          name: "cp",
          description: "Copy a file or directory",
          args: [
            {
              name: "source",
              template: ["filepaths", "folders"],
            },
            {
              name: "target",
              template: ["filepaths", "folders"],
            },
          ],
        },
        {
          name: "ls",
          description: "List the contents of a directory",
          args: {
            name: "path",
            template: ["folders"],
          },
        },
        {
          name: "mv",
          description: "Move a file or directory",
          args: [
            {
              name: "source",
              template: ["filepaths", "folders"],
            },
            {
              name: "target",
              template: ["filepaths", "folders"],
            },
          ],
        },
        {
          name: "rm",
          description: "Delete a file or directory",
          isDangerous: true,
          args: {
            name: "path",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "stat",
          description: "Print the attributes of a file or directory",
          args: {
            name: "path",
            template: ["filepaths", "folders"],
          },
        },
      ],
    },
    {
      name: "help",
      description: "Print the usage help for a command",
      args: {
        name: "command",
        isOptional: true,
      },
      options: [help],
    },
    {
      name: "info",
      description: "Print project and system runtime information",
      args: {
        name: "project name",
        isOptional: true,
        generators: projectname,
      },
      options: [
        {
          name: ["-u", "-check-updates"],
          description: "Check for remote updates (Default: false)",
        },
        {
          name: "-d",
          description: "Show detailed information (Default: false)",
        },
        help,
        {
          name: "-o",
          description: "Output format (Default: text)",
          args: {
            name: "format",
            suggestions: ["text", "json", "yaml"],
          },
        },
      ],
    },
    {
      name: "inspect",
      description: "Inspect process settings in a pipeline project",
      args: {
        name: "project name or repository url",
        generators: projectname,
      },
      options: [
        {
          name: "-concretize",
          description:
            "Build the container images resolved by the inspect command",
        },
        {
          name: "-format",
          description: "Inspect output format (Default: json)",
          args: {
            name: "format",
            suggestions: ["json", "config"],
          },
        },
        help,
        {
          name: ["-i", "-ignore-errors"],
          description: "Ignore errors while inspecting the pipeline",
        },
        paramsFile,
        profile,
        revision,
      ],
    },
    {
      name: "kuberun",
      description: "Execute a workflow in a Kubernetes cluster (experimental)",
      args: {
        name: "project name",
        generators: projectname,
      },
      options: [
        ...runOptions,
        {
          name: "-head-cpus",
          description:
            "Specify number of CPUs requested for the Nextflow driver pod",
          args: {
            name: "cpus",
          },
        },
        {
          name: "-head-image",
          description:
            "Specify the container image for the Nextflow driver pod",
          args: {
            name: "image",
          },
        },
        {
          name: "-head-memory",
          description:
            "Specify amount of memory requested for the Nextflow driver pod",
          args: {
            name: "memory",
          },
        },
        {
          name: "-head-prescript",
          description: "Specify script to be run before nextflow run starts",
          args: {
            name: "script",
            template: ["filepaths"],
          },
        },
        {
          name: ["-n", "-namespace"],
          description: "Specify the K8s namespace to use",
          args: {
            name: "namespace",
          },
        },
        {
          name: "-remoteConfig",
          description:
            "Add the specified file from the K8s cluster to configuration set",
          args: {
            name: "config file",
          },
        },
        {
          name: "-remoteProfile",
          description: "Choose a configuration profile in the remoteConfig",
          args: {
            name: "profile",
          },
        },
        {
          name: ["-v", "-volume-mount"],
          description: "Volume claim mounts eg. my-pvc:/mnt/path",
          isRepeatable: true,
          args: {
            name: "claim:path",
          },
        },
      ],
    },
    {
      name: "launch",
      description: "Launch a workflow in Seqera Platform",
      args: {
        name: "pipeline repository url",
        generators: projectname,
      },
      options: [
        {
          name: "-compute-env",
          description: "Compute environment name",
          args: {
            name: "compute env",
          },
        },
        {
          name: ["-c", "-config"],
          description: "Add the specified file to configuration set",
          isRepeatable: true,
          args: {
            name: "configuration file",
            template: ["filepaths"],
          },
        },
        entry,
        help,
        latest,
        mainScript,
        {
          name: "-name",
          description: "Assign a mnemonic name to the pipeline run",
          args: {
            name: "name",
          },
        },
        paramsFile,
        profile,
        {
          name: "-resume",
          description: "Execute the script using the cached results",
          args: {
            name: "session ID",
            isOptional: true,
            generators: sessionid,
          },
        },
        revision,
        stubRun,
        {
          name: "-user-secret",
          description: "Specify a user secret name to use in the pipeline",
          isRepeatable: true,
          args: {
            name: "secret name",
          },
        },
        workDir,
        {
          name: "-workspace",
          description: "Workspace name",
          args: {
            name: "workspace",
          },
        },
        {
          name: "-workspace-secret",
          description: "Specify a workspace secret name to use in the pipeline",
          isRepeatable: true,
          args: {
            name: "secret name",
          },
        },
      ],
    },
    {
      name: ["lineage", "li"],
      description: "Explore workflows lineage metadata",
      options: [help],
      subcommands: [
        {
          name: "check",
          description: "Validate the checksum of an output lineage record",
          args: lidArg,
        },
        {
          name: "diff",
          description: "Display a git-style diff between two lineage records",
          args: [lidArg, lidArg],
        },
        {
          name: "find",
          description:
            "Find all lineage records that match the given field values",
          args: {
            name: "field=value",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description:
            "List the Nextflow runs with lineage enabled and print their lineage IDs",
        },
        {
          name: "render",
          description:
            "Render the lineage graph for a lineage record as an HTML file",
          args: [
            lidArg,
            {
              name: "html output file",
              isOptional: true,
              template: ["filepaths"],
            },
          ],
        },
        {
          name: "view",
          description: "View a lineage record",
          args: lidArg,
        },
      ],
    },
    {
      name: "lint",
      description: "Lint Nextflow scripts and config files",
      args: {
        name: "paths",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: "-exclude",
          description: "File pattern to exclude from error checking",
          isRepeatable: true,
          args: {
            name: "pattern",
          },
        },
        {
          name: "-files-from",
          description:
            "Read list of paths to lint from a text file (one per line, use - for stdin)",
          args: {
            name: "file",
            template: ["filepaths"],
          },
        },
        {
          name: "-format",
          description: "Format scripts and config files that have no errors",
        },
        {
          name: "-harshil-alignment",
          description: "Use Harshil alignment",
        },
        help,
        {
          name: ["-o", "-output"],
          description: "Output mode for reporting errors (Default: full)",
          args: {
            name: "mode",
            suggestions: ["full", "extended", "concise", "json", "markdown"],
          },
        },
        {
          name: "-project-dir",
          description: "Path to project directory (Default: .)",
          args: {
            name: "dir",
            template: ["folders"],
          },
        },
        {
          name: "-sort-declarations",
          description: "Sort script declarations in Nextflow scripts",
        },
        {
          name: "-spaces",
          description: "Number of spaces to indent (Default: 4)",
          args: {
            name: "number",
          },
        },
        {
          name: "-tabs",
          description: "Indent with tabs",
        },
      ],
    },
    {
      name: "list",
      description: "List all downloaded projects",
      options: [help],
    },
    {
      name: "log",
      description: "Print executions log and runtime info",
      args: {
        name: "run name",
        isOptional: true,
        generators: runname,
      },
      options: [
        {
          name: "-after",
          description:
            "Show log entries for runs executed after the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-before",
          description:
            "Show log entries for runs executed before the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-but",
          description: "Show log entries of all runs except the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: ["-f", "-fields"],
          description:
            "Comma separated list of fields to include in the printed log -- Use the `-l` option to show the list of available fields",
          args: {
            name: "field1,field2,...",
          },
        },
        {
          name: ["-F", "-filter"],
          description:
            "Filter log entries by a custom expression e.g. process =~ /foo.*/ && status == 'COMPLETED'",
          args: {
            name: "expression",
          },
        },
        help,
        {
          name: ["-l", "-list-fields"],
          description: "Show all available fields (Default: false)",
        },
        {
          name: ["-q", "-quiet"],
          description: "Show only run names (Default: false)",
        },
        {
          name: "-s",
          description: "Character used to separate column values (Default: )",
          args: {
            name: "character",
          },
        },
        {
          name: ["-t", "-template"],
          description: "Text template used to each record in the log",
          args: {
            name: "template",
          },
        },
      ],
    },
    {
      name: "logfile",
      description: "Print the contents of a Nextflow log file",
      args: {
        name: "run name, session id, or .nextflow.log path",
        isOptional: true,
        generators: runname,
        template: ["filepaths"],
      },
      options: [
        {
          name: ["-f", "-follow"],
          description: "Output appended data as the file grows",
        },
        help,
        {
          name: "-keep-ansi",
          description: "Preserve ANSI escape codes found inside log content",
        },
        {
          name: ["-l", "-level"],
          description: "Minimum log level to print (no filtering by default)",
          args: {
            name: "level",
            suggestions: ["TRACE", "DEBUG", "INFO", "WARN", "ERROR"],
          },
        },
        {
          name: ["-n", "-lines"],
          description: "Print only the last N log entries",
          args: {
            name: "N",
          },
        },
        {
          name: "-no-ansi",
          description: "Do not add color/style codes to the output",
        },
        {
          name: "-no-pager",
          description: "Do not pipe the output through a pager",
        },
      ],
    },
    {
      name: ["module", "modules"],
      description: "Manage Nextflow modules",
      options: [help],
      subcommands: [
        {
          name: "create",
          description: "Create a new module skeleton",
          args: {
            name: "namespace/name",
            isOptional: true,
          },
          options: [
            {
              name: "-kind",
              description: "Module kind (Default: Process)",
              args: {
                name: "kind",
                suggestions: ["Process", "Workflow"],
              },
            },
            {
              name: "-legacy",
              description:
                "Generate a legacy module, i.e. without static typing",
            },
          ],
        },
        {
          name: "install",
          description: "Install a module from the registry",
          args: {
            name: "namespace/name",
          },
          options: [
            {
              name: "-force",
              description: "Force reinstall even if already installed",
            },
            {
              name: "-update-deps",
              description:
                "Update the vendored dependencies of an installed module to match meta.yml",
            },
            moduleVersion,
          ],
        },
        {
          name: "list",
          description: "List all installed modules",
          options: [outputMode(["table", "json"])],
        },
        {
          name: "publish",
          description: "Publish a module to the registry",
          args: {
            name: "namespace/name or path",
            template: ["folders"],
          },
          options: [
            {
              name: "-dry-run",
              description: "Validate without uploading",
            },
            {
              name: "-registry",
              description:
                "Target registry URL (Default: https://registry.nextflow.io)",
              args: {
                name: "url",
              },
            },
            moduleSchema,
          ],
        },
        {
          name: "remove",
          description: "Remove an installed module",
          isDangerous: true,
          args: {
            name: "namespace/name",
          },
          options: [
            {
              name: "-force",
              description:
                "Remove the module even if it has local modifications",
            },
            {
              name: "-keep-files",
              description: "Remove only .module-info keeping the local files",
            },
          ],
        },
        {
          name: "run",
          description: "Run a module directly from the registry",
          args: {
            name: "namespace/name or path",
            template: ["filepaths", "folders"],
          },
          options: [...runOptions, moduleVersion],
        },
        {
          name: "search",
          description: "Search for modules in the registry",
          args: {
            name: "query",
          },
          options: [
            {
              name: "-limit",
              description: "Maximum number of results",
              args: {
                name: "number",
              },
            },
            outputMode(["simple", "json"]),
          ],
        },
        {
          name: "spec",
          description: "Generate a meta.yml spec for a local module",
          args: {
            name: "namespace/name or path",
            template: ["folders"],
          },
          options: [
            {
              name: "-author",
              description: "Module author",
              isRepeatable: true,
              args: {
                name: "name",
              },
            },
            {
              name: "-description",
              description: "Short description of what the module does",
              args: {
                name: "text",
              },
            },
            {
              name: "-dry-run",
              description:
                "Print generated YAML to stdout without writing any file",
            },
            {
              name: "-license",
              description: "Module license identifier (e.g. MIT, Apache-2.0)",
              args: {
                name: "identifier",
              },
            },
            {
              name: "-namespace",
              description:
                "Module namespace, required when the argument is a path",
              args: {
                name: "namespace",
              },
            },
            {
              name: "-version",
              description: "Module version (e.g. 1.0.0)",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a module structure and metadata",
          args: {
            name: "namespace/name or path",
            template: ["folders"],
          },
          options: [moduleSchema],
        },
        {
          name: "view",
          description: "Show module information and usage template",
          args: {
            name: "namespace/name",
          },
          options: [moduleVersion, outputMode(["text", "json"])],
        },
      ],
    },
    {
      name: ["plugin", "plugins"],
      description: "Execute plugin-specific commands",
      options: [help],
      subcommands: [
        {
          name: "create",
          description: "Create a plugin scaffold from the Nextflow template",
          args: [
            {
              name: "plugin name",
              isOptional: true,
            },
            {
              name: "provider name",
              isOptional: true,
            },
            {
              name: "dir",
              isOptional: true,
              template: ["folders"],
            },
          ],
        },
        {
          name: "install",
          description: "Install one or more plugins",
          args: {
            name: "plugin[@version],..",
          },
        },
      ],
    },
    {
      name: "pull",
      description: "Download or update a project",
      args: {
        name: "project name or repository url to pull",
        isOptional: true,
        generators: projectname,
      },
      options: [
        {
          name: ["-a", "-all"],
          description: "Update all downloaded projects (Default: false)",
        },
        deprecatedDeep,
        help,
        ...hubOptions,
        {
          name: ["-m", "-migrate"],
          description: "Migrate projects to multi-revision strategy",
        },
        revision,
      ],
    },
    {
      name: "run",
      description: "Execute a pipeline project",
      args: {
        name: "project name, repository url, or local path",
        generators: projectname,
      },
      options: runOptions,
    },
    {
      name: ["secrets", "secret"],
      description:
        "Handle and manage sensitive information for pipeline execution in a safe manner",
      options: [help],
      subcommands: [
        {
          name: "list",
          description: "List secrets available in the current store",
        },
        {
          name: "get",
          description: "Retrieve a secret value",
          args: {
            name: "secret name",
            generators: secretname,
          },
        },
        {
          name: "set",
          description: "Create a new secret or override an existing one",
          isDangerous: true,
          args: [
            {
              name: "secret name",
              generators: secretname,
              suggestCurrentToken: true,
            },
            {
              name: "value",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing secret",
          isDangerous: true,
          args: {
            name: "secret name",
            generators: secretname,
          },
        },
      ],
    },
    {
      name: "self-update",
      description: "Update nextflow runtime to the latest available version",
      options: [help],
    },
    {
      name: "view",
      description: "View project script file(s)",
      args: {
        name: "project name",
        generators: projectname,
      },
      options: [
        help,
        {
          name: "-l",
          description: "List repository content (Default: false)",
        },
        {
          name: "-q",
          description: "Hide header line (Default: false)",
        },
        revision,
      ],
    },
  ],
  options: [
    {
      name: "-C",
      description:
        "Use the specified configuration file(s) overriding any defaults",
      isRepeatable: true,
      args: {
        name: "configuration file",
        template: ["filepaths"],
      },
    },
    {
      name: "-D",
      description: "Set JVM properties",
      insertValue: "-D{cursor}",
      args: {
        name: "custom Java system property",
      },
    },
    {
      name: "-bg",
      description: "Execute nextflow in background",
    },
    {
      name: ["-c", "-config"],
      description: "Add the specified file to configuration set",
      isRepeatable: true,
      args: {
        name: "configuration file",
        template: ["filepaths"],
      },
    },
    {
      name: "-config-ignore-includes",
      description: "Disable the parsing of config includes",
    },
    {
      name: ["-h", "-help"],
      description: "Print this help",
    },
    {
      name: "-log",
      description: "Set nextflow log file path",
      args: {
        name: "log file",
        template: ["filepaths"],
      },
    },
    {
      name: ["-q", "-quiet"],
      description: "Do not print information messages",
    },
    {
      name: "-remote-debug",
      description: "Enable JVM interactive remote debugging (experimental)",
    },
    {
      name: "-syslog",
      description: "Send logs to syslog server (eg. localhost:514)",
      args: {
        name: "host:port",
        isOptional: true,
      },
    },
    {
      name: "-trace",
      description:
        "Enable trace level logging for the specified package names, separated by comma e.g. nextflow,io.seqera",
      args: {
        name: "packages",
      },
    },
    {
      name: ["-v", "-version"],
      description: "Print the program version",
    },
  ],
};
export default completionSpec;
