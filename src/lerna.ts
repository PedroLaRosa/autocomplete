// Lerna v10.1.3 (npm "latest" dist-tag, 2026-11-20). Source: lerna/lerna repo at tag v10.1.3 read statically
// (yargs command modules in libs/commands/*/src/command.ts, packages/lerna/src/{index.ts,commands/*},
// shared global/filter/listable options in libs/core/src/lib, and the per-command READMEs); the binary was not run.
// `add`, `bootstrap` and `link` were removed in v9 (only an error stub remains), so they are no longer listed.
// Hidden proxy options (--bail, --prefix, --push, ...) and options that now only throw an error are left out.

const getPackages: Fig.Generator = {
  script: ["lerna", "ls"],
  postProcess: (output) =>
    output
      .split("\n")
      .filter((packageName) => packageName.trim() !== "")
      .map((packageName) => ({
        name: packageName,
        icon: "fig://icon?type=string",
      })),
};

const getBranches: Fig.Generator = {
  script: ["git", "branch", "--no-color"],
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }
    return out.split("\n").map((output) => {
      return {
        name: output.replace("*", "").trim(),
        description: "Branch",
        icon: "fig://icon?type=git",
      };
    });
  },
};

const getAllScriptsFromPackages: Fig.Generator = {
  // Get all lerna packages, loop over them and get content of package.json
  script: [
    "bash",
    "-c",
    "lerna list -p | while read p; do\n \\cat $p/package.json && echo END\ndone",
  ],
  postProcess: (output) => {
    // Split output by the divider and remove empty entry
    const packages = output.split("END").filter((e) => e.trim() !== "");

    let scripts: string[] = [];
    packages.forEach((packageContent) => {
      const parsed = JSON.parse(packageContent);
      scripts = scripts.concat(Object.keys(parsed["scripts"] ?? {}));
    });

    return Array.from(new Set(scripts)).map((scriptName) => ({
      name: scriptName,
      icon: "fig://icon?type=npm",
    }));
  },
};

const LOG_LEVELS = [
  "silent",
  "error",
  "warn",
  "notice",
  "success",
  "http",
  "timing",
  "info",
  "verbose",
  "silly",
];

const SEMVER_NOUNS = [
  "major",
  "minor",
  "patch",
  "premajor",
  "preminor",
  "prepatch",
  "prerelease",
];

const packageScopes = ["public", "restricted"];

const allPackagesSuggestion: Fig.Suggestion = {
  name: "*",
  description: "Select all packages",
};

const npmClientOption: Fig.Option = {
  name: "--npm-client",
  description: "Executable used to run scripts (npm, yarn, pnpm, ...)",
  args: {
    name: "client",
    default: "npm",
    suggestions: [
      {
        name: "npm",
        icon: "fig://icon?type=npm",
      },
      {
        name: "yarn",
        icon: "https://yarnpkg.com/favicon-32x32.png",
      },
      {
        name: "pnpm",
        icon: "https://pnpm.js.org/img/favicon.png",
      },
    ],
  },
};

/** Options accepted by every command */
const globalOptions: Fig.Option[] = [
  {
    name: "--concurrency",
    description:
      "How many processes to use when lerna parallelizes tasks (defaults to count of logical CPU cores)",
    isPersistent: true,
    args: {
      name: "number",
    },
  },
  {
    name: "--loglevel",
    description:
      "What level of logs to report. On failure, all logs are written to lerna-debug.log in the current working directory",
    isPersistent: true,
    args: {
      name: "loglevel",
      default: "info",
      suggestions: LOG_LEVELS.map((level) => ({
        name: level,
        icon: "fig://icon?type=string",
      })),
    },
  },
  {
    name: "--max-buffer",
    description: "Set max-buffer (in bytes) for subcommand execution",
    isPersistent: true,
    args: {
      name: "bytes",
    },
  },
  {
    name: "--no-progress",
    description: "Disable progress bars. Always off in CI",
    isPersistent: true,
  },
  {
    name: "--no-sort",
    description: "Do not sort packages topologically (dependencies first)",
    isPersistent: true,
  },
  {
    name: "--reject-cycles",
    description: "Fail if a cycle is detected among dependencies",
    isPersistent: true,
  },
  {
    name: ["-h", "--help"],
    description: "Show help",
    isPersistent: true,
  },
  {
    name: ["-v", "--version"],
    description: "Show version number",
    isPersistent: true,
  },
];

/** Options shared by `lerna run` and `lerna exec` */
const runExecOptions: Fig.Option[] = [
  {
    name: "--stream",
    description:
      "Stream output with lines prefixed by originating package name",
  },
  {
    name: "--parallel",
    description:
      "Run with unlimited concurrency and no topological sorting, streaming prefixed output",
  },
  {
    name: "--no-bail",
    description:
      "Continue running despite a non-zero exit code in a given package. By default lerna exits with an error as soon as one package fails",
  },
  {
    name: "--no-prefix",
    description:
      "Do not prefix streaming output with the package name. Useful when piping results to other processes, such as editor plugins",
  },
  {
    name: "--profile",
    description:
      "Profile the executions and output a performance profile (analyzable with DevTools) to the default location",
  },
  {
    name: "--profile-location",
    description:
      "Output the performance profile to a custom location, resolved relative to the current working directory",
    args: {
      name: "location",
      template: "folders",
    },
  },
];

const runOptions: Fig.Option[] = [
  npmClientOption,
  ...runExecOptions,
  {
    name: "--verbose",
    description:
      "When useNx is not false, show verbose output from dependent tasks",
  },
  {
    name: "--load-env-files",
    description: "When useNx is not false, automatically load .env files",
  },
];

const filterOptions: Fig.Option[] = [
  {
    name: "--scope",
    description: "Include only packages with names matching the given glob",
    isRepeatable: true,
    args: { name: "glob", generators: getPackages },
  },
  {
    name: "--ignore",
    description: "Exclude packages with names matching the given glob",
    isRepeatable: true,
    args: { name: "glob", generators: getPackages },
  },
  {
    name: "--no-private",
    description:
      'Exclude packages with { "private": true } in their package.json. They are included by default',
  },
  {
    name: "--since",
    description:
      "Only include packages that have been changed since the specified ref. If no ref is passed, it defaults to the most-recent tag",
    args: {
      name: "ref",
      isOptional: true,
    },
  },
  {
    name: "--exclude-dependents",
    description:
      "Exclude all transitive dependents when running a command with --since, overriding the default 'changed' algorithm",
    exclusiveOn: ["--include-dependents"],
  },
  {
    name: "--include-dependents",
    description:
      "Include all transitive dependents when running a command regardless of --scope, --ignore, or --since",
    exclusiveOn: ["--exclude-dependents"],
  },
  {
    name: "--include-dependencies",
    description:
      "Include all transitive dependencies when running a command regardless of --scope, --ignore, or --since",
  },
  {
    name: "--include-merged-tags",
    description:
      "Include tags from merged branches when running a command with --since. This is only useful if you do a lot of publishing from feature branches, which is not generally recommended",
  },
];

const listableOptions: Fig.Option[] = [
  {
    name: "--json",
    description: "Show information as a JSON array",
  },
  {
    name: "--ndjson",
    description: "Show information as newline-delimited JSON",
  },
  {
    name: ["-a", "--all"],
    description: "Show private packages that are normally hidden",
  },
  {
    name: ["-l", "--long"],
    description: "Show extended information",
  },
  {
    name: ["-p", "--parseable"],
    description: "Show parseable output instead of columnified view",
  },
  {
    name: "--toposort",
    description:
      "Sort packages in topological order (dependencies before dependents) instead of lexical by directory",
  },
  {
    name: "--graph",
    description: "Show dependency graph as a JSON-formatted adjacency list",
  },
];

const ignoreChangesOption: Fig.Option = {
  name: "--ignore-changes",
  description:
    "Ignore changes in files matched by glob(s) when detecting changed packages. Pass --no-ignore-changes to completely disable",
  args: {
    name: "glob",
    isOptional: true,
    isVariadic: true,
    template: "folders",
  },
};

const forcePublishOption: Fig.Option = {
  name: "--force-publish",
  description:
    "Always include targeted packages (comma-separated) or all packages using * when detecting changed packages, skipping default logic",
  args: {
    name: "packages",
    isOptional: true,
    generators: getPackages,
    suggestions: [allPackagesSuggestion],
  },
};

const conventionalGraduateOption: Fig.Option = {
  name: "--conventional-graduate",
  description:
    "Graduate the specified packages (comma-separated) or all packages using *. Versions currently prereleased packages to a non-prerelease version",
  args: {
    name: "packages",
    isOptional: true,
    generators: getPackages,
    suggestions: [allPackagesSuggestion],
  },
};

const forceConventionalGraduateOption: Fig.Option = {
  name: "--force-conventional-graduate",
  description:
    "Force all packages specified by --conventional-graduate to bump their version whether or not they are a prerelease or have changes since the previous version",
};

const includeMergedTagsOption: Fig.Option = {
  name: "--include-merged-tags",
  description:
    "Include tags from merged branches when detecting changed packages",
};

/** Options of `lerna version`, which `lerna publish` accepts as well */
const versionOptions: Fig.Option[] = [
  {
    name: "--allow-branch",
    description:
      "Specify which branches to allow versioning from (globs, e.g. main or release/*)",
    args: {
      name: "glob",
      isVariadic: true,
      generators: getBranches,
    },
  },
  {
    name: "--amend",
    description: "Amend the existing commit, instead of generating a new one",
  },
  {
    name: "--build-metadata",
    description: "Apply semver-compatible build metadata to the release",
    args: {
      name: "metadata",
    },
  },
  {
    name: "--ci-behind-behavior",
    description:
      "Control whether CI errors or exits successfully when the current branch is behind upstream",
    args: {
      name: "behavior",
      default: "error",
      suggestions: ["error", "skip"],
    },
  },
  {
    name: "--conventional-commits",
    description:
      "Use conventional-changelog to determine version bump and generate CHANGELOG.md files",
  },
  conventionalGraduateOption,
  forceConventionalGraduateOption,
  {
    name: "--conventional-prerelease",
    description:
      "Version changed packages (comma-separated) or all packages using * as prereleases when using --conventional-commits",
    args: {
      name: "packages",
      isOptional: true,
      generators: getPackages,
      suggestions: [allPackagesSuggestion],
    },
  },
  {
    name: "--conventional-bump-prerelease",
    description: "Bump prerelease versions if conventional commits requires it",
  },
  {
    name: "--changelog-preset",
    description: "Custom conventional-changelog preset",
    args: {
      name: "preset",
      default: "angular",
    },
  },
  {
    name: "--changelog-entry-additional-markdown",
    description: "Additional markdown to add to CHANGELOG.md entries",
    args: {
      name: "markdown",
    },
  },
  {
    name: "--create-release",
    description:
      "Create an official GitHub or GitLab release for every version",
    args: {
      name: "type",
      suggestions: [
        {
          name: "github",
          icon: "https://github.com/fluidicon.png",
        },
        {
          name: "gitlab",
          icon: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/a0178a3dfdb9c4e34857bad3d2d788036baa0c76/icons/gitlab.svg",
        },
      ],
    },
  },
  {
    name: "--exact",
    description:
      "Specify cross-dependency version numbers exactly rather than with a caret (^)",
  },
  forcePublishOption,
  {
    name: "--git-remote",
    description: "Push git changes to the specified remote",
    args: {
      name: "remote",
      default: "origin",
      generators: {
        script: ["git", "remote"],
        postProcess: (output) => {
          return output.split("\n").map((remoteName) => ({
            name: remoteName,
            description: "Remote",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
          }));
        },
      },
    },
  },
  {
    name: "--git-tag-command",
    description:
      "Custom command to be used when applying git tags, for example a wrapper command in CI/CD pipelines that have no direct write access",
    args: {
      name: "cmd",
    },
  },
  ignoreChangesOption,
  {
    name: "--ignore-scripts",
    description: "Disable all lifecycle scripts",
  },
  includeMergedTagsOption,
  {
    name: "--json",
    description: "Output changed packages in JSON format",
  },
  {
    name: ["-m", "--message"],
    description: "Use a custom commit message when creating the version commit",
    args: {
      name: "msg",
    },
  },
  {
    name: "--no-changelog",
    description:
      "Do not generate CHANGELOG.md files when using --conventional-commits",
  },
  {
    name: "--no-commit-hooks",
    description: "Do not run git commit hooks when committing version changes",
  },
  {
    name: "--no-git-tag-version",
    description: "Do not commit or tag version changes",
  },
  {
    name: "--no-granular-pathspec",
    description:
      "Do not stage (or, when publishing, reset) changes file-by-file, but globally",
  },
  {
    name: "--no-private",
    description: "Do not version private packages",
  },
  {
    name: "--no-push",
    description: "Do not push tagged commit to git remote",
  },
  {
    name: "--npm-client-args",
    description:
      "Additional arguments to pass to the npm client when performing 'npm install'",
    args: {
      name: "args",
      isVariadic: true,
    },
  },
  {
    name: "--preid",
    description:
      "Specify the prerelease identifier when versioning a prerelease",
    args: {
      name: "identifier",
      default: "alpha",
    },
  },
  {
    name: "--premajor-version-bump",
    description:
      "Control how pre-major version (0.x) packages are bumped by lerna",
    args: {
      name: "behavior",
      default: "default",
      suggestions: ["default", "force-patch"],
    },
  },
  {
    name: "--run-scripts-on-lockfile-update",
    description:
      "Do not disable all lifecycle scripts while updating the lock file after the version bump",
  },
  {
    name: "--sign-git-commit",
    description: "Pass the `--gpg-sign` flag to `git commit`",
  },
  {
    name: "--signoff-git-commit",
    description: "Pass the `--signoff` flag to `git commit`",
  },
  {
    name: "--sign-git-tag",
    description: "Pass the `--sign` flag to `git tag`",
  },
  {
    name: "--force-git-tag",
    description: "Pass the `--force` flag to `git tag`",
  },
  {
    name: "--sync-dist-version",
    description:
      "Update the version of the package.json of the contents directory",
  },
  {
    name: "--tag-version-prefix",
    description:
      "Customize the tag prefix. To remove it entirely, pass an empty string",
    args: {
      name: "prefix",
      default: "v",
    },
  },
  {
    name: "--tag-version-separator",
    description:
      "Customize the tag version separator used when creating tags for independent versioning",
    args: {
      name: "separator",
      default: "@",
    },
  },
  {
    name: ["-y", "--yes"],
    description: "Skip all confirmation prompts",
  },
];

/** Options of `lerna publish` on top of the `lerna version` ones */
const publishOptions: Fig.Option[] = [
  {
    name: ["-c", "--canary"],
    description:
      "Publish packages after every successful merge, appending the sha as a prerelease identifier (e.g. 1.0.1-alpha.0.sha-81e3b44)",
  },
  {
    name: "--contents",
    description: "Subdirectory to publish. Must apply to ALL packages",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--dist-tag",
    description: "Publish packages with the specified npm dist-tag",
    args: {
      name: "tag",
      default: "latest",
    },
  },
  {
    name: "--git-head",
    description:
      "Explicit SHA to set as gitHead when packing tarballs, only allowed with the from-package positional",
    args: {
      name: "sha",
    },
  },
  {
    name: "--graph-type",
    description: "Type of dependency to use when determining package hierarchy",
    args: {
      name: "type",
      default: "dependencies",
      suggestions: ["all", "dependencies"],
    },
  },
  {
    name: "--ignore-prepublish",
    description: "Disable the deprecated 'prepublish' lifecycle script",
  },
  {
    name: "--include-private",
    description:
      "Include the specified private packages when publishing by temporarily removing the private property from their manifest. Only for testing private packages that will become public",
    args: {
      name: "packages",
      isVariadic: true,
      generators: getPackages,
    },
  },
  {
    name: "--legacy-auth",
    description: "Legacy Base64 encoded username and password",
    args: {
      name: "auth",
    },
  },
  {
    name: "--no-git-reset",
    description:
      "Do not reset changes to the working tree after publishing is complete",
  },
  {
    name: "--otp",
    description:
      "Supply a one-time password for publishing with two-factor authentication",
    args: {
      name: "otp",
    },
  },
  {
    name: "--pre-dist-tag",
    description: "Publish prerelease packages with the specified npm dist-tag",
    args: {
      name: "tag",
    },
  },
  {
    name: "--registry",
    description: "Use the specified registry for all npm client operations",
    args: {
      name: "url",
    },
  },
  {
    name: "--require-scripts",
    description:
      "Execute ./scripts/prepublish.js and ./scripts/postpublish.js, relative to the package root",
  },
  {
    name: "--summary-file",
    description:
      "Generate a JSON summary report after all packages have been successfully published. Optionally pass the directory or file to save it to",
    args: {
      name: "path",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--temp-tag",
    description: "Create a temporary tag while publishing",
  },
  {
    name: "--throttle",
    description:
      "Throttle module publication. This is implicit if a throttle size or delay is provided",
  },
  {
    name: "--throttle-size",
    description: "Bucket size used to throttle module publication",
    args: {
      name: "size",
    },
  },
  {
    name: "--throttle-delay",
    description:
      "Delay between throttle bucket items publications (in seconds)",
    args: {
      name: "seconds",
    },
  },
  {
    name: "--verify-access",
    description:
      "Verify package read-write access for the current npm user before publishing (legacy behavior, off by default)",
  },
  {
    name: "--no-verify-access",
    description:
      "Do not verify package access (already the default; use --verify-access to opt in)",
    deprecated: true,
  },
  {
    name: "--npm-tag",
    description: "Publish with the given npm dist-tag (renamed to --dist-tag)",
    deprecated: true,
    exclusiveOn: ["--dist-tag"],
    args: { name: "tagname" },
  },
  {
    name: "--skip-npm",
    description: "Call lerna version directly instead",
    deprecated: true,
  },
];

const bumpArg = (extraKeywords: string[] = []): Fig.Arg => ({
  name: "bump",
  description: "Increment version(s) by explicit version or semver keyword",
  isOptional: true,
  suggestions: [...SEMVER_NOUNS, ...extraKeywords].map((versionName) => ({
    name: versionName,
    icon: "fig://icon?type=npm",
  })),
});

const listSubCommand: Fig.Subcommand = {
  name: "",
  description: "List local packages",
  options: [...filterOptions, ...listableOptions],
};

const completionSpec: Fig.Spec = {
  name: "lerna",
  description: "A tool for managing JavaScript projects with multiple packages",
  options: globalOptions,
  subcommands: [
    /** Add-caching Subcommand */
    {
      name: "add-caching",
      description: "Interactive prompt to generate task runner configuration",
    },
    /** Changed Subcommand */
    {
      name: ["changed", "updated"],
      description:
        "List local packages that have changed since the last tagged release",
      options: [
        ...listableOptions,
        conventionalGraduateOption,
        forceConventionalGraduateOption,
        forcePublishOption,
        ignoreChangesOption,
        includeMergedTagsOption,
      ],
    },
    /** Clean Subcommand */
    {
      name: "clean",
      description: "Remove the node_modules directory from all packages",
      options: [
        ...filterOptions,
        {
          name: ["-y", "--yes"],
          description: "Skip all confirmation prompts",
        },
      ],
    },
    /** Create Subcommand */
    {
      name: "create",
      description: "Create a new lerna-managed package",
      args: [
        {
          name: "name",
          description:
            "The package name (including scope), which must be locally unique and publicly available",
        },
        {
          name: "loc",
          description:
            "A custom package location, defaulting to the first configured package location",
          isOptional: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: "--access",
          description: "When using a scope, set the publishConfig.access value",
          args: {
            name: "scope",
            default: "public",
            suggestions: packageScopes.map((scope) => ({
              name: scope,
              icon: "fig://icon?type=string",
            })),
          },
        },
        {
          name: "--bin",
          description:
            "Package has an executable. Customize with --bin <executableName>",
          args: {
            name: "executableName",
            isOptional: true,
          },
        },
        {
          name: "--description",
          description: "Package description",
          args: {
            name: "description",
          },
        },
        {
          name: "--dependencies",
          description: "A list of package dependencies",
          args: {
            name: "dependencies",
            isVariadic: true,
          },
        },
        {
          name: "--es-module",
          description: "Initialize a transpiled ES Module",
        },
        {
          name: "--homepage",
          description:
            "The package homepage, defaulting to a subpath of the root pkg.homepage",
          args: {
            name: "url",
          },
        },
        {
          name: "--keywords",
          description: "A list of package keywords",
          args: {
            name: "keywords",
            isVariadic: true,
          },
        },
        {
          name: "--license",
          description: "The desired package license (SPDX identifier)",
          args: {
            name: "license",
            default: "ISC",
          },
        },
        {
          name: "--private",
          description:
            "Make the new package private, never published to any external registry",
        },
        {
          name: "--registry",
          description: "Configure the package's publishConfig.registry",
          args: {
            name: "url",
          },
        },
        {
          name: "--tag",
          description: "Configure the package's publishConfig.tag",
          args: {
            name: "tag",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "Skip all prompts, accepting default values",
        },
      ],
    },
    /** Diff Subcommand */
    {
      name: "diff",
      description:
        "Diff all packages or a single package since the last release",
      args: {
        name: "pkgName",
        description: "An optional package name to filter the diff output",
        generators: getPackages,
        isOptional: true,
      },
      options: [
        {
          ...ignoreChangesOption,
          description:
            "Ignore changes in files matched by glob(s). Pass --no-ignore-changes to include files ignored in lerna.json",
        },
      ],
    },
    /** Exec Subcommand */
    {
      name: "exec",
      description: "Execute an arbitrary command in each package",
      options: [...filterOptions, ...runExecOptions],
      args: {
        name: "cmd",
        description:
          "The command to execute. Any command flags must be passed after --",
        isOptional: true,
        isCommand: true,
      },
    },
    /** Import Subcommand */
    {
      name: "import",
      description: "Import a package into the monorepo with commit history",
      args: {
        name: "dir",
        description:
          "The path to an external git repository that contains an npm package",
        template: "folders",
      },
      options: [
        {
          name: "--flatten",
          description:
            "Import each merge commit as a single change the merge introduced",
        },
        {
          name: "--dest",
          description:
            "Import destination directory for the external git repository",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--preserve-commit",
          description:
            "Preserve the original committer in addition to the original author",
        },
        {
          name: ["-y", "--yes"],
          description: "Skip all confirmation prompts",
        },
      ],
    },
    /** Info Subcommand */
    {
      name: "info",
      description: "Print debugging information about the local environment",
    },
    /** Init Subcommand */
    {
      name: "init",
      description:
        "Create a new Lerna repo or upgrade an existing repo to the current version of Lerna",
      options: [
        {
          name: "--dry-run",
          description:
            "Preview the changes that will be made to the file system without actually modifying anything",
        },
        {
          name: "--exact",
          description:
            "Specify the lerna dependency version in package.json without a caret (^)",
          deprecated: true,
        },
        {
          name: ["-i", "--independent"],
          description: "Version packages independently",
        },
        {
          name: "--packages",
          description:
            "A glob pattern matching packages that should be included, instead of defaulting to the package manager's workspaces config",
          isRepeatable: true,
          args: {
            name: "glob",
          },
        },
        {
          name: "--skip-install",
          description: "Skip installation of dependencies after initialization",
        },
      ],
    },
    /** List Subcommand (aliases ls, la = all packages, ll = long output) */
    { ...listSubCommand, name: ["list", "ls", "la", "ll"] },
    /** Publish Subcommand */
    {
      name: "publish",
      description: "Publish packages in the current project",
      args: bumpArg(["from-git", "from-package"]),
      options: [...versionOptions, ...publishOptions],
    },
    /** Repair Subcommand */
    {
      name: "repair",
      description:
        "Run automated migrations to repair the state of a lerna repo",
    },
    /** Run Subcommand */
    {
      name: "run",
      description:
        "Run an npm script in each package that contains that script",
      options: [...filterOptions, ...runOptions],
      args: {
        name: "script",
        description:
          "The npm script to run (comma-separated for several). Pass flags for the npm client after --",
        generators: getAllScriptsFromPackages,
      },
    },
    /** Version Subcommand */
    {
      name: "version",
      description: "Bump version of packages changed since the last release",
      args: bumpArg(),
      options: versionOptions,
    },
    /** Watch Subcommand */
    {
      name: "watch",
      description: "Run a command whenever packages or their dependents change",
      options: [
        ...filterOptions,
        {
          name: "--verbose",
          description:
            "Run watch mode in verbose mode, where commands are logged before execution",
        },
      ],
      args: {
        name: "command",
        description:
          "The command to run after --. $LERNA_PACKAGE_NAME and $LERNA_FILE_CHANGES hold the changed package and files (escape the $)",
        isCommand: true,
      },
    },
  ],
};

export default completionSpec;
