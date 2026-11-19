// npm-check-updates v23.1.1 (GitHub release, 2026-11-19). Source: src/cli-options.ts
// and src/bin/cli.ts at v23.1.1
interface NcuOptions {
  cache: Fig.Option;
  cacheClear: Fig.Option;
  cacheExpiration: Fig.Option;
  cacheFile: Fig.Option;
  color: Fig.Option;
  concurrency: Fig.Option;
  configFileName: Fig.Option;
  configFilePath: Fig.Option;
  cooldown: Fig.Option;
  cwd: Fig.Option;
  deep: Fig.Option;
  dep: Fig.Option;
  deprecated: Fig.Option;
  noDeprecated: Fig.Option;
  doctor: Fig.Option;
  doctorInstall: Fig.Option;
  doctorTest: Fig.Option;
  enginesNode: Fig.Option;
  errorLevel: Fig.Option;
  filter: Fig.Option;
  filterVersion: Fig.Option;
  format: Fig.Option;
  global: Fig.Option;
  help: Fig.Option;
  install: Fig.Option;
  interactive: Fig.Option;
  interactiveSelect: Fig.Option;
  jsonAll: Fig.Option;
  jsonDeps: Fig.Option;
  jsonUpgraded: Fig.Option;
  loglevel: Fig.Option;
  mergeConfig: Fig.Option;
  minimal: Fig.Option;
  packageData: Fig.Option;
  packageFile: Fig.Option;
  packageManager: Fig.Option;
  peer: Fig.Option;
  pre: Fig.Option;
  prefix: Fig.Option;
  registry: Fig.Option;
  registryType: Fig.Option;
  reject: Fig.Option;
  rejectVersion: Fig.Option;
  removeRange: Fig.Option;
  retry: Fig.Option;
  root: Fig.Option;
  noRoot: Fig.Option;
  silent: Fig.Option;
  stdin: Fig.Option;
  target: Fig.Option;
  timeout: Fig.Option;
  upgrade: Fig.Option;
  verbose: Fig.Option;
  version: Fig.Option;
  workspace: Fig.Option;
  workspaces: Fig.Option;
}

const optionsDict: NcuOptions = {
  cache: {
    name: "--cache",
    description:
      "Cache versions to a local cache file. Default --cacheFile is ~/.ncu-cache.json and default --cacheExpiration is 10 minutes",
  },
  cacheClear: {
    name: "--cacheClear",
    description:
      "Clear the default cache, or the cache file specified by --cacheFile",
  },
  cacheExpiration: {
    name: "--cacheExpiration",
    dependsOn: ["--cache"],
    description:
      "Cache expiration in minutes. Only works with --cache. (default: 10)",
    args: {
      name: "min",
      default: "10",
    },
  },
  cacheFile: {
    name: "--cacheFile",
    dependsOn: ["--cache"],
    description:
      'Filepath for the cache file. Only works with --cache. (default: "~/.ncu-cache.json")',
    args: {
      name: "path",
      template: "filepaths",
      default: "~/.ncu-cache.json",
    },
  },
  color: {
    name: "--color",
    description: "Force color in terminal",
  },
  concurrency: {
    name: "--concurrency",
    description:
      "Max number of concurrent HTTP requests to registry. (default: 8)",
    args: {
      name: "n",
      default: "8",
    },
  },
  configFileName: {
    name: "--configFileName",
    description:
      "Config file name. (default: .ncurc or .ncurc.{json,yaml,yml,js,mjs,cjs})",
    args: {
      name: "s",
      template: "filepaths",
      default: ".ncurc",
    },
  },
  configFilePath: {
    name: "--configFilePath",
    description:
      "Directory of .ncurc config file. (default: directory of packageFile)",
    args: {
      name: "path",
      template: "folders",
      default: "directory of packageFile",
    },
  },
  cooldown: {
    name: ["--cooldown", "-c"],
    description:
      'Minimum age for package versions to be considered for upgrade: a number (days) or a string with a unit ("7d", "12h", "30m"). Run "ncu --help --cooldown" for details',
    args: {
      name: "period",
      suggestions: ["7d", "12h", "30m"],
    },
  },
  cwd: {
    name: "--cwd",
    description: "Working directory in which npm will be executed",
    args: {
      name: "path",
      template: "folders",
    },
  },
  deep: {
    name: "--deep",
    description:
      "Run recursively in current working directory. Alias of (--packageFile '**/package.json')",
  },
  dep: {
    name: "--dep",
    description:
      'Check one or more sections of dependencies only: dev, optional, peer, prod, packageManager, or devEngines (comma-delimited). (default: ["prod","dev","optional","packageManager"])',
    args: {
      name: "value",
      suggestions: [
        "dev",
        "optional",
        "peer",
        "prod",
        "packageManager",
        "devEngines",
      ],
      default: "prod,dev,optional,packageManager",
    },
  },
  deprecated: {
    name: "--deprecated",
    description: "Include deprecated packages. (default: true)",
  },
  noDeprecated: {
    name: "--no-deprecated",
    description: "Exclude deprecated packages",
  },
  doctor: {
    name: ["--doctor", "-d"],
    description:
      'Iteratively installs upgrades and runs tests to identify breaking upgrades. Requires -u to execute. Run "ncu --help --doctor" for details',
  },
  doctorInstall: {
    name: "--doctorInstall",
    description:
      "Specifies the install script to use in doctor mode. (default: npm install or the equivalent for your package manager)",
    args: {
      name: "command",
      default: "npm install",
    },
  },
  doctorTest: {
    name: "--doctorTest",
    description:
      "Specifies the test script to use in doctor mode. (default: npm test)",
    args: {
      name: "command",
      default: "npm test",
    },
  },
  enginesNode: {
    name: "--enginesNode",
    description:
      "Include only packages that satisfy engines.node as specified in the package file",
  },
  errorLevel: {
    name: ["--errorLevel", "-e"],
    description:
      "Set the error level. 1: exits with error code 0 if no errors occur. 2: exits with error code 0 if no packages need updating (useful for continuous integration). (default: 1)",
    args: {
      name: "n",
      default: "1",
    },
  },
  filter: {
    name: ["--filter", "-f"],
    description:
      "Include only package names matching the given string, wildcard, glob, comma-or-space-delimited list, /regex/, or predicate function",
    isRepeatable: true,
    args: {
      name: "p",
    },
  },
  filterVersion: {
    name: "--filterVersion",
    description:
      "Filter on package version using comma-or-space-delimited list or /regex/",
    isRepeatable: true,
    args: {
      name: "p",
    },
  },
  format: {
    name: "--format",
    description:
      'Modify the output formatting or show additional information. Specify one or more comma-delimited values: dep, group, ownerChanged, repo, time, lines, installedVersion, cooldown. Use "no-group" to disable the default group. Run "ncu --help --format" for details. (default: ["group"])',
    args: {
      name: "value",
      suggestions: [
        "dep",
        "group",
        "homepage",
        "ownerChanged",
        "repo",
        "diff",
        "time",
        "lines",
        "installedVersion",
        "cooldown",
        "no-group",
      ],
      default: "group",
    },
  },
  global: {
    name: ["--global", "-g"],
    description: "Check global packages instead of in the current project",
  },
  help: {
    name: ["--help", "-h"],
    description: "Show help",
  },
  install: {
    name: "--install",
    description:
      'Control the auto-install behavior: always, never, prompt. Run "ncu --help --install" for details. (default: "prompt")',
    args: {
      name: "value",
      suggestions: ["always", "never", "prompt"],
      default: "prompt",
    },
  },
  interactive: {
    name: ["--interactive", "-i"],
    description:
      "Enable interactive prompts for each dependency; implies -u unless one of the json options are set",
  },
  interactiveSelect: {
    name: "--interactiveSelect",
    dependsOn: ["--interactive"],
    description:
      'Control which upgrades are pre-selected in interactive mode: auto, none, patch, minor, all. Only applies with --interactive. (default: "auto")',
    args: {
      name: "value",
      suggestions: ["auto", "none", "patch", "minor", "all"],
      default: "auto",
    },
  },
  jsonAll: {
    name: ["--jsonAll", "-j"],
    description: "Output new package file instead of human-readable message",
  },
  jsonDeps: {
    name: "--jsonDeps",
    description:
      "Like jsonAll but only lists dependencies, devDependencies, optionalDependencies, etc of the new package data",
  },
  jsonUpgraded: {
    name: "--jsonUpgraded",
    description: "Output upgraded dependencies in json",
  },
  loglevel: {
    name: ["--loglevel", "-l"],
    description:
      'Amount to log: silent, error, minimal, warn, info, verbose, silly. (default: "warn")',
    args: {
      name: "n",
      suggestions: [
        "silent",
        "error",
        "minimal",
        "warn",
        "info",
        "verbose",
        "silly",
      ],
      default: "warn",
    },
  },
  mergeConfig: {
    name: "--mergeConfig",
    description:
      "Merges nested configs with the root config file for --deep or --packageFile options. (default: false)",
  },
  minimal: {
    name: ["--minimal", "-m"],
    description:
      "Do not upgrade newer versions that are already satisfied by the version range according to semver",
  },
  packageData: {
    name: "--packageData",
    description: "Package file data (you can also use stdin)",
    args: {
      name: "value",
    },
  },
  packageFile: {
    name: "--packageFile",
    description: "Package file(s) location. (default: ./package.json)",
    args: {
      name: "path|glob",
      template: "filepaths",
      default: "./package.json",
    },
  },
  packageManager: {
    name: ["--packageManager", "-p"],
    description:
      'Npm, yarn, pnpm, deno, bun, staticRegistry (default: npm). Run "ncu --help --packageManager" for details',
    args: {
      name: "s",
      suggestions: ["npm", "yarn", "pnpm", "deno", "bun", "staticRegistry"],
      default: "npm",
    },
  },
  peer: {
    name: "--peer",
    description:
      'Check peer dependencies of installed packages and filter updates to compatible versions. Run "ncu --help --peer" for details',
  },
  pre: {
    name: "--pre",
    description:
      "Include prerelease versions, e.g. -alpha.0, -beta.5, -rc.2. Automatically set to 1 when --target is newest or greatest, or when the current version is a prerelease. (default: 0)",
    args: {
      name: "n",
      default: "0",
    },
  },
  prefix: {
    name: "--prefix",
    description: "Current working directory of npm",
    args: {
      name: "path",
      template: "folders",
    },
  },
  registry: {
    name: ["--registry", "-r"],
    description: "Specify the registry to use when looking up package versions",
    args: {
      name: "uri",
    },
  },
  registryType: {
    name: "--registryType",
    description:
      'Specify whether --registry refers to a full npm registry or a simple JSON file or url: npm, json. Run "ncu --help --registryType" for details. (default: npm)',
    args: {
      name: "type",
      suggestions: ["npm", "json"],
      default: "npm",
    },
  },
  reject: {
    name: ["--reject", "-x"],
    description:
      "Exclude packages matching the given string, wildcard, glob, comma-or-space-delimited list, /regex/, or predicate function",
    isRepeatable: true,
    args: {
      name: "p",
    },
  },
  rejectVersion: {
    name: "--rejectVersion",
    description:
      "Exclude package.json versions using comma-or-space-delimited list or /regex/",
    isRepeatable: true,
    args: {
      name: "p",
    },
  },
  removeRange: {
    name: "--removeRange",
    description: "Remove version ranges from the final package version",
  },
  retry: {
    name: "--retry",
    description:
      "Number of times to retry failed requests for package info. (default: 3)",
    args: {
      name: "n",
      default: "3",
    },
  },
  root: {
    name: "--root",
    description:
      "Runs updates on the root project in addition to specified workspaces. Only allowed with --workspace or --workspaces. (default: true)",
  },
  noRoot: {
    name: "--no-root",
    description:
      "Exclude the root project when using --workspace or --workspaces",
  },
  silent: {
    name: ["--silent", "-s"],
    description: "Don't output anything. Alias for --loglevel silent",
  },
  stdin: {
    name: "--stdin",
    description: "Read package.json from stdin",
  },
  target: {
    name: ["--target", "-t"],
    description:
      'Determines the version to upgrade to: latest, newest, greatest, minor, patch, semver, @[tag], or [function]. (default: latest) Run "ncu --help --target" for details',
    args: {
      name: "value",
      suggestions: ["latest", "newest", "greatest", "minor", "patch", "semver"],
      default: "latest",
    },
  },
  timeout: {
    name: "--timeout",
    description:
      "Global timeout in milliseconds. (default: no global timeout and 30 seconds per npm-registry-fetch)",
    args: {
      name: "ms",
    },
  },
  upgrade: {
    name: ["--upgrade", "-u"],
    description:
      "Overwrite package file with upgraded versions instead of just outputting to console",
  },
  verbose: {
    name: "--verbose",
    description:
      "Log additional information for debugging. Alias for --loglevel verbose",
  },
  version: {
    name: ["--version", "-v", "-V"],
    description: "Output the version number of npm-check-updates",
  },
  workspace: {
    name: "--workspace",
    description:
      "Run on one or more specified workspaces. Add --no-root to exclude the root project",
    isRepeatable: true,
    args: {
      name: "s",
    },
  },
  workspaces: {
    name: ["--workspaces", "-w"],
    description:
      "Run on all workspaces. Add --no-root to exclude the root project",
  },
};

const completionSpec: Fig.Spec = {
  name: "ncu",
  description:
    "Upgrade your npm package.json dependencies to the latest versions, ignoring specified versions",
  args: {
    name: "filter",
    description:
      "A list or regex of package names to check (all others will be ignored)",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    optionsDict.cache,
    optionsDict.cacheClear,
    optionsDict.cacheExpiration,
    optionsDict.cacheFile,
    optionsDict.color,
    optionsDict.concurrency,
    optionsDict.configFileName,
    optionsDict.configFilePath,
    optionsDict.cooldown,
    optionsDict.cwd,
    optionsDict.deep,
    optionsDict.dep,
    optionsDict.deprecated,
    optionsDict.noDeprecated,
    optionsDict.doctor,
    optionsDict.doctorInstall,
    optionsDict.doctorTest,
    optionsDict.enginesNode,
    optionsDict.errorLevel,
    optionsDict.filter,
    optionsDict.filterVersion,
    optionsDict.format,
    optionsDict.global,
    optionsDict.help,
    optionsDict.install,
    optionsDict.interactive,
    optionsDict.interactiveSelect,
    optionsDict.jsonAll,
    optionsDict.jsonDeps,
    optionsDict.jsonUpgraded,
    optionsDict.loglevel,
    optionsDict.mergeConfig,
    optionsDict.minimal,
    optionsDict.packageData,
    optionsDict.packageFile,
    optionsDict.packageManager,
    optionsDict.peer,
    optionsDict.pre,
    optionsDict.prefix,
    optionsDict.registry,
    optionsDict.registryType,
    optionsDict.reject,
    optionsDict.rejectVersion,
    optionsDict.removeRange,
    optionsDict.retry,
    optionsDict.root,
    optionsDict.noRoot,
    optionsDict.silent,
    optionsDict.stdin,
    optionsDict.target,
    optionsDict.timeout,
    optionsDict.upgrade,
    optionsDict.verbose,
    optionsDict.version,
    optionsDict.workspace,
    optionsDict.workspaces,
  ],
};

export default completionSpec;
