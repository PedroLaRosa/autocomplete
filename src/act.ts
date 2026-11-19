// act v0.2.98 (GitHub release nektos/act, 2026-11-16). Source: cmd/root.go at v0.2.98 via `gh api`
const completionSpec: Fig.Spec = {
  name: "act",
  description:
    "Run GitHub actions locally by specifying the event name (e.g. `push`) or an action name directly",
  args: {
    name: "event name",
    description: 'Event to run; defaults to "push" or the only event handled',
    isOptional: true,
    suggestions: [
      "push",
      "pull_request",
      "pull_request_target",
      "workflow_dispatch",
      "schedule",
      "release",
    ],
  },
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--bind", "-b"],
      description: "Bind working directory to container, rather than copy",
    },
    {
      name: "--bug-report",
      description: "Display system information for bug report",
    },
    {
      name: "--man-page",
      description: "Print a generated manual page to stdout",
    },
    {
      name: "--container-cap-add",
      description:
        "Kernel capabilities to add to the workflow containers (e.g. --container-cap-add SYS_PTRACE)",
      isRepeatable: true,
      args: { name: "container-cap-add" },
    },
    {
      name: "--container-cap-drop",
      description:
        "Kernel capabilities to remove from the workflow containers (e.g. --container-cap-drop SYS_PTRACE)",
      isRepeatable: true,
      args: { name: "container-cap-drop" },
    },
    {
      name: "--defaultbranch",
      description: "The name of the main branch",
      args: { name: "defaultbranch" },
    },
    {
      name: "--detect-event",
      description:
        "Use first event type from workflow as event that triggered the workflow",
    },
    {
      name: "--env",
      description:
        "Env to make available to actions with optional value (e.g. --env myenv=foo or --env myenv)",
      isRepeatable: true,
      args: { name: "env" },
    },
    {
      name: "--var",
      description:
        "Variable to make available to actions with optional value (e.g. --var myvar=foo or --var myvar)",
      isRepeatable: true,
      args: { name: "var" },
    },
    {
      name: "--input",
      description:
        "Action input to make available to actions (e.g. --input myinput=foo)",
      isRepeatable: true,
      args: { name: "input" },
    },
    {
      name: "--matrix",
      description:
        "Specify which matrix configuration to include (e.g. --matrix java:13)",
      isRepeatable: true,
      args: { name: "matrix" },
    },
    {
      name: ["--eventpath", "-e"],
      description: "Path to event JSON file",
      args: { name: "eventpath", template: "filepaths" },
    },
    { name: ["--graph", "-g"], description: "Draw workflows" },
    {
      name: ["--job", "-j"],
      description: "Run a specific job ID",
      args: { name: "job" },
    },
    { name: ["--list", "-l"], description: "List workflows" },
    { name: "--validate", description: "Validate workflows" },
    { name: "--strict", description: "Use strict workflow schema" },
    {
      name: ["--platform", "-P"],
      description:
        "Custom image to use per platform (e.g. -P ubuntu-18.04=nektos/act-environments-ubuntu:18.04)",
      isRepeatable: true,
      args: { name: "platform" },
    },
    { name: "--privileged", description: "Use privileged mode" },
    {
      name: ["--pull", "-p"],
      description: "Pull docker image(s) even if already present",
    },
    {
      name: "--rebuild",
      description:
        "Rebuild local action docker image(s) even if already present",
    },
    {
      name: "--remote-name",
      description:
        "Git remote name that will be used to retrieve url of git repo",
      args: { name: "remote-name", default: "origin" },
    },
    {
      name: "--replace-ghe-action-with-github-com",
      description:
        "Actions to fetch from github.com when using GitHub Enterprise Server (e.g. --replace-ghe-action-with-github-com github/super-linter)",
      isRepeatable: true,
      args: { name: "action" },
    },
    {
      name: "--replace-ghe-action-token-with-github-com",
      description:
        "Personal access token for private github.com actions used with --replace-ghe-action-with-github-com",
      args: { name: "token" },
    },
    {
      name: ["--reuse", "-r"],
      description:
        "Don't remove container(s) on successfully completed workflow(s) to maintain state between runs",
    },
    {
      name: "--rm",
      description:
        "Automatically remove container(s)/volume(s) after a workflow(s) failure",
    },
    {
      name: ["--secret", "-s"],
      description:
        "Secret to make available to actions with optional value (e.g. -s mysecret=foo or -s mysecret)",
      isRepeatable: true,
      args: { name: "secret" },
    },
    {
      name: "--use-gitignore",
      description:
        "Controls whether paths specified in .gitignore should be copied into container",
    },
    {
      name: "--userns",
      description: "User namespace to use",
      args: { name: "userns" },
    },
    {
      name: ["--watch", "-w"],
      description:
        "Watch the contents of the local repo and run when files change",
    },
    { name: "--version", description: "Version for act" },
    {
      name: "--action-cache-path",
      description:
        "Defines the path where the actions get cached and host workspaces created",
      isPersistent: true,
      args: { name: "action-cache-path", template: "folders" },
    },
    {
      name: "--action-offline-mode",
      description:
        "Don't fetch and pull actions whose contents already exist; turns off force pull",
      isPersistent: true,
    },
    {
      name: ["--actor", "-a"],
      description: "User that triggered the event",
      isPersistent: true,
      args: { name: "actor", default: "nektos/act" },
    },
    {
      name: "--artifact-server-addr",
      description:
        "Address the artifact server binds to. When omitted, Linux host-network jobs use 127.0.0.1 and every other container network uses the outbound address",
      isPersistent: true,
      args: { name: "artifact-server-addr", default: "127.0.0.1" },
    },
    {
      name: "--artifact-server-path",
      description:
        "Defines the path where the artifact server stores uploads and retrieves downloads from. If not specified the artifact server will not start",
      isPersistent: true,
      args: { name: "artifact-server-path", template: "folders" },
    },
    {
      name: "--artifact-server-port",
      description: "Defines the port where the artifact server listens",
      isPersistent: true,
      args: { name: "artifact-server-port", default: "34567" },
    },
    {
      name: "--cache-server-addr",
      description: "Defines the address to which the cache server binds",
      isPersistent: true,
      args: { name: "cache-server-addr" },
    },
    {
      name: "--cache-server-external-url",
      description:
        "Defines the external URL for if the cache server is behind a proxy (no trailing slash)",
      isPersistent: true,
      args: { name: "url" },
    },
    {
      name: "--cache-server-path",
      description: "Defines the path where the cache server stores caches",
      isPersistent: true,
      args: { name: "cache-server-path", template: "folders" },
    },
    {
      name: "--cache-server-port",
      description:
        "Defines the port where the cache server listens. 0 means a randomly available port",
      isPersistent: true,
      args: { name: "cache-server-port", default: "0" },
    },
    {
      name: "--concurrent-jobs",
      description:
        "Maximum number of concurrent jobs to run. Default is the number of CPUs available",
      isPersistent: true,
      args: { name: "concurrent-jobs" },
    },
    {
      name: "--container-architecture",
      description:
        "Architecture which should be used to run containers, e.g.: linux/amd64. If not specified, will use host default architecture. Requires Docker server API Version 1.41+. Ignored on earlier Docker server platforms",
      isPersistent: true,
      args: { name: "container-architecture" },
    },
    {
      name: "--container-daemon-socket",
      description:
        "URI to Docker Engine socket (e.g.: unix://~/.docker/run/docker.sock or - to disable bind mounting the socket)",
      isPersistent: true,
      args: { name: "container-daemon-socket" },
    },
    {
      name: "--container-options",
      description:
        "Custom docker container options for the job container without an options property in the job definition",
      isPersistent: true,
      args: { name: "container-options" },
    },
    {
      name: "--container-options-policy",
      description:
        "Policy for container options and host path volumes set by workflows",
      isPersistent: true,
      args: {
        name: "policy",
        default: "auto",
        suggestions: [
          {
            name: "auto",
            description: "Restrict them when --container-daemon-socket is -",
          },
          { name: "restrict", description: "Always restrict them" },
          { name: "allow", description: "Permit them" },
        ],
      },
    },
    {
      name: ["--directory", "-C"],
      description: "Working directory",
      isPersistent: true,
      args: { name: "directory", default: ".", template: "folders" },
    },
    {
      name: ["--dryrun", "-n"],
      description:
        "Disable container creation, validates only workflow correctness",
      isPersistent: true,
    },
    {
      name: "--env-file",
      description: "Environment file to read and use as env in the containers",
      isPersistent: true,
      args: { name: "env-file", default: ".env", template: "filepaths" },
    },
    {
      name: "--github-instance",
      description:
        "GitHub instance to use. Only use this when using GitHub Enterprise Server",
      isPersistent: true,
      args: { name: "github-instance", default: "github.com" },
    },
    {
      name: "--input-file",
      description: "Input file to read and use as action input",
      isPersistent: true,
      args: { name: "input-file", default: ".input", template: "filepaths" },
    },
    {
      name: "--insecure-secrets",
      description: "NOT RECOMMENDED! Doesn't hide secrets while printing logs",
      isPersistent: true,
    },
    {
      name: "--json",
      description: "Output logs in json format",
      isPersistent: true,
    },
    {
      name: "--list-options",
      description: "Print a json structure of compatible options",
      isPersistent: true,
    },
    {
      name: "--local-repository",
      description:
        "Replaces the specified repository and ref with a local folder (e.g. test/test@v0=/home/act/test)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "repository=path" },
    },
    {
      name: "--log-prefix-job-id",
      description:
        "Output the job id within non-json logs instead of the entire name",
      isPersistent: true,
    },
    {
      name: "--network",
      description: "Sets a docker network name",
      isPersistent: true,
      args: { name: "network", default: "host" },
    },
    {
      name: "--no-cache-server",
      description: "Disable cache server",
      isPersistent: true,
    },
    {
      name: "--no-recurse",
      description:
        "Flag to disable running workflows from subdirectories of specified path in '--workflows'/'-W' flag",
      isPersistent: true,
    },
    {
      name: "--no-skip-checkout",
      description:
        "Use actions/checkout instead of copying local files into container",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Disable logging of output from steps",
      isPersistent: true,
    },
    {
      name: "--secret-file",
      description:
        "File with list of secrets to read from (e.g. --secret-file .secrets)",
      isPersistent: true,
      args: { name: "secret-file", default: ".secrets", template: "filepaths" },
    },
    {
      name: "--trust-project-actrc",
      description:
        "Apply every flag in ./.actrc, including ones that reach host resources, and expand $VAR references in it",
      isPersistent: true,
    },
    {
      name: "--use-new-action-cache",
      description:
        "Enable using the new Action Cache for storing Actions locally",
      isPersistent: true,
    },
    {
      name: "--var-file",
      description:
        "File with list of vars to read from (e.g. --var-file .vars)",
      isPersistent: true,
      args: { name: "var-file", default: ".vars", template: "filepaths" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: ["--workflows", "-W"],
      description: "Path to workflow file(s)",
      isPersistent: true,
      args: {
        name: "workflows",
        default: "./.github/workflows/",
        template: ["folders", "filepaths"],
      },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
