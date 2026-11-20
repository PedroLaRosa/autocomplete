// Task (go-task) v3.54.0 (GitHub release, 2026-10-01). Source: internal/flags/flags.go
// and completion.go at tag v3.54.0
const TASKS_PRIORITY = 80;
const TASKFILE_FLAGS = ["-t", "--taskfile"];
const DIRECTORY_FLAGS = ["-d", "--dir"];
const GLOBAL_FLAGS = ["-g", "--global"];
const LIST_FLAGS = ["-l", "--list"];
const LIST_ALL_FLAGS = ["-a", "--list-all"];
const JSON_FLAGS = ["-j", "--json"];
const OUTPUT_FLAGS = ["-o", "--output"];

const tasksGenerator: Fig.Generator = {
  script: ["task", "-a"],
  postProcess: (output) => {
    if (output.includes("task: No Taskfile found")) {
      return [];
    }

    const result: Fig.Suggestion[] = output
      .split("\n")
      .filter((task) => task.startsWith("*"))
      .map((task) => {
        const taskInfo = task.slice(2).trim();
        const [name, ...description] = taskInfo.split(": ");

        return {
          name: name.replace(/:$/, ""),
          description: description.join(": ").trim() || undefined,
          icon: "fig://icon?type=command",
          priority: TASKS_PRIORITY,
        };
      });

    return result;
  },
};

const durationArg = (name: string): Fig.Arg => ({
  name,
  description: "Go duration, e.g. 500ms, 10s, 1m",
});

const completionSpec: Fig.Spec = {
  name: "go-task",
  description: "A task runner / simpler Make alternative written in Go",
  icon: "https://taskfile.dev/favicon.ico",
  args: {
    generators: tasksGenerator,
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: LIST_ALL_FLAGS,
      description: "Lists tasks with or without a description",
      exclusiveOn: LIST_FLAGS,
    },
    {
      name: "--cacert",
      description: "Path to a custom CA certificate for HTTPS connections",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--cert",
      description: "Path to a client certificate for HTTPS connections",
      dependsOn: ["--cert-key"],
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--cert-key",
      description: "Path to a client certificate key for HTTPS connections",
      dependsOn: ["--cert"],
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--clear-cache",
      description: "Clear the remote cache",
    },
    {
      name: ["-c", "--color"],
      description:
        "Colored output. Enabled by default. Set flag to false or use NO_COLOR=1 to disable (default true)",
      requiresEquals: true,
      args: {
        name: "color",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--completion",
      description: "Generates shell completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "nu", "nushell", "powershell", "zsh"],
      },
    },
    {
      name: ["-C", "--concurrency"],
      description: "Limit number of tasks to run concurrently",
      args: {
        name: "number",
      },
    },
    {
      name: DIRECTORY_FLAGS,
      description:
        "Sets the directory in which Task will execute and look for a Taskfile",
      exclusiveOn: [...TASKFILE_FLAGS, ...GLOBAL_FLAGS],
      args: {
        name: "path",
        template: ["folders"],
      },
    },
    {
      name: "--disable-fuzzy",
      description: "Disables fuzzy matching for task names",
    },
    {
      name: "--download",
      description:
        "Forces task to download remote Taskfiles and ignore any cached versions",
      exclusiveOn: ["--offline", "--clear-cache"],
    },
    {
      name: ["-n", "--dry"],
      description:
        "Compiles and prints tasks in the order that they would be run, without executing them",
    },
    {
      name: ["-x", "--exit-code"],
      description: "Pass-through the exit code of the task command",
    },
    {
      name: "--experiments",
      description:
        "Lists all the available experiments and whether or not they are enabled",
    },
    {
      name: "--expiry",
      description: "Expiry duration for cached remote Taskfiles",
      args: durationArg("duration"),
    },
    {
      name: ["-F", "--failfast"],
      description:
        "When running tasks in parallel, stop all tasks if one fails",
    },
    {
      name: ["-f", "--force"],
      description: "Forces execution even when the task is up-to-date",
    },
    {
      name: "--force-all",
      description:
        "Forces execution of the called task and all its dependant tasks (GENTLE_FORCE experiment)",
    },
    {
      name: GLOBAL_FLAGS,
      description: "Runs global Taskfile, from $HOME/{T,t}askfile.{yml,yaml}",
      exclusiveOn: DIRECTORY_FLAGS,
    },
    {
      name: ["-h", "--help"],
      description: "Shows Task usage",
    },
    {
      name: ["-i", "--init"],
      description: "Creates a new Taskfile.yml in the current folder",
      args: {
        name: "path",
        description: "Taskfile path, or just an extension like .yaml",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--insecure",
      description:
        "Forces Task to download Taskfiles over insecure connections",
    },
    {
      name: "--interactive",
      description: "Prompt for missing required variables",
    },
    {
      name: ["-I", "--interval"],
      description: "Interval to watch for changes",
      args: durationArg("interval"),
    },
    {
      name: JSON_FLAGS,
      description: "Formats task list as JSON",
      dependsOn: [...LIST_FLAGS, ...LIST_ALL_FLAGS],
    },
    {
      name: LIST_FLAGS,
      description: "Lists tasks with description of current Taskfile",
      exclusiveOn: LIST_ALL_FLAGS,
    },
    {
      name: "--nested",
      description: "Nest namespaces when listing tasks as JSON",
      dependsOn: JSON_FLAGS,
    },
    {
      name: "--no-status",
      description: "Ignore status when listing tasks as JSON",
      dependsOn: JSON_FLAGS,
    },
    {
      name: "--offline",
      description: "Forces Task to only use local or cached Taskfiles",
      exclusiveOn: ["--download"],
    },
    {
      name: OUTPUT_FLAGS,
      description: "Sets output style",
      args: {
        name: "output",
        suggestions: ["interleaved", "group", "prefixed"],
      },
    },
    {
      name: "--output-group-begin",
      description: "Message template to print before a task's grouped output",
      dependsOn: OUTPUT_FLAGS,
      args: { name: "template" },
    },
    {
      name: "--output-group-end",
      description: "Message template to print after a task's grouped output",
      dependsOn: OUTPUT_FLAGS,
      args: { name: "template" },
    },
    {
      name: "--output-group-error-only",
      description: "Swallow output from successful tasks",
      dependsOn: OUTPUT_FLAGS,
    },
    {
      name: ["-p", "--parallel"],
      description: "Executes tasks provided on command line in parallel",
    },
    {
      name: "--remote-cache-dir",
      description: "Directory to cache remote Taskfiles",
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-s", "--silent"],
      description: "Disables echoing",
    },
    {
      name: "--sort",
      description: "Changes the order of the tasks when listed",
      args: {
        name: "order",
        suggestions: ["default", "alphanumeric", "none"],
      },
    },
    {
      name: "--status",
      description:
        "Exits with non-zero exit code if any of the given tasks is not up-to-date",
    },
    {
      name: "--summary",
      description: "Show summary about a task",
    },
    {
      name: TASKFILE_FLAGS,
      description: "Choose which Taskfile to run",
      exclusiveOn: DIRECTORY_FLAGS,
      args: {
        name: "taskfile",
        default: "Taskfile.yml",
        template: ["filepaths"],
      },
    },
    {
      name: "--temp-dir",
      description:
        "Sets the directory used to store Task temporary files, such as checksums",
      args: { name: "path", template: "folders" },
    },
    {
      name: "--timeout",
      description: "Timeout for downloading remote Taskfiles (default 10s)",
      args: durationArg("timeout"),
    },
    {
      name: "--trusted-hosts",
      description:
        "List of trusted hosts for remote Taskfiles (comma-separated)",
      args: { name: "hosts" },
    },
    {
      name: ["-v", "--verbose"],
      description: "Enables verbose mode",
    },
    {
      name: "--version",
      description: "Show Task version",
    },
    {
      name: ["-w", "--watch"],
      description: "Enables watch of the given task",
    },
    {
      name: ["-y", "--yes"],
      description: 'Assume "yes" as answer to all prompts',
    },
    {
      name: "--",
      description: "Pass variables to the task",
      args: {
        name: "variables",
        isVariadic: true,
        optionsCanBreakVariadicArg: false,
      },
    },
  ],
};

export default completionSpec;
