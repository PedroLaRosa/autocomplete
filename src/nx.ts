// Nx v24.0.6 (npm `nx` "latest" dist-tag, 2026-11-19). Source: static read of the nx@24.0.6 npm tarball (dist/src/command-line/*/command-object.js, yargs-utils/shared-options.js, migrate/command-object.js, completion/*); the CLI was not executed.
// Dynamic generators still read project.json / workspace.json; plugin and generator names come from `nx list --json`.
// Not covered: hidden commands (new, register, _migrate, affected:build|test|lint|e2e), the flags of the nx-cloud passthrough commands and the flags forwarded by `nx mcp` to nx-mcp.
// Docs - https://nx.dev/reference/core-api/nx/documents

interface NxWorkspace {
  projects: {
    [key: string]: NxProject;
  };
}

interface NxProject {
  name: string;
  targets: {
    [key: string]: {
      configurations: {
        [key: string]: unknown;
      };
    };
  };
}

interface NxListPlugin {
  name: string;
  capabilities?: string[];
}

interface NxListJson {
  localWorkspacePlugins?: NxListPlugin[];
  installedPlugins?: NxListPlugin[];
  generators?: {
    [key: string]: { description?: string };
  };
}

interface NxGenerators {
  configuration: Fig.Generator;
  generate: Fig.Generator;
  list: Fig.Generator;
  project: Fig.Generator;
  projectTarget: Fig.Generator;
  projects: Fig.Generator;
  run: Fig.Generator;
  targets: Fig.Generator;
}

interface NxOptions {
  affected: Fig.Option;
  all: Fig.Option;
  base: Fig.Option;
  batch: Fig.Option;
  commitPrefix: Fig.Option;
  configuration: Fig.Option;
  createCommits: Fig.Option;
  dryRun: Fig.Option;
  exclude: Fig.Option;
  excludeAppliedMigrations: Fig.Option;
  excludeTaskDependencies: Fig.Option;
  explain: Fig.Option;
  file: Fig.Option;
  files: Fig.Option;
  focus: Fig.Option;
  from: Fig.Option;
  graph: Fig.Option;
  groupByFolder: Fig.Option;
  head: Fig.Option;
  host: Fig.Option;
  ifExists: Fig.Option;
  interactive: Fig.Option;
  json: Fig.Option;
  libsAndApps: Fig.Option;
  noInteractive: Fig.Option;
  nxBail: Fig.Option;
  nxIgnoreCycles: Fig.Option;
  open: Fig.Option;
  outputStyle: Fig.Option;
  parallel: Fig.Option;
  port: Fig.Option;
  project: Fig.Option;
  projects: Fig.Option;
  runMigrations: Fig.Option;
  runner: Fig.Option;
  skipNxCache: Fig.Option;
  skipRemoteCache: Fig.Option;
  skipSync: Fig.Option;
  start: Fig.Option;
  stdin: Fig.Option;
  stop: Fig.Option;
  targets: Fig.Option;
  to: Fig.Option;
  tui: Fig.Option;
  tuiAutoExit: Fig.Option;
  type: Fig.Option;
  uncommitted: Fig.Option;
  untracked: Fig.Option;
  verbose: Fig.Option;
  view: Fig.Option;
  watch: Fig.Option;
}

const oneDayCache: Fig.Cache = {
  strategy: "max-age",
  ttl: 60 * 60 * 24,
  cacheByDirectory: true,
};

let nxProjectPathCache: string[] = [];
let nxWorkspaceJsonCache: NxWorkspace;
const nxProjectPathWithJsonCache = new Map<string, NxProject>();
const nxProjectWithTargetsCache = new Map<string, string[]>();
const nxProjectTargetWithConfigurationsCache = new Map<string, string[]>();
const nxTargetWithProjectsCache = new Map<string, string[]>();

const fillProjectCaches = (projectJson: NxProject) => {
  if (!nxProjectWithTargetsCache.has(projectJson.name)) {
    const projectTargets: string[] = [];

    for (const target in projectJson.targets) {
      projectTargets.push(target);

      const projectTargetConfigurations: string[] = [];

      for (const configuration in projectJson.targets[target].configurations) {
        projectTargetConfigurations.push(configuration);
      }

      nxProjectTargetWithConfigurationsCache.set(
        `${projectJson.name}:${target}`,
        projectTargetConfigurations
      );
    }

    nxProjectWithTargetsCache.set(projectJson.name, projectTargets);

    for (const target of projectTargets) {
      const projects = nxTargetWithProjectsCache.get(target) || [];
      projects.push(projectJson.name);
      nxTargetWithProjectsCache.set(target, projects);
    }
  }
};

const preProcessProjects = async (
  executeShellCommand: Fig.ExecuteCommandFunction
) => {
  if (!nxProjectPathCache.length) {
    // get project json paths
    try {
      const { appsDir, libsDir }: { appsDir: string; libsDir: string } = {
        appsDir: "apps",
        libsDir: "libs",
        ...JSON.parse(
          (
            await executeShellCommand({
              command: "cat",
              // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
              args: ["nx.json"],
            })
          ).stdout
        ).workspaceLayout,
      };
      const searchFolders =
        appsDir === libsDir ? [appsDir] : [appsDir, libsDir];

      nxProjectPathCache = (
        await executeShellCommand({
          command: "find",
          args: [...searchFolders, "-name", "project.json"],
        })
      ).stdout
        .split("\n")
        .filter((path) => !!path);
    } catch (error) {
      console.log(error);
    }
  }

  for (const projectJsonPath of nxProjectPathCache) {
    let projectJson = nxProjectPathWithJsonCache.get(projectJsonPath);

    if (!projectJson) {
      try {
        projectJson = JSON.parse(
          (
            await executeShellCommand({
              command: "cat",
              // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
              args: [projectJsonPath],
            })
          ).stdout
        );

        nxProjectPathWithJsonCache.set(projectJsonPath, projectJson);
      } catch (error) {
        console.log(error);
      }
    }

    if (projectJson) {
      fillProjectCaches(projectJson);
    }
  }

  // fallback to workspace json if no project json paths are present
  if (!nxProjectPathCache.length) {
    try {
      nxWorkspaceJsonCache = JSON.parse(
        (
          await executeShellCommand({
            command: "cat",
            // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
            args: ["workspace.json"],
          })
        ).stdout
      );

      // fill project caches
      for (const project in nxWorkspaceJsonCache?.projects || {}) {
        fillProjectCaches({
          ...nxWorkspaceJsonCache.projects[project],
          name: project,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const listMapKeysGenerator = (map: Map<string, unknown>): Fig.Generator => {
  return {
    cache: oneDayCache,
    trigger: (newToken, oldToken) =>
      newToken.split(",").length !== oldToken.split(",").length,
    getQueryTerm: (token) => token.split(",").pop(),
    custom: async (
      tokens: string[],
      executeShellCommand: Fig.ExecuteCommandFunction,
      generatorContext: Fig.GeneratorContext
    ) => {
      const suggestions: Fig.Suggestion[] = [];
      const selected = tokens[tokens.length - 1].split(",");
      await preProcessProjects(executeShellCommand);

      for (const name of map.keys()) {
        if (!selected.includes(name)) {
          suggestions.push({ name, insertValue: `${name},` });
        }
      }

      return suggestions;
    },
  };
};

// `nx list [plugin] --json` prints either a plugin summary or the capabilities of one plugin
const parseNxListJson = (out: string): NxListJson => {
  try {
    return JSON.parse(out) || {};
  } catch (error) {
    return {};
  }
};

const nxListPluginSuggestions = (
  out: string,
  withCapability?: string
): Fig.Suggestion[] => {
  const { localWorkspacePlugins = [], installedPlugins = [] } =
    parseNxListJson(out);
  return [...localWorkspacePlugins, ...installedPlugins]
    .filter(
      (plugin) =>
        !withCapability || (plugin.capabilities || []).includes(withCapability)
    )
    .map((plugin) => ({ name: plugin.name }));
};

/**
 * Generator for `project:target[:configuration]` (nx run) or `project:target` (nx show target)
 */
const projectTargetGenerator = (
  withConfigurations: boolean
): Fig.Generator => ({
  // set cache to one day
  cache: oneDayCache,
  // trigger when new seperator is entered
  trigger: (newToken, oldToken) =>
    newToken.split(":").length !== oldToken.split(":").length,
  // query just the last segment
  getQueryTerm: (token) => token.split(":").pop(),
  // the custom generator
  custom: async (
    tokens: string[],
    executeShellCommand: Fig.ExecuteCommandFunction
  ) => {
    // suggestions to be returned
    const suggestions: Fig.Suggestion[] = [];

    // get the final token and split it
    const finalToken = tokens[tokens.length - 1].split(":");

    // get project and target if complete
    const project = finalToken.length > 1 ? finalToken[0] : "";
    const target = finalToken.length > 2 ? finalToken[1] : "";

    // pre process projects
    await preProcessProjects(executeShellCommand);

    // set suggestions
    if (!project) {
      // push all project names to the suggestions and append the seperator
      for (const name of nxProjectWithTargetsCache.keys()) {
        suggestions.push({ name, insertValue: `${name}:` });
      }
    } else if (!target) {
      // push all target names to the suggestions and append the seperator if configurations are present
      for (const name of nxProjectWithTargetsCache.get(project) || []) {
        if (
          withConfigurations &&
          nxProjectTargetWithConfigurationsCache.get(`${project}:${name}`)
        ) {
          suggestions.push({ name, insertValue: `${name}:` });
        } else {
          suggestions.push({ name });
        }
      }
    } else if (withConfigurations) {
      // push all configuration names to the suggestions
      for (const name of nxProjectTargetWithConfigurationsCache.get(
        `${project}:${target}`
      ) || []) {
        suggestions.push({ name });
      }
    }

    return suggestions;
  },
});

const nxGenerators: NxGenerators = {
  configuration: {
    cache: oneDayCache,
    custom: async (
      tokens: string[],
      executeShellCommand: Fig.ExecuteCommandFunction
    ) => {
      const suggestions: Fig.Suggestion[] = [];

      const finalToken = [];
      const token = tokens.join(" ");
      if (token.startsWith("nx run")) {
        finalToken.push(...tokens[2].split(":"));
      } else {
        finalToken.push(tokens[2], tokens[1]);
      }

      const [project, target] = finalToken;

      // pre process projects
      await preProcessProjects(executeShellCommand);

      // push all configuration names to the suggestions
      for (const name of nxProjectTargetWithConfigurationsCache.get(
        `${project}:${target}`
      )) {
        suggestions.push({ name });
      }

      return suggestions;
    },
  },
  generate: {
    script: (context) => {
      const argument = context.slice(-1)[0];
      if (argument.indexOf(":") > -1) {
        return ["nx", "list", argument.split(":")[0], "--json"];
      } else {
        return ["nx", "list", "--json"];
      }
    },
    trigger: (newToken, oldToken) =>
      newToken.split(":").length !== oldToken.split(":").length,
    getQueryTerm: (token) => token.split(":").pop(),
    cache: oneDayCache,
    postProcess: (out) => {
      const { generators } = parseNxListJson(out);
      if (generators) {
        // capabilities of a single plugin
        return Object.entries(generators).map(([name, generator]) => ({
          name,
          description: generator.description || undefined,
        }));
      }
      // plugins that provide generators, the collection separator is appended
      return nxListPluginSuggestions(out, "generators").map(({ name }) => ({
        name,
        insertValue: `${name}:`,
      }));
    },
  },
  list: {
    script: ["nx", "list", "--json"],
    cache: oneDayCache,
    postProcess: (out) => nxListPluginSuggestions(out),
  },
  project: {
    // set cache to one day
    cache: oneDayCache,
    // the custom generator
    custom: async (
      _: string[],
      executeShellCommand: Fig.ExecuteCommandFunction
    ) => {
      // suggestions to be returned
      const suggestions: Fig.Suggestion[] = [];

      // pre process projects
      await preProcessProjects(executeShellCommand);

      // push all project names to the suggestions
      for (const name of nxProjectWithTargetsCache.keys()) {
        suggestions.push({ name });
      }

      return suggestions;
    },
  },
  projectTarget: projectTargetGenerator(false),
  projects: listMapKeysGenerator(nxProjectWithTargetsCache),
  run: projectTargetGenerator(true),
  targets: listMapKeysGenerator(nxTargetWithProjectsCache),
};

const optionsDict: NxOptions = {
  affected: {
    name: "--affected",
    description: "Highlight affected projects",
  },
  all: {
    name: "--all",
    description: "All projects",
  },
  base: {
    name: "--base",
    description: "Base of the current branch (usually main)",
    args: { name: "ref" },
    exclusiveOn: ["--files", "--stdin", "--uncommitted", "--untracked"],
  },
  batch: {
    name: "--batch",
    description: "Run task(s) in batches for executors which support batches",
  },
  commitPrefix: {
    name: "--commitPrefix",
    description:
      "Commit prefix to apply to the commit for each migration, when --create-commits is enabled",
    args: { name: "prefix", default: "chore: [nx migration] " },
  },
  configuration: {
    name: ["--configuration", "-c"],
    description:
      "This is the configuration to use when performing tasks on projects",
    args: {
      name: "configuration",
      generators: nxGenerators.configuration,
    },
  },
  createCommits: {
    name: ["--createCommits", "-C"],
    description: "Automatically create a git commit after each migration runs",
  },
  dryRun: {
    name: ["--dryRun", "-d"],
    description: "Preview the changes without updating files",
  },
  exclude: {
    name: "--exclude",
    description: "Exclude certain projects from being processed",
    args: {
      name: "projects",
      generators: nxGenerators.projects,
    },
  },
  excludeAppliedMigrations: {
    name: "--excludeAppliedMigrations",
    description:
      "Exclude migrations that should have been applied on previous updates. To be used with --from",
  },
  excludeTaskDependencies: {
    name: "--excludeTaskDependencies",
    description: "Skips running dependent tasks first",
  },
  explain: {
    name: "--explain",
    description:
      "Print why each task was considered affected, instead of running anything. Pass a file path to save the reasons as JSON, or stdout to print the JSON to the terminal",
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
      suggestions: [
        { name: "stdout", description: "Print the JSON to the terminal" },
      ],
    },
  },
  file: {
    name: "--file",
    description:
      "Output file (e.g. --file=output.json or --file=dep-graph.html)",
    args: { name: "file", template: "filepaths" },
  },
  files: {
    name: "--files",
    description:
      "Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas or spaces",
    args: { name: "files" },
    exclusiveOn: ["--uncommitted", "--untracked", "--base", "--head"],
  },
  focus: {
    name: "--focus",
    description:
      "Use to show the project graph for a particular project and every node that is either an ancestor or a descendant",
    args: {
      name: "project",
      generators: nxGenerators.project,
    },
  },
  from: {
    name: "--from",
    description:
      'Use the provided versions for packages instead of the ones installed in node_modules (e.g., --from="@nx/react@16.0.0,@nx/js@16.0.0")',
    args: { name: "packages" },
  },
  graph: {
    name: "--graph",
    description:
      "Show the task graph of the command. Pass a file path to save the graph data instead of viewing it in the browser, or stdout to print the results to the terminal",
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
      suggestions: [
        { name: "stdout", description: "Print the results to the terminal" },
      ],
    },
  },
  groupByFolder: {
    name: "--groupByFolder",
    description: "Group projects by folder in the project graph",
  },
  head: {
    name: "--head",
    description: "Latest commit of the current branch (usually HEAD)",
    args: { name: "ref" },
    dependsOn: ["--base"],
    exclusiveOn: ["--files", "--stdin", "--uncommitted", "--untracked"],
  },
  host: {
    name: "--host",
    description: "Bind the project graph server to a specific ip address",
    args: { name: "host" },
  },
  ifExists: {
    name: "--ifExists",
    description:
      "Run migrations only if the migrations file exists, if not continues successfully",
  },
  interactive: {
    name: "--interactive",
    description: "When false disables interactive input prompts for options",
  },
  json: {
    name: "--json",
    description: "Output JSON",
  },
  libsAndApps: {
    name: "--libs-and-apps",
    description: "Format only libraries and applications files",
  },
  noInteractive: {
    name: "--no-interactive",
    description: "Disable interactive input prompts for options",
  },
  nxBail: {
    name: "--nxBail",
    description: "Stop command execution after the first failed task",
  },
  nxIgnoreCycles: {
    name: "--nxIgnoreCycles",
    description: "Ignore cycles in the task graph",
  },
  open: {
    name: "--open",
    description: "Open the project graph in the browser",
  },
  outputStyle: {
    name: "--outputStyle",
    description: "Defines how Nx emits outputs tasks logs",
    args: {
      name: "style",
      suggestions: [
        {
          name: "tui",
          description:
            "Nx Terminal UI, recommended for local development environments",
        },
        {
          name: "dynamic-legacy",
          description:
            "Overwrite previous content as new output is added, for terminals where tui is not supported",
        },
        { name: "dynamic" },
        {
          name: "static",
          description:
            "Print the full output of every task without rewriting previous content",
        },
        {
          name: "static-failures-only",
          description:
            "Like static, but successful and cached tasks collapse to a single line (default in CI)",
        },
        {
          name: "summary",
          description:
            "Print only run counts and one line per failing task (default when driven by an AI agent)",
        },
        {
          name: "stream",
          description: "Stream task logs to stdout and stderr",
        },
        {
          name: "stream-without-prefixes",
          description: "Stream task logs without the project name prefix",
        },
      ],
    },
  },
  parallel: {
    name: "--parallel",
    description: "Max number of parallel processes [default is 3]",
    args: { name: "parallel" },
  },
  port: {
    name: "--port",
    description: "Bind the project graph server to a specific port",
    args: { name: "port" },
  },
  project: {
    name: ["--project", "-p"],
    description: "Target project",
    args: {
      name: "project",
      generators: nxGenerators.project,
    },
  },
  projects: {
    name: ["--projects", "-p"],
    description:
      "Projects to run (comma/space delimited names and/or patterns)",
    args: {
      name: "projects",
      generators: nxGenerators.projects,
    },
  },
  runMigrations: {
    name: "--runMigrations",
    description:
      "Execute migrations from a file (when the file isn't provided, execute migrations from migrations.json)",
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
  runner: {
    name: "--runner",
    description: "This is the name of the tasks runner configured in nx.json",
    args: { name: "runner" },
  },
  skipNxCache: {
    name: ["--skipNxCache", "--disableNxCache"],
    description:
      "Rerun the tasks even when the results are available in the cache",
  },
  skipRemoteCache: {
    name: ["--skipRemoteCache", "--disableRemoteCache"],
    description: "Disables the remote cache",
  },
  skipSync: {
    name: "--skipSync",
    description: "Skips running the sync generators associated with the tasks",
  },
  start: {
    name: "--start",
    description: "Start the Nx Daemon process",
  },
  stdin: {
    name: "--stdin",
    description:
      "Change the way Nx is calculating the affected command by providing directly changed files from stdin, one file per line",
    exclusiveOn: ["--uncommitted", "--untracked", "--base", "--head"],
  },
  stop: {
    name: "--stop",
    description: "Stop the Nx Daemon process",
  },
  targets: {
    name: ["--targets", "--target", "-t"],
    description: "Tasks to run for the selected projects",
    args: {
      name: "targets",
      generators: nxGenerators.targets,
    },
  },
  to: {
    name: "--to",
    description:
      'Use the provided versions for packages instead of the ones calculated by the migrator (e.g., --to="@nx/react@16.0.0,@nx/js@16.0.0")',
    args: { name: "packages" },
  },
  tui: {
    name: "--tui",
    description: "Enable or disable the Nx Terminal UI",
  },
  tuiAutoExit: {
    name: "--tuiAutoExit",
    description:
      "Whether or not to exit the TUI automatically after all tasks finish, and after how long. A number shows an interruptible countdown popup for that many seconds",
    args: {
      name: "seconds",
      suggestions: [
        { name: "true", description: "Exit immediately" },
        { name: "false", description: "Never exit automatically" },
      ],
    },
  },
  type: {
    name: "--type",
    description: "Select only projects of the given type (e.g., --type=app)",
    args: {
      suggestions: [{ name: "app" }, { name: "lib" }, { name: "e2e" }],
    },
  },
  uncommitted: {
    name: "--uncommitted",
    description: "Uncommitted changes",
    exclusiveOn: ["--files", "--stdin", "--untracked", "--base", "--head"],
  },
  untracked: {
    name: "--untracked",
    description: "Untracked changes",
    exclusiveOn: ["--files", "--stdin", "--uncommitted", "--base", "--head"],
  },
  verbose: {
    name: "--verbose",
    description:
      "Prints additional information about the commands (e.g., stack traces)",
  },
  view: {
    name: "--view",
    description: "Choose whether to view the projects or task graph",
    args: {
      suggestions: [{ name: "projects" }, { name: "tasks" }],
      default: "projects",
    },
  },
  watch: {
    name: "--watch",
    description: "Watch for changes to project graph and update in-browser",
  },
};

/**
 * Options of the affected-style commands (affected, format, graph, release plan, show projects).
 * `impliesAffected` is for the commands where these options require `--affected`.
 */
const AFFECTED_IMPLIED_BY = [
  "--files",
  "--uncommitted",
  "--untracked",
  "--base",
  "--head",
];
const affectedOptions = (impliesAffected = false): Fig.Option[] =>
  [
    optionsDict.exclude,
    optionsDict.files,
    optionsDict.stdin,
    optionsDict.uncommitted,
    optionsDict.untracked,
    optionsDict.base,
    optionsDict.head,
  ].map((option) =>
    impliesAffected && AFFECTED_IMPLIED_BY.includes(option.name as string)
      ? { ...option, dependsOn: [...(option.dependsOn || []), "--affected"] }
      : option
  );

/**
 * Options shared by every command that runs tasks (run, run-many, affected, exec, release publish)
 * `--exclude` and `--verbose` are not part of the list, they are added where they are not provided already
 */
const runOptions: Fig.Option[] = [
  optionsDict.parallel,
  optionsDict.runner,
  optionsDict.graph,
  optionsDict.nxBail,
  optionsDict.nxIgnoreCycles,
  optionsDict.skipNxCache,
  optionsDict.skipRemoteCache,
  optionsDict.excludeTaskDependencies,
  optionsDict.skipSync,
];

const deprecatedAllOption: Fig.Option = {
  ...optionsDict.all,
  description:
    "Deprecated, run-many runs all targets on all projects in the workspace if no projects are provided",
  deprecated: true,
};

// --tui and --outputStyle exclude each other, for the commands that have both
const tuiOption: Fig.Option = {
  ...optionsDict.tui,
  exclusiveOn: ["--outputStyle"],
};
const outputStyleOption: Fig.Option = {
  ...optionsDict.outputStyle,
  exclusiveOn: ["--tui"],
};

// options of `nx run` and of the `nx <target> <project>` form
const runOneOptions: Fig.Option[] = [
  optionsDict.exclude,
  optionsDict.verbose,
  ...runOptions,
  tuiOption,
  optionsDict.tuiAutoExit,
  outputStyleOption,
  optionsDict.configuration,
  optionsDict.batch,
  optionsDict.project,
  {
    name: ["--target", "-t"],
    description:
      "Target to run. Useful when the target name contains a colon, which conflicts with the positional project:target:configuration form",
    args: { name: "target" },
  },
];

const RUN_DERIVED_BASE_TARGETS = ["build", "e2e", "lint", "serve", "test"];
/**
 * These subcommands are derived from run - https://nx.dev/reference/core-api/nx/documents/run
 * e.g. `nx run project:target:configuration` === `nx target project -c configuration`
 */
const runDerivedSubcommands = async (
  _: string[],
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<Fig.Spec> => {
  const subcommands: Fig.Subcommand[] = [];

  // pre process projects
  await preProcessProjects(executeShellCommand);

  // iterate all targets
  for (const [target, projects] of nxTargetWithProjectsCache) {
    subcommands.push({
      name: target,
      description: `${target} target`,
      icon: RUN_DERIVED_BASE_TARGETS.includes(target)
        ? "fig://icon?type=command"
        : "fig://icon?type=asterisk",
      args: {
        name: "project",
        suggestions: projects.map((project) => ({ name: project })),
      },
      options: runOneOptions,
    });
  }

  return {
    name: "nx",
    subcommands,
  };
};

// nx release
const releaseFirstReleaseOption: Fig.Option = {
  name: "--first-release",
  description:
    "Indicates that this is the first release for the selected release group, the version on disk is used when the current version cannot be determined as usual",
};

const releaseOtpOption: Fig.Option = {
  name: "--otp",
  description:
    "A one-time password for publishing to a registry that requires 2FA",
  args: { name: "otp" },
};

const releasePreidOption: Fig.Option = {
  name: "--preid",
  description:
    "The optional prerelease identifier to apply to the version, only applied when the specifier is prerelease or when conventional commits are enabled",
  args: { name: "preid" },
};

const releaseDockerOptions: Fig.Option[] = [
  {
    name: "--dockerVersionScheme",
    description:
      "Exact docker version scheme to apply to the selected release group. Docker support is experimental",
    args: { name: "scheme" },
    exclusiveOn: ["--dockerVersion"],
  },
  {
    name: "--dockerVersion",
    description:
      "Exact docker version to use, bypassing the version scheme logic. Docker support is experimental",
    args: { name: "version" },
    exclusiveOn: ["--dockerVersionScheme"],
  },
];

const releaseGitOptions: Fig.Option[] = [
  {
    name: "--git-commit",
    description:
      "Whether or not to automatically commit the changes made by this command",
  },
  {
    name: "--git-commit-message",
    description:
      "Custom git commit message to use when committing the changes made by this command. {version} is interpolated for fixed releases, interpolated tags are appended to the commit body for independent releases",
    args: { name: "message" },
  },
  {
    name: "--git-commit-args",
    description:
      "Additional arguments to pass to the `git commit` command invoked behind the scenes",
    args: { name: "args" },
  },
  {
    name: "--git-tag",
    description:
      "Whether or not to automatically tag the changes made by this command",
  },
  {
    name: "--git-tag-message",
    description:
      "Custom git tag message to use when tagging the changes made by this command, defaults to the tag itself",
    args: { name: "message" },
  },
  {
    name: "--git-tag-args",
    description:
      "Additional arguments to pass to the `git tag` command invoked behind the scenes",
    args: { name: "args" },
  },
  {
    name: "--stage-changes",
    description:
      "Whether or not to stage the changes made by this command. Always treated as true if git-commit is true",
  },
  {
    name: "--git-push",
    description:
      "Whether or not to automatically push the changes made by this command to the remote git repository",
  },
  {
    name: "--git-push-args",
    description:
      "Additional arguments to pass to the `git push` command invoked behind the scenes",
    args: { name: "args" },
  },
  {
    name: "--git-remote",
    description:
      "Alternate git remote to push commits and tags to (can be useful for testing)",
    args: { name: "remote", default: "origin" },
  },
];

const releaseSemverKeywords: Fig.Suggestion[] = [
  { name: "major" },
  { name: "premajor" },
  { name: "minor" },
  { name: "preminor" },
  { name: "patch" },
  { name: "prepatch" },
  { name: "prerelease" },
];

const releaseSpecifierArg: Fig.Arg = {
  name: "specifier",
  description:
    "Exact version or semver keyword to apply to the selected release group",
  suggestions: releaseSemverKeywords,
  isOptional: true,
};

const shellCompletionShells: Fig.Suggestion[] = [
  { name: "bash" },
  { name: "zsh" },
  { name: "fish" },
  { name: "powershell" },
];

// first-party plugins that `nx add` can install, same set `nx list` shows as available
const corePlugins: Fig.Suggestion[] = [
  "@nx/angular",
  "@nx/cypress",
  "@nx/detox",
  "@nx/esbuild",
  "@nx/eslint",
  "@nx/expo",
  "@nx/express",
  "@nx/gradle",
  "@nx/jest",
  "@nx/js",
  "@nx/nest",
  "@nx/next",
  "@nx/node",
  "@nx/nuxt",
  "@nx/oxlint",
  "@nx/plugin",
  "@nx/react",
  "@nx/react-native",
  "@nx/remix",
  "@nx/rolldown",
  "@nx/rollup",
  "@nx/rspack",
  "@nx/storybook",
  "@nx/vite",
  "@nx/vue",
  "@nx/web",
  "@nx/webpack",
  "@nx/workspace",
].map((name) => ({ name }));

const aiAgents = ["claude", "codex", "copilot", "cursor", "gemini", "opencode"];

const formatOptions: Fig.Option[] = [
  ...affectedOptions(),
  optionsDict.libsAndApps,
  {
    ...optionsDict.projects,
    description: "Projects to format (comma/space delimited)",
    exclusiveOn: ["--all"],
  },
  {
    name: "--sort-root-tsconfig-paths",
    description:
      "Ensure the workspace's tsconfig compilerOptions.paths are sorted. Warning: this will cause comments in the tsconfig to be lost",
  },
  {
    ...optionsDict.all,
    description: "Format all projects",
    exclusiveOn: ["--projects", "-p"],
  },
];

// aliases of `nx-cloud` commands, the arguments are handled by the nx-cloud client
const nxCloudAliasSubcommand = (
  name: string | string[],
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [optionsDict.verbose],
});

const completionSpec: Fig.Spec = {
  name: "nx",
  description: "Smart monorepos, fast builds (Nx by Nrwl)",
  generateSpec: runDerivedSubcommands,
  options: [
    {
      name: "--help",
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the local and global Nx versions",
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Install a plugin and initialize it",
      args: {
        name: "packageSpecifier",
        description:
          "The package name and optional version (e.g. @nx/react or @nx/react@latest) to install and initialize",
        suggestions: corePlugins,
      },
      options: [
        optionsDict.verbose,
        {
          name: "--updatePackageScripts",
          description:
            "Update package.json scripts with inferred targets. Defaults to true when the package is a core Nx plugin",
        },
      ],
    },
    {
      name: "affected",
      description:
        "Run target for affected projects. Affected projects are projects that have been changed and projects that depend on the changed projects",
      options: [
        ...affectedOptions(),
        optionsDict.verbose,
        ...runOptions,
        tuiOption,
        optionsDict.tuiAutoExit,
        outputStyleOption,
        optionsDict.configuration,
        { ...optionsDict.targets, isRequired: true },
        optionsDict.batch,
        optionsDict.explain,
      ],
    },
    {
      name: "apply-locally",
      description: "Applies a self-healing CI fix locally",
      options: [optionsDict.verbose],
    },
    {
      name: "completion",
      description:
        "Install shell completion for bash, zsh, fish, or powershell. Omit the shell to pick interactively",
      args: {
        name: "shell",
        description: "Shell to install completion for",
        suggestions: shellCompletionShells,
        isOptional: true,
      },
      options: [
        {
          name: "--force",
          description:
            "Install the completion script even if nx is not found on PATH",
        },
        {
          name: "--stdout",
          description:
            "Print the completion script to stdout instead of writing to the shell rc file",
        },
      ],
    },
    {
      name: "configure-ai-agents",
      description:
        "Configure and update AI agent configurations for your workspace",
      options: [
        {
          name: "--agents",
          description: "List of AI agents to set up",
          args: {
            name: "agents",
            isVariadic: true,
            suggestions: aiAgents,
          },
        },
        {
          name: "--check",
          description:
            "Check agent configurations without making any changes. Without a value only configured agents are checked, all also includes unconfigured and partial configurations",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "outdated",
                description: "Check only configured agents",
              },
              {
                name: "all",
                description: "Include unconfigured and partial configurations",
              },
            ],
          },
        },
        optionsDict.interactive,
        optionsDict.noInteractive,
        optionsDict.verbose,
      ],
    },
    {
      name: ["connect", "connect-to-nx-cloud"],
      description: "Connect workspace to Nx Cloud",
      options: [
        {
          name: "--generateToken",
          description:
            "Explicitly asks for a token to be created, do not override existing tokens from Nx Cloud",
        },
        optionsDict.verbose,
      ],
    },
    {
      name: "daemon",
      description:
        "Prints information about the Nx Daemon process or starts a daemon process",
      options: [optionsDict.start, optionsDict.stop, optionsDict.verbose],
    },
    nxCloudAliasSubcommand(
      "download-cloud-client",
      "Download the Nx Cloud client"
    ),
    {
      name: "exec",
      description: "Executes any command as if it was a target on the project",
      options: [
        optionsDict.exclude,
        optionsDict.verbose,
        ...runOptions,
        optionsDict.tui,
        optionsDict.tuiAutoExit,
        optionsDict.projects,
        deprecatedAllOption,
      ],
    },
    nxCloudAliasSubcommand("fix-ci", "Fixes CI failures"),
    {
      name: "format:check",
      description: "Check for un-formatted files",
      options: formatOptions,
    },
    {
      name: ["format:write", "format"],
      description: "Overwrite un-formatted files",
      options: formatOptions,
    },
    {
      name: ["generate", "g"],
      description:
        "Generate or update source code (e.g., nx generate @nx/js:lib mylib)",
      args: {
        name: "collection:generator",
        description: "Name of the generator (e.g., @nx/js:library, library)",
        generators: nxGenerators.generate,
      },
      options: [
        optionsDict.dryRun,
        optionsDict.interactive,
        optionsDict.noInteractive,
        {
          name: "--quiet",
          description:
            "Hides logs from tree operations (e.g. CREATE package.json)",
          exclusiveOn: ["--verbose"],
        },
        optionsDict.verbose,
      ],
    },
    {
      name: ["graph", "dep-graph"],
      description: "Graph dependencies within workspace",
      options: [
        ...affectedOptions(true),
        optionsDict.verbose,
        optionsDict.affected,
        optionsDict.file,
        {
          name: "--print",
          description: "Print the project graph to stdout in the terminal",
        },
        optionsDict.view,
        {
          ...optionsDict.targets,
          name: "--targets",
          description: "The target to show tasks for in the task graph",
        },
        optionsDict.focus,
        optionsDict.groupByFolder,
        optionsDict.host,
        optionsDict.port,
        optionsDict.watch,
        {
          name: "--no-watch",
          description: "Do not watch for changes to the project graph",
        },
        optionsDict.open,
        {
          name: "--no-open",
          description: "Do not open the project graph in the browser",
        },
      ],
    },
    {
      name: "import",
      description:
        "Import code and git history from another repository into this repository",
      args: [
        {
          name: "sourceRepository",
          description:
            "The remote URL or local path of the source repository to import",
          isOptional: true,
        },
        {
          name: "destinationDirectory",
          description: "The directory in the current workspace to import into",
          template: "folders",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--sourceDirectory", "--source"],
          description: "The directory in the source repository to import from",
          args: { name: "directory" },
        },
        {
          name: "--ref",
          description: "The branch from the source repository to import",
          args: { name: "branch" },
        },
        {
          name: "--depth",
          description:
            "The depth to clone the source repository (limit this for faster git clone)",
          args: { name: "depth" },
        },
        {
          name: "--plugins",
          description:
            'Plugins to install after import: "skip" for none, "all" for all detected, or a comma-separated list (e.g., @nx/vite,@nx/jest)',
          args: {
            name: "plugins",
            suggestions: [
              { name: "skip", description: "Install no plugins" },
              { name: "all", description: "Install all detected plugins" },
            ],
          },
        },
        optionsDict.interactive,
        optionsDict.noInteractive,
        optionsDict.verbose,
      ],
    },
    {
      name: "init",
      description:
        "Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up remote caching",
      options: [
        {
          name: "--nxCloud",
          description: "Set up distributed caching with Nx Cloud",
        },
        optionsDict.interactive,
        optionsDict.noInteractive,
        {
          name: "--useDotNxInstallation",
          description:
            "Initialize an Nx workspace setup in the .nx directory of the current repository",
        },
        {
          name: "--aiAgents",
          description: 'List of AI agents to set up. Use "none" to skip',
          args: {
            name: "agents",
            isVariadic: true,
            suggestions: [...aiAgents, "none"],
          },
        },
        {
          name: "--plugins",
          description:
            'Plugins to install: "skip" for none, "all" for all detected, or a comma-separated list (e.g., @nx/vite,@nx/jest)',
          args: {
            name: "plugins",
            suggestions: [
              { name: "skip", description: "Install no plugins" },
              { name: "all", description: "Install all detected plugins" },
            ],
          },
        },
        {
          name: "--cacheable",
          description:
            "Comma-separated list of cacheable operations (e.g., build,test,lint)",
          args: { name: "operations" },
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists installed plugins, capabilities of installed plugins and other available plugins",
      args: {
        name: "plugin",
        description: "The name of an installed plugin to query",
        generators: nxGenerators.list,
        isOptional: true,
      },
      options: [optionsDict.json],
    },
    nxCloudAliasSubcommand(
      "login",
      "Login to Nx Cloud. Takes an optional Nx Cloud URL"
    ),
    {
      name: "logout",
      description:
        "Logout from Nx Cloud. Takes an optional URL of the Nx Cloud instance to log out of",
      options: [
        {
          name: "--all",
          description:
            "Log out of every Nx Cloud instance stored on this machine",
        },
        optionsDict.verbose,
      ],
    },
    {
      name: "mcp",
      description:
        "Starts the Nx MCP server, the arguments are passed on to nx-mcp",
    },
    {
      name: "migrate",
      description:
        "Creates a migrations file or runs migrations from the migrations file",
      args: {
        name: "packageAndVersion",
        description:
          "The target package and version (e.g, @nx/workspace@16.0.0)",
        suggestions: [{ name: "latest" }, { name: "next" }],
        isOptional: true,
      },
      options: [
        optionsDict.commitPrefix,
        optionsDict.createCommits,
        {
          name: "--no-create-commits",
          description: "Do not create a git commit after each migration runs",
        },
        optionsDict.excludeAppliedMigrations,
        optionsDict.from,
        optionsDict.ifExists,
        {
          ...optionsDict.interactive,
          description:
            "Enable confirmation prompts for collecting optional package updates and migrations. Deprecated for package updates, use --include instead",
          deprecated: true,
        },
        optionsDict.noInteractive,
        optionsDict.runMigrations,
        {
          name: "--runMigration",
          description:
            "Run a single migration from migrations.json by id, in the form <package>:<name> (a bare <name> is accepted when it matches exactly one migration)",
          args: { name: "id" },
        },
        {
          name: "--runId",
          description:
            "The id of a migrate run, as nx prints it. With --run-migrations continues that run, an AI agent driving a run also passes it with --run-migration",
          args: { name: "id" },
        },
        {
          name: "--startFresh",
          description:
            "With --run-migrations and --run-id: delete the record of the active migrate run and run the whole plan again. Migrations the deleted run applied stay applied",
        },
        optionsDict.to,
        {
          name: "--skipInstall",
          description:
            "Skip installing packages before running migrations. Useful when the installation needs to be performed manually",
        },
        {
          name: "--include",
          description:
            "Restrict which packages to migrate. Only applies when the target package supports optional updates",
          args: {
            name: "include",
            suggestions: [
              {
                name: "required",
                description:
                  "Only the target package and the related packages it ships with",
              },
              {
                name: "optional",
                description:
                  "Only the optional dependency updates those packages recommend",
              },
              { name: "all", description: "Everything" },
            ],
          },
        },
        {
          name: "--multiMajorMode",
          description:
            "Skip the multi-major migration prompt and pick how to handle the jump",
          args: {
            name: "mode",
            suggestions: [
              {
                name: "direct",
                description: "Migrate straight to the requested target",
              },
              {
                name: "gradual",
                description:
                  "Migrate to the smallest recommended step, re-run nx migrate to continue",
              },
            ],
          },
        },
        {
          name: "--agentic",
          description:
            "Use an AI agent to apply prompt-based migrations and review the results. Pass an agent to pin a specific one, or false to disable it",
          args: {
            name: "agent",
            isOptional: true,
            suggestions: [
              { name: "claude-code" },
              { name: "codex" },
              { name: "opencode" },
              { name: "true" },
              { name: "false" },
            ],
          },
        },
        {
          name: "--no-agentic",
          description: "Do not use an AI agent to apply migrations",
        },
        {
          name: "--validate",
          description:
            "Have the AI agent driving the run review the changes of generator-only migrations (on by default)",
        },
        {
          name: "--no-validate",
          description:
            "Do not have the AI agent review the changes of generator-only migrations",
        },
        {
          name: "--finalValidation",
          description:
            "With --run-migrations, have the AI agent check that the touched projects still lint, build, and pass their unit tests once every migration has run (on by default)",
        },
        {
          name: "--no-final-validation",
          description: "Skip the final validation by the AI agent",
        },
        optionsDict.verbose,
      ],
    },
    nxCloudAliasSubcommand(
      "record",
      "Records a command execution for distributed task execution"
    ),
    {
      name: "release",
      description:
        "Orchestrate versioning and publishing of applications and libraries",
      args: releaseSpecifierArg,
      options: [
        {
          name: ["--groups", "--group", "-g"],
          description:
            "One or more release groups to target with the current command (comma delimited)",
          args: { name: "groups" },
          exclusiveOn: ["--projects", "-p"],
          isPersistent: true,
        },
        {
          name: ["--projects", "-p"],
          description:
            "Projects to run (comma/space delimited project names and/or patterns)",
          args: {
            name: "projects",
            generators: nxGenerators.projects,
          },
          exclusiveOn: ["--groups", "--group", "-g"],
          isPersistent: true,
        },
        {
          name: ["--dry-run", "-d"],
          description:
            "Preview the changes without updating files/creating releases",
          isPersistent: true,
        },
        {
          name: "--printConfig",
          description:
            "Print the resolved nx release configuration that would be used for the current command and then exit",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "debug",
                description:
                  "Also print the low level resolved configuration used internally",
              },
            ],
          },
          isPersistent: true,
        },
        { ...optionsDict.verbose, isPersistent: true },
        releasePreidOption,
        {
          name: ["--yes", "-y"],
          description:
            "Automatically answer yes to the confirmation prompt for publishing",
          exclusiveOn: ["--skip-publish"],
        },
        {
          name: "--skip-publish",
          description:
            "Skip publishing by automatically answering no to the confirmation prompt for publishing",
          exclusiveOn: ["--yes", "-y"],
        },
        releaseOtpOption,
        releaseFirstReleaseOption,
        ...releaseDockerOptions,
      ],
      subcommands: [
        {
          name: ["version", "v"],
          description:
            "Create a version and release for one or more applications and libraries",
          args: releaseSpecifierArg,
          options: [
            releasePreidOption,
            ...releaseGitOptions,
            releaseFirstReleaseOption,
            ...releaseDockerOptions,
          ],
        },
        {
          name: ["changelog", "c"],
          description:
            "Generate a changelog for one or more projects, and optionally push to Github",
          args: {
            name: "version",
            description:
              "The version to create a Github release and changelog for",
          },
          options: [
            {
              name: "--from",
              description:
                "The git reference to use as the start of the changelog. If not set it will attempt to resolve the latest tag and use that",
              args: { name: "ref" },
            },
            {
              name: "--to",
              description:
                "The git reference to use as the end of the changelog",
              args: { name: "ref", default: "HEAD" },
            },
            {
              name: ["--interactive", "-i"],
              description:
                "Interactively modify changelog markdown contents in your code editor before applying the changes",
              args: {
                name: "scope",
                suggestions: [
                  { name: "all", description: "All changelogs" },
                  {
                    name: "workspace",
                    description: "Only the workspace level",
                  },
                  { name: "projects", description: "Only the project level" },
                ],
              },
            },
            {
              name: "--replace-existing-contents",
              description:
                "Whether to overwrite the existing changelog contents instead of prepending to them",
            },
            {
              name: "--resolve-version-plans",
              description:
                "How to resolve version plans for changelog generation, defaults to resolving all version plan files available on disk",
              args: {
                name: "mode",
                default: "all",
                suggestions: [{ name: "all" }, { name: "using-from-and-to" }],
              },
            },
            ...releaseGitOptions,
            releaseFirstReleaseOption,
          ],
        },
        {
          name: ["publish", "p"],
          description: "Publish a versioned project to a registry",
          options: [
            optionsDict.exclude,
            ...runOptions,
            optionsDict.outputStyle,
            {
              name: "--registry",
              description: "The registry to publish to",
              args: { name: "registry" },
            },
            {
              name: "--tag",
              description:
                "The distribution tag to apply to the published package",
              args: { name: "tag" },
            },
            {
              name: "--access",
              description:
                "Overrides the access level of the published package. Unscoped packages cannot be set to restricted",
              args: {
                name: "access",
                suggestions: [{ name: "public" }, { name: "restricted" }],
              },
            },
            releaseOtpOption,
            releaseFirstReleaseOption,
          ],
        },
        {
          name: ["plan", "pl"],
          description:
            "Create a version plan file to specify the desired semver bump for one or more projects or groups, as well as the relevant changelog entry",
          args: {
            name: "bump",
            description: "Semver keyword to use for the selected release group",
            suggestions: releaseSemverKeywords,
            isOptional: true,
          },
          options: [
            ...affectedOptions(),
            {
              name: ["--message", "-m"],
              description: "Custom message to use for the changelog entry",
              args: { name: "message" },
            },
            {
              name: "--onlyTouched",
              description:
                "Only include projects that have been affected by the current changes (default: true)",
            },
          ],
        },
        {
          name: "plan:check",
          description:
            "Ensure that all touched projects have an applicable version plan created for them",
          options: affectedOptions(),
        },
      ],
    },
    {
      name: "repair",
      description: "Repair any configuration that is no longer supported by Nx",
      options: [optionsDict.verbose],
    },
    {
      name: "report",
      description:
        "Reports useful version numbers to copy into the Nx issue template",
    },
    {
      name: ["reset", "clear-cache"],
      description:
        "Clears cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon",
      options: [
        {
          name: "--onlyCache",
          description:
            "Clears the Nx cache directory. This will remove all local cache entries for tasks, but will not affect the remote cache",
        },
        {
          name: "--onlyDaemon",
          description:
            "Stops the Nx Daemon and clears its workspace data, it will be restarted fresh when the next Nx command is run",
        },
        {
          name: "--onlyCloud",
          description:
            "Resets the Nx Cloud client. Does not clear the remote cache",
        },
        {
          name: "--onlyWorkspaceData",
          description:
            "Clears the workspace data directory, used by Nx to store cached data about the current workspace",
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a target for a project (e.g., nx run myapp:serve:production). The infix notation also works (e.g., nx serve myapp --configuration=production)",
      args: {
        name: "project:target[:configuration]",
        generators: nxGenerators.run,
      },
      options: runOneOptions,
    },
    {
      name: "run-many",
      description: "Run target for multiple listed projects",
      options: [
        optionsDict.exclude,
        optionsDict.verbose,
        ...runOptions,
        tuiOption,
        optionsDict.tuiAutoExit,
        outputStyleOption,
        optionsDict.configuration,
        { ...optionsDict.targets, isRequired: true },
        optionsDict.batch,
        optionsDict.projects,
        deprecatedAllOption,
      ],
    },
    {
      name: "show",
      description:
        "Show information about the workspace (e.g., list of projects)",
      options: [{ ...optionsDict.json, isPersistent: true }],
      subcommands: [
        {
          name: "projects",
          description: "Show a list of projects in the workspace",
          options: [
            ...affectedOptions(true),
            optionsDict.verbose,
            optionsDict.explain,
            {
              ...optionsDict.affected,
              description: "Show only affected projects",
            },
            {
              ...optionsDict.projects,
              description: "Show only projects that match a given pattern",
            },
            {
              name: ["--withTarget", "-t"],
              description: "Show only projects that have a specific target",
              args: {
                name: "targets",
                generators: nxGenerators.targets,
              },
            },
            optionsDict.type,
            {
              name: "--sep",
              description: "Outputs projects with the specified seperator",
              args: { name: "separator" },
              exclusiveOn: ["--json"],
            },
          ],
        },
        {
          name: "project",
          description:
            "Shows resolved project configuration for a given project. If run within a project directory and no project name is provided, the project is inferred from the current working directory",
          args: {
            name: "projectName",
            description:
              "The project to show. If not provided, infers the project from the current working directory",
            generators: nxGenerators.project,
            isOptional: true,
          },
          options: [
            optionsDict.verbose,
            {
              name: "--web",
              description:
                "Show project details in the browser (default when interactive)",
            },
            {
              name: "--open",
              description:
                "Set to false to prevent the browser from opening when using --web",
              dependsOn: ["--web"],
            },
          ],
        },
        {
          name: "target",
          description:
            "Shows resolved target configuration for a given project target. Use subcommands to inspect inputs or outputs",
          args: [
            {
              name: "target",
              description:
                "The target to inspect, in the format project:target or just target",
              generators: nxGenerators.projectTarget,
              isOptional: true,
            },
            {
              name: "subcommand",
              description: "Show the inputs or outputs of the target",
              suggestions: [{ name: "inputs" }, { name: "outputs" }],
              isOptional: true,
            },
          ],
          options: [
            optionsDict.verbose,
            {
              name: ["--configuration", "-c"],
              description: "The configuration to inspect",
              args: { name: "configuration" },
            },
            {
              name: "--check",
              description:
                "Checks whether a set of values are or are not an input/output for the target",
              args: { name: "values", isVariadic: true },
              exclusiveOn: ["--json"],
            },
          ],
          subcommands: [
            {
              name: "inputs",
              description: "List resolved input files for a target",
              args: {
                name: "target",
                description:
                  "The target to inspect, in the format project:target or just target",
                generators: nxGenerators.projectTarget,
                isOptional: true,
              },
              options: [
                optionsDict.verbose,
                {
                  name: "--check",
                  description:
                    "Check whether a set of values are an input for the target. Accepts a file path, environment variable name, runtime command, or external dependency",
                  args: { name: "values", isVariadic: true },
                  exclusiveOn: ["--json"],
                },
              ],
            },
            {
              name: "outputs",
              description: "List resolved output paths for a target",
              args: {
                name: "target",
                description:
                  "The target to inspect, in the format project:target or just target",
                generators: nxGenerators.projectTarget,
                isOptional: true,
              },
              options: [
                optionsDict.verbose,
                {
                  name: ["--configuration", "-c"],
                  description: "The configuration to inspect",
                  args: { name: "configuration" },
                },
                {
                  name: "--check",
                  description:
                    "Check whether a set of files is an output for the target. Accepts a workspace-relative path",
                  args: {
                    name: "paths",
                    isVariadic: true,
                    template: "filepaths",
                  },
                  exclusiveOn: ["--json"],
                },
              ],
            },
          ],
        },
      ],
    },
    nxCloudAliasSubcommand(
      "start-agent",
      "Starts a new agent for distributed task execution"
    ),
    nxCloudAliasSubcommand(
      "start-ci-run",
      "Starts a new CI run for distributed task execution"
    ),
    nxCloudAliasSubcommand(
      "start-nx-agents",
      "Starts workers for distributed task execution, reading configuration from .nx/pipelines/ci.yaml"
    ),
    nxCloudAliasSubcommand(
      ["stop-all-agents", "complete-ci-run"],
      "Terminates all dedicated agents associated with this CI pipeline execution"
    ),
    {
      name: "sync",
      description:
        "Sync the workspace files by running all the sync generators",
      options: [optionsDict.verbose],
    },
    {
      name: "sync:check",
      description:
        "Check that no changes are required after running all sync generators",
      options: [optionsDict.verbose],
    },
    {
      name: "view-logs",
      description:
        "Enables you to view and interact with the logs via the advanced analytic UI from Nx Cloud to help you debug your issue. To do this, Nx needs to connect your workspace to Nx Cloud and upload the most recent run details. Only the metrics are uploaded, not the artefacts",
    },
    {
      name: "watch",
      description: "Watch for changes within projects, and execute commands",
      options: [
        {
          ...optionsDict.projects,
          description: "Projects to watch (comma/space delimited)",
          exclusiveOn: ["--all"],
        },
        {
          ...optionsDict.all,
          description: "Watch all projects",
          exclusiveOn: ["--projects", "-p"],
        },
        {
          name: ["--includeDependencies", "-d"],
          description:
            "When watching selected projects, also include the projects they depend on",
        },
        {
          name: ["--initialRun", "-i"],
          description: "Run the command once before watching for changes",
        },
        {
          ...optionsDict.verbose,
          description:
            "Run watch mode in verbose mode, where commands are logged before execution",
        },
      ],
    },
  ],
};

export default completionSpec;
