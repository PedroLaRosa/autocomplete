// GENERATORS

import { npmScriptsGenerator, npmSearchGenerator } from "./npm";
import { dependenciesGenerator, nodeClis } from "./yarn";

const filterMessages = (out: string): string => {
  return out.startsWith("warning:") || out.startsWith("error:")
    ? out.split("\n").slice(1).join("\n")
    : out;
};

const searchBranches: Fig.Generator = {
  script: ["git", "branch", "--no-color"],
  postProcess: function (out) {
    const output = filterMessages(out);

    if (output.startsWith("fatal:")) {
      return [];
    }

    return output.split("\n").map((elm) => {
      let name = elm.trim();
      const parts = elm.match(/\S+/g);
      if (parts && parts.length > 1) {
        if (parts[0] == "*") {
          // Current branch.
          return {
            name: elm.replace("*", "").trim(),
            description: "Current branch",
            icon: "⭐️",
          };
        } else if (parts[0] == "+") {
          // Branch checked out in another worktree.
          name = elm.replace("+", "").trim();
        }
      }

      return {
        name,
        description: "Branch",
        icon: "fig://icon?type=git",
      };
    });
  },
};

const generatorInstalledPackages: Fig.Generator = {
  script: ["pnpm", "ls"],
  postProcess: function (out) {
    /**
     * out
     * @example
     * ```
     * Legend: production dependency, optional only, dev only
     *
     * /xxxx/xxxx/<package-name> (PRIVATE)
     *
     * dependencies:
     * lodash 4.17.21
     * foo link:packages/foo
     *
     * devDependencies:
     * typescript 4.7.4
     * ```
     */
    if (out.includes("ERR_PNPM")) {
      return [];
    }

    const output = out
      .split("\n")
      .slice(3)
      // remove empty lines, "*dependencies:" lines, local workspace packages (eg: "foo":"workspace:*")
      .filter(
        (item) =>
          !!item &&
          !item.toLowerCase().includes("dependencies") &&
          !item.includes("link:")
      )
      .map((item) => item.replace(/\s/, "@")); // typescript 4.7.4 -> typescript@4.7.4

    return output.map((pkg) => {
      return {
        name: pkg,
        icon: "fig://icon?type=package",
      };
    });
  },
};

const FILTER_OPTION: Fig.Option = {
  name: ["--filter", "-F"],
  args: {
    template: "filepaths",
    name: "Filepath / Package",
    description:
      "To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format",
  },
  description: `Filtering allows you to restrict commands to specific subsets of packages.
pnpm supports a rich selector syntax for picking packages by name or by relation.
More details: https://pnpm.io/filtering`,
};

/** Options that being appended for `pnpm i` and `add` */
const INSTALL_BASE_OPTIONS: Fig.Option[] = [
  {
    name: "--offline",
    description:
      "If true, pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail",
  },
  {
    name: "--prefer-offline",
    description:
      "If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use --offline",
  },
  {
    name: "--ignore-scripts",
    description:
      "Do not execute any scripts defined in the project package.json and its dependencies",
  },
  {
    name: "--reporter",
    description: `Allows you to choose the reporter that will log debug info to the terminal about the installation progress`,
    args: {
      name: "Reporter Type",
      suggestions: ["silent", "default", "append-only", "ndjson"],
    },
  },
  {
    name: "--allow-build",
    description:
      "A list of package names that are allowed to run postinstall scripts during installation. Prefix a name with ! to deny its build instead",
    isRepeatable: true,
    args: { name: "package" },
  },
];

/** Base options for pnpm i when run without any arguments */
const INSTALL_OPTIONS: Fig.Option[] = [
  {
    name: ["-P", "--prod"],
    description:
      "Pnpm will not install any package listed in devDependencies and will remove those insofar they were already installed",
  },
  {
    name: ["-D", "--dev"],
    description:
      "Only devDependencies are installed and dependencies are removed insofar they were already installed",
  },
  {
    name: "--no-optional",
    description: "OptionalDependencies are not installed",
  },
  {
    name: "--lockfile-only",
    description:
      "When used, only updates pnpm-lock.yaml and package.json instead of checking node_modules and downloading dependencies",
  },
  {
    name: "--frozen-lockfile",
    description:
      "If true, pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present",
  },
  {
    name: "--no-frozen-lockfile",
    description:
      "Allow the lockfile to be updated, overriding a frozenLockfile: true setting",
  },
  {
    name: "--prefer-frozen-lockfile",
    description:
      "Prefer the existing lockfile over re-resolving, even when the manifest may have changed",
  },
  {
    name: "--fix-lockfile",
    description: "Fix broken lockfile entries automatically",
  },
  {
    name: "--force",
    description:
      "Reinstall every package the lockfile names, relinking packages an earlier install already materialized",
  },
  {
    name: "--node-linker",
    description: "Which node linker to use. Overrides the configured value",
    args: {
      name: "Linker",
      suggestions: ["isolated", "hoisted", "pnp"],
    },
  },
  {
    name: "--use-store-server",
    description:
      "Starts a store server in the background. Removed in pnpm v11 along with pnpm server",
    deprecated: true,
  },
  {
    name: "--shamefully-hoist",
    description:
      "Creates a flat node_modules structure, similar to that of npm or yarn. WARNING: This is highly discouraged",
  },
];

/** Base options for pnpm add */
const INSTALL_PACKAGE_OPTIONS: Fig.Option[] = [
  {
    name: ["-P", "--save-prod"],
    description: "Install the specified packages as regular dependencies",
  },
  {
    name: ["-D", "--save-dev"],
    description: "Install the specified packages as devDependencies",
  },
  {
    name: ["-O", "--save-optional"],
    description: "Install the specified packages as optionalDependencies",
  },
  {
    name: "--no-save",
    description: "Prevents saving to `dependencies`",
    deprecated: true,
  },
  {
    name: ["-E", "--save-exact"],
    description:
      "Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator",
  },
  {
    name: "--save-peer",
    description:
      "Using --save-peer will add one or more packages to peerDependencies and install them as dev dependencies",
  },
  {
    name: "--ignore-workspace-root-check",
    description: `Adding a new dependency to the root workspace package fails, unless the --ignore-workspace-root-check or -w flag is used.
For instance, pnpm add debug -w`,
  },
  {
    name: ["--global", "-g"],
    description: `Install a package globally`,
  },
  {
    name: "--workspace",
    description: `Only adds the new dependency if it is found in the workspace`,
  },
  {
    name: "--save-catalog",
    description: "Save the new dependency to the default catalog",
  },
  {
    name: "--save-catalog-name",
    description: "Save the new dependency to the specified catalog",
    args: { name: "catalog" },
  },
  {
    name: "--config",
    description: "Add the package as a configuration dependency",
  },
  FILTER_OPTION,
];

// SUBCOMMANDS
const SUBCOMMANDS_MANAGE_DEPENDENCIES: Fig.Subcommand[] = [
  {
    name: "add",
    description: `Installs a package and any packages that it depends on. By default, any new package is installed as a production dependency`,
    args: {
      name: "package",
      generators: npmSearchGenerator,
      debounce: true,
      isVariadic: true,
    },
    options: [...INSTALL_BASE_OPTIONS, ...INSTALL_PACKAGE_OPTIONS],
  },
  {
    name: ["install", "i"],
    description: `Pnpm install is used to install all dependencies for a project.
In a CI environment, installation fails if a lockfile is present but needs an update.
Inside a workspace, pnpm install installs all dependencies in all the projects.
If you want to disable this behavior, set the recursive-install setting to false`,
    async generateSpec(tokens) {
      // `pnpm i` with args is an `pnpm add` alias
      const hasArgs =
        tokens.filter((token) => token.trim() !== "" && !token.startsWith("-"))
          .length > 2;

      return {
        name: "install",
        options: [
          ...INSTALL_BASE_OPTIONS,
          ...(hasArgs ? INSTALL_PACKAGE_OPTIONS : INSTALL_OPTIONS),
        ],
      };
    },
    args: {
      name: "package",
      isOptional: true,
      generators: npmSearchGenerator,
      debounce: true,
      isVariadic: true,
    },
  },
  {
    name: ["install-test", "it"],
    description:
      "Runs pnpm install followed immediately by pnpm test. It takes exactly the same arguments as pnpm install",
    options: [
      ...INSTALL_BASE_OPTIONS,
      ...INSTALL_OPTIONS,
      {
        name: "--no-bail",
        description: "Continue running workspace tests after a failure",
      },
    ],
  },
  {
    name: ["ci", "clean-install", "ic", "install-clean"],
    description: "Runs pnpm clean followed by pnpm install --frozen-lockfile",
    options: [...INSTALL_BASE_OPTIONS, ...INSTALL_OPTIONS],
  },
  {
    name: ["clean", "purge"],
    description:
      "Safely remove node_modules directories from the current project (or every workspace project). A clean script in package.json overrides the built-in command",
    options: [
      {
        name: ["-l", "--lockfile"],
        description: "Also remove pnpm-lock.yaml files",
      },
    ],
  },
  {
    name: ["update", "upgrade", "up"],
    description: `Pnpm update updates packages to their latest version based on the specified range.
When used without arguments, updates all dependencies. You can use patterns to update specific dependencies`,
    args: {
      name: "Package",
      isOptional: true,
      filterStrategy: "fuzzy",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description:
          "Concurrently runs update in all subdirectories with a package.json (excluding node_modules)",
      },
      {
        name: ["--latest", "-L"],
        description:
          "Ignores the version range specified in package.json. Instead, the version specified by the latest tag will be used (potentially upgrading the packages across major versions)",
      },
      {
        name: ["--global", "-g"],
        description: "Update global packages",
      },
      {
        name: ["-P", "--prod"],
        description: `Only update packages in dependencies and optionalDependencies`,
      },
      {
        name: ["-D", "--dev"],
        description: "Only update packages in devDependencies",
      },
      {
        name: "--depth",
        description:
          "How deep should levels of dependencies be inspected. 0 means top-level dependencies only",
        args: { name: "number" },
      },
      {
        name: "--no-save",
        description:
          "Do not write the updated ranges back to package.json. The lockfile is still updated",
      },
      {
        name: "--no-optional",
        description: "Don't update packages in optionalDependencies",
      },
      {
        name: ["--interactive", "-i"],
        description:
          "Show outdated dependencies and select which ones to update",
      },
      {
        name: "--workspace",
        description: `Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace.
If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if express is not a workspace package: pnpm up -r --workspace express`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["remove", "rm", "uninstall", "un"],
    description: `Removes packages from node_modules and from the project's package.json`,
    args: {
      name: "Package",
      filterStrategy: "fuzzy",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description: `When used inside a workspace, removes a dependency (or dependencies) from every workspace package.
When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories`,
      },
      {
        name: ["--global", "-g"],
        description: "Remove a global package",
      },
      {
        name: ["-P", "--save-prod"],
        description: `Only remove the dependency from dependencies`,
      },
      {
        name: ["-D", "--save-dev"],
        description: "Only remove the dependency from devDependencies",
      },
      {
        name: ["--save-optional", "-O"],
        description: "Only remove the dependency from optionalDependencies",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["link", "ln"],
    description: `Links a local package as a dependency. Only relative or absolute paths are accepted`,
    args: {
      name: "Path",
      template: "folders",
      isVariadic: true,
    },
    options: [
      {
        name: ["--dir", "-C"],
        description: `Changes the link location to <dir>`,
      },
      {
        name: "--global",
        description:
          "Removed in pnpm v11. To register a local package's bins globally, use pnpm add -g . instead",
        deprecated: true,
      },
    ],
  },
  {
    name: ["unlink", "dislink"],
    description: `Unlinks a system-wide package (inverse of pnpm link).
If called without arguments, all linked dependencies will be unlinked.
This is similar to yarn unlink, except pnpm re-installs the dependency after removing the external link`,
    args: [
      {
        name: "Package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      { template: "filepaths" },
    ],
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Unlink in every package found in subdirectories or in every workspace package, when executed inside a workspace`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "import",
    description:
      "Pnpm import generates a pnpm-lock.yaml from an npm package-lock.json (or npm-shrinkwrap.json) file",
  },
  {
    name: ["rebuild", "rb"],
    description: `Rebuild a package`,
    args: [
      {
        name: "Package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      { template: "filepaths" },
    ],
    options: [
      {
        name: ["--recursive", "-r"],
        description: `This command runs the pnpm rebuild command in every package of the monorepo`,
      },
      {
        name: "--pending",
        description:
          "Rebuild packages that were not built during installation, such as under --ignore-scripts",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "prune",
    description: `Removes unnecessary packages`,
    options: [
      {
        name: "--prod",
        description: `Remove the packages specified in devDependencies`,
      },
      {
        name: "--no-optional",
        description: `Remove the packages specified in optionalDependencies`,
      },
    ],
  },
  {
    name: "fetch",
    description: `EXPERIMENTAL FEATURE: Fetch packages from a lockfile into virtual store, package manifest is ignored: https://pnpm.io/cli/fetch`,
    options: [
      {
        name: "--prod",
        description: `Development packages will not be fetched`,
      },
      {
        name: "--dev",
        description: `Only development packages will be fetched`,
      },
    ],
  },
  {
    name: "patch",
    description: `This command will cause a package to be extracted in a temporary directory intended to be editable at will`,
    args: {
      name: "package",
      generators: generatorInstalledPackages,
    },
    options: [
      {
        name: ["--edit-dir", "-d"],
        description: `The package that needs to be patched will be extracted to this directory`,
        args: { name: "dir", template: "folders" },
      },
      {
        name: "--ignore-existing",
        description: "Ignore existing patch files when patching",
      },
    ],
  },
  {
    name: "patch-commit",
    args: {
      name: "dir",
    },
    description: `Generate a patch out of a directory`,
    options: [
      {
        name: "--patches-dir",
        description: "The generated patch file will be saved to this directory",
        args: { name: "dir", template: "folders" },
      },
    ],
  },
  {
    name: "patch-remove",
    description: "Remove existing patch files",
    args: {
      name: "package",
      isVariadic: true,
      // TODO: would be nice to have a generator of all patched packages
    },
  },
  {
    name: "dedupe",
    description: "Deduplicate packages in the lockfile",
    options: [
      {
        name: "--check",
        description:
          "Check if running dedupe would result in changes without installing packages or editing the lockfile. Exits with a non-zero status code if changes are possible",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "deploy",
    description: "Deploy a package from a workspace",
    args: {
      name: "Target deploy directory",
      template: "folders",
    },
    options: [
      {
        name: ["-P", "--prod"],
        description: "Only production dependencies are installed",
      },
      {
        name: ["-D", "--dev"],
        description: "Only devDependencies are installed",
      },
      {
        name: "--no-optional",
        description: "OptionalDependencies are not installed",
      },
      {
        name: "--legacy",
        description: "Use the legacy deploy implementation",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "approve-builds",
    description:
      "Approve dependencies for running scripts during installation. Prefix a package name with ! to deny it",
    args: {
      name: "package",
      isOptional: true,
      isVariadic: true,
    },
    options: [
      {
        name: "--all",
        description:
          "Approve all pending dependencies without interactive prompts",
      },
      {
        name: ["--global", "-g"],
        description: "Approve builds for globally installed packages",
      },
    ],
  },
  {
    name: "ignored-builds",
    description: "Print the list of packages with blocked build scripts",
  },
];

const SUBCOMMANDS_RUN_SCRIPTS: Fig.Subcommand[] = [
  {
    name: ["run", "run-script"],
    description: "Runs a script defined in the package's manifest file",
    args: {
      name: "Scripts",
      filterStrategy: "fuzzy",
      generators: npmScriptsGenerator,
      isVariadic: true,
    },
    options: [
      {
        name: ["-r", "--recursive"],
        description: `This runs an arbitrary command from each package's "scripts" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails`,
      },
      {
        name: "--if-present",
        description:
          "You can use the --if-present flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain",
      },
      {
        name: "--parallel",
        description:
          "Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process",
      },
      {
        name: "--stream",
        description:
          "Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved",
      },
      {
        name: ["-s", "--sequential"],
        description: "Run the specified scripts one by one",
      },
      {
        name: "--reporter-hide-prefix",
        description:
          "Hide workspace prefix from output from child processes that are run in parallel, and only print the raw output",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "exec",
    description: `Execute a shell command in scope of a project.
node_modules/.bin is added to the PATH, so pnpm exec allows executing commands of dependencies`,
    args: {
      name: "Scripts",
      filterStrategy: "fuzzy",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: [
      {
        name: ["-r", "--recursive"],
        description: `Execute the shell command in every project of the workspace.
The name of the current package is available through the environment variable PNPM_PACKAGE_NAME (supported from pnpm v2.22.0 onwards)`,
      },
      {
        name: "--parallel",
        description:
          "Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process",
      },
      {
        name: ["-c", "--shell-mode"],
        description:
          "Run the command inside of a shell. Uses /bin/sh on UNIX and cmd.exe on Windows",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "dlx",
    description: "Run a package in a temporary environment",
    args: {
      name: "command",
      generators: npmSearchGenerator,
      debounce: true,
    },
    options: [
      {
        name: "--package",
        description: "The package to install before running the command",
        isRepeatable: true,
        args: {
          name: "package",
          generators: npmSearchGenerator,
          debounce: true,
        },
      },
      {
        name: ["-c", "--shell-mode"],
        description:
          "Runs the command inside of a shell. Uses /bin/sh on UNIX and cmd.exe on Windows",
      },
      {
        name: "--allow-build",
        description:
          "A list of package names that are allowed to run postinstall scripts during installation",
        isRepeatable: true,
        args: { name: "package" },
      },
    ],
  },
  {
    name: "create",
    description: "Creates a project from a create-* starter kit",
    args: { name: "starter kit" },
    options: [
      {
        name: "--allow-build",
        description:
          "A list of package names that are allowed to run postinstall scripts during installation",
        isRepeatable: true,
        args: { name: "package" },
      },
    ],
  },
  {
    name: ["test", "t", "tst"],
    description: `Runs an arbitrary command specified in the package's test property of its scripts object.
The intended usage of the property is to specify a command that runs unit or integration testing for your program`,
  },
  {
    name: "start",
    description: `Runs an arbitrary command specified in the package's start property of its scripts object. If no start property is specified on the scripts object, it will attempt to run node server.js as a default, failing if neither are present.
The intended usage of the property is to specify a command that starts your program`,
  },
  {
    name: "stop",
    description: `Runs a package's "stop" script, if one was provided`,
  },
  {
    name: "restart",
    description: `Restarts a package. Runs "stop", "restart" (if present), and "start" scripts, and associated pre- and post- scripts`,
  },
];

const SUBCOMMANDS_REVIEW_DEPS: Fig.Subcommand[] = [
  {
    name: "audit",
    description: `Checks for known security issues with the installed packages.
If security issues are found, try to update your dependencies via pnpm update.
If a simple update does not fix all the issues, use overrides to force versions that are not vulnerable.
For instance, if lodash@<2.1.0 is vulnerable, use overrides to force lodash@^2.1.0.
Details at: https://pnpm.io/cli/audit`,
    options: [
      {
        name: "--audit-level",
        description: `Only print advisories with severity greater than or equal to <severity>`,
        args: {
          name: "Audit Level",
          default: "low",
          suggestions: ["low", "moderate", "high", "critical"],
        },
      },
      {
        name: "--fix",
        description:
          "Add overrides to the pnpm-workspace.yaml file in order to force non-vulnerable versions of the dependencies. Use --fix=update to update the vulnerable packages in the lockfile instead",
        requiresSeparator: true,
        args: {
          name: "method",
          isOptional: true,
          suggestions: ["override", "update"],
        },
      },
      {
        name: ["--interactive", "-i"],
        description:
          "Review the advisories selected by --fix and pick which ones to apply",
        dependsOn: ["--fix"],
      },
      {
        name: "--ignore",
        description: "Ignore a vulnerability by its GitHub advisory ID (GHSA)",
        isRepeatable: true,
        args: { name: "GHSA" },
      },
      {
        name: "--ignore-unfixable",
        description: "Ignore all advisories with no resolution",
      },
      {
        name: "--json",
        description: `Output audit report in JSON format`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only audit dev dependencies`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only audit production dependencies`,
      },
      {
        name: "--no-optional",
        description: `Don't audit optionalDependencies`,
      },
      {
        name: "--ignore-registry-errors",
        description: `If the registry responds with a non-200 status code, the process should exit with 0. So the process will fail only if the registry actually successfully responds with found vulnerabilities`,
      },
    ],
    subcommands: [
      {
        name: "signatures",
        description:
          "Verifies the ECDSA registry signatures of installed packages against the public keys published by each registry",
      },
    ],
  },
  {
    name: ["list", "ls"],
    description: `This command will output all the versions of packages that are installed, as well as their dependencies, in a tree-structure.
Positional arguments are name-pattern@version-range identifiers, which will limit the results to only the packages named. For example, pnpm list "babel-*" "eslint-*" semver@5`,
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace`,
      },
      {
        name: "--json",
        description: `Log output in JSON format`,
      },
      {
        name: "--long",
        description: `Show extended information`,
      },
      {
        name: "--parseable",
        description: `Outputs package directories in a parseable format instead of their tree view`,
      },
      {
        name: ["--global", "-g"],
        description: `List packages in the global install directory instead of in the current project`,
      },
      {
        name: "--depth",
        description: `Max display depth of the dependency tree.
pnpm ls --depth 0 will list direct dependencies only. pnpm ls --depth -1 will list projects only. Useful inside a workspace when used with the -r option`,
        args: { name: "number" },
      },
      {
        name: "--exclude-peers",
        description: `Exclude peer dependencies from the results (but dependencies of peer dependencies are not ignored)`,
      },
      {
        name: "--only-projects",
        description: `Display only dependencies that are also projects within the workspace`,
      },
      {
        name: "--lockfile-only",
        description: `List packages from the lockfile only, without checking node_modules`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only list dev dependencies`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only list production dependencies`,
      },
      {
        name: "--no-optional",
        description: `Don't list optionalDependencies`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "outdated",
    description: `Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)`,
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Check for outdated dependencies in every package found in subdirectories, or in every workspace package when executed inside a workspace`,
      },
      {
        name: "--long",
        description: `Print details`,
      },
      {
        name: ["--global", "-g"],
        description: `List outdated global packages`,
      },
      {
        name: "--format",
        description: `Prints the outdated dependencies in the given format`,
        args: {
          name: "format",
          suggestions: ["table", "list", "json"],
        },
      },
      {
        name: "--no-table",
        description: `Prints the outdated dependencies in a list format instead of the default table. Good for small consoles`,
      },
      {
        name: "--compatible",
        description: `Prints only versions that satisfy specifications in package.json`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only list dev dependencies`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only list production dependencies`,
      },
      {
        name: "--no-optional",
        description: `Doesn't check optionalDependencies`,
      },
    ],
  },
  {
    name: "why",
    description: `Shows all packages that depend on the specified package`,
    args: {
      name: "Scripts",
      filterStrategy: "fuzzy",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace`,
      },
      {
        name: "--json",
        description: `Log output in JSON format`,
      },
      {
        name: "--long",
        description: `Show verbose output`,
      },
      {
        name: "--parseable",
        description: `Show parseable output instead of tree view`,
      },
      {
        name: "--global",
        description: `List packages in the global install directory instead of in the current project`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only display the dependency tree for packages in devDependencies`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only display the dependency tree for packages in dependencies`,
      },
      {
        name: "--no-optional",
        description: `Don't display packages from optionalDependencies`,
      },
      {
        name: "--depth",
        description: `Display only dependencies within a specific depth`,
        args: { name: "number" },
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["licenses", "licences"],
    description: "Check the licenses of the installed packages",
    subcommands: [
      {
        name: "list",
        description: "List licenses for installed packages",
        options: [
          {
            name: ["--recursive", "-r"],
            description: `Run the command for every project in the workspace instead of only the current project`,
          },
          {
            name: "--json",
            description: `Output the information in JSON format`,
          },
          {
            name: "--long",
            description: `Show more details (such as a link to the repo)`,
          },
          {
            name: ["--dev", "-D"],
            description: `Only dependencies in devDependencies`,
          },
          {
            name: ["--prod", "-P"],
            description: `Only dependencies in dependencies and optionalDependencies`,
          },
          {
            name: "--no-optional",
            description: `Don't check optionalDependencies`,
          },
          FILTER_OPTION,
        ],
      },
    ],
  },
  {
    name: "peers",
    description: "Checks for unmet or missing peer dependency issues",
    subcommands: [
      {
        name: "check",
        description:
          "Checks for unmet and missing peer dependency issues by reading the lockfile",
        options: [
          {
            name: "--json",
            description: `Output the information in JSON format`,
          },
        ],
      },
    ],
  },
  {
    name: "sbom",
    description: "Generate a Software Bill of Materials (SBOM)",
    options: [
      {
        name: "--sbom-format",
        description: "The SBOM output format (required)",
        isRequired: true,
        args: {
          name: "format",
          suggestions: ["cyclonedx", "spdx"],
        },
      },
      {
        name: "--sbom-type",
        description: "The component type for the root package",
        args: { name: "type", default: "library" },
      },
      {
        name: "--out",
        description:
          "Write SBOM to a file instead of stdout. Use %s for the package name and %v for the version",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "--split",
        description:
          "Generate a separate SBOM for each matched workspace package",
      },
      {
        name: "--lockfile-only",
        description: "Only use lockfile data (skip reading from the store)",
      },
      {
        name: "--exclude-peers",
        description: "Exclude peer dependencies",
      },
      {
        name: ["--prod", "-P"],
        description: "Only include production dependencies",
      },
      {
        name: ["--dev", "-D"],
        description: "Only include dev dependencies",
      },
      {
        name: "--no-optional",
        description: "Exclude optional dependencies",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["view", "info", "show", "v"],
    description: "View registry information about a package",
    args: {
      name: "package",
      generators: npmSearchGenerator,
      debounce: true,
    },
    options: [
      {
        name: "--json",
        description: "Show information in JSON format",
      },
    ],
  },
];

const SUBCOMMANDS_MISC: Fig.Subcommand[] = [
  {
    name: "publish",
    description: `Publishes a package to the registry.
When publishing a package inside a workspace, the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own).
You may override some fields before publish, using the publishConfig field in package.json. You also can use the publishConfig.directory to customize the published subdirectory (usually using third party build tools).
When running this command recursively (pnpm -r publish), pnpm will publish all the packages that have versions not yet published to the registry`,
    args: {
      name: "Branch",
      generators: searchBranches,
    },
    options: [
      {
        name: "--tag",
        description: `Publishes the package with the given tag. By default, pnpm publish updates the latest tag`,
        args: {
          name: "<tag>",
        },
      },
      {
        name: "--dry-run",
        description: `Does everything a publish would do except actually publishing to the registry`,
      },
      {
        name: "--ignore-scripts",
        description: `Ignores any publish related lifecycle scripts (prepublishOnly, postpublish, and the like)`,
      },
      {
        name: "--no-git-checks",
        description: `Don't check if current branch is your publish branch, clean, and up-to-date`,
      },
      {
        name: "--access",
        description: `Tells the registry whether the published package should be public or restricted`,
        args: {
          name: "Type",
          suggestions: ["public", "restricted"],
        },
      },
      {
        name: "--force",
        description: `Try to publish packages even if their current version is already found in the registry`,
      },
      {
        name: "--report-summary",
        description: `Save the list of published packages to pnpm-publish-summary.json. Useful when some other tooling is used to report the list of published packages`,
      },
      {
        name: "--otp",
        description: `One-time password for two-factor-authenticated registries`,
        args: { name: "otp" },
      },
      {
        name: "--provenance",
        description: `Generate a provenance attestation for the published package`,
      },
      {
        name: "--publish-branch",
        description: `The branch publishing is allowed from. Defaults to master / main`,
        args: { name: "Branch", generators: searchBranches },
      },
      {
        name: "--json",
        description: `Print the per-package publish summary in JSON`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["recursive", "m", "multi", "-r"],
    description: `Runs a pnpm command recursively on all subdirectories in the package or every available workspace`,
    options: [
      {
        name: "--link-workspace-packages",
        description: `Link locally available packages in workspaces of a monorepo into node_modules instead of re-downloading them from the registry. This emulates functionality similar to yarn workspaces.
When this is set to deep, local packages can also be linked to subdependencies.
Be advised that it is encouraged instead to use npmrc for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary`,
        args: {
          name: "bool or `deep`",
          suggestions: ["true", "false", "deep"],
        },
      },
      {
        name: "--workspace-concurrency",
        description: `Set the maximum number of tasks to run simultaneously. For unlimited concurrency use Infinity`,
        args: { name: "<number>" },
      },
      {
        name: "--bail",
        description: `Stops when a task throws an error`,
      },
      {
        name: "--no-bail",
        description: `Don't stop when a task throws an error`,
      },
      {
        name: "--sort",
        description: `Packages are sorted topologically (dependencies before dependents)`,
      },
      {
        name: "--no-sort",
        description: `Disable packages sorting`,
      },
      {
        name: "--reverse",
        description: `The order of packages is reversed`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "server",
    description: `Manage a store server. Removed in pnpm v11 with no replacement`,
    deprecated: true,
    subcommands: [
      {
        name: "start",
        description:
          "Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server",
        options: [
          {
            name: "--background",
            description: `Runs the server in the background, similar to daemonizing on UNIX systems`,
          },
          {
            name: "--network-concurrency",
            description: `The maximum number of network requests to process simultaneously`,
            args: { name: "number" },
          },
          {
            name: "--protocol",
            description: `The communication protocol used by the server. When this is set to auto, IPC is used on all systems except for Windows, which uses TCP`,
            args: {
              name: "Type",
              suggestions: ["auto", "tcp", "ipc"],
            },
          },
          {
            name: "--port",
            description: `The port number to use when TCP is used for communication. If a port is specified and the protocol is set to auto, regardless of system type, the protocol is automatically set to use TCP`,
            args: { name: "port number" },
          },
          {
            name: "--store-dir",
            description: `The directory to use for the content addressable store`,
            args: { name: "Path", template: "filepaths" },
          },
          {
            name: "--lock",
            description: `Set to make the package store immutable to external processes while the server is running or not`,
          },
          {
            name: "--no-lock",
            description: `Set to make the package store mutable to external processes while the server is running or not`,
          },
          {
            name: "--ignore-stop-requests",
            description: `Prevents you from stopping the server using pnpm server stop`,
          },
          {
            name: "--ignore-upload-requests",
            description: `Prevents creating a new side effect cache during install`,
          },
        ],
      },
      {
        name: "stop",
        description: "Stops the store server",
      },
      {
        name: "status",
        description: "Prints information about the running server",
      },
    ],
  },
  {
    name: "store",
    description: "Managing the package store",
    subcommands: [
      {
        name: "status",
        description: `Checks for modified packages in the store.
Returns exit code 0 if the content of the package is the same as it was at the time of unpacking`,
      },
      {
        name: "add",
        description: `Functionally equivalent to pnpm add,
except this adds new packages to the store directly without modifying any projects or files outside of the store`,
      },
      {
        name: "prune",
        description: `Removes orphan packages from the store.
Pruning the store will save disk space, however may slow down future installations involving pruned packages.
Ultimately, it is a safe operation, however not recommended if you have orphaned packages from a package you intend to reinstall.
Please read the FAQ for more information on unreferenced packages and best practices.
Please note that this is prohibited when a store server is running`,
      },
      {
        name: "path",
        description: `Returns the path to the active store directory`,
      },
    ],
  },
  {
    name: "init",
    description:
      "Creates a basic package.json file in the current directory, if it doesn't exist already",
    options: [
      {
        name: "--bare",
        description:
          "Create a package.json file with the bare minimum of required fields",
      },
      {
        name: "--init-type",
        description: `Set the module system for the package. Defaults to "module"`,
        args: {
          name: "type",
          suggestions: ["commonjs", "module"],
        },
      },
      {
        name: "--init-package-manager",
        description:
          "Pin the latest pnpm version in package.json, through devEngines.packageManager and packageManager",
      },
    ],
  },
  {
    name: "doctor",
    description: "Checks for known common issues with pnpm configuration",
  },
  {
    name: "self-update",
    description: "Updates pnpm to the latest version (or the one specified)",
    args: { name: "version", isOptional: true },
  },
  {
    name: ["runtime", "rt"],
    description: "Manage runtimes",
    subcommands: [
      {
        name: "set",
        description:
          "Installs the specified version of a runtime (e.g. node, deno, bun)",
        args: [
          { name: "name", suggestions: ["node", "deno", "bun"] },
          {
            name: "version",
            suggestions: ["lts", "latest", "nightly", "rc"],
          },
        ],
        options: [
          {
            name: ["--global", "-g"],
            description: "Installs the runtime globally",
          },
        ],
      },
    ],
  },
  {
    name: "env",
    description:
      "Manage Node.js versions. Deprecated in favour of pnpm runtime",
    deprecated: true,
  },
  {
    name: "with",
    description: `Runs pnpm at a specific version (or the currently running one) for a single invocation, ignoring the "packageManager" and "devEngines.packageManager" fields of the project's manifest`,
    args: [
      { name: "version", suggestions: ["current", "next"] },
      { name: "pnpm args", isOptional: true, isVariadic: true },
    ],
  },
  {
    name: "setup",
    description: "Sets up pnpm",
    options: [
      {
        name: ["--force", "-f"],
        description:
          "Override the PNPM_HOME env variable in case it already exists",
      },
    ],
  },
  {
    name: "bin",
    description: "Print the directory where pnpm will install executables",
    options: [
      {
        name: ["--global", "-g"],
        description: "Print the global executables directory",
      },
    ],
  },
  {
    name: "root",
    description: "Print the effective node_modules directory",
    options: [
      {
        name: ["--global", "-g"],
        description: "Print the global packages directory",
      },
    ],
  },
  {
    name: "prefix",
    description: "Print the current package prefix",
  },
  {
    name: ["config", "c"],
    description: "Manage the pnpm configuration files",
    subcommands: [
      {
        name: "set",
        description: "Set the config key to the value provided",
        args: [{ name: "key" }, { name: "value" }],
      },
      {
        name: "get",
        description: "Print the config value for the provided key",
        args: { name: "key" },
      },
      {
        name: "delete",
        description: "Remove the config key from the config file",
        args: { name: "key" },
      },
      {
        name: "list",
        description: "Show all the config settings",
      },
    ],
    options: [
      {
        name: ["--global", "-g"],
        description: "Operate on the global config file",
      },
      {
        name: "--location",
        description: "Which config to read or write",
        args: {
          name: "location",
          suggestions: ["project", "global"],
        },
      },
      {
        name: "--json",
        description:
          "Show all types of values in JSON format (not just objects and arrays)",
      },
    ],
  },
  {
    name: "get",
    description:
      "Print the config value for the provided key. Shorthand for pnpm config get",
    args: { name: "key" },
  },
  {
    name: "set",
    description:
      "Set the config key to the value provided. Shorthand for pnpm config set",
    args: [{ name: "key" }, { name: "value" }],
  },
  {
    name: "pkg",
    description: "Manages your package.json",
  },
  {
    name: ["set-script", "ss"],
    description: "Set a script in package.json",
  },
  {
    name: "cache",
    description: "Inspect and manage the metadata cache",
    subcommands: [
      {
        name: "list",
        description:
          "Lists the available packages metadata cache. Supports filtering by glob",
      },
      {
        name: "list-registries",
        description:
          "Lists all registries that have their metadata cache locally",
      },
      {
        name: "path",
        description: "Prints the path to the cache directory",
      },
      {
        name: "view",
        description: "Views information from the specified package's cache",
        args: { name: "package" },
      },
      {
        name: "delete",
        description:
          "Deletes metadata cache for the specified packages. Supports patterns",
        args: { name: "package", isVariadic: true },
      },
      {
        name: "prune",
        description:
          "Deletes registry metadata cache directories that this version of pnpm can no longer read",
      },
    ],
  },
  {
    name: "pack",
    description: "Create a tarball from a package",
    options: [
      {
        name: "--dry-run",
        description:
          "Do everything pack would do except writing the tarball to disk",
      },
      {
        name: "--pack-destination",
        description: "Directory in which to save the tarball",
        args: { name: "dir", template: "folders" },
      },
      {
        name: "--out",
        description:
          "Customize the output path. %s expands to the package name and %v to the version",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--json",
        description: "Print the packed tarball and its contents in JSON",
      },
    ],
  },
  {
    name: "stage",
    description:
      "Stage packages for publishing, deferring proof-of-presence (2FA) to a later point in time",
  },
  {
    name: "change",
    description:
      "Record a change intent: which packages a change affects, the bump type for each, and a summary that becomes the changelog entry",
    options: [
      {
        name: "--bump",
        description: "Bump type for the named packages",
        args: {
          name: "type",
          suggestions: ["none", "patch", "minor", "major"],
        },
      },
      {
        name: "--summary",
        description: "The summary for the changelog entry",
        args: { name: "summary" },
      },
    ],
  },
  {
    name: "version",
    description: "Apply the pending change intents",
  },
  {
    name: "lane",
    description: "Manage per-package release lanes",
  },
  {
    name: "pipeline",
    description:
      "Runs a named pipeline of workspace tasks the way a CI run would",
    args: { name: "name", isOptional: true },
  },
  {
    name: "tasks",
    description: "Inspect tasks in concurrency groups",
    subcommands: [
      {
        name: "status",
        description: "Show running and waiting tasks in concurrency groups",
      },
    ],
  },
  {
    name: "permissions",
    description:
      "Review what dependencies may do: run build scripts and provide agent skills",
    subcommands: [
      {
        name: "approve",
        description:
          "Approve or deny what the dependencies awaiting approval may do",
      },
      {
        name: ["list", "ls"],
        description:
          "List the decisions in pnpm-workspace.yaml and what awaits approval",
      },
    ],
  },
  {
    name: "approve",
    description:
      "Approve or deny what dependencies may do. Same as pnpm permissions approve",
  },
  {
    name: "shim",
    description:
      "Manage context-aware shims for packages that are not installed globally, so a project decides which version runs",
  },
  {
    name: "pack-app",
    description:
      "Pack a CommonJS entry file into a standalone executable for one or more target platforms",
  },
  {
    name: "pm",
    description:
      "Runs the built-in pnpm command even when a package.json script with the same name exists",
  },
  {
    name: "find-hash",
    description:
      "Lists the packages that include the file with the specified hash",
    args: { name: "hash" },
  },
  {
    name: "cat-file",
    description:
      "Prints the contents of a file based on the hash value stored in the index file",
    args: { name: "hash" },
  },
  {
    name: "cat-index",
    description: "Prints the index file of a specific package from the store",
    args: { name: "package" },
  },
  {
    name: ["login", "adduser"],
    description: "Log in to an npm registry",
    options: [
      {
        name: "--scope",
        description: "Associate the login token with a package scope",
        args: { name: "scope" },
      },
    ],
  },
  {
    name: "logout",
    description: "Log out of an npm registry",
  },
  {
    name: "whoami",
    description: "Displays your pnpm username",
  },
  {
    name: ["dist-tag", "dist-tags"],
    description: "Manage a package's distribution tags",
    subcommands: [
      {
        name: "add",
        description: "Tags the specified version of the package",
        args: [{ name: "package@version" }, { name: "tag", isOptional: true }],
      },
      {
        name: "rm",
        description: "Removes a tag from the package",
        args: [{ name: "package" }, { name: "tag" }],
      },
      {
        name: "ls",
        description: "Lists the distribution tags of the package",
        args: { name: "package", isOptional: true },
      },
    ],
  },
  {
    name: "deprecate",
    description: "Deprecates a version of a package in the registry",
    args: [{ name: "package@version" }, { name: "message" }],
  },
  {
    name: "undeprecate",
    description:
      "Removes deprecation from a version of a package in the registry",
    args: { name: "package@version" },
  },
  {
    name: "unpublish",
    description: "Removes a package from the registry",
    args: { name: "package@version", isOptional: true },
    options: [
      {
        name: "--force",
        description:
          "Removes the package from the registry regardless of what version is currently published",
      },
    ],
  },
  {
    name: ["search", "s", "se", "find"],
    description: "Search for packages in the registry",
    args: { name: "query", isVariadic: true },
    options: [
      {
        name: "--json",
        description: "Show search results in JSON format",
      },
    ],
  },
  {
    name: ["docs", "home"],
    description: "Opens the documentation of a package in the browser",
    args: {
      name: "package",
      generators: npmSearchGenerator,
      debounce: true,
    },
  },
  {
    name: "repo",
    description: "Opens the URL of the package's repository in a browser",
    args: {
      name: "package",
      generators: npmSearchGenerator,
      debounce: true,
    },
  },
  {
    name: ["bugs", "issues"],
    description:
      "Opens the bug tracker URL of a package in the default browser",
    args: {
      name: "package",
      generators: npmSearchGenerator,
      debounce: true,
    },
  },
  {
    name: ["owner", "owners"],
    description: "Manage package owners on the registry",
  },
  {
    name: "access",
    description: "Manage package access and visibility on the registry",
  },
  {
    name: "team",
    description: "Manage organization teams and team memberships",
  },
  {
    name: "token",
    description: "Manage authentication tokens on the registry",
  },
  {
    name: "profile",
    description: "Change settings on your registry profile",
  },
  {
    name: "star",
    description: "Marks a package as a favorite",
    args: { name: "package" },
  },
  {
    name: "unstar",
    description: "Unmarks a package as a favorite",
    args: { name: "package" },
  },
  {
    name: "stars",
    description: "Lists all packages starred by a specific user",
    args: { name: "username", isOptional: true },
  },
  {
    name: "ping",
    description: "Test connectivity to the configured registry",
  },
  {
    name: "completion",
    description: "Print shell completion code to stdout",
    args: {
      name: "shell",
      suggestions: ["bash", "fish", "pwsh", "zsh"],
    },
  },
];

const subcommands = [
  ...SUBCOMMANDS_MANAGE_DEPENDENCIES,
  ...SUBCOMMANDS_REVIEW_DEPS,
  ...SUBCOMMANDS_RUN_SCRIPTS,
  ...SUBCOMMANDS_MISC,
];

const recursiveSubcommandsNames = [
  "add",
  "exec",
  "install",
  "list",
  "outdated",
  "publish",
  "rebuild",
  "remove",
  "run",
  "test",
  "unlink",
  "update",
  "why",
];

const recursiveSubcommands = subcommands.filter((subcommand) => {
  if (Array.isArray(subcommand.name)) {
    return subcommand.name.some((name) =>
      recursiveSubcommandsNames.includes(name)
    );
  }
  return recursiveSubcommandsNames.includes(subcommand.name);
});

// RECURSIVE SUBCOMMAND INDEX
SUBCOMMANDS_MISC[1].subcommands = recursiveSubcommands;

// common options
const COMMON_OPTIONS: Fig.Option[] = [
  {
    name: ["-C", "--dir"],
    args: {
      name: "path",
      template: "folders",
    },
    isPersistent: true,
    description:
      "Run as if pnpm was started in <path> instead of the current working directory",
  },
  {
    name: ["-w", "--workspace-root"],
    isPersistent: true,
    description: "Run the command on the root workspace project",
  },
  { ...FILTER_OPTION, isPersistent: true },
  {
    name: "--filter-prod",
    args: { name: "pattern" },
    isPersistent: true,
    description:
      "Like --filter, but follow only production dependencies when selecting projects",
  },
  {
    name: "--ignore-workspace",
    isPersistent: true,
    description:
      "Run as if the project were standalone, ignoring any pnpm-workspace.yaml above it",
  },
  {
    name: "--env-file",
    args: { name: "path", template: "filepaths" },
    isPersistent: true,
    isRepeatable: true,
    description:
      "Load environment variables from a dotenv-style file before running",
  },
  {
    name: "--loglevel",
    args: {
      name: "level",
      suggestions: ["silent", "error", "warn", "info", "debug"],
    },
    isPersistent: true,
    description: "What level of logs to print",
  },
  {
    name: ["-y", "--yes"],
    isPersistent: true,
    description: "Automatically answer yes to prompts",
  },
  {
    name: ["-h", "--help"],
    isPersistent: true,
    description: "Output usage information",
  },
  {
    name: ["-v", "--version"],
    description: "Show pnpm's version",
  },
];

// SPEC
const completionSpec: Fig.Spec = {
  name: "pnpm",
  description: "Fast, disk space efficient package manager",
  args: {
    name: "Scripts",
    filterStrategy: "fuzzy",
    generators: npmScriptsGenerator,
    isVariadic: true,
  },
  filterStrategy: "fuzzy",
  generateSpec: async (tokens, executeShellCommand) => {
    const { script, postProcess } = dependenciesGenerator as Fig.Generator & {
      script: string[];
    };

    if (postProcess === undefined) {
      return undefined;
    }

    const packages = postProcess(
      (
        await executeShellCommand({
          command: script[0],
          args: script.slice(1),
        })
      ).stdout,
      tokens
    )
      ?.filter((e) => e !== null)
      .map(({ name }) => name as string);

    const subcommands = packages
      ?.filter((name) => nodeClis.has(name))
      .map((name) => ({
        name,
        loadSpec: name,
        icon: "fig://icon?type=package",
      }));

    return {
      name: "pnpm",
      subcommands,
    } as Fig.Spec;
  },
  subcommands,
  options: COMMON_OPTIONS,
};

export default completionSpec;
